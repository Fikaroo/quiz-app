import QuizItem from "./QuizItem";

const Quiz = () => {
  const data = [
    {
      id: 1,
      title: "Magistr №1 Sınaq İmtahanı",
      year: 2022,
    },
    {
      id: 1,
      title: "Magistr №1 Sınaq İmtahanı",
      year: 2022,
    },
    {
      id: 1,
      title: "Magistr №1 Sınaq İmtahanı",
      year: 2022,
    },
    {
      id: 1,
      title: "Magistr №1 Sınaq İmtahanı",
      year: 2022,
    },
    {
      id: 1,
      title: "Magistr №1 Sınaq İmtahanı",
      year: 2022,
    },
    {
      id: 1,
      title: "Magistr №1 Sınaq İmtahanı",
      year: 2022,
    },
    {
      id: 1,
      title: "Magistr №1 Sınaq İmtahanı",
      year: 2022,
    },
    {
      id: 1,
      title: "Magistr №1 Sınaq İmtahanı",
      year: 2022,
    },
    {
      id: 1,
      title: "Magistr №1 Sınaq İmtahanı",
      year: 2022,
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-4 mt-32 gap-4 ">
        {data.map((item, idx) => {
          return <QuizItem key={idx} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Quiz;
