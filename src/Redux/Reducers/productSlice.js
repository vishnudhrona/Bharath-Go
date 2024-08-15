import { createSlice } from "@reduxjs/toolkit"

const initialState = { productId : null, closingProductSlot : null }

const produtSlice = createSlice({
    name: 'productDetails',
    initialState: initialState,

    reducers : {
        productId(state, action) {
            state.productId = action.payload
        },

        closingProductSlot(state, action) {
            state.closingProductSlot = action.payload
        }
    }
})

export const { productId, closingProductSlot } = produtSlice.actions
export default produtSlice.reducer