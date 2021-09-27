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
  }

  & .comments-text {
    color: #cc0000;
    margin-left: 15% !important;
    margin-bottom: 5%;
    font-size: 26px;
  }

  & .comments-paragraph {
    font-size: 16px;
    text-align: left;
    width: 50%;
    margin-bottom: 5px;
    margin-left: 18% !important;
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

  & .previous-comments-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  & .previous-comment {
    background: #303030;
    color: white;
    font-size: 15px;
    width: 50%;
    height: 35px;
    border-radius: 5px;
    margin: 20px 40px;
    padding: 5px 5px;
    text-align: left;
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

  & .elements-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #303030;
    color: white;
    font-size: 15px;
    width: 50%;
    height: 35px;
    border-radius: 5px;
    margin: 20px 40px;
    padding: 5px 5px;
    text-align: left;
  }

  & .button {
    background-color: #0000cc;
    border: none;
    color: white;
    border-radius: 3px;
    width: 80px;
    height: 28px;
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
  }

  & .delete-icon {
    margin-top: 10px;
    color: #ff3300;
    cursor: pointer;
  }
`
