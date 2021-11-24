// const inquirer = require('inquirer');

// inquirer.prompt ([
//   {
//     type: 'input',
//     names: 'name',
//     message: 'What is your name?'
//   }
// ])
// .then(answers = console.log(answers));

const fs = require('fs');

const generatePage = require('./src/page-template');



const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;



fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});



// printProfileData(profileDataArgs);


// const fs = require('fs');


// const generatePage = (names, github) => {
//   return `
//   <!DOCTYPE html> 
//   <html lang="en"> 
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Portfolio Demo</title>
//   </head>

//   <body>
//     <h1>${names}</h1>
//     <h2><a href="https://github.com/${github}">Github</a></h2>
//   </body>
//   </html>
//   `;
// };

// fs.writeFile('index.html', generatePage(names, github), err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });