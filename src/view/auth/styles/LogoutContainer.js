import styled from 'styled-components'

export const LogoutContainer = styled.div`
  & .popup-box {
    position: fixed;
    background: #00000050;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
  }

  & .box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: 43%;
    margin: 0 auto;
    height: 26%;
    max-height: 70vh;
    margin-top: calc(120vh - 85vh - 10px);
    background: #e8e8e8;
    box-shadow: '0 2px 3px 2px #8ABAAC';
    border-radius: 4px;
    padding: 20px;
    border: 1px solid #999;
    overflow: auto;
    padding-top: 23px;
  }
`
