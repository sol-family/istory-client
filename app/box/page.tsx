import React from "react";

import Header from "../sections/Header";
import MemoryBox from "../sections/box/MemoryBox";

export default function BoxPage() {
  return (
    <>
      <Header isUser={false} isCancel={false} isCheck={false} />
      <main className="w-full flex-1 flex flex-col justify-start items-center bg-home-bg">
        <MemoryBox />
      </main>
    </>
  );
}
