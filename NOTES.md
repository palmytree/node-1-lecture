# Node Two
## Middleware
### Top Level Middleware
- Function that runs on every incoming request
- Prime example is the JSON Parser
```JS
app.use(express.json())
```
- When working with Express, top level middleware can be created by using the use() method seen above
- EVERY REQUEST will go through .use() methods
- **Can you implement multiple .use() methods?** = YES
- EXAMPLE:
```JS
app.use(function(req, res, next) {
	console.log("We got a request!")
	console.log(req.connection)
	next() //Use to indicate when to continue executing remainder of file
})
```
## Postman
- 

## Controllers


## HTTP Requests
- PUT and POST include body
- GET and DELETE do NOT include body

## JSON
- Trailing commas are INVALID
- MUST use double quotes