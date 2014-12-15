module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        project: {
            base: 'src',
            bower: 'bower_components',
            test: 'test'
        },

        connect: {
            dev: {
                options: {
                    hostname: 'localhost',
                    port: 3000,
                    livereload: true,
                    open: {
                        target: 'http://localhost:3000',
                        appName: 'Google Chrome'
                    },
                    middleware: function(connect) {
                        return [
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect.static('./src')
                        ];
                    }
                }
            }
        },

        watch: {
            dev: {
                options: {
                    livereload: true
                },
                files: ['<%= project.base %>/**/*.*']
            }
        },
    });

    grunt.registerTask('default', ['connect:dev', 'watch:dev']);
};
