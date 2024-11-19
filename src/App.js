import axios from "axios";
import { useState, useEffect,useRef } from "react";
import StyleCardapio from "./StyleCardapio.module.css";
import Logo from "./assets/imagens/logo3.png";
import { ElementProduto } from "./components/ElementProduto";
import { IoIosArrowDown } from "react-icons/io";

import { ModalHorario } from "./components/ModalInfo";
import { ModalPagamentos } from "./components/ModalInfo";
import { ModalSobre } from "./components/ModalInfo";


function App() {
  const [categoria, setCategoria] = useState(null);
  const [data, setData] = useState([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [Focus, setFocus]=useState("btn1");
  const[CurrentItem, setCurrentItem] = useState(0);
 
  const [modalHorarioVisible, setModalHorarioVisible] = useState(false);
  const [modalPagamentosVisible, setModalPagamentosVisible] = useState(false);
  const [modalSobreVisible, setModalSobreVisible] = useState(false);

 // Funções para abrir os modais
 const openModalHorario = () => setModalHorarioVisible(true);
 const openModalPagamentos = () => setModalPagamentosVisible(true);
 const openModalSobre = () => setModalSobreVisible(true);

 // Funções para fechar os modais
 const closeModalHorario = () => setModalHorarioVisible(false);
 const closeModalPagamentos = () => setModalPagamentosVisible(false);
 const closeModalSobre = () => setModalSobreVisible(false);


  const btn1 = useRef();
  const btn2 = useRef();
  const btn3 = useRef();
  const btn4 = useRef();
  const btn5 = useRef();

  useEffect(() => {
    axios
      .get('/produtos.json')
      .then((response) => setData(response.data))
      .catch((error) => {
        console.error("Erro ao buscar dados", error);
      });
  }, []);

  useEffect(() => {
    if (categoria) {
      const filtrados = data.filter((item) => item.categoria === categoria);
      setProdutosFiltrados(filtrados);
    } else {
      setProdutosFiltrados(data);
    }
  }, [data, categoria]);

  const handleClick = (btn) => {
    setFocus(btn); 
    };

  return (
    <>
      <header id={StyleCardapio.cabecalho}>
        <div className={StyleCardapio.Conteiner}>
          <div className={StyleCardapio.Box}>

            <div className={StyleCardapio.banner}></div>

            <div className={StyleCardapio.BoxInfo}>

              <div className={StyleCardapio.boxLogo}>
                <img src={Logo} alt="logo" />
              </div>
              
              <h1>Nome da Empresa</h1>

              <div className={StyleCardapio.Info}>

                <button onClick={openModalHorario}>Horario <IoIosArrowDown /></button>
                <button onClick={openModalPagamentos}>Formas de pagamento <IoIosArrowDown /></button>
                <button onClick={openModalSobre}>Sobre-nos <IoIosArrowDown /></button>

              </div>

            </div>

          </div>
        </div>
      </header>

      <section id={StyleCardapio.Cardapio}>
        <div className={StyleCardapio.Conteiner}>
          <nav className={StyleCardapio.navegacao}>
            <div className={StyleCardapio.boxNav}>
              <button useRef={btn1} onClick={() => { handleClick('btn1'); setCurrentItem(0);setCategoria(null)}}
        className={Focus === 'btn1' ? StyleCardapio.focused : ''}>Todos</button>

              <button useRef={btn2} onClick={() => { handleClick('btn2'); setCurrentItem(0);setCategoria("Promocoes")}}
              className={Focus === 'btn2' ? StyleCardapio.focused : ''} >Promoções</button>

              <button useRef={btn3} onClick={() => { handleClick('btn3'); setCurrentItem(0);setCategoria("Bebidas")}}
              className={Focus === 'btn3' ? StyleCardapio.focused : ''} >Bebidas</button>

              <button useRef={btn4} onClick={() => { handleClick('btn4'); setCurrentItem(0);setCategoria("Lanches")}}
              className={Focus === 'btn4' ? StyleCardapio.focused : ''} >Lanches</button>

              <button useRef={btn5} onClick={() => { handleClick('btn5'); setCurrentItem(0);setCategoria("Porcoes")}}
              className={Focus === 'btn5' ? StyleCardapio.focused : ''}>Porções</button>

            </div>
          </nav>

          <div className={StyleCardapio.Box}>
            {produtosFiltrados.map((produto) => (
              <ElementProduto
                key={produto.id}
                id={produto.id}
                banner={produto.banner}
                nome={produto.nome}
                descricao={produto.descricao}
                preco={produto.preco}
              />
            ))}
          </div>
        </div>
      </section>
      <footer id={StyleCardapio.rodape}>
        
          <div className={StyleCardapio.Conteiner}>
            <div className={StyleCardapio.box}>

                <div className={StyleCardapio.BoxImg}>
                  <img src={Logo} alt="logo_rodape"/>
                </div>

                <h4>Copyright © 2024 IratoDev.com Todos os direitos reservados.</h4>

            </div>
          </div>

      </footer>

      {modalHorarioVisible && <ModalHorario isOpen={modalHorarioVisible} onRequestClose={closeModalHorario} />}
      {modalPagamentosVisible && <ModalPagamentos isOpen={modalPagamentosVisible} onRequestClose={closeModalPagamentos} />}
      {modalSobreVisible && <ModalSobre isOpen={modalSobreVisible} onRequestClose={closeModalSobre} />}

    </>
  );
}

export default App;
