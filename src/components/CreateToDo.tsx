import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atom";

interface IForm {
  todo: string;
}

export default function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, reset } = useForm<IForm>();
  const onSubmit = ({ todo }: IForm) => {
    setToDos((oldToDos) => [
      { text: todo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("todo", {
            required: "내용을 입력해주세요.",
          })}
          placeholder="todo.."
        />
        <button>add todo</button>
      </form>
    </>
  );
}
