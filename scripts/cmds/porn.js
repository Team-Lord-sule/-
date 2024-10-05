const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "porn",
    aliases: ["sex"],
    author: " ミ★𝐒𝐎𝐍𝐈𝐂✄𝐄𝐗𝐄 3.0★彡", // don't change credits 
    version: "3.0",
    cooldowns: 5,
    role: 0,
    shortDescription: {
      en: ""
    },
    longDescription: {
      en: "get bot owner info"
    },
    category: "18+",
    guide: {
      en: "{p}{n}"
    }
  },
  onStart: async function ({ api, event }) {
      try {
        const loadingMessage = "💿| 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐨𝐟 𝐭𝐡𝐢𝐬 𝐯𝐢𝐝𝐞𝐨 𝐩𝐥𝐞𝐚𝐬𝐞 𝐰𝐚𝐢𝐭...";
        await api.sendMessage(loadingMessage, event.threadID);

        const ownerInfo = {
          name: '𝙋𝙊𝙍𝙉𝙊𝙂𝙍𝘼𝙋𝙃𝙔',
          gender: '𝘾𝙖𝙧𝙩𝙤𝙤𝙣🍑',
          stock: '𝟚𝟘𝙈𝘽',
          sex: '𝙀𝙭𝙘𝙞𝙩𝙖𝙩𝙞𝙤𝙣🌶😼',
          facebookLink: '𝘾𝙧𝙚𝙖𝙩𝙤𝙧 𝙤𝙛 𝙩𝙝𝙞𝙨 𝙘𝙢𝙙: https://www.facebook.com/sonic.shisui.1492',
          bio: '𝙊𝙧𝙞𝙜𝙞𝙣𝙚 𝘾𝙖𝙢𝙚𝙧𝙤𝙪𝙣𝙖𝙞𝙨'
        };

        const videoUrl = 
["https://i.imgur.com/5uIZ5yd.mp4",
"https://i.imgur.com/usomB8N.mp4",
"https://i.imgur.com/3tRGH3L.mp4",
"https://i.imgur.com/wPWfT9L.mp4",]     
          
        const tmpFolderPath = path.join(__dirname, 'tmp');

        if (!fs.existsSync(tmpFolderPath)) {
          fs.mkdirSync(tmpFolderPath);
        }

        const videoResponse = await axios.get(videoUrl, { responseType: 'arraybuffer' });
        const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

        fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

        const response = `
          𝗼𝘄𝗻𝗲𝗿 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻🍀:
❍⌇─➭ 
(◍•ᴗ•◍)𝗡𝗔𝗠𝗘 : ${ownerInfo.name}
❍⌇─➭ 
♀𝗚𝗘𝗡𝗥𝗘♂: ${ownerInfo.gender}
❍⌇─➭ 
𝐒𝐓𝐎𝐂𝐊: ${ownerInfo.hobby}
❍⌇─➭ 
𝐒𝐄𝐗💞: ${ownerInfo.relationship}
❍⌇─➭ 
 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞🔗: ${ownerInfo.facebookLink}
❍⌇─➭ 
      ◈ 𝗦𝗧𝗔𝗧𝗨𝗦 ◈: ${ownerInfo.bio}🇨🇲       `;

        await api.sendMessage({
          body: response,
          attachment: fs.createReadStream(videoPath)
        }, event.threadID);
      } catch (error) {
        console.error('Error in owner command:', error);
        api.sendMessage('An error occurred while processing the command.', event.threadID);
      }
    },
    onChat: async function({ api, event }) {
      try {
        const lowerCaseBody = event.body.toLowerCase();
        
        if (lowerCaseBody === "porno" || lowerCaseBody.startsWith("{p}owner")) {
          await this.onStart({ api, event });
        }
      } catch (error) {
        console.error('Error in onChat function:', error);
      }
    }
  }
