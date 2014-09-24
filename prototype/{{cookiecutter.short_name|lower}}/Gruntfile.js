var sourceJavaScript = [
];
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: [
                '<%= pkg.name %>/public/static/max/js/*.js',
                '<%= pkg.name %>/public/static/min/js/*.js',
            ],
        },
        mocha: {
        },
        concat: {
            options: {
                separator: ';\n',
            },
            dist: {
                src: [
                    '<%= pkg.name %>/public/static/max/js/index.js',
                ],
                dest: '<%= pkg.name %>/public/static/max/js/all.js',
            },
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
            },
            build: {
                src: '<%= pkg.name %>/public/static/max/js/all.js',
                dest: '<%= pkg.name %>/public/static/min/all.js',
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', [
        'jshint',
        //'mocha',
        'concat',
        'uglify',

        //'lint-less-css',
        //'concat:css',
        //'less',

        //strip img metadata
        //compress images
        //copy images to public/img/min

        //template stuff
    ]);
};
