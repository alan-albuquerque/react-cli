const path = require('path');
const pluralize = require('pluralize');
const finder = require('find-package-json');
const pjson = finder(process.cwd()).next().value;

let userPath,
  template = 'js';

module.exports = function (plop) {
  userPath = (pjson.reactCli && pjson.reactCli.basePath) || '';
  template = 'ts';
  const userConfig = path.resolve(process.cwd(), userPath);
  const basePath = userConfig || process.cwd();

  plop.setPrompt('fuzzypath', require('inquirer-fuzzy-path'));

  plop.setGenerator('React CLI', {
    description: 'Create new stack',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Give me a name, please 😀'
      },
      {
        type: 'list',
        name: 'generateType',
        choices: ['Store', 'Screen'],
        message: 'What you need? 😊'
      }
    ],
    actions: function (data) {
      const {generateType} = data;
      const templateBase = template;
      const extension = template === 'js' ? 'js' : 'ts';
      var foldeToCreateTemplate;
      var templateFolderName;
      var directory = basePath;

      function generateAdd(filePrefix, templateFilename) {
        if (!templateFilename) {
          templateFilename = filePrefix;
        }
        return {
          type: 'add',
          skipIfExists: true,
          path: buildPath(`{{'pascalCase' name}}/${filePrefix}.${extension}`, directory, foldeToCreateTemplate),
          templateFile: `./templates/${templateFolderName}/${templateBase}/${templateFilename}.tpl`
        }
      }

      switch (generateType) {
        case 'Store':
          foldeToCreateTemplate = 'store';
          templateFolderName = 'store';
          return [
            generateAdd('index'),
            generateAdd('types'),
            generateAdd('actions'),
            generateAdd('reducer'),
            generateAdd('effects'),
          ];
        case 'Screen':
          foldeToCreateTemplate = 'screens';
          templateFolderName = 'screens';
          return [
            generateAdd('{{name}}Screen', 'screen'),
            generateAdd('index'),
          ];
      }
    }
  });

  plop.setHelper('switch', function (value, options) {
    this._switch_value_ = value;
    var html = options.fn(this);
    delete this._switch_value_;
    return html;
  });

  plop.setHelper('case', function (value, options) {
    if (value === this._switch_value_) {
      return options.fn(this);
    }
  });

  plop.setHelper('singular', function (value) {
    return pluralize.singular(value);
  });

  function buildPath(name, chosenDir, folderName = 'state') {
    return `${chosenDir}/${folderName}/${name}`;
  }
};
