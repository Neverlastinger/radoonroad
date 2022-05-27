export const richText = `
  json
  links {
    entries {
      block {
        sys {
          id
        }
        __typename
        ... on Article {
          title
          slug
          coverPhoto {
            url
          }
        }
      }
    }
    assets {
      block {
        sys {
          id
        }
        url
        title
        width
        height
        description
        contentType
      }
    }
  }
`;

export const imageFragment = `
  fragment image on Asset {
    fileName
    title
    description
    url
  }
`;
