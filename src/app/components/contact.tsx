import React from "react";

const Contact = () => {
  return (
    <section className="flex flex-col gap-8 bg-[#121d29] px-6 pb-16 pt-12">
      <h2 className="flex flex-col font-noto text-[24px] leading-[1.3] text-white">
        Contacto
      </h2>

      <form className="flex flex-col gap-6">
        <label className="flex flex-col gap-2">
          <span className="text-white">Nombre</span>
          <input
            className="flex h-12 items-center rounded-md bg-[#1b2b3b] px-4 text-white focus:outline-none focus:ring focus:ring-white"
            type="text"
            name="name"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-white">Correo</span>
          <input
            className="flex h-12 items-center rounded-md bg-[#1b2b3b] px-4 text-white focus:outline-none focus:ring focus:ring-white"
            type="email"
            name="email"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-white">Mensaje</span>
          <textarea
            className="rounded-md bg-[#1b2b3b] p-4 text-white focus:outline-none focus:ring focus:ring-white"
            name="message"
            rows={4}
          />
        </label>

        <button
          className="mt-4 flex h-12 items-center justify-center rounded-lg border border-white bg-transparent px-6 text-white"
          type="submit"
        >
          ENVIAR
        </button>
      </form>
    </section>
  );
};

export { Contact };
