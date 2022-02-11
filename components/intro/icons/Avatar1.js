export const Avatar1 = (props) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask id="a" maskUnits="userSpaceOnUse" x={5} y={5} width={30} height={30}>
      <circle cx={20} cy={20} r={15} fill="#C4C4C4" />
    </mask>
    <g mask="url(#a)">
      <path fill="url(#b)" d="M5 5h30v30H5z" />
      <circle cx={20} cy={20} r={14} stroke="#7B61FF" strokeWidth={2} />
    </g>
    <defs>
      <pattern
        id="b"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use transform="scale(.00217)" />
      </pattern>
    </defs>
  </svg>
);
