import { useState } from "react";
import { useParams } from "react-router-dom";
import { Quiz } from "../components";

const Category = () => {
  const { categoryId } = useParams();
  const [cid, setCId] = useState(categoryId);
  console.log(cid);
  if (cid === "1") {
    return (
      <div className="w-11/12 mx-auto pt-20">
        <h1>Magistr üzrə sınaqlar</h1>
        <Quiz />
      </div>
    );
  }
  return <div>Category</div>;
};

export default Category;
