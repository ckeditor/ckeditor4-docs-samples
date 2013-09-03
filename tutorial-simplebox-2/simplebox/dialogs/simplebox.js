// Note: this automatic widget to dialog binding (the fact that every field is set up from widget and is committed to widget)
// is only possible when dialog is opened by the Widgets System (i.e. widgetDef.dialog property is set).
// When you're opening dialog by yourself you need to take care of this by yourself too.

CKEDITOR.dialog.add( 'simplebox', function( editor ) {
	return {
		title: 'Edit Simple Box',
		minWidth: 200,
		minHeight: 100,
		contents: [
			{
				elements: [
					{
						id: 'align',
						type: 'select',
						label: 'Align',
						items: [
							[ editor.lang.common.notSet, '' ],
							[ editor.lang.common.alignLeft, 'left' ],
							[ editor.lang.common.alignRight, 'right' ],
							[ editor.lang.common.alignCenter, 'center' ]
						],
						// When setting up this field set its value to the align value from widget's data.
						// Note: align values used in widget need to be the same as those defined in items array above.
						setup: function( widget ) {
							this.setValue( widget.data.align );
						},
						// When committing (saving) this field set its value to the widget's data.
						commit: function( widget ) {
							widget.setData( 'align', this.getValue() );
						}
					},
					{
						id: 'width',
						type: 'text',
						label: 'Width',
						width: '50px',
						setup: function( widget ) {
							this.setValue( widget.data.width );
						},
						commit: function( widget ) {
							widget.setData( 'width', this.getValue() );
						}
					}
				]
			}
		]
	};
} );