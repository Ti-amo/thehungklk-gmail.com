import gql from 'graphql-tag';


export default gql `
    mutation addComment($companyId: Int!, $content: String!, $sender: String!){
        addComment(companyId: $companyId, content: $content, sender: $sender) {
            id,
            content,
            year,
            sender,
        }
    }
`;

