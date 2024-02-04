import Table from "@/components/Table";
import { Todo } from "@/types/Todo";
import axios from "axios";

export default async function Home() {
  const response = await axios.get(
    `https://todo-ljcykv8ob-ibraheemhaseeb7.vercel.app/api/add`
  );

  const todo: Todo[] = response.data.data;
  console.log(todo);

  return (
    <div className="w-full">
      <Table data={todo} />
    </div>
  );
}
