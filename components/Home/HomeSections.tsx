"use client";
import Link from "next/link";

const HomeSections = () => {
  return (
    <div className="z-50">
      <section className="w-full h-[90vh] flex flex-col justify-center items-center">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold">Alrnamee</h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-600">
            Less noise. More done.
            </h2>
            <p className="text-lg text-gray-600">
            Minimal tools built to get the job done — no clutter, no fluff.
            </p>
        </div>
       <Link
        href="/register"
        className="mt-8 rounded-lg px-10 py-3 text-lg font-medium shadow-lg hover:bg-gray-100 transition duration-200 flex items-center gap-2"
        >
        Join Us
        </Link>
      </section>

      <section className="w-full h-[50vh] flex flex-col items-center justify-center">
        <div className="mt-10 flex items-center justify-center md:w-1/2 bg-white p-10 text-xl md:rounded-lg italic font-light shadow">
          <p className="text-center">
            Made with love by{" "}
            
              
            <a
            className="text-blue-500 ml-1"
              href="https://github.com/alrnameedev"
              target="_blank"
              rel="noopener noreferrer">
              alrnameedev
            </a>
             {" "}dev team.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomeSections;