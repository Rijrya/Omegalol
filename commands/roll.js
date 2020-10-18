const { ReactionCollector } = require("discord.js");

module.exports = {
    name: 'roll', 
    description: 'rolls a number',
    execute(message) {
        if (!message.content.includes(' ')) {
            message.channel.send(Math.floor(Math.random()*100)+1);
        }
        else {
            var temp = parseInt(message.content.substring(5).split(" "));
            if (Object.is(temp, NaN)) {
                message.channel.send(Math.floor(Math.random()*100)+1);
            }else {
            message.channel.send(Math.floor(Math.random()*temp)+1);
            }
        }
    }
}