export default function ButtonGray({children}: {children?: React.ReactNode}) {
  return (
    <button className="main-button">
      <div className="main-button__glow"></div>
      <span className="main-button__text uppercase">
        {children}
      </span>
    </button>
  );
}
