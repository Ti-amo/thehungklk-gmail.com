import gql from 'graphql-tag';

export default  gql `
    mutation addDislike($commentID: Int!, $name: String!, $year: Int!){
        dislike(commentID: $commentID, name: $name, year: $year) {
            statusCode,
            message
        }
    }
`;