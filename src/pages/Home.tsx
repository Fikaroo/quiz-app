import { useEffect } from "react";
import { Hero, Category, Header, Quiz } from "../components";
import { useAppDispatch } from "../redux/hooks";
import { addCategory } from "../redux/slices/categorySlice";

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addCategory({}));
  }, []);

  return (
    <div>
      <Header />
      <div className="w-11/12 mx-auto pt-20">
        <Hero />
        <Category />
        <div>
          <Quiz />
        </div>
      </div>
    </div>
  );
};

export default Home;
