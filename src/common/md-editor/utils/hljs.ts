import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
import bash from 'highlight.js/lib/languages/bash'
import css from 'highlight.js/lib/languages/css'
import markdown from 'highlight.js/lib/languages/markdown'
import dockerfile from 'highlight.js/lib/languages/dockerfile'
import excel from 'highlight.js/lib/languages/excel'
import go from 'highlight.js/lib/languages/go'
import http from 'highlight.js/lib/languages/http'
import less from 'highlight.js/lib/languages/less'
import java from 'highlight.js/lib/languages/java'
import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import php from 'highlight.js/lib/languages/php'
import python from 'highlight.js/lib/languages/python'
import scss from 'highlight.js/lib/languages/scss'
import shell from 'highlight.js/lib/languages/shell'
import sql from 'highlight.js/lib/languages/sql'
import typescript from 'highlight.js/lib/languages/typescript'
import vim from 'highlight.js/lib/languages/vim'

hljs.registerLanguage('xml', xml)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('css', css)
hljs.registerLanguage('markdown', markdown)
hljs.registerLanguage('dockerfile', dockerfile)
hljs.registerLanguage('excel', excel)
hljs.registerLanguage('go', go)
hljs.registerLanguage('http', http)
hljs.registerLanguage('less', less)
hljs.registerLanguage('java', java)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('json', json)
hljs.registerLanguage('php', php)
hljs.registerLanguage('python', python)
hljs.registerLanguage('scss', scss)
hljs.registerLanguage('shell', shell)
hljs.registerLanguage('sql', sql)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('vim', vim)

export default hljs
