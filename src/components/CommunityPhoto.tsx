import { Heart, ZoomIn } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const PHOTO_SRC = '/hsg-pinnau-gruppenfoto.jpeg';
const PHOTO_ALT = 'Großes Gruppenfoto mit einem Großteil der Mitglieder der HSG Pinnau in der Sporthalle';

const CommunityPhoto = () => {
  // Auf dem Handy ist das vergrößerte Foto breiter als der Bildschirm: mittig starten, seitlich wischen
  const centerScroll = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const container = e.currentTarget.parentElement;
    if (container) container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
  };

  return (
    <section id="gemeinschaft" className="py-20 bg-gradient-to-b from-primary/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-4 py-2 bg-accent/15 text-accent-foreground rounded-full text-sm font-medium mb-4">
            <Heart className="w-4 h-4 mr-2" />
            Eine Gemeinschaft
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Das sind wir: <span className="text-primary">die HSG Pinnau</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Von den Minis bis zu den Erwachsenen – Spielerinnen, Spieler, Trainerinnen, Trainer und Ehrenamtliche
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              className="group relative block w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-primary/10 border-t-4 border-primary cursor-zoom-in focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
              aria-label="Gruppenfoto vergrößern"
            >
              <img
                src={PHOTO_SRC}
                alt={PHOTO_ALT}
                loading="lazy"
                className="w-full aspect-[3/2] md:aspect-[21/9] object-cover object-[50%_55%] transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-black/45 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                <ZoomIn className="w-3.5 h-3.5" />
                Vergrößern
              </span>
            </button>
          </DialogTrigger>
          <DialogContent aria-describedby={undefined} className="max-w-[95vw] w-[95vw] md:w-max p-0 border-0 bg-black/95 overflow-hidden [&>button]:bg-black/60 [&>button]:text-white [&>button]:p-1.5 [&>button]:rounded-full [&>button]:opacity-100">
            <DialogTitle className="sr-only">Gruppenfoto der HSG Pinnau</DialogTitle>
            <div className="overflow-x-auto md:overflow-hidden">
              <img
                src={PHOTO_SRC}
                alt={PHOTO_ALT}
                onLoad={centerScroll}
                className="h-[60vh] w-auto max-w-none md:h-auto md:max-h-[90vh] md:max-w-[95vw]"
              />
            </div>
            <p className="md:hidden text-center text-white/70 text-xs pb-3">Seitlich wischen, um das ganze Foto zu sehen</p>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default CommunityPhoto;
