import moment from "moment";
import "moment/locale/id";
import { useContext } from "react";
import styled from "styled-components";
import { string } from "yup/lib/locale";
import { NotificationCtx } from "../../../contexts/NotificationCtx";
import { UserNavCtx } from "../../../contexts/UserNavCtx";
import IconsControl from "../../IconsControl";

const getTime = (time: number) => {
  const datenow = new Date().getTime();
  const secondTime = (datenow - time) / 1000;
  // 1 menit  = 60 detik
  // 1 jam    = 3600 detik
  // 1 hari   = 86400 detik
  // 1 minggu = 604800 detik
  // 1 bulan  = 2419200 detik
  // 1 tahun  = 29030400 detik
  if (secondTime < 60) {
    return `${Math.floor(secondTime)} Detik yang lalu`;
  } else if (secondTime >= 60 && secondTime < 3600) {
    return `${Math.floor(secondTime / 60)} Menit yang lalu`;
  } else if (secondTime >= 3600 && secondTime < 86400) {
    return `${Math.floor(secondTime / 3600)} Jam yang lalu`;
  } else if (secondTime >= 86400 && secondTime < 604800) {
    return `${Math.floor(secondTime / 86400)} Hari yang lalu`;
  } else if (secondTime >= 604800 && secondTime < 2419200) {
    return `${Math.floor(secondTime / 604800)} Minggu yang lalu`;
  } else if (secondTime >= 2419200 && secondTime < 29030400) {
    return `${Math.floor(secondTime / 2419200)} Bulan yang lalu`;
  } else {
    return moment(time).locale("id").format("dddd, DD MMMM YYYY | HH:mm");
  }
};

const NotificationList = () => {
  const { notification } = useContext(NotificationCtx);
  const { dispatch } = useContext(UserNavCtx);
  type TClickHandler = (p: { valId: string; valName: string }) => void;
  const onClickHandler: TClickHandler = ({ valId, valName }) => {
    if (!!valName) {
      if (valName === "ORDER_DETAIL")
        dispatch({
          type: "SHOW_POPUP",
          value: { name: valName, orderId: valId },
        });
    }
  };
  return (
    <Main>
      <h1 className="popup-label">Pemberitahuan</h1>
      <List>
        <div>
          {notification?.length === 0 && (
            <h1 className="empty-notif">Tidak Ada Pemberitahuan</h1>
          )}
          {notification?.map((value) => (
            <Item
              key={value.id}
              onClick={() =>
                onClickHandler({
                  valId: value.valueId,
                  valName: value.valueName,
                })
              }
            >
              <h1 className="title">{value.title}</h1>
              <h1 className="message">{value.message}</h1>
              <h1 className="datetime">{getTime(value.createdAt)}</h1>
            </Item>
          ))}
        </div>
      </List>
    </Main>
  );
};

export default NotificationList;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  .popup-label {
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.color[8]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 14px;
    }
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: ${({ theme }) =>
    theme.name === "light" ? "#eff1f3" : "#11131653"};
  border-radius: 4px;
  gap: 5px;
  padding: 10px 16px;
  overflow: hidden;

  .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    font-size: 14px;
    font-weight: 600;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 12px;
    }
  }
  .message {
    padding: 0 5px;
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.color[2]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 10px;
    }
  }
  .datetime {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.color[2]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 10px;
    }
  }
  :hover {
    background: ${({ theme }) => theme.button.section.background};
    .message,
    .title,
    .datetime {
      color: ${({ theme }) => theme.button.section.color};
    }
  }
  transition: 0.4s all ease;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 300px;
  width: 100%;
  padding: 8px;
  overflow-y: auto;
  > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    .empty-notif {
      font-size: 13px;
      font-weight: 500;
      color: ${({ theme }) => theme.color[2]};
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        font-size: 11px;
      }
    }
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }
`;
