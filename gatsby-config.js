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
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    'UA-39687018-1' // Google Analytics / GA
                    // 'AW-CONVERSION_ID' // Google Ads / Adwords / AW
                    // 'DC-FLOODIGHT_ID' // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
                ],
                // This object gets passed directly to the gtag config command
                // This config will be shared accross all trackingIds
                // gtagConfig: {
                //     optimize_id: 'OPT_CONTAINER_ID',
                //     anonymize_ip: true,
                //     cookie_expires: 0
                // },
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: false,
                    // Setting this parameter is also optional
                    respectDNT: true,
                    // Avoids sending pageview hits from custom paths
                    exclude: ['/preview/**', '/do-not-track/me/too/']
                }
            }
        },
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
