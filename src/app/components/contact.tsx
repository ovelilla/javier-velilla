import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="flex flex-col items-center gap-12 bg-[#121d29] px-8 py-12 sm:px-12 sm:py-20 md:gap-16 md:px-16 md:py-28 md:text-4xl lg:gap-20 lg:px-24 lg:py-36 xl:px-32 xl:py-48 2xl:px-48 2xl:py-40">
      <div className="flex max-w-screen-2xl w-full flex-col gap-12 md:gap-16 lg:flex-row lg:gap-20 xl:gap-36 2xl:gap-48">
        <div className="relative order-2 aspect-[4/3] basis-1/2 lg:order-1">
          <Image
            alt="Retiro"
            fill
            style={{ objectFit: "cover" }}
            priority
            src="/atardecer-en-el-retiro.jpg"
          />
        </div>

        <div className="order-1 flex basis-1/2 flex-col gap-8 md:gap-12 lg:order-2">
          <h2 className="flex flex-col font-noto text-3xl text-white md:text-4xl">
            Contacto
          </h2>

          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                className="text-lg text-white md:text-xl xl:text-2xl"
                htmlFor="name"
              >
                Nombre
              </label>
              <input
                className="flex h-12 items-center rounded-md bg-[#1b2b3b] px-4 text-lg text-white focus:outline-none focus:ring focus:ring-white md:text-xl xl:h-14 xl:rounded-lg xl:text-2xl"
                type="text"
                name="name"
                id="name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-lg text-white md:text-xl xl:text-2xl"
                htmlFor="email"
              >
                Correo
              </label>
              <input
                className="flex h-12 items-center rounded-md bg-[#1b2b3b] px-4 text-lg text-white focus:outline-none focus:ring focus:ring-white md:text-xl xl:h-14 xl:rounded-lg xl:text-2xl"
                type="email"
                name="email"
                id="email"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-lg text-white md:text-xl xl:text-2xl"
                htmlFor="message"
              >
                Mensaje
              </label>
              <textarea
                className="resize-none rounded-md bg-[#1b2b3b] p-4 text-lg text-white focus:outline-none focus:ring focus:ring-white md:text-xl xl:rounded-lg xl:text-2xl"
                name="message"
                id="message"
                rows={5}
              />
            </div>

            <button
              className="mt-4 xl:mt-8 flex h-12 items-center justify-center rounded-md border-2 border-white bg-transparent px-6 text-lg text-white md:text-xl xl:h-14 xl:rounded-lg xl:text-2xl"
              type="submit"
            >
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export { Contact };
