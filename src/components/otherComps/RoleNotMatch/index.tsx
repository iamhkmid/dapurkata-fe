import { useRouter } from "next/router";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthCtx";
import { useLogOut } from "../../../hooks/useGQLAuth";
import Button from "../Buttons/Button";
import * as El from "./RoleNotMatchElement";

const RoleNotMatch = ({ role }) => {
  const { logOut } = useLogOut();
  const { replace } = useRouter();
  const { user } = useContext(AuthContext);
  const redirectURL = user.role === "ADMIN" ? "/admin" : "/";
  const btnName = user.role === "ADMIN" ? "Admin page" : "Home";
  return (
    <El.Main>
      <El.NotifContainer>
        <El.ErrorText>{`Page can only be accessed with "${role}" role !`}</El.ErrorText>
        <El.TextGroup>
          <El.Text1>Current Role &nbsp;:&nbsp;</El.Text1>
          <El.Text2>{user.role}</El.Text2>
        </El.TextGroup>
        <El.ButtonWrapper>
          <Button
            name={btnName}
            type="button"
            onClick={() => replace(redirectURL)}
          />
          <Button name="Signout" type="button" onClick={() => logOut()} />
        </El.ButtonWrapper>
      </El.NotifContainer>
    </El.Main>
  );
};

export default RoleNotMatch;
