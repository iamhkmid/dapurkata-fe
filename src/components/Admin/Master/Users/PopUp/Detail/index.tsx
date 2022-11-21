import { FC, useContext } from "react";
import PopUpHeaderAdmin from "../../../../../otherComps/PopUpHeader/PopUpHeaderAdmin";
import Navigation from "./NavigationMenu";
import * as El from "./DetailElement";
import ProfileInfo from "./ProfileInfo";

type TUserDetail = {
  userId: string;
  nested?: boolean;
};

const BookDetail: FC<TUserDetail> = ({ userId, nested }) => {
  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PopUpHeaderAdmin
        title="Detail Pengguna"
        closePopup={nested ? "CURRENT" : "ALL"}
        themeToggle={true}
      />
      <El.ContentWrapper>
        <El.Content>
          <ProfileInfo userId={userId} />
          <Navigation userId={userId} />
        </El.Content>
      </El.ContentWrapper>
    </El.Main>
  );
};

export default BookDetail;
