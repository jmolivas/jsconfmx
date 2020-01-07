import React from "react";
import PropTypes from "prop-types";

import Layout from "gatsby-theme-octahedroid/src/components/layout-example";
import SEO from "gatsby-theme-octahedroid/src/components/seo";

import HeroCta from "gatsby-theme-octahedroid/src/components/hero-cta";
import Disqus from "gatsby-theme-octahedroid/src/components/disqus";
import ShareButtons from "gatsby-theme-octahedroid/src/components/share-buttons";
import Tags from "gatsby-theme-octahedroid/src/components/tags";
import RelatedContent from "gatsby-theme-octahedroid/src/components/related-content";

const ArticleTemplate = ({ data }) => {
  const { post } = data;
  return (
    <Layout>
      <SEO
        title="Octahedroid starter"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <div className="container mx-auto">
        <HeroCta
          title={post.frontmatter.title}
          text={post.frontmatter.excerpt}
          intro={post.frontmatter.date}
          imageName={post.frontmatter.image}
        />
        <hr className="border-b-2 mx-auto w-2/3 border-gray-200 block h-1" />
        <div
          className="py-3 lg:py-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
        <Tags tags={post.frontmatter.tags} />
        <ShareButtons
          url={`${process.env.PROJECT_URL}${post.path}`}
          title={post.frontmatter.title}
        />
        <RelatedContent
          posts={[
            {
              title:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
              excerpt:
                "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
              image: "hero.png",
              link: "/"
            },
            {
              title:
                "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus",
              excerpt:
                "Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
              image: "hero.png",
              link: "/"
            },
            {
              title:
                "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus",
              excerpt:
                "Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
              image: "hero.png",
              link: "/"
            }
          ]}
        />
        <Disqus
          url={`${process.env.PROJECT_URL}${post.path}`}
          identifier={post.path}
          title={post.frontmatter.title}
        />
      </div>
    </Layout>
  );
};

ArticleTemplate.propTypes = {};

ArticleTemplate.defaultProps = {
  data: {
    post: {
      path: "/test-article",
      content: `
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

        <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>

        <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>

        <p>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</p>

        <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
      `,
      frontmatter: {
        title:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
        excerpt:
          "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,",
        date: new Date().toISOString(),
        author: "jmolivas",
        image: "hero.png",
        tags: ["gatsby", "drupal"]
      }
    }
  }
};

export default ArticleTemplate;
