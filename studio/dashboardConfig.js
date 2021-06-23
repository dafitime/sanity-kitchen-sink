export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60d3858fd5acb900c78838e7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-pqjhtm2o',
                  apiId: 'd00dba1e-151f-43f7-b19b-517b8e55af16'
                },
                {
                  buildHookId: '60d3858f07d33800b844ed7a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-chij94bi',
                  apiId: 'a341913d-b806-4686-8892-f431e43de593'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dafitime/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-chij94bi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
