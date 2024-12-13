const BookingForm = () => {
  return (
    <div className="w-full flex flex-row justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 lg:py-14 mx-auto">

    <div className="relative group transition-all duration-300 ease-in-out">
      {/* Animated background effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-green-300 via-green-500 to-green-300 
                      rounded-2xl blur-lg opacity-25 group-hover:opacity-100 
                      transition duration-1000 group-hover:duration-200 
                      animate-gradient"></div>
      
      {/* Main container */}
      <div className="relative px-7 py-6 bg-white rounded-xl leading-none flex items-center">
        <form className="space-y-4 w-full">
          {/* Form fields */}
          <div className="space-y-4">
          <div className="max-w-xl mx-auto">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-green-600 sm:text-4xl dark:text-white">
        Book Your Journey to Well-being
      </h1>
      <p className="mt-1 text-gray-600 dark:text-neutral-400">
        Take the first step towards positive change. We'll match you with
        the right professional to support your unique needs.
      </p>
    </div>
    <div className="mt-12">
      {/* Form */}
      <form>
        <div className="grid gap-4 lg:gap-6">
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label
                htmlFor="hs-firstname-hire-us-2"
                className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
              >
                First Name
              </label>
              <input
                type="text"
                name="hs-firstname-hire-us-2"
                id="hs-firstname-hire-us-2"
                className="py-3 px-4 border-green-600 block w-full rounded-lg text-sm focus:border-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              />
            </div>
            <div>
              <label
                htmlFor="hs-lastname-hire-us-2"
                className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
              >
                Last Name
              </label>
              <input
                type="text"
                name="hs-lastname-hire-us-2"
                id="hs-lastname-hire-us-2"
                className="py-3 px-4 block w-full border-green-500 rounded-lg text-sm focus:border-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              />
            </div>
          </div>
          {/* End Grid */}
          <div>
            <label
              htmlFor="hs-work-email-hire-us-2"
              className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="hs-work-email-hire-us-2"
              id="hs-work-email-hire-us-2"
              autoComplete="email"
              className="py-3 px-4 block w-full border-green-500 rounded-lg text-sm focus:border-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            />
          </div>
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label
                htmlFor="hs-company-hire-us-2"
                className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
              >
                To do: Calendar
              </label>
              <input
                type="text"
                name="hs-company-hire-us-2"
                id="hs-company-hire-us-2"
                className="py-3 px-4 block w-full border-green-500 rounded-lg text-sm focus:border-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              />
            </div>
            <div>
              <label
                htmlFor="hs-company-website-hire-us-2"
                className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
              >
                To do: Time Component
              </label>
              <input
                type="text"
                name="hs-company-website-hire-us-2"
                id="hs-company-website-hire-us-2"
                className="py-3 px-4 block w-full border-green-500 rounded-lg text-sm focus:border-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              />
            </div>
          </div>
          {/* End Grid */}
          <div>
            <label
              htmlFor="hs-about-hire-us-2"
              className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
            >
              Your Symptoms
            </label>
            <textarea
              id="hs-about-hire-us-2"
              name="hs-about-hire-us-2"
              rows={4}
              className="py-3 px-4 block w-full border-green-500 rounded-lg text-sm focus:border-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              defaultValue={""}
            />
          </div>
        </div>
        {/* End Grid */}
        {/* Checkbox */}
        <div className="mt-3 flex">
          <div className="flex">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="shrink-0 mt-1.5 border-green-500 rounded text-green-600 focus:ring-green-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-gray-800"
            />
          </div>
          <div className="ms-3">
            <label
              htmlFor="remember-me"
              className="text-sm text-gray-600 dark:text-neutral-400"
            >
              By submitting this form I have read and acknowledged the{" "}
              <a
                className="text-green-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-green-500"
                href="#"
              >
                Privact policy
              </a>
            </label>
          </div>
        </div>
        {/* End Checkbox */}
        <div className="mt-6 flex flex-row justify-center">
          <button className="w-auto font-semibold p-4 mx-6 uppercase text-white bg-gradient-to-r from-green-400 to-green-500 
                           rounded-lg hover:from-green-500 hover:to-green-600 
                           transform hover:-translate-y-0.5 transition-all duration-200">
            Book Appointment
          </button>
        </div>
        <div className="mt-3 text-center">
          <p className="text-sm text-gray-500 dark:text-neutral-500">
            We'll get back to you in 1-2 business days.
          </p>
        </div>
      </form>
      {/* End Form */}
    </div>
  </div>
          </div>
          
          {/* Submit button with hover effect */}

        </form>
      </div>
    </div>
    </div>
  );
};

