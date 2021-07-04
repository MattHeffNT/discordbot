const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

// sign in bot with token...you will need to create an .env file for this
// with your API token
client.login(process.env.discordBOT);

// async function run commands when discord client ready
client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
    
    //get the ID of your channels, usually the first one will be main text channels and second one will be voice channels
    const channels = client.channels.cache.map((channel) => channel.id);
    console.log(channels);

    // get the main channel users (in discord right click the user and copy their ID)
    const person = '12345';

    // get the channels for the server
    const voice_channel = await client.channels.fetch('place voice channel id here');
    
    // trigger actions on voice channel events
    client.on('voiceStateUpdate', async (oldState, newState) => {
        const oldUserChannel = oldState.channelID;
        const newUserChannel = newState.channelID;

        // bot joins channel
        const connection = await voice_channel.join();
           
          // user joins channel event
        if (oldUserChannel == null) {
          
            // if specific user joins the channel do stuff
            if (newState.member.user.id == person) {
                chat.send('person has joined the channel');
                connection.play('./John Cena.mp3');
                client.setTimeout(() => {
                    connection.disconnect();
                }, 10000);
            }
        } else {
            // User leaves or other events (like muting)
        }
    });
});
