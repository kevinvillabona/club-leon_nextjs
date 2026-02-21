export default function Footer() {
  return (
    <footer className="bg-black py-8 mt-12 border-t border-gray-900">
      <div className="container mx-auto px-4 text-center flex flex-col items-center">
        <img src="/assets/logo01.png" alt="Logo" className="h-10 mb-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
        <p className="text-gray-600 text-sm">© 2022 Club Deportivo León. Diseñado para la élite.</p>
      </div>
    </footer>
  );
}