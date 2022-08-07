import React, {useState} from 'react';
import styles from './NavBar.module.css';
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import Logo from '../../images/logo.png';

const NavBar = () => {

    const [nav, setNav] = useState(false)

  return (
    <header className={styles.NavBar}>
        <img src={Logo} alt="/" />
        <nav>
            <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
                <li>
                    <a a href="/">Learn More</a>
                </li>
                <li>
                    <a a href="/">Log</a>
                </li>
                <li>
                    <a a href="/">Sign Up</a>
                </li>
                <li>
                    <AiOutlineSearch size={25} style={{marginTop: '6px'}}/>
                </li>
                <li>
                    <AiOutlineUser size={25} style={{marginTop: '6px'}}/>
                </li>
            </ul>
        </nav>
        <div onClick={() => setNav(!nav)} className={styles.mob_btn}>
            {nav ?  <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
        </div>
    </header>
    
  )
}

export default NavBar