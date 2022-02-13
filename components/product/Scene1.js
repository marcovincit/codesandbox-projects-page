import { styled, keyframes } from "@stitches/react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useWindowSize } from "hooks/useWindowSize";
import { useEffect, useState } from "react/cjs/react.development";
import {
  linear,
  easeInQuad,
  easeOutQuad,
  easeInOutQuad,
  easeInOutCubic,
  easeOutCubic,
  easeInCubic,
} from "utils/easing";

export const Scene1 = (props) => {
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
    [keyframe(0.5), keyframe(1.25), keyframe(2)],
    ["72px", "36px", "0px"],
    {
      ease: [easeInOutCubic, easeInOutCubic],
    }
  );

  const devtoolsScale = useTransform(
    scrollY,
    [keyframe(2.2), keyframe(2.8)],
    [1, 0],
    {
      ease: [easeInOutCubic],
    }
  );

  // avatar 1
  const avatar1X = useTransform(
    scrollY,
    [keyframe(0.5), keyframe(1.25), keyframe(2)],
    ["72px", "36px", "0px"],
    {
      ease: [easeInOutCubic, easeInOutCubic],
    }
  );

  const avatar1CircleScale = useTransform(
    scrollY,
    [keyframe(2.2), keyframe(2.6)],
    [1, 0],
    {
      ease: [easeInCubic],
    }
  );

  const avatar1Scale = useTransform(
    scrollY,
    [keyframe(2.2), keyframe(2.6)],
    [1, 0],
    {
      ease: [easeInOutCubic],
    }
  );

  // avatar 2
  const avatar2Opacity = useTransform(
    scrollY,
    [keyframe(0.5), keyframe(1.25), keyframe(5), keyframe(5) + 10],
    [0, 1, 1, 0]
  );

  const avatar2X = useTransform(
    scrollY,
    [keyframe(1.25), keyframe(2)],
    ["36px", "0px"],
    {
      ease: [easeInOutCubic],
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
    [keyframe(1), keyframe(1.25), keyframe(2.2), keyframe(2.8)],
    [0, 1, 1, 0],
    {
      ease: [easeOutCubic, linear, easeInOutCubic],
    }
  );

  // avatar 3
  const avatar3CircleScale = useTransform(
    scrollY,
    [keyframe(1.25), keyframe(2), keyframe(2.6), keyframe(2.8)],
    [0, 1, 1, 0],
    {
      ease: [easeOutCubic, linear, easeInCubic],
    }
  );

  const avatar3Scale = useTransform(
    scrollY,
    [keyframe(1.25), keyframe(2), keyframe(2.5), keyframe(2.8)],
    [0, 1, 1, 0],
    {
      ease: [easeInOutCubic, linear, easeInOutCubic],
    }
  );

  const avatar3IconScale = useTransform(
    scrollY,
    [keyframe(1.75), keyframe(2), keyframe(2.2), keyframe(2.6)],
    [0, 1, 1, 0],
    {
      ease: [easeOutCubic, linear, easeInCubic],
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
        willChange: "transform",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "auto",
      }}
    >
      {/* HEADER AVATAR 3 - MOBILE */}
      <motion.g
        style={{
          willChange: "opacity,transform",
          opacity: avatar3CircleScale,
          scale: avatar3CircleScale,
        }}
      >
        <motion.g
          style={{
            willChange: "transform",
          }}
        >
          <circle cx={1246.8} cy={23} r={12} fill="#F90" />
        </motion.g>

        <motion.g
          style={{
            willChange: "transform",
            scale: avatar3Scale,
          }}
        >
          <circle cx={1246.8} cy={23} r={10.5} fill="url(#user3)" />
        </motion.g>

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
          opacity: avatar2Opacity,
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
          r={12}
          fill="url(#user2)"
          stroke="#00B2FF"
          strokeWidth={1.5}
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
          scale: avatar1CircleScale,
        }}
      >
        <circle cx={1175} cy={23} r={12} fill="#7B61FF" />
        <motion.circle
          style={{
            willChange: "transform",
            scale: avatar1Scale,
          }}
          cx={1175}
          cy={23}
          r={12}
          stroke="#7B61FF"
          strokeWidth={1.5}
          fill="url(#user1)"
        />
      </motion.g>

      {/* HEADER DEVTOOLS BUTTON + */}
      <motion.path
        style={{
          willChange: "transform",
          x: devtoolsX,
          scale: devtoolsScale,
        }}
        d="M1104.5 24h14m-7-7v14"
        stroke="#999"
        strokeLinecap="round"
      />

      {/* DEFS */}

      <defs>
        <pattern
          id="user1"
          x={0}
          y={0}
          height="100%"
          width="100%"
          viewBox="0 0 24 24"
        >
          <image
            x={0}
            y={0}
            width={24}
            height={24}
            xlinkHref="images/screenshots/avatars/user1.jpg"
          />
        </pattern>

        <pattern
          id="user2"
          x={0}
          y={0}
          height="100%"
          width="100%"
          viewBox="0 0 24 24"
        >
          <image
            x={0}
            y={0}
            width={24}
            height={24}
            xlinkHref="images/screenshots/avatars/user2.jpg"
          />
        </pattern>

        <pattern
          id="user3"
          x={0}
          y={0}
          height="100%"
          width="100%"
          viewBox="0 0 24 24"
        >
          <image
            x={0}
            y={0}
            width={24}
            height={24}
            xlinkHref="images/screenshots/avatars/user3.jpg"
          />
        </pattern>
      </defs>
    </svg>
  );
};
