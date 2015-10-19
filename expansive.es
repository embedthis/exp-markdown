Expansive.load({

    services: {
        name: 'markdown',

        transforms: {
            mappings: {
                md: [ 'esp', 'html' ]
            },

            init: function(transform) {
                transform.md = Cmd.locate('marked')
            },

            render: function(contents, meta, transform) {
                if (transform.md) {
                    contents = run(transform.md, contents)
                    contents = contents.replace('<!--clear-->', '<span class="clearfix"></span>')
                }
                return contents
            }
        }
    }
})
