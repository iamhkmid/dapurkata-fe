import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { AdminNavCtx } from "../../../contexts/AdminNavCtx";
import AuthorDelete from "../Master/Products/Authors/PopUp/Delete";
import AuthorUpdate from "../Master/Products/Authors/PopUp/Update";
import AuthorDetail from "../Master/Products/Authors/PopUp/Detail";
import BookDelete from "../Master/Products/Books/PopUp/Delete";
import BookUpadate from "../Master/Products/Books/PopUp/Update";
import BookDetail from "../Master/Products/Books/PopUp/Detail";
import CategoryDelete from "../Master/Products/Categories/PopUp/Delete";
import CategoryUpdate from "../Master/Products/Categories/PopUp/Update";
import CategoryDetail from "../Master/Products/Categories/PopUp/Detail";
import PublisherDelete from "../Master/Products/Publisher/PopUp/Delete";
import PublisherUpdate from "../Master/Products/Publisher/PopUp/Update";
import PublisherDetail from "../Master/Products/Publisher/PopUp/Detail";
import UserDelete from "../Master/Users/PopUp/Delete";
import UserUpdate from "../Master/Users/PopUp/Detail";
import styled from "styled-components";
import GlobalMessageAdmin from "../../otherComps/GlobalMessage/GlobalMessageAdmin";
import OrderDetail from "../Transactions/Popup/OrderDetail";
import AddressDetail from "../Master/Users/PopUp/AddressDetail";

const PopUpControl = () => {
  const {
    adminNav: { popup },
  } = useContext(AdminNavCtx);

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
          <GlobalMessageAdmin />
          {popup.name === "AUTHOR_DELETE" && (
            <AuthorDelete id={popup.authorId} />
          )}
          {popup.name === "AUTHOR_DETAIL" && (
            <AuthorDetail id={popup.authorId} />
          )}
          {popup.name === "AUTHOR_UPDATE" && (
            <AuthorUpdate id={popup.authorId} />
          )}
          {popup?.name === "BOOK_DELETE" && (
            <BookDelete bookId={popup.bookId} />
          )}
          {popup?.name === "BOOK_DETAIL" && (
            <BookDetail bookId={popup.bookId} nested={popup.nested} />
          )}
          {popup?.name === "BOOK_UPDATE" && <BookUpadate id={popup.bookId} />}
          {popup.name === "CATEGORY_DELETE" && (
            <CategoryDelete id={popup.categoryId} />
          )}
          {popup.name === "CATEGORY_DETAIL" && (
            <CategoryDetail id={popup.categoryId} />
          )}
          {popup.name === "CATEGORY_UPDATE" && (
            <CategoryUpdate id={popup.categoryId} />
          )}
          {popup.name === "PUBLISHER_DELETE" && (
            <PublisherDelete id={popup.publisherId} />
          )}
          {popup.name === "PUBLISHER_DETAIL" && (
            <PublisherDetail id={popup.publisherId} />
          )}
          {popup.name === "PUBLISHER_UPDATE" && (
            <PublisherUpdate id={popup.publisherId} />
          )}
          {popup.name === "USER_DELETE" && <UserDelete userId={popup.userId} />}
          {popup.name === "USER_DETAIL" && (
            <UserUpdate userId={popup.userId} nested={popup.nested} />
          )}
          {popup.name === "ORDER_DETAIL" && (
            <OrderDetail orderId={popup.orderId} />
          )}
          {popup.name === "ADDRESS_DETAIL" && (
            <AddressDetail recipientId={popup.recipientId} />
          )}
        </Main>
      )}
    </AnimatePresence>
  );
};

export default PopUpControl;

export const Main = styled(motion.div)`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.3rem;
`;

export const Backround = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
  background: ${({ theme }) => theme.popup};
  backdrop-filter: blur(4px);
  transition: 0.4s all ease;
  transition-property: backdrop-filter;
`;
