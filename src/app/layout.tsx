import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GarLoSoft | Soluciones Tecnológicas",
  description:
    "Desarrollo de aplicaciones móviles y soluciones de software de alta calidad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <a href="/" className="flex items-center gap-2">
                <img src="/logo.png" alt="GarLoSoft" className="h-12 w-auto" />
                <span
                  className="text-xl font-bold"
                  style={{ color: "#14268C" }}
                >
                  GarLoSoft
                </span>
                <span className="text-lg" style={{ color: "#5ED7F2" }}>
                  🚀
                </span>
              </a>

              {/* Navegación */}
              <nav className="hidden md:flex gap-8">
                <a href="/" className="nav-link font-medium">
                  Inicio
                </a>
                <a href="/#servicios" className="nav-link font-medium">
                  Servicios
                </a>
                <a href="/privacy" className="nav-link font-medium">
                  Privacidad
                </a>
                <a href="/contact" className="nav-link font-medium">
                  Contacto
                </a>
              </nav>

              {/* Botón */}
              <a
                href="/contact"
                className="btn-header hidden md:inline-block px-5 py-2 rounded-lg font-semibold"
              >
                Empezar
              </a>
            </div>
          </div>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer
          style={{ backgroundColor: "#14268C" }}
          className="text-gray-300 mt-20"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">
                  GarLoSoft
                </h3>
                <p className="text-sm">
                  Innovación tecnológica para un futuro mejor.
                </p>
              </div>
              <div>
                <h4 className="text-white text-lg font-semibold mb-4">
                  Enlaces
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/privacy" className="footer-link">
                      Política de Privacidad
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="footer-link">
                      Términos de Servicio
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="footer-link">
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white text-lg font-semibold mb-4">
                  Contacto
                </h4>
                <p className="text-sm">📧 contacto@garlosoft.com</p>
              </div>
            </div>
            <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm">
              <p>
                &copy; {new Date().getFullYear()} GarLoSoft. Todos los derechos
                reservados.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
