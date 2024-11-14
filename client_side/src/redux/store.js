import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import usersSlice from './usersSlice'
import  commentSlice  from './commentSlice'
import prestataireSlice  from './prestataireSlice'
import produitSlice  from './produitSlice'
import  cartSlice  from './cartSlice'
import  orderSlice  from './orderSlice'


export const store = configureStore({
  reducer: {
    user : userSlice,
    users : usersSlice,
    comment : commentSlice,
    prestataire : prestataireSlice,
    produit : produitSlice,
    cart: cartSlice,
    order : orderSlice,
  },
})