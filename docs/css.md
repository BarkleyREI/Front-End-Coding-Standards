# CSS

All projects will use SASS if possible. Use a variety of tools to accomplish this.

- Compass
- Grunt
- Gulp
- Preprocessor application

If editable assets need delivered to a client, be sure to include a README on how to compile the assets.

## Naming Conventions

Use `-` in class and id names, .global-header, #home-page-gallery, etc

_Do not use camel casing._

Use content agnostic naming.
> _e.g. try to avoid `.contact-information;` Use something like `.sidebar-callout`, or `.sidebar` and `.callout`_

## Modular coding

Using the idea from [SMACSS](http://smacss.com/), we approach front end coding tasks as “modules” where each module can be copied into a new container and it should render.

Create a SCSS file for the module under the modules directory.

Do not include layout positioning styles in the module. Add these styles to a file under the layout directory.

For instance:

Style a wysiwyg callout module under modules, then add any padding or positioning in _sidebar.scss or _layout.scss

Use your best judgement for where styles go.

<blockquote>When in doubt, break it out. -Ryan Sprake</blockquote>

## CSS Guidelines

- Use SASS unless not possible.
- All font families must have fallbacks to web safe fonts (e.g. serif, sanserif).
- Split into multiple files as reasonable as possible.
- Rule of 3 for compiled CSS files
````markdown
Global site (global or main.css)
Specific site section (home, level)
One-off page
````
- For large existing projects, new projects create new CSS file instead of appending to existing.
- Add styles to deal with no-js situations.
- If possible, do not override existing styles with print styles. Instead, use media queries to style the default unstyled document

````html
<link rel="stylesheet" media="print" href="print.css" />
````

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
- Selector Ordering:
````markdown
Non-layout affecting

    background-color: green;
    font-family: Arial, san-serif;
    color: blue;

Layout affecting

	border: thin solid red;
	margin: 1em;
	padding: 1em;

Layout

	width: 100%
	height: 2px;
	position: absolute;
	left: 0;
	top: 0;

````
- All vendor prefixes must use mixins or autoprefixer.
- Try not to nest more than 3 levels deep.
- Try not to nest more than 50 lines long.
- Do not place styles in main SCSS files, only in included SCSS files.

### Class vs Placeholder

Use placeholder when you don't need the base class name on the element.

````scss
%icon {
	display: block;
}

.menu {
	@extend %icon;
}

compiles to:
.menu { display: block; }


.icon {
	display: block;
}

.menu {
	@extend .icon;
}

compiles to:
.icon, .menu { display: block; }
````

### Theme Variables

Save all theme variables in `_theme-variables.scss`

#### Colors

All colors must be variables. #fff and #000 are excused.
Use [http://name-of-color.com/](http://name-of-color.com/) or similar website to name the color. Assign the color
to a semantically named variable if the color is used frequently.

#### Font families

Be sure to include at least one fallback for all fonts, even if it is just 'sans-serif'.

````css
font-family: 'Lato', Arial, sans-serif;
````

Use webfonts as a preference to embedded fonts.
- Google Fonts
- Typekit

#### Icon fonts

[Icomoon](https://icomoon.io/)

[FontAwesome](http://fontawesome.io/)

Some of these services may include their own files that declare class names or variables.

Recommendation: Use icomoon (which supports fontawesome icons) instead of using fontawesome so that you can specify the exact icons you need.

#### Numbers

Save numbers with meaning (such as z-indexes or font sizes) to variables.

### Media Queries

Embed media queries inline where it is needed, instead of combining them at the end of the file.

````sass
.module {

	h1 {
		color: $red;

		@include bp(medium) {
			color: $green;
		}
	}

}
````

For a one-off media query, it can be embedded directly or with a custom mixin.

If a media query is needed in more than two places, it should be given a name in `_theme-variables.scss`

## Other

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
