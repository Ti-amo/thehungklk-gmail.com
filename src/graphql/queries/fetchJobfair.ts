import gql from 'graphql-tag'

export default gql`
    query {
        jobfairs {
            id,
            title
        }
    }
`;
