/**
 * Copyright (c) 2014-2018, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 *
 * Simple CKEditor tags completion that was built in the
 * http://docs.ckeditor.com/ckeditor4/docs/#!/guide/autocomplete tutorial.
 */

// Register the plugin within the editor.
CKEDITOR.plugins.add( 'autotag', {
	requires: 'autocomplete,textmatch',

	init: function( editor ) {
		editor.on( 'instanceReady', function() {
			var config = {};

			// Called when the user types in the editor or moves the caret.
			// The range represents the caret position.
			function textTestCallback( range ) {
				// We don't want to autocomplete a non-empty selection.
				if ( !range.collapsed ) {
					return null;
				}

				// Use the textmatch plugin which does the tricky job of doing
				// a text search in the DOM. The matchCallback function should return
				// a matching fragment of the text.
				return CKEDITOR.plugins.textMatch.match( range, matchCallback );
			}

			// Returns a position of the matching text.
			// It matches with text starting from the '#' character
			// followed by spaces, up to the caret position.
			function matchCallback( text, offset ) {
				// Get the text before the caret.
				var left = text.slice( 0, offset ),
					// Will look for an '#' character followed by a ticket number.
					match = left.match( /#\d+$/ );

				if ( !match ) {
					return null;
				}
				return {
					start: match.index,
					end: offset
				};
			}

			config.textTestCallback = textTestCallback;

			var itemsArray = [ {
					id: 1703,
					name: 'Mentions plugin'
				},
				{
					id: 1751,
					name: 'Autocomplete plugin'
				},
				{
					id: 1746,
					name: 'Emoji plugin'
				},
				{
					id: 2062,
					name: 'Emoji list button'
				}
			];

			// Returns (through its callback) the suggestions for the current query.
			function dataCallback( matchInfo, callback ) {
				// Remove '#' tag.
				var query = matchInfo.query.substring( 1 );

				// Simple search.
				// Filter the entire items array so only the items that start
				// with the query remain.
				var suggestions = itemsArray.filter( function( item ) {
					return String( item.id ).indexOf( query ) == 0;
				} );

				// Note - the callback function can also be executed asynchronously
				// so dataCallback can do an XHR requests or use any other asynchronous API.
				callback( suggestions );
			}

			config.dataCallback = dataCallback;

			// Define the templates of the autocomplete dropdown items and output text.
			config.itemTemplate = '<li data-id={id}>#{id}: {name}</li>';
			config.outputTemplate = '<a href="https://github.com/ckeditor/ckeditor-dev/issues/{id}">{name} (#{id})</a> ';

			// Attach autocomplete into editor.
			new CKEDITOR.plugins.autocomplete( editor, config );
		} );
	}
} );
