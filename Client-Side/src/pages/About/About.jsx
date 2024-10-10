const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div>
        <h1 className="text-5xl font-bold text-center py-3">
          This is About Section.
        </h1>
        <p className="text-center">
          {`At Smile Dental Care, our mission is to provide world-class dental
          services to patients in Bangladesh. We are committed to offering
          high-quality dental care in a comfortable, compassionate, and friendly
          environment. Our team of experienced dentists and skilled staff use
          the latest technologies and techniques to ensure that you receive the
          best treatment possible. We believe that a beautiful, healthy smile
          can transform lives. Whether you're looking for routine check-ups,
          cosmetic dentistry, or specialized treatments, we are here to help.
          From preventive care to restorative and cosmetic solutions, Smile
          Dental Care covers all aspects of oral health. Your comfort and
          satisfaction are our top priorities. With a focus on patient
          education, we work to ensure that you fully understand your treatment
          options, empowering you to make informed decisions about your dental
          health. Located conveniently in Bangladesh, we invite you to visit us
          for personalized dental care tailored to your needs. Let us help you
          achieve the smile of your dreams at Smile Dental Care!`}
        </p>
      </div>
      {/* Google map link */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-5 my-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Mirpur Branch</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2620.73411920286!2d90.42842857353489!3d23.71682629006788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9001cf637c3%3A0x9fc68e9cab7e160c!2sSmile%20Dental%20Care%20-%20Saydabad%20-%20Jatrabari%20Branch!5e1!3m2!1sen!2sbd!4v1727278476402!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="shadow-lg rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Jatrabari Branch</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2620.73411920286!2d90.42842857353489!3d23.71682629006788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9001cf637c3%3A0x9fc68e9cab7e160c!2sSmile%20Dental%20Care%20-%20Saydabad%20-%20Jatrabari%20Branch!5e1!3m2!1sen!2sbd!4v1727278476402!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="shadow-lg rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Barishal Branch</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2620.73411920286!2d90.42842857353489!3d23.71682629006788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9001cf637c3%3A0x9fc68e9cab7e160c!2sSmile%20Dental%20Care%20-%20Saydabad%20-%20Jatrabari%20Branch!5e1!3m2!1sen!2sbd!4v1727278476402!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="shadow-lg rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Dawatola Branch</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2620.73411920286!2d90.42842857353489!3d23.71682629006788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9001cf637c3%3A0x9fc68e9cab7e160c!2sSmile%20Dental%20Care%20-%20Saydabad%20-%20Jatrabari%20Branch!5e1!3m2!1sen!2sbd!4v1727278476402!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="shadow-lg rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
