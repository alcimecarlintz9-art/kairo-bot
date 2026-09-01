const config = require('../config');

// ════════════════════════════════════════════════════════════
// 📁 SHARED 𝙺𝙰𝙸𝚁𝙾 𝚉𝚈𝙽𝙴𝚇 STYLE HELPER
// Unified visual identity used across every plugin/reply in the bot.
// Base frame:
//   ╭┄┄『`TITLE`』
//   │
//   │✦ line 1
//   │✦ line 2
//   │
//   ╰┄┄┄┄┄┄┄┄┄┄┄┄⪼
// ════════════════════════════════════════════════════════════

/**
 * Build the base framed block.
 * @param {string} title - shown inside 『` `』
 * @param {string[]|string} lines - body line(s), each prefixed with "✦ "
 */
function frame(title, lines) {
    const list = Array.isArray(lines) ? lines : [lines];
    const body = list
        .filter(l => l !== undefined && l !== null && l !== '')
        .map(l => `*│✦ ${l}*`)
        .join('\n');
    return `*╭┄┄『 \`${title}\` 』*\n*│*\n${body}\n*│*\n*╰┄┄┄┄┄┄┄┄┄┄┄┄⪼*`;
}

/**
 * Legacy-compatible helper kept for existing call sites:
 * siddTechx(title, value, status) -> framed block with title/value/status.
 * Still used across many plugins, now rendered with the new global style.
 */
function siddTechx(title, value, status) {
    const lines = [];
    if (value !== undefined && value !== null && value !== '') lines.push(`${title}: ${value}`);
    if (status !== undefined && status !== null && status !== '') lines.push(`sᴛᴀᴛᴜs: ${status}`);
    return `\n${frame(config.BOT_NAME || '𝙺𝙰𝙸𝚁𝙾 𝚉𝚈𝙽𝙴𝚇', lines)}\n\n> ${config.BOT_FOOTER || '𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙺𝙰𝙸𝚁𝙾 𝙳𝙴𝚅'}\n`;
}

/** Generic titled block: style.box('COMMAND', ['NAME: ABOUT', 'DESCRIPTION: BOT INFO']) */
function box(title, lines) {
    return frame(title, lines);
}

/** ✅ Success block */
function success(text) {
    return frame('SUCCESS', text);
}

/** ❌ Error block */
function error(text) {
    return frame('ERROR', text || 'AN ERROR OCCURRED');
}

/** ⚠️ Warning block */
function warning(text) {
    return frame('WARNING', text);
}

/** ℹ️ Info block */
function info(text) {
    return frame('INFO', text);
}

/** 📜 Menu-style block: style.menu('MENU', ['COMMANDS', 'GROUP', 'OWNER']) */
function menu(title, lines) {
    return frame(title, lines);
}

module.exports = { kairodev, frame, box, success, error, warning, info, menu };
