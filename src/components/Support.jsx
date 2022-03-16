import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";
import supportImg from "../assets/support.jpg";

function Support() {
  return (
    <div className="w-full h-screen mt-24 ">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt=""
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Support
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Finding the right team
          </h3>
          <p className="py-4 text-3xl text-slate-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam a
            fugit unde? Aspernatur assumenda quas aliquam eos minima ipsum.
            Ipsa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gay-y-16 px-4 pt-12 sm:pt">
          <div className="">
            <div className="">
              <PhoneIcon />
              <h3 className="">Sales</h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
                et ducimus sit perspiciatis repudiandae neque, fuga aut mollitia
                quibusdam saepe!
              </p>
            </div>
            <div className="">
              <p className="">
                Contact Us <ArrowSmRightIcon />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
