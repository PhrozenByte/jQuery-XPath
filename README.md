jQuery-XPath 1.1
================
Determine the XPath of an element with jQuery.

Usage
-----
Just download the sourcecode, upload the file to your webspace and load it. Obviously [jQuery](http://jquery.com/) is required.
```html
<script type="text/javascript" src="js/jquery.xpath.js"></script>
```

To get the XPath of an element simply call ```.xpath()```. Please note that only the first element in jQuerys list of matched elements is considered. If the given element has an ```id``` attribute, the XPath plugin will use it.
```javascript
$('form input[type=email]').xpath();
// Returns: //*[@id="email"]
```
If you don't want the ```id``` attribute to be considered, pass ```true``` as the first parameter.
```javascript
$('form input[type=email]').xpath(true);
// Returns: /html/body/section/form/div[2]/div/input
```

Copyright & License
-------------------
The functionality of jQuery-XPath is pretty much an abstract of [Firebug](https://getfirebug.com/)s [extension/content/firebug/lib/xpath.js](https://github.com/firebug/firebug/blob/firebug-1.11.1/extension/content/firebug/lib/xpath.js) (Version 1.11.1). Copyright remains by the [Mozilla Foundation](https://www.mozilla.org/en-US/foundation/). Accordingly this plugin is licensed under 3-clause BSD. See the [LICENSE.md](../blob/master/LICENSE) for details.
