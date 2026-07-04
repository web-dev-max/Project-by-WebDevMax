'use client'

import { Typography } from 'antd'
import { Button } from '@/shared/ui/button'

import {
  ExperimentOutlined,
  NodeIndexOutlined,
  RocketOutlined,
} from '@ant-design/icons'

import { useEffect, useRef } from 'react'
import styles from './Hero.module.scss'

const { Title, Paragraph, Text } = Typography

type HeroProps = {
  onCta?: () => void
}

export const Hero = ({ onCta }: HeroProps) => {
  const rootRef = useRef<HTMLDivElement | null>(null)

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
      { threshold: 0.15 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={rootRef} className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.badges}>
              <Text className={styles.badge}>
                <NodeIndexOutlined className={styles.badgeIcon} />
                PDF для печати
              </Text>
              <Text className={styles.badge}>
                <ExperimentOutlined className={styles.badgeIcon} />
                CMYK/bleed в Pro
              </Text>
            </div>

            <Title level={1} className={styles.title}>
              PrintCraft — конструктор макетов для полиграфии
            </Title>
            <Paragraph className={styles.subtitle}>
              Делайте визитки, флаеры и сертификаты в браузере: drag-and-drop,
              предпросмотр в реальном времени и экспорт готовых файлов для печати.
            </Paragraph>

            <div className={styles.ctaRow}>
              <Button
                type="primary"
                size="large"
                className={styles.ctaPrimary}
                href="/editor"
                onClick={onCta}
              >
                Попробовать бесплатно
              </Button>
              <Button
                size="large"
                className={styles.ctaSecondary}
                href="/editor"
                icon={<RocketOutlined />}
              >
                Смотреть шаблоны
              </Button>
            </div>

            <div className={styles.perks}>
              <div className={styles.perk}>
                <span className={styles.perkDot} />
                3 макета бесплатно
              </div>
              <div className={styles.perk}>
                <span className={styles.perkDot} />
                Базовые шаблоны
              </div>
              <div className={styles.perk}>
                <span className={styles.perkDot} />
                Экспорт PDF
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.mockWrap}>
              <div className={styles.mockTop}>
                <div className={styles.mockDots}>
                  <span />
                  <span />
                  <span />
                </div>
                <Text className={styles.mockTitle}>Редактор PrintCraft</Text>
              </div>
              <div className={styles.mockBody}>
                <div className={styles.mockSidebar}>
                  <div className={styles.sideSection}>
                    <Text className={styles.sideLabel}>Шаблоны</Text>
                    <div className={styles.sideItem} />
                    <div className={styles.sideItem} />
                    <div className={styles.sideItem} />
                  </div>
                  <div className={styles.sideSection}>
                    <Text className={styles.sideLabel}>Элементы</Text>
                    <div className={styles.sideIconRow}>
                      <span className={styles.sideIcon} />
                      <span className={styles.sideIcon} />
                      <span className={styles.sideIcon} />
                    </div>
                    <div className={styles.sideIconRow}>
                      <span className={styles.sideIcon} />
                      <span className={styles.sideIcon} />
                      <span className={styles.sideIcon} />
                    </div>
                  </div>
                </div>

                <div className={styles.mockCanvas}>
                  <div className={styles.canvasHeader}>
                    <Text className={styles.canvasLabel}>Макет</Text>
                    <div className={styles.canvasControls}>
                      <span className={styles.controlPill} />
                      <span className={styles.controlPill} />
                    </div>
                  </div>
                  <div className={styles.canvasArea}>
                    <div className={styles.paper}>
                      <div className={styles.paperBleed} />
                      <div className={styles.paperGrid} />
                      <div className={styles.paperText} />
                      <div className={styles.paperLogo} />
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.mockBottom}>
                <Button className={styles.mockBtn} href="/editor">
                  Экспорт PDF
                </Button>
                <Button className={styles.mockBtnGhost} href="/editor">
                  Предпросмотр
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

