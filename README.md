Code samples for CKEditor 4 documentation
=========================================

This repository contains ready-to-use code samples created for the [CKEditor 4 documentation](https://ckeditor.com/docs/ckeditor4/latest/index.html) and [website](https://ckeditor.com/ckeditor-4/).

In order to see a sample in action, copy its source to the CKEditor `plugins` directory.

1. Download a CKEditor package. Note that for development purposes it is recommended to download the source version. You can do this by downloading [your own CKEditor build](https://ckeditor.com/cke4/builder) (note the sample's requirements) and checking the "Source (Big N’Slow)" option at the bottom. You can also clone the [CKEditor development repository](https://github.com/ckeditor/ckeditor4) and proceed from there.

2. Copy the plugin directory which you can find in every sample to the `plugins` directory in the installed CKEditor package.

For example:

    # Clone the CKEditor development repository and this repository with samples.
    git clone https://github.com/ckeditor/ckeditor4.git
    git clone https://github.com/ckeditor/ckeditor4-docs-samples.git

    # Checkout the latest stable branch (equals to latest release available on https://ckeditor.com/ckeditor-4/download/).
    cd ckeditor4
    git co stable
    cd ..

    # Enter one of samples directory.
    cd ckeditor4-docs-samples/tutorial-simplebox-1/

    # Copy plugin directory to CKEditor directory.
    cp -R simplebox/ ../../ckeditor4/plugins/

Now open the plugin sample in your browser. The URL will look like:

    http://<your-host>/<ckeditor-package-path>/plugins/simplebox/samples/simplebox.html

    For example:
    http://localhost/ckeditor4/plugins/simplebox/samples/simplebox.html

License
-------
For license details see: [LICENSE.md](https://github.com/ckeditor/ckeditor4-docs-samples/blob/master/LICENSE.md).
