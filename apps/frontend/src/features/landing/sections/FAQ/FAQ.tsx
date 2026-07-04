'use client'

import { Collapse, Typography } from 'antd'
import { useEffect, useRef } from 'react'

import styles from './FAQ.module.scss'

const { Title } = Typography

export const FAQ = () => {
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
          FAQ
        </Title>

        <Collapse className={styles.collapse} accordion>
          <Collapse.Panel header="Что я могу собрать в редакторе?" key="1">
            В редакторе вы можете собирать типовые макеты (визитки, флаеры,
            сертификаты) и настраивать параметры под печать.
          </Collapse.Panel>
          <Collapse.Panel header="Где скачать готовый PDF?" key="2">
            После экспорта вы получите готовый PDF-файл прямо в браузере.
          </Collapse.Panel>
          <Collapse.Panel header="Поддерживаются ли bleed/CMYK?" key="3">
            Да, в тарифе Pro доступны CMYK/bleed параметры.
          </Collapse.Panel>
        </Collapse>
      </div>
    </section>
  )
}

