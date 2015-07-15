Expansive.load({
    transforms: {
        name: 'compile-markdown-html',
        mappings: {
            'md': [ 'esp', 'html' ]
        },
        script: `
            function transform(contents, meta, service) {
                let md = Cmd.locate('marked')
                return run(md, contents)
            }
        `
    }
})
