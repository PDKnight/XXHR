# XXHR
A JavaScript library which adds custom functions to call AJAX requests for every browser.

## Install
* Download [latest minified version of main file](https://github.com/PDKnight/XXHR/blob/master/src/XXHR.min.js) and put it in your website folder.
* Include your `XXHR.js` before end of `body` tag:
```html
<!-- code... -->
<script src="path/to/your/XXHR.js"></script>
</body>
```
* That's it!

## Usage
### XXHR().request(url, [fn, [errfn, [bool [, params]]]])
* Creates AJAX request.
* Arguments:
 * **url**: Url adress of file you want to get text from.
 * **fn (optional)**: A function which will be run with only argument with response text.
 * **errfn (optional):** A function which will be run in case of error with AJAX.
 * **bool (optional)**: true (asynchronous) or false (synchronous)
 * **params (optional)**: Use them in case of POST request.
* Example:
```javascript
XXHR().request('myFile.txt', function(response) {
    console.log(response);
}, function(err, status) {
    console.log('Hm, it seems like an error happened, here is the log message: ' 
        + err);
    console.log('Error status: ' + status);
}, true);
```
