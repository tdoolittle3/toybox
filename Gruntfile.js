module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('bower.json'),
    wiredep: {
      target: {
        src: 'views/index.ejs', // point to your HTML file.
      }
    },
    sass: {
      dist: {
        files: {
          'public/css/style.css' : 'sass/style.scss'
        }
      }
    },
    watch: {
      source: {
        files: ['sass/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true, // needed to run LiveReload
        }
      }
    },
    retire: {
      js: ['*.js'], /** Which js-files to scan. **/
      node: ['node'], /** Which node directories to scan (containing package.json). **/
      options: {
         //proxy: 'http://something.something:8080',
         verbose: true,
         packageOnly: true, 
         jsRepository: 'https://raw.github.com/RetireJS/retire.js/master/repository/jsrepository.json',
         nodeRepository: 'https://raw.github.com/RetireJS/retire.js/master/repository/npmrepository.json',
         outputFile: './retire-output.json',
         ignore: 'documents,java',
         /** list of files to ignore **/
         ignorefile: '.retireignore' //or '.retireignore.json'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-retire');
  // Default task(s).
  grunt.registerTask('default', ['sass', 'retire']);

};