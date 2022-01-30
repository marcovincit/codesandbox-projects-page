export const Avatar3 = (props) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={5}
      y={5}
      width={30}
      height={30}
    >
      <circle cx={20} cy={20} r={15} fill="#C4C4C4" />
    </mask>
    <g mask="url(#a)">
      <path fill="url(#b)" d="M4.998 5h30v30h-30z" />
      <circle cx={20} cy={20} r={14} stroke="#F90" strokeWidth={2} />
    </g>
    <rect x={22} y={20} width={18} height={18} rx={9} fill="#0F0E0E" />
    <path
      d="m33.5 23.505-5-.005c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.995-1-.995Zm0 8.995h-5v-7h5v7Z"
      fill="#999"
    />
    <defs>
      <pattern
        id="b"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#c" transform="scale(.0052)" />
      </pattern>
      <image id="c" width={192} height={192} href="/images/product/user3.jpg" />
    </defs>
  </svg>
);
