module.exports = function (grunt) {

    var build_dir = 'out';
    var release_dir = 'dist';

    require('load-grunt-tasks')(grunt);
    let pkg = grunt.file.readJSON('package.json');

    let license = `
/*!
 * UI-TOOLKIT v${pkg.version}
 * https://github.com/ansiboy/ui-toolkit
 *
 * Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
 * Licensed under the MIT License.
 *
 */`

    let lib_name = 'ui'
    let lib_js_banner = `
 ${license}
 (function(factory) { 
     if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') { 
         // [1] CommonJS/Node.js 
         var target = module['exports'] || exports;
         var mod = factory(target, require);
         Object.assign(target,mod);
     } else if (typeof define === 'function' && define['amd']) {
         define(factory); 
     } else { 
         factory();
     } 
 })(function() {
 `;
    let lib_js_footer =
        `\n\window[\'${lib_name}\'] = window[\'${lib_name}\'] || ${lib_name} \n\
                             \n return ${lib_name};\n\
             });`



    grunt.initConfig({
        concat: {
            lib_es6: {
                options: {
                    banner: lib_js_banner,
                    footer: lib_js_footer,
                },
                src: [`${build_dir}/${lib_name}.js`],
                dest: `${release_dir}/index.js`
            },
            lib_declare: {
                options: {
                    banner: `
/// <reference path="../out/ui.d.ts"/>

declare module "maishu-ui-toolkit" { 
    export = ui; 
}`
                },
                src: [],
                dest: `${release_dir}/index.d.ts`
            }
        },
        shell: {
            stand: {
                command: 'tsc -p ./src',
                options: {
                    failOnError: false
                }
            }
        },
    })

    grunt.registerTask('default', ['shell', 'concat']);

}