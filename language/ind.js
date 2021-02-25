exports.wait = () => {
	return`*「 WAIT 」 SEDANG PROSES*`
}

exports.succes = () => {
	return`*「 SUCCESS 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*YOUR LEVEL IS STILL EMPTY*`
}

exports.lvlnoon = () => {
	return`*GRUB LEVEL IS NOT ACTIVATED YET*`
}

exports.noregis = () => {
	return`*「 NOT REGISTERED 」*\n\n*how to list ${prefix}register name | age* \n*example ${prefix}register Abhinav|21*`
}

exports.rediregis = () => {
	return`*「 ALREADY REGISTERED 」*\n\n*you are already registered in the bot database!!
*`
}

exports.stikga = () => {
	return`*yeh!! 😑 failed try to repeat in a while again*`
}

exports.linkga = () => {
	return`*sorry invalid link!!*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT MUST BE ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW IN ACTIVE!!*`
}

exports.bug = () => {
	return`*Problems have been reported to the BOT owner, false reports will not be responded too!!*`
}

exports.wrongf = () => {
	return`*format false / empty text*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRATION 」*\n\nTo find out if you have registered please check the message that I sent \ n \ nNOTE: \ n * if you have not received a message. means you haven't saved your bot number*`
}

exports.registered = (username, user age, serialUser, time, sender)
) => {
	return`*「 DATA COUNTRY 」*\n\nyou have registered with the data \n\n┏━⊱nama\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : don't forget this number because it's important:v`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* not found \ try to write *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*sorry but $ {pushname} is not the owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Sorry ${pushname} you are not enough Level*\n\n*┏⊱level you : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Sorry ${pushname} you are not enough Level*\n\n*┏⊱level you : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Sorry ${pushname} your level is not sufficient*\n\n*┏⊱level you : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Sorry ${pushname} your level is not sufficient*\n\n*┏⊱level you : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Sorry ${pushname} your level is not sufficient*\n\n*┏⊱level you : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Sorry ${pushname} your level is not sufficient*\n\n*┏⊱level you : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
┏━━━⊱  *ABOUT USER*  ⊰━━┓
┣⊱ *Name* : ${pushname}
┣⊱ *Number* : wa.me/${sender.split("@")[0]}
┣⊱ *Your money* : Rp${uangku}
┣⊱ *XP* : ${getLevelingXp(sender)}/${reqXp} 
┣⊱ *Level* : ${getLevelingLevel(sender)}
┣⊱ *User register* : ${_registered.length}
┗━━━⊱  ⸨ *WhatsAlexa* ⸩  ⊰━━━━┛

 *${prefix}info*
 *${prefix}donasi*
 *${prefix}owner*

┏━━⊱ *MAKER MENU* ⊰━━┓
┣⊱ *${prefix}sticker* 
┣⊱ *${prefix}quotemaker* <text|author>
┣⊱ *${prefix}qrcode* <text>
┣⊱ *${prefix}ttp*
┣⊱ *${prefix}stickerhide* <text>
┣⊱ *${prefix}emoji*
┣━━⊱  *FUN MENU*  ⊰━━━┫
┣⊱ *${prefix}lirik* <text>
┣⊱ *${prefix}artinama>
┣⊱ *${prefix}chord* <text>
┣⊱ *${prefix}bisakah* <teks>
┣⊱ *${prefix}kapankah* <teks>
┣⊱ *${prefix}apakah* <teks>
┣⊱ *${prefix}rate* <teks>
┣⊱ *${prefix}slap*
┣⊱ *${prefix}tampar*
┣⊱ *${prefix}moddroid* <teks>
┣⊱ *${prefix}happymod* <teks>
┣━━⊱ *MUTUAL* ⊰━━━━━┫
┣⊱ *${prefix}mutual*
┣⊱ *${prefix}next*
┣━━⊱ *MEDIA MENU* ⊰━━┫
┣⊱ *${prefix}brainly* [error]
┣⊱ *${prefix}pinterest*
┣⊱ *${prefix}resepmasakan* <teks>
┣⊱ *${prefix}igstalk* <username>
┣⊱ *${prefix}bitly* <link>
┣⊱ *${prefix}tiktok* <username>
┣⊱ *${prefix}ssweb* <link>
┣⊱ *${prefix}kbbi* <text>
┣━━⊱ *YT & SONG* ⊰━━━┫
┣⊱ *${prefix}ytmp3* <link>
┣⊱ *${prefix}ytmp4* <link>
┣⊱ *${prefix}joox* <judul>
┣━━⊱  *NSFW MENU*  ⊰━┫
┣⊱ *${prefix}anjing*
┣⊱ *${prefix}blowjob*
┣⊱ *${prefix}nekonime*
┣⊱ *${prefix}pokemon*
┣⊱ *${prefix}husbu*
┣⊱ *${prefix}nangis*
┣⊱ *${prefix}cium*
┣⊱ *${prefix}peluk*
┣⊱ *${prefix}ranime*
┣━━⊱ *LIMIT & UANG* ⊰━┫
┣⊱ *${prefix}limit* 
┣⊱ *${prefix}buylimit* <jumblah>
┣⊱ *${prefix}transfer* <tag |jumblah>
┣⊱ *${prefix}dompet*
┣⊱ *${prefix}leaderboard*
┣━━⊱ *GROUP MENU* ⊰━┫
┣⊱ *${prefix}hidetag*
┣⊱ *${prefix}blocklist*
┣⊱ *${prefix}grouplist*
┣⊱ *${prefix}level*
┣⊱ *${prefix}linkgc*
┣⊱ *${prefix}tagall*
┣⊱ *${prefix}setpp*
┣⊱ *${prefix}add* <tag>
┣⊱ *${prefix}kick* <tag>
┣⊱ *${prefix}setname* <teks>
┣⊱ *${prefix}setdesc* <teks>
┣⊱ *${prefix}demote* <tag>
┣⊱ *${prefix}promote* <tag>
┣⊱ *${prefix}listadmin*
┣⊱ *${prefix}group* [buka/tutup]
┣⊱ *${prefix}leveling* [enable/disable]
┣⊱ *${prefix}nsfw* [1/0]
┣⊱ *${prefix}simih* [1/0]
┣⊱ *${prefix}welcome* [1/0]
┣━━⊱ *OWNER MENU* ⊰━┫
┣⊱ *${prefix}bc* <teks>
┣⊱ *${prefix}bcgc* <teks>
┣⊱ *${prefix}kickall* <rawan ban>
┣⊱ *${prefix}setreply* <teks>
┣⊱ *${prefix}setprefix* <symbol>
┣⊱ *${prefix}clearall*
┣⊱ *${prefix}block* <tag>
┣⊱ *${prefix}unblock* <tag>
┣⊱ *${prefix}leave*
┣⊱ *${prefix}event* [1/0]
┣⊱ *${prefix}clone* <tag>
┣⊱ *${prefix}setppbot*
┣━━⊱ *THANGKS TO* ⊰━━┫
┃
┣⊱ *Abhinav* <dev>
┣⊱ *Abhijith* <partner>
┣⊱ *Ashiq* <sc ori>
┣⊱ *MYBOT TEAM* <team>
┃
┣⊱ NOTE : TQTO REMOVED
┃ I GWN'T UP AGAIN OKAY
┃
┗━━⊱  ⸨ *WhatsAlexa* ⸩  ⊰━━━━┛
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 HAPPY 」*
┏⊱ *Name* : ${pushname}
┣⊱ *Number* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limit* : +3
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Sorry ${pushname} Today's limit expires*\n*buy limit to get limit/level up*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
the rest of your limit : ${limitCounts}

NOTE : To get to the limit. can pass level up or buylimit`
}

exports.satukos = () => {
	return`*Add parameter 1 / enable or 0 / disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Name* : ${pushname}\n┣⊱ *Number* : ${sender.split("@")[0]}\n┣⊱ *Money* : ${uangkau}\n┗━━━━━━━━━━`
}
