const Home = () => {
  return (
    <>
      <header className="mb-32 flex flex-col items-start">
        <h1 className="text-3xl font-semibold">Alrnamee</h1>
        <p className="font-semibold leading-none mt-2">
          nothing's here, wt you expect??
        </p>
      </header>

      <main className="mb-15">
        <section>
          <h1 className="relative w-fit px-8 uppercase mx-auto bg-[#e8602e21] text-black/90 border-accent border-[0.5px] text-xl font-machina font-light  pt-1.5  inline-block">
            What we're
            <span className="absolute w-0.75 h-0.75 bg-black/60 z-10 top-0 left-0 -translate-x-1/2 -translate-y-1/2"></span>
            <span className="absolute w-0.75 h-0.75 bg-black/60 z-10 top-0 right-0 translate-x-1/2 -translate-y-1/2"></span>
            <span className="corner-dot-bl absolute w-0.75 h-0.75 bg-black/60 z-10 bottom-0 left-0 -translate-x-1/2 translate-y-1/2"></span>
            <span className="corner-dot-br absolute w-0.75 h-0.75 bg-black/60 z-10 bottom-0 right-0 translate-x-1/2 translate-y-1/2"></span>
          </h1>
          <p className="mt-5">
            We offer our end users very personalized products, we invent via
            what you need.
          </p>
          <p className="mt-5">
            It is indeed a pleasure working with out clients to make our
            products and help our clients.
          </p>
        </section>
      </main>

      <footer className="mb-5">
        <h1 className="mb-5 relative w-fit px-5 uppercase mx-auto bg-[#e8602e21] text-black/90 border-accent border-[0.5px] text-xl font-machina font-light  pt-1.5  inline-block">
          contact us via
          <span className="absolute w-0.75 h-0.75 bg-black/60 z-10 top-0 left-0 -translate-x-1/2 -translate-y-1/2"></span>
          <span className="absolute w-0.75 h-0.75 bg-black/60 z-10 top-0 right-0 translate-x-1/2 -translate-y-1/2"></span>
          <span className="corner-dot-bl absolute w-0.75 h-0.75 bg-black/60 z-10 bottom-0 left-0 -translate-x-1/2 translate-y-1/2"></span>
          <span className="corner-dot-br absolute w-0.75 h-0.75 bg-black/60 z-10 bottom-0 right-0 translate-x-1/2 translate-y-1/2"></span>
        </h1>
        <p className="">
          - Discord <br />
          - Email <br />
        </p>
      </footer>
    </>
  );
};
export default Home;
