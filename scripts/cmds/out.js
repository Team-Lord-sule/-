const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
module.exports = {
	config: {
		name: "out",
		aliases: ["vit"],
		version: "1.0",
		author: "ミ★𝐒𝐎𝐍𝐈𝐂✄𝐄𝐗𝐄 3.0★彡",
		countDown: 5,
		role: 2,
		shortDescription: "bot will leave gc",
		longDescription: "",
		category: "admin",
		guide: {
			vi: "{pn} [tid,blank]",
			en: "{pn} [tid,blank]"
		}
	},

	onStart: async function ({ api,event,args, message }) {
 var id;
 if (!args.join(" ")) {
 id = event.threadID;
 } else {
 id = parseInt(args.join(" "));
 }
 return api.sendMessage("𝙈𝙤𝙣 𝙨𝙚𝙣𝙨𝙚𝙞 𝙖𝙫𝙖𝙞𝙩 𝙧𝙖𝙞𝙨𝙤𝙣...𝙞𝙡 𝙮'𝙖 𝙩𝙧𝙤𝙥 𝙙𝙚 𝙗𝙖𝙩𝙖𝙧𝙙 𝙞𝙘𝙞...𝙖𝙙𝙞𝙚𝙪👨‍🦯", id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
		}
	}
