export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-4" style={{ color: "#14268C" }}>Contacto</h1>
      <p className="text-center text-gray-600 mb-12">
        ¿Tienes un proyecto en mente? Escríbenos y te responderemos lo antes posible.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "#2669BF" }}>Información</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📧</span>
              <div>
                <h3 className="font-semibold" style={{ color: "#14268C" }}>Email</h3>
                <p className="text-gray-600">contacto@garlosoft.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📱</span>
              <div>
                <h3 className="font-semibold" style={{ color: "#14268C" }}>Teléfono</h3>
                <p className="text-gray-600">+503 70528082</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <h3 className="font-semibold" style={{ color: "#14268C" }}>Dirección</h3>
                <p className="text-gray-600">Ahuachapán, El Salvador</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "#2669BF" }}>Envíanos un mensaje</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: "#14268C" }}>Nombre</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2669BF] focus:border-transparent"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: "#14268C" }}>Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2669BF] focus:border-transparent"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: "#14268C" }}>Mensaje</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2669BF] focus:border-transparent"
                placeholder="Cuéntanos sobre tu proyecto..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full text-white py-2 rounded-lg font-semibold transition-colors"
              style={{ backgroundColor: "#2669BF" }}
            >
              Enviar mensaje →
            </button>
          </form>
        </div>
      </div>

      <style>{`
        button:hover {
          background-color: #2A7ABF !important;
        }
      `}</style>
    </div>
  );
}