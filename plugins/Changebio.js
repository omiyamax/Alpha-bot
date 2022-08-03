/*මේක උස්සන කැරි පකාට කියන්න උස්සන්න නම් එන්න එපා හරිත අයි පී ට්‍රැක් කරලා හෙදරට එන්නෙ හරිත පකේ 
වැඩ නොකර පාඩුවෙ වැඩක් බලාගනින් පකා*/


const Trex = require('../events');
const Config = require('../config');
const {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('_trex');
const fs = require("fs")
const kawa = fs.readFileSync('./Voice/omiya.mp3')

Trex.addrex({pattern: 'bio ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {
 

    if (match[1] === '') return await message.client.sendMessage(message.jid,'Need Bio ☄  ');
    
    await message.client.setStatus(match[1]);
    await message.client.sendMessage(message.jid,'☄   Succesfully Change Your Bio '+(match[1])+' ☄  ',MessageType.text);
    }
));
