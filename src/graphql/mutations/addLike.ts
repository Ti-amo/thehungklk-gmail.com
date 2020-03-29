import gql from 'graphql-tag';

export default  gql `
    mutation addLike($commentID: Int!, $name: String!, $year: Int!){
        like(commentID: $commentID, name: $name, year: $year) {
            statusCode,
            message
        }
    }
`;