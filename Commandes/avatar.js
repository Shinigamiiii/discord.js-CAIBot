const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    const membre = message.mentions.members.first() || message.member;

    message.channel.send('Avatar de : ' + membre + '\n \n' + membre.user.displayAvatarURL);
}

module.exports.help = {
    name: 'avatar'
}