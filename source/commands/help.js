const discord = require ("discord.js");

exports.run = (client, message, args) =>{
    const help = new discord.MessageEmbed()
    .setColor('#b434eb')
    .setTitle('Snags Supplier - Help')
    .setURL("https://github.com/PapaSnags/Snags-Supplier")
    .addFields(
        {name: "Snag", value: "Sends a normal image of a Snag (Sausage). \n **Usage:** s!snag \n"},
        {name: "Cursed Snag", value: "Sends a cursed image of a Snag (Sausage). (Sorted by created date) \n **Usage:** s!cursed \n"},
        {name: "Help", value: "Sends This Help Message \n **Usage:** s!help\n"}
        )
    .setFooter("Snags Supplier Made by PapaSnags#1555", "https://cdn.discordapp.com/app-icons/602313830474842115/ebb9f69ded9fbaa5abbd568e50ede220.png?size=64")
    message.channel.send({embed: help })

};
