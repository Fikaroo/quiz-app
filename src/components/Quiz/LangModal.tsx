import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";

type LangModalProps = {
  id: number;
  isOpen: boolean;
  onClick: () => void;
};

const LangModal = ({ id, isOpen, onClick }: LangModalProps) => {
  const [selectedLang, setSelectedLang] = useState("");
  const selectRussian = () => {
    setSelectedLang("Russian");
  };
  const selectEnglish = () => {
    setSelectedLang("English");
  };
  return (
    <Modal show={isOpen} size="md" popup={true} onClose={onClick}>
      <Modal.Header />
      <Modal.Body className="pb-0">
        <div className="">
          <div className="flex justify-center items-center ">
            <div className="p-4 relative">
              {selectedLang === "English" && (
                <span className="absolute  left-1/2 transform -translate-x-1/2 top-0 font-medium text-lg">
                  Seçildi
                </span>
              )}
              <Button color="failure" className="mt-4" onClick={selectEnglish}>
                <div className="flex flex-col gap-4">
                  <img className="w-20" src="/en_flag.svg" alt="" />
                  <p className="text-2xl">İngilis</p>
                </div>
              </Button>
            </div>
            <div className="p-4 relative">
              {selectedLang === "Russian" && (
                <span className="absolute left-1/2 transform -translate-x-1/2 top-0 font-medium text-lg">
                  Seçildi
                </span>
              )}
              <Button onClick={selectRussian} className="mt-4">
                <div className="flex flex-col gap-4">
                  <img className="w-20" src="/ru_flag.svg" alt="" />
                  <p className="text-2xl">Rus</p>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="flex justify-center">
        <Link to={`/exam/${id}`}>
          <Button className="!bg-violet-400 hover:!bg-violet-500">
            İmtahana Başla
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default LangModal;
