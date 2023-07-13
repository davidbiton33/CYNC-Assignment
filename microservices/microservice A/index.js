const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = 3000;
const { consumer } = require("./kafka/kafka.config");
const produceFunction = require("./kafka/kafka.producer");

let existsSocket;

io.on("connection", (socket) => {
  console.log("New connection from client");

  existsSocket = socket;

  // Handle 'message' event from the client
  socket.on("new-message-from-client", async (data) => {
    produceFunction(data);
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const consumerResponsesTopic = async () => {
  console.log("Consumer for responses-topic running");

  await consumer.connect();
  await consumer.subscribe({ topic: "responses-topic" });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(
        "Received message from Kafka in responses-topic : ",
        message.value.toString()
      );

      existsSocket.emit(
        "send-response-to-the-client",
        message.value.toString()
      );
    },
  });
};

server.listen(port, () => {
  console.log(`Microservice A listening at http://localhost:${port}`);

  consumerResponsesTopic();
});
