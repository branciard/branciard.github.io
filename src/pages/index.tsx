import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { Layout, Wrapper, Button, Article } from '../components';
import PageProps from '../models/PageProps';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import { media } from '../utils/media';
import rgba from 'polished/lib/color/rgba';
import darken from 'polished/lib/color/darken';
import lighten from 'polished/lib/color/lighten';

const Homepage = styled.main`
  display: flex;
  height: 100vh;
  flex-direction: row;
  @media ${media.tablet} {
    height: 100%;
    flex-direction: column;
  }
  @media ${media.phone} {
    height: 100%;
    flex-direction: column;
  }
`;

const GridRow: any = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props: any) =>
    props.background
      ? `linear-gradient(
      -185deg,
      ${rgba(darken(0.1, props.theme.colors.primary), 0.7)}, 
      ${rgba(lighten(0.1, props.theme.colors.grey.dark), 0.9)}), url(./assets/bg.png) no-repeat`
      : null};
  background-size: cover;
  padding: 2rem 4rem;
  color: ${(props: any) => (props.background ? props.theme.colors.white : null)};
  h1 {
    color: ${(props: any) => (props.background ? props.theme.colors.white : null)};
  }
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
`;

const HomepageContent: any = styled.div`
  height: 95vh;
  max-width: 30rem;
  text-align: ${(props: any) => (props.center ? 'center' : 'left')};
`;

const HomepageHeaderContent: any = styled.div`
  height: 20vh;
`;

const HomepageMainContent: any = styled.div`
  height: 60vh;
`;

const HomepageFooterContent: any = styled.div`
  height: 20vh;
`;

const BioFonSize: any = styled.div`
  font-size: 13px;
`;

export default class IndexPage extends React.Component<PageProps> {
  public render() {
    const { data } = this.props;
    const { edges, totalCount } = data.allMarkdownRemark;
    return (
      <Layout>
        <Wrapper fullWidth={true}>
          <Helmet title={`Homepage | ${config.siteTitle}`} />
          <Homepage>
            <GridRow background={true}>
              <HomepageContent center={true}>
                <HomepageHeaderContent />
                <HomepageMainContent>
                  <h1>
                    Hi. I am <br />
                    Francois Branciard
                  </h1>
                  <p>
                    Shaping and Sculpting ... <br />
                    Clay, wood, stone <br />
                    Open Source solution <br /> Open Execution through blockchain
                  </p>
                  <Link to="/contact">
                    <Button big={true}>
                      <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
                      </svg>
                      Contact
                    </Button>
                  </Link>
                  <Link to="/blog">
                    <Button big>
                      <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
                      </svg>
                      Blog
                    </Button>
                  </Link>
                </HomepageMainContent>
                <HomepageFooterContent>
                  <br />
                  Decentralized website using ENS, IPFS, IPNS, DNSLink: <br />
                  <a href="http://francoisbranciard.eth" target="_blank">
                    http://francoisbranciard.eth
                  </a>
                  <br />
                  <a href="https://gateway.ipfs.io/ipns/francoisbranciard.com" target="_blank">
                    https://gateway.ipfs.io/ipns/francoisbranciard.com
                  </a>
                </HomepageFooterContent>
              </HomepageContent>
            </GridRow>
            <GridRow>
              <HomepageContent>
                <h2>About Me</h2>
                <BioFonSize>
                  Software engineer, I have a strong backend experience on complex systems working for around 10 years at Orange Information
                  Systems for several business critical projects. I endorsed several roles, developer, technical leader, and then in charge
                  of a Build Center department.
                  <br />
                  This experience brings me a lot, working with many teams, production applications on business critical projects with high
                  availability constraints, performance and security.
                  <br />
                  After that, I then decide to follow my curiosity, new ideas and intuition, and it leads me to naturally meet and dive into
                  Ethereum and learned its ropes. I worked as Blockchain developer for 2 years now and I am always hunger to learn and
                  explore new technologies coming.
                  <br />
                  More than Blockchain itself, it is the decentralization principle that drives my interest. It leads us to rethink and
                  experiments new possibilities : new economics incentives, governance models and so on.
                  <br />
                  Most of those experiments will fail : a good way to learn and build forward on it to reach a better (fair) system. Working
                  on technical tools and softwares that enable those experiments is my priority.
                </BioFonSize>
                <br />
                <h2>Newsletter</h2>
                <a
                  href="https://newsletter.unlock-protocol.com/?title=Francois%20Branciard%20Newsletter&description=Subscribe%20to%20my%20newsletter%20to%20be%20notify%20when%20I%20publish%20new%20blog%20posts%20or%20updates.&locks=0x92acE3f7f96EB49cB3e25A9468C843BD12F0568E
"
                  target="_blank"
                >
                  Subscribe{' '}
                </a>
                using Unlock Protocol
                <br />
                <br />
                <h2>Latest Blog</h2>
                {edges.map(post => (
                  <Article
                    title={post.node.frontmatter.title}
                    date={post.node.frontmatter.date}
                    excerpt={post.node.excerpt}
                    timeToRead={post.node.timeToRead}
                    slug={post.node.fields.slug}
                    category={post.node.frontmatter.category}
                    key={post.node.fields.slug}
                  />
                ))}
                <div className={'textRight'}>
                  <Link to={'/blog'}>All articles ({totalCount})</Link>
                </div>
              </HomepageContent>
            </GridRow>
          </Homepage>
        </Wrapper>
      </Layout>
    );
  }
}
export const IndexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            category
          }
          timeToRead
        }
      }
    }
  }
`;
