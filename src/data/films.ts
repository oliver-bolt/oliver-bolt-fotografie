export interface FilmCredit {
  label: string;
  value: string;
}

export interface FilmStill {
  src: string; // filename, e.g. "film-tsunami-1.png" — resolved at runtime via filmAssets
  alt: string;
}

export interface Film {
  id: string;
  title: string;
  year: number;
  format: string;
  broadcaster: string;
  duration: string;
  embedUrl: string;
  embedType: "srf" | "vimeo";
  credits: FilmCredit[];
  tags: string[];
  stills: FilmStill[];
  description: string;
  metaLine: string;
  status: "released" | "in-production";
  coverStillIndex?: number;
}

export const filmsData: Film[] = [
  {
    id: "tsunami-2004",
    title: "Der Tsunami von 2004",
    year: 2024,
    format: "Docudrama series «Es geschah am…» · Episode 7",
    broadcaster: "SRF",
    duration: "92 min",
    embedUrl:
      "https://www.srf.ch/play/embed?urn=urn:srf:video:c72f10b3-1fb4-4a80-b12c-b2d264843948&subdivisions=false",
    embedType: "srf",
    credits: [
      { label: "My role", value: "Line Producer" },
      { label: "Director", value: "Wendy Pillonel" },
      { label: "Camera", value: "René Schönenberger" },
      { label: "Editing", value: "Nicole Hussy" },
      { label: "Executive Producer", value: "Rolf Elsener" },
    ],
    tags: ["TV"],
    coverStillIndex: 4,
    stills: [
      { src: "film-tsunami-1.png", alt: "Der Tsunami von 2004 — Still 1" },
      { src: "film-tsunami-2.png", alt: "Der Tsunami von 2004 — Still 2" },
      { src: "film-tsunami-3.png", alt: "Der Tsunami von 2004 — Still 3" },
      { src: "film-tsunami-4.png", alt: "Der Tsunami von 2004 — Still 4" },
      { src: "film-tsunami-5.png", alt: "Der Tsunami von 2004 — Still 5" },
      { src: "film-tsunami-6.png", alt: "Der Tsunami von 2004 — Still 6" },
    ],
    description: `What happened to my daughter and my wife? A fateful day in the 2004 tsunami.

The latest episode tells the story of the Brefin family, who were torn apart by the tsunami in Southeast Asia on 26 December 2004. At its centre is the father's search for his daughter Mireille and his wife Rosette, as well as the long journey back to hope and the will to live. The Brefin family stands as an example for the many victims and survivors of this catastrophe.

As line producer, the key challenge was to depict the force of the tsunami in a visually convincing way without a dedicated VFX budget. During the concept phase, every setting was examined from a production perspective: which scenes could be realized cost-effectively at the Leutschenbach site, which would require real exterior locations?

The Thai hospital was built on the SRF site and filled with around forty Thai extras. Additional interior locations were likewise created in the studio under controlled conditions. For transit scenes, the Messe Zurich exhibition centre stood in as an alternative to the airport. For the sea and exterior settings, a studio solution or a shoot in the Mediterranean would have been neither visually nor economically convincing. Weighing up the use of resources and the desired dramatic impact led to the decision in favour of targeted shooting days on the original locations in Thailand.

For the work on site, a local line producer was brought in to coordinate permits and service providers. Coordination between Swiss heads of department, cast and Thai service crew required structured communication and sensitivity to different production cultures. Selected sequences were additionally created using greenscreen. By combining studio builds in Zurich with filming on location in Thailand, the international scale of the story could be realized without exceeding the available budget.`,
    metaLine: "TV · SRF · Docudrama · 2024",
    status: "released",
  },
  {
    id: "buehrle-kunstraub",
    title: "Der Bührle-Kunstraub",
    year: 2023,
    format: "Docudrama series «Es geschah am…» · Episode 6",
    broadcaster: "SRF",
    duration: "99 min",
    embedUrl:
      "https://www.srf.ch/play/embed?urn=urn:srf:video:231ec8f0-755d-44d3-9113-e677dc8cc106&subdivisions=false",
    embedType: "srf",
    credits: [
      { label: "My role", value: "Production Manager" },
      { label: "Director", value: "Stefan Jäger" },
      { label: "Camera", value: "René Schönenberger" },
      { label: "Editing", value: "Nicole Hussy" },
      { label: "Executive Producer", value: "Rolf Elsener" },
    ],
    tags: ["TV"],
    coverStillIndex: 4,
    stills: [
      { src: "film-buehrle-1.jpg", alt: "Der Bührle-Kunstraub — Still 1" },
      { src: "film-buehrle-2.jpg", alt: "Der Bührle-Kunstraub — Still 2" },
      { src: "film-buehrle-3.jpg", alt: "Der Bührle-Kunstraub — Still 3" },
      { src: "film-buehrle-4.jpg", alt: "Der Bührle-Kunstraub — Still 4" },
      { src: "film-buehrle-5.jpg", alt: "Der Bührle-Kunstraub — Still 5" },
      { src: "film-buehrle-6.jpg", alt: "Der Bührle-Kunstraub — Still 6" },
    ],
    description: `Undercover investigators infiltrate the mafia, lure fences to St. Moritz in the canton of Graubünden and pretend to set up a deal. With film-worthy methods, Zurich's justice system recovers a 100-million-franc painting stolen during the 2008 robbery at the Bührle Museum.

The sixth episode focused on the spectacular robbery of the Bührle collection in February 2008. Four major works by Monet, Cézanne, van Gogh and Degas with a total value of around 100 million Swiss francs were stolen. The film sheds light on the international police investigation and the complex recovery of these works.

Collaboration with the Bührle Foundation and involved contemporary witnesses was central to the production. Because of previous media experiences, the foundation initially approached the project with caution. By clearly focusing the content on the robbery and the recovery of the works, while deliberately excluding the provenance issue, it was possible to gradually build trust and establish a constructive collaboration.

Although the story had international dimensions, most of the scenes were shot in Switzerland. Through targeted location scouting in Zurich and precise consolidation of settings, the changes of place could be depicted convincingly on screen. In addition, selected sequences were filmed on location in Serbia with a reduced skeleton crew and combined with the scenes shot in Switzerland. In parallel, image rights for reproductions of the artworks had to be clarified, requiring close coordination with the rights holders. With clear production logic and economical use of resources, we managed to convey the international reach of the story in a convincing way.`,
    metaLine: "TV · SRF · Docudrama · 2023",
    status: "released",
  },
  {
    id: "sr111-halifax",
    title: "SR111 – Absturz über Halifax",
    year: 2022,
    format: "Docudrama series «Es geschah am…» · Episode 5",
    broadcaster: "SRF",
    duration: "95 min",
    embedUrl:
      "https://www.srf.ch/play/embed?urn=urn:srf:video:0c987c98-2c6f-4d6e-9927-9e241a0ecac5&subdivisions=false",
    embedType: "srf",
    credits: [
      { label: "My role", value: "Production Manager" },
      { label: "Director", value: "Chanelle Eidenbenz" },
      { label: "Camera", value: "René Schönenberger" },
      { label: "Editing", value: "Nicole Hussy" },
      { label: "Executive Producer", value: "Rolf Elsener" },
    ],
    tags: ["TV"],
    coverStillIndex: 4,
    stills: [
      { src: "film-sr111-1.jpg", alt: "Swissair 111 – Absturz über Halifax — Still 1" },
      { src: "film-sr111-2.jpg", alt: "Swissair 111 – Absturz über Halifax — Still 2" },
      { src: "film-sr111-3.jpg", alt: "Swissair 111 – Absturz über Halifax — Still 3" },
      { src: "film-sr111-4.jpg", alt: "Swissair 111 – Absturz über Halifax — Still 4" },
      { src: "film-sr111-5.jpg", alt: "Swissair 111 – Absturz über Halifax — Still 5" },
      { src: "film-sr111-6.jpg", alt: "Swissair 111 – Absturz über Halifax — Still 6" },
    ],
    description: `3 September 1998. Off the Canadian coast near Halifax, a Swissair aircraft en route from New York to Geneva crashes into the sea. 229 people die.

After the train and ship disasters, this episode turned to the most historically significant plane crash in Swiss aviation history. Expectations for a visually precise and at the same time responsible portrayal were correspondingly high. The central production question concerned the realization of the MD-11 cabin and cockpit settings.

Because there was no suitable aircraft of this type left in Switzerland and stationing a plane for filming would not have been economically viable, a complete reconstruction was considered but dismissed on budget grounds. The solution was found in using type-accurate training mock-ups operated by Lufthansa in Zurich. After negotiations, we were able to secure the largest mock-up for several shooting days. The passenger cabin of an A330 was converted by the art department into the interior of a Swissair MD-11.

For the cockpit scenes, Lufthansa's training simulators were not available because they were in constant use. Instead, an external simulator of a Boeing 777 was rented. This deliberate compromise was implemented in close consultation with subject-matter experts. To ensure realistic procedures, active pilots accompanied the production as advisors and coached the actors before and during shooting. Original Swissair uniforms were provided by a private collector and further enhanced visual authenticity. The film achieved strong ratings and continues to perform consistently well on digital platforms. Within the Swissair community in particular, the production was perceived as careful and respectful.`,
    metaLine: "TV · SRF · Docudrama · 2022",
    status: "released",
  },
  {
    id: "attentat-zug",
    title: "Das Attentat von Zug",
    year: 2021,
    format: "Docudrama series «Es geschah am…» · Episode 4",
    broadcaster: "SRF",
    duration: "100 min",
    embedUrl:
      "https://www.srf.ch/play/embed?urn=urn:srf:video:6bcb6a8a-97a6-49ff-9097-9413d02e9be0&subdivisions=false",
    embedType: "srf",
    credits: [
      { label: "My role", value: "Production Manager" },
      { label: "Director", value: "Daniel von Aarburg" },
      { label: "Camera", value: "René Schönenberger" },
      { label: "Editing", value: "Nicole Hussy" },
      { label: "Executive Producer", value: "Rolf Elsener" },
    ],
    tags: ["TV"],
    coverStillIndex: 2,
    stills: [
      { src: "film-attentat-zug-1.jpg", alt: "Das Attentat von Zug — Still 1" },
      { src: "film-attentat-zug-2.jpg", alt: "Das Attentat von Zug — Still 2" },
      { src: "film-attentat-zug-3.jpg", alt: "Das Attentat von Zug — Still 3" },
      { src: "film-attentat-zug-4.jpg", alt: "Das Attentat von Zug — Still 4" },
      { src: "film-attentat-zug-5.jpg", alt: "Das Attentat von Zug — Still 5" },
      { src: "film-attentat-zug-6.jpg", alt: "Das Attentat von Zug — Still 6" },
    ],
    description: `On 27 September 2001, a man enters the Zug cantonal parliament chamber armed and kills fourteen politicians. An attack that changed Switzerland.

In contrast to the previous episodes, this story did not revolve around an accident but around an act of deliberate violence. The material therefore required an especially responsible and restrained approach to staging. Early on, it was decided to avoid an action-driven depiction of the attack and instead suggest it in a reduced, illustrative manner in the studio.

For reasons of piety and sensitivity, the key scene of entering the government building could not be filmed at the original location. At the same time, a seamless connection with existing archival footage was necessary. For this, a Zurich school building with an almost identical façade design was chosen and approved as a filming location under defined conditions. For a realistic portrayal, we worked closely with members of police special units, who advised the staging and ensured that tactical procedures were depicted accurately.`,
    metaLine: "TV · SRF · Docudrama · 2021",
    status: "released",
  },
  {
    id: "bis-dass-der-tod",
    title: "Bis dass der Tod uns scheidet",
    year: 2020,
    format: "Docudrama series «Es geschah am…» · Episode 3",
    broadcaster: "SRF",
    duration: "91 min",
    embedUrl:
      "https://www.srf.ch/play/embed?urn=urn:srf:video:10e9b32e-3359-4c5d-8c0a-ccb0aa0b2a77&subdivisions=false",
    embedType: "srf",
    credits: [
      { label: "My role", value: "Production Manager" },
      { label: "Director", value: "Wendy Pillonel" },
      { label: "Camera", value: "René Schönenberger" },
      { label: "Editing", value: "Nicole Hussy" },
      { label: "Executive Producer", value: "Rolf Elsener" },
    ],
    tags: ["TV"],
    coverStillIndex: 3,
    stills: [
      { src: "film-bisdassdertod-1.jpg", alt: "Bis dass der Tod uns scheidet — Still 1" },
      { src: "film-bisdassdertod-2.jpg", alt: "Bis dass der Tod uns scheidet — Still 2" },
      { src: "film-bisdassdertod-3.jpg", alt: "Bis dass der Tod uns scheidet — Still 3" },
      { src: "film-bisdassdertod-4.jpg", alt: "Bis dass der Tod uns scheidet — Still 4" },
      { src: "film-bisdassdertod-5.jpg", alt: "Bis dass der Tod uns scheidet — Still 5" },
      { src: "film-bisdassdertod-6.jpg", alt: "Bis dass der Tod uns scheidet — Still 6" },
    ],
    description: `12 October 1944. The happiest day of a life turns into a major catastrophe. A wedding party from the Entlebuch region is celebrating on Lake Lucerne when the ship collides with a barge. Twenty people die, including the bride. In the village of Escholzmatt, fourteen children are left without parents.

The story of a shipwreck in 1944 led to a significantly higher production effort than in the previous episodes. The historical setting required substantial additional work in costumes, production design, and extras. Already in the budgeting phase it became clear that the flat funding granted would not sufficiently cover these requirements. In particular, the wedding scenes with numerous costumed extras demanded additional funds and expanded production staff resources. After clarifying this additional need, the extra budget was approved.

A visually convincing depiction of the shipwreck was central to the film. The ship's scenes were shot over several nights in different locations on Lake Lucerne with a roughly 50-strong team of boat operators, rescue divers, performers, and film crew. After weather-related interruptions in the first shooting phase, parts of the sequences had to be rescheduled and completed as pick-up shoots, which required precise timing and personnel coordination.

The sinking was deliberately realized as a practical stunt. To this end, a suitable historic vessel was acquired for the production, and the cabin was rebuilt for the corresponding sequence. With careful preparation and targeted use of resources, we were able to achieve a dense, immersive visual impact. The land-based scenes were filmed in Escholzmatt, the historic original setting of the events. Close collaboration with the local population facilitated the logistics and contributed to the atmospheric credibility of the finished film. The production took place during the COVID pandemic, which required additional coordination with cantonal authorities as well as flexible adjustments to the shooting schedule. Short-notice cast dropouts made repeated rescheduling necessary. Initial skepticism among some of those affected gave way over the course of the broadcast to predominantly positive feedback. Many relatives perceived the film as respectful and nuanced.`,
    metaLine: "TV · SRF · Docudrama · 2020",
    status: "released",
  },
  {
    id: "postraub",
    title: "Der Postraub des Jahrhunderts",
    year: 2020,
    format: "Docudrama series «Es geschah am…» · Episode 2",
    broadcaster: "SRF",
    duration: "99 min",
    embedUrl:
      "https://www.srf.ch/play/embed?urn=urn:srf:video:61e343de-ebe6-4e51-ac42-b656eeff5215&subdivisions=false",
    embedType: "srf",
    credits: [
      { label: "My role", value: "Production Manager" },
      { label: "Director", value: "Wendy Pillonel" },
      { label: "Camera", value: "René Schönenberger" },
      { label: "Editing", value: "Nicole Hussy" },
      { label: "Executive Producer", value: "Rolf Elsener" },
    ],
    tags: ["TV"],
    coverStillIndex: 3,
    stills: [
      { src: "film-postraub-1.png", alt: "Der Postraub des Jahrhunderts — Still 1" },
      { src: "film-postraub-2.png", alt: "Der Postraub des Jahrhunderts — Still 2" },
      { src: "film-postraub-3.png", alt: "Der Postraub des Jahrhunderts — Still 3" },
      { src: "film-postraub-4.png", alt: "Der Postraub des Jahrhunderts — Still 4" },
      { src: "film-postraub-5.png", alt: "Der Postraub des Jahrhunderts — Still 5" },
      { src: "film-postraub-6.png", alt: "Der Postraub des Jahrhunderts — Still 6" },
    ],
    description: `Five petty criminals go for the big score. They rob Zurich's Fraumünster post office and make off with 53 million Swiss francs.

In the second episode, we turned to the Fraumünster post office robbery of 1997 in Zurich. The debriefing of the first episode showed that, for the further development of the series, a director with stronger feature-film experience would be beneficial. With Wendy Pillonel, we were able to bring on board an experienced director with whom there was already an established working relationship.

Because the episodic budget offered only limited scope for expanding the technical crew, part of the cast was deliberately made up of non-professional actors. This approach proved sustainable both in terms of authenticity and production economy. The large number of locations required precise planning within a clearly defined ten-day schedule. Securing the filming permit for the courtyard of the former Fraumünster post office as the original location was only possible under sensitive conditions.

Because several scenes were staged with replica firearms, appropriate safety concepts, coordination with authorities, and clear on-set rules were necessary, particularly given the historical nature of the crime scene.`,
    metaLine: "TV · SRF · Docudrama · 2020",
    status: "released",
  },
  {
    id: "geisterzug-spiez",
    title: "Der Geisterzug von Spiez",
    year: 2019,
    format: "Docudrama series «Es geschah am…» · Episode 1",
    broadcaster: "SRF",
    duration: "107 min",
    embedUrl:
      "https://www.srf.ch/play/embed?urn=urn:srf:video:0d1ac273-8f18-4de4-90d2-5949f0a6e1af&subdivisions=false",
    embedType: "srf",
    credits: [
      { label: "My role", value: "Production Manager" },
      { label: "Director", value: "Marc Schippert" },
      { label: "Camera", value: "René Schönenberger" },
      { label: "Editing", value: "Nicole Hussy" },
      { label: "Executive Producer", value: "Rolf Elsener" },
    ],
    tags: ["TV"],
    coverStillIndex: 1,
    stills: [
      { src: "film-geisterzug-1.png", alt: "Der Geisterzug von Spiez — Still 1" },
      { src: "film-geisterzug-2.png", alt: "Der Geisterzug von Spiez — Still 2" },
      { src: "film-geisterzug-3.png", alt: "Der Geisterzug von Spiez — Still 3" },
      { src: "film-geisterzug-4.png", alt: "Der Geisterzug von Spiez — Still 4" },
      { src: "film-geisterzug-5.png", alt: "Der Geisterzug von Spiez — Still 5" },
      { src: "film-geisterzug-6.png", alt: "Der Geisterzug von Spiez — Still 6" },
    ],
    description: `A train rattles through the night, the brakes fail, and the track slopes downwards. A few minutes remain to decide how the train can be brought to a halt.

The first episode of SRF's docudrama series "Es geschah am …" focuses on a freight train accident on the BLS line in the Bernese Oberland. At the same time, it marked the first fully in-house production with fictionalized scenes in quite some time and set new production parameters for the series.

The tight budget of the pilot required a deliberately lean production setup and precise coordination of time and personnel resources. Production tasks were consolidated to ensure a stable and efficient shooting schedule within the given constraints. For the fictional scenes, authenticity was crucial. Filming therefore took place largely in real working environments such as freight trains and signal boxes, which demanded detailed logistical planning and close coordination with BLS.`,
    metaLine: "TV · SRF · Docudrama · 2019",
    status: "released",
  },
  {
    id: "der-unschuldige",
    title: "Der Unschuldige",
    year: 2018,
    format: "Feature film",
    broadcaster: "8horses · Augenschein",
    duration: "114 min",
    embedUrl:
      "https://player.vimeo.com/video/289874675?h=c0006d5fb9&title=0&byline=0&portrait=0",
    embedType: "vimeo",
    credits: [
      { label: "My role", value: "Focal Stage Production Manager" },
      { label: "Director", value: "Simon Jaquemet" },
      { label: "Camera", value: "Gabriel Sandru" },
      { label: "Editing", value: "Christof Schertenleib" },
      { label: "Executive Producers", value: "Tolga Dilsiz, Aurelius Eisenreich" },
    ],
    tags: ["CINEMA"],
    coverStillIndex: 0,
    stills: [
      { src: "film-der-unschuldige-1.png", alt: "Der Unschuldige — Titelbild" },
      { src: "film-der-unschuldige-2.png", alt: "Der Unschuldige — Ruth vor Publikum" },
      { src: "film-der-unschuldige-3.png", alt: "Der Unschuldige — Familie am Esstisch" },
      { src: "film-der-unschuldige-4.png", alt: "Der Unschuldige — Ruth allein im Saal" },
      { src: "film-der-unschuldige-5.png", alt: "Der Unschuldige — Nachtszene in Blau" },
      { src: "film-der-unschuldige-6.png", alt: "Der Unschuldige — Konfrontation" },
    ],
    description: "Feature film directed by Simon Jaquemet, produced by 8horses and Augenschein.",
    metaLine: "Cinema · 8horses · Augenschein · Feature film · 2018",
    status: "released",
  },
  {
    id: "zwischenstopp",
    title: "Zwischenstopp",
    year: 2017,
    format: "Short film",
    broadcaster: "2:1 Film",
    duration: "18 min",
    embedUrl:
      "https://player.vimeo.com/video/219877427?h=04c073922e&title=0&byline=0&portrait=0",
    embedType: "vimeo",
    credits: [
      { label: "My role", value: "Production Manager" },
      { label: "Director", value: "Cosima Frei" },
      { label: "Camera", value: "Valentino Vigniti" },
      { label: "Editing", value: "Mirjam Zimmermann" },
      { label: "Executive Producer", value: "Rhea Plangg" },
    ],
    tags: ["CINEMA"],
    coverStillIndex: 0,
    stills: [
      { src: "film-zwischenstopp-1.png", alt: "Zwischenstopp — Titelbild" },
      { src: "film-zwischenstopp-2.png", alt: "Zwischenstopp — Fahrerin im Spiegel" },
      { src: "film-zwischenstopp-3.png", alt: "Zwischenstopp — Passagiere im Bus" },
      { src: "film-zwischenstopp-4.png", alt: "Zwischenstopp — Junger Mann am Bus" },
      { src: "film-zwischenstopp-5.png", alt: "Zwischenstopp — Busbahnhof" },
      { src: "film-zwischenstopp-6.png", alt: "Zwischenstopp — Gespräch im Bus" },
    ],
    description: "Short film directed by Cosima Frei, produced by 2:1 Film.",
    metaLine: "Cinema · 2:1 Film · Short film · 2017",
    status: "released",
  },
  {
    id: "peripherie",
    title: "Peripherie",
    year: 2016,
    format: "Episodic feature film",
    broadcaster: "ZHdK",
    duration: "82 min",
    embedUrl:
      "https://player.vimeo.com/video/181904697?h=7bb682a7c7&title=0&byline=0&portrait=0",
    embedType: "vimeo",
    credits: [
      { label: "My role", value: "Floor Manager Episode «Eddie»" },
      { label: "Director", value: "Wendy Pillonel" },
      { label: "Camera", value: "Lukas Graf" },
      { label: "Editing", value: "Fleur Matson" },
      { label: "Executive Producer", value: "Filippo Bonacci" },
    ],
    tags: ["CINEMA"],
    coverStillIndex: 0,
    stills: [
      { src: "film-peripherie-1.png", alt: "Peripherie — Titelbild" },
      { src: "film-peripherie-2.png", alt: "Peripherie — Junge Frau mit Kopfhörern" },
      { src: "film-peripherie-3.png", alt: "Peripherie — Mann in Verzweiflung" },
      { src: "film-peripherie-4.png", alt: "Peripherie — Eddie raucht" },
      { src: "film-peripherie-5.png", alt: "Peripherie — Mädchen im Auto" },
      { src: "film-peripherie-6.png", alt: "Peripherie — Feuerwerk" },
    ],
    description: "Episodic feature film project by ZHdK Master students, produced at ZHdK.",
    metaLine: "Cinema · ZHdK · Episodic feature film · 2016",
    status: "released",
  },
];
