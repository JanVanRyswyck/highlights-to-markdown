exports.bookTemplate = `---
title: {{&title}}
bookauthor: {{&author}}
date: {{date}}
header:
  teaser: {{{coverUrl}}}
quotes:
{{#quotes}}
  - date: {{date}}
    quote: {{&quote}}
{{/quotes}}
---
{{=<% %>=}}
## *{{page.bookauthor}}*

<img width="300" src="{{ page.header.teaser }}"/>

{% for quote in page.quotes reversed %}
#### {{ quote.date | date: '%B %d, %Y' }}
{{ quote.quote }}
{% endfor %}
<%={{ }}=%>`;
