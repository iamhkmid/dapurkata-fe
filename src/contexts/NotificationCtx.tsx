import { useQuery } from "@apollo/client";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { TNotificationCtx } from "../types/context";
import { WISHLIST } from "../graphql/wishlist/queries";
import { TGQLWishlistQuery } from "../types/wishlist";
import { AuthContext } from "./AuthCtx";
import { TGQLNotification, TGQLNotificationSubs } from "../types/user";
import { NOTIFICATION } from "../graphql/user/queries";
import { NOTIFICATION_SUBSCRIPTION } from "../graphql/user/subscriptions";

export const NotificationCtx = createContext<TNotificationCtx>(undefined);
const NotificationCtxProvider: FC<ReactNode> = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [newNotif, setNewNotif] = useState(false);
  const { data, error, loading, subscribeToMore } = useQuery<TGQLNotification>(
    NOTIFICATION,
    {
      skip: !user,
      errorPolicy: "all",
    }
  );
  const subscribeNotif = () => {
    subscribeToMore<TGQLNotificationSubs>({
      document: NOTIFICATION_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data.notification) return prev;
        setNewNotif(true);
        return {
          notification: [
            subscriptionData.data.notification,
            ...prev.notification,
          ],
        };
      },
    });
  };
  useEffect(() => {
    if (data) {
      subscribeNotif();
    }
  }, [data]);

  return (
    <NotificationCtx.Provider
      value={{
        notification: data?.notification,
        loading,
        error,
        setNewNotif,
        newNotif,
      }}
    >
      {children}
    </NotificationCtx.Provider>
  );
};

export default NotificationCtxProvider;
