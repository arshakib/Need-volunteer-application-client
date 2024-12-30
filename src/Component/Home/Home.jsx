import Cards from "../Card/Cards.jsx";
import img1 from "../../assets/1696504779631.jpeg";
import img2 from "../../assets/460621148_1069135494623249_6135232837005747170_n.jpg";
import img3 from "../../assets/Blog-Cover-Images-5-1024x512.png";
import img4 from "../../assets/images.png";
import img5 from "../../assets/muslim-volunteer.jpg";

const Home = () => {
  return (
    <div>
      <div className="carousel w-full h-96 mt-10">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-10/12 mx-auto" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-10/12 mx-auto" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-10/12 mx-auto" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-10/12 mx-auto" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-10/12 mx-auto" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <Cards></Cards>
      <div>
        <section className=" py-16 px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-purple-700 mb-4">
              Our impact
            </h2>
            <p className=" mb-6">
              In 2022-23, VSO reached 10.9 million people, nearly 7.4 million
              indirectly and over 3.5 million directly.
            </p>
            <a
              href="#"
              className="text-purple-700 font-semibold hover:underline"
            >
              Find out more in our annual impact report &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
            {/* Impact Card 1 */}
            <div className="text-center">
              <h3 className="text-5xl font-bold text-purple-700">3.2m</h3>
              <p className="mt-4">
                Over 3.2 million were reached through our education projects.
              </p>
            </div>
            {/* Impact Card 2 */}
            <div className="text-center">
              <h3 className="text-5xl font-bold text-purple-700">200,000</h3>
              <p className="mt-4">
                Almost 200,000 people were reached through our resilient
                livelihoods programme.
              </p>
            </div>
            {/* Impact Card 3 */}
            <div className="text-center">
              <h3 className="text-5xl font-bold text-purple-700">90,000</h3>
              <p className="mt-4">
                Almost 90,000 people were reached through our health projects.
              </p>
            </div>
            {/* Impact Card 4 */}
            <div className="text-center">
              <h3 className="text-5xl font-bold text-purple-700">87,000</h3>
              <p className="mt-4">
                Over 87,000 through our wider work on resilience, inclusion and
                social accountability.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="my-10 w-10/12 mx-auto">
        <div className="collapse collapse-arrow bg-base-200 my-5">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-black text-xl font-medium">
            How much time do I need to volunteer?
          </div>
          <div className="collapse-content">
            <p className="text-black">
              This is really up to you. You can find volunteering opportunities
              that only take one hour per month, to five days a week - or more.
              Some roles are for one-off events, some are short term and others
              might need a six month commitment or longer. You can volunteer at
              any time of the week, day or night. While a lot of volunteering
              takes place during office hours, you can volunteer at evenings and
              weekends too, again depending on what you want to do. Some
              organisations ask for a particular commitment from their
              volunteers while others are able to take a more flexible approach.
              Certain roles like befriending require building up trust with
              someone, which is why a certain amount of commitment is required.
              Think carefully about the amount of commitment you are able to
              give before choosing your role.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 my-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-black text-xl font-medium">
            Will I get training?
          </div>
          <div className="collapse-content">
            <p className="text-black">
              All organisations will offer hands on training to prepare you for
              the role. How much training you need, will depend on the role. As
              an advisor with Citizens Advice, training will take several months
              and for some support roles you will have to complete training as
              part of the recruitment process eg Best Buddies. If you are
              working with children or adults who are vulnerable you will likely
              get Safeguarding Training or Food Hygiene training if you are
              involved with food preparation.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 my-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-black text-xl font-medium">
            Can I volunteer from home?
          </div>
          <div className="collapse-content">
            <p className="text-black">
              Volunteering form home is an increasingly popular way of
              volunteering and you can search ‘Volunteer from home’ in the
              opportunities on our website. Example opportunities are telephone
              befriending or making blankets or clothing for premature babies in
              hospitals or for charities that work with children who are
              deprived of the basic necessities. Volunteers are currently
              knitting trauma teddies for PSNI to give to children in stressful
              situations. You could also do some environmental work like keeping
              a record of birds, bees, squirrels etc
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
