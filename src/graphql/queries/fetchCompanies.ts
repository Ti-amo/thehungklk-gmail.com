import gql from 'graphql-tag'

export default gql`
  query {
    companies {
      id
      latinName
      japaneseName
      image
      link
      language
      address
      jobDescription
      jobfair {
        id
        title
      }
    }
  }
`
