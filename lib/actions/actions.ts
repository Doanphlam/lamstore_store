export const getCollections = async () => {
    const timestamp = new Date().getTime();
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections?_=${timestamp}`);
    const collections = await response.json();
    return collections;
}

export const getCollectionDetails = async (collectionId: string) => {
  const timestamp = new Date().getTime();
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}?_=${timestamp}`);
  const collection = await response.json();
  return collection;
}
/* 
export const getCollectionDetails = async (collectionId: string) => {
  const collection = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`)
  return await collection.json()
}
ORGINAL CODE
*/

export const getProducts = async () => {
    const timestamp = new Date().getTime();
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?_=${timestamp}`);
    const products = await response.json();
    return products;
} 

/* export const getProducts = async () => {
    const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
    return await products.json()
} ORIGINAL */

export const getProductDetails = async (productId: string) => {
    const timestamp = new Date().getTime();
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}?_=${timestamp}`);
    const product = await response.json();
    return product;
}


 /* export const getProductDetails = async (productId: string) => {
    const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`)
    return await product.json()
  } ORGINAL CODE */ 
  
export const getSearchedProducts = async (query: string) => {
    const timestamp = new Date().getTime();
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}?_=${timestamp}`);
    const searchedProducts = await response.json();
    return searchedProducts;
}

/*
export const getSearchedProducts = async (query: string) => {
  const searchedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`)
  return await searchedProducts.json()
}
*/ // ORIGINAL CODE 
   


export const getOrders = async (customerId: string) => {
  const timestamp = new Date().getTime();
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}?_=${timestamp}`);
  const orders = await response.json();
  return orders;
}
  
  /* 
  export const getOrders = async (customerId: string) => {
    const orders = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`)
    return await orders.json()
  }
  
  export const getRelatedProducts = async (productId: string) => {
    const relatedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`)
    return await relatedProducts.json()
  }
    */

  export const getRelatedProducts = async (productId: string) => {
    const timestamp = new Date().getTime();
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related?_=${timestamp}`);
    const relatedProducts = await response.json();
    return relatedProducts;
}
