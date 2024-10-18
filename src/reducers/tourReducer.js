const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    items: [],
    isLoading: false
}

export const getTourItems = createAsyncThunk("tourItems/getTourItems", async (_, thunkAPI) => {
    
})

const tourItemsSlice = createSlice({
    name: 'tourItems',
    initialState,
    extraReducers: (builder) => {
        builder.addCase()
    }
})