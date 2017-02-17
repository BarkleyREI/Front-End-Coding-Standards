module.exports = function(grunt, options){
	var yeoman = options.yeoman;
	return {
		target: {
			src: [yeoman.app + '/lib/updateScss.js']
		}
	};
};
