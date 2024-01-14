import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
    id: string,
    title: string,
    description: string,
    isCompleted?: boolean,
    priority: string,
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
            state.todo.push({ ...action.payload, isCompleted: false });
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todo = state.todo.filter(item => item.id !== action.payload);
        },
        toggleStatus : (state, action: PayloadAction<string>) => {

            const task = state.todo.find(item => item.id === action.payload);
            task!.isCompleted = !task?.isCompleted;

            const completedTask = state.todo.filter(item => item.isCompleted === true);
            const incompleteTask = state.todo.filter(item => item.isCompleted === false);

            state.todo = [...incompleteTask, ...completedTask];
        }
    }
});

export const {addTodo, removeTodo, toggleStatus} = todoSlice.actions;

export default todoSlice.reducer;