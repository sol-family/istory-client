"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import MakeInviteCode from "../sections/invite/MakeInviteCode";
import WaitingInvite from "../sections/invite/WaitingInvite";
import MakeAccount from "../sections/mkAccount/MakeAccount";

export default function InvitePage() {
  const [step, setStep] = useState<number>(1);
  const [inviteCode, setInviteCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <main className="w-full flex-1 flex flex-col justify-between items-center bg-home-bg overflow-x-hidden py-[56px]">
      {step == 1 && (
        <MakeInviteCode
          step={step}
          setStep={setStep}
          loading={loading}
          setLoading={setLoading}
          inviteCode={inviteCode}
          setInviteCode={setInviteCode}
        />
      )}
      {step == 2 && <WaitingInvite />}
    </main>
  );
}
