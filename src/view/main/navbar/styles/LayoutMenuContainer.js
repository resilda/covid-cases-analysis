import styled from 'styled-components'

export const LayoutMenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  background: rgba(239, 255, 250, 0.7);
  box-shadow: 0 0 1rem 0 rgba(239, 255, 250, 0.2);
  border: 1px solid rgba(68, 67, 67, 0.2);

  & .container-menu-wrapper {
    font-size: 15px;
    height: 100%;
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  & .container-menu-wrapper:before {
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(15px) contrast(45%) saturate(-1%) brightness(130%);
    content: '';
    height: 100%;
    position: absolute;
    width: 100%;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`

export const LayoutMenuIcon = styled.button`
  position: absolute;
  margin-top: 24px;
  left: 2rem;
  display: flex;
  flex-direction: column;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  color: white;

  &:focus {
    outline: none;
  }
`
