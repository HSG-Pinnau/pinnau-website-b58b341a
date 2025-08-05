

import { Target, Eye, Heart, Star, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTeamsCached } from './navigation/teamDataCache';



const About = () => {
  const [teamStats, setTeamStats] = useState<{ erwachsene: number; jugend: number }>({ erwachsene: 0, jugend: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTeamsCached()
      .then((structure) => {
        const erwachsene = (structure.erwachsene.damen.length || 0) + (structure.erwachsene.herren.length || 0);
        const jugend = (structure.jugend.maennlich.length || 0) + (structure.jugend.weiblich.length || 0) + (structure.minis.length || 0) + (structure.toppis.length || 0);
        setTeamStats({ erwachsene, jugend });
        setLoading(false);
      });
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Über die HSG Pinnau
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seit 2011 vereinen wir als Spielgemeinschaft die Handballvereine TSV Prisdorf und VfL Pinneberg
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Unsere Mission</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Die HSG Pinnau steht für Teamgeist, Fairplay und sportliche Weiterentwicklung. 
              Wir bieten Handball für alle Altersklassen - von den Minis bis zu den Erwachsenen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/uber-uns"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 text-center"
              >
                Mehr über uns erfahren
              </Link>
              <Link
                to="/mannschaften"
                className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200 text-center"
              >
                Unsere Mannschaften
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-primary/5 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">{loading ? '...' : teamStats.erwachsene}</div>
              <div className="text-muted-foreground">Erwachsenen-teams</div>
            </div>
            <div className="bg-accent/10 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-accent-foreground mb-2">{loading ? '...' : teamStats.jugend}</div>
              <div className="text-muted-foreground">Jugendteams</div>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Mitglieder</div>
            </div>
            <div className="bg-accent/10 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-accent-foreground mb-2">2</div>
              <div className="text-muted-foreground">Stammvereine</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
