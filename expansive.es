Expansive.load({
    expansive: {
        transforms: {
            name:   'compile-markdown',
            input:  'md',
            output: 'html',
            script: `
                function transform(contents, meta, service) {
                    let md = Cmd.locate('marked', [ searchPak('exp-marked').join('node_modules/marked/bin') ])
                    return run(md, contents)
                }
            `
        }
    }
})
