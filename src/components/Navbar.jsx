import { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
export default function Navbar({ navArray }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  let listClasses = "text-color-3 list-none hover:text-color-2 transition-all duration-500";

  function handleNavClick() {
    setIsNavOpen((prevState) => !prevState);
  }

  return (
    <header className="group h-10 flex justify-around items-center bg-gradient-to-r from-color-1 pt-1 to-color-5 bg-[length:200%_100%] hover:bg-[length:100%_100%] transition-all duration-1000">
      <a href="#" className="text-xl text-color-3 w-1/5 group-hover:text-color-2 transition-all duration-1000 font-bold">
        Shafin
      </a>

      <nav className="w-2/5">
        <ul
          className={` ${
            isNavOpen ? "flex" : "hidden"
          } md:flex justify-around items-end md:items-center h-full w-full flex-col md:flex-row relative md:static top-32`}
        >
          {navArray.map((item, itemIndex) => (
            <a key={itemIndex} href={item.href} className="my-3 md:bg-transparent">
              <li className={`${listClasses} text-white shadow shadow-color-2 px-3 md:px-0 md:shadow-none w-28 md:w-auto`}>{item.text}</li>
            </a>
          ))}
        </ul>
      </nav>
      <div className="md:hidden" onClick={handleNavClick}>
        <TfiMenu size={20} color="black" />
      </div>
    </header>
  );
}
