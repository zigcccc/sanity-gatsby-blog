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
                  buildHookId: '5f560f719e0e9708c54f3dc8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-o7o55y65',
                  apiId: 'e34e9f0d-7f77-4da1-a5be-46017f96d03c'
                },
                {
                  buildHookId: '5f560f7190670fad575c41c4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-j4nb3pf3',
                  apiId: '5beaf8da-ecdc-4324-8cd7-0aacbd7ade41'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zigcccc/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-j4nb3pf3.netlify.app', category: 'apps' }
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
