export default function ImageRounded({ image }) {
  return (
    <div className="mb-7 mt-7 rounded-full hover:animate-wiggle md:mr-24 md:mb-0 md:mt-0">
      <img className="rounded-full h-32 w-32 object-cover object-top md:h-96 md:w-96" src={image} alt="my image" />
    </div>
  );
}
