# Full Stack Developer Assignment

Welcome to my Full Stack Developer Assignment repository!

This project involves the development of two microservices that communicate with each other using messaging queues, along with a client application that interacts with the microservices via WEBSocket.
This project developed with development enviroment on Windows PC


## Stack

The project utilizes the following technologies and frameworks:

- Node.js
- Express.js
- MongoDB
- React
- Message Queue (Kafka)


## Prerequisites

Before you proceed, ensure you have the following installed on your machine:

- MongoDB server localy
- Node.js installed
- JAVA installed (for Kafka server)
- Kafka server run localy
- Kafka zookeeper loclay
- Created Kafka Topics : messages-topic, responses-topic


## Dependencies

client :
- socket.io-client

microservice a : 
- express
- kafkajs
- socket.io
- uuid

microservice b : 
- express
- kafkajs
- mongoose
- uuid

  

## Installation and Setup

1. Clone the repository: `https://github.com/davidbiton33/CYNC-Assignment.git`
2. Install dependencies:
   - Navigate to the client directory.
   - Run `npm install` to install the client-side dependencies.
   - Go to the microservice a directory using "cd `microservice a`" and run `npm install` to install the microservice a dependencies.
   - Go to the microservice b directory using "cd `microservice b`" and run `npm install` to install the microservice b dependencies.
3. Start the microservices and the client application:
   - Run `npm start` in the client directory to start the client app.
   - Run `npm start` in the microservice a directory to start the microservice a.
   - Run `npm start` in the microservice b directory to start the microservice b.
4. Access the client application:
   - Open your browser and navigate to `http://localhost:5173` to access the client application.



## Demo

You will see in the client application - 

### First : 
![image](https://github.com/davidbiton33/CYNC-Assignment/assets/52914672/35520bb4-8047-4e2e-bb47-b952aba24c3e)

### When you write:
![image](https://github.com/davidbiton33/CYNC-Assignment/assets/52914672/ceab3fa1-1447-4bef-ad32-2f3580fc0660)

### After response : 
![image](https://github.com/davidbiton33/CYNC-Assignment/assets/52914672/a0697c44-f7f8-4ff5-aa4a-55f1173b2ff2)






## Code Structure

The project codebase follows a modular and organized structure:

- `microservice-a/` - Contains the code for Microservice A.
  - `index.js` - Main file for Microservice A.
  - `kafka/` - Contains the Kafka-related configuration and producer code.
- `microservice-b/` - Contains the code for Microservice B.
  - `index.js` - Main file for Microservice B.
  - `database/` - Contains the database configuration and query code.
  - `kafka/` - Contains the Kafka-related configuration producer and consumer code.
- `client/` - Contains the client application code.
  - `src/` - Contains the source code for the client application.
  - `App.jsx` - Main file for the client application.
 
