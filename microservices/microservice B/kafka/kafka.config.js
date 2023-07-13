const { v4: uuid } = require("uuid");
const { Kafka, logLevel } = require("kafkajs");
// Kafka configuration
const clientKafka = new Kafka({
  brokers: ["localhost:9092"],
  logLevel: logLevel.ERROR,
});

module.exports.producer = clientKafka.producer();
module.exports.consumer = clientKafka.consumer({
  groupId: `topic-group-${uuid()}`,
});
