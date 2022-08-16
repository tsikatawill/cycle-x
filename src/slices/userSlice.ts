import {createSlice} from '@reduxjs/toolkit'

interface UserI {
  value: {
    isLoggedIn: boolean
    data: {}
  }
}

const initialState: UserI = {
  value: {
    isLoggedIn: false,
    data: {}
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload
    }
  }
})

export const {login} = userSlice.actions
export default userSlice.reducer
