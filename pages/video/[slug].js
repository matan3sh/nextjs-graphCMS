import { gql, GraphQLClient } from 'graphql-request';

const Video = ({ video }) => {
  console.log(video);
  return <div>Video Page</div>;
};

export const getServerSideProps = async (pageContext) => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  });
  const pageSlug = pageContext.query.slug;

  const query = gql`
    query ($pageSlug: String!) {
      video(where: { slug: $pageSlug }) {
        createdAt
        id
        title
        description
        seen
        slug
        tags
        thumbnail {
          url
        }
        mp4 {
          url
        }
      }
    }
  `;
  const variables = { pageSlug };

  const data = await graphQLClient.request(query, variables);
  const video = data.video;
  return {
    props: {
      video,
    },
  };
};

export default Video;
