const amqp = require("amqplib");

const queue = "hello";

const openConnection = async () => {
  const open = await amqp.connect("amqp://localhost");

  return open;
};

const openChannel = async (open) => {
  const channel = await open.createChannel();

  channel.assertQueue(queue, {
    durable: false,
  });

  return channel;
};

const exec = async () => {
  const open = await openConnection();
  const channel = await openChannel(open);

  //you can change the message to whatever you want
  channel.sendToQueue(queue, Buffer.from('something to do'));
};

exec()
  .then(() => {
    console.log("Data sent successfully");
  })
  .catch((error) => {
    console.log(error);
  });
