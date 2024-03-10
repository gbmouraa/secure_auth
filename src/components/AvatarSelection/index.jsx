import {
  AvatarSelectionWrapper,
  AvatarsList,
  AvatarSelect,
  UploadImageButton,
  InputRadio,
  Label,
} from "./avatarSelection.style";
import uploadIcon from "../../assets/icon_camera.svg";
import { avatars } from "../../data";

export default function AvatarSelection() {
  return (
    <AvatarSelectionWrapper>
      <h3>Escolha seu Avatar</h3>
      <span>
        Você também pode adionar uma foto de perfil ou pular esta etapa.
      </span>

      <AvatarsList>
        <AvatarSelect>
          <UploadImageButton type="button">
            <img src={uploadIcon} alt="upload icon" />
          </UploadImageButton>
        </AvatarSelect>

        {avatars.map((item) => (
          <AvatarSelect key={item.avatarID}>
            <InputRadio type="radio" name="avatar" id={item.avatarID} />
            <Label htmlFor={item.avatarID}>
              <img src={item.imageLink} alt="avatar" />
            </Label>
          </AvatarSelect>
        ))}
      </AvatarsList>
    </AvatarSelectionWrapper>
  );
}
