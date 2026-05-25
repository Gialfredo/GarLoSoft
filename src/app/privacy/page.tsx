export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6" style={{ color: "#14268C" }}>Política de Privacidad</h1>
      
      <div className="p-4 rounded-lg mb-8" style={{ backgroundColor: "#F2F2F2" }}>
        <p className="font-semibold" style={{ color: "#14268C" }}>📅 Última actualización: 25 de mayo de 2026</p>
        <p className="text-gray-600">🏢 Aplicable a: Todas las aplicaciones desarrolladas por GarLoSoft</p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3" style={{ color: "#2669BF" }}>1. Introducción</h2>
        <p className="text-gray-700">
          En GarLoSoft, valoramos y respetamos tu privacidad. Esta Política de Privacidad explica 
          cómo recopilamos, usamos y protegemos tu información cuando utilizas nuestras aplicaciones.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3" style={{ color: "#2669BF" }}>2. Información que Recopilamos</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Información de cuenta:</strong> Nombre, correo electrónico</li>
          <li><strong>Datos de uso:</strong> Interacciones con la aplicación</li>
          <li><strong>Datos del dispositivo:</strong> Modelo, sistema operativo</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3" style={{ color: "#2669BF" }}>3. Servicios de Terceros</h2>
        <p className="text-gray-700 mb-2">Podemos usar servicios como:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Google Play Services</li>
          <li>Firebase (Analytics, Crash Reporting)</li>
          <li>AdMob (anuncios)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3" style={{ color: "#2669BF" }}>4. Seguridad de los Datos</h2>
        <p className="text-gray-700">
          Implementamos medidas de seguridad estándar de la industria, incluyendo encriptación 
          en tránsito (TLS/SSL) y en reposo (AES-256).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3" style={{ color: "#2669BF" }}>5. Tus Derechos</h2>
        <p className="text-gray-700 mb-2">Tienes derecho a:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Acceder a tus datos</li>
          <li>Corregir datos inexactos</li>
          <li>Solicitar la eliminación de tus datos</li>
        </ul>
        <p className="text-gray-700 mt-2">
          Para ejercer estos derechos, contáctanos en: <strong style={{ color: "#2669BF" }}>privacidad@garlosoft.com</strong>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3" style={{ color: "#2669BF" }}>6. Contacto</h2>
        <div className="p-4 rounded-lg" style={{ backgroundColor: "#F2F2F2", borderLeft: `4px solid #2669BF` }}>
          <p>📧 Email: <strong>privacidad@garlosoft.com</strong></p>
          <p>📧 Soporte: <strong>soporte@garlosoft.com</strong></p>
        </div>
      </section>

      <div className="text-center mt-12">
        <a href="/" className="hover:underline" style={{ color: "#2669BF" }}>← Volver al inicio</a>
      </div>
    </div>
  );
}