import gql from 'graphql-tag';

export default gql`
    mutation addReply($companyId: Int!, $commentId: Int!, $content: String!, $sender: String!, $year: Int!) {
        addReply(companyId: $companyId, parentId: $commentId, content: $content, sender: $sender, year:$year) {
        id,
        content,
        sender,
        company {
            latinName
        }
        }
    }
`;