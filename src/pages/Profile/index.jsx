import { useContext, useState } from "react";
import { UserContext } from "../../userContext";
import {
  ProfileContainer,
  ProfileWrapper,
  Avatar,
  UserInfo,
  LogoutButton,
} from "./profile.style";
import userIcon from "../../assets/images/user.svg";
import AvatarSelection from "../../components/AvatarSelection";
import ModalLogout from "../../components/Modals/ModalLogout";

export default function Profile() {
  const { user, setAvatarSelected } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [showModalLogout, setShowModalLogout] = useState(false);

  function closeAvatarSelection() {
    setIsEditing(false);
    setAvatarSelected("");
  }

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
            {!user.thirdPartyAuth && (
              <button onClick={() => setIsEditing(true)}>Editar</button>
            )}
          </div>
        </Avatar>
        <UserInfo>
          <span>{`${user.firstName} ${user.lastName}`}</span>
          <span>{user.email}</span>
        </UserInfo>
        <LogoutButton onClick={() => setShowModalLogout(true)}>
          Sair
        </LogoutButton>
      </ProfileWrapper>
      {isEditing && (
        <AvatarSelection
          profileEditing={true}
          closeModal={closeAvatarSelection}
        />
      )}
      {showModalLogout && (
        <ModalLogout closeModal={() => setShowModalLogout(false)} />
      )}
    </ProfileContainer>
  );
}
