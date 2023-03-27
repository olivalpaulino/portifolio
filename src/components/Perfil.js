import Cursos from './Cursos';
import Imagem from './Imagem';
import Titulo from './Titulo';

const Perfil = () => {
  return (
    <div>
        <Imagem />
        <Titulo nome={"Olival Paulino"} stacks={"{ Java | MySQL | Maven | Spring Boot | ReactJS }"} descricao={"Cientista da Computação, Especializado em Segurança da Informação, Desenvolvedor Back-end e Front-end."} />
        <Cursos nomeDoCurso={"Bootcamp Back-end Java"} duracao={"87 Horas"} descricao={"Declaração de variáveis, tipos primitivos de dados, estruturas condicionais,estruturas de repetição, coleções, métodos, orientação a objetos, debug, tratamento de exceções, entrada e saída de arquivos, protocolos de comunicação da internet, gerenciamento de dependências com Maven, Introdução ao Spring Boot Framework."} />
        <Cursos nomeDoCurso={"Bootcamp Front-end JavaScript"} duracao={"78 Horas"} descricao={"Orientação a Objetos, Arrays, Importação e Exportação, Consumo de API, Programação Assíncrona, Hooks, React, Introdução a TypeScript, Styled-Components, Formulários React."} />
        <Cursos nomeDoCurso={""} duracao={""} descricao={""} />
        <Cursos nomeDoCurso={""} duracao={""} descricao={""} />
        <Cursos nomeDoCurso={""} duracao={""} descricao={""} />
        <Cursos nomeDoCurso={""} duracao={""} descricao={""} />
        <Cursos nomeDoCurso={""} duracao={""} descricao={""} />
        <Cursos nomeDoCurso={""} duracao={""} descricao={""} />
        <Cursos nomeDoCurso={""} duracao={""} descricao={""} />
        <Cursos nomeDoCurso={""} duracao={""} descricao={""} />
    </div>
  )
}

export default Perfil