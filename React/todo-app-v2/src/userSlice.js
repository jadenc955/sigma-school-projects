import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "user", // key is the storage key
  storage, // storage is the storage engine
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userProfile: [],
    id: 1,
    userToken: null,
  },
  reducers: {
    // action.payload here represents {username, password}. Triggers when user sign up
    addUser: (state, action) => {
      const { username, password } = action.payload;
      state.userProfile.push({
        id: state.id++,
        username,
        password,
        token: null,
        todolist: [],
      });
    },

    // action. payload here represents the todo object. Triggers when user add todos
    addTodos: (state, action) => {
      const userIndex = state.userProfile.findIndex(
        (el) => el.token === state.userToken
      );
      state.userProfile[userIndex].todolist.push(action.payload);
    },

    // action. payload here represents the array of todo objects. Triggers when user edit todos
    editTodos: (state, action) => {
      const userIndex = state.userProfile.findIndex(
        (el) => el.token === state.userToken
      );
      state.userProfile[userIndex].todolist = action.payload;
    },

    // action. payload here represents the specific todo.id to be deleted. Triggers when user delete todos
    deleteTodos: (state, action) => {
      const userIndex = state.userProfile.findIndex(
        (el) => el.token === state.userToken
      );

      const updatedTodos = state.userProfile[userIndex].todolist.filter(
        (el) => el.id !== action.payload
      );
      state.userProfile[userIndex].todolist = updatedTodos;
    },

    // action.payload here represents the {username}. Triggers when user login
    addToken: (state, action) => {
      const { username } = action.payload;
      const userIndex = state.userProfile.findIndex(
        (el) => el.username === username
      );
      const newToken = Date.now();
      state.userProfile[userIndex].token = newToken;
      state.userToken = newToken;
    },

    removeToken: (state) => {
      const userIndex = state.userProfile.findIndex(
        (el) => el.token === state.userToken
      );
      state.userProfile[userIndex].token = null;
      state.userToken = null;
    },
  },
});

export const {
  addUser,
  addTodos,
  editTodos,
  deleteTodos,
  addToken,
  removeToken,
} = userSlice.actions;

// export default userSlice.reducer;
const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

export default persistedReducer;
