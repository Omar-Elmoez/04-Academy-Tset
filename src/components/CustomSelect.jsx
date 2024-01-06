/* eslint-disable react/prop-types */
export default function CustomSelect({ name, placeholder, chosen, options, className, register, label }) {

  const chosenValue = options.find(option => option === chosen);

  return (
    <>
      {label && <label className="default-label-style">{label}</label>}
      <select name={name} {...register} className={`default-input-style ${className}`} defaultValue={chosenValue}>
        {placeholder && <option value="" disabled selected>{placeholder}</option>}
        {options.map(option => (
          <option key={option} value={option} className="capitalize">{option}</option>
        ))}
      </select>
    </>
  );
}