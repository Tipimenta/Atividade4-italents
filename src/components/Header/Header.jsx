import img from '../../assets/img/logo-pimenta.png'
import style from './Header.module.css'
const Header = () => {
    return (
        <header className={style.header}>
            <img src={img} alt="logo"/>
        </header>
    )
}

export {Header}