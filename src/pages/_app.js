import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';
import '../styles/globals.css';
import { Arvo } from 'next/font/google';
import About from './About';
import Customers from './Customers';
import Differentials from './Differentials';
import Plans from './Plans';

const arvo = Arvo({
    weight: '400',
    subsets: ['latin']}
    )

export default function App({ Component, pageProps }) {
  return (
    <main className={arvo.className}>
        <Header />
        <About />
        <Differentials />
        <Customers />
        <Plans />
        <Footer />
        <Component {...pageProps} />
    </main>
  )
}
