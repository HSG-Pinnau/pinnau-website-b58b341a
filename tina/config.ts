import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main'

export default defineConfig({
  branch,

  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "trainer",
        label: "Trainer",
        path: "content/trainer",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
          },
          {
            type: "string",
            name: "email",
            label: "E-Mail",
          },
          {
            type: "string",
            name: "telefon",
            label: "Telefon",
          },
        ]
      },
      {
        name: "hallen",
        label: "Hallen",
        path: "content/hallen",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
          },
          {
            type: "string",
            name: "adresse",
            label: "Adresse",
          },
          {
            type: "string",
            name: "googleMapsUrl",
            label: "Google Maps URL",
          },
        ]
      },
      {
        name: "mannschaften",
        label: "Mannschaften",
        path: "content/mannschaften",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
          },
          {
            type: "string",
            name: "beschreibung",
            label: "Beschreibung",
          },
          {
            type: "string",
            name: "jahrgang",
            label: "Jahrgang",
            description: "Jahrgang der Mannschaft, z.B. '2008/2009'",},
          {
            type: "string",
            name: "geschlecht",
            label: "Geschlecht",
            options: ["Männlich", "Weiblich", "Gemischt"],
          },
          {
            type: "string",
            name: "jugend",
            label: "Jugend",
            options: [
              "Erwachsene",
              "A-Jugend",
              "B-Jugend",
              "C-Jugend",
              "D-Jugend",
              "E-Jugend",
              "Minis",
              "Toppis",
            ]
          },
          {
            type: "string",
            name: "liga",
            label: "Liga",
            options: [
              "Regionalliga",
              "Oberliga",
              "Landesliga",
              "Bezirksoberliga",
              "Kreisliga",
              "Keine Liga",
              "Kein Spielbetrieb"
            ]
          },
          {
            type: "reference",
            name: "trainer",
            label: "Trainer",
            collections: ["trainer"],
          },
          {
            type: "object",
            name: "trainingszeiten",
            label: "Trainingszeiten",
            list: true,
            fields: [
              {
                type: "string",
                name: "wochentag",
                label: "Wochentag",
                options: [
                  "Montag",
                  "Dienstag",
                  "Mittwoch",
                  "Donnerstag",
                  "Freitag",
                  "Samstag",
                  "Sonntag"
                ]
              },
              {
                type: "string",
                name: "zeit",
                label: "Zeit",
                description: "Format: 'HH:MM-HH:MM' (e.g., '18:00-19:30')",
              },
              {
                type: "reference",
                name: "halle",
                label: "Halle",
                collections: ["hallen"],
              },
              {
                type: "string",
                name: "bemerkung",
                label: "Bemerkung",
                description: "Optionale Bemerkung zur Trainingszeit",
              }
            ]
          },
          {
            type: "string",
            name: "instagramUrl",
            label: "Instagram URL",
            description: "Optionaler Link zum Instagram-Profil der Mannschaft (instagram.com/INSAGRAM_ACCOUNT_NAME)"
          },
          {
            type: "string",
            name: "handball4AllTeamId",
            label: "Handball.net Team Id",
            description: "Optionales Team Id für Handball.net, zum einbinden des Spielplans",
          }
        ]
      },
      {
        name: "vorstand",
        label: "Vorstand",
        path: "content/vorstand",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
          },
          {
            type: "string",
            name: "rolle",
            label: "Rolle",
          },
          {
            type: "string",
            name: "email",
            label: "E-Mail",
          },
          {
            type: "boolean",
            name: "hauptVorstand",
            label: "Hauptvorstand",
            description: "Ist diese Person im Hauptvorstand?",
          }
        ]
      },
      {
        name: "blog",
        label: "Blog",
        path: "content/blog",
        format: "md",
        fields: [
          {
            type: "string",
            name: "titel",
            label: "Titel",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "kurzbeschreibung",
            label: "Kurzbeschreibung",
            description: "Kurze Zusammenfassung des Artikels für die Übersicht",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "datetime",
            name: "datum",
            label: "Datum",
            required: true,
          },
          {
            type: "string",
            name: "kategorie",
            label: "Kategorie",
            options: [
              "Spielbericht",
              "Event",
              "Training", 
              "Erfolg",
              "Vereinsleben",
              "Ausrüstung"
            ],
            required: true,
          },
          {
            type: "string",
            name: "autor",
            label: "Autor",
            required: true,
          },
          {
            type: "image",
            name: "bild",
            label: "Bild",
            description: "Hauptbild für den Artikel",
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured",
            description: "Soll dieser Artikel als Highlight angezeigt werden?",
          },
          {
            type: "rich-text",
            name: "inhalt",
            label: "Inhalt",
            isBody: true,
            templates: [
              {
                name: "DateTime",
                label: "Date & Time",
                inline: true,
                fields: [
                  {
                    name: "format",
                    label: "Format",
                    type: "string",
                    options: ["utc", "iso", "local"],
                  },
                ],
              },
            ],
          }
        ]
      }
    ],
  },
});
