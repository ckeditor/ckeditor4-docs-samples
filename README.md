Code samples for CKEditor documentation
=====================

This repository contains ready-to-use code samples created for the [CKEditor documentation](http://docs.ckeditor.com).

In order to see a sample in action, copy its source to the CKEditor `plugins` directory.

1. Download a CKEditor package. Note that for development purposes it is recommended to download the source version. You can do this by downloading [your own CKEditor build](http://ckeditor.com/builder) (note the sample's requirements) and checking the "Source (Big N’Slow)" option at the bottom. You can also clone the [CKEditor development repository](https://github.com/ckeditor/ckeditor-dev) and proceed from there.

2. Copy the plugin directory which you can find in every sample to the `plugins` directory in the installed CKEditor package.

For example:

    # Clone the CKEditor development repository and this repository with samples.
    git clone https://github.com/ckeditor/ckeditor-dev.git
    git clone https://github.com/ckeditor/ckeditor-docs-samples.git

    # Checkout the latest stable branch (equals to latest release available on http://ckeditor.com/download).
    cd ckeditor-dev
    git co stable
    cd ..

    # Enter one of samples directory.
    cd ckeditor-docs-samples/tutorial-simplebox-1/

    # Copy plugin directory to CKEditor directory.
    cp -R simplebox/ ../../ckeditor-dev/plugins/

Now open the plugin sample in your browser. The URL will look like:

    http://<your-host>/<ckeditor-package-path>/plugins/simplebox/samples/simplebox.html

    For example:
    http://localhost/ckeditor-dev/plugins/simplebox/samples/simplebox.html
    
License
-------
For license details see: [LICENSE.md](https://github.com/ckeditor/ckeditor-docs-samples/blob/master/LICENSE.md).
