export default function Navbar({ navArray }) {
  let listClasses = "text-color-3 list-none hover:text-color-2 transition-all duration-500";

  return (
    <header className="group h-10 flex justify-around items-center bg-gradient-to-br from-color-1 to-color-5 bg-[length:100%_100%] hover:bg-[length:200%_100%] transition-all duration-1000">
      <h1 className="text-lg text-color-3 w-1/5 font-medium group-hover:text-color-2 transition-all duration-1000">My PortFolio</h1>
      <ul className=" flex justify-around items-center h-full w-2/5">
        {navArray.map((item, itemIndex) => (
          <a key={itemIndex} href={item.href}>
            <li className={listClasses}>{item.text}</li>
          </a>
        ))}
      </ul>
    </header>
  );
}
