module.exports = function(grunt){
    grunt.initConfig({
        cssmin : {
            dist : {
                files : {
                    "style.min.css" : ["css/*.css"]
                }
            }
        },
        watch : {
            dist : {
                files : ["css/*.css"],
                tasks : ["cssmin"]
            }
        }
    });
 
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-watch");
}