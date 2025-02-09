module.exports = {
    name: 'clear',
    description: "Clear messages!",
    async execute(message, args){
        if(!args[0]) return message.reply("Please enter the amount of messages that you want to delete!");
        if(isNaN(args[0])) return message.reply("Please enter a real number!"), message.react("❌");

        if(args[0]> 100) return message.reply("You can't delete more than 100 messages!"), message.react("❌");
        if(args[0] < 1) return message.reply("You must delete atleast one message!"), message.react("❌");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
            message.reply(`cleared ${args} messages! :wastebasket:`);
        });
    }
}