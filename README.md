# BarkleyREI Front End Coding Standards

Create new markdown documents under the app/assemble/partials directory.

There is an example file at app/assemble/partials/\_example/\_example.md

Build with `grunt`.

Deploy with `grunt deploy`.

Remotes:
- `stash`
- `github`

## Index.hbs Helpers

*Use only in index.hbs*

**optionNotEmpty**

```
{{optionNotEmpty data.options "key"}}
	true
{{else}}
	false
{{/optionNotEmpty}}
```

**optionEquals**

```
{{optionEquals data.options "key" "value"}}
	true
{{else}}
	false
{{/optionEquals}}
```

**option**

*returns option value*

`{{option data.options "key"}}`

**levelHeading**

*displays appropriate heading for section based on options.level*

`{{levelHeading data.options data.title}}`

**levelLink**

*displays appropriate link for section based on options.level*

`{{levelLink data.options data.title basename classes}}`

**githubLink**

*displays link to open issue regarding section on github*

`{{githubLink github_url basename classes}}`

**levelListLink**

*displays a link to a section in a list item tag*

`{{levelListLink data.options data.title basename}}`

**sectionClass**

*generates a class appropriate to the level of the section*

`class="{{sectionClass data.options}}"`

## Section Helpers

**code**

*output a code block*

```
{{#code "language"}}
... code goes here ...
{{/code}}
```

**markdown**

*output html from markdown*

```
{{#markdown}}
type markdown
{{/markdown}}
```
