import { Container } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';
import Pig from "../public/favicon.ico";
import { Link } from "react-scroll";
import styles from '../styles/Footer.module.scss';
import Image from "next/image";

export default function() {
    
    return (
        <div className={styles.footer}>
            <Container className={styles.container}>
                <section className={styles.contactFollowUs}>
                    <h3>Contact</h3>
                    <p>contact@piggybank.com</p>
                    <h3>Follow us:</h3>
                    <InstagramIcon sx={{ color: "#640250", fontSize: 30 }} style={{cursor: "pointer"}} />
                    <FacebookIcon sx={{ color: "#640250", fontSize: 30}} style={{cursor: "pointer"}}/>
                    <LinkedInIcon sx={{ color: "#640250", fontSize: 30 }} style={{cursor: "pointer"}}/>
                </section>
                <section>
                    <h3>Navigation</h3>
                    <Link to='differentials' spy={true} smooth={true} offset={-70} duration={500}> <p>Diferentials </p> </Link>
                    <Link to='customers' spy={true} smooth={true} offset={-70} duration={500}> <p>Customers</p> </Link>
                    <Link to='plans' spy={true} smooth={true} offset={-70} duration={500}> <p>Plans</p> </Link>
                    {/* <Link to='newsletter' spy={true} smooth={true} offset={-70} duration={500}> <p>Newsletter</p> </Link> */}
                    <p>Privacy Policy</p>
                </section>
                <section>
                    <h3>Address</h3>
                    <p>United States</p>
                    <p>Melrose Street 459<br/> Los Angeles</p>
                    <p>Brazil</p>
                    <p>Avenida Ipiranga 1151 <br/>Porto Alegre</p>
                </section>
                <section>
                    <h3>Work with us</h3>
                    <p>Careers</p>
                    <p>Financial</p>
                    <p>Software Engineering</p>
                    <p>Customer Service</p>
                    <p>Marketing</p>
                </section>
                <section>
                    <Link to='about' spy={true} smooth={true} offset={-80} duration={500}><Image src={Pig} alt="pig icon" style={{cursor: "pointer"}} /></Link>
                    <p><CopyrightIcon /> Rafael Saraiva, Brazil. <br/> All rights reserverd. </p>
                </section>
            </Container>
        </div>
    )
}