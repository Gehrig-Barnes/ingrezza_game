import "./App.css";
import React, {useState} from "react";
import Menue from "./components/Menue/Menue";


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const openModal = () => {
    setIsModalOpen(true);
    
  };

  const closeModal = () => {
    setIsModalOpen(false);
    
  };
  return (
    <div className={`App`}>
      {isModalOpen && <div className="dimmed-overlay" />}
      <Menue isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal}/>
    </div>
  );
}

export default App;
