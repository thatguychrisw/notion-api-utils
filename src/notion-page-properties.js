module.exports = {
    date: (start, end) => {
        const prop = {date: {start}};

        if (end) prop.date.end = end;

        return prop;
    },

    relation: (pageId) => ({
        relation: [{
            id: pageId
        }]
    }),

    title: (text) => ({
        title: [
            {
                type: 'text',
                text: {
                    content: text
                }
            }
        ]
    }),

    url: (url) => ({
        url
    }),

    select: (option) => ({
        select: {
            name: option
        }
    }),

    number: (number) => ({
        number
    }),

    richText: (text) => ({
        rich_text: [
            {
                type: text,
                text: {
                    content: text
                }
            }
        ]
    }),

    tags: (tags) => ({
        'multi_select': tags.map(type => ({name: type}))
    })
};
