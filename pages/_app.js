import Header from '@/components/Header';
import '@/styles/globals.css';
import { Arvo } from 'next/font/google';
import About from './About';
import Differentials from './Differentials';

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
        <Component {...pageProps} />
    </main>
  )
}
