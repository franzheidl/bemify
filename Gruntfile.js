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
      },
      site: {
        options: {
          style: 'compressed',
          compass: true,
          sourcemap: 'none'
        },
        files: {
          'main.css': 'gh-page/src/sass/main.scss'
        }
      }
    },
    
    jade: {
      compile: {
        files: {
          './index.html': 'gh-page/src/jade/index.jade'
        }
      }
    },
    
    browserSync: {
      site: {
        bsFiles: {
          src: ['./*.css', './*.html']
        },
        options: {
          server: {
            baseDir: './'
          },
          watchTask: true,
          port: 8080
        }
      }
    },
    
    watch: {
      sass: {
        files: ['gh-page/src/sass/**/*.scss'],
        tasks: ['sass:site']
      },
      jade: {
        files: ['gh-page/src/jade/index.jade'],
        tasks: ['jade:compile']
      }
    },
    
    'gh-pages': {
      options: {
        base: './'
      },
      src: ['index.html', 'main.css', 'favicon.ico']
    }
    
  });
  
  
  grunt.registerTask('compile', ['sass:compile']);
  grunt.registerTask('build', ['sass:site', 'jade:compile'])
  grunt.registerTask('default', ['build', 'browserSync', 'watch']);
  grunt.registerTask('site', ['gh-pages']);
  
};
