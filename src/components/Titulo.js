const Titulo = ({nome, stacks, descricao}) => {
  return (
    <div>
        <h1>{nome}</h1>
        <p>{stacks}</p>
        <p>{descricao}</p>
    </div>
  )
}

export default Titulo