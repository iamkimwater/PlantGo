import {createSlice} from '@reduxjs/toolkit';

export interface IUserState {
  me: IMe | null;
}

export interface IMe {
  userId: number;
  email: string;
}

const userState: IUserState = {
  me: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {
    loginByFirebase(state, action) {},
    loginByFirebaseSuccess(state, action) {
      const {user} = action.payload;
      // runtime에 type check how?????
      // ts all deleted at runtime
      // zod
      state.me = user;
    },
  },
});

export default userSlice;
