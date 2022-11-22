import QuestionItem from "./QuestionItem";
import data from "./data.json";
import { Button } from "flowbite-react";
import QuestionNav from "./QuestionNav";
import { useState } from "react";
const Question = () => {
  const [result, setResult] = useState<{ true: number; false: number }>();
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let trueAns = 0;
    let falseAns = 0;
    for (const [key, value] of formData) {
      value === "true" ? trueAns++ : falseAns++;
    }
    setResult({ true: trueAns, false: falseAns });
    setIsSubmit(true);
  };
  return (
    <div className="flex">
      <div className="w-3/4">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 p-8">
            {data.map((item) => (
              <QuestionItem key={item.id} data={item} isSubmit={isSubmit} />
            ))}
          </div>
          <div className="flex justify-between px-8 py-4">
            <div
              className={`border px-6 py-2 rounded-md shadow-lg opacity-0 ${
                result && "opacity-100"
              } `}
            >
              {result && (
                <p className="flex gap-4">
                  <span> Düzgün cavabların sayı: {result.true}</span>{" "}
                  <span> Səhv cavabların sayı: {result.false}</span>
                </p>
              )}
            </div>
            <Button className="px-16 py-1" type="submit" disabled={isSubmit}>
              Bitir
            </Button>
          </div>
        </form>
      </div>
      <div className="w-1/4 flex justify-center h-full">
        <div className="fixed">
          <h3>Sualların naviqasiyası</h3>
          <div className="grid grid-cols-5 gap-2 mt-4">
            {data.map((item) => (
              <QuestionNav key={item.id} data={item} isSubmit={false} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
