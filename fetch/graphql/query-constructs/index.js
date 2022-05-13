export const richText = `
  json
  links {
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
