const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = true;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 
global.ANTI_BOT = true;
global.PM_BLOCKER = false;
global.CHATBOT = false;

global.SESSION_ID = process.env.SESSION_ID |{"noiseKey":{"private":{"type":"Buffer","data":"wIDn311DQ4N8IqUuVYOi8KV7NvQnj0tc+npmIjPX/Eg="},"public":{"type":"Buffer","data":"iCHeT47/M87xKLOvBzniADIZfryoiNTY/afy/GNW9gw="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"iKxcViUFm8gAqVqNwLHCvIEdu29ZmbUFnuimequcz0M="},"public":{"type":"Buffer","data":"O+1eXwQyhGnObPJj/hpewInkELpUPY15OX7uAZuLFRw="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"UD/0PVzZ+aKPJWyPOmbnrSYMltyxe01xdzknGqBeLlk="},"public":{"type":"Buffer","data":"oUdt6ERru/gQRYBQYBRilOHJ7Hc2ZqT8/ORHq/8oyn0="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"4JoLGNiOUE04Dtb59xby2ovrpabG/8Yepd7xfS264l8="},"public":{"type":"Buffer","data":"OOhCDTJOijR7nT10dGA2NhhyXm7qjkhqwPvmc8Oeiwc="}},"signature":{"type":"Buffer","data":"9P5ooIW7UECINFUZUBidcM8rzQf/8l73EnDjp9aGWczeNjlmV9nTOCLrbBQNai90Lhwk71Pnv5vpSMBS85PXgw=="},"keyId":1},"registrationId":104,"advSecretKey":"inOTByIwRMvHkcJ+VqkWwyQcmcTwT5b1G/ewBMauZSo=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"G6eOtntNT0CzfmQ0aoMMzQ","phoneId":"9fb8f7e8-16a1-4654-8ee2-7aeb712e26bc","identityId":{"type":"Buffer","data":"/e2YE+TT1By74J6md7pw66i/J2c="},"registered":true,"backupToken":{"type":"Buffer","data":"07Rq3wgrD+RG4Doh7HuIMBn0fCs="},"registration":{},"pairingCode":"DGXJ6JVZ","me":{"id":"263774918784:79@s.whatsapp.net"},"account":{"details":"CPWC59UEEPOUybYGGAUgACgA","accountSignatureKey":"Gp8Fb4nBkSt3Ls3FH2oqE9nXx/RSC7I2y6fMzOyQjE0=","accountSignature":"8Dwo93vZvEI1exnXW9xmDX+VUIrtsARUm0Xp1kOaXidPnnCkWMVOdfm8ui2xrxk69CHoLfrrQ2dvRKDhCfxqCA==","deviceSignature":"+R8ocSkVJ4ziIny3JAxQM9Do4CIlx65iinbvRdoCSVqtGeZMLpME1zAcL63UCJ+fZ/tAPsIhpoVVG4iz8rdBjg=="},"signalIdentities":[{"identifier":{"name":"263774918784:79@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BRqfBW+JwZErdy7NxR9qKhPZ18f0UguyNsunzMzskIxN"}}],"platform":"android","lastAccountSyncTimestamp":1725057665,"myAppStateKeyId":"AAAAAKPF"}| ""
global.Owner = ["263774918784"]; //like 2347080968564 
global.OwnerName =  "Mabhosiedu RoynJK😎👽";
global.BotName = "♱MAKINO-MD-V2♱♡⃤";
global.packname = "♱MAKINO-MD-V2♱♡⃤";                             //Do not change.
global.author = "TAIRA MAKINO";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/DOVRqF006VHHZhiSNwJRce"; 
global.SupportGroupLink = "https://chat.whatsapp.com/DOVRqF006VHHZhiSNwJRce"; //Do not change!
global.menutype = "v3"

global.prefa = ['','!','.',','@','#','$','&','+'] 

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic7.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");
global.OwnerNumber = [""] //Ignore,Unused

//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = [true]
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command!',
    grouponly: 'This command is only made for *Groups*',
    privateonly: 'This command is only made for *Private Chat*',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
