"use client";
import { useForm, SubmitHandler } from "react-hook-form";

interface Props {
  isBn: boolean;
}

interface FormData {
  name: string;
  number: string;
  branch: string;
  treatment: string;
  doctor: string;
  date?: string;
  time?: string;
}

const BannerAppointmentForm = ({ isBn }: Props) => {
  // Form Data=====================
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data: ", data);
  };

  return (
    <div>
      {/* Appointment form======= */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-3"
      >
        <input
          type="text"
          className="py-2 w-full rounded bg-slate-100 border border-slate-100 focus:outline-none text-slate-700 placeholder-slate-700 px-3"
          placeholder={isBn ? "আপনার নাম" : "Your Name"}
          {...register("name", {
            required: true,
            minLength: 3,
            maxLength: 20,
          })}
        />
        <input
          type="tel"
          className="py-2 w-full rounded bg-slate-100 border border-slate-100 focus:outline-none text-slate-700 placeholder-slate-700 px-3"
          placeholder={isBn ? "মোবাইল নাম্বার" : "Mobile Number"}
          {...register("number", {
            required: true,
            minLength: 11,
            maxLength: 11,
          })}
        />
        <select
          className="py-2 w-full rounded bg-slate-100 border border-slate-100 focus:outline-none text-slate-700 placeholder-slate-700 px-3"
          {...register("branch", { required: true })}
        >
          <option value="" disabled>
            {isBn ? "একটি শাখা নির্বাচন করুন" : "Select a Branch"}
          </option>
          <option value="Dhaka Jatrabari Branch">
            {isBn ? "ঢাকা যাত্রাবাড়ী শাখা" : "Dhaka Jatrabari Branch"}
          </option>
          <option value="Dhaka Mirpur Branch">
            {isBn ? "ঢাকা মিরপুর শাখা" : "Dhaka Mirpur Branch"}
          </option>
          <option value="Barishal Branch">
            {isBn ? "বরিশাল চৌমাথা শাখা" : "Barishal Branch"}
          </option>
          <option value="Dawatala Branch">
            {isBn ? "বামনা-ডৌয়াতলা শাখা" : "Dawatala Branch"}
          </option>
        </select>
        <select
          className="py-2 w-full rounded bg-slate-100 border border-slate-100 focus:outline-none text-slate-700 placeholder-slate-700 px-3"
          {...register("treatment", { required: true })}
        >
          <option value="" disabled>
            {isBn ? "আপনি কি চিকিৎসা নিতে চান?" : "Do you want treatment?"}
          </option>
          <option value="Root Canal">Root Canal</option>
          <option value="Dental Consultations">Dental Consultations</option>
          <option value="Scaling">Scaling</option>
          <option value="Orthodontist">Orthodontist</option>
          <option value="Others">{isBn ? "অন্যান্য" : "Others"}</option>
        </select>
        <select
          className="py-2 w-full rounded bg-slate-100 border border-slate-100 focus:outline-none text-slate-700 placeholder-slate-700 px-3"
          {...register("doctor", { required: true })}
        >
          <option value="" disabled>
            {isBn ? "ডাক্তার নির্বাচন করুন" : "Select a Doctor"}
          </option>
          <option value="DT Ismail Hosen Mamun">
            {isBn ? "ডিটি ইসমাইল হোসেন মামুন" : "DT Ismail Hosen Mamun"}
          </option>
          <option value="DT Rafiul Islam">
            {isBn ? "ডিটি রাফিউল ইসলাম" : "DT Rafiul Islam"}
          </option>
          <option value="DT Kaniz Fatema">
            {isBn ? "ডিটি কানিজ ফাতেমা" : "DT Kaniz Fatema"}
          </option>
          <option value="DT Mst. Muslima">
            {isBn ? "ডিটি মোসাঃ মুসলিমা" : "DT Mst. Muslima"}
          </option>
        </select>

        <div className="flex gap-3">
          <input
            type="date"
            className="py-2 w-full rounded bg-slate-100 border border-slate-100 focus:outline-none text-slate-700 placeholder-slate-700 px-3"
            {...register("date")}
          />
          <input
            type="time"
            className="py-2 w-full rounded bg-slate-100 border border-slate-100 focus:outline-none text-slate-700 placeholder-slate-700 px-3"
            {...register("time")}
          />
        </div>
        <input
          className="py-2 w-full rounded bg-pClr2 font-bold cursor-pointer hover:scale-95 active:scale-100 duration-200 tracking-wider text-white"
          type="submit"
          value={isBn ? "সাবমিট করুন" : "Submit"}
        />
      </form>
    </div>
  );
};

export default BannerAppointmentForm;
