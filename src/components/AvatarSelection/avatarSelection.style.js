import styled, { css } from "styled-components";

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
    outline: solid 0.4rem #ccc;
  }
`;

export const UploadImageButton = styled.button`
  position: relative;
  background-color: #ccc;
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  box-sizing: content-box;
  border: solid 0.1rem transparent;
  outline: solid 0.4rem transparent;

  .icon {
    width: 3.2rem;
  }

  .profile-image {
    width: 7rem;
    height: 7rem;
    object-fit: cover;
  }

  &:hover {
    transform: scale(0.9);
    background-color: ${({ theme }) => theme.blue};
  }

  ${(props) =>
    props.hasimage === "true" &&
    css`
      transition: none;
      background-color: #fff;
      &:hover {
        transform: none;
        border-color: #fff;
        outline-color: #ccc;
      }

      ${LabelImage} {
        opacity: 1;
      }

      ${InputImage} {
        z-index: -1;
      }
    `}

  ${(props) =>
    props.isselected === "true" &&
    css`
      outline-color: #5acf5f;
      &:hover {
        outline-color: #5acf5f;
      }
    `}
`;

export const LabelImage = styled.label`
  font-size: 1.2rem;
  width: 6.6rem;
  position: absolute;
  bottom: 0rem;
  right: -1.3rem;
  padding: 0.4rem 0;
  background-color: rgba(0, 0, 0, 0.4);
  transform: rotate(-35deg);
  cursor: pointer;
  opacity: 0;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  svg {
    transform: rotate(28deg);
  }
`;

export const InputImage = styled.input`
  width: 7rem;
  height: 7rem;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  border-radius: 50%;
  cursor: pointer;
`;

export const InputRadio = styled.input`
  width: 0px;
  opacity: 0;

  &:checked + ${Label} {
    outline: solid 0.4rem #5acf5f;
  }
`;
