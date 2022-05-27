export const richText = `
  json
  links {
    entries {
      inline {
        sys {
          id
        }
        __typename
        ... on Article {
          title
          slug
        }
      }
      block {
        sys {
          id
        }
        __typename
        ... on Article {
          title
          slug
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
