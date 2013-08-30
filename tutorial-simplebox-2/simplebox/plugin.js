// Register the plugin within the editor.
CKEDITOR.plugins.add( 'simplebox', {
	// This plugin requires Widgets System defined in the 'widget' plugin.
	requires: 'widget',

	// Register the icon used for the toolbar button.
	icons: 'widgetsimplebox',

	onLoad: function() {
		// Styles used for widget editing. Do this "onLoad" because it should be
		// executed just once on plugin loading, not for each editor instance.
		//
		// Note: This styles may be overridden by styles defined in editor's
		// contents.css file or in page's stylesheets.
		// Plugin's developer can also leave styling for plugin's users completely.
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
			'}' +
			'.simplebox.align-right {' +
				'float: right;' +
			'}' +
			'.simplebox.align-left {' +
				'float: left;' +
			'}' +
			'.simplebox.align-center {' +
				'margin-left: auto;' +
				'margin-right: auto;' +
			'}'
		);
	},

	// The plugin initialization logic goes inside this method.
	init: function( editor ) {
		// Register the editing dialog.
		CKEDITOR.dialog.add( 'simplebox', this.path + 'dialogs/simplebox.js' );

		// Register the simplebox widget.
		editor.widgets.add( 'simplebox', {
			// Allow all elements which this widget requires.
			// Read more about the Advanced Content Filter here:
			// * http://docs.ckeditor.com/#!/guide/dev_advanced_content_filter
			// * http://docs.ckeditor.com/#!/guide/plugin_sdk_integration_with_acf
			allowedContent:
				'div(!simplebox,align-left,align-right,align-center){width};' +
				'div(!simplebox-content); h2(!simplebox-title)',

			// Define two nested editable areas.
			editables: {
				title: {
					// Define CSS selector used for finding the element inside widget element.
					selector: '.simplebox-title',
					// Define content allowed in this nested editable. Its content will be
					// filtered accordingly and the toolbar will be adjusted when focusing it.
					allowedContent: 'br strong em'
				},
				content: {
					selector: '.simplebox-content',
					allowedContent: 'p br ul ol li strong em'
				}
			},

			// Define template of new simplebox widget.
			// Template will be used when creating new simplebox widget instances.
			template:
				'<div class="simplebox">' +
					'<h2 class="simplebox-title">Title</h2>' +
					'<div class="simplebox-content"><p>Content...</p></div>' +
				'</div>',

			// Define label of a toolbar button which will be automatically
			// created by Widgets System. This button will insert new widget instance
			// created from a template defined above, or will edit selected widget
			// (see second part of this tutorial to learn about editing widgets).
			//
			// Note: In order to be able to translate your widget you should use
			// the editor.lang.simplebox.* property. String was used directly to simplify this tutorial.
			button: 'Create a simple box',

			// Set the widget's dialog name. This enables the automatic widget-dialog binding.
			// This dialog will be opened when creating new widget or editing existing one.
			dialog: 'simplebox',

			// Check the elements that need to be converted to widgets.
			//
			// Note: The element argument is an instance of http://docs.ckeditor.com/#!/api/CKEDITOR.htmlParser.element
			// so it's not a real DOM element yet. This is caused by the fact that upcasting is performed
			// during data processing which is done on DOM represented by JS objects.
			// Read more here: ... TODO
			upcast: function( element ) {
				// Return true (that element needs to converted to simplebox widget)
				// fors div with simplebox classes.
				return element.name == 'div' && element.hasClass( 'simplebox' );
			},

			// When widget is being initialized we need to read the data (align and width)
			// from DOM and set them by widget.setData().
			// More code which needs to be executed when DOM is available may go here.
			init: function() {
				var width = this.element.getStyle( 'width' );
				if ( width )
					this.setData( 'width', width );

				if ( this.element.hasClass( 'align-left' ) )
					this.setData( 'align', 'left' );
				if ( this.element.hasClass( 'align-right' ) )
					this.setData( 'align', 'right' );
				if ( this.element.hasClass( 'align-center' ) )
					this.setData( 'align', 'center' );
			},

			// Listen on widget#data event which is fired every time widget's data changes and update
			// the widget's view.
			// Data may be changed using the widget.setData() method, which we use in simplebox dialog.
			data: function() {
				// Check whether width is set and remove or set width style.
				// The style is set on widget main element (div.simplebox).
				if ( this.data.width == '' )
					this.element.removeStyle( 'width' );
				else
					this.element.setStyle( 'width', this.data.width );

				// Brutally remove all align classes and set the new one if align is set.
				this.element.removeClass( 'align-left' );
				this.element.removeClass( 'align-right' );
				this.element.removeClass( 'align-center' );
				if ( this.data.align )
					this.element.addClass( 'align-' + this.data.align );
			}
		} );
	}
} );
