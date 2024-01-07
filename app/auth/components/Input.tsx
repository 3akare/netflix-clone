import React from "react";

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type: string;
}
const Input: React.FunctionComponent<InputProps> = ({
  id,
  onChange,
  value,
  label,
  type,
}) => {
  return (
    <div className="relative">
      <input
        id={id}
        className="block rounded-md p-5 pb-2 w-full text-lg text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer"
        placeholder=" "
        value={value}
        type={type}
        onChange={onChange}
        autoComplete="on"
      />
      <label
        htmlFor={id}
        className="absolute text-base text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
        peer-focus:scale-75 peer-focus:-translate-y-3"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
