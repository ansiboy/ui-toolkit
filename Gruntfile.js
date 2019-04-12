module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    let pkg = grunt.file.readJSON('package.json');

    let license = `
/*
 * ${pkg.name} v${pkg.version}
 * ${pkg.repository.url}
 *
 * Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
 * Licensed under the MIT License.
 *
 */`;

    grunt.initConfig({
        browserify: {
            dist: {
                files: {
                    'dist/index.js': ['out/index.js']
                }
            },
            options: {
                banner: license,
                browserifyOptions: {
                    standalone: pkg.name,
                },
                external: ['react','react-dom'],
            },
        },
        shell: {
            src: {
                command: `tsc -p src`
            }
        }
    });

    grunt.registerTask('default', ['shell', 'browserify']);// 'babel', 
}