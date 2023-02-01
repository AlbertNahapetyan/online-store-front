import { gql } from '@apollo/client'

export const getHotDealsQuery = gql`
  query {
    hotDeal {
      data {
        attributes {
          products {
            data {
              id
              attributes {
                name
                price
                rating
                media {
                  data {
                    attributes {
                      formats
                    }
                  }
                }
                company {
                  data {
                    id
                    attributes {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export const getAllProductsQuery = gql`
  query GetAllProducts($start: Int, $limit: Int) {
    products(pagination: { start: $start, limit: $limit }) {
      data {
        id
        attributes {
          name
          rating
          price
          media {
            data {
              attributes {
                formats
              }
            }
          }
          company {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`

export const getProductsOfCategoryQuery = gql`
  query getProduct($id: ID!) {
    category(id: $id) {
      data {
        attributes {
          name
          products {
            data {
              id
              attributes {
                name
                rating
                price
                company {
                  data {
                    id
                    attributes {
                      name
                    }
                  }
                }
                media {
                  data {
                    attributes {
                      formats
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export const getCompanyProducts = gql`
  query getCompanyProducts($id: ID!) {
    company(id: $id) {
      data {
        id
        attributes {
          name
          products {
            data {
              id
              attributes {
                name
                price
                rating
                media {
                  data {
                    attributes {
                      formats
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export const getProductsCount = gql`
    query {
        products {
    meta {
      pagination {
        total
      }
    }
  }
}
`