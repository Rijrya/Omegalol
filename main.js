const Discord = require('discord.js');

const client = new Discord.Client();

//prefix
const prefix = '?';

//all for advanced formatting
const fs = require('fs');

var deleteNext = false;

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}



//starts the bot
client.once('ready', () => {
    console.log('Omegalol is pogging off');
})

//boolean to enable/disable bot (starts disabled)
var enabled = false;

//enables or disables certain functions of the bot
client.on('message', message=> {
    if (message.author.bot) return;
    if (message.content.startsWith('enable')) {
        enabled = true;
    }
    if (message.content.startsWith('disable')) {
        enabled = false;
    }
})

client.on('message', message=> {
    //testing
    return;
    if (!message.content.includes('a') || message.author.bot) return;
    message.channel.send('b');
    var temp = true;
    client.on('message', (secondMessage)=> {
        if (message.author.bot || !temp) return;
        if (secondMessage.content.startsWith('c')) {
            secondMessage.delete();
            temp = false;
        }
    })

})



//example command (user says ping, replies with pong)
client.on('message', message => {
    //code when actually using prefix
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    

//ping command, sends to ping.js    
if (command=='ping') {
    client.commands.get('ping').execute(message, args);
}
});

//stops the bot (will give long error, no separate .js file)
client.on('message', message=> {
    if (!message.member.roles.cache.has('707096930953461770')) return;
    if (message.content.includes('<@&757272142982414438> shut the fuck up')) {
        message.channel.send('ok');
        client.destroy();
    }
})





//reacts omegalul to message if it includes "fuck"
  client.on('message', message=> {
      if (!message.content.includes('fuck'))  return;
         client.commands.get('reactOmegalul').execute(message); 
  })




 //replace letter o with omegalul
client.on('message', message=> {
     //does not work for aegir to prevent duplicates
    if (!enabled || message.author.bot || message.member.roles.cache.has('707096662169878630')) return;
    client.commands.get('replaceWithOmegalul').execute(message);
})

//mocks aegir insults david
client.on('message', message => {
    if (!enabled || message.author.bot) return;
   client.commands.get('mockAegirInsultDavid').execute(message);
 })


 //deletes mudamaid message after certain person sends it a command
client.on('message', message=> {
    if (!message.member.roles.cache.has('707096930953461770')) return;
    if (message.content.includes("$w")) {
        var temp = true;
        client.on('message', (secondMessage)=> {
            if (secondMessage.member.roles.cache.has('755273469880565801') || secondMessage.member.roles.cache.has('646904625588469770')) {
                
                    secondMessage.delete();
                    
                    temp = false;
                
            } 
            
        })
    message.channel.send('shut the fuck up');
    }
})


//tells aegir to fix his posture every hour
client.on('ready', () => {

    var testChannel = client.channels.cache.get('625821734997852189');
    setInterval(() => {
        testChannel.send("<@!616667230410637322> fix your posture");
    },  3600000);
});

//roll command
client.on('message', message => {
    if (!message.content.startsWith('roll') || message.author.bot) return;
    client.commands.get('roll').execute(message);
})

//for prefixes except i don't use prefixes for this bot
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length);
    const command = args;
})



//more testing
/*
var servers = {};
const ytdl = require("ytdl-core");

const path = require('path');
client.on('message', message => {
    if (!message.content.includes('nanahira')) return;
    const {voice} = message.member;
        voice.channel.join().then((connection) => {
            
        })
    }
    
)
//plays viva happy by nanahira
client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");
    switch (args[0]) {
        case 'play':

            function play(connection, message){
                var server = servers[message.guild.id];
                server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}));
                
                server.queue.shift();

                server.dispatcher.on("end", function(){
                    if (server.queue[0]) {
                        play(connection, message);
                    }else {
                        connection.disconnect();
                    }
                })
            }

                if(!args[1]) {
                    message.channel.send("you need to provide a link!");
                    return;
                }

                if(!message.member.voice.channel) {
                    message.channel.send("You must be in a channel to play the bot");
                    return;
                }

                if (!servers[message.guild.id]) servers[message.guild.id] = {
                    queue: []
                }

                var server = servers[message.guild.id];

                server.queue.push(args[1]);

                if(!message.member.voice.connection) message.member.voice.channel.join().then(function(connection) {
                    play(connection, message);
                })

                break;

                case 'skip':
                    var server = servers[message.guild.id];
                    if(server.dispatcher) server.dispatcher.end();
                    message.channel.send("skipped");
                break;

                case 'stop': 
                    var server = servers[message.guild.id];
                    if(message.guild.voice.connection) {
                        for(var i=server.queue.length -1; i>=0; i--) {
                            server.queue.splice(i, 1);
                        }

                        server.dispatcher.end();
                        message.channel.send("ending queue");
                        console.log('stopped the queue');
                    }

                    if(message.guild.connection) message.member.voice.connection.disconnect();
                break;
    }
})
*/


client.login('NzU3MTAyMjczNTExMDMwODI1.X2bgcA.PYiDmLfsGntDPWPd7BtJ4R-vOaI');
