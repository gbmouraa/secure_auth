import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 99999;
  display: flex;
  justify-items: center;
  padding: 0 1.2rem;
`;
export const Modal = styled(motion.div)`
  width: 100%;
  height: fit-content;
  max-width: 60rem;
  background-color: #fff;
  border-radius: 1.6rem;
  padding: 6rem 4rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.6rem;
    margin-top: 2rem;
    font-weight: 500;
  }
`;
export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${(props) => props.opacity};
`;
export const Illustration = styled(motion.img)`
  display: block;
  margin-bottom: 2rem;
  width: 8rem;
`;
export const RegisterSuccess = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
`;

export const Msg = styled(motion.p)`
  .upper {
    text-transform: capitalize;
    color: ${({ theme }) => theme.text};
  }
`;
