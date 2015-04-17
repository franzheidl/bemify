module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    
    sass: {
      compile: {
        options: {
          style: 'expanded',
          compass: false
        },
        files: {
          './tmp/test.css': 'test/test.scss'
        }
      }
    },
    
    watch: {
      sass: {
        files: ['sass/*.scss', 'test/**/*.scss'],
        tasks: ['sass:compile']
      }
    }
    
  });

  
  grunt.registerTask('default', ['watch']);
};
