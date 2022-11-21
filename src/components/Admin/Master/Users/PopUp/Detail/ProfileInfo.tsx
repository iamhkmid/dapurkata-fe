import moment from "moment";
import "moment/locale/id";
import { FC, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { ONLINE_USERS_SUBS } from "../../../../../../graphql/dashboard/subscriptions";
import {
  TGQLOnlineUsersQuery,
  TGQLOnlineUserSubs,
} from "../../../../../../types/dashboard";
import ImageResponsive from "../../../../../otherComps/ImageResponsive";
import LoadingPopup from "../../../../../otherComps/Loading/LoadingPopup";
import { useGQLOnlineUserQuery, useGQLUserDetail } from "../../useGQLUser";

type TProfileInfo = {
  userId: string;
};
const ProfileInfo: FC<TProfileInfo> = ({ userId }) => {
  const { data, error, loading } = useGQLUserDetail({ userId });
  const [online, setOnline] = useState(false);
  const {
    data: onlineUsers,
    loading: loadingOnlineUser,
    subscribeToMore,
  } = useGQLOnlineUserQuery();
  useEffect(() => {
    if (onlineUsers) {
      const isOnline = !!onlineUsers.find((val) => val.id === userId);
      setOnline(isOnline);
    }
  }, [onlineUsers]);

  const subscribeDashboard = () => {
    subscribeToMore<TGQLOnlineUserSubs>({
      document: ONLINE_USERS_SUBS,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data?.onlineUsers) return prev;
        const newOnlineUsers = subscriptionData.data.onlineUsers;
        return {
          onlineUsers: newOnlineUsers,
        } as TGQLOnlineUsersQuery;
      },
    });
  };

  useEffect(() => {
    if (onlineUsers) {
      subscribeDashboard();
    }
  }, [onlineUsers]);

  return (
    <Main>
      {loading && <LoadingPopup />}
      {!loading && data && (
        <div className="profil-wrapper">
          <div className="info-wrapper">
            <PhotoWrapper>
              <ImageResponsive
                src={data?.userPicture}
                alt="Profile Pic"
                height={100}
                width={100}
                defaultIcon="person"
                quality={75}
              />
            </PhotoWrapper>
            <div className="big-info">
              <h1 className="big-fullname">{`${data.firstName} ${
                data.lastName || ""
              }`}</h1>
              <h1 className="big-role">{data.role}</h1>

              <OnlineStatus isOnline={online}>
                {online ? "Online" : "Offline"}
              </OnlineStatus>
            </div>
          </div>
          <div className="info-wrapper">
            <div className="text-wrapper">
              <h1 className="label">UserId</h1>
              <h1 className="value">{data.id}</h1>
            </div>
            <div className="text-wrapper">
              <h1 className="label">Nama Depan</h1>
              <h1 className="value">{data.firstName}</h1>
            </div>
            <div className="text-wrapper">
              <h1 className="label">Nama Belakang</h1>
              <h1 className="value">{data.lastName}</h1>
            </div>
            <div className="text-wrapper">
              <h1 className="label">Username</h1>
              <h1 className="value">{data.username}</h1>
            </div>
            <div className="text-wrapper">
              <h1 className="label">Email</h1>
              <h1 className="value">{data.email}</h1>
            </div>
            <div className="text-wrapper">
              <h1 className="label">No Handphone</h1>
              <h1 className="value">{data.phone}</h1>
            </div>
            <div className="text-wrapper">
              <h1 className="label">Role</h1>
              <h1 className="role">{data.role}</h1>
            </div>
            <div className="text-wrapper">
              <h1 className="label">CreateAt</h1>
              <h1 className="value">
                {moment(data.createdAt)
                  .locale("id")
                  .format("dddd, DD MMMM YYYY | HH:mm")}
              </h1>
            </div>
            <div className="text-wrapper">
              <h1 className="label">UpdatedAt</h1>
              <h1 className="value">
                {moment(data.updatedAt)
                  .locale("id")
                  .format("dddd, DD MMMM YYYY | HH:mm")}
              </h1>
            </div>
          </div>
        </div>
      )}
    </Main>
  );
};

export default ProfileInfo;

type TOnlineStatus = {
  isOnline: boolean;
};
const OnlineStatus = styled.div<TOnlineStatus>`
  width: fit-content;
  padding: 2px 10px;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  ${({ isOnline }) =>
    isOnline
      ? css`
          background: ${({ theme }) => theme.button.primary.background};
          color: ${({ theme }) => theme.button.primary.color};
        `
      : css`
          background: ${({ theme }) => theme.button.warning.background};
          color: ${({ theme }) => theme.button.warning.color};
        `}
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 10px;
  }
`;

const Main = styled.div`
  display: flex;
  gap: 16px;
  max-height: 500px;
  min-width: 250px;
  min-height: 500px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
    border-radius: ${({ theme }) => theme.input.borderRadius};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }
  .big-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .big-fullname {
    font-size: 20px;
    line-height: 1;
    font-weight: 600;
    color: ${({ theme }) => theme.color[2]};
  }
  .big-role {
    line-height: 1;
    font-size: 25px;
    font-weight: 600;
    color: ${({ theme }) => theme.color[8]};
  }
  .profil-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    margin-right: 5px;
  }
  .info-wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }
  .text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 1px solid ${({ theme }) => theme.input.border};
  }
  .label {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    line-height: 1;
    font-family: "Poppins", sans-serif;
    font-size: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.color[2]};

    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 10px;
    }
  }
  .value {
    overflow: hidden;
    font-family: "Poppins", sans-serif;
    line-height: 1;
    font-size: 14px;
    width: max-content;
    font-weight: 400;
    color: ${({ theme }) => theme.color[1]};

    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 12px;
    }
  }
  .role {
    overflow: hidden;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    line-height: 1;
    font-weight: 600;
    color: ${({ theme }) => theme.color[8]};

    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 14px;
    }
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    width: 100%;
  }
`;
export const PhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  height: 100px;
  width: 100px;
  min-height: 100px;
  min-width: 100px;
  aspect-ratio: 1/1;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.button.primary.background};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 90px;
    height: 90px;
    min-height: 90px;
    min-width: 90px;
  }
`;
