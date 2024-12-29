import img1 from "../assets/images/myImg.jpg";

export default function Hero() {
  return (
    <section className="grid min-h-screen bg-color-1 grid-cols-2">
      <h1 className="text-4xl text-color-3">Hello! I am Mahammad Shafin</h1>
      <img className="h-screen w-full object-cover " src={img1} alt="my image" />
    </section>
  );
}
