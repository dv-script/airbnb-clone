import styled from "styled-components";

export const MiddleContainer = styled.div`
    padding: 0.3em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.35);
    transition: all 0.2s;

    &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }
`;

export const MiddleButton = styled.button`
    width: max-content;
    height: 100%;
    background: none;
    border: none;
    font-weight: 700;
    padding: 0.2em 1.2em;
    border-right: 1px solid #efefef;
    cursor: pointer;

    &:nth-child(3) {
        border-right: none;
        color: grey;
        font-weight: 500;
    }
`