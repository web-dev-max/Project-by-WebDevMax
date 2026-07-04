'use client'

export type LogoProps = {
  text?: string
}

export const Logo = ({ text = 'PrintCraft' }: LogoProps) => {
  return <div>{text}</div>
}

