import { Container } from "@mui/system";
import { useState } from "react";
import styles from "../styles/Differentials.module.scss";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import HttpsIcon from '@mui/icons-material/Https';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

export default function Differentials() {
  
    const [differentials] = useState(
        [
            {id:1, name: "User Experience", icon: <DesignServicesIcon sx={{fontSize: 32}} />, text: "We care about our savers and our very talented design team is full of stars! Taking their time to develop a beautiful interface, so our user can have the greatest experience while navigating through our App!"},
            {id:2, name: "Security", icon: <HttpsIcon sx={{fontSize: 32}} />, text: "Our priority is your safety! Our cybersecurity team works with the latest cryptography and security protocols to ensure you are safe when adding your expenses, income, and investments."},
            {id:3, name: "Investments", icon: <CurrencyBitcoinIcon sx={{fontSize: 32}} />, text: "What about some new opportunities? If you interested in making your money work for you, our investments options are a good option for that! Take a look at new options, make in depth analysis and take your conclusion."},
        ]
    );

    return (
        <div className={styles.differentials} id="differentials">
            <Container>
                <h1>Differentials</h1>
                <p className={styles.intro}>We put our Savers in first place, check out what differentiates us from the competition!</p>
                <section className={styles.cards}>
                    {differentials.map((differential) => (
                        <div key={differential.id} className={styles.differentialsCards}>
                            <span>{differential.icon}</span>
                            <h2>{differential.name}</h2>
                            <p>{differential.text}</p>
                        </div>
                    ))}
                </section>
            </Container>
        </div>
    )
}