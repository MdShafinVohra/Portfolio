export default function Head1({ text, specialText, className }) {
  return (
    <h1 className={`text-5xl ${className}`}>
      {text} <span className="text-color-2 font-bold">{specialText}</span>{" "}
    </h1>
  );
}
