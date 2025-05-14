import {
  AiOutlineWhatsApp,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import WoodyBg from "../../assets/wooden.png";

export default function Footer() {
  return (
    <footer
      className="relative bg-green-900 text-white"
      style={{ backgroundImage: `url(${WoodyBg})` }}
    >
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="uppercase">
            <h3 className="text-lg font-semibold mb-4 uppercase">Home</h3>
            <ul className="space-y-2 text-sm font-extralight">
              <li> • Our Vision / Promise</li>
              <li> • Benefits</li>
              <li> • Pathway</li>
              <li> • Ongoing Projects</li>
              <li> • Partners</li>
            </ul>
          </div>

          <div className="uppercase">
            <h3 className="text-lg font-semibold mb-4 uppercase">
              Sustainable Living
            </h3>
            <ul className="space-y-2 text-sm font-extralight">
              <li> • About Sustainable Living</li>
              <li> • Product Introduction</li>
            </ul>
          </div>

          <div className="uppercase">
            <h3 className="text-lg font-semibold mb-4 uppercase">Our Story</h3>
            <ul className="space-y-2 text-sm font-extralight">
              <li> • What We Do</li>
              <li> • Who We Are</li>
              <li> • Our Partners</li>
              <li> • News Updates</li>
            </ul>
          </div>

          <div className="uppercase">
            <h3 className="text-lg font-semibold mb-4 uppercase">Contact Us</h3>
            <ul className="space-y-2 text-sm mb-6 font-extralight">
              <li> • Regional Contact Us</li>
              <li> • Contact Us Form</li>
            </ul>

            <div className="border border-white/40 p-6 flex gap-4 items-start text-sm">
              <FiMapPin className="text-xl mt-1 flex-shrink-0" />
              <address className="not-italic leading-relaxed font-extralight">
                Future Earth, Suite 380
                <br />
                1839 S Alma School Rd
                <br />
                Mesa, AZ 85210 USA
                <br />
                480 649 4127
              </address>
            </div>
          </div>
        </div>

        <div className="my-10 h-px bg-white/30" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-sm">
            <span className="mr-1">Get in touch</span>
            <AiOutlineWhatsApp className="w-4 h-4" />
            <AiFillFacebook className="w-4 h-4" />
            <AiOutlineTwitter className="w-4 h-4" />
            <AiFillYoutube className="w-4 h-4" />
            <AiFillInstagram className="w-4 h-4" />
            <AiFillLinkedin className="w-4 h-4" />
          </div>

          <p className="text-xs text-white/70">
            © 2021 Future Earth Sustainable Living
          </p>
        </div>
      </div>
    </footer>
  );
}
