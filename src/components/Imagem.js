import './Imagem.css';
import perfil from '../img/perfil.jpg';

const Imagem = () => {
  return (
    <figure>
        <img src={perfil} alt="Imagem de Perfil de Olival Paulino" title="Olival Paulino"></img>
    </figure>
  )
}

export default Imagem