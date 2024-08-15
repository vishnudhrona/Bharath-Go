import { createSlice } from "@reduxjs/toolkit"

const initialState = { productId : null, closingProductSlot : null, cartClose : null, refresh : true }

const produtSlice = createSlice({
    name: 'productDetails',
    initialState: initialState,

    reducers : {
        productId(state, action) {
            state.productId = action.payload
        },

        closingProductSlot(state, action) {
            state.closingProductSlot = action.payload
        },

        cartClose(state, action) {
            state.cartClose = action.payload
        },

        refresh(state, action) {
            state.refresh = action.payload
        }
    }
})

export const { productId, closingProductSlot, cartClose, refresh } = produtSlice.actions
export default produtSlice.reducer