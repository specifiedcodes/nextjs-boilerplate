import React, { FC } from 'react'

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const Form: FC<FormProps> = ({ children, ...props }) => {
  return (
    <form className="space-y-4" {...props}>
      {children}
    </form>
  )
}

export default Form