const fs = require('fs');
const path = require('path');

const dir = 'c:/laragon/www/jadoo (1)/public/assets/img/galery';
const files = [
    { old: 'WhatsApp Image 2026-01-05 at 12.23.59.jpeg', new: 'gallery-1.jpeg' },
    { old: 'WhatsApp Image 2026-01-05 at 12.24.00 (1).jpeg', new: 'gallery-2.jpeg' },
    { old: 'WhatsApp Image 2026-01-05 at 12.24.00.jpeg', new: 'gallery-3.jpeg' },
    { old: 'WhatsApp Image 2026-01-05 at 12.24.01.jpeg', new: 'gallery-4.jpeg' },
    { old: 'WhatsApp Image 2026-01-05 at 12.24.02.jpeg', new: 'gallery-5.jpeg' },
    { old: 'WhatsApp Image 2026-01-05 at 12.24.03.jpeg', new: 'gallery-6.jpeg' }
];

files.forEach(file => {
    const oldPath = path.join(dir, file.old);
    const newPath = path.join(dir, file.new);

    if (fs.existsSync(oldPath)) {
        fs.rename(oldPath, newPath, (err) => {
            if (err) console.error('Error renaming ' + file.old + ': ' + err);
            else console.log('Renamed: ' + file.old + ' -> ' + file.new);
        });
    } else {
        console.log('File not found: ' + file.old);
    }
});
