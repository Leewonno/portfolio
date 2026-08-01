import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "이원노 | 프론트엔드 엔지니어";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const pretendard = await readFile(
    join(process.cwd(), "src/assets/fonts/Pretendard-OG.otf"),
  );

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        backgroundColor: "#ffffff",
        padding: "0 96px",
      }}
    >
      {/* Hero의 hero-box 모티프 */}
      <div
        style={{
          position: "absolute",
          top: 96,
          right: 96,
          width: 96,
          height: 96,
          borderRadius: 20,
          backgroundColor: "rgba(219, 234, 254, 0.6)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 140,
          right: 140,
          width: 96,
          height: 96,
          borderRadius: 20,
          backgroundColor: "rgba(219, 234, 254, 0.6)",
        }}
      />

      <div
        style={{
          display: "flex",
          fontSize: 40,
          letterSpacing: 4,
          color: "#99a1af",
        }}
      >
        FRONTEND ENGINEER
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 28,
          fontSize: 88,
          letterSpacing: -2,
          color: "#1e2939",
        }}
      >
        이원노
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 24,
          fontSize: 48,
          color: "#4a5565",
        }}
      >
        흐름이 끊기지 않는 웹을 개발합니다.
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Pretendard",
          data: pretendard,
          weight: 600,
          style: "normal",
        },
      ],
    },
  );
}
