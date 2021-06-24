import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import * as myAxios from "./requests"

export const getProductRequest = createAsyncThunk(
  "product/getProductRequest",
  async thunkAPI => {
    const response = await myAxios.getRequestProduct()
    return response
  }
)

export const postRequestProduct = createAsyncThunk(
  "product/postRequestProduct",
  async (product, thunkAPI) => {
    const response = await myAxios.postRequestProduct(product)
    return response
  }
)

export const editRequestProduct = createAsyncThunk(
  "product/editRequestProduct",
  async (product, thunkAPI) => {
    const response = await myAxios.editRequestProduct(product)
    return response
  }
)

export const deleteRequestProduct = createAsyncThunk(
  "product/deleteRequestProduct",
  async (id, thunkAPI) => {
    const response = await myAxios.deleteRequestProduct(id)
    return response
  }
)

const todosSlice = createSlice({
  name: "PRODUCT",

  initialState: {
    products: [],
    displayForm: false,
    dataEdit: {
      id: "",
      productName: "",
      status: false
    },
    dataSearch: ""
  },

  reducers: {
    toggleForm: state => {
      state.displayForm = !state.displayForm
      if (state.displayForm === false) {
        state.dataEdit = {
          id: "",
          productName: "",
          status: true
        }
      }
    },

    closeForm: state => {
      state.displayForm = false
      state.dataEdit = {
        id: "",
        productName: "",
        status: true
      }
    },

    openForm: (state, action) => {
      state.displayForm = true
      state.dataEdit = action.payload
    },

    handleChangeForm: (state, action) => {
      state.dataEdit = {
        ...state.dataEdit,
        ...action.payload
      }
    },

    filterProduct: (state, action) => {
      state.dataSearch = action.payload
    },

    editStatus: (state, action) => {
      const index = state.products.findIndex(product => {
        return product.id === action.payload.id
      })
      state.products[index].status = !state.products[index].status
    }
  },

  extraReducers: builder => {
    builder.addCase(getProductRequest.fulfilled, (state, action) => {
      state.products = action.payload
    })

    builder.addCase(postRequestProduct.fulfilled, (state, action) => {
      state.products.push(action.payload)
    })

    builder.addCase(editRequestProduct.fulfilled, (state, action) => {
      const indexEdit = state.products.findIndex(product => {
        return product.id === action.payload.id
      })
      state.products[indexEdit] = action.payload
    })

    builder.addCase(deleteRequestProduct.fulfilled, (state, action) => {
      const indexDelete = state.products.findIndex(product => {
        return product.id === action.payload.id
      })
      state.products.splice(indexDelete, 1)
    })
  }
})

export const {
  toggleForm,
  closeForm,
  openForm,
  handleChangeForm,
  filterProduct,
  editStatus
} = todosSlice.actions

export default todosSlice.reducer
