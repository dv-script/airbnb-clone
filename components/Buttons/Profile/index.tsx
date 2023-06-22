import * as S from './style';

import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";

export default function ProfileButton() {
    return (
        <S.Login>
            <RxHamburgerMenu size={20}/>
            <FaUserCircle size={30} color='grey'/>
        </S.Login>
    )
}