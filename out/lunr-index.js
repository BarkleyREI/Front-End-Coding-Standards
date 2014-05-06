
var index = lunr(function () {
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



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
    body: "## HTML  - Use build scripts to minify and optimize CSS and JS. - Place references to all site scripts inside a single markup file, to keep track of compiled files, and later, to reduce build time. - Classes for styles, IDs for accessibility and JavaScript only - Omit protocol from embedded external resources (//www.google.com/image.png) - All tags must be lowercase. - HTML must validate to HTML5. - Accessibility checklist (http://a11yproject.com/checklist.html) ````markdown [] ARIA Roles [] Links have :focus state and :active state [] Images have alt text [] Provide alternatives for users without JavaScript (within reason) [] Labels for all form elements [] Group forms with fieldset and describe with legend ```` - Accessibility jump navigation "
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
    body: "## Naming Conventions  Use `-` in class and id names, .global-header, #home-page-gallery, etc  Use content agnostic naming. &gt; _e.g. try to avoid `.contact-information;` Use something like `.sidebar-callout`_  "
});

documentTitles["css.html#modular-coding"] = "Modular coding";
index.add({
    url: "css.html#modular-coding",
    title: "Modular coding",
    body: "## Modular coding  Using the idea from [SMACSS](http://smacss.com/), we approach front end coding tasks as “modules” where each module can be copied into a new container and it should render.  "
});

documentTitles["css.html#css-guidelines"] = "CSS Guidelines";
index.add({
    url: "css.html#css-guidelines",
    title: "CSS Guidelines",
    body: "## CSS Guidelines  - Use SASS if possible. - All font families must have fallbacks to web safe fonts. - Split into multiple files as reasonable as possible. - Rule of 3 ````markdown Global site (global) Specific site section (home, level) One-off page ```` - For large existing projects, new projects create new CSS file instead of appending to existing. - Add styles to deal with no-js situations. - If possible, do not override existing styles with print styles. Instead, use media queries to style the default unstyled document  "
});

documentTitles["css.html#sass-guidelines"] = "SASS Guidelines";
index.add({
    url: "css.html#sass-guidelines",
    title: "SASS Guidelines",
    body: "## SASS Guidelines  - _Never_ use IDs for styling - _Never_ use !important unless last resort - Regard selector performance. CSS works from right to left, so things like wildcard selectors and deeply nested selectors are very inefficient. - Style ordering: ````markdown @extend regular styles @include nested selectors ```` - All vendor prefixes must use mixins. - Try not to nest more than 3 levels deep. - Try not to nest more than 50 lines long. - Do not place styles in main SCSS files, only in included SCSS files. - All colors must be variables. #fff and #000 are excused. - All font families must be variables. - Including the above rules, all numbers with meaning must be variables. - Nest media queries. - Include file ordering: ````markdown 	Compass 	Authored Dependencies (colors, mixins) 	Sprites 	Global Styles 	Layout 	Modules 	Plugin Styles 	Helper Styles 	Print Styles ```` - File structure: https://github.com/BarkleyREI/sass_boilerplate - All modules follow pattern: https://gist.github.com/nessthehero/7562936 - Use em for everything, except where impossible (use our em mixins) - Use px for special positioning or exceptions - Use rem if you like (reference) - On dev/qa, compile expanded with line mapping. - On live, compile compressed. "
});



documentTitles["javascript.html#javascript"] = "JavaScript";
index.add({
    url: "javascript.html#javascript",
    title: "JavaScript",
    body: "# JavaScript  - As modular as possible - For large existing projects, new projects create new JS file instead of appending to existing - Always place spaces between operators (+, -, *, /, %), and after function  ````javascript function functionName() { 	var foo = i + 1; } ````  - Only use jQuery plugins or JavaScript solutions if the problem requires it. - Do not use JS if CSS is applicable - Do not use polyfills for non-essential features. It is okay if these features are non-existant or degraded on older browsers.  "
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



documentTitles["readme.html#readme"] = "README";
index.add({
    url: "readme.html#readme",
    title: "README",
    body: "# README  "
});

documentTitles["readme.html#how-to-compile"] = "How to compile";
index.add({
    url: "readme.html#how-to-compile",
    title: "How to compile",
    body: "## How to compile  `npm install -g beautifuldocs`  Navigate to directory in terminal  `bfdocs manifest.json` "
});


