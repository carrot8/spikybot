module.exports = {
    name: 'nick',
    description: "this is a ping command!",
    execute(message, args){

        if(message.member.roles.cache.has('863413406152785978')){
            guildMember.setNickname(nick, [])

        } else {
            message.channel.send("Verified succesfully! Now you have access to " + '<&863483819108466688>' + " chat! :partying_face:")
            message.member.roles.add('863413406152785978')
        }


    }
}