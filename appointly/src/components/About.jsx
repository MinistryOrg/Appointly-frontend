import img1 from "../styles/images/about_img.png";
import prev1 from "../styles/images/prev.png";
import prev2 from "../styles/images/prev2.png";

function About() {
  return (
    <div id="about">
      <h1 className="text-center font-bold text-main-clr text-4xl my-4">
        About us
      </h1>
      <div className="grid xsm:grip-col-1 xsm:mx-unit-lg lg:grid-cols-2 md:mx-unit-6xl gap-6 font-semibold text-lg my-unit-xl">
        <div className="col">
          <p className="my-unit-2xl mx-5">
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
        <div className="col flex flex-row justify-center ">
          <img
            src={img1}
            alt="1"
            className="w-unit-7xl  rounded-full shadow-lg p-7"
          />
        </div>
        <div className="col">
          <div class="flex">
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
        <div className="col">
          <p className="xsm:my-unit-xl md:my-unit-4xl mx-5">
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
        <div className="col-span-2 lg:mx-unit-3xl">
          <p className="font-semibold text-xl p-7 rounded-xl border-2 border-light-purple">
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
