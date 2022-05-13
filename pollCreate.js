module.exports = {
  name: 'pollCreate',
  description: 'create poll',
  aliases: [],
  async execute(client, message, args) {
    const tdk = require('ezc-tdk');
    //npm i ezc-tdk
    await tdk.pollCreate({
      message: message,
      args: args,
    });
  }
}
