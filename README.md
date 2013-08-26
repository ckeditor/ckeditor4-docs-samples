Code samples for CKEditor documentation
=====================

This repository contains ready-to-use code samples created for [CKEditor's documentation](http://docs.ckeditor.com).

In order to see a sample in action copy its source to CKEditor plugins directory.

1. Download a CKEditor package. Note that for a development purposes it is recommended to download the source version. You can do this by downloading [your own CKEditor build](http://ckeditor.com/builder) (note the sample's requirements) and checking the "Source (Big N’Slow)" option at the bottom. Or by cloning the [CKEditor development repository](https://github.com/ckeditor/ckeditor-dev).

2. Copy plugin's directory which you can find in every sample to the `plugins/` directory in CKEditor's package.

For example:

    # Clone the CKEditor development repository and this repository with samples.
    git clone https://github.com/ckeditor/ckeditor-dev.git
    git clone https://github.com/ckeditor/ckeditor-docs-samples.git

    # Checkout the latest stable branch (equals to latest release available on http://ckeditor.com/download).
    cd ckeditor-dev
    git co stable
    cd ..

    # Enter one of samples directory.
    cd ckeditor-docs-samples/tutorial-quote-1/

    # Copy plugin's directory to CKEditor's directory.
    cp -R quote/ ../../ckeditor-dev/plugins/

Now open the plugin's sample in your browser. The URL will look like:

    http://<your-host>/<ckeditor-package-path>/plugins/quote/samples/quote.html

    For example:
    http://localhost/ckeditor-dev/plugins/quote/samples/quote.html