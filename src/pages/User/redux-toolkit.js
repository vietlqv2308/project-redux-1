import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import * as myAxios from "./request"

export const getUsersRequest = createAsyncThunk(
  "users/getUsersRequest",
  async thunkAPI => {
    const response = await myAxios.getUsersRequest()
    return response
  }
)

export const createUserRequest = createAsyncThunk(
  "user/createUserRequest",
  async (user, thunkAPI) => {
    const response = await myAxios.createUserRequest(user)
    return response
  }
)

export const updateUserRequest = createAsyncThunk(
  "user/editUserRequest",
  async (user, thunkAPI) => {
    const response = await myAxios.updateUserRequest(user)
    return response
  }
)

export const deleteUserRequest = createAsyncThunk(
  "user/deleteUserRequest",
  async (id, thunkAPI) => {
    const response = await myAxios.deleteUserRequest(id)
    return response
  }
)

const todosSlice = createSlice({
  name: "USER",

  initialState: {
    isDisplayForm: false,
    users: [],
    isEditing: {
      id: "",
      fullName: "",
      email: ""
    }
  },

  reducers: {
    isToggleForm: state => {
      state.isDisplayForm = !state.isDisplayForm
      if (state.isDisplayForm === false) {
        state.isEditing = {
          fullName: "",
          email: ""
        }
      }
    },

    isOpenForm: (state, action) => {
      state.isDisplayForm = true
      state.isEditing = action.payload
    },

    isCloseForm: state => {
      state.isDisplayForm = false
      state.isEditing = {
        fullName: "",
        email: ""
      }
    },

    handleChangeForm: (state, { payload }) => {
      state.isEditing = {
        ...state.isEditing,
        ...payload
      }
    }
  },

  extraReducers: builder => {
    builder.addCase(getUsersRequest.fulfilled, (state, action) => {
      state.users = action.payload
    })

    builder.addCase(createUserRequest.fulfilled, (state, action) => {
      state.users.push(action.payload)
    })

    builder.addCase(updateUserRequest.fulfilled, (state, action) => {
      const indexEdit = state.users.findIndex(user => {
        return user.id === action.payload.id
      })
      state.users[indexEdit] = action.payload
    })

    builder.addCase(deleteUserRequest.fulfilled, (state, action) => {
      const indexDelete = state.users.findIndex(user => {
        return user.id === action.payload.id
      })
      state.users.splice(indexDelete, 1)
    })
  }
})

export const {
  isToggleForm,
  isOpenForm,
  isCloseForm,
  getUsers,
  handleChangeForm
} = todosSlice.actions

export default todosSlice.reducer
