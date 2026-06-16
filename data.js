const SEED_BOOKS = [
  {
    id: "decouvertes4",
    title: "Découvertes 4",
    units: [
      {
        id: "d4-u1",
        title: "Unité 1 — Au lycée",
        words: [
          { fr: "le lycée", de: "das Gymnasium / die Oberstufe", pool: [
            "Mon frère entre au ___ après les vacances d'été.",
            "Ce ___ a une très bonne réputation dans la région.",
            "Au ___, les élèves préparent le baccalauréat.",
            "Elle prend le bus chaque matin pour aller au ___.",
            "Notre ___ organise un voyage scolaire en Italie."
          ] },
          { fr: "la classe de seconde", de: "die 10. Klasse", pool: [
            "En ___, on choisit ses premières spécialités.",
            "Ma sœur est en ___ cette année.",
            "Les élèves de ___ ont beaucoup de nouvelles matières.",
            "Il a redoublé sa ___ l'an dernier.",
            "La ___ marque le début du lycée."
          ] },
          { fr: "l'emploi du temps (m.)", de: "der Stundenplan", pool: [
            "Cette année, mon ___ est vraiment chargé.",
            "Regarde l'___ pour savoir où est la salle.",
            "Le lundi, l'___ commence par deux heures de maths.",
            "L'___ change toutes les semaines dans cette école.",
            "Je note tous mes cours dans mon ___."
          ] },
          { fr: "la matière", de: "das (Unterrichts-)Fach", pool: [
            "Les mathématiques sont ma ___ préférée.",
            "Quelle ___ trouves-tu la plus difficile ?",
            "Le professeur enseigne une seule ___.",
            "Cette ___ demande beaucoup de travail à la maison.",
            "Chaque ___ a son propre manuel scolaire."
          ] },
          { fr: "réussir (à)", de: "schaffen / Erfolg haben", pool: [
            "Avec du travail, tu vas ___ ton examen.",
            "Elle espère ___ à toutes ses épreuves.",
            "Pour ___, il faut réviser régulièrement.",
            "Ils ont réussi à ___ leur projet de classe.",
            "Je veux absolument ___ cette année."
          ] },
          { fr: "échouer (à)", de: "scheitern / durchfallen", pool: [
            "Sans réviser, on risque d'___ à l'examen.",
            "Il a peur d'___ et de redoubler.",
            "Elle n'a pas voulu ___ une deuxième fois.",
            "Mieux vaut essayer que d'___ sans rien tenter.",
            "Personne n'aime ___ devant toute la classe."
          ] },
          { fr: "l'épreuve (f.)", de: "die Prüfung", pool: [
            "L'___ de français dure quatre heures.",
            "Il était très stressé avant l'___ orale.",
            "Chaque ___ compte pour la note finale.",
            "L'___ de maths était plus facile que prévu.",
            "Les élèves révisent pour la prochaine ___."
          ] },
          { fr: "la note", de: "die Note", pool: [
            "Il a eu une excellente ___ en histoire.",
            "Ma ___ de chimie m'a un peu déçu.",
            "La meilleure ___ de la classe était un 18.",
            "Cette mauvaise ___ va faire baisser ma moyenne.",
            "Le professeur rend les copies avec la ___."
          ] },
          { fr: "redoubler", de: "sitzenbleiben / wiederholen", pool: [
            "Sans de bons résultats, il devra ___.",
            "Elle ne veut surtout pas ___ cette année.",
            "___ permet parfois de mieux comprendre les cours.",
            "Le conseil de classe peut demander de ___.",
            "Il a dû ___ à cause de trop d'absences."
          ] },
          { fr: "s'inscrire", de: "sich einschreiben / anmelden", pool: [
            "Tu dois ___ avant la fin du mois.",
            "Elle veut ___ au club de théâtre.",
            "Pour ___, il faut remplir ce formulaire.",
            "Les nouveaux élèves doivent ___ au secrétariat.",
            "Je vais ___ à un cours de musique."
          ] },
          { fr: "le bulletin", de: "das Zeugnis", pool: [
            "Mes parents ont signé mon ___ ce matin.",
            "Le ___ montre toutes les notes du trimestre.",
            "Il était fier de présenter son ___.",
            "Chaque ___ contient les appréciations des professeurs.",
            "On reçoit le ___ à la fin du trimestre."
          ] },
          { fr: "le conseil de classe", de: "die Klassenkonferenz", pool: [
            "Le ___ a lieu à la fin de chaque trimestre.",
            "Les professeurs discutent de chaque élève au ___.",
            "Le ___ décide du passage en classe supérieure.",
            "Un délégué représente les élèves au ___.",
            "Les résultats sont validés pendant le ___."
          ] }
        ]
      },
      {
        id: "d4-u2",
        title: "Unité 2 — L'engagement",
        words: [
          { fr: "s'engager", de: "sich engagieren / einsetzen", pool: [
            "Beaucoup de jeunes veulent ___ pour l'environnement.",
            "Elle a décidé de ___ dans une association locale.",
            "___ demande du temps et de la motivation.",
            "Il aimerait ___ contre les injustices.",
            "On peut ___ de mille façons différentes."
          ] },
          { fr: "le bénévolat", de: "das Ehrenamt / die Freiwilligenarbeit", pool: [
            "Le ___ permet d'aider sans être payé.",
            "Elle fait du ___ dans un refuge pour animaux.",
            "Le ___ est très important pour cette association.",
            "Grâce au ___, il a rencontré beaucoup de gens.",
            "Le ___ demande de la générosité et du temps."
          ] },
          { fr: "l'association (f.)", de: "der Verein", pool: [
            "Cette ___ aide les personnes sans logement.",
            "Il a rejoint une ___ sportive de son quartier.",
            "L'___ organise une collecte de vêtements.",
            "Chaque ___ a besoin de bénévoles motivés.",
            "Elle a créé une ___ pour protéger la nature."
          ] },
          { fr: "manifester", de: "demonstrieren", pool: [
            "Des milliers de personnes vont ___ demain.",
            "Ils veulent ___ pour défendre leurs droits.",
            "Les étudiants ont décidé de ___ dans la rue.",
            "___ pacifiquement est un droit fondamental.",
            "On peut ___ sans jamais utiliser la violence."
          ] },
          { fr: "la manifestation", de: "die Demonstration", pool: [
            "La ___ a rassemblé des milliers de personnes.",
            "Une grande ___ est prévue pour samedi.",
            "La ___ s'est déroulée dans le calme.",
            "Ils ont participé à une ___ pour le climat.",
            "La ___ a traversé tout le centre-ville."
          ] },
          { fr: "défendre", de: "verteidigen", pool: [
            "Il faut ___ ceux qui ne peuvent pas se protéger.",
            "Elle veut ___ les droits des animaux.",
            "___ une cause juste demande du courage.",
            "Les avocats sont là pour ___ leurs clients.",
            "Nous devons ___ notre planète ensemble."
          ] },
          { fr: "lutter (contre)", de: "kämpfen (gegen)", pool: [
            "L'association ___ contre la pauvreté.",
            "Il faut ___ contre toutes les discriminations.",
            "Elle a choisi de ___ pour l'égalité.",
            "___ contre l'injustice est leur but principal.",
            "Beaucoup de gens veulent ___ pour le climat."
          ] },
          { fr: "le droit", de: "das Recht", pool: [
            "Chaque enfant a le ___ d'aller à l'école.",
            "Voter est un ___ et un devoir de citoyen.",
            "Ils défendent le ___ à un logement décent.",
            "Le ___ à la liberté d'expression est essentiel.",
            "Tout le monde a le même ___ devant la loi."
          ] },
          { fr: "l'égalité (f.)", de: "die Gleichheit", pool: [
            "L'___ entre les hommes et les femmes progresse lentement.",
            "Ils luttent pour plus d'___ sociale.",
            "L'___ des chances est un principe important.",
            "Cette loi vise à garantir l'___.",
            "Sans ___, il ne peut pas y avoir de justice."
          ] },
          { fr: "la solidarité", de: "die Solidarität", pool: [
            "La ___ entre voisins est très forte ici.",
            "En temps de crise, la ___ devient essentielle.",
            "Cette action montre une belle ___.",
            "La ___ aide les plus faibles de la société.",
            "Ils ont fait preuve de ___ envers les réfugiés."
          ] },
          { fr: "convaincre", de: "überzeugen", pool: [
            "Il a réussi à ___ ses amis de participer.",
            "Elle sait ___ avec des arguments solides.",
            "___ les gens demande de la patience.",
            "Le discours a su ___ tout le public.",
            "J'ai du mal à le ___ de changer d'avis."
          ] },
          { fr: "le citoyen / la citoyenne", de: "der Bürger / die Bürgerin", pool: [
            "Chaque ___ peut voter aux élections.",
            "Un bon ___ respecte les lois de son pays.",
            "Le ___ a des droits mais aussi des devoirs.",
            "Elle se sent une ___ responsable et engagée.",
            "Le ___ participe à la vie de la société."
          ] }
        ]
      },
      {
        id: "d4-u3",
        title: "Unité 3 — Le monde du travail",
        words: [
          { fr: "le métier", de: "der Beruf", pool: [
            "Elle exerce un ___ passionnant dans la médecine.",
            "Quel ___ veux-tu faire plus tard ?",
            "Ce ___ demande beaucoup de formation.",
            "Il a changé de ___ à quarante ans.",
            "Chaque ___ a ses avantages et ses difficultés."
          ] },
          { fr: "l'entreprise (f.)", de: "das Unternehmen", pool: [
            "Cette ___ emploie plus de mille personnes.",
            "Il travaille dans une grande ___ internationale.",
            "L'___ recherche de nouveaux employés.",
            "Elle a fondé sa propre ___ l'an dernier.",
            "L'___ a déménagé dans un autre quartier."
          ] },
          { fr: "le stage", de: "das Praktikum", pool: [
            "J'ai trouvé un ___ dans une agence de voyage.",
            "Le ___ dure six semaines au total.",
            "Pendant son ___, elle a beaucoup appris.",
            "Ce ___ est obligatoire pour valider l'année.",
            "Il cherche un ___ pour l'été prochain."
          ] },
          { fr: "postuler", de: "sich bewerben", pool: [
            "Elle va ___ pour un poste de vendeuse.",
            "Tu peux ___ directement en ligne.",
            "Il faut ___ avant la fin de la semaine.",
            "J'aimerais ___ dans cette entreprise.",
            "Pour ___, envoie ton CV et ta lettre."
          ] },
          { fr: "l'entretien (m.)", de: "das (Vorstellungs-)Gespräch", pool: [
            "Mon ___ d'embauche a duré une heure.",
            "Il était nerveux avant son ___.",
            "Pendant l'___, on lui a posé beaucoup de questions.",
            "Elle a réussi son ___ haut la main.",
            "L'___ se déroule lundi prochain à dix heures."
          ] },
          { fr: "embaucher", de: "einstellen", pool: [
            "L'entreprise va ___ dix nouveaux employés.",
            "Ils ont décidé de l'___ après l'entretien.",
            "Cette société aimerait ___ des jeunes diplômés.",
            "Le directeur veut ___ quelqu'un de compétent.",
            "On va l'___ pour le poste de secrétaire."
          ] },
          { fr: "licencier", de: "entlassen", pool: [
            "L'usine a dû ___ une partie du personnel.",
            "Ils risquent de ___ plusieurs employés.",
            "C'est difficile de ___ quelqu'un de fidèle.",
            "L'entreprise a décidé de ne ___ personne.",
            "Le patron ne veut pas ___ ses ouvriers."
          ] },
          { fr: "le salaire", de: "das Gehalt / der Lohn", pool: [
            "Son ___ a augmenté après deux ans.",
            "Le ___ dépend de l'expérience et du poste.",
            "Elle touche un bon ___ dans cette entreprise.",
            "Le ___ est versé à la fin du mois.",
            "Ils négocient un meilleur ___ chaque année."
          ] },
          { fr: "le chômage", de: "die Arbeitslosigkeit", pool: [
            "Le ___ touche surtout les jeunes diplômés.",
            "Il est au ___ depuis plusieurs mois.",
            "Le taux de ___ a baissé cette année.",
            "Le ___ est un problème dans cette région.",
            "Après son licenciement, elle s'est retrouvée au ___."
          ] },
          { fr: "la formation", de: "die Ausbildung", pool: [
            "Cette ___ dure deux ans après le bac.",
            "Il suit une ___ pour devenir cuisinier.",
            "La ___ professionnelle ouvre beaucoup de portes.",
            "Elle a terminé sa ___ avec succès.",
            "Une bonne ___ aide à trouver un emploi."
          ] },
          { fr: "compétent(e)", de: "kompetent / fähig", pool: [
            "C'est un employé très ___ et sérieux.",
            "Elle est ___ dans plusieurs domaines.",
            "Le directeur cherche une personne ___.",
            "Il faut être ___ pour réussir ce travail.",
            "Une équipe ___ obtient de meilleurs résultats."
          ] },
          { fr: "l'avenir (m.)", de: "die Zukunft", pool: [
            "Personne ne connaît son ___ avec certitude.",
            "Elle pense beaucoup à son ___ professionnel.",
            "L'___ appartient à ceux qui se préparent.",
            "Il veut construire un ___ meilleur.",
            "Ces études lui ouvrent un bel ___."
          ] }
        ]
      }
    ]
  },
  {
    id: "gateway-b2",
    title: "Gateway to the World B2+",
    units: [
      {
        id: "gw-u1",
        title: "Unit 1 — Identity & belonging",
        words: [
          { fr: "belonging", de: "die Zugehörigkeit", def: "the feeling of being accepted as a member of a group", pool: [
            "After years abroad, she finally felt a deep sense of ___ in her new town.",
            "Joining the choir gave him a strong feeling of ___ he had never known.",
            "A sense of ___ matters more to teenagers than almost anything else.",
            "Wearing the team's colours filled the fans with pride and ___.",
            "Without any sense of ___, the new student ate lunch alone every day."
          ] },
          { fr: "to fit in", de: "dazugehören / sich einfügen", def: "to feel accepted and comfortable as part of a group", pool: [
            "He changed his hairstyle just to ___ with the popular crowd.",
            "It took her a whole term to ___ at her new school.",
            "You don't have to copy everyone else in order to ___.",
            "Quiet by nature, the boy struggled to ___ with the noisy class.",
            "New employees often try too hard to ___ during their first week."
          ] },
          { fr: "peer pressure", de: "der Gruppenzwang", def: "the influence from people your own age to act like them", pool: [
            "She started smoking because of ___ from her older friends.",
            "Strong ___ can push teenagers into decisions they later regret.",
            "Saying no to ___ takes real courage at that age.",
            "The film shows how ___ shapes what students wear and say.",
            "He blamed ___ for skipping classes with the others."
          ] },
          { fr: "self-esteem", de: "das Selbstwertgefühl", def: "the confidence and respect a person feels for themselves", pool: [
            "Constant criticism slowly destroyed the child's ___.",
            "Winning the prize gave her ___ a real boost.",
            "Low ___ can make it hard to speak up in a group.",
            "Good friends help build healthy ___ over time.",
            "His ___ grew once he stopped comparing himself to others."
          ] },
          { fr: "to stand out", de: "auffallen / herausstechen", def: "to be noticeably different from everyone or everything else", pool: [
            "Her bright red coat made her ___ in the grey crowd.",
            "He works hard to ___ from the other job applicants.",
            "A single creative idea can make a project really ___.",
            "You don't always have to ___ to be respected.",
            "Their bold logo helps the brand ___ on the shelf."
          ] },
          { fr: "heritage", de: "das (kulturelle) Erbe", def: "traditions, culture and values passed down over generations", pool: [
            "The festival celebrates the town's rich cultural ___.",
            "She is proud of her family's African ___.",
            "Old castles are an important part of the nation's ___.",
            "Learning the language kept their ___ alive abroad.",
            "The museum protects the artistic ___ of the region."
          ] },
          { fr: "upbringing", de: "die Erziehung", def: "the way a child is cared for and taught while growing up", pool: [
            "His strict ___ made him value discipline as an adult.",
            "A loving ___ gave her the confidence to take risks.",
            "They credit their parents' ___ for their good manners.",
            "Her rural ___ taught her to appreciate simple things.",
            "A difficult ___ does not have to decide your whole future."
          ] },
          { fr: "to embrace", de: "annehmen / sich zu eigen machen", def: "to accept something new or different willingly and gladly", pool: [
            "The school decided to ___ new technology in every classroom.",
            "She learned to ___ her differences instead of hiding them.",
            "Good leaders ___ change rather than fear it.",
            "He was ready to ___ a completely new way of living.",
            "They ___ the challenge with energy and open minds."
          ] },
          { fr: "prejudice", de: "das Vorurteil", def: "an unfair opinion about someone formed before knowing them", pool: [
            "The campaign aims to fight ___ against newcomers.",
            "She faced ___ simply because of her accent.",
            "Education is one of the best ways to reduce ___.",
            "His ___ disappeared once he got to know them.",
            "Old ___ about the village still affects people today."
          ] },
          { fr: "to relate to", de: "sich identifizieren mit", def: "to understand or feel connected to someone or something", pool: [
            "Many readers ___ the hero's struggle to fit in.",
            "It's easy to ___ characters who make mistakes.",
            "She couldn't ___ his love of extreme sports at all.",
            "Younger viewers really ___ the show's honest tone.",
            "I can ___ how stressful exam week feels."
          ] },
          { fr: "outsider", de: "der Außenseiter", def: "a person who is not accepted as part of a group", pool: [
            "As the new kid, he felt like a complete ___ at first.",
            "The story is told from the view of a lonely ___.",
            "Being an ___ sometimes lets you see things more clearly.",
            "She was treated as an ___ for her unusual hobbies.",
            "Every ___ in the film eventually finds where they belong."
          ] },
          { fr: "mindset", de: "die Denkweise / Einstellung", def: "a fixed way of thinking that shapes how you act", pool: [
            "A positive ___ helped her recover from the setback.",
            "Switching to a growth ___ changed how he studied.",
            "Their winning ___ kept the team calm under pressure.",
            "Changing an old ___ takes time and practice.",
            "A curious ___ makes learning much more enjoyable."
          ] }
        ]
      },
      {
        id: "gw-u2",
        title: "Unit 2 — A changing world",
        words: [
          { fr: "sustainability", de: "die Nachhaltigkeit", def: "the ability to use resources without using them up", pool: [
            "The company built its whole brand around ___.",
            "True ___ means thinking about future generations.",
            "Their report measures the ___ of each product.",
            "Schools now teach ___ from an early age.",
            "Long-term ___ matters more than quick profit."
          ] },
          { fr: "carbon footprint", de: "der CO₂-Fußabdruck", def: "the total amount of greenhouse gases a person or thing produces", pool: [
            "Flying less is one way to shrink your ___.",
            "The factory promised to cut its ___ by half.",
            "Eating local food can reduce your ___.",
            "Each online search adds a little to our ___.",
            "They calculated the ___ of the whole event."
          ] },
          { fr: "renewable", de: "erneuerbar", def: "describing energy from sources that never run out", pool: [
            "Wind and solar power are ___ sources of energy.",
            "The country now runs mostly on ___ electricity.",
            "Investing in ___ energy creates new jobs.",
            "They replaced the old plant with a ___ one.",
            "___ resources are the key to a cleaner future."
          ] },
          { fr: "to tackle", de: "angehen / bewältigen", def: "to make a determined effort to deal with a problem", pool: [
            "Governments must ___ climate change together.",
            "She decided to ___ the hardest task first.",
            "New laws aim to ___ plastic pollution.",
            "It will take years to ___ such a huge problem.",
            "The charity works to ___ poverty in the region."
          ] },
          { fr: "scarce", de: "knapp / rar", def: "available only in small amounts; hard to find", pool: [
            "Clean water is becoming ___ in many regions.",
            "Jobs were ___ during the economic crisis.",
            "Fresh vegetables grew ___ during the long winter.",
            "Time is ___ when you have three exams in a week.",
            "Honest answers were ___ in his interview."
          ] },
          { fr: "to thrive", de: "gedeihen / florieren", def: "to grow, develop, or be successful", pool: [
            "Plants ___ in warm, sunny conditions.",
            "Small businesses can ___ with the right support.",
            "Children ___ when they feel safe and loved.",
            "The city began to ___ after the new factory opened.",
            "Some animals ___ even in harsh deserts."
          ] },
          { fr: "consumption", de: "der Verbrauch / Konsum", def: "the act of using or eating something", pool: [
            "Energy ___ rises sharply in the winter months.",
            "They want to cut the ___ of single-use plastic.",
            "High sugar ___ can harm your health.",
            "The country's water ___ keeps growing each year.",
            "Reducing meat ___ helps the environment."
          ] },
          { fr: "awareness", de: "das Bewusstsein", def: "knowledge or understanding that something exists or matters", pool: [
            "The campaign raised ___ about ocean pollution.",
            "Public ___ of the issue grew after the documentary.",
            "Greater ___ leads to better choices.",
            "Schools try to build environmental ___ early.",
            "Her speech increased ___ of mental health."
          ] },
          { fr: "to mitigate", de: "abmildern / verringern", def: "to make something bad less serious or harmful", pool: [
            "Trees can help ___ the effects of air pollution.",
            "The plan aims to ___ the damage from flooding.",
            "Better insulation helps ___ heat loss in winter.",
            "Nothing could fully ___ the storm's impact.",
            "New rules try to ___ the risk of accidents."
          ] },
          { fr: "drought", de: "die Dürre", def: "a long period with little or no rain", pool: [
            "The long ___ destroyed most of the harvest.",
            "Farmers struggled to keep animals alive during the ___.",
            "A severe ___ left the rivers almost empty.",
            "Climate change makes ___ more common in some areas.",
            "The ___ forced the city to ration water."
          ] },
          { fr: "to phase out", de: "auslaufen lassen / abschaffen", def: "to stop using or providing something gradually", pool: [
            "The country plans to ___ coal power by 2035.",
            "Shops began to ___ plastic bags last year.",
            "They will slowly ___ the older machines.",
            "Many cities want to ___ petrol cars.",
            "The school chose to ___ paper exams over time."
          ] },
          { fr: "depletion", de: "die Erschöpfung (von Ressourcen)", def: "the reduction of something until little is left", pool: [
            "Overfishing leads to the ___ of fish stocks.",
            "Soil ___ makes it harder to grow crops.",
            "Scientists warned about the ___ of natural resources.",
            "The ___ of the ozone layer worried the world.",
            "Rapid ___ of forests threatens many species."
          ] }
        ]
      },
      {
        id: "gw-u3",
        title: "Unit 3 — Media & technology",
        words: [
          { fr: "to scroll", de: "scrollen / blättern", def: "to move text or images up or down on a screen", pool: [
            "She likes to ___ through photos before bed.",
            "He kept scrolling and forgot to ___ back up.",
            "It's easy to ___ for hours without noticing.",
            "Just ___ down to find the comment section.",
            "Teenagers ___ through their feeds all day long."
          ] },
          { fr: "misinformation", de: "die Falschinformation", def: "false or inaccurate information that is spread", pool: [
            "Social media helps ___ spread very quickly.",
            "The article was full of dangerous ___.",
            "Fighting ___ is one of journalism's biggest tasks.",
            "A lot of ___ appeared during the election.",
            "Teachers warn students about online ___."
          ] },
          { fr: "reliable", de: "zuverlässig", def: "able to be trusted to be accurate or correct", pool: [
            "Always check that a source is ___ before sharing it.",
            "She is a ___ witness with a clear memory.",
            "We need ___ data to make this decision.",
            "That website is not a ___ source of news.",
            "A ___ friend keeps their promises."
          ] },
          { fr: "biased", de: "voreingenommen / parteiisch", def: "unfairly favouring one side or opinion over another", pool: [
            "The report felt ___ towards one political party.",
            "A good judge must never be ___.",
            "His review was clearly ___ in favour of the brand.",
            "The questions were ___ and led to false results.",
            "She tried not to sound ___ when describing both sides."
          ] },
          { fr: "to verify", de: "überprüfen / bestätigen", def: "to check that something is true or accurate", pool: [
            "Journalists must ___ a story before printing it.",
            "Please ___ your email address to continue.",
            "It's wise to ___ facts from a second source.",
            "The bank will ___ your identity first.",
            "Always ___ a photo before believing it's real."
          ] },
          { fr: "privacy", de: "die Privatsphäre", def: "the state of being free from public attention", pool: [
            "Many users worry about their ___ online.",
            "The new law protects people's ___ better.",
            "She values her ___ and shares little online.",
            "Apps often collect data without respecting your ___.",
            "Closing the curtains gave them some ___."
          ] },
          { fr: "surveillance", de: "die Überwachung", def: "close watching of a person or place, often by cameras", pool: [
            "The city installed cameras for constant ___.",
            "Critics say the ___ goes too far.",
            "Airport ___ has increased over the years.",
            "Workers disliked the ___ of their every move.",
            "Government ___ raises serious privacy questions."
          ] },
          { fr: "addictive", de: "süchtig machend", def: "causing a strong need to keep doing something", pool: [
            "Many games are designed to be highly ___.",
            "Social media can be as ___ as gambling.",
            "That show is so ___ I watched all night.",
            "Sugary snacks can be surprisingly ___.",
            "Developers know exactly what makes an app ___."
          ] },
          { fr: "to disconnect", de: "abschalten / offline gehen", def: "to stop being connected to the internet or others", pool: [
            "She tries to ___ from her phone every weekend.",
            "Sometimes you need to ___ and rest your mind.",
            "He chose to ___ during the family holiday.",
            "It's healthy to ___ from screens before sleep.",
            "They went camping to fully ___ for a week."
          ] },
          { fr: "echo chamber", de: "die Echokammer", def: "a place where people only hear opinions like their own", pool: [
            "Social media can become a dangerous ___.",
            "Inside an ___, your beliefs are never challenged.",
            "He realised his feed had turned into an ___.",
            "Breaking out of an ___ means reading other views.",
            "An ___ makes people more sure they are right."
          ] },
          { fr: "to go viral", de: "viral gehen", def: "to spread very quickly to many people online", pool: [
            "Nobody expected the silly clip to ___.",
            "Her dance video began to ___ overnight.",
            "Brands dream of a post that will ___.",
            "The meme went on to ___ across the world.",
            "A single tweet can ___ within minutes."
          ] },
          { fr: "screen time", de: "die Bildschirmzeit", def: "the amount of time spent looking at a screen", pool: [
            "Parents try to limit their kids' ___.",
            "His daily ___ reaches eight hours or more.",
            "Too much ___ can affect your sleep.",
            "The app tracks your weekly ___.",
            "She set a goal to cut her ___ in half."
          ] }
        ]
      },
      {
        id: "gw-u5a",
        title: "Unit 5 — Crime & law (A)",
        words: [
          { fr: "sustainable", de: "nachhaltig", def: "able to continue over a long time without harming the environment", pool: [
            "They switched to a more ___ way of farming.",
            "Solar power is a ___ source of energy.",
            "The city wants ___ growth that lasts for decades.",
            "A ___ lifestyle reduces waste and pollution.",
            "Cheap fashion is rarely ___ for the planet."
          ] },
          { fr: "synthetic biology", de: "synthetische Biologie", def: "the science of designing and building new biological systems", pool: [
            "___ could one day create medicines inside cells.",
            "Researchers use ___ to design new organisms.",
            "Some fear the risks of ___ in the wrong hands.",
            "___ blends engineering with the study of life.",
            "The lab is a world leader in ___."
          ] },
          { fr: "tenacity", de: "die Hartnäckigkeit", def: "the quality of being determined and not giving up", pool: [
            "Her ___ helped her finish the race despite the pain.",
            "It took real ___ to rebuild the business.",
            "The team admired his quiet ___ under pressure.",
            "With ___, she solved a problem others had abandoned.",
            "Success in science often depends on sheer ___."
          ] },
          { fr: "trait", de: "die Eigenschaft", def: "a particular quality or feature of a person's character", pool: [
            "Kindness is her most striking ___.",
            "Curiosity is a useful ___ for any scientist.",
            "Stubbornness can be both a good and bad ___.",
            "Honesty is a ___ employers really value.",
            "Each character in the book has one clear ___."
          ] },
          { fr: "worldwide", de: "weltweit", def: "existing or happening in all parts of the world", pool: [
            "The film became a ___ success overnight.",
            "The company has offices ___.",
            "The disease caused ___ concern among scientists.",
            "Their music gained a ___ audience.",
            "The brand is recognised ___."
          ] },
          { fr: "worst-case scenario", de: "der schlimmste Fall", def: "the most unpleasant situation that could possibly happen", pool: [
            "In the ___, the whole project could fail.",
            "Engineers always plan for the ___.",
            "The ___ would be losing all the data.",
            "Even in the ___, no one would be hurt.",
            "They prepared carefully for the ___."
          ] },
          { fr: "worthwhile", de: "lohnend", def: "valuable or important enough to be worth the effort", pool: [
            "Volunteering felt like a truly ___ experience.",
            "The long climb was hard but ___.",
            "She found the course difficult yet ___.",
            "Saving a little each month is ___ in the end.",
            "It's ___ to read the instructions first."
          ] },
          { fr: "a number of", de: "eine Reihe von", def: "several; an unspecified quantity of things", pool: [
            "___ students complained about the new timetable.",
            "There were ___ reasons for the decision.",
            "We visited ___ museums during the trip.",
            "The report lists ___ possible solutions.",
            "___ people gathered outside the building."
          ] },
          { fr: "to acquit someone of charges", de: "jemanden freisprechen", def: "to officially decide that someone is not guilty in court", pool: [
            "The jury chose to ___ for lack of evidence.",
            "The court will ___ if the proof is weak.",
            "They hoped the judge would ___ him completely.",
            "New evidence helped ___ the accused woman.",
            "It is the jury's job to convict or ___."
          ] },
          { fr: "additionally", de: "zusätzlich", def: "used to add a further point or piece of information", pool: [
            "The hotel was cheap; ___, the staff were friendly.",
            "___, the new rule applies to all students.",
            "She speaks French; ___, she knows some Italian.",
            "The plan saves money and, ___, time.",
            "___, we must consider the cost of repairs."
          ] },
          { fr: "and yet", de: "und trotzdem", def: "used to introduce something surprising after a statement", pool: [
            "He trained for months, ___ he still lost.",
            "The task seemed simple, ___ it took hours.",
            "She was exhausted, ___ she kept smiling.",
            "It rained all day, ___ the trip was fun.",
            "They had little money, ___ they were happy."
          ] },
          { fr: "anti-establishment", de: "gegen das Establishment", def: "opposed to the people or systems that hold power", pool: [
            "The band became famous for its ___ lyrics.",
            "His ___ views shocked the older generation.",
            "The movement had a strong ___ feeling.",
            "Young voters were drawn to her ___ message.",
            "The film has a clear ___ tone."
          ] },
          { fr: "to arise", de: "aufkommen / entstehen", def: "to begin to happen or come into existence", pool: [
            "Problems may ___ if we ignore the warning.",
            "New questions ___ as the research continues.",
            "Should any doubts ___, please ask me.",
            "Conflicts often ___ from poor communication.",
            "An opportunity might ___ when you least expect it."
          ] },
          { fr: "a touch of something", de: "ein Hauch von etwas", def: "a small amount of a quality or thing", pool: [
            "Her speech had ___ humour that relaxed everyone.",
            "There was ___ sadness in his voice.",
            "Add just ___ salt to the sauce.",
            "The room had ___ elegance about it.",
            "I felt ___ pride watching her win."
          ] },
          { fr: "to ban someone from", de: "ein Verbot gegen jemanden verhängen", def: "to officially forbid someone from doing or entering something", pool: [
            "The referee can ___ a violent player from the pitch.",
            "They decided to ___ him from the club for a year.",
            "The school may ___ students from using phones in class.",
            "Officials chose to ___ the fans from the stadium.",
            "The court can ___ a driver from the roads."
          ] },
          { fr: "basis", de: "die Grundlage", def: "the foundation or starting point for something", pool: [
            "Trust is the ___ of any good friendship.",
            "These figures form the ___ of our plan.",
            "On what ___ did they make that claim?",
            "The theory has a solid scientific ___.",
            "Payment is made on a monthly ___."
          ] },
          { fr: "body cam", de: "die Überwachungskamera (am Körper)", def: "a small camera worn by a person to record events", pool: [
            "The officer's ___ recorded the whole arrest.",
            "Footage from the ___ helped settle the dispute.",
            "Every patrol officer now wears a ___.",
            "The ___ provided clear evidence in court.",
            "Critics still question who controls the ___ footage."
          ] },
          { fr: "bogus", de: "fälschlich / gefälscht", def: "false or fake, though pretending to be real", pool: [
            "The email turned out to be a ___ request for money.",
            "Police warned people about ___ charity collectors.",
            "He was caught with a ___ ticket.",
            "The website made ___ claims about the product.",
            "She received a ___ phone call from a 'bank'."
          ] },
          { fr: "by means of", de: "mittels", def: "using a particular method or thing to do something", pool: [
            "They escaped ___ a hidden tunnel.",
            "The message was sent ___ a secret code.",
            "He earns a living ___ teaching online.",
            "The data was collected ___ a simple survey.",
            "We reached the island ___ a small boat."
          ] },
          { fr: "cash strapped and resources tight", de: "knappe Kassen und geringe Ressourcen", def: "having very little money and few available means", pool: [
            "The ___ charity could barely pay its staff.",
            "Being ___, the school cut several trips.",
            "The ___ town struggled to fix its roads.",
            "Many ___ families relied on the food bank.",
            "The ___ club nearly closed last year."
          ] },
          { fr: "charismatic", de: "charismatisch", def: "having a charm that attracts and inspires other people", pool: [
            "The ___ leader easily won the crowd over.",
            "She is a ___ speaker who holds your attention.",
            "His ___ smile made everyone trust him.",
            "A ___ teacher can make any subject exciting.",
            "The ___ singer connected instantly with fans."
          ] },
          { fr: "civilised", de: "zivilisiert", def: "polite, reasonable, and showing good manners", pool: [
            "They settled the argument in a ___ way.",
            "Even rivals can have a ___ discussion.",
            "It was a ___ debate without any shouting.",
            "A ___ society protects its weakest members.",
            "Let's keep this conversation calm and ___."
          ] },
          { fr: "claim", de: "die Behauptung", def: "a statement that something is true, often without proof", pool: [
            "He made a bold ___ that no one believed.",
            "The advert's ___ was later shown to be false.",
            "Scientists tested the ___ in the lab.",
            "Her ___ about the discovery surprised everyone.",
            "There is no evidence to support that ___."
          ] },
          { fr: "to clog", de: "verstopfen", def: "to block something so that nothing can pass through", pool: [
            "Fallen leaves can ___ the drains in autumn.",
            "Too many cars ___ the city centre at rush hour.",
            "Grease will slowly ___ the kitchen pipes.",
            "Spam emails ___ her inbox every morning.",
            "Heavy traffic began to ___ the motorway."
          ] },
          { fr: "to collaborate with", de: "zusammenarbeiten mit", def: "to work together with someone to achieve something", pool: [
            "Our school plans to ___ a local museum.",
            "The two artists chose to ___ each other.",
            "Scientists often ___ teams in other countries.",
            "She loves to ___ classmates on projects.",
            "The company will ___ a startup on the design."
          ] },
          { fr: "to come into force", de: "in Kraft treten", def: "to start being officially valid as a law or rule", pool: [
            "The new law will ___ next January.",
            "These rules ___ as soon as they are signed.",
            "The ban came ___ across the whole country.",
            "Once the treaty comes ___, things will change.",
            "The regulation is due to ___ in spring."
          ] },
          { fr: "constitutional", de: "verfassungsgemäß", def: "allowed by or relating to a country's constitution", pool: [
            "The court ruled that the law was ___.",
            "Free speech is a ___ right in many countries.",
            "They argued the ban was not ___.",
            "A ___ change requires a special vote.",
            "Judges decide whether an action is ___."
          ] },
          { fr: "court", de: "das Gericht", def: "a place where legal cases are heard and judged", pool: [
            "The case will be heard in ___ next week.",
            "She had to appear in ___ as a witness.",
            "The ___ found him guilty of theft.",
            "Lawyers presented their evidence to the ___.",
            "The matter was finally settled in ___."
          ] },
          { fr: "CCTV", de: "die Videoüberwachung (CCTV)", def: "a system of cameras used to watch and record an area", pool: [
            "The shop installed ___ to prevent theft.",
            "___ footage helped identify the thief.",
            "Cameras and ___ now cover the whole car park.",
            "The crime was caught clearly on ___.",
            "Many streets are monitored by ___."
          ] },
          { fr: "designated / non-designated", de: "spezifisch / nicht spezifisch (ausgewiesen)", def: "officially chosen for a purpose, or not officially chosen", pool: [
            "Please smoke only in the ___ area.",
            "Park in a ___ space, not on the grass.",
            "There is a ___ driver for the trip home.",
            "Rubbish left in ___ zones will be fined.",
            "The hall is the ___ meeting point in an emergency."
          ] }
        ]
      },
      {
        id: "gw-u5b",
        title: "Unit 5 — Crime & law (B)",
        words: [
          { fr: "to deter", de: "abhalten / abschrecken", def: "to make someone decide not to do something through fear", pool: [
            "Higher fines aim to ___ dangerous driving.",
            "Cameras are used to ___ shoplifters.",
            "Nothing could ___ her from her goal.",
            "Tougher laws may ___ future offenders.",
            "Bad weather did not ___ the hikers."
          ] },
          { fr: "discrimination", de: "die Diskriminierung", def: "unfair treatment of people because of who they are", pool: [
            "The law forbids ___ based on age or race.",
            "She fought against ___ at her workplace.",
            "Many people still face ___ every day.",
            "The campaign raised awareness about ___.",
            "Any form of ___ should be reported."
          ] },
          { fr: "discriminatory", de: "diskriminierend", def: "treating some people unfairly compared with others", pool: [
            "The rule was clearly ___ towards women.",
            "Such ___ practices are now illegal.",
            "Critics called the policy deeply ___.",
            "A ___ comment got the manager fired.",
            "The judge ruled the test was ___."
          ] },
          { fr: "disorderly conduct", de: "ordnungswidriges Verhalten", def: "behaviour in public that disturbs the peace", pool: [
            "He was arrested for ___ outside the pub.",
            "The police charged several fans with ___.",
            "___ during the match led to ejections.",
            "Shouting and pushing counts as ___.",
            "She received a warning for ___."
          ] },
          { fr: "disturbance", de: "die Störung", def: "something that interrupts peace, quiet, or order", pool: [
            "Neighbours complained about the late-night ___.",
            "The protest caused a brief ___ in the square.",
            "Any ___ during the exam must be reported.",
            "Police were called to a ___ on the high street.",
            "The loud party became a real ___."
          ] },
          { fr: "do community service", de: "Arbeit zum Gemeinwohl verrichten", def: "to do unpaid work for the public as a punishment", pool: [
            "The judge ordered him to ___ for a month.",
            "Instead of prison, she had to ___.",
            "Teenagers who litter may have to ___.",
            "He chose to ___ to make up for the damage.",
            "They were told to ___ at a local park."
          ] },
          { fr: "editorial", de: "der Leitartikel", def: "an article giving a newspaper's opinion on an issue", pool: [
            "The paper's ___ criticised the new law.",
            "She wrote a powerful ___ about climate change.",
            "Today's ___ supports the mayor's plan.",
            "An ___ should argue a clear point of view.",
            "The ___ sparked a heated public debate."
          ] },
          { fr: "to enforce", de: "durchsetzen", def: "to make sure that a law or rule is obeyed", pool: [
            "Police work hard to ___ the speed limit.",
            "It is difficult to ___ rules nobody respects.",
            "Teachers must ___ the school's policy fairly.",
            "The council will ___ the new parking rules.",
            "Officers are there to ___ the law."
          ] },
          { fr: "facial recognition", de: "die Gesichtserkennung", def: "technology that identifies a person from their face", pool: [
            "The airport uses ___ to speed up checks.",
            "Privacy groups oppose ___ in public spaces.",
            "Her phone unlocks with ___.",
            "Police trialled ___ at the football match.",
            "___ can sometimes make serious mistakes."
          ] },
          { fr: "to harass", de: "bedrängen / belästigen", def: "to annoy or threaten someone repeatedly", pool: [
            "It is illegal to ___ people online.",
            "He was warned not to ___ his neighbour.",
            "Reporters continued to ___ the actor.",
            "Nobody has the right to ___ you at work.",
            "The new law protects victims who are ___."
          ] },
          { fr: "highly", de: "sehr / höchst", def: "to a great degree; very", pool: [
            "She is a ___ respected scientist.",
            "The film was ___ praised by critics.",
            "This job is ___ demanding.",
            "He is ___ skilled at chess.",
            "The result was ___ unexpected."
          ] },
          { fr: "immaturity", de: "die Unreife", def: "behaviour that is childish and not fully developed", pool: [
            "His ___ showed in the way he handled the loss.",
            "The teacher noted some ___ in the group.",
            "Such ___ is normal at that young age.",
            "Her ___ faded as she grew older.",
            "The prank revealed his ___."
          ] },
          { fr: "to impose a curfew", de: "eine Ausgangssperre verhängen", def: "to officially order people to stay indoors after a certain time", pool: [
            "The mayor decided to ___ after the riots.",
            "Officials may ___ to keep the streets calm.",
            "The government chose to ___ at night.",
            "Authorities can ___ during an emergency.",
            "They had to ___ to control the crowds."
          ] },
          { fr: "in a bid to", de: "in der Absicht", def: "in an attempt to achieve something", pool: [
            "She trained daily ___ win the medal.",
            "The city closed roads ___ reduce pollution.",
            "He studied all night ___ pass the exam.",
            "They lowered prices ___ attract customers.",
            "The team worked late ___ meet the deadline."
          ] },
          { fr: "in addition to", de: "zusätzlich zu", def: "as well as; on top of something else", pool: [
            "___ maths, she teaches physics.",
            "___ his salary, he earns money from writing.",
            "___ the fine, he lost his licence.",
            "We offer tea ___ coffee.",
            "___ homework, there is a project due."
          ] },
          { fr: "in aid of", de: "als Hilfe für", def: "in order to help or support a cause", pool: [
            "The concert was held ___ the hospital.",
            "They ran a marathon ___ charity.",
            "The sale was ___ flood victims.",
            "A bake sale was organised ___ the shelter.",
            "The event raised money ___ research."
          ] },
          { fr: "in favour of", de: "Befürworter/in sein", def: "supporting or agreeing with something", pool: [
            "Most voters were ___ the new park.",
            "She spoke strongly ___ the change.",
            "The committee decided ___ the plan.",
            "Are you ___ or against the proposal?",
            "Many parents are ___ shorter holidays."
          ] },
          { fr: "in order to", de: "um zu", def: "with the purpose or intention of doing something", pool: [
            "He saved money ___ buy a bike.",
            "You must register ___ take part.",
            "She left early ___ catch the train.",
            "They studied hard ___ pass the test.",
            "We use codes ___ keep the data safe."
          ] },
          { fr: "in response to", de: "als Reaktion auf", def: "as a reaction to something that happened", pool: [
            "The rules changed ___ public complaints.",
            "___ the storm, schools were closed.",
            "She wrote back ___ his email.",
            "Prices rose ___ growing demand.",
            "___ the protest, the council met again."
          ] },
          { fr: "in the process of", de: "dabei sein (etwas zu tun)", def: "currently busy doing something", pool: [
            "We are ___ moving to a new office.",
            "She is ___ writing her first novel.",
            "They were ___ painting when it rained.",
            "The town is ___ building a new bridge.",
            "He is ___ learning to drive."
          ] },
          { fr: "in/out of touch with", de: "(nicht) auf dem Laufenden sein", def: "having or not having recent knowledge of something", pool: [
            "The old manager felt out of ___ younger staff.",
            "She stays in ___ the latest research.",
            "After years abroad, he was out of ___ home news.",
            "Good leaders keep in ___ their teams.",
            "I've lost ___ most school friends."
          ] },
          { fr: "indeed", de: "in der Tat", def: "used to emphasise that something is true", pool: [
            "It was, ___, the best day of the trip.",
            "She is ___ a remarkable musician.",
            "The plan was ___ a great success.",
            "He was ___ telling the truth.",
            "This is ___ a serious problem."
          ] },
          { fr: "to issue someone with a(n) (on-the-spot) fine", de: "jemanden (an Ort und Stelle) mit einer Strafe belegen", def: "to officially give someone a punishment payment immediately", pool: [
            "Officers can ___ for dropping litter.",
            "Inspectors may ___ for not having a ticket.",
            "Police chose to ___ rather than make an arrest.",
            "They will ___ for parking illegally.",
            "The warden can ___ on the spot."
          ] },
          { fr: "to judge", de: "verurteilen", def: "to form an opinion about someone or decide a case in court", pool: [
            "Try not to ___ people by their looks.",
            "It is the court's role to ___ the case.",
            "Don't ___ a book by its cover.",
            "She was asked to ___ the cooking contest.",
            "We should not ___ him without the facts."
          ] },
          { fr: "law-abiding", de: "gesetzestreu", def: "obeying the law and behaving correctly", pool: [
            "He has always been a ___ citizen.",
            "Most people in the town are ___.",
            "A ___ driver never ignores red lights.",
            "They lived quiet, ___ lives.",
            "The community is proud of being ___."
          ] },
          { fr: "littering", de: "das Vermüllen / Wegwerfen von Müll", def: "dropping rubbish carelessly in a public place", pool: [
            "___ in the park can lead to a fine.",
            "Signs warn visitors against ___.",
            "He was caught ___ near the beach.",
            "___ harms wildlife and the environment.",
            "The council fights ___ with new bins."
          ] },
          { fr: "to make a formal apology", de: "sich formell entschuldigen", def: "to say sorry in an official and serious way", pool: [
            "The company had to ___ to its customers.",
            "He agreed to ___ in writing.",
            "The minister was forced to ___.",
            "She decided to ___ for the mistake.",
            "They expected him to ___ in public."
          ] },
          { fr: "to make a prank/hoax call", de: "einen Scherz-/Falschanruf tätigen", def: "to phone someone with a false or joking message", pool: [
            "It is a crime to ___ to the police.",
            "He got in trouble for making a ___.",
            "Some teenagers ___ just for fun.",
            "Making a ___ to emergency services is dangerous.",
            "She was fined for making a ___."
          ] },
          { fr: "matter", de: "die Angelegenheit / Sache", def: "a subject or situation that must be dealt with", pool: [
            "This is a serious ___ for the whole school.",
            "We must discuss the ___ at the meeting.",
            "It's a private ___ between the two of them.",
            "The ___ was finally settled in court.",
            "She handled the difficult ___ calmly."
          ] },
          { fr: "merely", de: "nur / bloß", def: "only; just; nothing more than", pool: [
            "He was ___ trying to help.",
            "It costs ___ a few euros.",
            "She is ___ a beginner, yet very talented.",
            "I ___ asked a simple question.",
            "It was ___ a misunderstanding."
          ] },
          { fr: "mindlessly", de: "unbedacht / gedankenlos", def: "without thinking or paying attention", pool: [
            "He scrolled ___ through his phone for hours.",
            "She ate the snacks ___ while watching TV.",
            "Don't follow the crowd ___.",
            "They repeated the words ___.",
            "He nodded ___ without really listening."
          ] },
          { fr: "nuisance", de: "die Belästigung / das Ärgernis", def: "a person or thing that causes annoyance or trouble", pool: [
            "The loud music next door is a real ___.",
            "Wasps can be a ___ at summer picnics.",
            "He was charged with causing a public ___.",
            "Constant spam calls are a daily ___.",
            "The broken lift is a ___ for everyone."
          ] },
          { fr: "numerous", de: "zahlreich", def: "very many; existing in large numbers", pool: [
            "There were ___ complaints about the noise.",
            "She has won ___ awards for her work.",
            "We tried ___ times before it worked.",
            "The book has ___ helpful examples.",
            "___ studies support this conclusion."
          ] },
          { fr: "occasionally", de: "gelegentlich", def: "sometimes, but not often", pool: [
            "We ___ eat out at the weekend.",
            "He ___ forgets his keys.",
            "The bus is ___ late in winter.",
            "She ___ writes letters to old friends.",
            "I ___ play tennis on Sundays."
          ] },
          { fr: "on account of", de: "aufgrund von", def: "because of something", pool: [
            "The match was cancelled ___ the storm.",
            "He arrived late ___ the heavy traffic.",
            "___ her illness, she missed the trip.",
            "The road was closed ___ the flooding.",
            "They left early ___ the long journey."
          ] },
          { fr: "on behalf of", de: "im Namen von", def: "as a representative of someone else", pool: [
            "She accepted the prize ___ the whole team.",
            "He spoke ___ all the students.",
            "I'm writing ___ my company.",
            "The lawyer acted ___ his client.",
            "___ the staff, thank you very much."
          ] },
          { fr: "on the strength of", de: "daraufhin / gestützt auf", def: "because of, or based on, something", pool: [
            "He got the job ___ his excellent grades.",
            "___ one review, the book sold out.",
            "She was promoted ___ her hard work.",
            "They invested ___ the strong results.",
            "___ that promise, we agreed to wait."
          ] },
          { fr: "on the verge of (doing something)", de: "drauf und dran sein (etwas zu tun)", def: "very close to doing or experiencing something", pool: [
            "She was ___ tears during the speech.",
            "The company is ___ a major breakthrough.",
            "He felt ___ giving up completely.",
            "They were ___ signing the contract.",
            "The team is ___ winning the league."
          ] },
          { fr: "one-off / repeated shoplifting", de: "einmaliger / wiederholter Ladendiebstahl", def: "stealing from a shop a single time or many times", pool: [
            "A ___ may be treated more seriously by the court.",
            "The judge saw it as a ___, not a habit.",
            "Security focuses on stopping ___.",
            "A first ___ might bring only a warning.",
            "___ leads to much tougher penalties."
          ] },
          { fr: "ordinance", de: "die Verordnung", def: "a rule or law made by a local authority", pool: [
            "A new ___ bans skateboarding in the square.",
            "The town passed an ___ on noise levels.",
            "Breaking the ___ results in a fine.",
            "The ___ limits parking on busy streets.",
            "Local shops must follow the ___."
          ] },
          { fr: "parking ticket", de: "der Strafzettel", def: "an official notice giving a fine for parking wrongly", pool: [
            "She found a ___ on her windscreen.",
            "He got a ___ for stopping on a yellow line.",
            "A ___ can cost quite a lot of money.",
            "I forgot to pay and received a ___.",
            "The warden issued a ___ within minutes."
          ] },
          { fr: "to pass (a law)", de: "(ein Gesetz) verabschieden", def: "to officially approve a law so it takes effect", pool: [
            "Parliament voted to ___ the new law.",
            "It took years to ___ the safety bill.",
            "They hope to ___ the act this spring.",
            "The council moved to ___ a stricter rule.",
            "Lawmakers agreed to ___ the reform."
          ] },
          { fr: "penalty", de: "die Strafe", def: "a punishment for breaking a law or rule", pool: [
            "The ___ for speeding is a heavy fine.",
            "He paid the ___ without arguing.",
            "There is a strict ___ for cheating.",
            "The ___ includes points on your licence.",
            "Late payment carries a small ___."
          ] },
          { fr: "to precede", de: "vorausgehen", def: "to come or happen before something else", pool: [
            "A short speech will ___ the ceremony.",
            "Dark clouds usually ___ a storm.",
            "The events that ___ the trial were unclear.",
            "A warm-up should ___ any exercise.",
            "The introduction ___ the main report."
          ] },
          { fr: "to prosecute", de: "strafrechtlich verfolgen", def: "to officially charge someone with a crime in court", pool: [
            "The state decided to ___ the company.",
            "They will ___ anyone who breaks the law.",
            "It can be hard to ___ without evidence.",
            "Police chose to ___ the driver.",
            "The shop threatened to ___ thieves."
          ] },
          { fr: "prosecution", de: "die Strafverfolgung", def: "the process of charging and trying someone in court", pool: [
            "The ___ presented strong evidence.",
            "He faced ___ for fraud.",
            "The ___ called several witnesses.",
            "Lack of proof weakened the ___.",
            "The ___ asked for a long sentence."
          ] },
          { fr: "to receive a suspended sentence", de: "eine Bewährungsstrafe bekommen", def: "to be given a prison term that is not served unless you reoffend", pool: [
            "He was lucky to ___ rather than go to jail.",
            "First offenders often ___.",
            "She expected to ___ for the minor crime.",
            "The judge allowed him to ___.",
            "They may ___ if they behave well."
          ] },
          { fr: "register", de: "der Wortschatz / das Sprachregister", def: "the style of language used in a particular situation", pool: [
            "A job letter needs a formal ___.",
            "He switched to a casual ___ with friends.",
            "The essay used the wrong ___ for an exam.",
            "Choosing the right ___ shows good writing.",
            "Texting uses a very informal ___."
          ] },
          { fr: "to sacrifice", de: "das Opfer / opfern", def: "to give up something valuable for a more important purpose", pool: [
            "She had to ___ her free time to study.",
            "Many parents ___ a lot for their children.",
            "He was willing to ___ comfort for adventure.",
            "Athletes often ___ sweets and late nights.",
            "They chose to ___ profit to protect jobs."
          ] },
          { fr: "self-determination", de: "die Selbstbestimmung", def: "the right to make your own decisions about your life", pool: [
            "The people demanded the right to ___.",
            "___ is central to their political struggle.",
            "Teenagers slowly gain more ___.",
            "The region fought for ___.",
            "Personal ___ means choosing your own path."
          ] },
          { fr: "to settle a fine", de: "eine Strafe bezahlen", def: "to pay a fine in full so the matter is closed", pool: [
            "He went online to ___ before the deadline.",
            "You can ___ at the post office.",
            "She chose to ___ rather than go to court.",
            "They must ___ within fourteen days.",
            "It's easier to ___ early and avoid extra costs."
          ] },
          { fr: "several", de: "mehrere", def: "more than two but not very many", pool: [
            "___ students were absent today.",
            "We met ___ times last month.",
            "She gave ___ good reasons.",
            "There are ___ ways to solve this.",
            "He waited for ___ hours."
          ] },
          { fr: "sleep disorder", de: "die Schlafstörung", def: "a medical condition that disturbs normal sleep", pool: [
            "Her ___ left her tired every morning.",
            "Doctors treated his ___ with therapy.",
            "A ___ can affect your whole day.",
            "Stress often leads to a ___.",
            "The clinic specialises in ___ treatment."
          ] },
          { fr: "social worker", de: "der/die Sozialarbeiter/in", def: "a person whose job is to help people with problems in their lives", pool: [
            "The ___ visited the family every week.",
            "A ___ helped him find a safe home.",
            "She trained for years to become a ___.",
            "The ___ supports children in difficulty.",
            "Their ___ arranged extra help at school."
          ] },
          { fr: "to supervise", de: "überwachen / beaufsichtigen", def: "to watch over and be in charge of people or work", pool: [
            "A teacher must ___ the school trip.",
            "She was asked to ___ the new staff.",
            "Lifeguards ___ swimmers at the pool.",
            "An adult should ___ young children near water.",
            "He will ___ the exam this afternoon."
          ] },
          { fr: "synonym", de: "das Synonym", def: "a word that means the same as another word", pool: [
            "'Happy' is a ___ for 'glad'.",
            "Can you find a ___ for 'big'?",
            "A good ___ makes writing less repetitive.",
            "The teacher asked for a ___ of 'fast'.",
            "'Begin' and 'start' are a useful ___ pair."
          ] },
          { fr: "the vast majority of", de: "die überwiegende Mehrheit", def: "almost all of a group of people or things", pool: [
            "___ students passed the exam.",
            "___ voters supported the plan.",
            "___ the work was already done.",
            "___ people enjoyed the show.",
            "___ complaints were about noise."
          ] },
          { fr: "to undertake", de: "durchführen / unternehmen", def: "to take on and begin a task or responsibility", pool: [
            "She agreed to ___ the difficult project.",
            "They will ___ major repairs this summer.",
            "He decided to ___ a long research study.",
            "The team must ___ the work carefully.",
            "Few people would ___ such a risky journey."
          ] },
          { fr: "undesirable", de: "unerwünscht", def: "not wanted or not approved of", pool: [
            "The medicine had some ___ side effects.",
            "Such behaviour is highly ___ at school.",
            "They removed the ___ content from the site.",
            "Cold weather is ___ for the festival.",
            "The plan had several ___ consequences."
          ] },
          { fr: "valid", de: "gültig", def: "legally or officially acceptable; well-founded", pool: [
            "Your ticket is ___ for one day only.",
            "She made a ___ point in the debate.",
            "The passport is no longer ___.",
            "That is a ___ reason to be absent.",
            "Only ___ entries will be counted."
          ] },
          { fr: "to validate", de: "entwerten / validieren", def: "to officially confirm or stamp something as acceptable", pool: [
            "Remember to ___ your ticket before boarding.",
            "The machine will ___ your parking.",
            "You must ___ the pass at the gate.",
            "Please ___ your travel card here.",
            "Staff will ___ your entry stamp."
          ] },
          { fr: "vandalism", de: "der Vandalismus", def: "deliberately damaging public or private property", pool: [
            "The ___ left the playground in ruins.",
            "Police are investigating the ___ at the school.",
            "___ costs the city thousands each year.",
            "Cameras were installed to stop ___.",
            "The wall was covered in ___."
          ] },
          { fr: "vulnerability", de: "die Verletzbarkeit", def: "the state of being easily harmed or hurt", pool: [
            "The storm exposed the town's ___.",
            "He hid his ___ behind a confident smile.",
            "The report highlighted the system's ___.",
            "Old age can bring a sense of ___.",
            "She spoke openly about her ___."
          ] }
        ]
      }
    ]
  }
];
