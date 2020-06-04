import Notification from './notification.js'

let messageInstance;

function getMessageInstance () {
  messageInstance = messageInstance || Notification.newInstance();
  return messageInstance;
}

function notice ({ duration = 2, content = '', type = 'info' }) {
  let instance = getMessageInstance();

  instance.add({
    content: content,
    duration: duration,
    type: type
  });
}

export default {
  show (options) {
    return notice(options);
  }
}