/**
 * Message the service worker and handle the response.
 */
export default message => new Promise((resolve, reject) => {
  const messageChannel = new MessageChannel();
  messageChannel.port1.onmessage = (event) => {
    if (event.data.error) {
      reject(event.data.error);
    } else {
      resolve(event.data);
    }
  };
  navigator.serviceWorker.controller.postMessage(message, [messageChannel.port2]);
});
