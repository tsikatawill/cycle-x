import {FC, SyntheticEvent, useState} from 'react'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth'
import {HiOutlineLockClosed, HiOutlineMail} from 'react-icons/hi'
import {Link, useNavigate} from 'react-router-dom'
import AuthForm from '../../components/AuthForm'
import BgVideo from '../../images/bg-video.mp4'
import {FaGoogle} from 'react-icons/fa'
import {auth} from '../../firebase'

const Signup: FC = () => {
  const provider = new GoogleAuthProvider()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleGoogleSignUp = () => {
    signInWithPopup(auth, provider).then(() => {
      navigate('/')
      setEmail('')
      setPassword('')
    })
  }

  //   const handleErrorChecks=()=>{
  //     return
  //   }

  const registerUser = (e: SyntheticEvent) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => navigate('/login'))
      .catch((error) => console.log(error))
  }

  return (
    <div className="sm:grid grid-cols-2 items-center bg-white">
      <div className="left bg-red-200 h-screen w-full relative">
        <video
          src={BgVideo}
          className="h-full object-cover w-full"
          autoPlay
          loop
        ></video>

        <div className="text-content absolute top-0 w-full text-white bg-black h-full bg-opacity-70 ">
          <div className="container pt-10 text-right">
            <h1 className="logo font-bold text-4xl mb-5">Cycle-X</h1>
            <p className="max-w-sm ml-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit cum porro eligendi temporibus! Maiores et laborum
              sapiente cum odio magni modi nulla fugit at, hic, optio ratione,
              voluptatum recusandae quas.
            </p>
          </div>
        </div>
      </div>

      <div className="container grid place-content-center h-screen sm:h-fit py-16 sm:py-0">
        <AuthForm title="Create a free Account" onSubmit={registerUser}>
          <div className="p-5 space-y-5">
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

            <button>SUBMIT</button>

            <p className="alt-login" onClick={handleGoogleSignUp}>
              Register with Google <FaGoogle />
            </p>
          </div>

          <div className="text-center">
            <div>
              <p>Already have an account? </p>
              <Link to="/login" className="text-purple-600">
                Sign in
              </Link>
            </div>
          </div>
        </AuthForm>
      </div>
    </div>
  )
}

export default Signup
