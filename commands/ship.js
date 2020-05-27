module.exports = {
  name: "ship",
  description: "Stop the music",
  execute(client, message, args) {

	mention = message.mentions.users;
  console.log(Array.from(mention)[1]);
  }
};
