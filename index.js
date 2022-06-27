const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: "TOKEN DO SEU BOT",
prefix: ["$getServerVar[prefixo1]", "$getServerVar[prefixo2]", "<@$clientID>", "<@!$clientID>"],
intents: ["GUILDS", "GUILD_MESSAGES"]
})

//Eventos
bot.onMessage()
bot.onInteractionCreate()

//Comando Teste
bot.command({
  name: "say",
  code: `
  $sendMessage[$message
  (recado dito por <@$authorID>.)]
  $onlyIf[$message!=;Digite algo!]`
})

//Variaveis do Bot
bot.variables({
  prefixo1: "!",
  prefixo2: "?"
})


//Evento de Ligação
bot.readyCommand({
    channel: "",
    code: `$log[Ligado no usuário $userTag[$clientID]]`
})

//Carregamento dos Comandos
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./Comandos/');
