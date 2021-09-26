import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import dataActions from '../../../modules/data/dataActions'
import { NavbarContainer } from './styles/NavbarContainer'
import LayoutMenu from './LayoutMenu'
import SearchIcon from '@material-ui/icons/Search'

function Navbar({
  isGlobeFilterAvailable,
  getCountryByUser,
  setGetCountryByUser,
}) {
  const ref = useRef()
  const dispatch = useDispatch()

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
          <LayoutMenu />
        </div>
      </div>
    </NavbarContainer>
  )
}
export default Navbar
