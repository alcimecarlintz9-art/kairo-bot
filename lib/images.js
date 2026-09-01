// ════════════════════════════════════════════════════════════
// 📁 IMAGES - Liste des images du bot, une différente à chaque appel
// ════════════════════════════════════════════════════════════
const botImages = [
    'https://files.catbox.moe/hm1anj.jpg'''',
    'https://files.catbox.moe/hm1anj.jpg'',
    'https://files.catbox.moe/hm1anj.jpg'',
    'https://files.catbox.moe/hm1anj.jpg''',
];

function randomImage() {
    return botImages[Math.floor(Math.random() * botImages.length)];
}

module.exports = { botImages, randomImage };
