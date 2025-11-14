export default function Home() {
  return (
    <section className="text-center mt-20">
      <h2 className="text-3xl font-bold text-cyan-400 mb-4">
        🚀 Bienvenido a tu Plataforma IA
      </h2>
      <p className="text-gray-300 max-w-xl mx-auto">
        Esta es la base de tu entorno de desarrollo tipo Bolt/Emergent,
        totalmente integrada con Supabase y OpenAI.  
        Desde aquí podrás crear agentes, flujos y dashboards con tu identidad Menarguez-IA.
      </p>
      <div className="mt-10">
        <a
          href="/chat"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold"
        >
          Ir al Chat de IA
        </a>
      </div>
    </section>
  );
}
