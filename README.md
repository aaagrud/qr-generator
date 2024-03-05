# QR Code Generator

This Node.js script prompts the user to enter a URL and generates a QR code image and saves the URL to a text file.

## Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager)

## Installation

1. Clone the repository or download the ZIP file.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the required dependencies.

## Usage

1. Run the script using `node script.js`.
2. Enter the URL when prompted.
3. The script will generate a QR code image (`qr_img.png`) containing the URL and save the URL to a text file (`URL.txt`).

## Dependencies

- [inquirer](https://www.npmjs.com/package/inquirer): For user input prompts.
- [qr-image](https://www.npmjs.com/package/qr-image): For generating QR code images.
- [fs](https://nodejs.org/api/fs.html): For file system operations.
