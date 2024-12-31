export default function Button({ text, hrefLink, type }) {
  let buttonClasses = "rounded px-4 py-2 ";
  buttonClasses = buttonClasses + (type === "primary" ? "bg-color-4" : "bg-color-5");

  return (
    <a href={hrefLink}>
      <button className={buttonClasses}>{text}</button>
    </a>
  );
}
