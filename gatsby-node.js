const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/blogTemplate.js');
    const programTemplate = path.resolve('./src/templates/programTemplate.js');
    const episodeTemplate = path.resolve('./src/templates/episodeTemplate.js');

    const res = await graphql(`
    query{
        allStrapiBlogpost{
            edges{
                node{
                    Slug
                }
            }
        }
        allStrapiSchedule{
            edges{
                node{
                    id
                    title
                }
            }

        }
        allStrapiEpisode{
            edges{
                node{
                    id
                    title
                }
            }
        }
    }
    `)

    res.data.allStrapiBlogpost.edges.forEach( ({node})  => {
        createPage({
            component: blogTemplate,
            path: `/blog/${node.Slug}`,
            context: {
                slug: node.Slug
            }
        })
    });
    res.data.allStrapiSchedule.edges.forEach( ({node}) => {
        createPage({
            component: programTemplate,
            path: `/schedule/${node.title.toLowerCase()}`,
            context: {
                id: node.id
            }
        })
    });
    res.data.allStrapiEpisode.edges.forEach( ({node}) => {
        createPage({
            component: episodeTemplate,
            path: `/episodes/${node.title.toLowerCase()}`,
            context: {
                id: node.id
            }
        })
    });
}