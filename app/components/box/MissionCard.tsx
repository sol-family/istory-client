import React from "react";
import Image from "next/image";
import Link from "next/link";

interface MissionCardProps {
  userName: string;
  userImageUrl: string;
  thoughts: string;
  isMe: boolean;
}

const MissionCard = ({
  userName,
  userImageUrl,
  thoughts,
  isMe,
}: MissionCardProps) => {
  return (
    <div className="w-full min-h-[200px] flex flex-col justify-start items-start gap-y-2.5 py-1 px-1.5">
      <div className="w-full flex flex-row justify-start items-center gap-x-3">
        <div className="relative w-10 h-10 overflow-hidden rounded-full border border-[#B3B3B3]">
          <Image src={userImageUrl} alt="사용자 프로필 이미지" fill />
        </div>
        <h5 className="text-[#1A2128] font-semibold text-xl tracking-tight">
          {userName}
        </h5>
      </div>
      <div className="w-full">
        {isMe ? (
          thoughts ? (
            <Link href="/box/log">
              <p className="text-[#1A2128] tracking-tight leading-5 font-normal text-sm">
                {thoughts}
              </p>
            </Link>
          ) : (
            <Link href="/box/log">
              <p className="text-[#1A2128] tracking-tight leading-5 font-normal text-sm">
                이곳을 눌러 답변을 입력해주세요.
              </p>
            </Link>
          )
        ) : (
          <p className="text-[#B3B3B3] tracking-tight leading-5 font-normal text-sm">
            상대방의 답변을 기다리는 중입니다.
          </p>
        )}
      </div>
    </div>
  );
};

export default MissionCard;
