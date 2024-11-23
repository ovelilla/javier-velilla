import React from "react";

const Contact = () => {
  return (
    <section className="flex flex-col gap-12 bg-[#121d29] px-8 pb-16 pt-12">
      <h2 className="flex flex-col font-noto text-2xl leading-[1.3] text-white">
        Contacto
      </h2>

      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-lg text-white" htmlFor="name">
            Nombre
          </label>
          <input
            className="flex h-12 items-center rounded-md bg-[#1b2b3b] px-4 text-white focus:outline-none focus:ring focus:ring-white"
            type="text"
            name="name"
            id="name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-lg text-white" htmlFor="email">
            Correo
          </label>
          <input
            className="flex h-12 items-center rounded-md bg-[#1b2b3b] px-4 text-white focus:outline-none focus:ring focus:ring-white"
            type="email"
            name="email"
            id="email"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-lg text-white" htmlFor="message">
            Mensaje
          </label>
          <textarea
            className="resize-none rounded-md bg-[#1b2b3b] p-4 text-white focus:outline-none focus:ring focus:ring-white"
            name="message"
            id="message"
            rows={5}
          />
        </div>

        <button
          className="mt-4 flex h-12 items-center justify-center rounded-full border-2 border-white bg-transparent px-6 text-white"
          type="submit"
        >
          ENVIAR
        </button>
      </form>
    </section>
  );
};

export { Contact };
