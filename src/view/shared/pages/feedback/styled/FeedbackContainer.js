import styled from 'styled-components'

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & .feedback-presetation {
    width: 70%;
    text-align: center;
    margin: 80px;
  }

  & .stars-feedback-wrapper {
    display: flex;
    flex-direction: row;
  }

  & .star-feedback {
    position: relative;

    display: inline-block;
    width: 0;
    height: 0;

    margin-left: 0.9em;
    margin-right: 0.9em;
    margin-bottom: 1.2em;

    border-right: 0.3em solid transparent;
    border-bottom: 0.7em solid #fc0;
    border-left: 0.3em solid transparent;

    font-size: 24px;

    &:before,
    &:after {
      content: '';

      display: block;
      width: 0;
      height: 0;

      position: absolute;
      top: 0.6em;
      left: -1em;

      border-right: 1em solid transparent;
      border-bottom: 0.7em solid #fc0;
      border-left: 1em solid transparent;

      transform: rotate(-35deg);
    }

    &:after {
      transform: rotate(35deg);
    }
  }

  & .text-field-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: space-between;
    margin-top: 150px;
  }

  & .elements {
    margin-right: 10px;
  }

  & .text-field {
    margin-top: 15px;
    margin-bottom: 20px;
    width: 400px;
    padding-left: 20px;
  }

  & .elements-feedback-wrapper {
    background: #303030;
    color: #99ffcc;
    font-size: 22px;
    width: 50%;
    height: 35px;
    border-radius: 5px;
    margin: 40px 50%;
    padding-top: 20px;
    padding-bottom: 50px;
    text-align: center;
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
`
