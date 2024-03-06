import styled, { css } from "styled-components";

export const Form = styled.form`
  width: 100%;
  margin-top: 5.2rem;

  .names {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (min-width: 700px) {
      div {
        max-width: 30rem;
      }
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  height: 4.4rem;
  width: 100%;
  margin-bottom: 3.6rem;

  label {
    color: ${({ theme }) => theme.secundary_text};
    background-color: #fff;
    padding: 0 0.8rem;
    position: absolute;
    left: 1.2rem;
    top: 50%;
    transform: translatey(-50%);
    font-size: 1.4rem;
    transition: all 0.3s ease;
  }

  button {
    display: flex;
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 999;

    svg {
      color: ${({ theme }) => theme.border};
    }
  }
`;

export const Input = styled.input`
  outline: none;
  border: solid 0.1rem ${({ theme }) => theme.border};
  border-radius: 0.6rem;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  padding: 0 2rem;
  font-size: 1.4rem;
  background-color: #fff;

  &::placeholder {
    opacity: 0;
  }

  &:focus {
    border-color: ${({ theme }) => theme.blue};
  }

  &:focus + label {
    color: ${({ theme }) => theme.blue};
  }

  &:not(:focus) + label {
    color: ${({ theme }) => theme.secundary_text};
  }

  &:not(:placeholder-shown) + label,
  &:focus + label {
    transform: translateY(-3.2rem);
  }

  ${(props) =>
    props.errors === "true" &&
    css`
      border-color: red;

      &:focus {
        border-color: red;
      }

      &:focus + label,
      &:not(:placeholder-shown) + label {
        color: red;
      }
    `}
`;

export const ErrorMsg = styled.span`
  position: absolute;
  bottom: -2.8rem;
  font-size: 1.2rem;
  word-wrap: normal;
  left: 0.4rem;
  margin-bottom: 1rem;
  color: red;
`;
