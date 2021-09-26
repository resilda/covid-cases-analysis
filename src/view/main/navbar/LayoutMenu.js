import React, { useState, useContext } from 'react'
import firebase from '../../../config/firebase'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthService'
import {
  LayoutMenuContainer,
  LayoutMenuIcon,
} from './styles/LayoutMenuContainer'
import MenuIcon from '@material-ui/icons/Menu'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

const MenuComponents = ({ open }) => {
  return (
    <LayoutMenuContainer open={open}>
      <div className="container-menu-wrapper">
        <a href="/">
          <span role="img" aria-label="about us">
            💁🏻‍♂️
          </span>
          About us
        </a>
        <a href="/">
          <span role="img" aria-label="price">
            💸
          </span>
          Pricing
        </a>
        <button type="button" className="icon">
          {' '}
          Log out
        </button>
      </div>
    </LayoutMenuContainer>
  )
}

function LayoutMenu() {
  const [open, setOpen] = useState(false)

  const history = useHistory()
  const context = useContext(AuthContext)

  function handleLogOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        context.logout()
        history.push('/login')
      })
  }

  return (
    <div>
      <LayoutMenuIcon>
        <MenuIcon onClick={() => setOpen(!open)} />
      </LayoutMenuIcon>
      <ExitToAppIcon
        onClick={handleLogOut}
        style={{
          marginTop: '24px',
          marginRight: '30px',
          cursor: 'pointer',
        }}
      />
      <MenuComponents open={open} setOpen={setOpen} />
    </div>
  )
}

export default LayoutMenu
