// Register the plugin within the editor.
CKEDITOR.plugins.add( 'simplebox', {
	// This plugin requires the Widgets System defined in the 'widget' plugin.
	requires: 'widget',

	// Register the icon used for the toolbar button. It must be the same
	// as the name of the widget.
	icons: 'simplebox',

	onLoad: function() {
		// Styles used for widget editing. Do this "onLoad" because it should be
		// executed just once on plugin loading, not for each editor instance.
		//
		// Note: These styles may be overridden by styles defined in editor
		// contents.css file or in page stylesheets.
		// Plugin developer can also leave styling to plugin users.
		CKEDITOR.addCss(
			'.simplebox {' +
				'padding: 8px;' +
				'margin: 10px;' +
				'background: #eee;' +
				'border-radius: 8px;' +
				'border: 1px solid #ddd;' +
				'box-shadow: 0 1px 1px #fff inset, 0 -1px 0px #ccc inset;' +
			'}' +
			'.simplebox-title, .simplebox-content {' +
				'box-shadow: 0 1px 1px #ddd inset;' +
				'border: 1px solid #cccccc;' +
				'border-radius: 5px;' +
				'background: #fff;' +
			'}' +
			'.simplebox-title {' +
				'margin: 0 0 8px;' +
				'padding: 5px 8px;' +
			'}' +
			'.simplebox-content {' +
				'padding: 0 8px;' +
			'}'
		);
	},

	// The plugin initialization logic goes inside this method.
	init: function( editor ) {
		// Register the simplebox widget.
		editor.widgets.add( 'simplebox', {
			// Allow all HTML elements and classes that this widget requires.
			// Read more about the Advanced Content Filter here:
			// * http://docs.ckeditor.com/#!/guide/dev_advanced_content_filter
			// * http://docs.ckeditor.com/#!/guide/plugin_sdk_integration_with_acf
			allowedContent: 'div(!simplebox); div(!simplebox-content); h2(!simplebox-title)',

			// Minimum HTML which is required by this widget to work.
			requiredContent: 'div(simplebox)',

			// Define two nested editable areas.
			editables: {
				title: {
					// Define a CSS selector used for finding the element inside the widget element.
					selector: '.simplebox-title',
					// Define content allowed in this nested editable. Its content will be
					// filtered accordingly and the toolbar will be adjusted when this editable
					// is focused.
					allowedContent: 'br strong em'
				},
				content: {
					selector: '.simplebox-content',
					allowedContent: 'p br ul ol li strong em'
				}
			},

			// Define the template of a new Simple Box widget.
			// The template will be used when creating new instances of the Simple Box widget.
			template:
				'<div class="simplebox">' +
					'<h2 class="simplebox-title">Title</h2>' +
					'<div class="simplebox-content"><p>Content...</p></div>' +
				'</div>',

			// Define the label for a widget toolbar button which will be automatically
			// created by the Widgets System. This button will insert a new widget instance
			// created from the template defined above, or will edit selected widget
			// (see second part of this tutorial to learn about editing widgets).
			//
			// Note: In order to be able to translate your widget you should use the
			// editor.lang.simplebox.* property. A string was used directly here to simplify this tutorial.
			button: 'Create a simple box',

			// Check the elements that need to be converted to widgets.
			//
			// Note: The "element" argument is an instance of http://docs.ckeditor.com/#!/api/CKEDITOR.htmlParser.element
			// so it is not a real DOM element yet. This is caused by the fact that upcasting is performed
			// during data processing which is done on DOM represented by JavaScript objects.
			upcast: function( element ) {
				// Return "true" (that element needs to converted to a Simple Box widget)
				// for all <div> elements with a "simplebox" class.
				return element.name == 'div' && element.hasClass( 'simplebox' );
			}
		} );
	}
} );
