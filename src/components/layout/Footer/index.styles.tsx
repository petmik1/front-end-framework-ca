import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    bottom: 0;
    z-index: 100;
    & > h2 {
        font-size: 1.5rem;
        font-weight: 700;
    }
`;
