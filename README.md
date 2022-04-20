# Simple RabbitMQ pipeline

## RabbitMQ
The RabbitMQ is a messaging broker that is used to distribute messages between applications. In this project, we use a container installation of it by the docker-compose.yaml file.
To run the RabbitMQ container you need to run the following command:
```
docker-compose up -d
```

## Producer
The producer is a simple application that sends messages to the RabbitMQ.
To run the producer you need to run the following command:
```
cd producer;
npm start;
```

## Consumer
The consumer is a simple application that receives messages from the RabbitMQ.
To run the consumer you need to run the following command:
```
cd consumer;
npm start;
```