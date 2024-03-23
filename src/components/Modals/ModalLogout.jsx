import { useContext } from "react";
import { UserContext } from "../../userContext";
import { ModalWrapper, Modal, Illustration, Msg } from "./modal.style";
import { ButtonArea } from "../AvatarSelection/avatarSelection.style";
import iconLogout from "../../assets/images/icon-logout.svg";

export default function ModalLogout({ closeModal }) {
  const { logOut } = useContext(UserContext);

  return (
    <ModalWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Modal style={{ maxWidth: "500px", padding: "40px 90px" }}>
        <Illustration src={iconLogout} />
        <Msg>Tem certeza que deseja sair?</Msg>
        <ButtonArea>
          <button className="btn-cancel" onClick={closeModal}>
            Cancelar
          </button>
          <button className="btn-default" onClick={logOut}>
            Sair
          </button>
        </ButtonArea>
      </Modal>
    </ModalWrapper>
  );
}
