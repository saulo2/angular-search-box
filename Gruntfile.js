module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        jshint: {
            options: {
                predef: {
                    angular: false
                }
            },
            target: {
                src: ["Gruntfile.js", "src/js/**/*.js", "test/js/**/*.js"]
            }
        },

        angular_template_inline_js: {
            options: {
                basePath: "src/html"
            },
            target: {
                expand: true,
                src: ["src/js/*.js"],
                dest: "target"
            }
        },

        copy: {
            target: {
                files: [{
                    src: "target/src/js/angular-search-box.js",
                    dest: "target/js/angular-search-box.js"
                }]
            }
        },

        remove: {
            target: {
                dirList: ["target/src"],
            },

            clean: {
                dirList: ["target"],
            },
        },

        uglify: {
            target: {
                src: ["target/js/angular-search-box.js"],
                dest: "target/js/angular-search-box.min.js"
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-angular-template-inline-js");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-remove");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("default", ["jshint", "angular_template_inline_js", "copy", "remove:target", "uglify"]);

    grunt.registerTask("clean", ["remove:clean"]);
};