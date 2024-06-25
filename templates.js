exports.bookTemplate = `---
{{#duration}}duration: {{duration}}{{/duration}}
topics: {{&topics}}
publishers: {{&publishers}}
issued: {{issued}}
{{#pages}}pages: {{pages}}{{/pages}}
isbn: {{isbn}}
---
# {{title}}

{{#quotes}}
## {{&chapter}}
{{&quote}}

{{/quotes}}
`
