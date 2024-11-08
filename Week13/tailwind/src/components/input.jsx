export const Input = ({ onClick, type, placeholder }) => {
  return (
    <span
      onClick={onClick}
      className={`rounded-xl  px-2 py-2 text-white bg-blue-500`}
    >
      <input type={type} placeholder={placeholder} className="bg-blue-500 outline-none"></input>
    </span>
  );
};
