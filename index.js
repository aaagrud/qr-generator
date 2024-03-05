import inquirer from 'inquirer';
import qr from 'qr-image';
import fs, { writeFile } from 'fs';

inquirer
  .prompt([
        {
            message : "enter your url: ",
            name : "URL",
        }
    ])
  .then((answers) => {
    const url = answers.URL;    
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    writeFile("URL.txt", url, (err) => {
    if (err) throw err;
    console.log("saved");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error);
    } else {
      console.log("error");
    }
  });

  