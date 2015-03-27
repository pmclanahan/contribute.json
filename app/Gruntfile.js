module.exports = function(grunt) {

    grunt.initConfig({
        less: {
            sandstone: {
                files: {
                    'static/css/sandstone/sandstone-resp.css' : 'static/css/sandstone/sandstone-resp.less',
                    'static/css/contribute/contribute.css' : 'static/css/contribute/contribute.less'
                }
            },
            sandstone_prod: {
                options: {
                    compress: true
                },
                files: {
                    'static/css/sandstone/sandstone-resp.min.css' : 'static/css/sandstone/sandstone-resp.less'
                }
            },
            misc: {
                files: {
                    'static/css/misc.css' : 'static/css/misc.less'
                }
            },

        },
        jshint: {
            files: ['grunt.js', 'js/*.js'],
            options: {
                bitwise: true,
                camelcase: true,
                curly: true,
                eqeqeq: true,
                forin: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                quotmark: "single",
                regexp: true,
                undef: true,
                unused: true,
                trailing: true,
                browser: true,
                jquery: true
            }
        },
        csslint: {
            base_theme: {
                src: "css/*.css",
                rules: {
                    "empty-rules": 2,
                    "fallback-colors": 2,
                    "font-sizes": 2,
                    "important": 2,
                    "outline-none": 2,
                    "vendor-prefix": 2,
                    "zero-units": 2
                }
            }
        },
        watch: {
            scripts: {
                files: ['static/css/**/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        },
        compress: {
            main: {
                options: {
                    mode: 'gzip',
                    level: 9
                },
                expand: true,
                cwd: 'static/',
                dest: 'static/',
                src: [
                  '**/*.css',
                  '**/*.js',
                  '**/*.eot',
                  '**/*.svg',
                  '**/*.ttf',
                ],
                ext: function(file_ext) {
                    return file_ext + '.gz';
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compress');

    grunt.registerTask('default', ['less', 'watch']);
    grunt.registerTask('lintify', ['jshint', 'csslint']);
    grunt.registerTask('prep_prod', ['less', 'compress']);
};
