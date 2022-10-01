import React from 'react';

const Select = ({ label, name, options, onChange }) => {
  return (
    <>
      <div>{label}</div>
      <select name={name} onChange={onChange}>
        {options?.map((item) => (
          <option key={item.id} value={item.id}>
            {item.brandName}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
