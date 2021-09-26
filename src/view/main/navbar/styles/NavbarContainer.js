import styled from 'styled-components'

export const NavbarContainer = styled.div`
  background: #303030;

  & .linked-header-title {
    text-decoration: none;
    color: white;
  }

  & .wrapper {
    /* color: #ccffcc; */
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: space-between;
  }

  & .title {
    margin-left: 70px;
  }

  & .filter-wrapper {
    margin-top: 28px;
    margin-right: 25px;
    display: flex;
    flex-direction: row;
  }

  & .search-placeholder {
    color: black;
  }

  & .search-button {
    color: white;
    cursor: pointer;
    padding-bottom: 10px;
    margin-left: 3px;
  }

  & .search-logout-wrapper {
    display: flex;
    justify-content: flex-end;
  }
`
