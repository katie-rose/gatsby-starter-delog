import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const ContactPage = ({ data: { site } }) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name='description' content={site.siteMetadata.description} />
      </Helmet>
      <div className='two-grids -contact'>
        <div
          className='post-thumbnail'
          style={{
            backgroundImage: `url('/assets/phone.jpg')`,
            marginBottom: 0,
          }}
        >
          <h1 className='post-title'>Get in Touch</h1>
          <p>
            Are you hiring? I'm looking for a remote role, mostly focused on
            helping to build and manage technical projects for the web. &rarr;
          </p>
        </div>
        <div>
          <p>
            <span role='img' aria-label='Email'>
              📧
            </span>{' '}
            <a href='mailto:katiefelten@gmail.com'> katiefelten@gmail.com</a>
          </p>
          <p>
            <span role='img' aria-label='Laptop'>
              💻
            </span>
            <a href='https://github.com/katie-rose'> github.com/katie-rose</a>
          </p>
          {/*<p>
            <span role='img' aria-label='Bird'>
              🐦
            </span>
            <a href='https://twitter.com/katierose'>
              {' '}
              twitter.com/rosethekatie
            </a>
          </p>*/}
        </div>
      </div>
    </Layout>
  );
};
export default ContactPage;
export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
