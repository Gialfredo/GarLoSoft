export default function Home() {
  const servicios = [
    {
      icono: "📱",
      titulo: "Apps Móviles",
      descripcion:
        "Desarrollo nativo y multiplataforma para iOS y Android con las mejores prácticas.",
    },
    {
      icono: "🌐",
      titulo: "Web Apps",
      descripcion:
        "Aplicaciones web progresivas (PWA) rápidas, seguras y responsive.",
    },
    {
      icono: "☁️",
      titulo: "Cloud & DevOps",
      descripcion: "Infraestructura escalable en AWS, Google Cloud y Azure.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F2F2F2" }}>
        <div className="container mx-auto text-center max-w-4xl">
          {/* LOGO GRANDE EN EL HERO */}
          <div className="flex justify-center mb-8">
            <img
              src="/logo.png"
              alt="GarLoSoft"
              className="h-24 w-auto md:h-32" // Logo más grande
            />
          </div>

          <div
            className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: "#5ED7F2", color: "#14268C" }}
          >
            ✨ Bienvenido a GarLoSoft
          </div>
          <h1
            className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            style={{ color: "#14268C" }}
          >
            Innovación que <span style={{ color: "#2669BF" }}>transforma</span>{" "}
            ideas
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Desarrollamos software de alta calidad que impulsa el crecimiento de
            tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-primary px-6 py-3 rounded-lg font-semibold shadow-md"
            >
              Comenzar proyecto →
            </a>
            <a
              href="#servicios"
              className="btn-outline px-6 py-3 rounded-lg font-semibold"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section
        id="servicios"
        className="py-20 px-4"
        style={{ backgroundColor: "#14268C" }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Nuestros Servicios</h2>
            <p style={{ color: "#5ED7F2" }} className="text-lg">
              Soluciones tecnológicas diseñadas para tu éxito
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {servicios.map((servicio, index) => (
              <div key={index} className="service-card rounded-xl p-6">
                <div className="text-5xl mb-4">{servicio.icono}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {servicio.titulo}
                </h3>
                <p style={{ color: "#5ED7F2" }} className="opacity-90">
                  {servicio.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F2F2F2" }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold" style={{ color: "#2669BF" }}>
                50+
              </div>
              <div style={{ color: "#14268C" }} className="font-medium">
                Proyectos entregados
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: "#2669BF" }}>
                30+
              </div>
              <div style={{ color: "#14268C" }} className="font-medium">
                Clientes satisfechos
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: "#2669BF" }}>
                4.9
              </div>
              <div style={{ color: "#14268C" }} className="font-medium">
                Calificación promedio
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: "#2669BF" }}>
                24/7
              </div>
              <div style={{ color: "#14268C" }} className="font-medium">
                Soporte técnico
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 px-4"
        style={{ background: "linear-gradient(135deg, #14268C, #2669BF)" }}
      >
        <div className="container mx-auto text-center text-white">
          <h2 className="text-white text-3xl md:text-4xl mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Contáctanos y hagamos realidad tu proyecto tecnológico
          </p>
          <a
            href="/contact"
            className="btn-cta inline-block px-8 py-3 rounded-lg font-semibold shadow-lg"
          >
            Contáctanos →
          </a>
        </div>
      </section>
    </div>
  );
}
