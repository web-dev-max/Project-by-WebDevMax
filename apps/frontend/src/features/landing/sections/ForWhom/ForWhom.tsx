'use client'

import { Typography } from 'antd'
import { useEffect, useRef } from 'react'

import styles from './ForWhom.module.scss'

const { Title, Paragraph } = Typography

export const ForWhom = () => {
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
          Для кого
        </Title>

        <Paragraph className={styles.lead}>
          PrintCraft помогает быстро готовить печатные материалы — от
          небольших проектов до регулярных тиражей.
        </Paragraph>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Типографии</div>
            <div className={styles.cardText}>
              Быстрый сбор заказов и экспорт файлов без лишних согласований.
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>Маркетинг</div>
            <div className={styles.cardText}>
              Плакаты, флаеры, визитки и шаблоны под кампании.
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>Фрилансеры</div>
            <div className={styles.cardText}>
              Меньше времени на верстку — больше времени на клиентов.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

