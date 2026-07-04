'use client'

import { Button as AntButton, type ButtonProps } from 'antd'

export type UiButtonProps = ButtonProps

export const Button = (props: UiButtonProps) => {
  return <AntButton {...props} />
}

