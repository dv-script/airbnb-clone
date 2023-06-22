import { useState } from 'react';
import { GrLanguage } from 'react-icons/gr';
import { VscClose } from 'react-icons/vsc';
import Modal from 'react-modal';

import * as S from './style';

export default function ChangeLanguage({...props}) {

    Modal.setAppElement('#__next');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const openModal = () => {
        setModalIsOpen(true);
    }

    return (
        <>        
            <S.Language onClick={openModal}>
                <GrLanguage {...props} />
            </S.Language>

            <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        },
                        content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: '#fff',
                            borderRadius: '8px',
                            width: '1000px',
                            height: '700px',
                            display: 'flex',
                            flexDirection: 'column',
                        }
                    }}
                >
                    <S.ModalMenu>
                        <S.ModalClose onClick={closeModal}>
                            <VscClose size={20}/>
                        </S.ModalClose>

                        <S.ModalTopic>Language and Region</S.ModalTopic>
                        <S.ModalTopic>Currency</S.ModalTopic>
                    </S.ModalMenu>

                    <S.ModalTitle>Choose your language</S.ModalTitle>

                    <S.ModalContent>
                        <S.ModalOption onClick={closeModal}>
                            <S.ModalOptionLanguage>
                                Português
                            </S.ModalOptionLanguage>
                            <S.ModalOptionRegion>
                                Brasil
                            </S.ModalOptionRegion>
                        </S.ModalOption>

                        <S.ModalOption onClick={closeModal}>
                            <S.ModalOptionLanguage>
                                English
                            </S.ModalOptionLanguage>
                            <S.ModalOptionRegion>
                                United States
                            </S.ModalOptionRegion>
                        </S.ModalOption>
                    </S.ModalContent>
                   
                </Modal>

        </>
        
    )
}