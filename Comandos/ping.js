module.exports = {
  name: "ping",
  aliases: ["conexão", "p", "conexao", "c"],
  code: `
  $editIn[2s;**\{ ⚙️ \} | <@$authorID>, atualmente o meu ping está em \`$pingms\`.**]
  $sendMessage[**\{ ⚙️ \} Calculando...**]
    `
}
