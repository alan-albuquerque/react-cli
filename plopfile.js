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
        choices: ['Store'],
        message: 'What you need? 😊'
      }
    ],
    actions: function (data) {
      const {generateType} = data;
      const templateBase = template;
      const extension = template === 'js' ? 'js' : 'ts';
      var folderName;
      var templateFolderName;

      var directory = basePath;

      switch (generateType) {
        case 'Store':
          data.isStore = true;
          folderName = 'store';
          templateFolderName = 'store';
          break;
      }

      return [
        {
          type: 'add',
          skipIfExists: true,
          path: buildPath(`{{'dashCase' name}}/index.${extension}`, directory, folderName),
          templateFile: `./templates/${templateFolderName}/${templateBase}/index.tpl`
        },
        {
          type: 'add',
          skipIfExists: true,
          path: buildPath(`{{'dashCase' name}}/types.${extension}`, directory, folderName),
          templateFile: `./templates/${templateFolderName}/${templateBase}/types.tpl`
        },
        {
          type: 'add',
          skipIfExists: true,
          path: buildPath(`{{'dashCase' name}}/actions.${extension}`, directory, folderName),
          templateFile: `./templates/${templateFolderName}/${templateBase}/actions.tpl`
        },
        {
          type: 'add',
          skipIfExists: true,
          path: buildPath(`{{'dashCase' name}}/reducer.${extension}`, directory, folderName),
          templateFile: `./templates/${templateFolderName}/${templateBase}/reducer.tpl`
        },
        {
          type: 'add',
          skipIfExists: true,
          path: buildPath(`{{'dashCase' name}}/effects.${extension}`, directory, folderName),
          templateFile: `./templates/${templateFolderName}/${templateBase}/effects.tpl`
        },
      ];
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
