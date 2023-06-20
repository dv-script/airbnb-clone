import styled from "styled-components";
import Link from "next/link";

export const Container = styled.nav`
    width: 100vw;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 1px solid #ededed;
    position: fixed;
`;

export const LeftContainer = styled.div`
    height: 100%;
`;

export const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    cursor: pointer;
`;

export const Logo = styled.img`
    height: 100%;
`;


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

export const RightContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
`;

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
`

export const Login = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0.5em 1em;
    border-radius: 30px;
    background: none;
    border: 1px solid #ededed;
    transition: all 0.1s;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }
`
