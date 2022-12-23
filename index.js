const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({  title, description, explain, installation, usage, credits, license  }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div>
    <p>## ${title}</p>
        <div></div>
    <p>## ${description}</p>
        <div></div>
    <p>## ${explain}</p>
        <div></div>
    <p>## ${installation}</p>
        <div></div>
    <p>## ${usage}</p>
        <div></div>
    <p>## ${credits}</p>
        <div></div>
    <p>## ${license}</p>    
  </div>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project called?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your project.',
    },
    {
      type: 'input',
      name: 'explain',
      message: 'Why did you make your project?',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'Describe how to install your project.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators.',
    },
    {
      type: 'input',
      name: 'license',
      message: 'List third-pary assets that require attribution.'
    }
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created readme!')
    );
  });
