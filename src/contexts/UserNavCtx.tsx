import { createContext, FC, ReactNode, useReducer } from "react";
import { TUserNavCtx } from "../types/context";
import { reducer, initialValue } from "../reducer/userNav";
import { useEffect } from "react";

export const UserNavCtx = createContext<TUserNavCtx | undefined>(undefined);

const UserNavCtxProvider: FC<ReactNode> = ({ children }) => {
  const [userNav, dispatch] = useReducer(reducer, initialValue);

  return (
    <UserNavCtx.Provider value={{ userNav, dispatch }}>
      {children}
    </UserNavCtx.Provider>
  );
};

export default UserNavCtxProvider;
