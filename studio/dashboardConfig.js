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
                  buildHookId: '5ee2f45ad18e7450108e1c5c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-851x7kdd',
                  apiId: '11437b19-f585-4473-98cd-f93f42cb5a22'
                },
                {
                  buildHookId: '5ee2f45ab2863f1a96b7409a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-828mbmro',
                  apiId: 'aeea219c-ce48-441f-b071-d111a5c714f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jillztom/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-828mbmro.netlify.app', category: 'apps'}
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
