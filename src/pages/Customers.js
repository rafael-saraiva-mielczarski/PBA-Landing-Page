import { Container, Rating } from "@mui/material";
import { useState } from "react";
import styles from "../styles/Customers.module.scss";
import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";
import customers from "../data/customers.json";
import Image from "next/image";

export default function Customers() {

    const [value] = useState(5);
    const [isHovering, setIsHovering] = useState(1)
    
    return (
        <div className={styles.customers} id="customers">
            <Container>
                <h1 className={styles.intro}>Check what our users have to say about our services</h1>
                <div className={styles.textContainer}>
                    <section className={styles.profileImg}>
                        <Image src={profile1} alt="customer 1" onMouseOver={() => setIsHovering(1)}/>
                        <Image src={profile2} alt="customer 2" onMouseOver={() => setIsHovering(2)}/>
                        <Image src={profile3} alt="customer 3" onMouseOver={() => setIsHovering(3)}/>
                    </section>
                    <section className={styles.textPopup}>
                        {isHovering && <div className={styles.text}>
                                            <h2>{customers[isHovering].name}</h2>
                                            <p>{customers[isHovering].testimony}</p>
                                            <p>Early user: {customers[isHovering].saverSince}</p>
                                            <p><Rating name="read-only" value={value} size="large" readOnly /></p>
                                        </div>}
                    </section>
                </div>
            </Container>
        </div>
    )
}