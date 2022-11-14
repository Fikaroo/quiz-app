import { Label, Radio } from "flowbite-react";
import { useState } from "react";

interface IQuestionItemProps {
  data: QuestionItemProps;
}

type QuestionItemProps = {
  id: number;
  question: string;
  answers: { id: number; answer: string; correct: boolean }[];
};

const QuestionItem = ({ data }: IQuestionItemProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <h3>Question: {data.question}</h3>{" "}
      {data.answers.map((answer) => (
        <div className="flex items-center gap-2">
          <Radio
            id={data.id.toString()}
            name={data.id.toString()}
            value={answer.answer}
            checked={checked}
            onChange={(e) => setChecked(!checked)}
          />
          <Label>{answer.answer}</Label>
        </div>
      ))}
    </div>
  );
};

export default QuestionItem;
