var sourceJavaScript = [
];
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            dist: {
                files: [
                    '<%= pkg.name %>/private/js/**/*.js',
                    '<%= pkg.name %>/private/css/**/*.css',
                    '<%= pkg.name %>/private/html/**/*.html',
                ],
                tasks: [
                    'default',
                ],
            },
        },
        jshint: {
            all: [
                '<%= pkg.name %>/private/js/**/*.js',
            ],
        },
        csslint: {
            all: {
                src: [
                    '<%= pkg.name %>/private/css/**/*.css',
                ],
            },
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                },
                src: [
                    'test/**/*.js',
                ],
            },
        },
        concat: {
            options: {
                separator: ';\n',
            },
            js: {
                src: [
                    '<%= pkg.name %>/private/js/index.js',
                ],
                dest: '<%= pkg.name %>/public/all.js',
            },
            css: {
                src: [
                    '<%= pkg.name %>/private/css/index.css',
                ],
                dest: '<%= pkg.name %>/public/all.css',
            },
        },
        uglify: {
            options: {
                footer: '\n',
                sourceMap: true,
            },
            combine: {
                files: [{
                    expand: true,
                    cwd: '<%= pkg.name %>/public/',
                    src: [
                        '*.js',
                        '!*.min.js',
                    ],
                    dest: '<%= pkg.name %>/public/',
                    ext: '.min.js',
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                }],
            },
        },
        cssmin: {
            combine: {
                files: [{
                    footer: '\n',
                    expand: true,
                    cwd: '<%= pkg.name %>/public/',
                    src: [
                        '*.css',
                        '!*.min.css',
                    ],
                    dest: '<%= pkg.name %>/public/',
                    ext: '.min.css',
                }],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', [
        'jshint',
        'csslint',
        'mochaTest',
        'concat',
        'uglify',
        'cssmin',

        //'lint-less-css',
        //'concat:css',
        //'less',

        //strip img metadata
        //compress images
        //copy images to public/img/min

        //template stuff
    ]);
};
