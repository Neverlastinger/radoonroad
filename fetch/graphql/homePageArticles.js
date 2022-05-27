const homePageArticles = () => (
  `
  query {
    articleCollection (where:{
      showOnHomePage:true
    }) {
      items {
        title
        slug
        showOnHomePage
        coverPhoto {
          url,
          title
        }
      }
    }
  }
  `
);

export default homePageArticles;
