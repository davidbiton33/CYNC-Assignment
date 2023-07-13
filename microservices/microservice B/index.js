const connection = require("./database/database.config");
const consumerMessagesTopic = require("./kafka/kafka.consumer");
const express = require("express");
const app = express();
const port = 4000;

// Start the microservices
app.listen(port, async () => {
  console.log(`Microservice B listening at http://localhost:${port}`);

  // connect to DB
  await connection();

  // consume from kafka messages topic
  consumerMessagesTopic();
});
