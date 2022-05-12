<h1>What is this?</h1>

<p>A package will help you easy in code with lots of different commands.</p>
<h2>How to use?</h2>

```
    
const ezc = require('ezc-tdk');
const user = message.mentions.users.first() || message.author;
const member = message.guild.members.cache.get(user.id);
    message.channel.send({embeds: [
        ezc.UserInfo({
            member: member
            })
        ]
    });
```

<h2>Install</h2>

`npm i ezc-tdk`
<h2>Compulsory package</h2>

```
npm i discord.js@latsest (>= v13)

npm i moment@latsest
```
