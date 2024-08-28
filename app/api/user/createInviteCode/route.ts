import { NextResponse } from "next/server";
import { BASE_URL } from "../../base_url";
import { getAccessToken } from "@/app/utils/localAccessToken";

export async function GET() {
  const apiUrl = `${BASE_URL}/family/invite-code`;
  const accessToken = getAccessToken();

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: "include",
    });

    if (!response.ok) {
      console.error("사용자 상태를 가져오는데 실패했습니다.");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("사용자 상태 불러오는데, 문제가 생겼슈", error);
    return NextResponse.json(
      { error: "Failed to connect to API", message: error.message },
      { status: 500 }
    );
  }
}
