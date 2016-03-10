'use strict';
var generators = require('yeoman-generator');
var chalk = require('chalk');

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments);
    },
    initializing: function() {
        //初始化操作，存储变量
        this.pkg = this.templatePath('package.json');
        this.mainJs = this.templatePath('base.js');
    },

    askFor: function() {
        var done = this.async();
        var prompts = [{
            type: 'input',
            name: 'title',
            message: '组件名称（英文）',
            default: 'demo'
        }, {
            type: 'input',
            name: 'author',
            message: '作者',
            default: 'OE'
        },{
            type: 'input',
            name: 'desc',
            message: '组件说明',
            default: ''
        }];
        this.prompt(prompts, function(answers) {
            this.title = answers.title;
            this.author = answers.author;
            this.desc = answers.desc;
            done();
        }.bind(this));
    },

    writing: {
        mainJs: function() {
            this.fs.copyTpl(
                this.mainJs,
                this.destinationPath(this.title + '.js'), {
                    title: this.title,
                    author: this.author,
                    desc: this.desc
                }
            );
        }
    },
    end: function() {
        this.log(chalk.bgGreen.bold('初始化完成!'))
    }
});