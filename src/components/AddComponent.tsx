import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { customCategoryState } from "../atom";

const AddBoard = styled.form``;
const AddBoardTitle = styled.h1``;
const AddBoardInput = styled.input``;
const AddBoardBtn = styled.button``;

interface IForm {
  customCategory: string;
}

export function Addcomponent() {
  const { register, setValue, handleSubmit } = useForm<any>();
  const setCustomCategory = useSetRecoilState(customCategoryState);
  const onValid = ({ customCategory }: IForm) => {
    setCustomCategory((prevCategories) => [
      { title: customCategory, id: Date.now() },
      ...prevCategories,
    ]);
    setValue("customCategory", "");
  };

  return (
    <AddBoard onSubmit={handleSubmit(onValid)}>
      <AddBoardTitle>Add Board!</AddBoardTitle>
      <AddBoardInput {...register("customCategory")} />
      <AddBoardBtn>Add</AddBoardBtn>
    </AddBoard>
  );
}
