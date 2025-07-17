export default function Contact() {
  return (
    <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Ponte en Contacto
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            ¿Lista para tu próxima cita? Envíanos un mensaje y te responderemos a la brevedad.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex flex-col space-y-2">
            <input
              className="max-w-lg flex-1 bg-gray-100 border-gray-200 text-black p-2 rounded-md"
              placeholder="Tu nombre"
              type="text"
            />
            <input
              className="max-w-lg flex-1 bg-gray-100 border-gray-200 text-black p-2 rounded-md"
              placeholder="Tu email"
              type="email"
            />
            <textarea
              className="max-w-lg flex-1 bg-gray-100 border-gray-200 text-black p-2 rounded-md"
              placeholder="Tu mensaje"
              rows={4}
            />
            <button
              type="submit"
              className="bg-black text-white font-semibold py-2 px-6 rounded-full hover:bg-gray-800 transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}