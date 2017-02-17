module.exports = function(grunt, options){
	var yeoman = options.yeoman;
	return {
		bsFiles: {
			src : [
				'app/**/*.html',
				// 'app/**/*.hbs',
				// 'app/**/*.json',
				'app/**/*.js',
				'.tmp/**/*.css'
			]
		},
		options: {
			watchTask: true,
			reloadDebounce: 500,
			reloadDelay: 1000,
			server: {
				baseDir: [yeoman.app, '.tmp']
			}
		}
	};
};
