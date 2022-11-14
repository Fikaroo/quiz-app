import QuestionItem from "./QuestionItem";
import data from "./data.json";
import { Button } from "flowbite-react";
const Question = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData);
  };
  return (
    <div>
      {data.map((item) => (
        <QuestionItem key={item.id} data={item} />
      ))}
      <Button>Submit</Button>
    </div>
  );
};

export default Question;
