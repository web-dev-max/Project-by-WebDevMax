'use client'

import { Typography } from 'antd'
import { useEffect, useRef } from 'react'
import styles from './Footer.module.scss'

import { Logo } from '@/shared/ui/logo'

const { Text } = Typography


export const Footer = () => {
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = rootRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add(styles['fade-in--visible'])
            observer.disconnect()
          }
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={rootRef} className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.brand}>
          <div className={styles.logo}>
              <Logo />
            </div>

            <Text className={styles.tagline}>Конструктор для печати полиграфии</Text>
          </div>


          <div className={styles.links}>
            <a className={styles.link} href="/editor">
              Редактор
            </a>
            <a className={styles.link} href="/">
              Шаблоны
            </a>
            <a className={styles.link} href="/">
              Поддержка
            </a>
          </div>
        </div>

        <div className={styles.copy}>© {new Date().getFullYear()} PrintCraft. Все права защищены.</div>
      </div>
    </footer>
  )
}

