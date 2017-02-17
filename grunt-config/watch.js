module.exports = function(grunt, options) {
	var yeoman = options.yeoman;
	return {
		compass: {
			files: [
				yeoman.app + '/sass/**/*.{scss,sass}',
				yeoman.app + '/img/**/*.png',
				'!' + yeoman.app + '/sass/modules/_assemble-modules.scss',
				'!' + yeoman.app + '/sass/partials/_assemble-partials.scss',
				'!' + yeoman.app + '/sass/templates/_assemble-templates.scss'
			],
			tasks: ['compass:server', 'autoprefixer'],
			options: {
				debounceDelay: 500,
			}
		},
		styles: {
			files: [yeoman.app + '/css/**/*.css'],
			tasks: ['copy:styles', 'autoprefixer'],
			options: {
				debounceDelay: 500,
			}
		},
		assemble: {
			files: [
				yeoman.app + '/assemble/modules/*.hbs',
				yeoman.app + '/assemble/partials/**/*.hbs',
				yeoman.app + '/assemble/partials/**/*.md',
				yeoman.app + '/assemble/includes/*.hbs',
				yeoman.app + '/assemble/layouts/*.hbs',
				yeoman.app + '/assemble/*.hbs',
				yeoman.app + '/assemble/**/*.json',
				yeoman.app + '/assemble/helpers/helpers.js'
			],
			tasks: ['assemble', 'compass:server', 'autoprefixer'],
			options: {
				debounceDelay: 500,
				event: ['changed']
			}
		},
		fixtures: {
			files: [
				yeoman.app + '/assemble/**/*.json'
			],
			tasks: ['assemble', 'compass:server', 'autoprefixer'],
			options: {
				debounceDelay: 500,
				event: ['added', 'deleted']
			}
		},
		execute: {
			files: [
				yeoman.app + '/assemble/modules/*.hbs',
				yeoman.app + '/assemble/partials/*.hbs',
				yeoman.app + '/assemble/partials/*.md',
				yeoman.app + '/assemble/*.hbs'
			],
			tasks: ['clean:assemble', 'assemble', 'execute-sync'],
			options: {
				debounceDelay: 500,
				event: ['added', 'deleted']
			}
		}
	};
};
