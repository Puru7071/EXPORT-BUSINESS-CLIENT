import React from 'react'
import Header from '../utils-components/Header'
import { headers } from 'next/headers';
import { getDesktopInfo } from '../utils/util-functions';


export default async function Layout({ children }: { children: React.ReactNode }) {
  const headerList = await headers();
  const userAgent = headerList.get("user-agent") || "";

  const { isDesktop, desktopOS } = getDesktopInfo(userAgent);

  console.log("desktopOS : ", desktopOS);

  return (
    <div className={desktopOS === 'macOS' ? "" : "zoom-85"}>
      <Header isLayout={true} />
      <div className="relative pt-24">
        {children}
      </div>
    </div>
  );
}
