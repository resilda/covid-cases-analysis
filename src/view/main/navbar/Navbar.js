import React, { useEffect, useRef, useContext } from 'react'
import firebase from '../../../config/firebase'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthService'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import dataActions from '../../../modules/data/dataActions'
import { NavbarContainer } from './styles/NavbarContainer'
import SearchIcon from '@material-ui/icons/Search'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

function Navbar({
  isGlobeFilterAvailable,
  getCountryByUser,
  setGetCountryByUser,
}) {
  const ref = useRef()
  const dispatch = useDispatch()

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

  const submitFilterSearch = () => {
    dispatch(dataActions.fetchAllStatisticsData({ country: getCountryByUser }))
  }

  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
    }
    document.addEventListener('mousedown', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref])

  return (
    <NavbarContainer ref={ref}>
      <div className="wrapper">
        <h2 className="title">
          <Link to="/main" className="linked-header-title">
            zanda.k.a
          </Link>
        </h2>
        <div
          className={`${isGlobeFilterAvailable ? `search-logout-wrapper` : ``}`}
        >
          {isGlobeFilterAvailable && (
            <div className="filter-wrapper">
              <label>
                <input
                  value={getCountryByUser}
                  onChange={(event) => setGetCountryByUser(event.target.value)}
                  placeholder={'Search country'}
                  className="search-placeholder"
                />
              </label>
              <div className="search-button">
                <SearchIcon
                  className="search-button"
                  onClick={submitFilterSearch}
                />
              </div>
            </div>
          )}
          <ExitToAppIcon
            onClick={handleLogOut}
            style={{
              marginTop: '24px',
              marginRight: '30px',
              cursor: 'pointer',
            }}
          />
        </div>
      </div>
    </NavbarContainer>
  )
}
export default Navbar
