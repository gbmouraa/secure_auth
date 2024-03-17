import { useContext } from "react";
import { AuthContext } from "../../authContext";
import {
  ProfileContainer,
  ProfileWrapper,
  Avatar,
  UserInfo,
  LogoutButton,
} from "./profile.style";

export default function Profile() {
  const { logOut, user } = useContext(AuthContext);

  return (
    <ProfileContainer>
      <ProfileWrapper>
        {/* avatar settings */}
        <Avatar>
          <div>
            <img src={user.avatarURL} alt="Avatar" />
            <label htmlFor="changeAvatar">Editar</label>
            <input type="file" id="changeAvatar" />
          </div>
        </Avatar>
        <UserInfo>
          <span>{`${user.firstName} ${user.lastName}`}</span>
          <span>{user.email}</span>
        </UserInfo>
        <LogoutButton onClick={logOut}>Sair</LogoutButton>
      </ProfileWrapper>
    </ProfileContainer>
  );
}
