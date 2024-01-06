/* eslint-disable react/prop-types */
import { Controller } from "react-hook-form";
import MONTHS_INFO from '../months-db';

export default function Months({ control, watch, sessions, advancePayRegister }) {
  const watchMonthsNumber = watch('number-of-months')

  return (
    <div className='flex flex-wrap mt-6'>
      <Controller
        name="number-of-months"
        rules={{ required: "You should define a duration" }}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <>
            {MONTHS_INFO.map(month => (
              <label className={`bg-white p-4 w-1/3 text-sm border text-gray-400 relative ${field.value === month.duration && 'border-2 border-[#4e5fee]'}`} key={month.duration}>
                <input type="radio" {...field} value={month.duration} checked={field.value === month.duration} className="absolute inset-0 cursor-pointer opacity-0" />
                <span>
                  {month.duration}
                </span>
              </label>
            ))}



            {MONTHS_INFO.map(month => {
              return watchMonthsNumber === month.duration && (
                <div key={month.duration} className="flex flex-col w-full">

                  <label className="relative text-xs font-medium flex items-start gap-2 mt-4 cursor-pointer" {...advancePayRegister}>
                    <input type="checkbox" className="mt-1 cursor-pointer" />
                    pay in advance - EXTRA 5% DISCOUNT
                  </label>

                  <div className="flex justify-between items-center w-full mt-6">
                    <span className="default-overview-label-style">number of sessions p.m.</span>
                    <span>{sessions}</span>
                  </div>

                  <div className="default-overview-container-style">
                    <span className="default-overview-label-style">regular price</span>
                    <span className="line-through font-medium">{month.reguralPrice}</span>
                  </div>

                  <div className="default-overview-container-style">
                    <span className="default-overview-label-style">your price</span>
                    <span className=" font-medium">{month.yourPrice}</span>
                  </div>

                  <div className="default-overview-container-style">
                    <span className="default-overview-label-style text-[#7ed320]">discount 4%</span>
                    <span className="font-medium text-[#7ed320]">{month.discount}</span>
                  </div>

                  <hr className="h-1 border-none mt-4 bg-white" />

                  <div className="default-overview-container-style border-t-white">
                    <span className="default-overview-label-style">setup fee</span>
                    <span className="font-bold text-[#4e5fee]">{month.setupFee}</span>
                  </div>

                  <div className="default-overview-container-style">
                    <span className="default-overview-label-style">total p.m.</span>
                    <span className="font-bold text-[#4e5fee]">{month.totalPrice}</span>
                  </div>

                </div>
              )
            })}
          </>
        )}
      />
    </div>
  );
}
