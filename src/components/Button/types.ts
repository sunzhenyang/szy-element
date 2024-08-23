export type ButtonType = 'primary' | 'danger' | 'info' | 'success' | 'warning' | 'default'
export type ButtonSize = 'large' | 'default' | 'small'
export type NativeType = 'submit' | 'button' | 'reset'

export interface ButtonInstance {
  ref: HTMLButtonElement
}

export interface ButtonPros {
  type?: ButtonType // 按钮类型
  size?: ButtonSize // 按钮大小
  plain?: boolean // 是否为朴素按钮
  round?: boolean // 是否为圆角按钮
  circle?: boolean // 是否为圆形按钮
  disabled?: boolean // 是否禁用状态
  autofocus?: boolean // 是否自动获取焦点
  nativeType?: NativeType // 原生 type 属性
}
