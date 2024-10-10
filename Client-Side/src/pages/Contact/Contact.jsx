const Contact = () => {
  return (
    <div className="pb-10 text-center">
      <div>
        <h1 className="text-3xl font-bold mt-5 mb-2 capitalize">
          Hello Contact us page
        </h1>
        <p className="max-w-3xl mx-auto mb-5">
          Consequatur veritatis libero non similique molstias tempore sapiente
          cumque totam, reprehenderit exercitationem?
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <form className="flex flex-col gap-5">
          <input
            className="p-2 rounded border"
            type="text"
            placeholder="Enter your name"
          />
          <input
            className="p-2 rounded border"
            type="email"
            name=""
            id=""
            placeholder="example@gmail.com"
          />
          <input
            className="p-2 bg-pClr hover:b text-white font-bold hover:scale-95 duration-300 rounded"
            type="button"
            value="Send Message"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
