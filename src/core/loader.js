import {REST,Routes}from "discord.js"


const Registeringslashcommands =(guilid)=>{
    const rest =new REST({version:10}).setToken(process.env.TOKEN)
    rest.put(
        Routes.applicationGuildCommands(
            process.env.APPLICATION_ID,
            guilid=process.env.GUILDID_ID,
        )
        
    )
}