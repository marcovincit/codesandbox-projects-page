export const Avatar1 = (props) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <mask
      id="mask0_1137_62976"
      maskUnits="userSpaceOnUse"
      x="5"
      y="5"
      width="30"
      height="30"
    >
      <circle cx="20" cy="20" r="15" fill="#C4C4C4" />
    </mask>
    <g mask="url(#mask0_1137_62976)">
      <rect x="5" y="5" width="30" height="30" fill="url(#pattern0)" />
      <circle cx="20" cy="20" r="14" stroke="#7B61FF" stroke-width="2" />
    </g>
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_1137_62976" transform="scale(0.00217391)" />
      </pattern>

      <image
        id="image0_1137_62976"
        width={460}
        height={460}
        href="/images/product/user1.jpg"
      />
    </defs>
  </svg>
);
