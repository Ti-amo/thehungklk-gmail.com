import gql from 'graphql-tag';

export default gql`
    query LatestComment($number: Int!){
        latestComment(number: $number) {
            id,
            sender,
            content,
            createdAt,
            isReplied,
            company {
                id
                latinName
            }
            replies {
                id,
                sender
            }
        }
    }
`;