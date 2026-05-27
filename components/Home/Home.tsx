"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div>
      <section className="w-full h-screen flex flex-col justify-center items-center">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold">Alrnamee</h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-600">
            Less noise. More done.
          </h2>
          <p className="text-lg text-gray-600 px-4">
            Minimal tools built to get the job done.
          </p>
        </div>
        <Button
          variant={"outline"}
          className="mt-8 rounded-lg px-8 py-6 text-lg font-medium transition duration-200 flex items-center gap-2 cursor-default!"
        >
          <Link href={"/register"} className="cursor-default!">
            Join Us
          </Link>
          <ArrowRight size={20} />
        </Button>
      </section>
    </div>
  );
};

export default Home;
