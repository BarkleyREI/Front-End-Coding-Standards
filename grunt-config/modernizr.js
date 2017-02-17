module.exports = function(grunt, options){
	var yeoman = options.yeoman;
	return {
		dist: {
			cache: true,
			devFile: 'app/js/plugins/modernizr.js',
			dest: 'dist/js/plugins/modernizr.optimized.js',
			crawl: true,
			classPrefix: 'md-',
			tests: [],
			excludeTests: [
				'hidden',
				'video',
				'flash',
				'svg'
			],
			options: [
				'mq',
				'html5shiv',
				'setClasses'
			],
			files: {
				src: [yeoman.app + '/js/**/*.js',
					yeoman.app + '/css/**/*.css',
					yeoman.app + '/sass/**/*.scss'
				]
			},
			uglify: true
		}
	}
};
