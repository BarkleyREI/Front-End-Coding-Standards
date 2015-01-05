
var index = lunr(function () {
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



documentTitles["readme.html#readme"] = "README";
index.add({
    url: "readme.html#readme",
    title: "README",
    body: "# README  "
});

documentTitles["readme.html#front-end-coding-standards"] = "Front-end Coding Standards";
index.add({
    url: "readme.html#front-end-coding-standards",
    title: "Front-end Coding Standards",
    body: "## Front-end Coding Standards  The standards by which the dev team at BarkleyREI in Pittsburgh codes every project.  Uses [beautifuldocs](http://beautifuldocs.com)  "
});

documentTitles["readme.html#how-to-compile"] = "How to compile";
index.add({
    url: "readme.html#how-to-compile",
    title: "How to compile",
    body: "## How to compile  `npm install -g beautifuldocs`  Navigate to directory in terminal  `bfdocs --theme=./themes/rei manifest.json`  "
});

documentTitles["readme.html#how-to-push-to-gh-pages"] = "How to push to gh-pages";
index.add({
    url: "readme.html#how-to-push-to-gh-pages",
    title: "How to push to gh-pages",
    body: "## How to push to gh-pages  `git add .`  `git commit -m \&quot;blah blah commit message\&quot;`  `git push origin master`  At this point you have pushed it to the github repository (hopefully your forked version)  Now to subtree into the pages branch  `git subtree push --prefix out origin gh-pages`  No further steps, this pushes it to the branch and up to the repo  "
});

documentTitles["readme.html#code-reviews"] = "Code reviews";
index.add({
    url: "readme.html#code-reviews",
    title: "Code reviews",
    body: "## Code reviews  All recommendations in this documentation should be adhered to during code reviews. Exceptions can be discussed but should be avoided. "
});



documentTitles["projects.html#project-standards-and-practices"] = "Project Standards and Practices";
index.add({
    url: "projects.html#project-standards-and-practices",
    title: "Project Standards and Practices",
    body: "# Project Standards and Practices  "
});

documentTitles["projects.html#configuration"] = "Configuration";
index.add({
    url: "projects.html#configuration",
    title: "Configuration",
    body: "## Configuration  "
});

documentTitles["projects.html#readme"] = "README";
index.add({
    url: "projects.html#readme",
    title: "README",
    body: "### README  Be sure to include a README with your project that includes any special cases someone else will need to accomplish in order to build the assets.  You can also include notes on your project that you feel are important to know for a dev picking up the project.  "
});

documentTitles["projects.html#example"] = "Example";
index.add({
    url: "projects.html#example",
    title: "Example",
    body: "#### Example ````markdown Slippery Rock University  Supported: IE8+, Android 2.3+, Blackberry  Requires `compass watch` to be run in CSS directory.  Sprite images placed in /css/i directory get added to spritesheet automatically.  Plugins used: - owlCarousel --&gt; Mastheads on home page ````  "
});

documentTitles["projects.html#code-reviews"] = "Code Reviews";
index.add({
    url: "projects.html#code-reviews",
    title: "Code Reviews",
    body: "## Code Reviews  Code reviews are encouraged for static projects. They help reduce errors and help enforce coding standards.  All code reviews should enforce standards to the closest degree, and exceptions should be documented and well-explained.  Code reviews can be done in person or via email.  "
});



documentTitles["layout.html#layout"] = "Layout";
index.add({
    url: "layout.html#layout",
    title: "Layout",
    body: "# Layout  - Do not use HTML abstraction languages unless they are shorthand that expands to raw HTML (e.g. Emmet). Never save development files in these formats. - Create an index.html that is a Table of Contents for the project. &gt; This is especially useful to QA to know what to test.  "
});

documentTitles["layout.html#responsive-web-design"] = "Responsive Web Design";
index.add({
    url: "layout.html#responsive-web-design",
    title: "Responsive Web Design",
    body: "## Responsive Web Design  - Always design mobile first (using min-width media queries) &gt; \&quot;max-width\&quot; is used as an exception, never the norm &gt; &gt; Bring any difficulties to the group. It is never acceptable to do desktop-first. - If using image sprites, target both small and high-res screens to prevent downloading multiple assets. - Icon fonts are recommended, but not required.  "
});

documentTitles["layout.html#resources"] = "Resources";
index.add({
    url: "layout.html#resources",
    title: "Resources",
    body: "### Resources  - [Icomoon.io](http://icomoon.io)  "
});

documentTitles["layout.html#html"] = "HTML";
index.add({
    url: "layout.html#html",
    title: "HTML",
    body: "## HTML  "
});

documentTitles["layout.html#foundation"] = "Foundation";
index.add({
    url: "layout.html#foundation",
    title: "Foundation",
    body: "### Foundation  Use foundation grid classes to build layout. - http://foundation.zurb.com/docs/components/grid.html  "
});

documentTitles["layout.html#reusable-wrapper-vs-container"] = "Reusable wrapper vs. container";
index.add({
    url: "layout.html#reusable-wrapper-vs-container",
    title: "Reusable wrapper vs. container",
    body: "### Reusable wrapper vs. container  Consider using a wrapper inside main blocks instead of a global container.  e.g.  ````html &lt;header&gt; 	&lt;div class=\&quot;wrapper\&quot;&gt;  	&lt;/div&gt; &lt;/header&gt; ````  vs  ````html &lt;div class=\&quot;container\&quot;&gt; 	&lt;header&gt;  	&lt;/header&gt; &lt;/div&gt; ````  "
});

documentTitles["layout.html#other"] = "Other";
index.add({
    url: "layout.html#other",
    title: "Other",
    body: "## Other  - Use build scripts to minify and optimize CSS and JS. - Place references to all site scripts inside a single markup file, to keep track of compiled files, and later, to reduce build time. - Classes for styles, IDs for accessibility and JavaScript only - Omit protocol from embedded external resources (//www.google.com/image.png) - All tags must be lowercase. - HTML must validate to HTML5. - Accessibility checklist (http://a11yproject.com/checklist.html) ````markdown [] ARIA Roles [] Links have :focus state and :active state [] Images have alt text [] Provide alternatives for users without JavaScript (within reason) [] Labels for all form elements [] Group forms with fieldset and describe with legend ```` - Accessibility jump navigation "
});



documentTitles["css.html#css"] = "CSS";
index.add({
    url: "css.html#css",
    title: "CSS",
    body: "# CSS  All projects will use SASS if possible. Use a variety of tools to accomplish this.  - Compass - Grunt - Gulp - Preprocessor application  If editable assets need delivered to a client, be sure to include a README on how to compile the assets.  "
});

documentTitles["css.html#naming-conventions"] = "Naming Conventions";
index.add({
    url: "css.html#naming-conventions",
    title: "Naming Conventions",
    body: "## Naming Conventions  Use `-` in class and id names, .global-header, #home-page-gallery, etc  _Do not use camel casing._  Use content agnostic naming. &gt; _e.g. try to avoid `.contact-information;` Use something like `.sidebar-callout`, or `.sidebar` and `.callout`_  "
});

documentTitles["css.html#modular-coding"] = "Modular coding";
index.add({
    url: "css.html#modular-coding",
    title: "Modular coding",
    body: "## Modular coding  Using the idea from [SMACSS](http://smacss.com/), we approach front end coding tasks as “modules” where each module can be copied into a new container and it should render.  Create a SCSS file for the module under the modules directory.  Do not include layout positioning styles in the module. Add these styles to a file under the layout directory.  For instance:  Style a wysiwyg callout module under modules, then add any padding or positioning in _sidebar.scss or _layout.scss  Use your best judgement for where styles go.  &lt;blockquote&gt;When in doubt, break it out. -Ryan Sprake&lt;/blockquote&gt;  "
});

documentTitles["css.html#css-guidelines"] = "CSS Guidelines";
index.add({
    url: "css.html#css-guidelines",
    title: "CSS Guidelines",
    body: "## CSS Guidelines  - Use SASS unless not possible. - All font families must have fallbacks to web safe fonts (e.g. serif, sanserif). - Split into multiple files as reasonable as possible. - Rule of 3 for compiled CSS files ````markdown Global site (global or main.css) Specific site section (home, level) One-off page ```` - For large existing projects, new projects create new CSS file instead of appending to existing. - Add styles to deal with no-js situations. - If possible, do not override existing styles with print styles. Instead, use media queries to style the default unstyled document  ````html &lt;link rel=\&quot;stylesheet\&quot; media=\&quot;print\&quot; href=\&quot;print.css\&quot; /&gt; ````  "
});

documentTitles["css.html#sass-guidelines"] = "SASS Guidelines";
index.add({
    url: "css.html#sass-guidelines",
    title: "SASS Guidelines",
    body: "## SASS Guidelines  - _Never_ use IDs for styling - _Never_ use !important unless last resort - Regard selector performance. CSS works from right to left, so things like wildcard selectors and deeply nested selectors are very inefficient. - Style ordering: ````markdown @extend regular styles @include nested selectors ```` - Selector Ordering: ````markdown Non-layout affecting      background-color: green;     font-family: Arial, san-serif;     color: blue;  Layout affecting  	border: thin solid red; 	margin: 1em; 	padding: 1em;  Layout  	width: 100% 	height: 2px; 	position: absolute; 	left: 0; 	top: 0;  ```` - All vendor prefixes must use mixins or autoprefixer. - Try not to nest more than 3 levels deep. - Try not to nest more than 50 lines long. - Do not place styles in main SCSS files, only in included SCSS files.  "
});

documentTitles["css.html#class-vs-placeholder"] = "Class vs Placeholder";
index.add({
    url: "css.html#class-vs-placeholder",
    title: "Class vs Placeholder",
    body: "### Class vs Placeholder  Use placeholder when you don't need the base class name on the element.  ````scss %icon { 	display: block; }  .menu { 	@extend %icon; }  compiles to: .menu { display: block; }   .icon { 	display: block; }  .menu { 	@extend .icon; }  compiles to: .icon, .menu { display: block; } ````  "
});

documentTitles["css.html#theme-variables"] = "Theme Variables";
index.add({
    url: "css.html#theme-variables",
    title: "Theme Variables",
    body: "### Theme Variables  Save all theme variables in `_theme-variables.scss`  "
});

documentTitles["css.html#colors"] = "Colors";
index.add({
    url: "css.html#colors",
    title: "Colors",
    body: "#### Colors  All colors must be variables. #fff and #000 are excused. Use [http://name-of-color.com/](http://name-of-color.com/) or similar website to name the color. Assign the color to a semantically named variable if the color is used frequently.  "
});

documentTitles["css.html#font-families"] = "Font families";
index.add({
    url: "css.html#font-families",
    title: "Font families",
    body: "#### Font families  Be sure to include at least one fallback for all fonts, even if it is just 'sans-serif'.  ````css font-family: 'Lato', Arial, sans-serif; ````  Use webfonts as a preference to embedded fonts. - Google Fonts - Typekit  "
});

documentTitles["css.html#icon-fonts"] = "Icon fonts";
index.add({
    url: "css.html#icon-fonts",
    title: "Icon fonts",
    body: "#### Icon fonts  [Icomoon](https://icomoon.io/)  [FontAwesome](http://fontawesome.io/)  Some of these services may include their own files that declare class names or variables.  "
});

documentTitles["css.html#numbers"] = "Numbers";
index.add({
    url: "css.html#numbers",
    title: "Numbers",
    body: "#### Numbers  Save numbers with meaning (such as z-indexes or font sizes) to variables.  "
});

documentTitles["css.html#media-queries"] = "Media Queries";
index.add({
    url: "css.html#media-queries",
    title: "Media Queries",
    body: "### Media Queries  Embed media queries inline where it is needed, instead of combining them at the end of the file.  ````sass .module {  	h1 { 		color: $red;  		@include bp(medium) { 			color: $green; 		} 	}  } ````  For a one-off media query, it can be embedded directly or with a custom mixin.  If a media query is needed in more than two places, it should be given a name in `_theme-variables.scss`  "
});

documentTitles["css.html#other"] = "Other";
index.add({
    url: "css.html#other",
    title: "Other",
    body: "## Other  - Include file ordering: ````markdown 	Compass 	Authored Dependencies (colors, mixins) 	Sprites 	Global Styles 	Layout 	Modules 	Plugin Styles 	Helper Styles 	Print Styles ```` - File structure: https://github.com/BarkleyREI/sass_boilerplate - All modules follow pattern: https://gist.github.com/nessthehero/7562936 - Use em for everything, except where impossible (use our em mixins) - Use px for special positioning or exceptions - Use rem if you like (reference) - On dev/qa, compile expanded with line mapping. - On live, compile compressed. "
});



documentTitles["javascript.html#javascript"] = "JavaScript";
index.add({
    url: "javascript.html#javascript",
    title: "JavaScript",
    body: "# JavaScript  - As modular as possible - For large existing projects, new projects create new JS file instead of appending to existing - Always place spaces between operators (+, -, *, /, %), and after function  ````javascript function functionName() { 	var foo = i + 1; } ````  - Only use jQuery plugins or JavaScript solutions if the problem requires it. - Do not use JS if CSS is applicable. - Do not use polyfills for non-essential features. It is okay if these features are non-existant or degraded on older browsers.  "
});

documentTitles["javascript.html#ids-vs-class-names"] = "IDs vs Class Names";
index.add({
    url: "javascript.html#ids-vs-class-names",
    title: "IDs vs Class Names",
    body: "## IDs vs Class Names  Always use IDs for targeting a specific section with jQuery or JavaScript.  If you must use class names (for repeating elements or large groups of items), use .js- as a naming convention.  e.g. .js-save-favorite  Do not use .js- class names in CSS. Create a seperate class name to target with CSS. - In our example, you could use .save-favorite and .js-save-favorite. This describes your intent to another coder/dev.  "
});

documentTitles["javascript.html#jshint"] = "JSHint";
index.add({
    url: "javascript.html#jshint",
    title: "JSHint",
    body: "## JSHint  - Always use semicolons. - Always surround blocks of code in loops and conditionals with curly braces. - Always use “use strict” in every function. - Always use for . . . in  to loop through an object. Be sure to test for hasOwnProperty to filter out unwanted or inherited properties. - Always wrap IIFEs in parenthesis. - Always indent 1 tab character. Spaces are only permitted for alignment. - Always define a variable before using it. - Never use bitwise operators(^, |, etc.). - Never leave unused variables. - Never use arguments.caller or arguments.callee. - Never use incrementers like ++ or --. Instead use var += 1 or -= 1 - Never leaving trailing whitespace. - Use === and !== - Use single quotes until you need to write HTML to the document. &gt; `var anchor = ‘&lt;a href=”index.html”&gt;&lt;/a&gt;’;`  "
});

documentTitles["javascript.html#references"] = "References";
index.add({
    url: "javascript.html#references",
    title: "References",
    body: "### References  JSHint: http://www.jshint.com "
});



documentTitles["xslt.html#xslt"] = "XSLT";
index.add({
    url: "xslt.html#xslt",
    title: "XSLT",
    body: "# XSLT  - Fill any empty tags with &lt;xsl:text&gt; &lt;/xsl:text&gt; to prevent collapse. "
});


