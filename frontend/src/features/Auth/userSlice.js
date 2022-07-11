import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import StorageKeys from 'constant/storage-keys';

export const register = createAsyncThunk('user/register', async (payload) => {
  // call API to register user
  const data = await userApi.register(payload);
  // save data to cookie
  //return user data
  return data;
});

export const login = createAsyncThunk('user/login', async (payload) => {
  // call API to register user
  const data = await userApi.login(payload);
  console.log(data);
  const user = {
    userName: data.data.userName,
    email: data.data.email,
    avatar: data.data.avatar,
    role: data.data.role,
  };
  // save data to cookie
  localStorage.setItem(StorageKeys.TOKEN, data.data.accessToken);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(user));
  //return user data
  return user;
});

export const logout = createAsyncThunk('user/logout', async () => {
  localStorage.removeItem(StorageKeys.TOKEN);
  localStorage.removeItem(StorageKeys.USER);

  const data = await userApi.logout();
  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    settings: {},
    isLoggedIn: !!localStorage.getItem(StorageKeys.TOKEN),
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
      state.isLoggedIn = true;
    },
    [logout.fulfilled]: (state, action) => {
      state.current = {};
      state.isLoggedIn = false;
    },
  },
});
const { actions, reducer } = userSlice;
export default reducer;
