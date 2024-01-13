import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div>
      <div className="mb-5 flex justify-between">
        <AddTodoModal/>
        <TodoFilter/>
      </div>
      <div className="bg-primary-gradient h-full w-full rounded-xl p-[5px] ">
        {/* <div className="bg-white p-5 flex justify-center items-center rounded-md text-2xl font-bold">
            <p>No Task found here</p>
        </div> */}
        <div className="bg-white space-y-3 p-5 w-full h-full rounded-lg">
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
