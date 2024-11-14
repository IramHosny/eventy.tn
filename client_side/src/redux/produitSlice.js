import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from"axios";
export const getproduit = createAsyncThunk ("produit/get",async()=> {try {
    let result = axios.get("http://localhost:5000/produit/allproduit")
    return result;
} catch (error) {
    console.log(error);
}})
export const addproduit = createAsyncThunk ("produit/add",async(produit)=> {try {
    let result = axios.post("http://localhost:5000/produit/addproduit",produit)
    return result;
} catch (error) {
    console.log(error);
}})
export const deleteproduit= createAsyncThunk ("produit/delete",async(id)=> {try {
    let result = axios.delete (`http://localhost:5000/produit/${id}`)
    return result;
} catch (error) {
    console.log(error);
}})
export const editproduit = createAsyncThunk ("produit/update",async({id,edited})=> {try {
    let result = axios.put (`http://localhost:5000/produit/${id}`,edited)
    return result;
} catch (error) {
    console.log(error);
}})
const initialState={
    produitlist:null,
    status:null,
}

export const produitSlice = createSlice({

  name: 'produit',
  initialState,
  reducers: {},
  extraReducers:{
    [getproduit.pending]:(state) => {
        state.status="pending";
    },
    [getproduit.fulfilled]:(state,action) => {
        state.status="fullfilled";
        state.produitlist =action.payload.data.produit;
    },
    [getproduit.rejected]:(state) => {
        state.status="rejected";
    },

    [addproduit.pending]:(state) => {
        state.status="pending";
    },
    [addproduit.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [addproduit.rejected]:(state) => {
        state.status="rejected";
    },

    [deleteproduit.pending]:(state) => {
        state.status="pending";
    },
    [deleteproduit.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [deleteproduit.rejected]:(state) => {
        state.status="rejected";
    },

    [editproduit.pending]:(state) => {
        state.status="pending";
    },
    [editproduit.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [editproduit.rejected]:(state) => {
        state.status="rejected";
    },

    

  },
})

// Action creators are generated for each case reducer function
export const { } =produitSlice.actions

export default produitSlice.reducer