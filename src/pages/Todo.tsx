import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";


const Todo = () => {
  return (
    <div>
        <h1 className="text-center font-bold text-3xl my-2">My Todos</h1>
      <Container>
        <TodoContainer />
      </Container>
    </div>
  );
};

export default Todo;
