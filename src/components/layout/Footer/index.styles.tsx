import styled from "styled-components";

export const FooterContainer = styled.footer`
    padding: 1rem;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    z-index: 100;
    position: sticky;
    & > h2 {
        font-size: 1.5rem;
        font-weight: 700;
    }
`;
