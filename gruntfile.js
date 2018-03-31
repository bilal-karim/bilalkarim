module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Concat
        concat: {
            map: {
                src: [
                    'js/jquery.js',
                    'js/site.js'
                ],
                dest: 'js/all.js'
            }
        },
        // Uglify
        uglify: {
            development: {
                options: {
                    preserveComments: false
                },
                files: {
                    'js/site.min.js': 'js/all.js',
                }
            }
        },
        // CSS Minify
        cssmin: {
            options: {
                shorthandCompacting: true,
                keepSpecialComments: 0
            },
			target: {
				files: {
					'css/style.min.css': [
                        'css/style.css'
					]
				}
			}
        },
        watch: {
            scripts: {
                files: ['js/*.js','css/*.css'],
                tasks: ['concat','uglify','cssmin'],
                options: {
                    spawn: false,
                },
            },
        }
    });
    // Load Tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Run Tasks
    grunt.registerTask('default', ['concat:map', 'uglify', 'cssmin', 'watch']);
};
