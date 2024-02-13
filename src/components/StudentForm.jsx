import { useRef } from "react";
import { useForm } from "react-hook-form";

import "react-phone-input-2/lib/style.css";
import "./StudentFormStyle.css";

import {
  CustomPhoneInput,
  CustomInput,
  Row,
  CustomSelect,
  PaymentMethods,
  Months,
} from "../components";

export default function StudentForm() {
  const studentPhone = useRef();
  const parentPhone = useRef();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  async function onSubmit(data) {
    // Remove the country code from the phone number
    const modifiedStudentPhone = data["student-phone"].replace(
      studentPhone.current.value,
      ""
    );
    data["student-phone"] = modifiedStudentPhone;

    const modifiedParentPhone = data["parent-phone"].replace(
      parentPhone.current.value,
      ""
    );
    data["parent-phone"] = modifiedParentPhone;

    // Mock a server
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[90%] md:w-[900px] border-2 mx-auto shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row"
    >
      {/* ========= Left side ========= */}
      <div className="bg-white w-full md:w-3/5 p-8">
        <h1 className="font-bold text-lg text-center md:text-2xl tracking-wide">
          Registration & Booking at GoStudent
        </h1>
        <p className="text-center text-[#2d3842] text-sm md:text-lg tracking-wide mb-8">
          The leading platform for online tutoring.
        </p>

        {/* ======== Student's phone number ======== */}
        <CustomPhoneInput
          control={control}
          prefer="student's"
          name="student-phone"
          ref={studentPhone}
        />
        {errors["student-phone"] && (
          <p className="error-message">{errors["student-phone"].message}</p>
        )}

        {/* ======== parent's phone number ======== */}
        <CustomPhoneInput
          control={control}
          prefer="parent's"
          name="parent-phone"
          ref={parentPhone}
        />
        {errors["parent-phone"] && (
          <p className="error-message">{errors["parent-phone"].message}</p>
        )}

        {/* ======== Contact email ======== */}
        <CustomInput
          label="contact email address"
          type="email"
          id="email"
          name="contact-email"
          prefer="parent's"
          register={{
            ...register("contact-email", {
              required: "You must provide an email address",
            }),
          }}
        />
        {errors["contact-email"] && (
          <p className="error-message">{errors["contact-email"].message}</p>
        )}

        {/* ======== Contact name ======== */}
        <CustomInput
          label="contact name"
          id="contact-name"
          name="contact-name"
          register={{
            ...register("contact-name", {
              required: "You must provide a contact name",
            }),
          }}
        />
        {errors["contact name"] && (
          <p className="error-message">{errors["contact name"].message}</p>
        )}

        {/* ======== Billing address ======== */}
        <Row>
          <div className="flex-1">
            <CustomInput
              label="billing address"
              id="billing-address"
              name="billing-address"
              register={{
                ...register("billing-address", {
                  required: "You must provide an address to recieve bills",
                }),
              }}
              placeholder="Address"
            />
            {errors["billing-address"] && (
              <p className="error-message">
                {errors["billing-address"].message}
              </p>
            )}
          </div>

          <CustomInput
            id="nr"
            className="w-1/4 mb-6"
            name="nr"
            register={{ ...register("nr") }}
            placeholder="NR"
          />
        </Row>

        <Row className="mt-6">
          <CustomInput
            id="postal-code"
            name="postal-code"
            register={{ ...register("postal-code") }}
            placeholder="Postal-code"
          />
          <CustomInput
            id="city"
            name="city"
            register={{ ...register("city") }}
            placeholder="City"
          />
          <CustomSelect
            placeholder="Country"
            className="w-1/3 text-gray-400"
            name="country"
            options={["country1", "country2", "country3"]}
            register={{
              ...register("country", { required: "You must choose a country" }),
            }}
          />
        </Row>

        {/* ======== Monthly sessions ======== */}
        <CustomSelect
          className="mt-6 text-gray-400"
          name="monthly-sessions"
          options={["3 Sessions", "5 Sessions", "7 Sessions", "8 Sessions"]}
          chosen="8 Sessions"
          register={{
            ...register("monthly-sessions", {
              required: "You must provide the number of sessions",
            }),
          }}
        />

        {/* ======== Payment Methods ======== */}
        <PaymentMethods
          control={control}
          watch={watch}
          cardHolderRegister={{ ...register("card-holder") }}
          cardNumberRegister={{ ...register("card-number") }}
        />
        {errors["payment-method"] && (
          <p className="error-message">{errors["payment-method"].message}</p>
        )}
      </div>

      {/* ========= Right side ========= */}
      <div className="bg-[#f5f7f9] flex-1 py-8 px-4 flex flex-col">
        <h2 className="font-bold uppercase text-sm">order overview</h2>

        {/* ========= Select number of months ========= */}
        <Months
          control={control}
          watch={watch}
          sessions={watch("monthly-sessions")}
          advancePayRegister={{ ...register("advance-pay") }}
        />
        {errors["number-of-months"] && (
          <p className="error-message">{errors["number-of-months"].message}</p>
        )}

        {/* ========= Terms & conditions ========= */}
        <div className="flex gap-2 items-start mt-6">
          <input
            className="mt-1"
            type="checkbox"
            {...register("terms", {
              required: "You must accept the terms and conditions",
            })}
          />
          <label className="text-sm cursor-pointer">
            I accept the{" "}
            <span className="text-[#4e5fee]">terms & conditions</span> and
            understand my{" "}
            <span className="text-[#4e5fee]">right of withdrawal</span> as well
            as the circumstances that lead to a repeal of the same.
          </label>
        </div>
        {errors["terms"] && (
          <p className="error-message">{errors["terms"].message}</p>
        )}

        {/* ========= Submit ========= */}
        <button className="bg-[#24a7f2] capitalize text-white w-full py-4 font-semibold mt-6 rounded">
          {isSubmitting ? "Loading..." : "order now"}
        </button>

        <p className="uppercase text-sm font-medium text-gray-500 mt-3 md:mt-auto text-center">
          95% satisfaction rate
        </p>
      </div>
    </form>
  );
}
