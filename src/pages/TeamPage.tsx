import { useParams } from 'react-router-dom';
import { Calendar, Clock, Mail, Phone, MapPin, Users, Target } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { client } from '../../tina/__generated__/client';

const TeamPage = () => {
  const { teamId } = useParams();
  const [teamData, setTeamData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const widgetScriptLoaded = useRef(false);
  const lastWidgetTeamId = useRef<string | null>(null);

  useEffect(() => {
    const fetchTeam = async () => {
      setLoading(true);
      try {
        // Fetch team by teamId (filename)
        const teamRes = await client.queries.mannschaften({ relativePath: `${teamId}.json` });
        const team = teamRes.data.mannschaften;

        // Fetch trainer (contact)
        let trainer = null;
        if (typeof team.trainer === 'object' && team.trainer !== null) {
          trainer = team.trainer;
        } else if (typeof team.trainer === 'string') {
          const trainerPath = (team.trainer as string).replace('content/trainer/', '').replace('.json', '');
          const trainerRes = await client.queries.trainer({ relativePath: `${trainerPath}.json` });
          trainer = trainerRes.data.trainer;
        }

        // Fetch hallen for each training session
        let training = [];
        // Cache for already fetched hallen by id
        const halleCache: Record<string, any> = {};
        if (Array.isArray(team.trainingszeiten)) {
          training = await Promise.all(
            team.trainingszeiten.map(async (session: any) => {
              let halle = null;
              if (typeof session.halle === 'object' && session.halle !== null && session.halle.id) {
                // Use object directly and cache by id
                if (!halleCache[session.halle.id]) {
                  halleCache[session.halle.id] = session.halle;
                }
                halle = halleCache[session.halle.id];
              } else if (typeof session.halle === 'string') {
                // If string, fetch and cache
                if (!halleCache[session.halle]) {
                  const hallePath = (session.halle as string).replace('content/hallen/', '').replace('.json', '');
                  const halleRes = await client.queries.hallen({ relativePath: `${hallePath}.json` });
                  halleCache[session.halle] = halleRes.data.hallen;
                }
                halle = halleCache[session.halle];
              }
              return {
                day: session.wochentag,
                time: session.zeit,
                location: halle ? `${halle.name} (${halle.adresse})` : '',
                bemerkung: session.bemerkung || '',
                halleGoogleMapsUrl: halle && halle.googleMapsUrl ? halle.googleMapsUrl : '',
              };
            }),
          );
        }
        setTeamData({
          name: team.name,
          category: team.jugend || '',
          description: typeof (team as any).description === 'string' ? (team as any).description : '',
          goals: typeof (team as any).goals === 'string' ? (team as any).goals : '',
          contact: trainer
            ? {
                name: trainer.name,
                email: trainer.email,
                phone: trainer.telefon || '',
              }
            : null,
          training,
          instagramUrl: typeof (team as any).instagramUrl === 'string' ? (team as any).instagramUrl : '',
          liga: team.liga || '',
          jahrgang: team.jahrgang || '',
          geschlecht: team.geschlecht || '',
          handball4AllTeamId: team.handball4AllTeamId || '',
        });
      } catch (e) {
        setTeamData(null);
      }
      setLoading(false);
    };
    if (teamId) fetchTeam();
  }, [teamId]);

  // Handball.net Widget Script Loader
  // Script nur einmalig beim ersten Mount laden
  useEffect(() => {
    if (!document.getElementById('handball-widget-script')) {
      const script = document.createElement('script');
      script.id = 'handball-widget-script';
      script.async = true;
      script.src = 'https://www.handball.net/widgets/embed/v1.js';
      document.body.appendChild(script);
    }
  }, []);

  // Widget initialisieren, wenn teamData.handball4AllTeamId und Ziel-Element existiert
  useEffect(() => {
    if (teamData && teamData.handball4AllTeamId) {
      let retryCount = 0;
      const maxRetries = 10;
      const tryInitWidget = () => {
        const container = document.getElementById('handball-spielplan');
        if (!container || container.children.length > 0) {
          if (!container || retryCount < maxRetries) {
            retryCount++;
            setTimeout(tryInitWidget, 100);
          }
          return;
        }
        if (window._hb) {
          window._hb({
            widget: 'spielplan',
            teamId: teamData.handball4AllTeamId,
            container: 'handball-spielplan',
          });
        }
      };
      tryInitWidget();
    }
  }, [teamData]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <span className="text-xl text-muted-foreground">Lade Teamdaten ...</span>
      </div>
    );
  }

  if (!teamData) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-16 flex items-center justify-center min-h-[80vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Team nicht gefunden</h1>
            <p className="text-muted-foreground">Das angeforderte Team existiert nicht.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{teamData.name}</h1>
              <p className="text-xl opacity-90">{teamData.category} ({teamData.jahrgang})</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Team Photo Placeholder */}
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-card-foreground mb-4">Mannschaftsfoto</h2>
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <Users size={64} className="text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Mannschaftsfoto wird bald ergänzt</p>
                  </div>
                </div>
              </div>

              {/* Spielplan Widget & Instagram Feed nebeneinander */}
              <div className="flex flex-col md:flex-row gap-8">
                {/* Spielplan Widget */}
                <div className="flex-1 bg-card rounded-xl p-6 shadow-lg min-w-[320px]">
                  <h3 className="text-xl font-bold text-card-foreground mb-4">Spielplan</h3>
                  {teamData.handball4AllTeamId ? (
                    <div id="handball-spielplan" className="bg-muted rounded-lg p-4 min-h-[400px]" />
                  ) : (
                    <div className="bg-muted rounded-lg p-4 min-h-[400px] flex items-center justify-center text-muted-foreground">
                      <span>Der Spielplan wird in Kürze veröffentlicht.</span>
                    </div>
                  )}
                </div>
                {/* Instagram Feed */}
                {teamData.instagramUrl && (
                  <div className="flex-1 bg-card rounded-xl p-6 shadow-lg min-w-[320px]">
                    <h2 className="text-2xl font-bold text-card-foreground mb-4">Instagram Feed</h2>
                    <div className="bg-muted rounded-lg p-8 text-center">
                      <p className="text-muted-foreground mb-4">
                        Folgt uns auf Instagram für aktuelle Bilder und Updates!
                      </p>
                      <a
                        href={teamData.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        @hsgpinnau
                      </a>
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-6">

              {/* Contact Info */}
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-card-foreground mb-4">Kontakt</h3>
                <div className="space-y-3">
                  {teamData.contact ? (
                    <>
                      <div className="flex items-center">
                        <Mail className="text-primary mr-3" size={20} />
                        <div>
                          <p className="font-medium text-card-foreground">{teamData.contact.name}</p>
                          {teamData.contact.email && (
                            <a
                              href={`mailto:${teamData.contact.email}`}
                              className="text-primary hover:underline"
                            >
                              {teamData.contact.email}
                            </a>
                          )}
                        </div>
                      </div>
                      {teamData.contact.phone && (
                        <div className="flex items-center mt-2">
                          <Phone className="text-primary mr-3" size={20} />
                          <span className="text-muted-foreground">{teamData.contact.phone}</span>
                        </div>
                      )}
                    </>
                  ) : (
                    <p className="text-muted-foreground">Kein Kontakt hinterlegt</p>
                  )}
                </div>
              </div>

              {/* Training Schedule */}
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-card-foreground mb-4">Trainingszeiten</h3>
                <div className="space-y-4">
                  {Array.isArray(teamData.training) && teamData.training.length > 0 ? (
                    teamData.training.map((session, index) => (
                      <div key={index} className="border-l-4 border-accent pl-4 mb-6">
                        {session.bemerkung && (
                          <div className="flex items-center mb-2">
                            <span className="text-xs text-muted-foreground italic">{session.bemerkung}</span>
                          </div>
                        )}
                        <div className="flex items-center mb-1">
                          <Calendar className="text-accent mr-2" size={16} />
                          <span className="font-medium text-card-foreground">{session.day}</span>
                        </div>
                        <div className="flex items-center mb-1">
                          <Clock className="text-accent mr-2" size={16} />
                          <span className="text-muted-foreground">{session.time}</span>
                        </div>
                        <div className="flex items-center mb-1">
                          <MapPin className="text-accent mr-2" size={16} />
                          <span className="text-muted-foreground">{session.location}</span>
                        </div>
                        {/* Google Maps Link and Embedded Map */}
                        {session.location && session.halleGoogleMapsUrl && (
                          <div className="mt-2">
                            <a
                              href={session.halleGoogleMapsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary underline text-sm"
                            >
                              Standort auf Google Maps öffnen
                            </a>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="text-muted-foreground">Keine Trainingszeiten hinterlegt</p>
                  )}
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TeamPage;
