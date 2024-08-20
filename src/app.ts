console.log("Hola Soy el Chatbot")

import { createBot, createFlow, MemoryDB, createProvider, addKeyword } from '@bot-whatsapp/bot'
import { BaileysProvider, handleCtx } from '@bot-whatsapp/provider-baileys'

const flowBienvenida = addKeyword('hola').addAnswer('Buenas.. este es un mensaje automático de chatBot 🤖')

const main = async () => {

    const provider = createProvider(BaileysProvider);

    provider.initHttpServer(3002);
      
    provider.http?.server.post('/send-message', handleCtx(async (bot, req, res) => {
        
        // let contacto = 'Alvaro Frean';
        // //let phone = req.body.phone
         let alvaro = '+5493512345228';
        
        await bot.sendMessage(alvaro,"mensaje", {});
        //await bot.sendMessage("5493512345228","mensaje automático",{});
        console.log(`mensaje enviado`);     

    }));
    //  provider.http.server.post('/send-message', handleCtx(async (bot, req, res) => {
    //   const phone = req.body.phone
    //   await bot.sendMessage (process.env.FRIEND_NUMBER, 'mensaje!', {})
    //   res.end('esto es del server de polka') 

    //  }))

    await createBot({
        flow: createFlow([flowBienvenida]),
        database: new MemoryDB(),
        provider: provider
    
    })
} 
main();
