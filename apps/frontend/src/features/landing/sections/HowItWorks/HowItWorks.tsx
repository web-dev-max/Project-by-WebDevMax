'use client'

import { Typography } from 'antd'
import { useEffect, useRef } from 'react'

import styles from './HowItWorks.module.scss'

const { Title, Paragraph } = Typography

export const HowItWorks = () => {
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
          Как это работает
        </Title>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.step}>1</div>
            <div className={styles.cardTitle}>Соберите макет</div>
            <Paragraph className={styles.cardText}>
              Выбирайте шаблон, добавляйте элементы и настраивайте поля.
              Интерфейс подсказывает и помогает держать всё в рамках.
            </Paragraph>
          </div>

          <div className={styles.card}>
            <div className={styles.step}>2</div>
            <div className={styles.cardTitle}>Настройте параметры печати</div>
            <Paragraph className={styles.cardText}>
              CMYK/bleed-параметры, отступы, размеры и предпросмотр в реальном
              времени.
            </Paragraph>
          </div>

          <div className={styles.card}>
            <div className={styles.step}>3</div>
            <div className={styles.cardTitle}>Экспортируйте PDF</div>
            <Paragraph className={styles.cardText}>
              Скачайте готовый файл для типографии — в один клик.
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  )
}

