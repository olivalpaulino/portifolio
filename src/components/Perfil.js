import Imagem from './Imagem';
import Titulo from './Titulo';

const Perfil = () => {
  return (
    <div>
        <Imagem />
        <Titulo nome={"Olival Paulino"} stacks={"{ Java | MySQL | Maven | Spring Boot | ReactJS }"} descricao={"Cientista da Computação, Especializado em Segurança da Informação, Desenvolvedor Back-end e Front-end."} />
    </div>
  )
}

export default Perfil