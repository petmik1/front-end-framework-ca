import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  & > h2 {
    font-size: 1.5rem;
    font-weight: 700;
  }
  & > nav {
    & > ul {
      display: flex;
      list-style: none;
      & > li {
        margin-left: 1rem;

        & > a {
            text-transform: uppercase;
          text-decoration: none;
          color: #000;
          font-weight: 700;
          font-size: 1.2rem;
          &:hover {
            color: #000;
          }
        }
      }
    }
  }
`
