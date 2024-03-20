import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  height: calc(100vh - 274px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 2rem;

  @media screen and (min-width: 1020px) {
    padding: 0;
  }
`;
export const ProfileWrapper = styled.div`
  width: 100%;
  max-width: 40rem;
  padding: 0 6rem 4rem 6rem;
  z-index: 10;
  background-color: #fff;
  border-radius: 1.6rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  transform: translateY(-50%);

  div {
    width: 8rem;
    height: 8rem;
    position: absolute;
    top: -4rem;

    img {
      width: 8rem;
      border-radius: 50%;
      display: block;
      background-color: #fff;
    }

    button {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 8rem;
      height: 8rem;
      background-color: transparent;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: transparent;
      font-size: 1.4rem;
      z-index: -1;
      cursor: pointer;
    }

    &:hover {
      button {
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.3);
        color: #fff;
      }
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5.2rem;

  & > :first-child {
    text-transform: capitalize;
    font-weight: 500;
    font-size: 2rem;
  }
`;

export const LogoutButton = styled.button`
  margin-top: 4rem;
  color: #fff;
  background-color: ${({ theme }) => theme.blue};
  padding: 1.2rem 2.4rem;
  border-radius: 0.6rem;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;
