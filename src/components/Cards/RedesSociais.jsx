function RedesSociaisCard(props) { // { numero, titulo, imagem, descricao, backgroundColor }

    const cards = props.cards

    return ( 
        cards.map(({ numero, titulo, imagem, descricao, backgroundColor }) => (
            <div className="body-card-social" style={{ backgroundColor }}>
                <div className="cabecalho-card-social">
                    <h1>{numero}</h1>
                    <img src={imagem} alt={titulo} />
                </div>
                <div className="main-card-social">
                    <h2>{titulo}</h2>
                    <p>{descricao}</p>
                </div>
            </div>
        ))
     );
}

export default RedesSociaisCard;