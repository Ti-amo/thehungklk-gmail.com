import gql from 'graphql-tag';

export default gql`
  query CompanyQuery($id: Int!) {
    company(id: $id) {
      id
      latinName,
      japaneseName, 
      image,
      link,
      language,
      address,
      companyDescription,
      jobDescription,
      jobfair {
        id,
        title
      }
      comment {
        id,
        content,
        sender,
        likes {
          id,
          name,
          year
        },
        dislikes {
          id,
          name,
          year
        },
        year,
        isReplied,
        createdAt,
        replies {
          id,
          sender,
          content,
          year,
          createdAt,
          likes {
            id,
            name,
            year
          },
          dislikes {
            id,
            name,
            year
          },
        }
      }
    }
  }
`;