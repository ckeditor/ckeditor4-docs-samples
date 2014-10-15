/**
 * Copyright (c) 2014, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 *
 * Basic sample plugin inserting current date and time into the CKEditor editing area.
 *
 * Created out of the CKEditor Plugin SDK:
 * http://docs.ckeditor.com/#!/guide/plugin_sdk_intro
 */

// Register the plugin within the editor.
CKEDITOR.plugins.add( 'timestamp', {

	// Register the icons. They must match command names.
	icons: 'timestamp',

	// The plugin initialization logic goes inside this method.
	init: function( editor ) {

		// Define the editor command that inserts a timestamp.
		editor.addCommand( 'insertTimestamp', {

			// Define the function that will be fired when the command is executed.
			exec: function( editor ) {
				var now = new Date();

				// Insert the timestamp into the document.
				editor.insertHtml( 'The current date and time is: <em>' + now.toString() + '</em>' );
			}
		});

		// Create the toolbar button that executes the above command.
		editor.ui.addButton( 'Timestamp', {
			label: 'Insert Timestamp',
			command: 'insertTimestamp',
			toolbar: 'insert'
		});
	}
});
