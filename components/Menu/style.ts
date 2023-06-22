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

export const RightContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
`;
