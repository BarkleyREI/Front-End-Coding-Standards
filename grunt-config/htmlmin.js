module.exports = function(grunt, options){
	var yeoman = options.yeoman;
	return {
		dist: {
			options: {
				keepClosingSlash: true,
			},
			files: [{
				expand: true,
				cwd: yeoman.app,
				src: '*.html',
				dest: yeoman.dist
			}]
		}
	};
};
