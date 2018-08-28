const PubSub = {
  // Take data and triggers an event
  publish: function (channel, payload) {
    const event = new CustomEvent(channel, {
      detail: payload
    });
    document.dispatchEvent(event);
  },
  // Listens to channels, as soon as something is published it runs the callback
  subscribe: function (channel, callback) {
    document.addEventListener(channel, callback)
  }
};

module.exports = PubSub;
