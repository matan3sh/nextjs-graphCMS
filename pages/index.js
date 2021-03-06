import { gql, GraphQLClient } from 'graphql-request';

const Home = ({ videos }) => {
  console.log(videos);
  return <div>Hello</div>;
};

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  });

  const query = gql`
    query {
      videos {
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

  const data = await graphQLClient.request(query);
  const videos = data.videos;
  return {
    props: {
      videos,
    },
  };
};

export default Home;
