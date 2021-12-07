const defaultEvaluations = [
  {
    name: 'Arbeiten in der Gruppe',
    evaluations: [
      {
        mark: 20,
        descriptions: [
          `Es gelang ${name} nicht immer sich mit seinen Mitschülern zu verständigen, ohne dass dies zu Konflikten führte.`,
          `${name} war nur selten bereit Aufgaben in der Klasse zu übernehmen oder bei deren Durchführung mitzuwirken.`,
        ],
      },
      {
        mark: 40,
        descriptions: [
          `${name} arbeitete ungern mit anderen zusammen und musste häufig zur Beteiligung ermahnt werden.`,
          `Ma${name} hielt sich bei gemeinschaftlichen Aufgaben zurück und wartete ab, bis er von anderen in die Aktivitäten eingebunden wurde.`,
        ],
      },
      {
        mark: 60,
        descriptions: [
          `${name} arbeitete bereitwillig in der Gruppe mit, versuchte jedoch Führungsaufgaben zu vermeiden und wollte sich lieber im Hintergrund halten.`,
          `${name} war bemüht zu kooperieren.`,
        ],
      },
      {
        mark: 80,
        descriptions: [
          `${name} arbeitete produktiv in einer Gruppe mit.`,
          `Bereitwillig und verantwortungsbewusst übernahm ${name} Dienste in der Klassengemeinschaft.`,
        ],
      },
      {
        mark: 100,
        descriptions: [
          `${name} arbeitete sehr gerne mit anderen in der Gruppe zusammen und übernahm bereitwillig die Führungsaufgaben.`,
          `Zuverlässig, kameradschaftlich und mit kreativen Ideen brachte sich Ma${name} in gemeinschaftliche Aufgaben ein.`,
        ],
      },
    ],
  },
  {
    name: 'Arbeitsweise',
    evaluations: [
      {
        mark: 20,
        descriptions: [
          `${name} beteiligte sich nur sehr selten am Unterrichtsgeschehen und wirkte in den meisten Fällen sehr desinteressiert.`,
          `${name} beteiligte sich noch zu wenig am Unterrichtsgespräch.`,
        ],
      },
      {
        mark: 40,
        descriptions: [
          `Am Unterricht beteiligte ${name} sich meist mit wenig Ausdauer.`,
          `${name} verfolgte das Unterrichtsgeschehen mit wechselndem Interesse.`,
        ],
      },
      {
        mark: 60,
        descriptions: [
          `${name} folgte überwiegend aufmerksam dem Unterrichtsgeschehen.`,
          `${name} bemühte sich, dem Unterricht aufmerksam zu folgen. Oft ließ er sich noch ablenken und verpasste Zusammenhänge.`,
        ],
      },
      {
        mark: 80,
        descriptions: [
          `Immer dann, wenn ${name} sich auf die Aufgabenstellungen konzentrierte und nicht ablenken ließ, erreichte er sehr gute Ergebnisse.`,
          `${name} zeigte großes Interesse und meist sicheres Urteilsvermögen.`,
        ],
      },
      {
        mark: 100,
        descriptions: [
          `Mit beachtlichem Fleiß gelangen ${name} herausragende Ergebnisse.`,
          `Neue Aufträge ging ${name} rasch und zielstrebig an.`,
        ],
      },
    ],
  },
  {
    name: 'Sozialverhalten',
    evaluations: [
      {
        mark: 20,
        descriptions: [
          `Das Betragen von ${name} gab oft Anlass zu Kritik, die jedoch nicht ausreichend Beachtung fand.`,
          `Es gelang ${name} immer noch nicht sich mit seinen Mitschülern zu verständigen, ohne dass dies zu ernsteren Konflikten führte.`,
        ],
      },
      {
        mark: 40,
        descriptions: [
          `${name} könnte durch aktiveres Auftreten in der Klassengemeinschaft und Beteiligung an Konfliktlösungen seine Anerkennung bei Mitschülern steigern.`,
          `Es fiel ihm meist schwer, eigene Bedürfnisse und Interessen zurückzustellen.`,
        ],
      },
      {
        mark: 60,
        descriptions: [
          `${name} war sehr kontaktfreudig und fügte sich meist gut in die Klassengemeinschaft ein.`,
          `Es fiel ${name} nicht leicht, sich in die Lage anderer einzufühlen.`,
        ],
      },
      {
        mark: 80,
        descriptions: [
          `${name} trat freundlich und aufgeschlossen auf, war kontaktfreudig und mitteilsam.`,
          `${name} verstand sich gut mit seinen Mitschülern.`,
        ],
      },
      {
        mark: 100,
        descriptions: [
          `${name} trat ruhig und höflich auf, äußerte sich gut durchdacht und bereicherte das Klassenklima.`,
          `${name} gefiel durch immer einwandfreies Verhalten und große Einsatzbereitschaft für die Gemeinschaft.`,
        ],
      },
    ],
  },
  {
    name: 'Verhalten gegenüber dem Lehrer',
    evaluations: [
      {
        mark: 20,
        descriptions: [
          `Zuweilen fiel es ${name} nicht leicht, gegenüber seinen Lehrkräften einen angemessenen Ton zu finden.`,
          `Ratschläge und Hilfestellungen von Lehrkräften akzeptierte ${name} nur selten.`,
        ],
      },
      {
        mark: 40,
        descriptions: [
          `Zuweilen beachtete ${name} die Umgangsformen gegenüber den Lehrkräften nicht.`,
          `Den Lehrkräften gegenüber gab sich ${name} sehr zurückhaltend, schüchtern und gehemmt.`,
        ],
      },
      {
        mark: 60,
        descriptions: [
          `Auf Hinweise oder Hilfen durch Lehrer reagierte ${name} meist angemessen und respektvoll.`,
          `${name} verhielt sich freundlich und kooperativ, war jedoch noch recht zurückhaltend.`,
        ],
      },
      {
        mark: 80,
        descriptions: [
          `${name} verhielt sich Lehrern gegenüber stets höflich und war bei seinen Mitschülern beliebt.`,
          `${name} suchte selbstständig und regelmäßig Kontakt zu den Lehrern.`,
        ],
      },
      {
        mark: 100,
        descriptions: [
          `Oft erfragte ${name} beim Lehrer Rat und suchte auch gerne persönlichen Kontakt.`,
          `Hinweise des Lehrers nahm ${name} interessiert und freundlich auf.`,
        ],
      },
    ],
  },
];

export default defaultEvaluations;
