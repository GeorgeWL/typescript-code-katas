# typescript-code-kata

At this point in time there is nothing in the index file, 
if this was going to be a full app, I'd add express then return the values through various endpoints
but as this is a kata, I will just build the functions to fit the spec, and ensure they pass all tests which I write

I may return to this at a later point and add api if I get time, but as I can see it, that would be surplus to the current requirements.

## scripts
* `build` - transpiles and compiles typescript files to javascript
* `lint` - automatically fixes some minor formatting issues and warns for anyhting which it can't auto-fix
* `test` - run a single test run, then exit
* `test:watch` - run a test run in watch mode, will show test results after each save of a watched file
* `test:coverage` - run a single test run and generate a coverage report afterwards. These can be quite chunky so are ignored by git. Will place reports in JSON and lcov inside of a `/coverage` report
* `serve:coverage` - runs the `test:coverage` command and then serves the report on a simple node server
