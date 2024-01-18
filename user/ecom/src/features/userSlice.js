import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AppURL from "../api/AppURL";
import { tokenoptions } from "../utils/auth";

// fetch(AppURL.UserData, defaultoptions)
//   .then((data) => data.json())
//   .then((data) => {
//     console.log(data);
//     setUser(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
export const userLogin = createAsyncThunk(
  "userLogin",
  async (data, { rejectWithValue }) => {
    const response = await fetch(AppURL.UserLogin, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    try {
      const json = await response.json();
      console.log(json);
      return json;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userRegister = createAsyncThunk(
  "userRegister",
  async (data, { rejectWithValue }) => {
    const response = await fetch(AppURL.UserRegister, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    try {
      const json = await response.json();
      console.log(json);
      return json;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//lay thong tin user theo token
export const readUserByToken = createAsyncThunk(
  "readUserByToken",
  async (args, { rejectWithValue }) => {
    const response = await fetch(AppURL.UserData, tokenoptions);
    console.log(response);
    try {
      const json = await response.json();
      console.log(json);
      return { user: json };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "userSlice", //ten nay lam prefix cho action
  initialState: {
    userData: null, //sua may cho ben duoi user ra userData - gom token, message, user, ...
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token"); // deletes token from storage
      state.loading = false;
      state.userData = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(readUserByToken.pending, (state) => {
        state.loading = true;
      })
      .addCase(readUserByToken.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(readUserByToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
// export const { searchUser } = userSlice.actions;
export const { logout } = userSlice.actions;
