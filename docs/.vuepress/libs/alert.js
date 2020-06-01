import Notification from './notification.js'

let messageInstance;

function getMessageInstance () {
  messageInstance = messageInstance || Notification.newInstance();
  return messageInstance;
}

function notice ({ duration = 2, content = '' }) {
  let instance = getMessageInstance();

  instance.add({
    content: content,
    duration: duration
  });
}

export default {
  showMessage (options) {
    return notice(options);
  }
}