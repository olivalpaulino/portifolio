// estilizar
import './Contato.css'

const Contato = ({email, telefone1, telefone2, linkedin, github, instagram, youtube}) => {
  return (
    <div>
        E-mail: {email} <br />
        Telefone (WhatsApp): {telefone1} / {telefone2} <br />
        LinkedIn: <a href={linkedin}>{linkedin}</a> 
        Github: <a href={github}>{github}</a> 
        Instagram: <a href={instagram}>{instagram}</a> 
        Youtube: <a href={youtube}>{youtube}</a>
    </div>
  )
}

export default Contato