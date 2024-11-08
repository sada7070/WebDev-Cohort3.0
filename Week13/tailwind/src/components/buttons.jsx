export const Button = ({ disabled, children, onClick }) => {
  return (
    <span
      onClick={onClick}
      className={`rounded-xl px-24 py-4 text-white cursor-pointer ${
        disabled ? "bg-blue-300" : "bg-green-500"}`}
    >
      {children}
    </span>
  );
};
