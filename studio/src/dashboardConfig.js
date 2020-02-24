export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e540cd844685384c32e36ce',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-snrgy6sv',
                  apiId: '2fbfedb3-de5c-447a-ae77-595cd81a55e5'
                },
                {
                  buildHookId: '5e540cd88bfad7f5f26095f6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-idp1g368',
                  apiId: '5f079447-b06e-446a-b040-8ff2b23696f0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/VincenzoGambino/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-idp1g368.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
