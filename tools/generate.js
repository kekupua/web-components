const { generateTemplateFiles } = require('generate-template-files');

generateTemplateFiles([
  {
    option: 'Create Component',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/component',
    },
    stringReplacers: [{ question: 'What is your component name?', slot: '__component__' }],
    output: {
      path: './src/components/__component__(lowerCase)',
    },
  },
]);