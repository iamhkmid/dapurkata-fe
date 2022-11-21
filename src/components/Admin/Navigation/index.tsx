import { AdminNavCtx } from "../../../contexts/AdminNavCtx";
import * as El from "./NavigationElement";
import Sidebar from "./Sidebar";
import { FC, useContext } from "react";
import Header from "./Header";
import PopUpControl from "../PopUpControl";
import SectionInfo from "./SectionInfo";
import GlobalMessageAdmin from "../../otherComps/GlobalMessage/GlobalMessageAdmin";
const Navigation: FC = ({ children }) => {
  const { adminNav } = useContext(AdminNavCtx);
  return (
    <El.Main>
      <PopUpControl />
      <El.AdminContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Header />
        {!adminNav.popup.name && <GlobalMessageAdmin />}
        <Sidebar />
        <El.AdminWrapper isOpen={adminNav.sidebar}>
          <SectionInfo />
          {children}
          <El.Footer>Penerbit DapurKata © 2021 ~ Made with ❤️</El.Footer>
        </El.AdminWrapper>
      </El.AdminContainer>
    </El.Main>
  );
};

export default Navigation;
