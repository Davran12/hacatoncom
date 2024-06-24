import axios from "axios"
import React, {createContext, useContext, useReducer} from "react"
import {useNavigate} from "react-router-dom"

export const productContext = createContext()
export const useProducts = useContext(productContext)
const ProductContextProvider = ({children}) => {
  const navigate = useNavigate()
  const INIT_STATE = {
    product: [],
    oneproduct: {},
  }
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_PRODUCT":
        return {...state, product: action.payload}
    }
  }
  const [state, dispatch] = useReducer(reducer, INIT_STATE)
  //   ! Config
  const getConfig = () => {
    const tokens = JSON.parse(localStorage.getItem(""))
    const Authorization = `Bearer ${tokens}`
    const config = {
      headers: {Authorization},
    }
    return config
  }
  //   ! ADDPRODUCT
  const addProduct = async (product) => {
    try {
      const {data} = await axios.post()
    } catch (error) {
      console.log(error)
    }
  }
  //   ! GETPRODUCT
  const getProduct = async () => {
    const {data} = await axios()
    dispatch({
      type: "GET_PRODUCT",
      payload: data.results,
    })
  }
  //   ! DELETE
  const deleteProduct = async (id) => {
    try {
      await axios.delete()
    } catch (error) {
      console.log(error)
    }
  }
  //   ! GETONEPRODUCT
  const getOneProduct = async (id) => {
    try {
      const {data} = await axios()
      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: data,
      })
    } catch (error) {
      console.log(error)
    }
  }
  //   ! EDIT
  const editProduct = async (id, newProduct) => {
    try {
      await axios.patch()
    } catch (error) {
      console.log(error)
    }
  }
  const values = {
    addProduct,
    getProduct,
    deleteProduct,
    getOneProduct,
  }
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  )
}

export default ProductContextProvider
