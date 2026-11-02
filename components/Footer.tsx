import SocialCard from './SocialCard';

export default function Footer() {  
  return (
    <footer className="bg-gray-800 text-white py-4 mt-12">
      <div className="container mx-auto text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p>Copyright &copy; {new Date().getFullYear()} | Great Joseph | All rights reserved</p>
        <div className="flex gap-4">
            <SocialCard 
                title="LinkedIn" 
                description="Connect with me on LinkedIn" 
                icon="in" 
                link="https://linkedin.com/in/degreatjoe"
            />
            <SocialCard 
                title="GitHub" 
                description="Check out my GitHub repositories" 
                icon="GH" 
                link="https://github.com/degreatjoe"
            />
        </div>
      </div>
    </footer>
  );
}