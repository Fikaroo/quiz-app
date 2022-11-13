import { Card } from "flowbite-react/lib/esm/components";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
interface CategoryItemProps {
  data: DataType;
}

type DataType = {
  id: number;
  title: string;
};

const CategoryItem = ({ data }: CategoryItemProps) => {
  return (
    <Link to={`/category/${data.id}`}>
      <Card className="!bg-indigo-800  rounded-xl py-6 text-white relative mb-24 transition-all duration-500 cursor-pointer tranform hover:-translate-y-4">
        <div className="rounded-full w-40 h-40 bg-purple-400 absolute -top-16 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
          <AcademicCapIcon className="w-28" />
        </div>
        <div className="flex flex-col items-center gap-4 mt-16">
          <h2 className="text-2xl font-semibold">{data.title}</h2>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryItem;
