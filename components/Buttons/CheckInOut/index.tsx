import * as S from "./style"

import Search from "../Search"

export default function MiddleButton() {
    return (
        <S.MiddleContainer>

            <S.MiddleButton>Any place</S.MiddleButton>
            <S.MiddleButton>Any week</S.MiddleButton>
            <S.MiddleButton>Guests?</S.MiddleButton>
            <Search />

        </S.MiddleContainer>
    )
}