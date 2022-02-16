import { styled, keyframes } from "@stitches/react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useWindowSize } from "hooks/useWindowSize";
import { linear, easeInQuad, easeOutQuad, easeInOutQuad } from "utils/easing";

// USER CURRENT CURSOR
const currentCursorKeyframesX = keyframes({
  "0%": { transform: "translateX(-47px)" },
  "20%": { transform: "translateX(-47px)" },
  "30%": { transform: "translateX(0px)" },
  "100%": { transform: "translateX(0px)" },
});

const currentCursorKeyframesY = keyframes({
  "0%": { transform: "translateY(1px)" },
  "20%": { transform: "translateY(-48px)" },
});

const CurrentUserCursorGroup = styled("g", {
  animation: `
  ${currentCursorKeyframesY} 10s 10s steps(2, end) infinite alternate forwards
  `,
});

const CurrentUserPointer = styled("g", {
  animation: `
  ${currentCursorKeyframesX} 6s 5s steps(6, jump-end) infinite alternate forwards
  `,
});

export const Scene3 = (props) => {
  return (
    <svg
      width={1440}
      height={810}
      viewBox="0 0 1440 810"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
      style={{
        willChange: "transform",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "auto",
      }}
    >
      <rect width={1440} height={48} rx={6} fill="#151515" />
      <path
        d="M13.437 19.75a.5.5 0 0 0 0 1v-1Zm13.125 1a.5.5 0 1 0 0-1v1ZM13.437 23.5a.5.5 0 0 0 0 1v-1Zm13.125 1a.5.5 0 1 0 0-1v1Zm-13.125 2.75a.5.5 0 1 0 0 1v-1Zm6.125 1a.5.5 0 1 0 0-1v1Zm-6.125-7.5h13.125v-1H13.437v1Zm0 3.75h13.125v-1H13.437v1Zm0 3.75h6.125v-1h-6.125v1Z"
        fill="#999"
      />
      <text
        fill="#999"
        xmlSpace="preserve"
        style={{
          whiteSpace: "pre",
        }}
        fontFamily="Inter"
        fontSize={13}
        letterSpacing="0em"
      >
        <tspan x={639.5} y={28.727}>
          {"excalidraw"}
        </tspan>
      </text>
      <path
        d="M716 21a.5.5 0 0 0 0 1v-1Zm4.764 1.134-.466.183.466-.183Zm1.702 4.328-.465.183.465-.183Zm5.846 1.134a.5.5 0 0 0 0-1v1Zm-1.214-3.129a.5.5 0 1 0-.707.707l.707-.707Zm1.852 2.559.353-.354-.353.354Zm0 .141-.354-.354.354.354Zm-2.522 1.814a.5.5 0 0 0 .707.707l-.707-.707ZM724.581 21a.5.5 0 0 0 0 1v-1Zm4.477 1a.5.5 0 0 0 0-1v1ZM716 22h3.833v-1H716v1Zm4.298.317 1.703 4.328.93-.366-1.702-4.328-.931.366Zm3.099 5.28h4.915v-1h-4.915v1Zm-1.396-.952c.225.574.779.951 1.396.951v-1a.501.501 0 0 1-.466-.317l-.93.366ZM719.833 22c.206 0 .39.126.465.317l.931-.366a1.5 1.5 0 0 0-1.396-.951v1Zm6.558 3.174 2.205 2.205.707-.707-2.205-2.205-.707.707Zm2.205 1.64-2.168 2.167.707.707 2.168-2.167-.707-.707Zm0 .565a.4.4 0 0 1 0-.566l.707.708a.6.6 0 0 0 0-.849l-.707.707ZM724.581 22h4.477v-1h-4.477v1Z"
        fill="#999"
      />
      <text
        fill="#999"
        xmlSpace="preserve"
        style={{
          whiteSpace: "pre",
        }}
        fontFamily="Inter"
        fontSize={13}
        letterSpacing="0em"
      >
        <tspan x={738.5} y={28.727}>
          {"marcos"}
        </tspan>
      </text>
      <path
        d="m794.5 24-1.929 1.93a.1.1 0 0 1-.142 0L790.5 24M1151 24h14m-7-7v14"
        stroke="#999"
        strokeLinecap="round"
      />
      <rect x={1212} y={11} width={26} height={26} rx={13} fill="url(#user1)" />
      <rect
        x={1212.75}
        y={11.75}
        width={24.5}
        height={24.5}
        rx={12.25}
        stroke="#7B61FF"
        strokeWidth={1.5}
      />
      <text
        fill="#999"
        xmlSpace="preserve"
        style={{
          whiteSpace: "pre",
        }}
        fontFamily="Inter"
        fontSize={13}
        fontWeight={500}
        letterSpacing="0em"
      >
        <tspan x={1286.05} y={28.727}>
          {"Share"}
        </tspan>
      </text>
      <text
        fill="#999"
        xmlSpace="preserve"
        style={{
          whiteSpace: "pre",
        }}
        fontFamily="Inter"
        fontSize={13}
        fontWeight={500}
        letterSpacing="0em"
      >
        <tspan x={1348.45} y={28.727}>
          {"Open PR"}
        </tspan>
      </text>
      <path
        d="m1422 24-1.93 1.93a.098.098 0 0 1-.14 0L1418 24"
        stroke="#999"
        strokeLinecap="round"
      />
      <path fill="#2A2A2A" d="M939 71h121v18H939z" />
      <text
        fill="#999"
        xmlSpace="preserve"
        style={{
          whiteSpace: "pre",
        }}
        fontFamily="Inter"
        fontSize={11}
        letterSpacing=".01em"
      >
        <tspan x={940} y={84}>
          {"https://sq3fo.csb.app/"}
        </tspan>
      </text>
      <rect x={70} y={60} width={28} height={28} rx={2} fill="#151515" />
      <path
        d="M80.715 79.567a.5.5 0 0 0 1 0h-1Zm5.816-8.352v.5-.5Zm-1.519-.5a.5.5 0 1 0 0 1v-1Zm2.278 1.26h.5-.5Zm-4.297-.76c0 .982-.796 1.778-1.778 1.778v1a2.778 2.778 0 0 0 2.778-2.778h-1Zm-1.778 1.778a1.778 1.778 0 0 1-1.778-1.778h-1a2.778 2.778 0 0 0 2.778 2.778v-1Zm-1.778-1.778c0-.981.796-1.777 1.778-1.777v-1a2.778 2.778 0 0 0-2.778 2.777h1Zm1.778-1.777c.982 0 1.778.796 1.778 1.777h1a2.778 2.778 0 0 0-2.778-2.777v1Zm7.852 7.85c0 .982-.795 1.778-1.777 1.778v1a2.778 2.778 0 0 0 2.777-2.777h-1Zm-1.777 1.778a1.778 1.778 0 0 1-1.778-1.777h-1a2.778 2.778 0 0 0 2.778 2.777v-1Zm-1.778-1.777c0-.982.796-1.778 1.778-1.778v-1a2.778 2.778 0 0 0-2.778 2.778h1Zm1.778-1.778c.981 0 1.777.796 1.777 1.778h1a2.778 2.778 0 0 0-2.777-2.778v1Zm-6.575-2.018v6.074h1v-6.074h-1Zm5.816-2.778h-1.519v1h1.519v-1Zm.259 1.26v3.036h1v-3.036h-1Zm-.26-.26a.26.26 0 0 1 .26.26h1a1.26 1.26 0 0 0-1.26-1.26v1Z"
        fill="#999"
      />

      {/* EDITOR CURSOR - CURRENT USER   */}
      <CurrentUserCursorGroup>
        <rect
          id="highlight"
          x="276"
          y="409"
          width="550"
          height="24"
          fill="white"
          fillOpacity="0.03"
        />
        <CurrentUserPointer>
          <rect x="377.5" y="411.5" width="1" height="20" fill="#AEAFAD">
            <animate
              attributeName="fill-opacity"
              values="1;0;1"
              dur="1s"
              repeatCount="indefinite"
            />
          </rect>
        </CurrentUserPointer>
      </CurrentUserCursorGroup>
    </svg>
  );
};
