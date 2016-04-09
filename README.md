# XXHR
A JavaScript library which adds custom functions to call AJAX requests for every browser.

## Install
* Download [latest version of main file](https://github.com/PDKnight/XXHR/blob/master/XXHR.js) and put it in your website folder.
* Include your `XXHR.js` before end of `body` tag:
```html
<!-- code... -->
<script src="path/to/your/XXHR.js"></script>
</body>
```
* That's it!

## Usage
### XXHR().response(url, fn, bool [, params])
* Creates AJAX request.
* Arguments:
 * url: Url adress of file you want to get text from.
 * fn: A function which will be run with only argument with response text.
 * bool: true (asynchronous) or false (synchronous)
 * params (optional): Use them in case of POST request.
* Example:
```javascript
XXHR().response('myFile.txt', function(response) {
    console.log(response);
}, true);
```
