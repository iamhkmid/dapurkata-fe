import { FC } from "react";
import styled from "styled-components";
import Button from "../../../../otherComps/Buttons/Button";
import TextError from "../../../../otherComps/Forms/TextMessage";
import ImageResponsive from "../../../../otherComps/ImageResponsive";
import LoadingProfile from "../../../../otherComps/Loading/LoadingProfile";
import { useGQLChangeUserPic, useGQLDeleteUserPic } from "./useGQL";

type TProps = { userPicture: string };
const PhotoProfile: FC<TProps> = ({ userPicture }) => {
  const { changeUserPic, loading: loadCUP } = useGQLChangeUserPic();
  const { deleteUserPic, loading: loadDUP } = useGQLDeleteUserPic();
  return (
    <Main>
      <PhotoWrapper>
        <LoadingProfile isActive={loadCUP || loadDUP} />
        <ImageResponsive
          src={userPicture}
          alt="Profile Pic"
          height={90}
          width={90}
          defaultIcon="person"
          quality={75}
        />
      </PhotoWrapper>
      <ChangePhoto>
        <InputWrapper>
          <StyledInput htmlFor="new-photo">Ubah</StyledInput>
          <HiddenInput
            id="new-photo"
            name="userPic"
            type="file"
            onChange={(e) => {
              changeUserPic({ userPic: e.target.files[0] }).finally(
                () => (e.target.value = "")
              );
            }}
            accept="image/jpeg, image/png"
          />
        </InputWrapper>
        <Button
          type="button"
          name="Hapus"
          color="danger"
          onClick={() => deleteUserPic().catch(() => {})}
        />
        {/* <TextError message={`message`} color="danger" /> */}
      </ChangePhoto>
    </Main>
  );
};

export default PhotoProfile;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const PhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 90px;
  aspect-ratio: 1/1;
  overflow: hidden;
  position: relative;
  border: 1px solid ${({ theme }) => theme.button.primary.background};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 80px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;
const ChangePhoto = styled.div`
  display: flex;
  gap: 16px;
`;

const StyledInput = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: ${({ theme }) => theme.input.borderRadius};
  font-family: "Roboto", sans-serif;
  background: ${({ theme }) => theme.button.primary.background};
  color: ${({ theme }) => theme.button.primary.color};
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  height: 100%;
  width: 6rem;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.button.hover.primary.background};
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
  transition: 0.4s all ease;
`;

const HiddenInput = styled.input`
  top: 0;
  left: 0;
  position: absolute;
  display: none;
`;
