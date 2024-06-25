import { useForm } from 'react-hook-form';
import useLang from '../Hooks/useLang';

const MiddleBannerForm = () => {
  const lang = useLang();
  //  Form Data=====================
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log('Form Data: ', data);
  console.log(errors);

  return (
    <div>
      {/* Appointment form======= */}
      <h1 className="text-2xl border-b-2 border-slate-100 inline-block text-center font-bold mb-8">
        {lang ? (
          <span className="bang">অ্যাপয়েন্টমেন্ট নিন</span>
        ) : (
          '  Make Appointment'
        )}
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-3 lg:border-2 border-slate-100 rounded-md lg:p-3"
      >
        <input
          type="text"
          className="py-2 w-full rounded bg-slate-100 border border-slate-100 focus:outline-none outline-none text-slate-700 placeholder-slate-700 px-3"
          placeholder={lang ? 'আপনার নাম' : 'Your Name'}
          {...register('name', {
            required: true,
            minLength: 3,
            maxLength: 20,
          })}
        />
        <input
          type="tel"
          className="py-2 w-full rounded bg-slate-100 border border-slate-100 focus:outline-none outline-none text-slate-700 placeholder-slate-700 px-3"
          placeholder={lang ? 'মোবাইল নাম্বার' : 'Mobile Number'}
          {...register('number', {
            required: true,
            minLength: 11,
            maxLength: 11,
          })}
        />
        <select
          className="py-2 w-full rounded bg-slate-100 border border-slate-100 focus:outline-none outline-none text-slate-700 placeholder-slate-700 px-3"
          {...register('Branch', { required: true })}
        >
          <option value="" disabled selected>
            {lang ? 'একটি শাখা নির্বাচন করুন' : 'Select a Branch'}
          </option>
          <option value="Dhaka Jatrabari Branch">
            {lang ? 'ঢাকা যাত্রাবাড়ী শাখা' : 'Dhaka Jatrabari Branch'}
          </option>
          <option value="Dhaka Jatrabari Branch">
            {lang ? 'ঢাকা মিরপুর শাখা' : 'Dhaka Mirpur Branch'}
          </option>
          <option value="Dhaka Jatrabari Branch">
            {lang ? 'বরিশাল চৌমাথা শাখা' : 'Barishal Branch'}
          </option>
          <option value="Dhaka Jatrabari Branch">
            {lang ? 'বামনা-ডৌয়াতলা শাখা' : 'Dawatola Branch'}
          </option>
        </select>
        <select
          className="py-2 w-full rounded bg-slate-100 border border-slate-100 focus:outline-none outline-none text-slate-700 placeholder-slate-700 px-3"
          {...register('Branch', { required: true })}
        >
          <option value="" disabled selected>
            {lang ? 'আপনি কি চিকিৎসা নিতে চান?' : 'Do you want treatment?'}
          </option>
          <option value="Root Canal">Root Canal</option>
          <option value="Dental Consultations">Dental Consultations</option>
          <option value="Scaling">Scaling</option>
          <option value="Orthodontist">Orthodontist</option>
          <option value="Orthodontist">{lang ? 'অন্যান্য' : 'Others'}</option>
        </select>
        <select
          className="py-2 w-full rounded bg-slate-100 border border-slate-100 focus:outline-none outline-none text-slate-700 placeholder-slate-700 px-3"
          {...register('Branch', { required: true })}
        >
          <option value="" disabled selected>
            {lang ? 'ডাক্তার নির্বাচন করুন' : 'Select a Doctor'}
          </option>
          <option value="DT Ismail Hosen Mamun">
            {lang ? 'ডিটি ইসমাইল হোসেন মামুন' : 'DT Ismail Hosen Mamun'}
          </option>
          <option value="DT Rafiul Islam">
            {lang ? 'ডিটি রাফিউল ইসলাম' : 'DT Rafiul Islam'}
          </option>
          <option value="DT Kaniz Fatema">
            {lang ? 'ডিটি কানিজ ফাতেমা' : 'DT Kaniz Fatema'}
          </option>
          <option value="DT Mst. Muslima">
            {lang ? 'ডিটি মোসাঃ মুসলিমা' : 'DT Mst. Muslima'}
          </option>
        </select>

        <div className="flex gap-3">
          <input
            type="date"
            className="py-2 w-full rounded bg-slate-100 border border-slate-100 focus:outline-none outline-none text-slate-700 placeholder-slate-700 px-3"
            placeholder="date"
            {...register('date', {})}
          />
          <input
            type="time"
            className="py-2 w-full rounded bg-slate-100 border border-slate-100 focus:outline-none outline-none text-slate-700 placeholder-slate-700 px-3"
            placeholder="time"
            {...register('time', {})}
          />
        </div>
        <input
          className="py-2 w-full rounded bg-slate-100 text-pClr2 font-bold cursor-pointer hover:scale-95 active:scale-100 duration-200 tracking-wider"
          type="submit"
          value={lang ? 'সাবমিট করুন' : 'submit'}
        />
      </form>
    </div>
  );
};

export default MiddleBannerForm;
