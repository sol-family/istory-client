import { NextResponse, userAgent } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const apiUrl =
      "http://ec2-43-201-221-63.ap-northeast-2.compute.amazonaws.com:8080/api/v1/user/login";

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        user_id: email,
        user_pw: password,
      }),
    });

    const contentType = response.headers.get("Content-Type");

    let responseData;
    if (contentType && contentType.includes("application/json")) {
      responseData = await response.json();
    } else {
      responseData = await response.text();
    }

    if (!response.ok) {
      // 에러 메시지가 객체일 경우, 문자열로 변환
      const errorMessage =
        typeof responseData === "object"
          ? JSON.stringify(responseData)
          : responseData;

      return NextResponse.json(
        { error: "Error: " + errorMessage },
        { status: response.status }
      );
    }

    return NextResponse.json(
      {
        message: "로그인이 성공했습니다.",
        data: responseData,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "로그인 중 오류가 발생했습니다 : " + error.message },
      { status: 500 }
    );
  }
}
