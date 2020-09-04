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
                  buildHookId: '5f519b41a495e50a594b4ae1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9mwjofwi',
                  apiId: '4bd7876f-fe20-481c-bfb8-c521ce23288e'
                },
                {
                  buildHookId: '5f519b41def3a209779e2d49',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-dzwak9f9',
                  apiId: 'cca373b4-9326-4a34-8ee4-0467d9c83253'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gpad1234/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-dzwak9f9.netlify.app', category: 'apps'}
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
