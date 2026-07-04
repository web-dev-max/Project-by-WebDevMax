export type AuthMode = 'login' | 'register';

export interface IAuthPageProps {
  mode?: AuthMode;
}

export interface ISubmitPayload  {
  email: string;
  password: string;
  name?: string;
}

export interface IAuthModeUI {
  title: string;
  subtitle: string;
  nameLabel: string;
  submit: string;
  switchText: string;
  switchMode: AuthMode;
  note: string;
}