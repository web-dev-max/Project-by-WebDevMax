import { AuthMode, IAuthModeUI } from "@/shared/lib/auth/interface"
import { useMemo } from "react"

export const useAuthMode = (mode: AuthMode): IAuthModeUI => {
    return useMemo((): IAuthModeUI => {
        if (mode === 'register') {
            return {
                title: 'Регистрация',
                subtitle: 'Создайте аккаунт за минуту',
                nameLabel: 'Имя',
                submit: 'Создать аккаунт',
                switchText: 'Уже есть аккаунт?',
                switchMode: 'login',
                note: 'Данные нигде не сохраняются — это UI-страница для старта.',
            }
        }

        return {
            title: 'Вход',
            subtitle: 'Добро пожаловать обратно',
            nameLabel: '',
            submit: 'Войти',
            switchText: 'Нет аккаунта?',
            switchMode: 'register',
            note: 'Данные нигде не сохраняются — это UI-страница для старта.',
        }
    }, [mode])
}