type TGetMessage = (params: { message: string }) => string;

export const getMessage: TGetMessage = ({ message }) => {
  switch (message) {
    case "TokenExpiredError: jwt expired":
      return "Authentication token expired.";
    default:
      return message;
  }
};
