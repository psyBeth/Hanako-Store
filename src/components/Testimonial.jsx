import { useState } from "react";
import { testimonials } from "../helper/data";

const Testimonial = () => {

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  return (
    <div className="bg-main">
    <section className="py-20 my-0 bg-main">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-blueish underline font-semibold pb-6">
            What people are saying
          </h3>
          <ul>
            {testimonials.map((item, idx) =>
              currentTestimonial === idx ? (
                <li key={idx}>
                  <figure>
                    <blockquote>
                      <p className="text-labelColor text-xl font-semibold sm:text-2xl">
                        “{item.quote}“
                      </p>
                    </blockquote>
                    <div className="mt-6">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-16 h-16 mx-auto rounded-full"
                      />
                      <div className="mt-3">
                        <span className="block text-blueish font-semibold">
                          {item.name}
                        </span>
                        <span className="block text-blueish text-sm mt-0.5">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </figure>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
        <div className="mt-6 pb-25 bg-main">
          <ul className="flex gap-x-3 justify-center">
            {testimonials.map((item, idx) => (
              <li key={idx}>
                <button
                  className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-labelColor focus:ring ${currentTestimonial === idx ? "bg-labelColor" : "bg-blueish"
                    }`}
                  onClick={() => setCurrentTestimonial(idx)}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Testimonial;
