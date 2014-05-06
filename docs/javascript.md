# JavaScript

- As modular as possible
- For large existing projects, new projects create new JS file instead of appending to existing
- Always place spaces between operators (+, -, *, /, %), and after function

````javascript
function functionName() {
	var foo = i + 1;
}
````

- Only use jQuery plugins or JavaScript solutions if the problem requires it.
- Do not use JS if CSS is applicable
- Do not use polyfills for non-essential features. It is okay if these features are non-existant or degraded on older browsers.

## JSHint

- Always use semicolons.
- Always surround blocks of code in loops and conditionals with curly braces.
- Always use “use strict” in every function.
- Always use for . . . in  to loop through an object. Be sure to test for hasOwnProperty to filter out unwanted or inherited properties.
- Always wrap IIFEs in parenthesis.
- Always indent 1 tab character. Spaces are only permitted for alignment.
- Always define a variable before using it.
- Never use bitwise operators(^, |, etc.).
- Never leave unused variables.
- Never use arguments.caller or arguments.callee.
- Never use incrementers like ++ or --. Instead use var += 1 or -= 1
- Never leaving trailing whitespace.
- Use === and !==
- Use single quotes until you need to write HTML to the document.
> `var anchor = ‘<a href=”index.html”></a>’;`

### References

JSHint:
http://www.jshint.com
