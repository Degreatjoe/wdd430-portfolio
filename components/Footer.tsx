import { cacheLife } from 'next/cache';
import SocialCard from './SocialCard';

export default async function Footer() {
  'use cache';
  cacheLife('days');

  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-4 mt-12">
      <div className="container mx-auto text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p>Copyright &copy; {currentYear} | Great Joseph | All rights reserved</p>
        <div className="flex gap-4">
            <SocialCard 
                icon="in" 
                link="https://linkedin.com/in/degreatjoe"
            />
            <SocialCard 
                icon="GH" 
                link="https://github.com/degreatjoe"
            />
        </div>
      </div>
    </footer>
  );
}