export const Avatar1 = (props) => (
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
      stroke="#7B61FF"
      strokeWidth={2}
      fill="url(#user1branch)"
    />
    <defs>
      <pattern
        id="user1branch"
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
    </defs>
  </svg>
);
