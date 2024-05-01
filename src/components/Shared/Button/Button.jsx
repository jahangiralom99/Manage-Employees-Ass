/* eslint-disable react/prop-types */
const Button = ({ name, title, buttonName }) => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="font-semibold">{title}</p>
      </div>
      <button className="bg-[#ff902f] rounded-full text-white font-bold px-4">
        {buttonName}
      </button>
    </div>
  );
};

export default Button;
