import gql from 'graphql-tag';

export default gql`
    query CommentQuery($companyId: Int!) {
        comments (companyId: $companyId) {
            id,
            content,
            sender,
            year,
            isReplied,
            createdAt,
            replies {
                sender,
                content,
                year
            }
        }
    }
`;