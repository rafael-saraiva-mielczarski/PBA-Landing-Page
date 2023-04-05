import Image from 'next/image';
import piggy from '../assets/piggy2.png';
import styles from '../styles/About.module.scss';
import Container from '@mui/material/Container';

export default function About() {
  return (
    <div className={styles.about} id="about">
        <Container>
            <div className={styles.aboutAll}>
                <section className={styles.text}>
                    <h1>Do you want to take control of your financial situation?</h1>
                    <p>You are now closer than ever before to achieving financial stability and freedom with the Piggy Bank App.</p>
                    <p>Add and control your expenses, see alternative investments options, go trough specific charts to make detailed analysis of your monthly expenses and much more!</p>
                    <p>Trusted and used by more than 1000 savers</p>
                </section>
                <Image src={piggy} alt="piggy" className={styles.piggy} />
            </div>
        </Container>
    </div>
)
}