const { PubSub, SubscriptionManager } = require('graphql-subscriptions');
const schema = require('./schema');

const pubsub = new PubSub();
const subscriptionManager = new SubscriptionManager({
  schema,
  pubsub,
});

module.exports = { subscriptionManager, pubsub };
