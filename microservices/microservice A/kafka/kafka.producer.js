const {producer} = require('./kafka.config');

module.exports = async(data)=>{
    try {
        await producer.connect();
        await producer.send({
          topic: "messages-topic",
          messages: [
            {
              value: data,
            },
          ],
        });
        console.log("Response sent to Kafka messages topic : ", data);
      } catch (error) {
        console.error("Error sending to Kafka message in messages-topic : ", error);
      } finally {
        await producer.disconnect();
      }
}