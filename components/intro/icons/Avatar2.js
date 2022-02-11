export const Avatar2 = (props) => (
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
      <circle cx={20} cy={20} r={14} stroke="#00B2FF" strokeWidth={2} />
    </g>
    <rect x={22} y={21.249} width={18} height={18} rx={9} fill="#0F0E0E" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.06 36.44a.71.71 0 0 0 .569-.022l2.358-1.142a.72.72 0 0 0 .405-.648V26.89a.72.72 0 0 0-.405-.649L33.629 25.1a.71.71 0 0 0-.814.14l-4.514 4.141-1.966-1.501a.475.475 0 0 0-.609.027l-.63.577a.482.482 0 0 0-.001.71L26.8 30.76l-1.705 1.564a.482.482 0 0 0 0 .71l.631.577c.17.156.426.167.61.028l1.965-1.502 4.514 4.142a.713.713 0 0 0 .246.162Zm.47-8.296-3.424 2.615 3.425 2.615v-5.23Z"
      fill="#209EF0"
    />
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
