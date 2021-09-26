import React, { useState, useContext } from 'react'
import firebase from '../../config/firebase'
import { useHistory, Link } from 'react-router-dom'
import { AuthContext } from './AuthService'
import Button from '@material-ui/core/Button'
import FilledInput from '@material-ui/core/FilledInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  globeDescription: {
    textAlign: 'center',
  },
  globeTitle: {
    marginTop: '80px',
    marginBottom: '30px',
    color: '#000066',
    fontSize: '37px',
    fontFamily: 'Bebas Neue',
    fontWeight: 'bolder',
  },
  globeParagraph: {
    marginBottom: '60px',
  },
  loginWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  section: {
    height: '500px',
    width: '500px',
    backgroundColor: 'white',
    boxShadow:
      '0 4px 8px 0 rgba(170, 169, 169, 0.2), 0 6px 20px 0 rgba(131, 129, 129, 0.19)',
  },
  title: {
    color: '#000066',
    marginTop: '43px',
    fontSize: '28px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: '230px',
    height: '52px',
    fontSize: '16px',
    margin: '15px',
  },
  error: {
    color: 'red',
  },
  firstButton: {
    border: 0,
    background: 'linear-gradient(45deg, #003399 20%, #0000CC 80%)',
    borderRadius: 3,
    boxShadow: '0 1px 1px 1px #0000CC',
    color: 'white',
    width: '230px',
    height: '40px',
    fontSize: '14px',
    marginTop: '10px',
    marginBottom: '40px',
  },
  redirected: {
    textAlign: 'center',
  },
  secondButton: {
    border: 0,
    background: 'linear-gradient(45deg, #003399 20%, #0000CC 80%)',
    borderRadius: 3,
    boxShadow: '0 1px 1px 1px #0000CC',
    width: '120px',
    height: '31px',
    fontSize: '14px',
    margin: '25px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
})

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(null)

  const context = useContext(AuthContext)

  const history = useHistory()

  function handleShowPassword() {
    setShowPassword(!showPassword)
  }

  function handleMouseDownPassword(event) {
    event.preventDefault()
  }

  function handleSubmit(event) {
    event.preventDefault()
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        context.login(user.refreshToken, user)
        history.push('/main')
      })
      .catch((error) => {
        setError(error)
      })
  }

  const classes = useStyles()

  return (
    <div className={classes.loginWrapper}>
      <div className={classes.globeDescription}>
        <h2 className={classes.globeTitle}>Welcome to Zanda.k.a</h2>
        <p className={classes.globeParagraph}>
          The latest application to get informed in real-time about Covid-19
          cases, and sharing your experience regarding the pandemic.
        </p>
      </div>{' '}
      <section className={classes.section}>
        <h1 className={classes.title}>Login</h1>
        {error && <p className={classes.error}>{error.message}</p>}
        <form onSubmit={handleSubmit} className={classes.form}>
          <FilledInput
            id="email"
            label="Email"
            defaultValue="Email"
            value={email}
            placeholder="Email"
            type="text"
            required
            onChange={(event) => setEmail(event.target.value)}
            className={classes.input}
          />
          <FilledInput
            id="password"
            label="Password"
            defaultValue="Password"
            value={password}
            placeholder="Password"
            required
            onChange={(event) => setPassword(event.target.value)}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            className={classes.input}
          />
          <Button type="submit" className={classes.firstButton}>
            Login
          </Button>
        </form>
        <div className={classes.redirected}>
          Don't have an account? {''}
          <Button className={classes.secondButton}>
            <Link to="/" className={classes.link}>
              Register
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default LoginPage
