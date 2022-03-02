import './styles.css'
import {Link} from 'react-router-dom'
import errorImg from '../../img/error.png'

export default function Error() {
    return (
        <div className='container-error'>
            <img src={errorImg} alt="Página não encontrada" />
            <h1>Página não encontrada!</h1>
            <Link to="/">Voltar para home</Link>
        </div>
    )
}