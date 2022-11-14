import { Card } from "flowbite-react/lib/esm/components";
import { Button } from "flowbite-react";
import { useRef, useState } from "react";
import LangModal from "./LangModal";

interface CategoryItemProps {
  data: DataType;
}

type DataType = {
  id: number;
  title: string;
  year: number;
};

const QuizItem = ({ data }: CategoryItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {isOpen && (
        <LangModal id={data.id} isOpen={isOpen} onClick={handleModal} />
      )}
      <Card className="!bg-indigo-800  rounded-xl py-6 text-white relative mb-24">
        <img
          src="https://otk.az/images/210.png"
          className="absolute w-40 -top-20 left-1/2 transform -translate-x-1/2"
          alt=""
        />
        <div className="flex flex-col items-center gap-4 mt-16">
          <h2 className="text-lg font-semibold">{data.title}</h2>
          <p>{data.year}</p>
        </div>
        <div className="flex justify-center mt-4">
          <Button
            onClick={handleModal}
            className="focus:ring-transparent rounded-md px-6 py-1 !bg-violet-400 hover:!bg-violet-500 transition-all hover:scale-105"
          >
            Xarici Dili Seç
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default QuizItem;
