const fs = require("fs-extra");

const source = './public/img';
const destination = './src/assets/images';

try {
    // copy source folder to destination
    fs.copy(source, destination, function (err) {
        if (err) {
            console.log('An error occured while copying the folder.')
            return console.error(err);
        }
        console.log('Copy completed!')
    });
} catch (e) {
    console.log("Error copying images", e);
}
