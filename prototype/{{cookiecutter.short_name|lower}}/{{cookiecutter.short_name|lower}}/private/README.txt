The public directory is for files that should be included in your kit as plain
static files.

You can ask the runtime for a URL that will retrieve these files with:

    url = self.runtime.local_resource_url(self, "public/js/lib.js")

This private directory is for files that should _not_ be served
publicly.

You can read the contents of private files with:

    frag.add_javascript(self.resource_string("private/js/my_block.js"))

