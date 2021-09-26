import styled from 'styled-components'

export const FooterContainer = styled.div`
  background: #303030;
  margin-top: 100px;

  & .wrapper {
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: space-evenly;
  }

  & .footer-info {
    margin: 20px;
    display: flex;
    justify-content: space-between;
    align-items: space-between;
  }

  & .footer-icon {
    padding-right: 10px;
  }

  & .github {
    margin-bottom: 8px;
  }
`
