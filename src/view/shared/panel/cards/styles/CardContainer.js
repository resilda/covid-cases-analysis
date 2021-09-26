import styled from 'styled-components'

export const CardWrapper = styled.div`
  margin: 20px 40px;

  & .card-component:hover {
    box-shadow: 0 3px 3px 0 #ff9900, 0 3px 3px 0 #ff9900;
    transition: all 200ms !important;
    transform: translate(-2px, -4px);
    cursor: pointer;
  }

  @media screen and (min-width: 1750px) {
    margin: 20px 60px;
  }
`

export const CardContainer = styled.div`
  & .card-wrapper {
    width: 265px;
    height: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #303030;
    color: white;
    box-shadow: 0 4px 8px 0 rgba(170, 169, 169, 0.2),
      0 6px 20px 0 rgba(131, 129, 129, 0.19);
  }

  & .card-title-modified {
    padding-top: 5px;
  }

  & .card-description {
    text-align: center;
    padding: 0px 15px;
    padding-bottom: 5px;
  }

  & .card-link {
    text-decoration: none;
  }
`
