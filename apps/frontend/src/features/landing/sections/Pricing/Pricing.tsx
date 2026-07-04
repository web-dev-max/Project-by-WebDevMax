'use client'

import { Typography } from 'antd'
import { useEffect, useRef } from 'react'

import styles from './Pricing.module.scss'

const { Title, Paragraph } = Typography

export const Pricing = () => {
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
    <section ref={rootRef} className={styles.section}>
      <div className={styles.container}>
        <Title level={2} className={styles.title}>
          Тарифы
        </Title>
        <Paragraph className={styles.lead}>
          Начните бесплатно, затем выберите подходящий тариф.
        </Paragraph>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.planName}>Бесплатно</div>
            <div className={styles.price}>0 ₽</div>
            <ul className={styles.list}>
              <li>3 макета бесплатно</li>
              <li>Базовые шаблоны</li>
              <li>Экспорт PDF</li>
            </ul>
          </div>

          <div className={styles.cardFeatured}>
            <div className={styles.planName}>Pro</div>
            <div className={styles.price}>990 ₽</div>
            <ul className={styles.list}>
              <li>Неограниченное число макетов</li>
              <li>CMYK/bleed в Pro</li>
              <li>Приоритетная поддержка</li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.planName}>Команда</div>
            <div className={styles.price}>1990 ₽</div>
            <ul className={styles.list}>
              <li>Работа в команде</li>
              <li>Общие шаблоны</li>
              <li>Экспорт по ролям</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

