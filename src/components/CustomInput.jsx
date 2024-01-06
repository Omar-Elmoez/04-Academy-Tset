/* eslint-disable react/prop-types */
export default function CustomInput({ label, id, className, type = "text", prefer, name, register, placeholder }) {
  return (
    <p className={className}>
      {label && <label htmlFor={id} className="default-label-style">{label}{prefer && <span className="text-black normal-case"> (preferably <span className="underline">the {prefer}</span>)</span>}</label>}
      <input type={type} id={id} className="default-input-style" name={name} {...register} placeholder={placeholder} />
    </p>
  )
}