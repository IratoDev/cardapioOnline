import React from "react";
import Modal from "react-modal";
import StyleModal from "./styleModal.module.css";

import { FiX } from 'react-icons/fi'

export function ModalHorario({ isOpen, onRequestClose }) {
 
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      borderRadius: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position:"relative",
      transform: "translate(-50%, -50%)",
      backgroundColor: "var(--colorPrimario)",
      width: "90%", 
      maxWidth: "500px", 
      height: "auto", 
      maxHeight: "90vh",
      padding: "20px",
      overflowY: "auto", 
    },
  };
  

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>

      <button type='button' onClick={onRequestClose} className={StyleModal.ButtonClose} style={{background: 'transparent', border:0}} >

      <FiX size={45} color='#f34748' />

      </button>

      <div className={StyleModal.container}>
        <div className={StyleModal.box}>
          <h3>Nosso horário de funcionamento</h3>
          <ul>
            <li>Terça 11:30 às 22:00</li>
            <li>Quarta 11:30 às 22:00</li>
            <li>Quinta 11:30 às 22:00</li>
            <li>Sexta 11:30 às 22:00</li>
            <li>Sábado 11:30 às 22:00</li>
            <li>Domingo 11:30 às 16:00</li>
          </ul>
        </div>
      </div>
    </Modal>
  );
}

export function ModalPagamentos({ isOpen, onRequestClose }) {
 
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      borderRadius: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position:"relative",
      transform: "translate(-50%, -50%)",
      backgroundColor: "var(--colorPrimario)",
      width: "90%", 
      maxWidth: "500px", 
      height: "auto", 
      maxHeight: "90vh",
      padding: "20px",
      overflowY: "auto", 
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>

      <button type='button' onClick={onRequestClose} className={StyleModal.ButtonClose} style={{background: 'transparent', border:0}} >

      <FiX size={45} color='#f34748' />

      </button>

      <div className={StyleModal.container}>
        <div className={StyleModal.box}>
          <h3>Aceitamos pagamentos em:</h3>
          <ul>
            <li>Dinheiro</li>
            <li>Cartão</li>
            <li>Vale Refeição</li>
            <li>Pix</li>
          </ul>
        </div>
      </div>
    </Modal>
  );
}

export function ModalSobre({ isOpen, onRequestClose }) {
  
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      borderRadius: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position:"relative",
      transform: "translate(-50%, -50%)",
      backgroundColor: "var(--colorPrimario)",
      width: "90%", 
      maxWidth: "500px", 
      height: "auto", 
      maxHeight: "90vh",
      padding: "20px",
      overflowY: "auto", 
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>

      <button type='button' onClick={onRequestClose} className={StyleModal.ButtonClose} style={{background: 'transparent', border:0}} >

      <FiX size={45} color='#f34748' />

      </button>

      <div className={StyleModal.container}>
        <div className={StyleModal.box}>
          <h3>Sobre a Lanchonete</h3>
          <p>
            Nossa lanchonete é o lugar ideal para saborear refeições deliciosas
            em um ambiente acolhedor.
          </p>
          <h4>Contato:</h4>
          <p>Telefone: (XX) XXXX-XXXX</p>
          <p>Endereço: Rua Exemplo, 123 - Centro, Cidade/UF</p>
          <h4>Diferenciais:</h4>
          <ul>
            <li>Wi-Fi gratuito para os clientes</li>
            <li>Cardápio variado com opções vegetarianas</li>
            <li>Atendimento rápido e personalizado</li>
            <li>Ambiente climatizado</li>
          </ul>
        </div>
      </div>
    </Modal>
  );
}
