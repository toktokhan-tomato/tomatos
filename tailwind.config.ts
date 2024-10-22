import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", ...defaultTheme.fontFamily.sans],
        recipe: ["Recipekorea", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "heading-1": ["84px", { fontWeight: "800" }],
        "heading-2": ["64px", { fontWeight: "700" }],
        "heading-3": ["48px", { fontWeight: "700" }],
        "heading-4": ["40px", { fontWeight: "600" }],
        "heading-5": ["32px", { fontWeight: "600" }],
        "heading-6": ["24px", { fontWeight: "600" }],
        "heading-7": ["24px", { fontWeight: "400" }],
        "body-1": ["20px", { fontWeight: "600" }],
        "body-2": ["18px", { fontWeight: "500" }],
        "body-3": ["16px", { fontWeight: "400" }],
        "body-3-bold": ["16px", { fontWeight: "600" }],
        "body-4": ["14px", { fontWeight: "400" }],
        "body-5": ["12px", { fontWeight: "400" }],
        "button-1": ["20px", { fontWeight: "600" }],
        "button-2": ["16px", { fontWeight: "600" }],
        "button-3": ["14px", { fontWeight: "500" }],
        "button-4": ["12px", { fontWeight: "500" }],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#ffffff",
        black: "000000",
        gray: {
          100: "#D3D3D3", // 마감 태그 배경, 언더라인 색상
          200: "#A7A7A7",
          300: "#7A7A7A", // 마감 태크, 기간, 더보기 텍스트 색상
          400: "#4E4E4E", // 헤더 공고등록/문의 텍스트 색상
          500: "#222222", // 기본 text 색상
        },
        red: {
          100: "#F9DADA", // HOT/D-00 태그 배경 색상
          500: "#E24444", // 로고 색상
        },
        orange: {},
        yellow: {
          100: "#FCEFDA", // NEW, D-00 태그 배경 색상
          500: "F2AD48", // NEW, D-00 태그 텍스트 색상
        },
        beige: {
          100: "#F5F1DE", // 푸터 배경색
        },
        green: {
          100: "#DBE3DC", // D-00 태그 배경색
          500: "#4A734E", // 버튼 배경색
        },
      },
    },
  },
  plugins: [],
};
export default config;
