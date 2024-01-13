import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
    title: string,
    description: string,
    isCompleted?: boolean
}

type TInitialState = {
    todo: TTodo[]
}

const initialState: TInitialState = {
    todo: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TTodo>) => {
            state.todo.push({ ...action.payload, isCompleted: false })
        }
    }
});

export const {addTodo} = todoSlice.actions;

export default todoSlice.reducer;