import Image from "next/image";

// Lista de las imágenes que pusiste en la carpeta public/gallery
const images = [
  { src: "/gallery/1.jpg", alt: "Diseño de uñas elegante" },
  { src: "/gallery/2.jpg", alt: "Maquillaje profesional para eventos" },
  { src: "/gallery/3.jpg", alt: "Manicura con detalles florales" },
  { src: "/gallery/4.jpg", alt: "Pedicura spa con acabado perfecto" },
  { src: "/gallery/5.jpg", alt: "Uñas acrílicas con diseño moderno" },
  { src: "/gallery/6.jpg", alt: "Look de maquillaje de noche" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Nuestro Trabajo
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Una muestra de la calidad y el arte que ponemos en cada detalle.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          
          {images.map((image) => (
            <div key={image.src} className="overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}