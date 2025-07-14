// Definimos una lista de nuestros servicios.
// En un proyecto real, esto vendría de una base de datos.
const services = [
  {
    title: "Manicura Profesional",
    description: "Uñas perfectas, cutículas tratadas y un acabado brillante que dura semanas.",
  },
  {
    title: "Pedicura Spa",
    description: "Relájate mientras transformamos tus pies con exfoliación, hidratación y esmaltado.",
  },
  {
    title: "Diseños y Arte en Uñas",
    description: "Desde un look francés elegante hasta los diseños más atrevidos y creativos.",
  },
];

export default function Services() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Nuestros Servicios
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ofrecemos una gama de servicios de alta calidad para que te sientas y te veas espectacular.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
          
          {/* AQUI ESTÁ LA MAGIA: .map() */}
          {/* "mapeamos" nuestra lista de servicios y por cada uno, creamos una tarjeta (div) */}
          {services.map((service) => (
            <div key={service.title} className="grid gap-1 p-6 rounded-lg bg-white shadow-md">
              <h3 className="text-lg font-bold">{service.title}</h3>
              <p className="text-sm text-gray-500">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}