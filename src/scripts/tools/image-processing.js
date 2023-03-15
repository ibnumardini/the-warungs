const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, '../../public/picts/heros');
const destination = path.resolve(__dirname, '../../../dist/picts/heros');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
  const name = `${destination}/${image.split('.').slice(0, -1).join('.')}`;

  sharp(`${target}/${image}`)
    .resize(800)
    .toFile(path.resolve(__dirname, `${name}-large.jpg`));

  sharp(`${target}/${image}`)
    .resize(480)
    .toFile(path.resolve(__dirname, `${name}-small.jpg`));
});
