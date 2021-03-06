module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        tv4: {
            validateUiJson :{
                options: {
                    fresh:true,
                    root: 'https://schema.management.azure.com/schemas/0.0.1-preview/CreateUIDefinition.MultiVm.json'
                },
                src: ['createUiDefinition.json']
            },
            validateMainTemplate: {
                options: {
                    fresh:true,
                    root: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#'
                },
                src: ['mainTemplate.json','nested/*.json']
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-tv4');

    // Default task(s).
    grunt.registerTask('validateJson',['tv4:validateUiJson','tv4:validateMainTemplate']);
    grunt.registerTask('default', 'validateJson');

};
