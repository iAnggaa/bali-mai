const fs = require('fs');
const path = require('path');

const dir = 'c:/laragon/www/jadoo (1)/public/assets/img/galery';

fs.readdir(dir, (err, files) => {
    if (err) {
        console.error('Could not list directory: ' + err);
        return;
    }

    // Filter only WhatsApp images
    const waFiles = files.filter(f => f.startsWith('WhatsApp Image') && f.endsWith('.jpeg'));

    // Sort to ensure consistent order (optional)
    waFiles.sort();

    console.log(`Found ${waFiles.length} files to rename.`);

    waFiles.forEach((file, index) => {
        const oldPath = path.join(dir, file);
        const newPath = path.join(dir, `gallery-${index + 1}.jpeg`);

        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                console.error(`Failed to rename ${file}: ${err}`);
            } else {
                console.log(`Renamed: ${file} -> gallery-${index + 1}.jpeg`);
            }
        });
    });
});
