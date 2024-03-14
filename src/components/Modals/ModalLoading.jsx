import { ModalWrapper, Modal } from "./modalLoading.style";
import Loader from "../Loader";

export default function ModalLoading() {
  return (
    <ModalWrapper>
      <Modal>
        <Loader />
        <p>Aguarde enquanto efetuamos seu cadastro.</p>
      </Modal>
    </ModalWrapper>
  );
}
