import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > .search {
        width: 100%;
        padding: 1rem;
        margin-bottom: 1rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1rem;
        outline: none;
    }
    & > .posts {
        @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
        }
        & > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            & > h2 {
                font-size: 1.5rem;
                font-weight: 700;
            }
            & > p {
                font-size: 1rem;
                margin-bottom: 1rem;
            }
            & > img {
                width: 100%;
                height: 200px;
                object-fit: cover;
                margin-bottom: 1rem;
            }
            & > a >button {
                padding: 0.5rem 1rem;
                border: none;
                border-radius: 5px;
                background-color: #000;
                color: #fff;
                font-size: 1rem;
                cursor: pointer;
                outline: none;
            }
        }
    }
`;
