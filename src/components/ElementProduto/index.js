import Style from "./style.module.css"


export function ElementProduto({banner, nome, descricao, preco}) {

  // O caminho é relativo à pasta public
  const imagemSrc = `./banner/${banner}`;

  return (
    <>
      <div className={Style.ElementProduto}>
        <div className={Style.conteiner}>
          <div className={Style.boxImg}>
            <img src={imagemSrc} alt={nome} />
          </div>

          <div className={Style.boxText}>
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <h3>{preco}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
