export default function CTA() {
  return (
    <section className="max-w-300 mx-auto px-6 pt-40 text-secondary">
      <div className="bg-[#101010] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden group">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
          Pronto para evoluir seus vídeos?
        </h2>
        <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto">
          Edição pensada para valorizar sua ideia, manter o ritmo certo e
          entregar vídeos que realmente conectam com o público.
        </p>
        <button className="cursor-pointer uppercase bg-white text-black px-12 h-16 rounded-full font-bold hover:bg-primary hover:text-white transition-colors duration-300">
          Fale no WhatsApp
        </button>
      </div>
    </section>
  );
}
