import styled from 'styled-components'

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 100px;
  margin-top: 40px;
  h2 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  & .comments-page-wrapper {
    display: flex;
    flex-direction: row;
  }

  & .comments-description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 40px;
  }

  & .comments-text {
    color: #cc0000;
  }

  & .comments-paragraph {
    text-align: left;
    width: 30%;
    margin-bottom: 100px;
  }

  & .comments-wrapper {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
    width: 1400px;
    height: 630px;

    box-shadow: 0 4px 8px 0 rgba(170, 169, 169, 0.2),
      0 6px 20px 0 rgba(131, 129, 129, 0.19);
  }

  & .text-field-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: space-between;
  }

  & .elements {
    margin-right: 10px;
  }

  & .text-field {
    margin-top: 15px;
    margin-bottom: 20px;
    width: 100%;
    padding-left: 20px;
  }

  & .post-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: space-between;
  }

  & .elements-wrapper {
    display: flex;
    flex-direction: row;
  }

  .body {
    color: #492b66;
    margin-left: 10px;
  }

  & .button {
    background-color: #492b66;
    color: white;
    margin-left: 20px;
    width: 80px;
    height: 28px;
    margin-right: 20px;
  }

  & .delete-button {
    background-color: #492b66;
    color: white;
    margin: 20px;
    margin-left: 20px;
    width: 55px;
    height: 23px;
    font-size: 11px;
  }
`
