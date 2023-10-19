import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

// Add Product ==================
export const addProduct = async (data) => {
  try {
    await api.post('/addProduct', { data })
    //return resp.status
  } catch (error) {
    console.log(error)
  }

}

// IndexAll Products ===================
export const indexAllProducts = async () => {
  try {
    const resp = await api.get('/products')
    return resp
  } catch (err) {
    console.log(err)
    return err.message
  }
}
// Index One Product ===================
export const indexOneProduct = async (id) => {
  try {
    const resp = await api.get(`/product/${id}`)
    return resp
  } catch (err) {
    return err.message
  }
}
// Index bestSellProduct ===============
export const bestSellProduct = async () => {
  try {
    const resp = await api.get('/indexBestSellProducts')
    return resp
  } catch (error) {
    return error.message
  }
}
// index Products Relation ================
export const indexProductRelation = async (category) => {
  try {
    const resp = await api.get(`/indexProductRelation/${category}`)
    return resp
  } catch (error) {
    return error.message
  }
}
// Products For Category Name
export const productForCategoryName = async (name) => {
  try {
    const resp = await api.get(`/indexProductCategory/${name}`)
    return resp
  } catch (error) {
    return error.message
  }
}
// Update One Product ================
export const updateOneProduct = async (id, data) => {
  try {
    const resp = await api.put(`/product/${id}`, { data })
    return resp
  } catch (err) {
    return err.message
  }
}
// Delete One Product =================
export const deleteOneProduct = async (id) => {
  try {
    await api.delete(`/product/${id}`)
  } catch (err) {
    return err.message
  }
}

// ================== Request The Category ================================

//  Add Category ================
export const addCategory = async (data) => {
  try {
    const resp = await api.post('/addCategory', { data })
    return resp

  } catch (error) {
    return error.message

  }
}
// Index Category ================
export const indexCategory = async () => {
  try {
    const resp = await api.get('/categories')
    return resp

  } catch (error) {
    return error.message
  }
}
// index Category Name ======================
export const indexCategoryName = async (nameCategory) => {
  try {
    const resp = await api.get(`/categoryName/${nameCategory}`)
    return resp
  } catch (error) {
    return error.message
  }
}

// indexProductsCategory =====================
export const indexProductsCategory = async (id) => {
  try {
    const resp = await api.get(`/productsCategory/${id}`)
    return resp
  } catch (error) {
    return error.message
  }
}

// Delete Category ======================
export const deleteCategory = async (id) => {
  try {
    const resp = await api.delete(`/category/${id}`)
    return resp
  } catch (error) {
    return error.message
  }
}
