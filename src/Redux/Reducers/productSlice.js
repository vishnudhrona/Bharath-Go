import { createSlice } from "@reduxjs/toolkit"

const initialState = { productId : null, closingProductSlot : null, cartClose : null, refresh : true, search : null }

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
        },

        search(state, action) {
            state.search = action.payload
        }
    }
})

export const { productId, closingProductSlot, cartClose, refresh, search } = produtSlice.actions
export default produtSlice.reducer