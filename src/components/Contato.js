const Contato = ({email, telefone1, telefone2, linkedin, github}) => {
  return (
    <div>
        E-mail: {email} <br />
        Telefone (WhatsApp): {telefone1} / {telefone2} <br />
        LinkedIn: <a href={linkedin}>{linkedin}</a> <br />
        Github: <a href={github}>{github}</a> <br />
    </div>
  )
}

export default Contato