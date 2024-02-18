import img1 from "../assets/images/about_img.png";
import prev1 from "../assets/images/prev.png";
import prev2 from "../assets/images/prev2.png";
function About() {
  return (
    <div id="about">
      <h1 className="text-center font-bold text-main-clr text-4xl my-4">
        About us
      </h1>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 font-semibold text-lg justify-items-center md:mx-unit-sm xsm:mx-unit-md lg:mx-unit-6xl ">
        <div className="p-4">
          <p>
            Welcome to <span className="text-primary font-bold">Apointly</span>,
            the leading online booking platform for all your appointment needs.
            Whether you're looking for a haircut, a manicure, a car repair, or a
            personal training session, we've got you covered. Our mission is to
            provide a seamless and convenient booking experience for both
            customers and business owners.
            <br />
            <br />
            At Apointly, we understand the hassle and frustration that can come
            with trying to schedule appointments over the phone or in person.
            That's why we've created a user-friendly online platform that allows
            you to book appointments with just a few clicks. No more waiting on
            hold or playing phone tag with busy businesses. With Apointly, you
            can easily find and book available appointments at your convenience.
          </p>
        </div>
        <div className="p-4 ">
          <img
            src={img1}
            alt="1"
            className="w-unit-5xl rounded-full shadow-lg p-0 my-5"
          />
        </div>
        <div className="p-4 xsm:invisible lg:visible md:visible mb-unit-4xl">
          <div className="flex xsm:hidden md:inline ">
            <div class="flex ">
              <div class="overflow-hidden rounded-xl bg-gray-100 shadow-lg">
                <img
                  src={prev2}
                  loading="lazy"
                  alt=" by Manny Moreno"
                  class="w-full h-unit-6xl object-cover object-center border border-gray-300 rounded-xl"
                />
              </div>

              <div class="relative left-10 top-10 z-10 -ml-10 overflow-hidden rounded-xl shadow-lg md:-left-12 md:top-32 lg:m-0 p-0">
                <img
                  src={prev1}
                  loading="lazy"
                  alt=" by Kaung Htet"
                  class="h-unit-6xl w-full object-cover object-center border border-gray-300 rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <p>
            Not only do we make booking appointments a breeze for customers, but
            we also provide a streamlined management system for business owners.
            Our platform allows each shop to have its own dedicated admin
            account, giving them full control over their schedule. This means
            they can easily manage, edit, and cancel appointments according to
            their availability and preferences. No more missed appointments due
            to miscommunication or double bookings. Apointly keeps everything
            organized and up-to-date.
            <br />
            <br />
            We take pride in partnering with a variety of businesses, from
            barber shops and nail salons to mechanics and personal trainers. Our
            goal is to help these businesses thrive by connecting them with new
            and loyal customers through our platform. We believe in supporting
            small businesses and making it easier for them to succeed in this
            fast-paced digital world.
          </p>
        </div>
        <div className="xsm:col-span-1 lg:col-span-2">
          <p className="p-7 rounded-xl border-3 border-light-purple">
            Our mission at Apointly is to simplify the process of appointment
            booking and make it a stress-free experience for both customers and
            service providers. So why wait? Start using Apointly today and say
            goodbye to the hassle of scheduling appointments.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
