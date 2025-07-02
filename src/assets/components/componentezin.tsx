import style from "../components/componetezin.module.css";
import { useState } from 'react';
import Modal from '../components/modal';

const Componentezin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className={style.divBtn}>
        <a className={style.btn} onClick={openModal}>Botão</a>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>MODAL BRABO</h2>
        <p>Esse modal é o mais brabo q tem</p>
        <button onClick={closeModal}>Fechar</button>
      </Modal>
    </div>
  );
};
export default Componentezin;
