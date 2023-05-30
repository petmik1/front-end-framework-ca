import styled from 'styled-components'

export const ProductPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20%;
    margin: 0 auto;
  }
  background-color: #f5f5f5;
  & > div > button {
    display: flex;
    margin: 0 auto;
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      background-color: #333;
    }
  }
  & > img {
    width: 100%;
    max-width: 500px;
    height: auto;
    margin: 20px 0;
  }
  & > div {
    padding-left: 20px;
    width: 100%;
    max-width: 500px;
    margin: 20px 0;
    & > h3 {
      font-size: 1.5rem;
      font-weight: 700;
    }

    & > p {
      font-size: 1rem;
      font-weight: 700;
    }
    & > h1 {
      font-size: 2rem;
      font-weight: 700;
    }
  }
`
