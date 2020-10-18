module.exports = {

    name: 'reactOmegalul', 
    description: 'reacts omegalul to message if user says "fuck"',
    execute(message) {
        const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'omegalul');
      message.react(reactionEmoji);
    }
}