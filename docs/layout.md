# Layout

- Do not use HTML abstraction languages unless they are shorthand that expands to raw HTML (e.g. Emmet). Never save development files in these formats.
- Create an index.html that is a Table of Contents for the project.
> This is especially useful to QA to know what to test.

## Responsive Web Design

- Always design mobile first (using min-width media queries)
> "max-width" is used as an exception, never the norm
>
> Bring any difficulties to the group. It is never acceptable to do desktop-first.
- If using image sprites, target both small and high-res screens to prevent downloading multiple assets.
- Icon fonts are recommended, but not required.

### Resources

- [Icomoon.io](http://icomoon.io)

## HTML

### Foundation

Use foundation grid classes to build layout.
- http://foundation.zurb.com/docs/components/grid.html

### Reusable wrapper vs. container

Consider using a wrapper inside main blocks instead of a global container.

e.g.

````html
<header>
	<div class="wrapper">

	</div>
</header>
````

vs

````html
<div class="container">
	<header>

	</header>
</div>
````

## Other

- Use build scripts to minify and optimize CSS and JS.
- Place references to all site scripts inside a single markup file, to keep track of compiled files, and later, to reduce build time.
- Classes for styles, IDs for accessibility and JavaScript only
- Omit protocol from embedded external resources (//www.google.com/image.png)
- All tags must be lowercase.
- HTML must validate to HTML5.
- Accessibility checklist (http://a11yproject.com/checklist.html)
````markdown
[] ARIA Roles
[] Links have :focus state and :active state
[] Images have alt text
[] Provide alternatives for users without JavaScript (within reason)
[] Labels for all form elements
[] Group forms with fieldset and describe with legend
````
- Accessibility jump navigation
