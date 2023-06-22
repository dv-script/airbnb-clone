import * as S from './style';

import LogoImg from "../../public/logo.png";

import MiddleButton from '../Buttons/CheckInOut';
import ChangeLanguage from '../Buttons/ChangeLanguage';
import Profile from '../Buttons/Profile';

export default function Menu() {

    return (
        <S.Container>

            <S.LeftContainer>
                <S.LogoLink href={"/#"}>
                    <S.Logo src={LogoImg.src}/>
                </S.LogoLink>
            </S.LeftContainer>

            <MiddleButton />

            <S.RightContainer>
                    <ChangeLanguage size={20}/>
                    <Profile />
            </S.RightContainer>

        </S.Container>
    )
}