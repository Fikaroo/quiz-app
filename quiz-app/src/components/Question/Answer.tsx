import { Label, Radio } from "flowbite-react";
import React, { useState } from "react";
import { AnswerItemProps, IQuestionItemProps } from "./QuestionItem";
interface IAnswer {
  data: AnswerItemProps;
  isSubmit: boolean;
}
const Answer = ({ data, isSubmit }: IAnswer) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <div className="flex items-center gap-2 p-4">
      <Radio
        id={data.id.toString()}
        name={data.id.toString()}
        value={data.correct.toString()}
        className="cursor-pointer disabled:bg-opacity-60 checked:!bg-sky-600 disabled:cursor-not-allowed disabled:bg-slate-400"
        checked={isChecked}
        onChange={() => setChecked(true)}
        disabled={isSubmit}
      />
      <Label
        className={`text-base ${
          data.correct && "text-green-400"
        } checked:text-red-400`}
      >
        {data.answer}
      </Label>
    </div>
  );
};

export default Answer;
