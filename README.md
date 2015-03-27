# phImage - jQuery Image Placeholder Plugin

**A simple plugin allowing you to use images for placeholders in text fields & textareas with graceful fallback.**

**Browser Support:** Firefox, Chrome, IE7+\*, Safari, Opera

**Requires:** jQuery 1.7.2+

\* Minor issue exists in IE8 - 10, see known issues below.

**Author:** Brett Marks (ai3 [at] internode.net.au)

Documentation can be found within the files you downloaded or at: https://github.com/cyphix333/phImage

##
## How to use:
##

1. Include jQuery in your page:

	```html
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
	```

2. Include the phImage plugin:

	```html
	<script src="path/to/ph-image.min.js"></script>
	```

3. Modify your html elements you want to apply a placeholder image to with a `data-ph-image` attribute, ie;

	```html
	<input type="text" name="name" class="tb" placeholder="Name" data-ph-image="images/icon-person.png">
	<input type="text" name="email" class="tb" placeholder="Email" data-ph-image="images/icon-mail.png">
	<textarea name="msg" placeholder="Message" data-ph-image="images/icon-pencil.png"></textarea>
	```

	Note that it's best practice to give the `placeholder` attribute a value so it can be used for a graceful fallback.

4. Bind the plugin to the elements, ie:

	```javascript
	$(document).ready(function() {
	
		$('input.tb').phImage();
	
		$('textarea').phImage({
			remove_current: false,
			background_position: '13px 10px'
		});
		
	});
	```

That's it!

##
## Configuration options
##

### remove_current

Whether to remove the placeholder text or not.

```html
default: true
options: true, false
```

### padding

The padding applied to the element(s) - Note that it's best to set the padding via your own CSS if setting `remove_current` to `false` because of some issues in IE.

```html
default: 'default' (means it won't set any padding via the script)
options: Any valid padding value for the shorthand "padding" css property.
```

### background_position

The background position for the image.

```html
default: null (no background position will be applied by the script)
options: Any valid background position value for the "background-position" css property.
```

### background_repeat

The background repeat setting for the image.

```html
default: 'no-repeat'
options: Any valid background repeat value for the "background-repeat" css property.
```

##
## FAQ
##

### What does this plugin actually do?

If you familiar with the HTML5 `placeholder` attribute, then imagine you wanted to use that technique, but instead of using text, you wanted to use an image instead.
That's what this plugin does; it has basically the same behaviour as placeholder text but with using an image instead.

### Can you use an image AND placeholder text together?

Yes! Whilst this technique can be accomplished with plain CSS I decided to include the option in the plugin for completeness. To achieve this effect, just set the
`remove_current` option to `false`; note though, that if you set the padding via the options you may encounter some padding issues in IE8 - 10; to avoid these issues
always set the padding yourself in your CSS.

### What if the user has JavaScript disabled? Does the script degrade gracefully?

Yes. If the user doesn't have JavaScript enabled the script will degrade gracefully and will show the placeholder text instead of the image; that is why you should always
set the placeholder text even when using this script.

### Do I have to find this to every element separately that I want to use a different image on?

No! Because you specify the image itself via a data attribute you can apply it to as many elements as you want with the selector; the only thing the elements will share
will be the same options you set, but the images will all be based off of what you set in the data tag within the element itself.

### Does it work with other placeholder plugins?

If you are using a global placeholder plugin in your site and have the option `remove_current` for phImage set to `true` (the default setting) just make sure to put
the phImage code **BEFORE** the other placeholder script code. This is because if the field that you have applied phImage to has a current text placeholder, phImage will
remove this value before the other placeholder script gets to it.

If you have the option `remove_current` for phImage set to `false` then it doesn't matter where you place the code in relation to your other placeholder plugin; but it's
always your best bet to place it **BEFORE** the other placeholder script code in-case you change the options for phImage.

##
## Known Issues
##

1. When setting `remove current` to `false` and hence causing the background images to remain when typing, Chrome will remove the background images and color the
background yellow when using their built-in "autofill" feature. I tried a couple of ways to fix this issue with no success; I did come up with another method, but it is
a bit convoluted, and since you can achieve the same affect with simple CSS I chose to bypass fixing it this way. If anyone has a simpler way to fix this issue,
please let me know.

2. When setting `remove current` to `false` AND setting `padding` via the options, there is an issue in IE versions 8 - 10, of which they all behave slightly differently:

	* **IE8**: When you preload the field with some data (such as a form submit error page) the text field (textareas aren't effected) will lose it's padding if it has the CSS
	setting of `box-sizing: border-box` and has the doctype `<!DOCTYPE html>`; the outcome will be that the text will display on top of the background image; however once
	the field gets focus again the padding is activated. To avoid this issue set the padding via your own CSS styles rather than via the options.
	
	* **IE9**: When you preload the field with some data (such as a form submit error page) the text field or textarea will lose it's padding if it has the CSS setting of
	`box-sizing: border-box` and has the doctype `<!DOCTYPE html>`; with text fields the text will be hidden under the background image and with textareas the text will
	display on top of the background image; however once the field gets focus again the padding is activated. To avoid this issue set the padding via your own CSS styles
	rather than via the options.
	
	* **IE10**: When you preload the field with some data (such as a form submit error page) OR have text placeholders, the text field or textarea will lose it's padding if it
	has the CSS setting of `box-sizing: border-box`; with text fields the text will be hidden under the background image and with textareas the text will display on top of
	the background image; however once the field gets focus again the padding is activated. To avoid this issue set the padding via your own CSS styles rather than via
	the options.

If anyone can figure out how to fix these issues feel free to push through a fix - it would be greatly appreciated!