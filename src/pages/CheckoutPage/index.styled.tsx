import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  & > button {
    margin: 0 auto;
    width: 75%;
    padding: 1rem;
    border: none;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    outline: none;
    }
    

  & > table {
    width: 80%;
    margin: 0 auto;
    border-collapse: collapse;
    margin-bottom: 1rem;
    & > tbody {
        & > tr {
            & > td {
                padding: 1rem;
                border: 1px solid #ccc;
                text-align: center;
            }
    & > thead {
        & > tr {
            & > th {
                text-align: center;
            }
        }
    }
  }
`
