'use client'

import { Typography } from 'antd'
import { useEffect, useRef } from 'react'

import styles from './Features.module.scss'

const { Title, Paragraph } = Typography

export const Features = () => {
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
          Ключевые возможности
        </Title>

        <div className={styles.grid}>
          <div className={styles.item}>
            <div className={styles.icon} />
            <div className={styles.itemTitle}>Drag-and-drop</div>
            <Paragraph className={styles.itemText}>
              Собирайте макеты из компонентов без лишних настроек.
            </Paragraph>
          </div>

          <div className={styles.item}>
            <div className={styles.icon} />
            <div className={styles.itemTitle}>Предпросмотр</div>
            <Paragraph className={styles.itemText}>
              Видите результат сразу — никаких сюрпризов при экспорте.
            </Paragraph>
          </div>

          <div className={styles.item}>
            <div className={styles.icon} />
            <div className={styles.itemTitle}>Экспорт PDF</div>
            <Paragraph className={styles.itemText}>
              Готовые файлы для печати с корректными параметрами.
            </Paragraph>
          </div>

          <div className={styles.item}>
            <div className={styles.icon} />
            <div className={styles.itemTitle}>Шаблоны</div>
            <Paragraph className={styles.itemText}>
              Начните с готовых решений и адаптируйте под себя.
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  )
}

