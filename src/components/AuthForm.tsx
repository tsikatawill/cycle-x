import '../styles/AuthForm.css'
import {FC, ReactElement, SyntheticEvent} from 'react'

interface Props {
  children: ReactElement | ReactElement[]
  title: string
  onSubmit: (e: SyntheticEvent) => void
}

const AuthForm: FC<Props> = ({children, title, onSubmit}) => {
  return (
    <form className="auth-form" onSubmit={onSubmit}>
      <legend>
        <p>Cycle-X</p>
        <span>{title}</span>
      </legend>

      {children}
    </form>
  )
}

export default AuthForm
