interface SocialCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
}

export default function SocialCard({ title, description, icon, link }: SocialCardProps) {
  return (
    <div className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded flex items-center gap-4">
      <div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            <div className="text-blue-600 text-2xl">{icon}</div>
          </a>
        )}
      </div>
    </div>
  );
}
