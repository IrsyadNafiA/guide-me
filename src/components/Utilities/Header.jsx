function Header(props) {
  return (
    <h1 className="my-4 text-4xl font-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      {props.title}
    </h1>
  );
}

export default Header;
