import useLang from '../../Hooks/useLang';
import BlogCarosal from '../BlogSecCarosal/BlogCarosal';

const BlogSec = () => {
  const lang = useLang();
  return (
    <div className="pt-24 pb-16">
      <div className="text-center pb-16 md:mb-8 relative">
        <img
          className="absolute top-1/2 -translate-y-36 md:-translate-y-28 left-1/2 -translate-x-1/2 w-44 md:w-40"
          src="https://i.ibb.co/XxKfhRs/title-img1.png"
          alt=""
        />
        <h3 className="text-xl font-semibold text-pClr2">
          {lang ? <span className="bang">প্রবন্ধ পড়ুন</span> : 'Read Article'}
        </h3>
        <h1 className="text-3xl lg:text-4xl py-3 max-w-[600px] mx-auto font-bold text-slate-800">
          {lang ? (
            <span className="bang text-2xl md:text-3xl">
              ডেন্টিস্ট ওয়ার্ল্ড এর আর্টিকেল গুলো পড়ুন।
            </span>
          ) : (
            'Read articles from Dentist World.'
          )}
        </h1>
      </div>

      <div className="min-h-11">
        <BlogCarosal />
      </div>
    </div>
  );
};

export default BlogSec;
