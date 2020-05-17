const fs = require('fs');
const mustache = require('mustache');

const templates = require('./templates');

function markdownBuilder(books) {
    books.map((book) => {

        var fileContent = mustache.render(templates.bookTemplate, book);

        let fileName = `${book.date}-${book.title.replace(/\W+/g, '-').toLowerCase()}.md`

        fs.writeFileSync(fileName, fileContent);
    })
}

module.exports = markdownBuilder;