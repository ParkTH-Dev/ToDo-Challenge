import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { categoryState, customCategoryState, toDoSelector } from "../atom";
import ToDo from "./ToDo";
import { Addcomponent } from "./AddComponent";

// interface IForm {
//   categoryValue: string;
// }

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const customCategories = useRecoilValue(customCategoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  // 카테고리 생성
  // const setCustomCategory = useSetRecoilState(categoryState);
  // const customCategory = useRecoilValue(categoryState);
  // const { register, handleSubmit, setValue } = useForm<IForm>();
  // const onCategorySubmit = ({ categoryValue }: any) => {
  //   setCustomCategory((oldCategory: []) => [categoryValue, ...oldCategory]);
  //   setValue("categoryValue", "");
  //   console.log(categoryValue);
  // };
  // //

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <Addcomponent />
      <select value={category} onInput={onInput}>
        <option value="TO_DO">ToDo</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
        {customCategories.map((category) => (
          <option key={category.id} value={category.title}>
            {category.title}
          </option>
        ))}
      </select>
      <hr />
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}
export default ToDoList;
