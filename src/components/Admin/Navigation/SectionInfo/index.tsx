import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { adminSidebar } from "../../../../data/adminSidebar";
import IconsControl from "../../../IconsControl";
import * as El from "./SectionInfoElement";

type TPageInfo = {
  name: string;
  title: string;
  desc: string;
  link: string;
  icon: string;
};

const SectionInfo = () => {
  const { pathname } = useRouter();
  const [pageInfo, setPageInfo] = useState<TPageInfo>(null);

  useEffect(() => {
    const data = adminSidebar.reduce((acc, curr) => {
      if (curr.menu.length > 0) {
        const data2 = curr.menu.reduce((acc, curr) => {
          const icon = curr.name;
          if (curr.subMenu.length > 0) {
            const data3 = curr.subMenu.reduce((acc, curr) => {
              return [
                ...acc,
                {
                  title: curr.title,
                  name: curr.name,
                  link: curr.link,
                  desc: curr.desc,
                  icon,
                },
              ];
            }, [] as TPageInfo[]);
            return [...acc, ...data3];
          } else {
            return [
              ...acc,
              {
                title: curr.title,
                name: curr.name,
                link: curr.link,
                desc: curr.desc,
                icon,
              },
            ];
          }
        }, [] as TPageInfo[]);
        return [...acc, ...data2];
      } else {
        return [];
      }
    }, [] as TPageInfo[]);
    const pageInfo = data.find((val) => val.link === pathname);
    if (pageInfo) {
      setPageInfo(pageInfo);
    }
  }, [pathname]);

  return (
    <El.Main>
      <El.PageInfo>
        {pageInfo && (
          <>
            <El.IconWrapper>{IconsControl(pageInfo.icon)}</El.IconWrapper>
            <El.TextInfo>
              <h1 className="title">{pageInfo.title}</h1>
              <h1 className="desc">{pageInfo.desc}</h1>
            </El.TextInfo>
          </>
        )}
      </El.PageInfo>
    </El.Main>
  );
};

export default SectionInfo;
