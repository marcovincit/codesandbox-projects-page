export const Avatar3 = (props) => (
  <svg
    width="3.2rem"
    height="3.2rem"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={18}
      cy={18}
      r={15}
      stroke="#FF9900"
      strokeWidth={2}
      fill="url(#user3branch)"
    />
    <circle cx="27" cy="27" r="9" fill="#0F0E0E" />
    <path
      d="M29.875 21.0057L24.1458 21C23.5156 21 23 21.5156 23 22.1458V32.4583C23 33.0885 23.5156 33.6042 24.1458 33.6042H29.875C30.5052 33.6042 31.0208 33.0885 31.0208 32.4583V22.1458C31.0208 21.5156 30.5052 21.0057 29.875 21.0057ZM29.875 31.3125H24.1458V23.2917H29.875V31.3125Z"
      fill="#999999"
    />

    <defs>
      <pattern
        id="user3branch"
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
