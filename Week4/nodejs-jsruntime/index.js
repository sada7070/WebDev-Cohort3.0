// Create a command line interface that lets the user specify a file path and the nodejs process counts the number of words inside it.
// here we used 'commander' package.

const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based task.')
  .version('0.8.0');

program.command('count')
  .description('count the number of words in a file.')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
        if(err) {
            console.log(err);
        }
        else{
            const words = data.split(' ').length;
            console.log(`There are ${words} words in ${file}.`);
        }
    })
    
  });

program.parse();