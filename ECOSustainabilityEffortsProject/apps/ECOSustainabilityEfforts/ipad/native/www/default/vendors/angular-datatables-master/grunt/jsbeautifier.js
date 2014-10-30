
/* JavaScript content from vendors/angular-datatables-master/grunt/jsbeautifier.js in folder common */
module.exports = {
    dist: {
        files: [{
            dot: true,
            src: [
                '<%= yeoman.build %>',
                '<%= yeoman.dist %>/*',
                '!<%= yeoman.dist %>/.git*'
            ]
        }]
    },
    server: '<%= yeoman.build %>'
};