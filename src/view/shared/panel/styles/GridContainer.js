import styled from 'styled-components'

export const GridContainer = styled.div`
  & .container {
    margin-left: 10%;
    margin-right: 10%;
  }

  @media screen and (min-width: 1024px) {
    & .card-style {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    & .card-style-filtered {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: space-between;
    }
  }

  @media screen and (max-width: 1025px) {
    & .card-style {
      display: flex;
      flex-direction: row;
      position: relative;
      flex-flow: revert;
      overflow: auto;
      white-space: nowrap;
      justify-content: center;
      align-items: center;
    }

    & .card-style-filtered {
      display: flex;
      flex-direction: row;
      position: relative;
      flex-flow: revert;
      overflow: auto;
      white-space: nowrap;
      justify-content: flex-start;
      align-items: center;
    }
  }
`
