import * as El from "./NotificationElement";
import NotificationList from "../../../NotificationList";

const Notification = () => {
  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
    >
      <NotificationList />
    </El.Main>
  );
};

export default Notification;
