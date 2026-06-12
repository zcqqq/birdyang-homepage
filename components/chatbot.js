function renderChatbot(opts) {
  opts = opts || {};
  var lang = opts.lang || 'en';

  var STYLES = '\
.by-chat-bubble{position:fixed;bottom:24px;right:24px;width:56px;height:56px;border-radius:50%;background:#c5851e;cursor:pointer;z-index:9999;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,0.25);transition:transform 0.2s,box-shadow 0.2s}\
.by-chat-bubble:hover{transform:scale(1.08);box-shadow:0 6px 24px rgba(0,0,0,0.3)}\
.by-chat-bubble svg{width:28px;height:28px;fill:#fff}\
.by-chat-panel{position:fixed;bottom:92px;right:24px;width:380px;height:520px;background:#f8f5f0;border-radius:12px;box-shadow:0 8px 40px rgba(0,0,0,0.2);z-index:9999;display:none;flex-direction:column;overflow:hidden;font-family:Verdana,Geneva,sans-serif}\
.by-chat-panel.active{display:flex}\
.by-chat-header{background:#070e1a;color:#fff;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}\
.by-chat-header h4{margin:0;font-size:0.9rem;font-weight:600}\
.by-chat-close{background:none;border:none;color:#fff;font-size:1.3rem;cursor:pointer;padding:0 4px;line-height:1}\
.by-chat-messages{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px}\
.by-chat-msg{max-width:85%;padding:10px 14px;border-radius:8px;font-size:0.82rem;line-height:1.5;word-wrap:break-word}\
.by-chat-msg.bot{background:#fff;color:#222;align-self:flex-start;border:1px solid #e5e0d8}\
.by-chat-msg.user{background:#01308a;color:#fff;align-self:flex-end}\
.by-chat-msg.typing{background:#fff;border:1px solid #e5e0d8;align-self:flex-start;padding:12px 18px}\
.by-chat-dots{display:flex;gap:4px}\
.by-chat-dots span{width:6px;height:6px;border-radius:50%;background:#999;animation:byDotPulse 1.2s infinite}\
.by-chat-dots span:nth-child(2){animation-delay:0.2s}\
.by-chat-dots span:nth-child(3){animation-delay:0.4s}\
@keyframes byDotPulse{0%,80%,100%{opacity:0.3}40%{opacity:1}}\
.by-chat-suggestions{display:flex;flex-direction:column;gap:8px;margin-top:4px}\
.by-chat-suggestion{background:#fff;border:1px solid #c5851e;border-radius:6px;padding:10px 12px;font-size:0.78rem;cursor:pointer;text-align:left;color:#333;transition:background 0.15s}\
.by-chat-suggestion:hover{background:#fdf6ed}\
.by-chat-none-btn{background:none;border:1px solid #ccc;border-radius:6px;padding:8px 12px;font-size:0.76rem;cursor:pointer;color:#666;margin-top:4px;transition:background 0.15s}\
.by-chat-none-btn:hover{background:#f0ede8}\
.by-chat-handoff{background:#fef9f3;border:1px solid #c5851e;border-radius:8px;padding:12px 14px;font-size:0.8rem;line-height:1.5}\
.by-chat-handoff a{color:#01308a;font-weight:600;text-decoration:underline}\
.by-chat-input{display:flex;gap:8px;padding:12px 16px;border-top:1px solid #e5e0d8;background:#fff;flex-shrink:0}\
.by-chat-input input{flex:1;border:1px solid #ddd;border-radius:6px;padding:10px 12px;font-size:0.82rem;font-family:inherit;outline:none}\
.by-chat-input input:focus{border-color:#01308a}\
.by-chat-input button{background:#c5851e;color:#fff;border:none;border-radius:6px;padding:10px 14px;cursor:pointer;font-size:0.82rem;font-weight:600;transition:background 0.15s}\
.by-chat-input button:hover{background:#a8701a}\
.by-chat-input button:disabled{background:#ccc;cursor:not-allowed}\
@media(max-width:480px){\
.by-chat-panel{bottom:0;right:0;left:0;width:100%;height:85vh;border-radius:12px 12px 0 0}\
.by-chat-bubble{bottom:16px;right:16px}\
}';

  var style = document.createElement('style');
  style.textContent = STYLES;
  document.head.appendChild(style);

  var container = document.createElement('div');
  container.id = 'by-chatbot';
  container.innerHTML = '\
<div class="by-chat-bubble" id="by-chat-trigger" aria-label="Open chat" role="button" tabindex="0">\
<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z"/></svg>\
</div>\
<div class="by-chat-panel" id="by-chat-panel" role="dialog" aria-label="Chat with Bird and Yang">\
<div class="by-chat-header">\
<h4>Ask Bird & Yang</h4>\
<button class="by-chat-close" id="by-chat-close" aria-label="Close chat">&times;</button>\
</div>\
<div class="by-chat-messages" id="by-chat-messages"></div>\
<div class="by-chat-input">\
<input type="text" id="by-chat-input" placeholder="Type your question..." aria-label="Type your question">\
<button id="by-chat-send">Send</button>\
</div>\
</div>';
  document.body.appendChild(container);

  var trigger = document.getElementById('by-chat-trigger');
  var panel = document.getElementById('by-chat-panel');
  var closeBtn = document.getElementById('by-chat-close');
  var messagesEl = document.getElementById('by-chat-messages');
  var inputEl = document.getElementById('by-chat-input');
  var sendBtn = document.getElementById('by-chat-send');
  var isOpen = false;
  var isLoading = false;

  var greeting = 'Hi! I can answer general questions about Bird & Yang\'s services. How can I help?';

  function openChat() {
    panel.classList.add('active');
    trigger.style.display = 'none';
    isOpen = true;
    inputEl.focus();
    if (messagesEl.children.length === 0) {
      addMessage(greeting, 'bot');
    }
  }

  function closeChat() {
    panel.classList.remove('active');
    trigger.style.display = 'flex';
    isOpen = false;
  }

  trigger.addEventListener('click', openChat);
  trigger.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openChat(); }
  });
  closeBtn.addEventListener('click', closeChat);

  function addMessage(text, type) {
    var msg = document.createElement('div');
    msg.className = 'by-chat-msg ' + type;
    msg.textContent = text;
    messagesEl.appendChild(msg);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return msg;
  }

  function addHtml(html, type) {
    var msg = document.createElement('div');
    msg.className = 'by-chat-msg ' + type;
    msg.innerHTML = html;
    messagesEl.appendChild(msg);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return msg;
  }

  function showTyping() {
    var msg = document.createElement('div');
    msg.className = 'by-chat-msg typing';
    msg.innerHTML = '<div class="by-chat-dots"><span></span><span></span><span></span></div>';
    msg.id = 'by-chat-typing';
    messagesEl.appendChild(msg);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function hideTyping() {
    var el = document.getElementById('by-chat-typing');
    if (el) el.remove();
  }

  function showSuggestions(matches) {
    var wrapper = document.createElement('div');
    wrapper.className = 'by-chat-msg bot';
    var html = '<div style="margin-bottom:8px;font-size:0.8rem;">I found some related questions. Did you mean one of these?</div>';
    html += '<div class="by-chat-suggestions">';
    matches.forEach(function(m) {
      html += '<button class="by-chat-suggestion" data-id="' + m.id + '">' + escapeHtml(m.question) + '</button>';
    });
    html += '</div>';
    html += '<button class="by-chat-none-btn" id="by-chat-none">None of these</button>';
    wrapper.innerHTML = html;
    messagesEl.appendChild(wrapper);
    messagesEl.scrollTop = messagesEl.scrollHeight;

    wrapper.querySelectorAll('.by-chat-suggestion').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var id = this.getAttribute('data-id');
        var match = matches.find(function(m) { return m.id === id; });
        if (match) {
          addMessage(match.question, 'user');
          addMessage(match.answer, 'bot');
        }
        wrapper.querySelectorAll('button').forEach(function(b) { b.disabled = true; b.style.opacity = '0.5'; });
      });
    });

    var noneBtn = wrapper.querySelector('#by-chat-none');
    if (noneBtn) {
      noneBtn.addEventListener('click', function() {
        showHandoff();
        wrapper.querySelectorAll('button').forEach(function(b) { b.disabled = true; b.style.opacity = '0.5'; });
      });
    }
  }

  function showHandoff() {
    var contactUrl = lang === 'zh' ? '/zh/contact.html#book' : '/contact.html#book';
    var msg = document.createElement('div');
    msg.className = 'by-chat-handoff';
    msg.innerHTML = 'This question needs tailored professional review. Please <a href="' + contactUrl + '">book a consultation</a> or email us at <a href="mailto:info@birdyang.co.nz">info@birdyang.co.nz</a>.';
    messagesEl.appendChild(msg);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  async function sendQuery(text) {
    if (isLoading) return;
    isLoading = true;
    sendBtn.disabled = true;

    addMessage(text, 'user');
    showTyping();

    try {
      var resp = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: text })
      });
      var data = await resp.json();
      hideTyping();

      if (!data.success) {
        addMessage('Sorry, something went wrong. Please try again.', 'bot');
        return;
      }

      if (data.type === 'match') {
        addMessage(data.matches[0].answer, 'bot');
      } else if (data.type === 'suggestions') {
        showSuggestions(data.matches);
      } else {
        showHandoff();
      }
    } catch (err) {
      hideTyping();
      addMessage('Sorry, I could not connect. Please try again later.', 'bot');
    } finally {
      isLoading = false;
      sendBtn.disabled = false;
    }
  }

  sendBtn.addEventListener('click', function() {
    var text = inputEl.value.trim();
    if (text) {
      inputEl.value = '';
      sendQuery(text);
    }
  });

  inputEl.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      var text = inputEl.value.trim();
      if (text) {
        inputEl.value = '';
        sendQuery(text);
      }
    }
  });

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
}
