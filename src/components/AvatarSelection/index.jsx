import { useState } from "react";
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
  const [avatarSelected, setAvatarSelected] = useState("");
  // para efeito visual
  const [profileImage, setProfileImage] = useState(null);
  // para enviar para o firebase
  const [imageFile, setImagefile] = useState(null);

  function handleAvatarSelected(avatarID) {
    setAvatarSelected(avatarID);
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
    setImagefile(img);
    setAvatarSelected("profileImage");
  }

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
              checked={avatarSelected === item.avatarID}
              onChange={(e) => handleAvatarSelected(e.currentTarget.id)}
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
