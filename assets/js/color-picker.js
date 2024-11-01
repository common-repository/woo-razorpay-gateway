/* JS for Color Picker */
jQuery(document).ready(function($){

	var kdcOptions = {
		defaultColor: '#8058a5',
		change: function(event, ui){},	// a callback to fire whenever the color changes to a valid color
		clear: function() {},			// a callback to fire when the input is emptied or an invalid color
		hide: true,						// hide the color picker controls on load
		// show a group of common colors beneath the square
		// or, supply an array of colors to customize further
		palettes: true
	};
	
    $('.iris_color_picker').wpColorPicker(kdcOptions);
});