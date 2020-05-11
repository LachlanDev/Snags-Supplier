# **Snags Supplier**

 Snags Supplier is a Discord BOT that sends random images of Sausages (Snags) to your desired server
 
 <img src="https://i.imgur.com/mIMLYmX.png"/>
 <img src="https://i.imgur.com/Ic2Pkfb.png"/>
 
# **Commands**
*   !helpsnag - Shows all the commands for the BOT!
*   !about - Shows the Developers and more information about the bot!
*   !snag - Sends a regular picture of a Sausage (Snag)!
*   !cursedsnag - Sends a cursed picture of a Sausage (Snag)!

# Purpose of this source code
This source code is to help people create a basic Discord BOT simular to Snags Supplier but with different content!

# Setup / Requirements
* [Node.JS](https://nodejs.org/en/)
* Java
* Text Editor of your choice
* Goto [Discord Developer Portal](https://discord.com/developers/applications) and create your first application, click on BOT and create.
* Download Snags Supplier GitHub Repo 

# Usage Agreement 
By using this source code you are agreeing to:
* Making your own project
* Not an exact clone of Snags Supplier (Different Usage / idea)
* When posting your BOT / project to a website it must include a link to either our souce code or a credit

# Creating your own project
* This section will explain how the code works and how to use it!
* __Setting up:__
Adds Discord Java Script Libary
```javascript
const Discord = require("discord.js");
const Client = new Discord.Client();

```
* __Setting the Prefix:__ Sets the bots prefix can be anything you like
```javascript
const prefix = "!";
```

* __Login the BOT to Discord:__ Insert you API Key to login the bot to Discord
```javascript
Client.login("YOUR API KEY");
```
API key can be found here:
<img src="https://i.imgur.com/D1IMBPO.png"/>

* __LOGS Console / set status__: LOGS console if sucesfully launches and adds a status to discords servers 
```javascript
Client.on('ready', ()=>{
    //Logs console
    console.log("bot is online")
    //Sets "game" status of bot can be anything 
    Client.user.setGame('STATUS HERE')
})
````

* __First Message (About):__ Displays basic information about your BOT
````javascript
Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;
    //Creates the command "!about"
    if(message.content.startsWith(prefix + "about")){
        //Text to be displayed to user
        message.channel.send("INSERT TEXT HERE!");
    }
})
````

* __First Random Image Selection:__ Sends Normal images of Snags (or anything you want)
````javascript
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
````

* __Seccond Random Image Selection:__ Sends Cursed images of Snags (or anything you want)
````javascript
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
````

* __Help Message:__ Sends more information on the bot (Lists commands / credit)
````javascript
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
````

## Getting your BOT running
* Make sure you have [Node.JS](https://nodejs.org/en/) installed on your computer
* In order to keep your BOT online 24/7 you will need to host it somewhere (server running at all times)
* Create an invite link for your BOT using [Discord Permissions Calculator](https://discordapi.com/permissions.html)
* __Launching your BOT:__
In a terminal run the following command in the folder of your BOTS source code:
````bash
node index.js
````

## Extra
If you have any issues or questions please feel free to message me on Discord Papa.Snags#1555 I am happy to help.

# About
__Snags Supplier was created by Papa.Snag#1555__
* [Website](https://papa-snags.com)
* [Twitter](https://twitter.com/PapaSnags)
* [Join my discord server](https://discord.gg/w7B5nKB)

## Contributing
Please open an issue first to discuss what you would like to change.


