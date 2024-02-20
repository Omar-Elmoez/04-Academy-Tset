/* eslint-disable react/prop-types */
import { Controller } from "react-hook-form";
import Sepa from "../assets/sepa.webp";
import MasterCard from "../assets/paymentmethods.jpg";
import Row from "./Row";

export default function PaymentMethods({
  control,
  watch,
  cardHolderRegister,
  cardNumberRegister,
}) {
  const watchPaymentMethod = watch("payment-method");

  return (
    <>
      <label className="default-label-style">select payment method</label>
      <Row className="items-center">
        <Controller
          name="payment-method"
          control={control}
          defaultValue=""
          rules={{
            required: "You must choose a payment method",
          }}
          render={({ field }) => (
            <>
              <input
                type="radio"
                htmlFor="sepa"
                {...field}
                checked={field.value === "sepa"}
                value={"sepa"}
              />
              <img
                src={Sepa}
                alt="sepa"
                id="sepa"
                className="w-[50px] h-[30px]"
              />
            </>
          )}
        />
      </Row>

      <div className="flex flex-col items-start gap-2">
        <Controller
          name="payment-method"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <>
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  {...field}
                  value="master-card"
                  checked={field.value === "master-card"}
                />
                <img src={MasterCard} alt="master-card" className="w-[100px]" />
              </div>
              {watchPaymentMethod === "master-card" && (
                <div className="flex flex-col gap-3 w-full">
                  <input
                    {...cardHolderRegister}
                    type="text"
                    className="default-input-style"
                    placeholder="Card holder"
                  />
                  <input
                    {...cardNumberRegister}
                    type="text"
                    className="default-input-style"
                    placeholder="Card number"
                  />
                </div>
              )}
            </>
          )}
        />
      </div>
      <p className="text-gray-400 text-xs mt-2">
        100% secure payment. All data is encrypted.
      </p>
    </>
  );
}
