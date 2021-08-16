const Discord = require("discord.js"),
client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
config = require("./config.json")

client.on("ready", function(){
    console.log("Bot funcionando!")
    client.user.setActivity(`Calculando custos de lançamentos e recompensas`)
})

client.on("guildCreate", function(){
})
client.on("messageCreate", function(message){
    if(!message.author.bot && message.content.startsWith(config.prefix)){
        const args = message.content.slice(1).split(" "),
        com = args.shift().toLowerCase(),
        m = message.channel.send(verify(com, args))
        function verify(c, a){
            switch(c){
                case("calcule-lançamento"): 
                case("calcule-lancamento"):
                    if ((a[0] && a[1] && a[2]) != undefined){
                        var rec, massa = a[0], reu
                        if (a[1] == "s" || a[1] == "S") {
                            rec = (a[2]) *20000 - (massa*6)
                            reu = "Sim"
                        }
                        else if (a[1] == "n" || a[1] == "N") {
                            rec = (a[2]) *20000 - (massa*14)
                            reu = "Não"
                        } else {return "```Erro ao executar \n   Use: \n   >calcule-lançamento [massa] [reutilizável(s/n)] [dificuldade]```"}
                        return "```" + `Pagamento do Lançamento Individual\n\n Nível: ${a[2]}\n Massa: ${massa} T\n Reutilizável: ${reu}\n Recompensa: ${rec}` + "```"
                    }
                    else {
                        return "```Erro ao executar \n   Use: \n   >calcule-lançamento [massa] [reutilizável(s/n)] [dificuldade]```"
                    }
                
                case("calcule-missão"): 
                case("calcule-missao"):
                    if ((a[0] && a[1] && a[2]) != undefined){
                        var rec, massa = a[0], reu
                        if (a[1] == "s" || a[1] == "S") {
                            rec = (a[2]) *30000 - (massa*6)
                            reu = "Sim"
                        }
                        else if (a[1] == "n" || a[1] == "N") {
                            rec = (a[2]) *30000 - (massa*14)
                            reu = "Não"
                        } else{return "```Erro ao executar \n   Use: \n   >calcule-missão [massa] [reutilizável(s/n)] [dificuldade]```"}
                        return "```" + `Pagamento da Missão\n\n Nível: ${a[2]}\n Massa: ${massa} T\n Reutilizável: ${reu}\n Recompensa: ${rec}` + "```"
                    }
                    else {
                        return "```Erro ao executar \n   Use: \n   >calcule-missão [massa] [reutilizável(s/n)] [dificuldade]```"
                    }

                case("calcule-criador"): 
                case("calcule-criador"):
                    if ((a[0] && a[1]) != undefined){
                        var rec
                        rec = (a[1]*a[0]) * 10000
                        return "```" + `Pagamento do Criador\n\n Nível: ${a[2]}\n Recompensa: ${rec}` + "```"
                    }
                    else {
                        return "```Erro ao executar \n   Use: \n   >calcule-criador [número de concluíntes] [dificuldade]```"
                    }

                case("ajuda"): 
                case("help"):
                case("?"):
                    return "```" + `Prefixo: ${config.prefix}\n calcule-lançamento: calcula o valor de recompensa de lançamentos individuais\n calcule-missão: calcula o valor de recompensa de cumprimento de missão` + "```"
                default:
                    return "```Não reconheço esse comando\n use >ajuda para ver todos os comandos```"
            }
        }

    } else{return;}
    
})
client.login(config.token)