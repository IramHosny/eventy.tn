import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from"axios";
export const getcomment= createAsyncThunk ("comment/get",async()=> {try {
    let result = axios.get("http://localhost:5000/comment/allcomment")
    return result;
} catch (error) {
    console.log(error);
}})
export const addcomment = createAsyncThunk ("comment/add",async(comment)=> {try {
    let result = axios.post("http://localhost:5000/comment/addcomment",comment)
    return result;
} catch (error) {
    console.log(error);
}})
export const deletecomment = createAsyncThunk ("comment/delete",async(id)=> {try {
    let result = axios.delete (`http://localhost:5000/comment/${id}`)
    return result;
} catch (error) {
    console.log(error);
}})
export const editcomment = createAsyncThunk ("comment/update",async({id,edited})=> {try {
    let result = axios.put (`http://localhost:5000/comment/${id}`,edited)
    return result;
} catch (error) {
    console.log(error);
}})
const initialState={
    commentlist:null,
    status:null,
}

export const commentSlice = createSlice({

  name: 'comment',
  initialState,
  reducers: {},
  extraReducers:{
    [getcomment.pending]:(state) => {
        state.status="pending";
    },
    [getcomment.fulfilled]:(state,action) => {
        state.status="fullfilled";
        state.commentlist =action.payload.data.comment;
    },
    [getcomment.rejected]:(state) => {
        state.status="rejected";
    },

    [addcomment.pending]:(state) => {
        state.status="pending";
    },
    [addcomment.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [addcomment.rejected]:(state) => {
        state.status="rejected";
    },

    [deletecomment.pending]:(state) => {
        state.status="pending";
    },
    [deletecomment.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [deletecomment.rejected]:(state) => {
        state.status="rejected";
    },

    [editcomment.pending]:(state) => {
        state.status="pending";
    },
    [editcomment.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [editcomment.rejected]:(state) => {
        state.status="rejected";
    },

    

  },
})

// Action creators are generated for each case reducer function
export const { } =commentSlice.actions

export default commentSlice.reducer