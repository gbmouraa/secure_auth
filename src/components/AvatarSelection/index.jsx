import { useState, useContext } from "react";
import { AuthContext } from "../../authContext";
import {
  AvatarSelectionWrapper,
  AvatarsList,
  AvatarSelect,
  UploadImageButton,
  InputRadio,
  InputImage,
  Label,
  LabelImage,
  ButtonArea,
} from "./avatarSelection.style";
import uploadIcon from "../../assets/icon_camera.svg";
import { avatars } from "../../data";
import { TbPencil } from "react-icons/tb";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

// prop para saber se o componente está sendo renderizado no cadastro de usuário
// ou na edição do  perfil
export default function AvatarSelection({ profileEditing, closeModal }) {
  const {
    avatarSelected,
    setAvatarSelected,
    imageFile,
    setImageFile,
    uploadFile,
    user,
    setUser,
    userStorage,
  } = useContext(AuthContext);
  // para efeito visual no momento que o usuário seleciona uma foto de sua galeria
  const [profileImage, setProfileImage] = useState(null);

  function handleAvatarSelected(avatarData) {
    setAvatarSelected(avatarData);
  }

  function handleImageFile(e) {
    const img = e.target.files[0];

    // tratamento de erro para quando o usuário já selecionou uma imagem da galeria
    // clica em editar mas cancela a ação
    if (img === undefined && !!imageFile === true) return;

    if (
      img.type !== "image/jpeg" &&
      img.type !== "image/png" &&
      img.type !== "image/jpg"
    ) {
      alert("Insira uma imagem do tipo jpeg ou png.");
      return;
    }

    setProfileImage(URL.createObjectURL(img));
    setImageFile(img);
    setAvatarSelected("profileImage");
  }

  // seleciona a foto que foi enviada pelo usuário
  function handleProfileImage() {
    if (!!profileImage === false) return;
    setAvatarSelected("profileImage");
  }

  async function handleChange() {
    const docRef = doc(db, "users", user.userID);

    if (avatarSelected && avatarSelected !== "profileImage") {
      await updateDoc(docRef, {
        avatarURL: avatarSelected.imageLink,
      }).then(() => {
        let data = {
          ...user,
          avatarURL: avatarSelected.imageLink,
        };

        setUser(data);
        userStorage(data);
      });

      return;
    }

    uploadFile(user.userID, true);
    setAvatarSelected("");
  }

  return (
    <AvatarSelectionWrapper show_in_profile={profileEditing ? "true" : "false"}>
      {!profileEditing && (
        <>
          <h3>Escolha seu Avatar</h3>
          <span>
            Você também pode adionar uma foto de perfil ou pular esta etapa.
          </span>
        </>
      )}

      <AvatarsList>
        <AvatarSelect>
          <UploadImageButton
            type="button"
            hasimage={!!profileImage === true ? "true" : "false"}
            isselected={avatarSelected === "profileImage" ? "true" : "false"}
            onClick={handleProfileImage}
          >
            {profileImage !== null ? (
              <img
                src={profileImage}
                alt="Profile image"
                className="profile-image"
              />
            ) : (
              <img src={uploadIcon} alt="upload icon" className="icon" />
            )}
            <LabelImage htmlFor="profileImage">
              <TbPencil color="#fff" size={16} />
            </LabelImage>
            <InputImage
              type="file"
              accept="img/*"
              onChange={handleImageFile}
              id="profileImage"
            />
          </UploadImageButton>
        </AvatarSelect>

        {avatars.map((item) => (
          <AvatarSelect key={item.avatarID}>
            <InputRadio
              type="radio"
              name="avatar"
              id={item.avatarID}
              checked={avatarSelected.avatarID === item.avatarID}
              onChange={() => handleAvatarSelected(item)}
            />
            <Label htmlFor={item.avatarID}>
              <img src={item.imageLink} alt="avatar" />
            </Label>
          </AvatarSelect>
        ))}
      </AvatarsList>

      {profileEditing && (
        <ButtonArea>
          <button onClick={closeModal}>Cancelar</button>
          <button onClick={handleChange}>Salvar</button>
        </ButtonArea>
      )}
    </AvatarSelectionWrapper>
  );
}
