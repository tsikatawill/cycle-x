import {FC, SyntheticEvent, useState} from 'react'
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth'
import {HiOutlineLockClosed, HiOutlineMail} from 'react-icons/hi'
import {Link, useNavigate} from 'react-router-dom'
import AuthForm from '../../components/AuthForm'
import {auth} from '../../firebase'

export const Login: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const provider = new GoogleAuthProvider()
  const navigate = useNavigate()

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/')
        setEmail('')
        setPassword('')
      })
      .catch((error) => console.log(error))
  }

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        navigate('/')
      })
      .catch((error) => console.log(error))
  }

  return (
    <div className="grid place-content-center min-h-screen container py-10">
      <AuthForm
        title="Welcome back, login to your account!"
        onSubmit={handleSubmit}
      >
        <div className="p-5 space-y-3">
          <div className="input-group">
            <div className="inner">
              <label htmlFor="email">
                <HiOutlineMail size={20} />
              </label>
              <input
                required
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder="email@email.com"
              />
            </div>
            <span className="message">Some error message</span>
          </div>

          <div className="input-group">
            <div className="inner">
              <label htmlFor="password">
                <HiOutlineLockClosed size={20} />
              </label>
              <input
                required
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <span className="message">Some error message</span>
          </div>

          <button>LOGIN</button>

          <p className="alt-login" onClick={handleGoogleSignIn}>
            Login with google
          </p>
        </div>

        <div className="text-center">
          <p>Don&lsquo;t have an account? </p>
          <Link to="/sign-up" className="text-purple-600">
            Sign up
          </Link>
        </div>
      </AuthForm>
    </div>
  )
}
