/**
 * Copyright (c) 2014-2018, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 *
 * Simple CKEditor Widget (Part 1).
 *
 * Created out of the CKEditor Widget SDK:
 * https://docs.ckeditor.com/ckeditor4/docs/#!/guide/widget_sdk_tutorial_1
 */

// Register the plugin within the editor.
CKEDITOR.plugins.add( 'simplebox', {
	// This plugin requires the Widgets System defined in the 'widget' plugin.
	requires: 'widget',

	// Register the icon used for the toolbar button. It must be the same
	// as the name of the widget.
	icons: 'simplebox',

	// The plugin initialization logic goes inside this method.
	init: function( editor ) {
		// Register the simplebox widget.
		editor.widgets.add( 'simplebox', {
			// Allow all HTML elements and classes that this widget requires.
			// Read more about the Advanced Content Filter here:
			// * https://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_advanced_content_filter
			// * https://docs.ckeditor.com/ckeditor4/docs/#!/guide/plugin_sdk_integration_with_acf
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
