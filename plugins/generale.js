const { cmd, commands } = require('../sidd');
const { t } = require('../lib/i18n');
const config = require('../config');
const os = require('os');

// =================================================================
// 🏓 COMMANDE PING (Style Speedtest)
// =================================================================


cmd({
    pattern: "owner",
    desc: "Contact the creator",
    category: "main",
    react: "👑"
},
async(conn, mek, m, { from, myquoted }) => {
    const ownerNumber = config.OWNER_NUMBER;
    
    // Création d'une vCard (Fiche contact)
    const vcard = 'BEGIN:VCARD\n' +
                  'VERSION:3.0\n' +
                  'FN:𝙺𝙰𝙸𝚁𝙾 𝚉𝚈𝙽𝙴𝚇 (Owner)\n' +
                  'ORG:𝙺𝙰𝙸𝚁𝙾 𝚉𝚈𝙽𝙴𝚇 Corp;\n' +
                  `TEL;type=CELL;type=VOICE;waid=${ownerNumber}:${ownerNumber}\n` +
                  'END:VCARD';

    await conn.sendMessage(from, {
        contacts: {
            displayName: '𝙺𝙰𝙸𝚁𝙾 𝚉𝚈𝙽𝙴𝚇',
            contacts: [{ vcard }]
        }
    }, { quoted: myquoted });
});
