import styled from "styled-components";

export const Language = styled.button`
    width: 50px;
    height: 50px;
    background: none;
    border: none;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background-color: #F6F6F6;
        border-radius: 50%;
    }
`;

export const ModalMenu = styled.nav`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 0.3em 0;
    gap: 0.5em;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #ededed;
    margin-bottom: 2em;
`;

export const ModalClose = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    border: none;
    background: none;
    outline: none;
    border-radius: 50%;
    padding: 0.5em;
    transition: all 0.1s;
    cursor: pointer;

    &:hover {
        background: #F6F6F6;
    }
`;

export const ModalTopic = styled.button`
    font-size: 12px;
    font-weight: 600;
    border: none;
    background: none;
    padding: 0.7em 1em;
    border-radius: 12px;
    transition: all 0.1s;
    cursor: pointer;

    &:hover {
        background: #F6F6F6;
    }
`;

export const ModalTitle = styled.h1`
    text-align: left;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 0.5em;
`;

export const ModalContent = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

export const ModalOption = styled.button`
    padding: 1em;
    border-radius: 10px;
    background: none;
    border: none;
    outline: none;
    transition: all 0.1s;
    cursor: pointer;

    &:hover {
        background: #F6F6F6;
    }

    &:focus {
        border: 1px solid #000;
    }
`;

export const ModalOptionLanguage = styled.h2`
    text-align: left;
    font-size: 14px;
    font-weight: 600;
`;

export const ModalOptionRegion = styled.p`
    text-align: left;
    font-size: 12px;
    font-weight: 400;
`;