// const BookingForm = () => {
//   return (
// <>
//   {/* Comment Form */}
//   <div className="max-w-[85rem] px-4 py-10 bg-white sm:px-6 lg:px-8 lg:py-14 mx-auto">
//     <div className="mx-auto border-green-400 max-w-2xl">
//       <div className="text-center">
//         <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
//           Post a comment
//         </h2>
//       </div>
//       {/* Card */}
//       <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
//         <form>
//           <div className="mb-4 sm:mb-8">
//             <label
//               htmlFor="hs-feedback-post-comment-name-1"
//               className="block mb-2 text-sm font-medium dark:text-white"
//             >
//               Full name
//             </label>
//             <input
//               type="text"
//               id="hs-feedback-post-comment-name-1"
//               className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
//               placeholder="Full name"
//             />
//           </div>
//           <div className="mb-4 sm:mb-8">
//             <label
//               htmlFor="hs-feedback-post-comment-email-1"
//               className="block mb-2 text-sm font-medium dark:text-white"
//             >
//               Email address
//             </label>
//             <input
//               type="email"
//               id="hs-feedback-post-comment-email-1"
//               className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
//               placeholder="Email address"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="hs-feedback-post-comment-textarea-1"
//               className="block mb-2 text-sm font-medium dark:text-white"
//             >
//               Comment
//             </label>
//             <div className="mt-1">
//               <textarea
//                 id="hs-feedback-post-comment-textarea-1"
//                 name="hs-feedback-post-comment-textarea-1"
//                 rows={3}
//                 className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
//                 placeholder="Leave your comment here..."
//                 defaultValue={""}
//               />
//             </div>
//           </div>
//           <div className="mt-6 grid">
//             <button
//               type="submit"
//               className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//       {/* End Card */}
//     </div>
//   </div>
//   {/* End Comment Form */}
// </>

//   );
// };

export default BookingForm;

<div className="bg-white ">
<div className="max-w-[85rem] px-4 py-10 border-green-500 rounded-xl  sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="max-w-xl mx-auto">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-green-600 sm:text-4xl dark:text-white">
        Book Your Journey to Well-being
      </h1>
      <p className="mt-1 text-gray-600 dark:text-neutral-400">
        Take the first step towards positive change. We'll match you with
        the right professional to support your unique needs.
      </p>
    </div>
    <div className="mt-12">
      {/* Form */}
      <form>
        <div className="grid gap-4 lg:gap-6">
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label
                htmlFor="hs-firstname-hire-us-2"
                className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
              >
                First Name
              </label>
              <input
                type="text"
                name="hs-firstname-hire-us-2"
                id="hs-firstname-hire-us-2"
                className="py-3 px-4 border-green-600 block w-full rounded-lg text-sm focus:border-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              />
            </div>
            <div>
              <label
                htmlFor="hs-lastname-hire-us-2"
                className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
              >
                Last Name
              </label>
              <input
                type="text"
                name="hs-lastname-hire-us-2"
                id="hs-lastname-hire-us-2"
                className="py-3 px-4 block w-full border-green-500 rounded-lg text-sm focus:border-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              />
            </div>
          </div>
          {/* End Grid */}
          <div>
            <label
              htmlFor="hs-work-email-hire-us-2"
              className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="hs-work-email-hire-us-2"
              id="hs-work-email-hire-us-2"
              autoComplete="email"
              className="py-3 px-4 block w-full border-green-500 rounded-lg text-sm focus:border-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            />
          </div>
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label
                htmlFor="hs-company-hire-us-2"
                className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
              >
                To do: Calendar
              </label>
              <input
                type="text"
                name="hs-company-hire-us-2"
                id="hs-company-hire-us-2"
                className="py-3 px-4 block w-full border-green-500 rounded-lg text-sm focus:border-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              />
            </div>
            <div>
              <label
                htmlFor="hs-company-website-hire-us-2"
                className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
              >
                To do: Time Component
              </label>
              <input
                type="text"
                name="hs-company-website-hire-us-2"
                id="hs-company-website-hire-us-2"
                className="py-3 px-4 block w-full border-green-500 rounded-lg text-sm focus:border-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              />
            </div>
          </div>
          {/* End Grid */}
          <div>
            <label
              htmlFor="hs-about-hire-us-2"
              className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
            >
              Your Symptoms
            </label>
            <textarea
              id="hs-about-hire-us-2"
              name="hs-about-hire-us-2"
              rows={4}
              className="py-3 px-4 block w-full border-green-500 rounded-lg text-sm focus:border-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              defaultValue={""}
            />
          </div>
        </div>
        {/* End Grid */}
        {/* Checkbox */}
        <div className="mt-3 flex">
          <div className="flex">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="shrink-0 mt-1.5 border-green-500 rounded text-green-600 focus:ring-green-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-gray-800"
            />
          </div>
          <div className="ms-3">
            <label
              htmlFor="remember-me"
              className="text-sm text-gray-600 dark:text-neutral-400"
            >
              By submitting this form I have read and acknowledged the{" "}
              <a
                className="text-green-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-green-500"
                href="#"
              >
                Privact policy
              </a>
            </label>
          </div>
        </div>
        {/* End Checkbox */}
        <div className="mt-6 grid">
          <button
            type="submit"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:bg-green-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Schedule
          </button>
        </div>
        <div className="mt-3 text-center">
          <p className="text-sm text-gray-500 dark:text-neutral-500">
            We'll get back to you in 1-2 business days.
          </p>
        </div>
      </form>
      {/* End Form */}
    </div>
  </div>
  </div>
</div>