module.exports.register = function(Handlebars, options) {
	'use strict';

	var _          = require('lodash');
	var semver = require('semver');

	Handlebars.registerHelper('replaceStr', function(haystack, needle, replacement) {
		if (haystack && needle) {
			return haystack.replace(needle, replacement);
		} else {
			return '';
		}
	});

	/* PARSE FIXTURE DATA
	 * @param path string - pass in the name of the JSON fixture file in assemble/fixtures/
	 * @options ??
	 *
	 */

	Handlebars.registerHelper('parseFixture', function(path, options) {
		if (!path || typeof path !== 'string') { return false; }

		var fs = require('fs');
		var nodePath = require('path');
		var fixture;

		path = nodePath.join(__dirname, '../fixtures/' + path);

		try {
			fixture = fs.readFileSync(path);
			fixture = fixture.toString('utf8');
			fixture = JSON.parse(fixture);
		} catch (err) {
			return console.error(err);
		}

		return options.fn(fixture);
	});

	Handlebars.registerHelper('log', function(data) {
		return console.log(data);
	});

	Handlebars.registerHelper('stringCompare', function(a, b, opts) {
		if (a == b) {
			return opts.fn(this);
		} else {
			return opts.inverse(this);
		}
	});

	Handlebars.registerHelper('toLowerCase', function(str) {
		return str.toLowerCase();
	});

	Handlebars.registerHelper('math', function(lvalue, operator, rvalue, options) {
		lvalue = parseFloat(lvalue);
		rvalue = parseFloat(rvalue);

		return {
			"+": lvalue + rvalue,
			"-": lvalue - rvalue,
			"*": lvalue * rvalue,
			"/": lvalue / rvalue,
			"%": lvalue % rvalue
		}[operator];
	});

	Handlebars.registerHelper('ifOr', function(a, b, opts) {
	    if (a || b) {
	        return opts.fn(this);
	    } else {
	        return opts.inverse(this);
	    }
	});

	Handlebars.registerHelper('ifAnd', function(a, b, opts) {
	    if (a && b) {
	        return opts.fn(this);
	    } else {
	        return opts.inverse(this);
	    }
	});

	Handlebars.registerHelper('svg', function(name) {
		return new Handlebars.SafeString("<svg class='icon icon-" + name + "'><use xlink:href='#icon-" + name + "'></use></svg>");
	});

	Handlebars.registerHelper('link', function(link) {
		var url = (Handlebars.Utils.isEmpty(link.url)) ? link.url : '#';
		var icon = (Handlebars.Utils.isEmpty(link.icon)) ? '{{svg "' + link.icon + '"}}' : '';
		var title = (Handlebars.Utils.isEmpty(link.title)) ? link.title : '';
		var style = (Handlebars.Utils.isEmpty(link.style)) ? ' class="' + link.style + '"' : '';
		var alt = (Handlebars.Utils.isEmpty(link.alt)) ? ' title="' + link.alt + '"' : ' title="' + title + '"';

		var link = '';

		if (url != '' && title != '') {
			link = '<a href="' + url + '"{0}{1}>{2}' + new Handlebars.SafeString(title) + '</a>';
			link = link.replace('{0}', alt);
			link = link.replace('{1}', style);
			link = link.replace('{2}', Handlebars.compile(icon));
		}

		return new Handlebars.SafeString(link);
	});

	Handlebars.registerHelper('place', function(w, h, text) {
		var width = (Handlebars.Utils.isEmpty(w)) ? w : '300';
		var height = (Handlebars.Utils.isEmpty(h)) ? 'x' + h : '';
		var text = (Handlebars.Utils.isEmpty(text)) ? '?text=' + encodeURI(text) : '';

		var url = 'http://placehold.it/' + width + height + text;

		return new Handlebars.SafeString("<img src='" + url + "' alt='Placeholder Image' />");
	});

	function getOption(option, key) {
		for (var k in option) {
			if (option.hasOwnProperty(k)) {
				if (typeof option[k][key] !== 'undefined') {
					return option[k][key];
				}
			}
		}
	}

	Handlebars.registerHelper('optionNotEmpty', function (option, key, opts) {
		var value = getOption(option, key);

		if (typeof value !== "undefined") {
	        return opts.fn(this);
	    } else {
	        return opts.inverse(this);
	    }
	});

	Handlebars.registerHelper('optionEquals', function (option, key, val, opts) {
		var value = getOption(option, key);

		if (value === val) {
	        return opts.fn(this);
	    } else {
	        return opts.inverse(this);
	    }
	});

	Handlebars.registerHelper('option', function (option, key) {
		var value = getOption(option, key);

		return new Handlebars.SafeString(value);
	});

	Handlebars.registerHelper('levelHeading', function (option, title) {
		var level = getOption(option, 'level');

		if (typeof level !== "undefined") {
			return new Handlebars.SafeString("<h" + (parseInt(level, 10) + 1) + " class=\"section-heading\">" + title + "</h" + (parseInt(level, 10) + 1) + ">");
		} else {
			return new Handlebars.SafeString("<h2 class=\"section-heading\">" + title + "</h2>");
		}
	});

	Handlebars.registerHelper('levelLink', function (option, title, basename, style) {
		var level = getOption(option, 'level');

		var style = (Handlebars.Utils.isEmpty(style)) ? ' class="' + style + '"' : '';

		if (typeof level !== 'undefined') {
			return new Handlebars.SafeString("<a href=\"#section-" + basename + "\"" + style + ">" + title + "</a>");
		} else {
			return new Handlebars.SafeString("<a href=\"#section-" + basename + "\"" + style + ">" + title + "</a>");
		}
	});

	Handlebars.registerHelper('githubLink', function (repo, dirname, basename, style) {
		var style = (Handlebars.Utils.isEmpty(style)) ? ' class="' + style + '"' : '';

		var directory = dirname.replace('app/', 'app/assemble/');

		return new Handlebars.SafeString("<a href=\"https://www.github.com/" + repo + "/edit/master/" + directory + "/" + basename + ".hbs\"" + style + " target=\"blank\">Edit on Github</a>");
		// return new Handlebars.SafeString("<a href=\"https://www.github.com/" + repo + "/issues/new?title=Issue+regarding+Section+" + basename + "\"" + style + " target=\"blank\">Open Issue on Github</a>");
	});

	Handlebars.registerHelper('levelListLink', function (option, title, basename) {
		var level = getOption(option, 'level');

		if (typeof level !== 'undefined') {
			return new Handlebars.SafeString("<li class=\"level-" + level + "\"><a href=\"#section-" + basename + "\">" + title + "</a></li>");
		} else {
			return new Handlebars.SafeString("<li class=\"level-1\"><a href=\"#section-" + basename + "\">" + title + "</a></li>");
		}
	});

	Handlebars.registerHelper('sectionClass', function (option) {
		var level = getOption(option, 'level');

		if (typeof option[0]['level'] !== 'undefined') {
			return "level-" + option[0]['level'];
		} else {
			return "level-1";
		}
	});

	Handlebars.registerHelper('code', function (lang, options) {
		return new Handlebars.SafeString('<pre><code class="language-' + lang + '">'
		+ Handlebars.Utils.escapeExpression(options.fn(this))
		+ '</code></pre>');
	});

	Handlebars.registerHelper('render', function (hbs) {
		var template = Handlebars.compile(hbs);
		return new Handlebars.SafeString(template({
			noEscape: true
		}));
	});

	/**
	 * Handlebars helpers.
	 * @namespace Handlebars.helpers
	 */
	Handlebars.registerHelper('slugify', function (component, options) {
		/**
		* Return a slug for a DOM id or class.
		* @function slugify
		* @memberof Handlebars.helpers
		* @param {string} component - string to slugify.
		* @example
		* // returns stuff-in-the-title-lots-more
		* Handlebars.helpers.slugify('Stuff in the TiTlE & Lots More');
		* @returns {string} slug
		*/
   		var slug = component.replace(/[^\w\s]+/gi, '').replace(/ +/gi, '-');

   		return slug.toLowerCase();

	});

	Handlebars.registerHelper('withSectionSort', function (array, field, options) {
		array = _.cloneDeep(array);
		var getDescendantProp = function (obj, desc) {
			var arr = desc.split('.');
			while (arr.length && (obj = obj[arr.shift()])) {
				continue;
			}
			return obj;
		};
		var result = '';
		var item;
		var i;
		var len;

		// console.log(array);

		if (typeof field === 'undefined') {
			options = field;
			array = array.sort();
			if (options.hash && options.hash.dir === 'desc') {
				array = array.reverse();
			}
			for (i = 0, len = array.length; i < len; i++) {
				item = array[i];
				result += options.fn(item);
			}
		} else {

			// var weights = array.map(d => getDescendantProp(d, field));
			//
			// weights = weights.map(function (x) {
			// 	return x.split('.').map(function (x) {
			// 		return parseInt(x)
			// 	})
			// }).sort(function (a, b) {
			// 	var i = 0, m = a.length, n = b.length, o, d;
			// 	o = m < n ? n : m;
			// 	for (; i < o; ++i) {
			// 		d = (a[i] || 0) - (b[i] || 0);
			// 		if (d) return d
			// 	}
			// 	return 0
			// }).map(function (x) {
			// 	return x.join('.')
			// });
			//
			// console.log(weights);

			array = array.sort(function (a, b) {
				var aProp = getDescendantProp(a, field);
				var bProp = getDescendantProp(b, field);

				// if (semver.gt(aProp, bProp)) {
				// 	return 1;
				// } else {
				// 	if (semver.lt(aProp, bProp)) {
				// 		return -1;
				// 	}
				// }

				function compare(a, b) {
					if (a === b) {
						return 0;
					}

					var a_components = a.split(".");
					var b_components = b.split(".");

					var len = Math.min(a_components.length, b_components.length);

					// loop while the components are equal
					for (var i = 0; i < len; i++) {
						// A bigger than B
						if (parseInt(a_components[i]) > parseInt(b_components[i])) {
							return 1;
						}

						// B bigger than A
						if (parseInt(a_components[i]) < parseInt(b_components[i])) {
							return -1;
						}
					}

					// If one's a prefix of the other, the longer one is greater.
					if (a_components.length > b_components.length) {
						return 1;
					}

					if (a_components.length < b_components.length) {
						return -1;
					}

					// Otherwise they are the same.
					return 0;
				}

				// if (aProp > bProp) {
				// 	return 1;
				// } else {
				// 	if (aProp < bProp) {
				// 		return -1;
				// 	}
				// }
				return compare(aProp, bProp);
			});
			if (options.hash && options.hash.dir === 'desc') {
				array = array.reverse();
			}
			for (item in array) {
				result += options.fn(array[item]);
			}
		}
		return result;
	});

};
