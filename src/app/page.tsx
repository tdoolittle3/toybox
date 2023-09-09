import Image from 'next/image'
import styles from './page.module.css'
import { ThemeProvider } from '@mui/material'
import Header from '../../pages/components/Header'
import Main from '../../pages/components/Main'
import Footer from '../../pages/components/Footer'

export default function Home() {
  return (
    <main className="gradient-background">

<div className="App gradient-background" >

  <Header />

  <Main />

</div>
<Footer />

    </main>
  )
}
