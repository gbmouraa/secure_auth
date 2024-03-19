import { useContext, useState } from "react";
import { AuthContext } from "../../authContext";
import {
  ProfileContainer,
  ProfileWrapper,
  Avatar,
  UserInfo,
  LogoutButton,
} from "./profile.style";
import userIcon from "../../assets/user.svg";
import AvatarSelection from "../../components/AvatarSelection";

export default function Profile() {
  const { logOut, user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <ProfileContainer>
      <ProfileWrapper>
        {/* avatar settings */}
        <Avatar>
          <div>
            {user.avatarURL === "" ? (
              <img src={userIcon} alt="Avatar" />
            ) : (
              <img src={user.avatarURL} alt="Avatar" />
            )}
            <button onClick={() => setIsEditing(true)}>Editar</button>
          </div>
        </Avatar>
        <UserInfo>
          <span>{`${user.firstName} ${user.lastName}`}</span>
          <span>{user.email}</span>
        </UserInfo>
        <LogoutButton onClick={logOut}>Sair</LogoutButton>
      </ProfileWrapper>
      {isEditing && (
        <AvatarSelection
          profileEditing={true}
          closeModal={() => setIsEditing(false)}
        />
      )}
    </ProfileContainer>
  );
}
