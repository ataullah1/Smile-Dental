const Contact = () => {
  return (
    <div className="p-20 text-center">
      <div>
        <h1 className="text-3xl font-bold">Hello Contact us page</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          veritatis libero non similique molstias tempore sapiente cumque totam,
          reprehenderit exercitationem? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Consequatur veritatis libero non similique molstias
          tempore sapiente cumque totam, reprehenderit exercitationem?
        </p>
      </div>
      <div>
        <form className="flex flex-col gap-5">
          <input className="" type="text" placeholder="Enter your name" />
          <input
            className=""
            type="email"
            name=""
            id=""
            placeholder="example@gmail.com"
          />
          <input className="" type="button" value="Send Message" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
