/**
 * Copyright (c) 2014-2018, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 *
 * Simple CKEditor tag autocomple that was built in the
 * https://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_autocomplete.html tutorial.
 */

// Register the plugin in the editor.
CKEDITOR.plugins.add( 'autotag', {
	requires: 'autocomplete,textmatch',

	init: function( editor ) {
		editor.on( 'instanceReady', function() {
			var config = {};

			// Called when the user types in the editor or moves the caret.
			// The range represents the caret position.
			function textTestCallback( range ) {
				// You do not want to autocomplete a non-empty selection.
				if ( !range.collapsed ) {
					return null;
				}

				// Use the text match plugin which does the tricky job of performing
				// a text search in the DOM. The "matchCallback" function should return
				// a matching fragment of the text.
				return CKEDITOR.plugins.textMatch.match( range, matchCallback );
			}

			// Returns the position of the matching text.
			// It matches a word starting from the '#' character
			// up to the caret position.
			function matchCallback( text, offset ) {
				// Get the text before the caret.
				var left = text.slice( 0, offset ),
					// Will look for a '#' character followed by a ticket number.
					match = left.match( /#\d*$/ );

				if ( !match ) {
					return null;
				}
				return {
					start: match.index,
					end: offset
				};
			}

			config.textTestCallback = textTestCallback;

			// The itemsArray variable is the example "database".
			var itemsArray = [
				{
					id: 337,
					name: 'Paste from Excel improvements',
					type: 'feature'
				},
				{
					id: 440,
					name: 'Moving issues to GitHub',
					type: 'bug'
				},
				{
					id: 468,
					name: 'Support for Clipboard API in Edge',
					type: 'task'
				},
				{
					id: 558,
					name: 'Prevent copying images from Word',
					type: 'feature'
				},
				{
					id: 566,
					name: 'CKEditor changes Table Style and Border',
					type: 'bug',
				},
				{
					id: 584,
					name: 'Fonts setting should not be toggling options',
					type: 'feature'
				},
				{
					id: 616,
					name: 'Parse function for CSS border param',
					type: 'feature'
				},
				{
					id: 648,
					name: 'Delete columns work incorrectly with native selection on Chrome',
					type: 'bug'
				},
				{
					id: 740,
					name: 'selectionChange event integration with tableselection plugin',
					type: 'feature'
				},
				{
					id: 786,
					name: 'Generic manual test for tableselection',
					type: 'task'
				},
				{
					id: 856,
					name: 'Introduce tools.keystrokeToArray method',
					type: 'feature'
				},
				{
					id: 859,
					name: 'Double-click on link opens empty link dialog due to bug in getSelectedLink',
					type: 'bug'
				},
				{
					id: 932,
					name: 'Easy Image plugin',
					type: 'feature'
				},
				{
					id: 933,
					name: 'Balloon Toolbar',
					type: 'feature'
				},
				{
					id: 1010,
					name: '"border-color" in tables gets removed',
					type: 'bug'
				},
				{
					id: 1529,
					name: 'Invalid images selection after paste',
					type: 'bug'
				},
				{
					id: 1530,
					name: 'Possibility to use custom icons in buttons',
					type: 'feature'
				},
				{
					id: 1570,
					name: 'Fake selection allows for cutting in a readonly mode',
					type: 'bug'
				},
				{
					id: 1703,
					name: 'Mentions plugin',
					type: 'feature'
				},
				{
					id: 1746,
					name: 'Emoji plugin',
					type: 'feature'
				},
				{
					id: 1751,
					name: 'Autocomplete plugin',
					type: 'feature'
				},
				{
					id: 1776,
					name: 'Empty placeholder not hidden when blurred',
					type: 'bug'
				},
				{
					id: 1993,
					name: 'Throttling function',
					type: 'feature'
				},
				{
					id: 2062,
					name: 'Emoji list button',
					type: 'feature'
				}
			];

			// Returns (through its callback) the suggestions for the current query.
			function dataCallback( matchInfo, callback ) {
				// Remove the '#' tag.
				var query = matchInfo.query.substring( 1 );

				// Simple search.
				// Filter the entire items array so only the items that start
				// with the query remain.
				var suggestions = itemsArray.filter( function( item ) {
					return String( item.id ).indexOf( query ) == 0;
				} );

				// Note: The callback function can also be executed asynchronously
				// so dataCallback can do an XHR request or use any other asynchronous API.
				callback( suggestions );
			}

			config.dataCallback = dataCallback;

			// Define the templates of the autocomplete suggestions dropdown and output text.
			config.itemTemplate = '<li data-id={id} class="issue-{type}">#{id}: {name}</li>';
			config.outputTemplate = '<a href="https://github.com/ckeditor/ckeditor-dev/issues/{id}">{name} (#{id})</a> ';

			// Attach autocomplete to the editor.
			new CKEDITOR.plugins.autocomplete( editor, config );
		} );
	}
} );
