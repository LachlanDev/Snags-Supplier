//Snags Supplier Source code
//Made by Papa.Snags
//GitHub Repo: https://github.com/PapaSnags/Snags-Supplier
//Website: https://papa-snags.com
//Twitter: https://twitter.com/PapaSnags    
//Discord: Papa.Snags#1555
//IF YOU NEED ANY HELP OR HAVE ANY QUESTIONS PLEASE MESSAGE ME ON DISCORD OR ANY OTHER PLATFORMS LISTED ABOVE

//Adds Discord Java Script Libary
const Discord = require("discord.js");
const Client = new Discord.Client();

//Sets the bots prefix can be anything you like
const prefix = "!";

//Insert you API Key to login the bot to discord 
Client.login("YOUR API KEY");

//LOGS console if sucesfully launches and adds a status to discords servers 
Client.on('ready', ()=>{
    //Logs console
    console.log("bot is online")
    //Sets "game" status of bot can be anything 
    Client.user.setGame('STATUS HERE')
})

//About Message
Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;
    //Creates the command "!about"
    if(message.content.startsWith(prefix + "about")){
        //Text to be displayed to user
        message.channel.send("INSERT TEXT HERE!");
    }
})

//Normal Images of Snags
Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;
    //Creates the command
    if(message.content.startsWith(prefix + "snag")){
        //Amount of images
        number = 36;
        //Randomly selects and image
        imageNumber = Math.floor (Math.random() * (number -1 + 1)) + 1;
        //Sets the folder location of the images and name must be nammed "1.jpg" / "2.jpg" and so on through to max amount of images you like 
        message.channel.send ({files: ["./normal/" + imageNumber + ".jpg"]})
    }
})

//Cursed Images of Snags
Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;
    //Creates the command
    if(message.content.startsWith(prefix + "cursedsnag")){
        //Amount of images
        number = 33;
        //Randomly selects and image
        imageNumber = Math.floor (Math.random() * (number -1 + 1)) + 1;
        //Sets the folder location of the images and name must be nammed "1.jpg" / "2.jpg" and so on through to max amount of images you like 
        message.channel.send ({files: ["./cursed/" + imageNumber + ".jpg"]})
    }
})

//Help Message
Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;
    //Creates command
    if(message.content.startsWith(prefix + "helpsnag")){
            //Creates Embed
            var embed = new Discord.RichEmbed()
            //Change these to what ever you want
            .addField("!helpsnag", "Shows this message!")
            .addField("!about", "Shows the Developers and more information about the bot!")
            .addField("!snag", "Sends a regular picture of a Sausage (Snag)!")
            .addField("!cursedsnag", "Sends a cursed picture of a Sausage (Snag)!")
            //MUST KEEP THIS OR YOU ARE BREACHING TERMS OF USE SEE BELOW 
            .setFooter("This BOT was made with Snags Supplier Source Code by Papa.Snags")
            .setColor(0x00FFFF)
        message.channel.sendEmbed(embed);

    }
})


//TERMS OF USE
//By using this source code you are agreeing to:
// * Kepping "This BOT was made with Snags Supplier Source Code by Papa.Snags"
// * Making your own project
// * Not an excact clone of Snags Supplier (Different Usage / idea)
// * When posting your BOT / project to a website it must include a link to either our souce code or a credit
