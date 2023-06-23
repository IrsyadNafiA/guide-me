import Button from "./Button";

function CardLocation(props) {
  return (
    <div className="flex bg-white w-full h-10 items-center justify-between px-10">
      <img src="" alt="ini gambar" />
      <p className="text-lg font-extrabold">{props.title}</p>
      <Button title="See More" class="hover:bg-black/80" link="#" />
    </div>
  );
}

export default CardLocation;