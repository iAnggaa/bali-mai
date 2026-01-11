const fs = require('fs');
const path = require('path');

const dir = 'c:/laragon/www/jadoo (1)/public/assets/img/galery';
const logFile = 'c:/laragon/www/jadoo (1)/rename_debug.txt';

function log(msg) {
    fs.appendFileSync(logFile, msg + '\n');
}

log('Starting rename script...');

if (!fs.existsSync(dir)) {
    log('Directory not found: ' + dir);
    process.exit(1);
}

fs.readdir(dir, (err, files) => {
    if (err) {
        log('Error reading directory: ' + err);
        return;
    }

    log('Files found: ' + files.join(', '));

    const waFiles = files.filter(f => f.startsWith('WhatsApp Image') && f.endsWith('.jpeg'));
    waFiles.sort();

    log(`Found ${waFiles.length} WhatsApp files.`);

    if (waFiles.length === 0) {
        log('No WhatsApp files found to rename.');
    }

    waFiles.forEach((file, index) => {
        const oldPath = path.join(dir, file);
        const newPath = path.join(dir, `gallery-${index + 1}.jpeg`);

        try {
            if (fs.existsSync(newPath)) {
                log(`Target file ${newPath} already exists. Skipping.`);
                // potentially remove it?
            } else {
                fs.renameSync(oldPath, newPath);
                log(`Renamed: ${file} -> gallery-${index + 1}.jpeg`);
            }
        } catch (e) {
            log(`Failed rename ${file}: ${e.message}`);
        }
    });
});
