module.exports = {
  name: 'userinfo',
  aliases: ['ui'],
  description: 'user information',
  async execute(client, message, args) {
    const tdk = require('ezc-tdk');
    // npm i ezc-tdk
    const user = message.mentions.users.first() || message.author;
    // author or mention
    const member = message.guild.members.cache.get(user.id);
    
    const embed = await tdk.UserInfo({
      member: member,
    });
    
    message.channel.send( { embeds: [embed] } );
  }
}
