import * as S from './style';

import LogoImg from "../../public/logo.png";

import { GrLanguage } from 'react-icons/gr';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaUserCircle } from 'react-icons/fa';

import Search from '../Search';

export default function Menu() {
    return (
        <S.Container>

            <S.LeftContainer>
                <S.LogoLink href={"/#"}>
                    <S.Logo src={LogoImg.src}/>
                </S.LogoLink>
            </S.LeftContainer>

            <S.MiddleContainer>
                <S.MiddleButton>Any place</S.MiddleButton>
                <S.MiddleButton>Any week</S.MiddleButton>
                <S.MiddleButton>Guests?</S.MiddleButton>
                <Search />
            </S.MiddleContainer>

            <S.RightContainer>
                <S.Language><GrLanguage size={20} /></S.Language>
                <S.Login>
                    <RxHamburgerMenu size={20}/>
                    <FaUserCircle size={30} color='grey'/>
                </S.Login>
            </S.RightContainer>

        </S.Container>
    )
}