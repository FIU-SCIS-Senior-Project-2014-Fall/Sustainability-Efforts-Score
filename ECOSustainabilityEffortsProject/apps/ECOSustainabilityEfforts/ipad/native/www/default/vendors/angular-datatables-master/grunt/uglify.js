
/* JavaScript content from vendors/angular-datatables-master/grunt/uglify.js in folder common */
module.exports = {
    options: {
        banner: '<%= yeoman.banner %>'
    },
    dist: {
        files: {
            '<%= yeoman.dist %>/angular-datatables.min.js': [
                '<%= yeoman.build %>/angular-datatables.js'
            ]
        }
    }
};
