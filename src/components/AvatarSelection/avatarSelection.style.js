import styled from "styled-components";

export const AvatarSelectionWrapper = styled.div`
  margin-top: 5.2rem;

  h3 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;

export const AvatarsList = styled.ul`
  display: flex;
  justify-content: center;
  max-width: 40rem;
  margin: auto;
  flex-wrap: wrap;
  gap: 3rem;
  margin-top: 4.2rem;
  list-style-type: none;
`;

export const AvatarSelect = styled.li`
  position: relative;
  width: 7rem;
  height: 7rem;

  img,
  button {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7.2rem;
  height: 7.2rem;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    outline: solid 0.4rem #5acf5f;
  }
`;

export const UploadImageButton = styled.button`
  background-color: ${({ theme }) => theme.blue};
  background-color: #ccc;
  transition: all 0.3s ease;

  img {
    width: 3.2rem;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: scale(0.9);
    background-color: #5acf5f;
  }
`;

export const InputRadio = styled.input`
  width: 0px;
  opacity: 0;
`;
