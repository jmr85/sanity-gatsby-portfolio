export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '6236ad0c5781b74014da5b09',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-wbvgzi4g',
                  apiId: '56f96a1c-584b-4866-9cd6-1be43bd7dc24'
                },
                {
                  buildHookId: '6236ad0cea8e554f4dda9f58',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-p6rpwavi',
                  apiId: '50d5f0a7-c73b-4a94-9ebb-295e91e42846'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jmr85/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-p6rpwavi.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
