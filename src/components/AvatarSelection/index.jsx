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
} from "./avatarSelection.style";
import uploadIcon from "../../assets/icon_camera.svg";
import { avatars } from "../../data";
import { TbPencil } from "react-icons/tb";

export default function AvatarSelection() {
  const { avatarSelected, setAvatarSelected, imageFile, setImageFile } =
    useContext(AuthContext);
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

  return (
    <AvatarSelectionWrapper>
      <h3>Escolha seu Avatar</h3>
      <span>
        Você também pode adionar uma foto de perfil ou pular esta etapa.
      </span>

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
    </AvatarSelectionWrapper>
  );
}
