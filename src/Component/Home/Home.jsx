import Cards from "../Card/Cards.jsx";
import img1 from "../../assets/1696504779631.jpeg";
import img2 from "../../assets/460621148_1069135494623249_6135232837005747170_n.jpg";
import img3 from "../../assets/Blog-Cover-Images-5-1024x512.png";
import img4 from "../../assets/images.png";
import img5 from "../../assets/muslim-volunteer.jpg";
import NewsletterSection from "../NewsletterSection.jsx";

const Home = () => {
  return (
    <div>
      <div className="carousel w-full h-[24rem] mt-10">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={img1}
            className="w-full max-w-4xl mx-auto object-cover rounded-lg"
            alt="Slide 1"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide5"
              className="btn btn-circle btn-sm md:btn-md lg:btn-lg"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle btn-sm md:btn-md lg:btn-lg"
            >
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={img2}
            className="w-full max-w-4xl mx-auto object-cover rounded-lg"
            alt="Slide 2"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide1"
              className="btn btn-circle btn-sm md:btn-md lg:btn-lg"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle btn-sm md:btn-md lg:btn-lg"
            >
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={img3}
            className="w-full max-w-4xl mx-auto object-cover rounded-lg"
            alt="Slide 3"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide2"
              className="btn btn-circle btn-sm md:btn-md lg:btn-lg"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle btn-sm md:btn-md lg:btn-lg"
            >
              ❯
            </a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={img4}
            className="w-full max-w-4xl mx-auto object-cover rounded-lg"
            alt="Slide 4"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide3"
              className="btn btn-circle btn-sm md:btn-md lg:btn-lg"
            >
              ❮
            </a>
            <a
              href="#slide5"
              className="btn btn-circle btn-sm md:btn-md lg:btn-lg"
            >
              ❯
            </a>
          </div>
        </div>

        <div id="slide5" className="carousel-item relative w-full">
          <img
            src={img5}
            className="w-full max-w-4xl mx-auto object-cover rounded-lg"
            alt="Slide 5"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide4"
              className="btn btn-circle btn-sm md:btn-md lg:btn-lg"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle btn-sm md:btn-md lg:btn-lg"
            >
              ❯
            </a>
          </div>
        </div>
      </div>

      <Cards></Cards>
      <div>
        <section className="py-24 px-8 bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 relative">
              <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4 animate-slide-up">
                Our Impact
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-300 rounded-full"></div>
              </h2>
              <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                In 2022-23, VSO reached{" "}
                <span className="font-semibold text-purple-700">
                  10.9 million people
                </span>
                , nearly 7.4 million indirectly and over 3.5 million directly.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Explore Full Impact Report
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
              {[
                {
                  value: "3.2m",
                  label: "Education projects reached",
                  icon: "📚",
                },
                {
                  value: "200k",
                  label: "Livelihood programme reached",
                  icon: "🌱",
                },
                { value: "90k", label: "Health projects reached", icon: "❤️" },
                {
                  value: "87k",
                  label: "Resilience & inclusion work",
                  icon: "🤝",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="mb-6 text-4xl animate-bounce">
                    {item.icon}
                  </div>
                  <h3 className="text-5xl font-bold text-purple-800 mb-4">
                    {item.value}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.label}</p>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-200 rounded-xl transition-all duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="my-16 w-10/12 mx-auto">
        {/* FAQ Container */}
        <div className="space-y-6">
          {/* FAQ Item 1 */}
          <div className="collapse collapse-arrow bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title text-xl font-semibold text-purple-800 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              How much time do I need to volunteer?
            </div>
            <div className="collapse-content">
              <p className="text-gray-600 leading-relaxed">
                This is really up to you. You can find volunteering
                opportunities that only take one hour per month, to five days a
                week - or more. Some roles are for one-off events, some are
                short term and others might need a six month commitment or
                longer. You can volunteer at any time of the week, day or night.
                While a lot of volunteering takes place during office hours, you
                can volunteer at evenings and weekends too, again depending on
                what you want to do. Some organisations ask for a particular
                commitment from their volunteers while others are able to take a
                more flexible approach. Certain roles like befriending require
                building up trust with someone, which is why a certain amount of
                commitment is required. Think carefully about the amount of
                commitment you are able to give before choosing your role.
              </p>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className="collapse collapse-arrow bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-semibold text-purple-800 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Will I get training?
            </div>
            <div className="collapse-content">
              <p className="text-gray-600 leading-relaxed">
                All organisations will offer hands on training to prepare you
                for the role. How much training you need, will depend on the
                role. As an advisor with Citizens Advice, training will take
                several months and for some support roles you will have to
                complete training as part of the recruitment process eg Best
                Buddies. If you are working with children or adults who are
                vulnerable you will likely get Safeguarding Training or Food
                Hygiene training if you are involved with food preparation.
              </p>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div className="collapse collapse-arrow bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-semibold text-purple-800 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Can I volunteer from home?
            </div>
            <div className="collapse-content">
              <p className="text-gray-600 leading-relaxed">
                Volunteering from home is an increasingly popular way of
                volunteering and you can search Volunteer from home in the
                opportunities on our website. Example opportunities are
                telephone befriending or making blankets or clothing for
                premature babies in hospitals or for charities that work with
                children who are deprived of the basic necessities. Volunteers
                are currently knitting trauma teddies for PSNI to give to
                children in stressful situations. You could also do some
                environmental work like keeping a record of birds, bees,
                squirrels etc.
              </p>
            </div>
          </div>
        </div>
      </div>
      <NewsletterSection></NewsletterSection>
    </div>
  );
};

export default Home;
