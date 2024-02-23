/* eslint-disable react/prop-types */
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import { forwardRef } from "react";

const CustomPhoneInput = forwardRef(function CustomPhoneInput(
  { control, prefer, name },
  ref
) {
  return (
    <Controller
      className="mt-4"
      name={name}
      control={control}
      rules={{
        required: "You must provide a phone number",
      }}
      render={({ field }) => (
        <>
          <label
            htmlFor={name}
            className="block mb-2 mt-6 text-sm text-[#b3b1b1] uppercase font-medium"
          >
            login phone number{" "}
            <span className="text-black normal-case">
              (preferably <span className="underline">the {prefer}</span>)
            </span>
          </label>
          <PhoneInput
            className="react-tel-input"
            country={"eg"}
            value={field.value}
            ref={ref}
            onChange={(value, country) => {
              ref.current.value = country.dialCode;
              field.onChange(value);
            }} 
          />
        </>
      )}
    />
  );
});

export default CustomPhoneInput;
