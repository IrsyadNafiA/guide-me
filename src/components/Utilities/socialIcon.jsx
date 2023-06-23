function SocialIcon(props) {
  return (
    <a
      href={props.link}
      className="bg-[#fff] rounded-full p-2 hover:bg-slate-200"
    >
      <img src={`${props.icon}`} alt={props.alt} />
    </a>
  );
}

export default SocialIcon;
