module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        watch:{
            less:{
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            }
        },
        uglify:{
            target:{
                files:{
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        },
        replace:{
            dev:{
                options:{
                    patterns:[
                        {
                            match: 'ENDERECO_CSS',
                            replacement: '../dev/styles/main.css'
                        }
                    ]
                },
                files:[
                    {
                        expand: true,
                        flatten: true,
                        src:['src/index.html'],
                        dest: 'dev/'
                    }
                ]
            }
        },
        htmlmin:{
            dist:{
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    
                },
                files:{
                    'dist/index.html': 'src/index.html'
                }
            }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less'])
    grunt.registerTask('build', ['replace:dev'], ['htmlmin'], ['uglify'])
}

