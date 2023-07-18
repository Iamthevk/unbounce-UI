import React from "react";

interface InputProps {
  name: string;
  key: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  required: Boolean;
}

const Input: React.FC<InputProps> = (props) => {
  const { name, placeholder, value, onChange } = props;
  return (
    <div>
      <div className={`flex items-center gap-1`}>
        <input
          name={name}
          className={` w-full border border-black border-opacity-10 py-3 px-4 rounded-md`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
};

export default Input;
