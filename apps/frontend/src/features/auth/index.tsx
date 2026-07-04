import { useState } from 'react'
import { Button, Form, Input, Typography } from 'antd'
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import { IAuthPageProps, ISubmitPayload } from '@/shared/lib/auth/interface'
import { useAuthMode } from '@/entities/auth/useAuthMode'

import './styles.scss'

const { Title, Text } = Typography

export const AuthPage = ({ mode = 'login' }: IAuthPageProps) => {
  const [loading, setLoading] = useState(false)

  const ui = useAuthMode(mode)

  const onFinish = async (values: any) => {
    setLoading(true)
    try {
      const payload: ISubmitPayload = {
        email: values.email,
        password: values.password,
        ...(mode === 'register' ? { name: values.name } : {}),
      }

      // TODO: заменить на API
      await new Promise((r) => setTimeout(r, 600))
      console.log('auth payload', payload)
    } finally {
      setLoading(false)
    }
  }

  const onSwitch = () => {
    const target = ui.switchMode
    const href = target === 'login' ? '/login' : '/register'
    window.location.href = href
  }

  return (
    <div className="authPage">
      <div className="authPage__wrap">
        <div className="authPage__card">
          <a href='/'>Назад</a>
          <div className="authPage__header">
            <div>
              <Title level={3} className="authPage__title">
                {ui.title}
              </Title>
              <Text className="authPage__subtitle">{ui.subtitle}</Text>
            </div>

            <div className="authPage__badge">PrintCraft</div>
          </div>

          <Form
            className="authPage__form"
            layout="vertical"
            onFinish={onFinish}
            requiredMark={false}
          >
            {mode === 'register' && (
              <Form.Item
                name="name"
                label={ui.nameLabel}
                rules={[{ required: true, message: 'Введите имя' }]}
              >
                <Input placeholder="Например, Иван" prefix={<UserOutlined />} />
              </Form.Item>
            )}

            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Введите email' }]}
            >
              <Input placeholder="name@email.com" prefix={<MailOutlined />} />
            </Form.Item>

            <Form.Item
              name="password"
              label="Пароль"
              rules={[{ required: true, message: 'Введите пароль' }]}
            >
              <Input.Password placeholder="••••••••" prefix={<LockOutlined />} />
            </Form.Item>

            <div className="authPage__actions">
              <Button type="primary" htmlType="submit" loading={loading} size="large">
                {ui.submit}
              </Button>

              <div className="authPage__note">{ui.note}</div>
            </div>
          </Form>

          <div className="authPage__switch">
            <span>{ui.switchText}</span>
            <a className="authPage__switchLink" onClick={onSwitch}>
              {mode === 'register' ? 'Войти' : 'Регистрация'}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

