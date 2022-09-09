import axios from 'axios'

const server = process.env.NEXT_PUBLIC_HTTP_SERVER

const getProduct = async id => {
  
  try {
    const {data, status, statusText} = await axios.get(`${server}/products/${id}`)
    
    if (status === 200) {
      return data
    } else {
      console.error(`Error on get data: HTTP ${status} - ${statusText}`)
    }

  } catch(err) {

    console.error(err)
  }

}

const getProducts = async () => {
  try {
    const {data, status, statusText} = await axios.get(`${server}/products`)
    
    if (status === 200) {
      return data
    } else {
      console.error(`Error on get data: HTTP ${status} - ${statusText}`)
    }

  } catch(err) {

    console.error(err)
  }

}

export { getProduct, getProducts  }
