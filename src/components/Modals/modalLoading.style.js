import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 99999;
  display: flex;
  justify-items: center;
  align-items: center;
  padding: 0 1.2rem;
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 60rem;
  background-color: #fff;
  border-radius: 0.6rem;
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
