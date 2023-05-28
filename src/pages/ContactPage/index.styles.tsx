import styled from "styled-components";

export const ContactForm = styled.form`
    width: 90%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div {
        width: 100%;
        margin-bottom: 1rem;
        & > label {
            display: block;
            margin-bottom: 0.5rem;
        }
        & > input {
            width: 100%;
            padding: 1rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 1rem;
            outline: none;
        }
    }
    & > input[type="submit"] {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        background-color: #000;
        color: #fff;
        font-size: 1rem;
        cursor: pointer;
        outline: none;
    }
`;