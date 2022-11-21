import { FC, useContext, useEffect, useRef } from "react";
import { AuthContext } from "../contexts/AuthCtx";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import RoleNotMatch from "../components/otherComps/RoleNotMatch";
import Navbar from "../components/User/Navbar";
import Navigation from "../components/Admin/Navigation";
import AdminContextProvider from "../contexts/AdminNavCtx";
import PopUpControl from "../components/User/PopUpControl";
import PaymentCtxProvider from "../contexts/OrderCtx";
import UserNavCtxProvider, { UserNavCtx } from "../contexts/UserNavCtx";
import ShoppingCartCtxProvider from "../contexts/ShoppingCartCtx";
import WishlistCtxProvider from "../contexts/WishlistCtx";
import NotificationCtxProvider from "../contexts/NotificationCtx";

const AuthLoading = dynamic(
  () => import("../components/otherComps/Loading/AuthLoading")
);

export const WithAuth: FC = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const { pathname, replace, query } = useRouter();
  const isMounted = useRef(false);
  const isAuthPath = pathname.slice(0, 6) === "/auth/";
  const isAdminPath = pathname.slice(0, 7) === "/admin/";
  const isUserPath = pathname.slice(0, 3) === "/u/";
  const isReqAuth = isAdminPath || isUserPath;
  const isAdminRole = user && user.role === "ADMIN";
  const isUserRole = user && user.role === "USER";
  const redirect = (url: string) => {
    if (query.next) {
      replace(query.next as string);
    } else {
      replace(url);
    }
  };
  useEffect(() => {
    const checkAuth = async () => {
      if (!loading) {
        if (user && isAuthPath) {
          if (isAdminRole) {
            redirect("/admin");
          } else {
            redirect("/");
          }
        } else if (!user && !isMounted.current && isReqAuth && !isAuthPath) {
          replace(`/auth/login?next=${pathname}`);
        }
      }
    };
    checkAuth().finally(() => {
      if (!isMounted.current && !loading) {
        isMounted.current = true;
      }
    });
  }, [loading]);

  const isLoading = (loading && isAdminPath) || (isAdminRole && isAuthPath);
  const isAdmin = !loading && isAdminRole && isAdminPath;
  const isNotAdmin = !loading && user && !isAdminRole && isAdminPath;
  const isUser = !loading && isUserRole && isUserPath;
  const isNotUser = !loading && user && !isUserRole && isUserPath;
  return (
    <>
      {isLoading && <AuthLoading />}
      {isAdmin && (
        <AdminContextProvider>
          <Navigation>{children}</Navigation>
        </AdminContextProvider>
      )}
      {isNotAdmin && <RoleNotMatch role="ADMIN" />}
      {isNotUser && <RoleNotMatch role="USER" />}
      <UserNavCtxProvider>
        {(isUser || (!isAdminPath && !isUserPath && !isLoading)) && (
          <ShoppingCartCtxProvider>
            <WishlistCtxProvider>
              <NotificationCtxProvider>
                <PaymentCtxProvider>
                  <PopUpControl />
                  <Navbar>{children}</Navbar>
                </PaymentCtxProvider>
              </NotificationCtxProvider>
            </WishlistCtxProvider>
          </ShoppingCartCtxProvider>
        )}
      </UserNavCtxProvider>
    </>
  );
};

// export const WithAuth = (Component: NextPage) => {
//   const Auth: NextPage = (props) => {
//     const { loading, user, error } = useContext(AuthContext);
//     const { pathname, replace, query } = useRouter();
//     const authPath =
//       pathname.includes("/signin") || pathname.includes("/signup");
//     const isUser = user && user.role === "USER" && !pathname.includes("/admin");
//     const isAdmin =
//       user && user.role === "ADMIN" && pathname.includes("/admin");
//     const isNotAdmin =
//       user && user.role === "USER" && pathname.includes("/admin");
//     const isNotUser =
//       user && user.role === "ADMIN" && !pathname.includes("/admin");
//     const redirect = (url: string) => {
//       if (query.next) {
//         replace(query.next as string);
//       } else {
//         replace(url);
//       }
//     };
//     useEffect(() => {
//       if (!loading) {
//         if (user && authPath) {
//           if (user.role === "ADMIN") {
//             redirect("/admin");
//           } else {
//             redirect("/");
//           }
//         } else if (!user && !authPath) {
//           replace(`/signin?next=${pathname}`);
//         }
//       }
//     }, [loading]);

//     return (
//       <>
//         {loading && <AuthLoading />}
//         {(isAdmin || isUser) && !authPath && (
//           <AdminNavigation>
//             <Component {...props} />
//           </AdminNavigation>
//         )}
//         {isNotAdmin && <RoleNotMatch role="ADMIN" />}
//         {authPath && !user && (
//           <Navbar>
//             <Component {...props} />
//           </Navbar>
//         )}
//         {isNotUser && <RoleNotMatch role="USER" />}
//       </>
//     );
//   };

//   Component.getInitialProps &&
//     (Auth.getInitialProps = Component.getInitialProps);

//   return Auth;
// };
