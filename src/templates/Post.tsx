import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';
import { Layout, Wrapper, Header, Subline, SEO, PrevNext, SectionTitle, Content } from '../components';
import config from '../../config/SiteConfig';
import '../utils/prismjs-theme.css';
import PathContext from '../models/PathContext';
import Post from '../models/Post';

const PostContent = styled.div`
  margin-top: 4rem;
`;

const TextAlignCenter: any = styled.div`
  text-align: center;
`;

interface Props {
  data: {
    markdownRemark: Post;
  };
  pathContext: PathContext;
}

export default class PostPage extends React.PureComponent<Props> {
  public render() {
    const { prev, next } = this.props.pathContext;
    const post = this.props.data.markdownRemark;
    return (
      <Layout>
        {post ? (
          <>
            <SEO postPath={post.fields.slug} postNode={post} postSEO />
            <Helmet title={`${post.frontmatter.title} | ${config.siteTitle}`} />
            <Header banner={post.frontmatter.banner}>
              <Link to="/">{config.siteTitle}</Link>
              <SectionTitle>{post.frontmatter.title}</SectionTitle>
              <Subline light={true}>
                {post.frontmatter.date} &mdash; {post.timeToRead} Min Read &mdash; In{' '}
                <Link to={`/categories/${kebabCase(post.frontmatter.category)}`}>{post.frontmatter.category}</Link>
              </Subline>
            </Header>
            <Wrapper>
              <Content>
                <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
                {post.frontmatter.tags ? (
                  <Subline>
                    Tags: &#160;
                    {post.frontmatter.tags.map((tag, i) => (
                      <Link key={i} to={`/tags/${kebabCase(tag)}`}>
                        <strong>{tag}</strong> {i < post.frontmatter.tags.length - 1 ? `, ` : ``}
                      </Link>
                    ))}
                  </Subline>
                ) : null}
                <br />
                <hr />
                <PrevNext prev={prev} next={next} />
                <TextAlignCenter>
                  <br />
                  <hr />
                  <Link to="/">{config.siteTitle} Home</Link>
                  <br />
                  <Link to="/categories">Browse Blog Categories</Link>
                  <br />
                  <Link to="/tags">Browse Blog Tags</Link>
                  <br />
                  <a
                    href="https://newsletter.unlock-protocol.com/?title=Francois%20Branciard%20Newsletter&description=Subscribe%20to%20my%20newsletter%20to%20be%20notify%20when%20I%20publish%20new%20blog%20posts%20or%20updates.&locks=0x92acE3f7f96EB49cB3e25A9468C843BD12F0568E"
                    target="_blank"
                  >
                    Subscribe to this Blog newsletter using Unlock Protocol.
                  </a>
                </TextAlignCenter>
              </Content>
            </Wrapper>
          </>
        ) : null}
      </Layout>
    );
  }
}

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        category
        tags
        banner
      }
      timeToRead
    }
  }
`;
