import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";

const TodoContainer = () => {
  // const { todo } = useAppSelector((state) => state.todos);
  const [priority, setPriority] = useState("")

  const { data: todo, isLoading, isError } = useGetTodosQuery(priority);

  if (isLoading) {
    return <p>Loading ....</p>;
  }

  

  return (
    <div>
      <div className="mb-5 flex justify-between">
        <AddTodoModal />
        <TodoFilter priority = {priority} setPriority = {setPriority} />
      </div>
      <div className="bg-primary-gradient h-full w-full rounded-xl p-[5px] ">
        {/* <div className="bg-white p-5 flex justify-center items-center rounded-md text-2xl font-bold">
            <p>No Task found here</p>
        </div> */}
        <div className="bg-white space-y-3 p-5 w-full h-full rounded-lg">
          {todo?.data?.map((item) => (
            <TodoCard key={item._id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
