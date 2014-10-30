
/* JavaScript content from vendors/angular-datatables-master/grunt/cssmin.js in folder common */
module.exports = {
    options: {
        banner: '<%= yeoman.banner %>'
    },
    dist: {
        files: {
            '<%= yeoman.dist %>/datatables.bootstrap.min.css': [
                '<%= yeoman.src %>/*.css'
            ]
        }
    }
};
