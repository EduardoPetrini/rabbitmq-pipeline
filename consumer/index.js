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

  channel.consume(
    queue,
    (msg) => {
      console.log(msg.content.toString());
    },
    {
      noAck: true,
    }
  );
};

exec()
  .then(() => {
    console.log("Consumer Started");
  })
  .catch((error) => {
    console.log(error);
  });
