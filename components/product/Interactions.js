import { styled, keyframes } from "@stitches/react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useWindowSize } from "hooks/useWindowSize";
import {
  linear,
  easeInQuad,
  easeOutQuad,
  easeInOutQuad,
  easeInOutCubic,
  easeOutCubic,
  easeInCubic,
} from "utils/easing";

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
  ${currentCursorKeyframesY} 8s 2s steps(2, end) infinite alternate forwards
  `,
});

const CurrentUserPointer = styled("g", {
  animation: `
  ${currentCursorKeyframesX} 5s 4s steps(6, jump-end) infinite alternate forwards
  `,
});

// USER 2 CURSOR (VSCODE) BLUE

const cursor2PointerKeyframes = keyframes({
  "0%": { transform: "translateX(0px)" },
  "10%": { transform: "translateX(-48px)" },
});

const Cursor2Pointer = styled("g", {
  animation: `${cursor2PointerKeyframes} 6s steps(3, start) infinite alternate forwards`,
});

// USER 3 CURSOR (MOBILE) ORANGE
const cursor3KeyframesX = keyframes({
  "0%": { transform: "translateX(-47px)" },
  "20%": { transform: "translateX(-47px)" },
  "30%": { transform: "translateX(0px)" },
  "100%": { transform: "translateX(0px)" },
});

const Cursor3PointerX = styled("g", {
  animation: `
  ${cursor3KeyframesX} 5s steps(6, jump-end) infinite alternate forwards
  `,
});

const cursor3KeyframesY = keyframes({
  "0%": { transform: "translateY(0px)" },
  "100%": { transform: "translateY(48px)" },
});

const Cursor3PointerY = styled("g", {
  animation: `
  ${cursor3KeyframesY} 5s steps(2, end) infinite alternate forwards
  `,
});

const avatar3KeyframesY = keyframes({
  "0%": { transform: "translateY(0px)" },
  "25%": { transform: "translateY(0px)" },
  "28%": { transform: "translateY(24px)" },

  "50%": { transform: "translateY(24px)" },

  "75%": { transform: "translateY(24px)" },
  "78%": { transform: "translateY(0px)" },
  "100%": { transform: "translateY(0px)" },
});

const Avatar3PointerY = styled("g", {
  animation: `
  ${avatar3KeyframesY} 10s ease infinite forwards
  `,
});

export const Interactions = (props) => {
  const { scrollY } = useViewportScroll();

  const windowSize = useWindowSize();
  const windowHeight = windowSize.height;

  // keyframe
  const keyframe = (value) => {
    return windowHeight * value;
  };

  // devtools
  const devtoolsX = useTransform(
    scrollY,
    [keyframe(0.5), keyframe(1.25), keyframe(2), keyframe(2.75)],
    ["72px", "36px", "0px", "0px"],
    {
      ease: [easeInOutCubic, easeInOutCubic, easeInOutCubic],
    }
  );

  // avatar 1
  const avatar1X = useTransform(
    scrollY,
    [keyframe(0.5), keyframe(1.25), keyframe(2), keyframe(2.75)],
    ["72px", "36px", "0px", "0px"],
    {
      ease: [easeInOutCubic, easeInOutCubic, easeInOutCubic],
    }
  );

  // avatar 2
  const avatar2X = useTransform(
    scrollY,
    [keyframe(1.25), keyframe(2), keyframe(2.75)],
    ["36px", "0px", "0px"],
    {
      ease: [easeInOutCubic, easeInOutCubic],
    }
  );

  const avatar2Scale = useTransform(
    scrollY,
    [keyframe(0.5), keyframe(1.25)],
    [0, 1],
    {
      ease: [easeInOutCubic],
    }
  );

  const avatar2CircleScale = useTransform(
    scrollY,
    [keyframe(0.5), keyframe(1.25)],
    [0, 1],
    {
      ease: [easeInOutCubic],
    }
  );

  const avatar2IconScale = useTransform(
    scrollY,
    [keyframe(1), keyframe(1.25)],
    [0, 1],
    {
      ease: [easeOutCubic],
    }
  );

  // avatar 3
  const avatar3CircleScale = useTransform(
    scrollY,
    [keyframe(1.25), keyframe(2)],
    [0, 1],
    {
      ease: [easeOutCubic],
    }
  );

  const avatar3Scale = useTransform(
    scrollY,
    [keyframe(1.25), keyframe(2)],
    [0, 1],
    {
      ease: [easeInOutCubic],
    }
  );

  const avatar3IconScale = useTransform(
    scrollY,
    [keyframe(1.75), keyframe(2)],
    [0, 1],
    {
      ease: [easeOutCubic],
    }
  );

  // CURSOR
  const cursorOpacity = useTransform(
    scrollY,
    [keyframe(6.5), keyframe(7.5), keyframe(8.7), keyframe(8.7) + 1],
    [0, 1, 1, 0],
    {
      ease: [easeInOutQuad, linear, linear],
    }
  );

  const cursorX = useTransform(
    scrollY,
    [keyframe(7), keyframe(8)],
    ["0px", "620px"],
    {
      ease: [easeInOutQuad],
    }
  );

  const cursorY = useTransform(
    scrollY,
    [keyframe(7), keyframe(8)],
    ["0px", "-178px"],
    {
      ease: [easeOutQuad],
    }
  );

  const cursorScale = useTransform(
    scrollY,
    [keyframe(7.9), keyframe(8.3), keyframe(8.5)],
    [1.5, 2, 1.5],
    {
      ease: [easeInQuad, easeOutQuad],
    }
  );

  // BUTTON SHARE

  const buttonShareOpacity = useTransform(
    scrollY,
    [keyframe(7.75), keyframe(7.8), keyframe(7.9)],
    [0, 1, 0],
    {
      ease: [linear, linear],
    }
  );

  // BUTTON FORK

  const buttonForkOpacity = useTransform(
    scrollY,
    [keyframe(7.9), keyframe(8), keyframe(8.7), keyframe(8.7)],
    [0, 1, 1, 0],
    {
      ease: [linear, linear, linear],
    }
  );

  const buttonForkStrokeOpacity = useTransform(
    scrollY,
    [keyframe(8.3), keyframe(8.5), keyframe(8.7)],
    [0, 0.1, 0],
    {
      ease: [easeInQuad, easeOutQuad],
    }
  );

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
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "auto",
      }}
    >
      {/* MOUSE CURSOR ARROW */}
      <motion.g
        style={{
          willChange: "transform, opacity",
          x: cursorX,
          y: cursorY,
          scale: cursorScale,
          opacity: cursorOpacity,
        }}
      >
        <path
          d="M767 206v16.015l3.225-3.131 2.254 5.34 3.605-1.535-2.1-5.07h4.607L767 206Z"
          fill="#fff"
        />
        <path
          d="M768 219.595v-11.188l8.165 8.183h-3.694l2.28 5.419-1.844.774-2.37-5.637-2.537 2.449Z"
          fill="#000"
        />
      </motion.g>

      {/* FORK BUTTON */}
      <motion.rect
        x={1366}
        y={10}
        width={44}
        height={28}
        rx={4}
        fill="#fff"
        fillOpacity={0.09}
        stroke="#fff"
        strokeOpacity={0.05}
        style={{
          willChange: "opacity, stroke-opacity",
          opacity: buttonForkOpacity,
          strokeOpacity: buttonForkStrokeOpacity,
        }}
      />

      {/* SHARE BUTTON */}

      <motion.rect
        x={1304}
        y={10}
        width={52}
        height={28}
        rx={4}
        fill="#fff"
        fillOpacity={0.09}
        style={{ willChange: "opacity", opacity: buttonShareOpacity }}
      />

      {/* EDITOR CURSOR 2 - VSCODE USER   */}
      <g>
        <Cursor2Pointer>
          <rect x={555} y={460} width={2} height={20} fill="#00A3FF" />
        </Cursor2Pointer>

        <circle
          cx={223}
          cy={468}
          r={9}
          fill="url(#user2pic)"
          stroke="#00B2FF"
          strokeWidth={1.125}
        />
      </g>

      {/* EDITOR CURSOR 3 - MOBILE USER   */}
      <g>
        <Cursor3PointerX>
          <rect x={396} y={290} width={300} height={20} fill="#151515" />
          <path
            d="M399.971 302.807C400.175 302.807 400.36 302.856 400.524 302.953C400.688 303.047 400.817 303.176 400.911 303.34C401.004 303.5 401.051 303.678 401.051 303.873C401.051 304.038 401.031 304.202 400.991 304.367C400.951 304.531 400.884 304.716 400.791 304.92L399.711 307.393H398.697L399.337 304.76C399.204 304.662 399.097 304.536 399.017 304.38C398.942 304.22 398.904 304.051 398.904 303.873C398.904 303.678 398.951 303.5 399.044 303.34C399.137 303.176 399.264 303.047 399.424 302.953C399.588 302.856 399.771 302.807 399.971 302.807Z"
            fill="#86897A"
          />
          <Cursor3PointerY>
            <rect x={396} y={290} width={2} height={20} fill="#F90" />
          </Cursor3PointerY>
        </Cursor3PointerX>

        <Avatar3PointerY>
          <rect x={214} y={291} width={18} height={18} rx={9} fill="url(#i)" />
          <rect
            x={214.562}
            y={291.562}
            width={16.875}
            height={16.875}
            rx={8.438}
            stroke="#F90"
            strokeWidth={1.125}
          />
        </Avatar3PointerY>
      </g>

      {/* EDITOR CURSOR - CURRENT USER   */}
      <CurrentUserCursorGroup>
        <rect
          id="highlight"
          x="276"
          y="649"
          width="550"
          height="24"
          fill="white"
          fillOpacity="0.03"
        />
        <CurrentUserPointer>
          <rect x="379" y="651" width="1" height="20" fill="#AEAFAD">
            <animate
              attributeName="fill-opacity"
              values="1;0;1"
              dur="1s"
              repeatCount="indefinite"
            />
          </rect>
        </CurrentUserPointer>
      </CurrentUserCursorGroup>

      {/* HEADER AVATAR 3 - MOBILE */}
      <motion.g
        style={{
          willChange: "opacity",
          opacity: avatar3CircleScale,
        }}
      >
        <motion.circle
          style={{
            willChange: "transform",
            scale: avatar3CircleScale,
          }}
          cx={1246.8}
          cy={23}
          r={12}
          fill="#F90"
        />
        <motion.circle
          style={{
            willChange: "transform",
            scale: avatar3Scale,
          }}
          cx={1246.8}
          cy={23}
          r={10.5}
          fill="url(#f)"
        />

        <motion.g style={{ willChange: "transform", scale: avatar3IconScale }}>
          <circle cx={1257.25} cy={31.5} r={7.5} fill="#0F0E0E" />
          <path
            xmlns="http://www.w3.org/2000/svg"
            id="Union"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1254.25 28.125C1254.25 27.2966 1254.92 26.625 1255.75 26.625H1258.75C1259.58 26.625 1260.25 27.2966 1260.25 28.125V34.875C1260.25 35.7034 1259.58 36.375 1258.75 36.375H1255.75C1254.92 36.375 1254.25 35.7034 1254.25 34.875V28.125ZM1259.25 28.3125H1255.25V34.6875H1259.25V28.3125Z"
            fill="#999999"
          />
        </motion.g>
      </motion.g>

      {/* HEADER AVATAR 2 - VSCODE USER */}
      <motion.g
        style={{
          willChange: "transform, opacity",
          x: avatar2X,
          opacity: avatar2Scale,
          scale: avatar2CircleScale,
        }}
      >
        <circle cx={1210.5} cy={23} r={12} fill="#00B2FF" />
        <motion.circle
          style={{
            willChange: "transform",
            scale: avatar2Scale,
          }}
          cx={1210.5}
          cy={23}
          r={10.5}
          fill="url(#d)"
        />

        {/* VSCODE ICON */}
        <motion.g style={{ willChange: "transform", scale: avatar2IconScale }}>
          <circle cx={1220.5} cy={31.5} r={7.5} fill="#0F0E0E" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1222.33 36.301c.16.064.35.06.51-.02l2.13-1.03a.643.643 0 0 0 .37-.585V27.68c0-.25-.14-.477-.37-.586l-2.13-1.03a.629.629 0 0 0-.65.06.363.363 0 0 0-.08.066l-4.07 3.74-1.78-1.356a.428.428 0 0 0-.55.025l-.57.52a.431.431 0 0 0 0 .641l1.54 1.413-1.54 1.412a.431.431 0 0 0 0 .641l.57.521c.15.14.38.15.55.025l1.78-1.355 4.07 3.739a.61.61 0 0 0 .22.145Zm.43-7.489-3.1 2.36 3.1 2.362v-4.722Z"
            fill="#209EF0"
          />
        </motion.g>
      </motion.g>

      {/* HEADER AVATAR 1 - CURRENT USER */}
      <motion.g
        style={{
          willChange: "transform",
          x: avatar1X,
        }}
      >
        <circle
          cx={1175}
          cy={23}
          r={12}
          stroke="#7B61FF"
          strokeWidth={1.5}
          fill="url(#b)"
        />
      </motion.g>

      {/* HEADER DEVTOOLS BUTTON + */}
      <motion.path
        style={{
          willChange: "transform",
          x: devtoolsX,
        }}
        d="M1104.5 24h14m-7-7v14"
        stroke="#999"
        strokeLinecap="round"
      />

      {/* DEFS */}

      <defs>
        <pattern
          id="b"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#k" transform="scale(.01042)" />
        </pattern>
        <pattern
          id="d"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#l" transform="scale(.01042)" />
        </pattern>
        <pattern
          id="f"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#m" transform="scale(.01042)" />
        </pattern>
        <pattern
          id="user2pic"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#l" transform="scale(.01042)" />
        </pattern>
        <pattern
          id="i"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#m" transform="scale(.01042)" />
        </pattern>

        <image id="k" xlinkHref="images/screenshots/avatars/user1.jpg" />
        <image id="l" xlinkHref="images/screenshots/avatars/user2.jpg" />
        <image id="m" xlinkHref="images/screenshots/avatars/user3.jpg" />
      </defs>
    </svg>
  );
};
