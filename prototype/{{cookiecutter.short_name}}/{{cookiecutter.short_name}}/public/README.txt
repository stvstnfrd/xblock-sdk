# Public, static files

This public directory is for files that should be included in your
package as plain static files.

You can ask the runtime for a URL that will retrieve these files with:

```py
url = self.runtime.local_resource_url(self, "public/js/lib.js")
```

The sample code includes a function you can use to read the content of files
in the public directory, like this:

```py
frag.add_javascript(self.resource_string("public/js/my_block.js"))
```
