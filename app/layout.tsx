import "./globals.css";

export const metadata = {
  title: "Menarguez-IA Platform",
  description: "Plataforma de IA de Nacho Menárguez Fernández - Menarguez-IA-Solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#0b1220] text-gray-100 min-h-screen flex flex-col font-sans">
        <header className="flex items-center justify-between p-4 border-b border-[#1f2a44] bg-[#0f1629]">
          <div className="flex items-center gap-3">
            <img
              src="/logo-menarguezia.png"
              alt="Menarguez-IA Logo"
              className="w-10 h-10 rounded-md border border-[#1f2a44]"
            />
            <div>
              <h1 className="text-lg font-semibold text-cyan-400">Menarguez-IA Platform</h1>
              <p className="text-xs text-gray-400">by Nacho Menárguez Fernández</p>
            </div>
          </div>
          <a
            href="https://menarguez-ia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-cyan-300 hover:text-cyan-100"
          >
            menarguez-ia.com
          </a>
        </header>
        <main className="flex-1 p-6">{children}</main>
        <footer className="text-center text-xs text-gray-500 border-t border-[#1f2a44] py-3">
          © 2025 Menarguez-IA-Solutions · Todos los derechos reservados
        </footer>
      </body>
    </html>
  );
}
