const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/cd6032c65c27e0510ddad.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹👑 ༺👸𝚀𝚄𝙴𝙴𝙽 𝙻𝙾𝚁𝙰 𝙼𝙳👸༻ *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝚆.𝙰 𝙱𝙾𝚃* 👑╹ 

☄   *Owner & Founder - Omindu Anjana ( BlackAlpha )*

☄   *Language - NODE.JS,python*

☄   *Sponser Team -  Team Queen Lora*


       🥉 *𝘚𝘗𝘌𝘊𝘐𝘈𝘓 𝘛𝘏𝘈𝘕𝘒𝘚* 🥉

🔱 *Kavidu Sathsara* 🔱
➻ *Co-Owner*

🔱 *Lakidu* 🔱
➻ *Group Management*

🔱 *Rasanja* 🔱
➻ *Admin Manger*

           👸 *𝚃𝙴𝙰𝙼 𝚀𝚄𝙴𝙴𝙽 𝙻𝙾𝚁𝙰* ™👸

╹ ◉ *Omindu Anjana* ╹
╹ ◉ *Kavidu Sathsara* ╹
╹ ◉ *Lakindu*╹
╹ ◉ *Rasanja*    ╹
  
  https://api.whatsapp.com/message/STKRUWM327GCG1

   👸 *powerd by Queen Lora Md* 👸`})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/cd6032c65c27e0510ddad.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹🔥 ⎝🛡️ ALPHA 🛡️⎠ *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🔥╹ 

☄   *Owner & Founder - Omindu Anjan ( BlackAlpha )*

☄   *Language - NODE.JS,python*

☄   *Sponser Team - Team Queen Lora


       🥉 *𝘚𝘗𝘌𝘊𝘐𝘈𝘓 𝘛𝘏𝘈𝘕𝘒𝘚* 🥉

🔱 *Kavindu Sathsara* 🔱
◉ *Co-Owner*

🔱 *Lakidu* 🔱
➻ *Group Management*

🔱 *Rasanja* 🔱
➻ *Admin Manger*

           👸 *𝚃𝙴𝙰𝙼 𝚀𝚄𝙴𝙴𝙽 𝙻𝙾𝚁𝙰* ™👸
╹ ◉ *Omindu Anjana* ╹
╹ ◉ *Kavindu Sathsara* ╹
╹ ◉ *Lakindu*╹
╹ ◉ *Rasanja*    ╹
  
  https://api.whatsapp.com/message/STKRUWM327GCG1

   👸 *powerd by Queen Lora Md* 👸` })

    }));
  
  Trex.addrex({pattern: 'bot', fromMe: false,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/cd6032c65c27e0510ddad.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹🔥 ⎝🛡️ ALPHA 🛡️⎠ *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🔥╹ 

☄   *Owner & Founder - Omindu Anjana ( BlackAlpha )*

☄   *Language - NODE.JS,python*

☄   *Sponser Team - Team Queen Lora*


       🥉 *𝘚𝘗𝘌𝘊𝘐𝘈𝘓 𝘛𝘏𝘈𝘕𝘒𝘚* 🥉

🔱 *Kavindu Sathsara* 🔱
➻ *Co-Owner*

🔱 *Lakindu* 🔱
➻ *Group Management*

🔱 *Rasanja* 
➻ *Admin Manger*

           👸 *𝚃𝙴𝙰𝙼 𝚀𝚄𝙴𝙴𝙽 𝙻𝙾𝚁𝙰* ™👸

╹ ◉ *Omindu Anjana* ╹
╹ ◉ *Kavindu Saththsara*╹
╹ ◉ *Lakindu*    ╹
╹ ◉ *Rasanja* ╹
  
  https://api.whatsapp.com/message/STKRUWM327GCG1

   👸 *powerd by Queen Lora Md* 👸 `  ,quoted: message.data})

    }));
}
