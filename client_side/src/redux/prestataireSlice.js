import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from"axios";
export const getprestataire = createAsyncThunk ("prestataire/get",async()=> {try {
    let result = axios.get("http://localhost:5000/prestataire/allprestataire")
    return result;
} catch (error) {
    console.log(error);
}})
export const addprestataire = createAsyncThunk ("prestataire/add",async(prestataire)=> {try {
    let result = axios.post("http://localhost:5000/prestataire/addprestataire",prestataire)
    return result;
} catch (error) {
    console.log(error);
}})
export const deleteprestataire= createAsyncThunk ("prestataire/delete",async(id)=> {try {
    let result = axios.delete (`http://localhost:5000/prestataire/${id}`)
    return result;
} catch (error) {
    console.log(error);
}})
export const editprestataire = createAsyncThunk ("prestataire/update",async({id,edited})=> {try {
    let result = axios.put (`http://localhost:5000/prestataire/${id}`,edited)
    return result;
} catch (error) {
    console.log(error);
}})
const initialState={
    prestatairelist:null,
    status:null,
}

export const prestataireSlice = createSlice({

  name: 'prestataire',
  initialState,
  reducers: {},
  extraReducers:{
    [getprestataire.pending]:(state) => {
        state.status="pending";
    },
    [getprestataire.fulfilled]:(state,action) => {
        state.status="fullfilled";
        state.prestatairelist =action.payload.data.prestataire;
    },
    [getprestataire.rejected]:(state) => {
        state.status="rejected";
    },

    [addprestataire.pending]:(state) => {
        state.status="pending";
    },
    [addprestataire.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [addprestataire.rejected]:(state) => {
        state.status="rejected";
    },

    [deleteprestataire.pending]:(state) => {
        state.status="pending";
    },
    [deleteprestataire.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [deleteprestataire.rejected]:(state) => {
        state.status="rejected";
    },

    [editprestataire.pending]:(state) => {
        state.status="pending";
    },
    [editprestataire.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [editprestataire.rejected]:(state) => {
        state.status="rejected";
    },

    

  },
})

// Action creators are generated for each case reducer function
export const { } =prestataireSlice.actions

export default prestataireSlice.reducer