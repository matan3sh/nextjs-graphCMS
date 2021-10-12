import { gql } from 'graphql-request';

export const GET_VIDEOS = gql`
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

export const GET_VIDEO = gql`
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
