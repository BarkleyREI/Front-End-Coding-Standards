# CSS

All projects will use SASS if possible. Use a variety of tools to accomplish this.

- Compass
- Grunt
- Gulp
- Preprocessor application

If editable assets need delivered to a client, be sure to include a README on how to compile the assets.

## Naming Conventions

Use `-` in class and id names, .global-header, #home-page-gallery, etc

Use content agnostic naming.
> _e.g. try to avoid `.contact-information;` Use something like `.sidebar-callout`_

## Modular coding

Using the idea from [SMACSS](http://smacss.com/), we approach front end coding tasks as “modules” where each module can be copied into a new container and it should render.

## CSS Guidelines

- Use SASS if possible.
- All font families must have fallbacks to web safe fonts.
- Split into multiple files as reasonable as possible.
- Rule of 3
````markdown
Global site (global)
Specific site section (home, level)
One-off page
````
- For large existing projects, new projects create new CSS file instead of appending to existing.
- Add styles to deal with no-js situations.
- If possible, do not override existing styles with print styles. Instead, use media queries to style the default unstyled document

## SASS Guidelines

- _Never_ use IDs for styling
- _Never_ use !important unless last resort
- Regard selector performance. CSS works from right to left, so things like wildcard selectors and deeply nested selectors are very inefficient.
- Style ordering:
````markdown
@extend
regular styles
@include
nested selectors
````
- All vendor prefixes must use mixins.
- Try not to nest more than 3 levels deep.
- Try not to nest more than 50 lines long.
- Do not place styles in main SCSS files, only in included SCSS files.
- All colors must be variables. #fff and #000 are excused.
- All font families must be variables.
- Including the above rules, all numbers with meaning must be variables.
- Nest media queries.
- Include file ordering:
````markdown
	Compass
	Authored Dependencies (colors, mixins)
	Sprites
	Global Styles
	Layout
	Modules
	Plugin Styles
	Helper Styles
	Print Styles
````
- File structure: https://github.com/BarkleyREI/sass_boilerplate
- All modules follow pattern: https://gist.github.com/nessthehero/7562936
- Use em for everything, except where impossible (use our em mixins)
- Use px for special positioning or exceptions
- Use rem if you like (reference)
- On dev/qa, compile expanded with line mapping.
- On live, compile compressed.
