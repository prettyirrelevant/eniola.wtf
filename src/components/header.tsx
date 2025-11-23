import { ScrambleText } from '@/components/scramble-text';
import { Building2, MapPin } from 'lucide-react';

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-white">
        <span className="inline-block">
          <ScrambleText text="isaac adewumi" />
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          lagos, nigeria
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          swe @ rotki
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up">
        i'm a software engineer with an electronic & electrical engineering
        background. these days, i write software, obsess over
        codebase architecture, and when i'm not pushing commits, you'll find me
        either watching manchester united matches, gaming, or listening to music.
      </p>
    </header>
  );
}
