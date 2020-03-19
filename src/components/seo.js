import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import cardImage from "../images/logo.png"

function SEO({ description, lang, meta, title }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription = description || data.site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: `https://www.verrdi.co.uk${cardImage}`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        // {
        //   name: `twitter:creator`,
        //   content: data.site.siteMetadata.author,
        // },
        {
          name: "twitter:image",
          content: `https://www.verrdi.co.uk${cardImage}`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <link
        href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
        rel="stylesheet"
        type="text/css"
      />
      <style type="text/css">
        {`#mc_embed_signup div#mce-responses{
            width: 100%; margin: 0; padding: 0;
          } 
          
          #mc_embed_signup #mce-success-response{
            color: #006738;
          }`}
      </style>

      <script id="mcjs">
        {`!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/ea339dabdb1164aa7e80038fd/6c25518c5f68fb75c11670b24.js");`}
      </script>

      {/* <script type="text/javascript">{`(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[6]='COURSE';ftypes[6]='dropdown';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[4]='PHONE';ftypes[4]='phone';fnames[7]='PHONE_ALT';ftypes[7]='phone';fnames[0]='EMAIL';ftypes[0]='email';fnames[5]='CPC_EXPIRY';ftypes[5]='date';}(jQuery));var $mcj = jQuery.noConflict(true);`}</script> */}

      <script type="application/ld+json">
        {`
              {
                "@context": "http://www.schema.org",
                "@type": "LocalBusiness",
                "name": "Verrdi Transport Support Services",
                "url": "https://www.verrdi.co.uk/",
                "image": "https://www.verrdi.co.uk/static/50c79b86a3e9aa10bab82c3791597314/88dd5/main-banner-image.jpg",
                "description": "Verrdi Training Support Services is based in Hull and offers driver CPC training courses in a variety of comfortable locations across Yorkshire and Lincolnshire.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Compass House, 17-19 Empringham St",
                  "addressLocality": "Hull",
                  "postalCode": "HU9 1RP",
                  "addressCountry": "Britain"
                },
                "email": "info@verrdi.co.uk",
                "telephone": "01482 699222",
                "openingHours": "Mo 06:00-18:00 Tu 06:00-18:00 We 06:00-18:00 Th 06:00-18:00 Fr 06:00-18:00 Sa 06:00-18:00"
              }`}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
