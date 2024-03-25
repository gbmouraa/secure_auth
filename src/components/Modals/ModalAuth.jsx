import { useEffect, useState } from "react";
import {
  ModalWrapper,
  Modal,
  Illustration,
  RegisterSuccess,
  Loading,
  Msg,
} from "./modal.style";
import Loader from "../Loader";
import checkIcon from "../../assets/images/check.png";

export default function ModalAuth({ authAction }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    function animation() {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
    animation();
  }, []);

  return (
    <ModalWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Modal>
        <Loading opacity={loading ? "1" : "0"}>
          <Loader />
          <p style={{ fontSize: "16px" }}>
            Aguarde enquanto efetuamos seu {authAction}.
          </p>
        </Loading>
        {!loading && (
          <RegisterSuccess>
            <Illustration
              src={checkIcon}
              alt="illustration"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            />
            <Msg
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              style={{ fontSize: "16px" }}
            >
              <span className="upper">{authAction}</span> efetuado com sucesso!
              &#x1F389;
            </Msg>
          </RegisterSuccess>
        )}
      </Modal>
    </ModalWrapper>
  );
}
