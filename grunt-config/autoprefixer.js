module.exports = function(grunt, options){
	return {
		options: {
			browsers: ['> 5% in US', 'last 2 versions', 'Firefox ESR', 'IE >= 8', 'iOS >= 8'],
			remove: false
		},
		dist: {
			files: [{
				expand: true,
				cwd: '.tmp/css/',
				src: '{,*/}*.css',
				dest: '.tmp/css/'
			}]
		}
	};
};
