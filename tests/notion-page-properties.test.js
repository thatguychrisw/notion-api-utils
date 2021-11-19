const notionProps = require('../src/notion-page-properties');

test('it creates a date page property with only a start date', () => {
    expect(notionProps.date('2021-10-13')).toStrictEqual({
          date: {
              start: '2021-10-13'
          }
      }
    );
});

test('it creates a date page property with a range', () => {
    expect(notionProps.date('2021-10-13', '2021-10-14')).toStrictEqual({
          date: {
              start: '2021-10-13',
              end: '2021-10-14'
          }
      }
    );
});

test('it creates a relation page property', () => {
    expect(notionProps.relation(123)).toStrictEqual({
        relation: [{
            id: 123
        }]
    });
});

test('it creates a title page property', () => {
    expect(notionProps.title('title')).toStrictEqual({
        title: [
            {
                type: 'text',
                text: {
                    content: 'title'
                }
            }
        ]
    });
});

test('it creates a url page property', () => {
    expect(notionProps.url('https://hola.org')).toStrictEqual({
        url: 'https://hola.org'
    });
});

test('it creates a select page property', () => {
    expect(notionProps.select('an option')).toStrictEqual({
        select: {
            name: 'an option'
        }
    });
});

test('it creates a number page property', () => {
    expect(notionProps.number(1)).toStrictEqual({
        number: 1
    });
});

test('it creates a rich text page property', () => {
    expect(notionProps.richText('hola')).toStrictEqual({
        rich_text: [
            {
                type: 'hola',
                text: {
                    content: 'hola'
                }
            }
        ]
    });
});

test('it creates a multi select page property', () => {
    expect(notionProps.tags(['tag'])).toStrictEqual({
        multi_select: [{
            name: 'tag'
        }]
    });
});
