import { IQuestionItemProps } from "./QuestionItem";
import { HashLink } from "react-router-hash-link";

const QuestionNav = ({ data }: IQuestionItemProps) => {
  return (
    <div className="border rounded-lg p-4 flex justify-center items-center">
      <HashLink to={`#${data.id.toString()}`} preventScrollReset={true}>
        <div>{data.id}</div>{" "}
      </HashLink>
    </div>
  );
};

export default QuestionNav;
