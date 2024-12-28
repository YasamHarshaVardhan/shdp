// Function to encode message in Base64
function encodeMessage(message) {
  return btoa(message);  // btoa() encodes the message in Base64
}

// Function to decode message from Base64
function decodeMessage(encodedMessage) {
  return atob(encodedMessage);  // atob() decodes the Base64 message
}

// Listen for "You" form submission (user's message)
document.getElementById('userForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const chatBox = document.getElementById('chatBox');
  const userMessageInput = document.getElementById('userMessage');
  const message = userMessageInput.value.trim();

  if (message) {
    // Encode the message before sending
    const encodedMessage = encodeMessage(message);

    // Add new message from "You"
    const newMessageSelf = document.createElement('div');
    newMessageSelf.classList.add('message', 'self');
    newMessageSelf.innerHTML = `<span class="message-text">${encodedMessage}</span>`;

    // Add event listener for toggling encoding/decoding
    newMessageSelf.addEventListener('click', function() {
      if (newMessageSelf.classList.contains('encoded')) {
        // Decode the message when it's clicked
        newMessageSelf.classList.remove('encoded');
        newMessageSelf.innerHTML = `<span class="message-text">${decodeMessage(encodedMessage)}</span>`;
      } else {
        // Re-encode the message when it's clicked again
        newMessageSelf.classList.add('encoded');
        newMessageSelf.innerHTML = `<span class="message-text">${encodedMessage}</span>`;
      }
    });

    chatBox.appendChild(newMessageSelf);

    // Scroll to the bottom of the chat
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear the input
    userMessageInput.value = '';
  }
});

// Listen for "Other User" form submission (other user's message)
document.getElementById('otherForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const chatBox = document.getElementById('chatBox');
  const otherMessageInput = document.getElementById('otherMessage');
  const message = otherMessageInput.value.trim();

  if (message) {
    // Encode the message before sending
    const encodedMessage = encodeMessage(message);

    // Add new message from "Other User"
    const newMessageOther = document.createElement('div');
    newMessageOther.classList.add('message', 'other');
    newMessageOther.innerHTML = `<span class="message-text">${encodedMessage}</span>`;

    // Add event listener for toggling encoding/decoding
    newMessageOther.addEventListener('click', function() {
      if (newMessageOther.classList.contains('encoded')) {
        // Decode the message when it's clicked
        newMessageOther.classList.remove('encoded');
        newMessageOther.innerHTML = `<span class="message-text">${decodeMessage(encodedMessage)}</span>`;
      } else {
        // Re-encode the message when it's clicked again
        newMessageOther.classList.add('encoded');
        newMessageOther.innerHTML = `<span class="message-text">${encodedMessage}</span>`;
      }
    });

    chatBox.appendChild(newMessageOther);

    // Scroll to the bottom of the chat
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear the input
    otherMessageInput.value = '';
  }
});

