'use client'

import { Hero } from './sections/Hero/Hero'
import { HowItWorks } from './sections/HowItWorks/HowItWorks'
import { Features } from './sections/Features/Features'
import { ForWhom } from './sections/ForWhom/ForWhom'
import { Pricing } from './sections/Pricing/Pricing'
import { FAQ } from './sections/FAQ/FAQ'
import { Footer } from './sections/Footer/Footer'
import { Header } from '@/widgets/header'

import styles from './LandingPage.module.scss'

export const LandingPage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <ForWhom />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}

