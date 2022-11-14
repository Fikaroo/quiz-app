import CategoryItem from "./CategoryItem";

const Category = () => {
  const data = [
    {
      id: 1,
      title: "Magistr üzrə sınaqlar",
    },
  ];
  return (
    <div className="grid grid-cols-4 mt-32 gap-4 ">
      {data.map((item) => {
        return <CategoryItem key={item.id} data={item} />;
      })}
    </div>
  );
};

export default Category;
