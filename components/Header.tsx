import NavLinks from '@/components/NavLinks';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md mb-8 sticky top-0 z-50 flex flex-col md:flex-row justify-between items-center">
      <div id="header-title" className="text-2xl font-bold flex items-center">
        Great Joseph
      </div>
      <NavLinks />
    </header>
  );
}