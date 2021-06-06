import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const ResumePage = ({ data: { site } }) => {
  return (
    <Layout>
      <Helmet>
        <title>Resume — {site.siteMetadata.title}</title>
        <meta name='description' content={site.siteMetadata.description} />
      </Helmet>
      <div className=''>
        <div
          className='resume-thumbnail'
          style={{
            backgroundImage: `url('/assets/resume.png')`,
            marginBottom: 30,
          }}
        ></div>
        <a href='/assets/katiefeltenresume.pdf' class='post-button'>
          Download Resume
        </a>
      </div>
    </Layout>
  );
};
export default ResumePage;
export const pageQuery = graphql`
  query ResumePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
