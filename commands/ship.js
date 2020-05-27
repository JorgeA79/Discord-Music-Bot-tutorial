module.exports = {
  name: "ship",
  description: "Stop the music",
  execute(client, message, args) {

	mention = message.mentions.users[1];
  console.log(mention);
  }
};
