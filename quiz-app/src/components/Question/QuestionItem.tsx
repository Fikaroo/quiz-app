import { Label, Radio } from "flowbite-react";
import { useState } from "react";

export interface IQuestionItemProps {
  data: QuestionItemProps;
  isSubmit: boolean;
}

export type QuestionItemProps = {
  id: number;
  question: string;
  answers: { id: number; answer: string; correct: boolean }[];
};

const QuestionItem = ({ data, isSubmit }: IQuestionItemProps) => {
  return (
    <div
      id={data.id.toString()}
      className="bg-white shadow-md py-8 px-8 rounded-md"
    >
      <h3 className="text-xl">
        {data.id}) {data.question}
      </h3>
      {data.answers.map((answer) => (
        <div className="flex items-center gap-2 p-4" key={answer.id}>
          <Radio
            id={data.id.toString()}
            name={data.id.toString()}
            value={answer.correct.toString()}
            className="cursor-pointer disabled:bg-opacity-60 checked:!bg-sky-600 disabled:cursor-not-allowed disabled:bg-slate-400"
            disabled={isSubmit}
          />
          <Label
            className={`text-base ${
              answer.correct && "text-green-400"
            } checked:text-red-400`}
          >
            {answer.answer}
          </Label>
        </div>
      ))}
    </div>
  );
};

export default QuestionItem;
