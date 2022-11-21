import { useQuery } from "@apollo/client";
import { FC, useEffect } from "react";
import { FOOTERINFO_BY_USER } from "../../../graphql/footerInfo/queries";
import { TGQLFooterInfoByUser } from "../../../types/footerInfo";
import IconsControl from "../../IconsControl";
import * as El from "./FooterElement";

const Footer: FC = () => {
  const { data } = useQuery<TGQLFooterInfoByUser>(FOOTERINFO_BY_USER, {
    fetchPolicy: "cache-first",
    errorPolicy: "all",
  });
  return (
    <El.Main>
      <El.Section>
        {data?.footerPhone && (
          <El.Phone>
            <h1>No. Telp</h1>
            <h1>
              {data.footerPhone.phone
                .match(/.{1,4}/g)
                .map((val, i, arr) => (i + 1 !== arr.length ? `${val}-` : val))}
            </h1>
          </El.Phone>
        )}
        {data?.footerAddress && (
          <El.Address>
            <h1>Alamat</h1>
            <h1>{data.footerAddress.address}</h1>
          </El.Address>
        )}
        {data?.footerSocialMedia && (
          <El.SocialMedia>
            <h1>Sosial Media</h1>
            <div className="item-group">
              {data?.footerSocialMedia.map((val) => (
                <a
                  key={val.name}
                  href={val.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icon-wrapper">{IconsControl(val.name)}</div>
                </a>
              ))}
            </div>
          </El.SocialMedia>
        )}
      </El.Section>
      {data?.footerMessage && (
        <El.FooterMessage>
          <h1>{data.footerMessage.message}</h1>
        </El.FooterMessage>
      )}
    </El.Main>
  );
};

export default Footer;
