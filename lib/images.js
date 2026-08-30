// ════════════════════════════════════════════════════════════
// 📁 IMAGES - Liste des images du bot, une différente à chaque appel
// ════════════════════════════════════════════════════════════
const botImages = [
    'https://files.catbox.moe/k5rrpa.jpg',
    'https://files.catbox.moe/x7kou9.png',
    'https://files.catbox.moe/k5rrpa.jpg',
    'https://files.catbox.moe/x7kou9.png',
];

function randomImage() {
    return botImages[Math.floor(Math.random() * botImages.length)];
}

module.exports = { botImages, randomImage };
