# aws-dark-mode
This userscript is designed to automatically set the AWS console theme to dark mode. It is designed to be used with Tampermonkey or any similar userscript extension.

## Description

When working with AWS, the default theme is light mode. If you switch between different AWS accounts, the theme setting is not preserved and defaults back to light mode. This userscript addresses this issue by automatically setting the awsc-color-theme cookie to "dark" whenever you navigate to an AWS console page.

## Installation

1. Install a userscript manager extension in your browser. This script was tested on [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en).
2. Once installed, click on [aws-dark-mode script](https://github.com/XargsUK/aws-dark-mode/raw/main/darkmode.user.js)
3. Click Install 

## Usage

Once the userscript is installed, it will run automatically whenever you navigate to an AWS console page. If the AWS theme is set to light mode, the userscript will switch it to dark mode and reload the page to apply the new theme. To turn it off, open your userscript extension and either toggle it off or remove the script. 
