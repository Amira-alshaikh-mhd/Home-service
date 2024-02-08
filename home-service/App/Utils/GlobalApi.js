import { request, gql } from 'graphql-request'

const MASTER_URL="https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cls93yujs1lko01w4sa2m3tlb/master"

const getSlider= async()=>{
    const query = gql`
    query Sliders {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
      
`
const result = await request(MASTER_URL, query);
return result;
}

const getCategories= async()=>{
    const query =gql`
    query GetCategory {
        categories {
          id
          name
          icon {
            url
          }
        }
      }
    `
    const result = await request(MASTER_URL, query);
return result;
}


const getBusinessList= async()=>{
  const query =gql`
  query GetBusinessList {
    businessLists {
      id
      name
      email
      address
      about
      contactPerson
      category {
        name
      }
      images {
        url
      }
    }
  }
  `
  const result = await request(MASTER_URL, query);
return result;
}





 export default{
    getSlider,
    getCategories,
    getBusinessList
 }