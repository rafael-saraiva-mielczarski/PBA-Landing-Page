import styles from '../styles/Header.module.scss';
import logo from '../assets/Piggy-Bank-Logo.png';
import {Link} from "react-scroll";
import Image from 'next/image';

export default function Header() {

    return(
        <div className={styles.header}>
            <nav>
                <Link to='about' spy={true} smooth={true} offset={-80} duration={500}> <Image src={logo} alt="logo"  className={styles.logo} /> </Link>
                <Link to='differentials' spy={true} smooth={true} offset={-70} duration={500}> <p>Differentials </p> </Link>
                <Link to='customers' spy={true} smooth={true} offset={-70} duration={500}> <p>Customers</p> </Link>
                <Link to='plans' spy={true} smooth={true} offset={-70} duration={500}> <p>Plans</p> </Link>
                {/* <Link to='newsletter' spy={true} smooth={true} offset={-70} duration={500}> <p>Newsletter</p> </Link> */}
                <button className={styles.tryNow}><a href="https://piggy-bank-app-rafael-saraiva-mielczarski.vercel.app/demo/tryNow">Try now </a></button>
            </nav>
        </div>
    )
}