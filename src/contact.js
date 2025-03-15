import React, { useEffect } from "react";

export default function Contact() {

  useEffect(() => {
    document.title = 'My Test - Contact';
  }, []);

  return (
    <div style={style.container}>
      <div class="mx-auto max-w-2xl text-center mt-5">
        <h2 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contact Us!</h2>
        <p class="mt-2 text-lg/8 text-gray-600">Have a question or need assistance? We’re here to help!</p>
      </div>
      <form action="#" method="POST" class="mx-auto max-w-xl sm:mt-10">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">First name</label>
            <div class="mt-2.5">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600" />
            </div>
          </div>

          <div>
            <label for="last-name" class="block text-sm/6 font-semibold text-gray-900">Last name</label>
            <div class="mt-2.5">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="email" class="block text-sm/6 font-semibold text-gray-900">Email</label>
            <div class="mt-2.5">
              <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="message" class="block text-sm/6 font-semibold text-gray-900">Message</label>
            <div class="mt-2.5">
              <textarea name="message" id="message" rows="4" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600"></textarea>
            </div>
          </div>

          <div class="flex gap-x-4 sm:col-span-2">
            <div class="flex h-6 items-center">
              <button type="button" class="flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label">
                <span class="sr-only">Agree to policies</span>
                <span aria-hidden="true" class="size-4 translate-x-0 transform rounded-full bg-white ring-1 shadow-xs ring-gray-900/5 transition duration-200 ease-in-out"></span>
              </button>
            </div>
            <label class="text-sm/6 text-gray-600" id="switch-1-label">
              By selecting this, you agree to our
              <a href="#" class="font-semibold text-sky-600">privacy&nbsp;policy</a>.
            </label>
          </div>
        </div>
        <div class="mt-10">
          <button type="submit" class="block w-full rounded-md bg-sky-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 cursor-pointer">Let's talk</button>
        </div>
      </form>
    </div>
  );
}
  
const style = {
  container: {
    height: 'calc(100vh - 56px)',
    padding: '0 10px'
  }
};