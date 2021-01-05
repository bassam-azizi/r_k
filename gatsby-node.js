const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/blogTemplate.js');

    const res = await graphql(`
    query{
        allStrapiBlogpost{
            edges{
                node{
                    Slug
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
}