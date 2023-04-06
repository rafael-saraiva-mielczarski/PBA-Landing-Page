import { Container } from '@mui/system';
import plans from "../data/plans.json";
import styles from '../styles/Plans.module.scss';

export default function Plans() {
    return (
        <div className={styles.plans} id="plans">
        <Container>
            <section className={styles.intro}>
                <h1>Our Plans</h1>
                <p>See the advantages of each one and choose the one that match your expectations</p>
            </section>
            <section className={styles.cards}>
                {plans.map((plan) => (
                    <div key={plan.id} className={styles.plansCards}>
                        <h2>{plan.title}</h2>
                        <span>{plan.price}</span>
                        {plan.description.map((item, index) => (
                            <ul key={index}>
                                <li>{item}</li>
                            </ul>
                        ))}
                    </div>
                ))}
            </section>
        </Container>
    </div>
    )
}