import { Link } from 'react-router-dom';
import errorImg from '../../assets/error_teth.png';
import useLang from '../../Hooks/useLang';
const Error = () => {
  const lang = useLang();
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen py-12 px-6 text-center gap-5">
      <img
        className="max-w-96 mr-5 md:-ml-16"
        src={errorImg}
        alt="404 Not Found"
      />
      <div>
        <h1 className="text-9xl  font-bold text-red-500">
          {lang ? <span className="bang">৪০৪</span> : '404'}
        </h1>
        <h3 className="text-2xl pb-7">
          {lang ? (
            <span className="bang">পেজ খুঁজে পাওয়া যাচ্ছে না!</span>
          ) : (
            'Page is Not Found !'
          )}
        </h3>
        <Link
          className="rounded-md px-4 py-2 text-slate-800 hover:bg-red-500 hover:text-white font-bold border border-slate-700 hover:border-red-500 duration-150"
          to={'/'}
        >
          {lang ? <span className="bang">হোমে চলো</span> : 'Go Home'}
        </Link>
      </div>
    </div>
  );
};

export default Error;
