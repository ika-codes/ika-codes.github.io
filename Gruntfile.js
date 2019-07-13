module.exports = function (grunt) {

    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dev: {
                options: {
                    outputStyle: 'compressed',
                    sourceMap: true
                },
                src: 'sass/*.scss',
                dest: 'css/main.css'
            }
        },

        autoprefixer: {
            dev: {
                options: {
                    browsers: ['last 10 versions', 'ie 8', 'ie 9'],
                    map: true
                },
                files:{
                    'css/main.css': 'css/main.css'
                }
            }
        },

        watch: {
            dev: {
                options: {
                    livereload: true
                },
                files: ['**/*.sass', '**/*.scss'],
                tasks: ['compile']
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './',
                    open: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('compile', ['sass', 'autoprefixer']);

    grunt.registerTask('dev', ['browserSync:dev', 'watch:dev']);
};