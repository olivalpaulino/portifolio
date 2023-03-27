import Curso from './Curso';
import Imagem from './Imagem';
import Titulo from './Titulo';
import Formacao from './Formacao';
import Experiencia from './Experiencia';

const Perfil = () => {
  return (
    <div>
      <header>
        <Imagem />
        <Titulo nome={"Olival Paulino"} stacks={"{ Java | MySQL | Maven | Spring Boot | ReactJS }"} descricao={"Cientista da Computação, Especializado em Segurança da Informação, Desenvolvedor Back-end e Front-end."} />
      </header>

      <section class="formacao">
        <h2>Formação Acadêmica:</h2>
        <Formacao nomeDoCurso={"Bacharel em Ciência da Computação"} local={"UFAL"} />
        <Formacao nomeDoCurso={"Segurança da Informação"} local={"SENAC"} />
        <Formacao nomeDoCurso={"Técnico em Redes de Computadores"} local={"IFAL"} />
      </section>

      <section class="cursos">
        <h2>Cursos e Treinamentos:</h2>
        <Curso nomeDoCurso={"Bootcamp Back-end Java"} duracao={"87 Horas"} descricao={"Declaração de variáveis, tipos primitivos de dados, estruturas condicionais,estruturas de repetição, coleções, métodos, orientação a objetos, debug, tratamento de exceções, entrada e saída de arquivos, protocolos de comunicação da internet, gerenciamento de dependências com Maven, Introdução ao Spring Boot Framework."} />
        <Curso nomeDoCurso={"Bootcamp Front-end JavaScript"} duracao={"78 Horas"} descricao={"Orientação a Objetos, Arrays, Importação e Exportação, Consumo de API, Programação Assíncrona, Hooks, React, Introdução a TypeScript, Styled-Components, Formulários React."} />
        <Curso nomeDoCurso={"Curso JavaScript do Básico ao Avançado com Node.js"} duracao={"22 Horas"} descricao={"Tipos de dados, operadores lógicos, funções, arrow functions, arrays, orientação a objetos, debugs, programação assíncrona, eventos, express, sequelize, es6"} />
        <Curso nomeDoCurso={"Curso Java Completo"} duracao={"77 Horas"} descricao={"Tipos primitivos de dados, fundamentos, operadores lógicos, strings, operadores relacionais, operador ternário, estruturas condicionais, estruturas de repetição, orientação a objetos (classes, atributos, métodos, interfaces, construtores, herança, polimorfismo, classe abstrata), arrays, coleções, lambdas, stream api, tratamento de exceções, swing, banco de dados(jdbc, crud), jpa, maven, spring boot, banco de dados não relacional (NoSQL)"} />
        <Curso nomeDoCurso={"Dominando Banco de Dados MySQL"} duracao={"4 Horas"} descricao={"Criação de banco de dados, tabelas, diagramação, pesquisa, inserção, atualização e remoção de dados."} />
        <Curso nomeDoCurso={"Fundamentos do Scrum Agile"} duracao={"2 Horas"} descricao={"Conhecimento da metodologia Scrum aplicada a projetos de Software."} />
        <Curso nomeDoCurso={"Diagramação de Projetos de Software com UML"} duracao={"4 Horas"} descricao={"Casos de usos, diagrama de classes, atividades, fluxos, objetos."} />
        <Curso nomeDoCurso={"Comunicação Interpessoal e Oratória"} duracao={"70 Horas"} descricao={"Técnicas de Comunicação, Técnicas de Vendas, Análise Comportamental, Mentalidade, Relacionamentos, Pitch de Vendas, Arquétipos, Oratória, Apresentações Digitais"} />
        <Curso nomeDoCurso={"Curso de Análise Comportamental - DISC"} duracao={"60 Horas"} descricao={"Compreensão do Modelo Comportamental DISC, Análise de Perfis, Teste de Perfil, Comunicação entre Perfis."} />
        <Curso nomeDoCurso={"Storytelling"} duracao={"5 Horas"} descricao={"Comunicação através de histórias, arquétipos, perfis dos arquétipos, implementação de arquétipos na comunicação e expressão de produtos, serviços e marca pessoal."} />
        <Curso nomeDoCurso={"A Linguagem Corporal dos Líderes"} duracao={"1 Hora"} descricao={"Postura profissional, vestimenta, gestos, comunicação."} />
      </section>

      <section>
        <h2>Experiência Profissional:</h2>
        <Experiencia cargo={"Professor de Programação"} instituicao={"Freelancer"} periodo={"2022 a 2023"} atividades={"Aulas online via Teams/Zoom de Java e JavaScript"} />
        <Experiencia cargo={"Gerente de Tecnologia"} instituicao={"UPA Dra. Helenilda Veloso Pimentel Canales"} periodo={"2019 a 2021"} atividades={"Gestão de Dados, treinamentos de profissionais de saúde, administração de sistemas de saúde, interação com prestadores, desenvolvimento de filtros automatizados para relatórios."} />
        <Experiencia cargo={"Técnico de Informática"} instituicao={"Secretaria Municipal de Saúde"} periodo={"2018 a 2019"} atividades={"Transformação Digital, gestão de dados, planilhas, formulários digitais, suporte técnico presencial e remoto."} />
      </section>
    </div>
  )
}

export default Perfil