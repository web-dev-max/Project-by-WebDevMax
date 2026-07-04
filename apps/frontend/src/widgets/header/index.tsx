import { Button } from 'antd'

import { Logo } from '@/shared/ui/logo'

import './style.scss'


export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />

        <div className="header__auth">
          <Button className="header__authBtn" type="default">
            <a className="header__authLink" href="/login">
              Войти
            </a>
          </Button>

          <Button className="header__authBtn" type="primary">
            <a className="header__authLink" href="/register">
              Регистрация
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}

