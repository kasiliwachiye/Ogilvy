import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FiArrowRight } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

const ContactBody = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      captcha: "",
    },
    validationSchema: Yup.object({
      full_name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(
          /^254\s\d{3}\s\d{3}\s\d{3}$/,
          "Please enter a valid Kenyan phone number (254 728 000 000)"
        )
        .required("Phone number is required"),
      subject: Yup.string(),
      message: Yup.string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters"),
      captcha: Yup.string()
        .required("Please solve the CAPTCHA")
        .oneOf(["17"], "Incorrect answer"),
    }),
    onSubmit: (_values, { resetForm }) => {
      resetForm();
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    },
  });

  return (
    <section className="my-24 px-8">
      <div className="max-w-[1320px] bg-[#FBEADC] mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr]">
        <div className="bg-[#165620] text-white text-base font-light py-12">
          <div className="max-w-xs mx-auto">
            <h2 className="text-2xl font-bold mb-4">Regional Contacts</h2>
            <ul className="space-y-6">
              <li className="grid grid-cols-[auto_1fr] gap-4">
                <div>
                  <GrLocation className="mt-1" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold">America</h3>
                  <p>Future Earth, Suite 380</p>
                  <p>1839 S Alma School Rd</p>
                  <p>Mesa, AZ 85210 USA</p>
                  <p>480 649 4127</p>
                </div>
              </li>
              <li className="grid grid-cols-[auto_1fr] gap-4">
                <div>
                  <GrLocation className="mt-1" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold">Mexico, South America</h3>
                  <p>Place: Gracious Rd, T Buiding, 3rd Floor</p>
                  <p>Email: jambo@futureearth1.com</p>
                  <p>Phone: +33 345 678 123</p>
                </div>
              </li>
              <li className="grid grid-cols-[auto_1fr] gap-4">
                <div>
                  <GrLocation className="mt-1" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold">Malawi, Africa</h3>
                  <p>Place: Gracious Rd, T Buiding, 3rd Floor</p>
                  <p>Email: jambo@futureearth1.com</p>
                  <p>Phone: +33 345 678 123</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-4 max-w-2xl mx-auto py-12 text-base"
        >
          <h2 className="text-2xl font-bold mb-4">Talk to Us</h2>

          {submitSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              <p>Thank you for your message! We'll be in touch soon.</p>
            </div>
          )}

          <div className="flex flex-col gap-1">
            <input
              className={`p-2 px-4 bg-transparent border ${
                formik.touched.full_name && formik.errors.full_name
                  ? "border-red-500"
                  : "border-[#165620]"
              } text-[#165620] placeholder:text-[#444] placeholder:opacity-75 focus:outline-none focus:border-black focus:ring-0 w-full`}
              type="text"
              name="full_name"
              id="full_name"
              placeholder="Full name"
              value={formik.values.full_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.full_name && formik.errors.full_name && (
              <p className="text-red-500 text-sm">{formik.errors.full_name}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              className={`p-2 px-4 bg-transparent border ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-[#165620]"
              } text-[#165620] placeholder:text-[#444] placeholder:opacity-75 focus:outline-none focus:border-black focus:ring-0 w-full`}
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              className={`p-2 px-4 bg-transparent border ${
                formik.touched.phone && formik.errors.phone
                  ? "border-red-500"
                  : "border-[#165620]"
              } text-[#165620] placeholder:text-[#444] placeholder:opacity-75 focus:outline-none focus:border-black focus:ring-0 w-full`}
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500 text-sm">{formik.errors.phone}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              className="p-2 px-4 bg-transparent border border-[#165620] text-[#165620] placeholder:text-[#444] placeholder:opacity-75 focus:outline-none focus:border-black focus:ring-0 w-full"
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <div className="flex flex-col gap-1">
            <textarea
              className={`p-2 px-4 bg-transparent border ${
                formik.touched.message && formik.errors.message
                  ? "border-red-500"
                  : "border-[#165620]"
              } text-[#165620] placeholder:text-[#444] placeholder-opacity-75 focus:outline-none focus:border-black focus:ring-0 w-full`}
              name="message"
              id="message"
              cols={30}
              rows={4}
              placeholder="Message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-sm">{formik.errors.message}</p>
            )}
          </div>

          <div className="border border-[#165620] placeholder:text-[#444]">
            <h3 className="bg-[#165620] text-white p-2 px-4">CAPTCHA</h3>

            <div className="p-4">
              <p className="flex flex-col gap-4 py-2 opacity-75">
                <span>
                  This question is for testing whether or not you are a human
                  visitor and to prevent automated spam submissions.
                </span>
                <span className="font-bold">Math question *</span>
                <span>6 + 11 =</span>
              </p>
              <div className="flex flex-col gap-1">
                <label htmlFor="captcha" className="sr-only">
                  Math question: 6 + 11 =
                </label>
                <input
                  className={`p-2 px-4 bg-transparent border ${
                    formik.touched.captcha && formik.errors.captcha
                      ? "border-red-500"
                      : "border-[#165620]"
                  } text-[#165620] placeholder:text-[#444] placeholder-opacity-75 focus:outline-none focus:border-black focus:ring-0 w-full`}
                  type="text"
                  name="captcha"
                  id="captcha"
                  placeholder="Enter the answer"
                  title="Please solve the math question: 6 + 11"
                  value={formik.values.captcha}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.captcha && formik.errors.captcha && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.captcha}
                  </p>
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="max-w-48 self-end bg-[#165620] uppercase text-white flex gap-2 items-center justify-center py-4 px-8 cursor-pointer"
          >
            <p>Send</p>
            <FiArrowRight />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactBody;
