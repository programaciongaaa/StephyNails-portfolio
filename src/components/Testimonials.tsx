// Datos de ejemplo para los testimonios
const testimonials = [
  {
    quote: "¡El mejor servicio de uñas que he recibido! Súper profesionales y el resultado final fue impecable. Totalmente recomendadas.",
    name: "Ana García",
    title: "Clienta Frecuente",
  },
  {
    quote: "Me salvaron para mi matrimonio. El maquillaje y peinado quedaron espectaculares y duraron toda la noche. ¡Mil gracias!",
    name: "Lucía Torres",
    title: "Novia Satisfecha",
  },
  {
    quote: "Siempre puntuales y con una atención increíble. La comodidad de que vengan a casa no tiene precio. Calidad A1.",
    name: "Carla Mendoza",
    title: "Clienta Mensual",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Lo que Opinan Nuestras Clientas
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nos enorgullece crear experiencias inolvidables.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
          
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="flex flex-col items-center text-center p-6 rounded-lg border shadow-sm">
              <blockquote className="text-lg font-semibold leading-snug">
                “{testimonial.quote}”
              </blockquote>
              <div className="mt-4 font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.title}</div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}