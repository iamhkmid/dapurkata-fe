import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { UserNavCtx } from "../../../contexts/UserNavCtx";
import PopUpMessage from "../../otherComps/PopUpMessage";
import BookDetail from "../Books/BookDetail";
import CreateRecipient from "../Order/Delevery/PopUp/CreateRecipient";
import ChangeRecipient from "../Order/Delevery/PopUp/ChangeRecipient";
import UpdateRecipient from "../Order/Delevery/PopUp/UpdateRecipient";
import ChangePassword from "../Account/ContentState/PopUp/ChangePassword";
import styled from "styled-components";
import GlobalMessageUser from "../../otherComps/GlobalMessage/GlobalMessageUser";
import ActivateAccount from "../Auth/Popup/ActivateAccount";
import ResetPassword from "../Auth/Popup/ResetPassword";
import OrderDetail from "../Order/PopUp/OrderDetail";
import OrderPaymentInfo from "../Order/PopUp/OrderPaymentInfo";
import WishlistPopup from "../Navbar/WishlistPopup";

const PopUpControl = () => {
  const {
    userNav: { popup },
    dispatch,
  } = useContext(UserNavCtx);

  useEffect(() => {
    if (!!popup.name) {
      window.document.body.style.overflowY = "hidden";
      window.document.body.style.paddingRight = "10px";
    } else {
      window.document.body.style.overflowY = "scroll";
      window.document.body.style.paddingRight = "0";
    }
  }, [popup.name]);

  return (
    <AnimatePresence>
      {!!popup.name && (
        <Main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Backround />
          <GlobalMessageUser />
          {popup.name === "CHANGE_RECIPIENT" && <ChangeRecipient />}
          {popup.name === "ADD_RECIPIENT" && <CreateRecipient />}
          {popup.name === "UPDATE_RECIPIENT" && (
            <UpdateRecipient recipientId={popup.recipientId} />
          )}
          {popup.name === "MESSAGE" && <PopUpMessage message={popup.message} />}
          {popup.name === "BOOK_DETAIL" && <BookDetail bookId={popup.bookId} />}
          {popup.name === "CHANGE_PASSWORD" && <ChangePassword />}

          {popup.name === "REGISTER_CONFIRM" && (
            <ActivateAccount
              type="REGISTRATION"
              email={popup.email}
              fetchWaitTime={popup.fetchWaitTime}
            />
          )}
          {popup.name === "ACTIVATE_ACCOUNT" && (
            <ActivateAccount type="ACTIVATE_ACCOUNT" />
          )}
          {popup.name === "RESET_PASSWORD" && <ResetPassword />}
          {popup.name === "ORDER_DETAIL" && (
            <OrderDetail orderId={popup.orderId} />
          )}
          {popup.name === "ORDER_PAYMENT_INFO" && (
            <OrderPaymentInfo orderId={popup.orderId} />
          )}
          {popup.name === "WISHLIST" && <WishlistPopup />}
        </Main>
      )}
    </AnimatePresence>
  );
};

export default PopUpControl;

const Main = styled(motion.div)`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 200;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.2rem;
`;

const Backround = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: ${({ theme }) => theme.popup};
  backdrop-filter: blur(4px);
  transition: 0.4s all ease;
  transition-property: backdrop-filter;
`;
