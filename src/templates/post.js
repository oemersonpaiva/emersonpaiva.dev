import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Post = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        category
        background
        date
        title
      }
    }
  }
`;

export default Post;
