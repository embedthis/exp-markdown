Expansive.load({
    transforms: {
        name: 'compile-markdown-html',
        mappings: {
            'md': [ 'esp', 'html' ]
        },
        script: `
            function transform(contents, meta, service) {
                let md = Cmd.locate('marked')
                let contents = run(md, contents)
                contents = contents.replace('<!--clear-->', '<span class="clearfix"></span>')
                return contents
            }
        `
    }
})
