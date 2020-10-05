/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        siteUrl: `https://dakotaargyle.com`,
        title: `Dakota Argyle, DDS`,
        description: `Dakota Argyle is an exceptional dentist in the Dallas, TX area specializing in family dentistry.`
    },
    plugins: [
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `img`,
                path: `${__dirname}/src/images`
            }
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                printRejected: true // Print removed selectors and processed file names
                // develop: true, // Enable while using `gatsby develop`
                // tailwind: true, // Enable tailwindcss support
                // whitelist: ['whitelist'], // Don't remove this selector
                // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
                // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Dakota Argyle`,
                short_name: `DakotaArgyle`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#008DB9`,
                display: `standalone`
            }
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-netlify`
    ]
};
