/// <reference path="../pb_data/types.d.ts" />

migrate(
  (app) => {
    const collection = app.findCollectionByNameOrId("faqs");

    const seeds = [
      {
        order: 11,
        question_de: "Welche Funktionen bietet die SMARTDOCK-App?",
        question_en: "What features does the SMARTDOCK app offer?",
        question_fr: "Quelles sont les fonctionnalités de l'application SMARTDOCK ?",
        answer_de: "Sobald du deine Geräte per Bluetooth gekoppelt hast, erkennt die SMARTDOCK App welche Steuerungsmöglichkeiten für dein Boot verfügbar sind.\n\nMit SMARTDICK kannst du dein Boot intuitiv und unkompliziert steuern. Vier Steuermodi stehen zur Verfügung, damit für jede Situation und jeden Benutzer die passende Bedienung gewählt werden kann:\nDabei kannst du nicht nur wählen, ob die Ansicht vertikal, horizontal, mittels einem Finger oder zwei Fingern erfolgen soll. Du kannst auch mehrere der in deinem Boot eingebauten SMARTDOCK Produktegleichzeitig per App ansteuern. ",
        answer_en: "Once you've paired your devices via Bluetooth, the SMARTDOCK app will recognise which control options are available for your boat.\n\nWith SMARTDOCK, you can control your boat intuitively and easily. Four control modes are available, so you can choose the right one for every situation and every user:\nNot only can you choose whether the view should be vertical, horizontal, or controlled using one or two fingers, but you can also control several of the SMARTDOCK products installed in your boat simultaneously via the app.",
        answer_fr: "Dès que tu as appairé tes appareils via Bluetooth, l'application SMARTDOCK détecte les options de commande disponibles pour ton bateau.\n\nAvec SMARTDOCK, tu peux commander ton bateau de manière intuitive et simple. Quatre modes de commande sont disponibles, afin que chacun puisse choisir le mode d'utilisation adapté à chaque situation et à chaque utilisateur :\nTu peux non seulement choisir si l'affichage doit être vertical, horizontal, à l'aide d'un doigt ou de deux doigts, mais tu peux également commander simultanément via l'application plusieurs produits SMARTDOCK installés à bord de ton bateau.",
      },
      {
        order: 10,
        question_de: "Wie lange dauert es, bis ein per App erteilter Steuerbefehl von den Motoren ausgeführt wird?",
        question_en: "How long does it take for a control command given via app to be executed by the motors?",
        question_fr: "Combien de temps faut-il pour qu'une commande donnée via l'application soit exécutée par les moteurs ?",
        answer_de: "Eine präzise Steuerung ist essenziell, daher wird jeder Steuerbefehl ohne Verzögerung ausgeführt.",
        answer_en: "Precise control is essential, which is why every control command is executed without delay.",
        answer_fr: "Une commande précise est essentielle ; c'est pourquoi chaque commande est exécutée sans délai.",
      },
      {
        order: 9,
        question_de: "Was passiert, wenn die Verbindung zum SMARTDOCK-Produkt abbricht?",
        question_en: "What happens if the connection to the SMARTDOCK product is lost?",
        question_fr: "Que se passe-t-il en cas de coupure de la connexion avec le produit SMARTDOCK ?",
        answer_de: "Sicherheit geht vor: Sollte die Verbindung abbrechen, wechseln die Motoren sofort in die Neutralstellung. So bleibt jedes Manöver sicher und kontrolliert.\n\nDer Steuerstand des Bootes hat in jedem Fall Vorrang. Sobald dieser bedient wird, funktioniert auch nur darüber die Steuerung.",
        answer_en: "Safety first: should the connection be lost, the engines immediately switch to neutral. This ensures that every manoeuvre remains safe and controlled.\n\nThe boat's helm always takes precedence. As soon as it is operated, control is managed exclusively via the helm.",
        answer_fr: "La sécurité avant tout : en cas de coupure de la connexion, les moteurs passent immédiatement au point mort. Ainsi, chaque manœuvre reste sûre et maîtrisée.\n\nLe poste de pilotage du bateau a toujours la priorité. Dès qu'il est actionné, c'est uniquement par son intermédiaire que s'effectue la commande.",
      },
      {
        order: 8,
        question_de: "Kann SMARTDOCK nachgerüstet werden?",
        question_en: "Can SMARTDOCK be retrofitted?",
        question_fr: "Peut-on installer SMARTDOCK a posteriori ?",
        answer_de: "Ja, unsere SMARTDOCK-Produkte haben wir speziell für die Nachrüstung entwickelt.\n\nAufgrund der unkomplizierten Installation via Plug & Play kannst du SMARTDOCK sogar ohne technische Vorkenntnisse selbst installieren.\nWer das  nicht möchte, kann unseren Einbauservice nutzen, den du direkt bei deiner Konfiguration anfragen kannst. \nSelbstverständlich kannst du die Installation auch von einem Händler in deiner Nähe durchführen lassen. Wirf hierzu gerne einen Blick in unserem Händlerfinder.",
        answer_en: "Yes, we have developed our SMARTDOCK products specifically for retrofitting.\n\nThanks to the straightforward plug-and-play installation, you can even fit SMARTDOCK yourself without any prior technical knowledge.\nIf you'd rather not do this yourself, you can use our installation service, which you can request directly when configuring your order. \nOf course, you can also have the installation carried out by a retailer near you. Please feel free to take a look at our retailer finder.",
        answer_fr: "Oui, nous avons spécialement conçu nos produits SMARTDOCK pour une installation a posteriori.\n\nGrâce à leur installation simple par Plug & Play, tu peux installer SMARTDOCK toi-même, même sans connaissances techniques préalables.\nSi tu ne souhaites pas le faire toi-même, tu peux faire appel à notre service d'installation, que tu peux demander directement lors de ta configuration. \nBien entendu, tu peux également faire réaliser l'installation par un revendeur près de chez toi. N'hésite pas à consulter notre localisateur de revendeurs.",
      },
      {
        order: 7,
        question_de: "Ist mein Motor mit SMARTDOCK kompatibel?",
        question_en: "Is my motor compatible with SMARTDOCK?",
        question_fr: "Mon moteur est-il compatible avec SMARTDOCK ?",
        answer_de: "SMARTDOCK ist bereits mit vielen Motoren und Strahlruderherstellern kompatibel.\nIn unserem Konfigurator erhältst du schnell einen Überblick über die Lösungen, die zu deinen Ansprüchen passen. \n\nDu hast deinen Motortyp nicht bei uns gefunden? Dann melde dich gerne per E-Mail oder über das Kontaktformular bei uns. Wir integrieren stetig weitere Hersteller und helfen dir  gerne weiter. ",
        answer_en: "SMARTDOCK is already compatible with many engine and thruster manufacturers.\nOur configurator gives you a quick overview of the solutions that meet your requirements.\n\nCan't find your engine type here? Then please feel free to get in touch with us by email or via the contact form. We're constantly adding new manufacturers and will be happy to help.",
        answer_fr: "SMARTDOCK est déjà compatible avec de nombreux fabricants de moteurs et de propulseurs.\nNotre configurateur te permet d'obtenir rapidement un aperçu des solutions adaptées à tes besoins.\n\nTu n'as pas trouvé ton type de moteur dans notre catalogue ? N'hésite pas à nous contacter par e-mail ou via le formulaire de contact. Nous ajoutons régulièrement de nouveaux fabricants à notre liste et serons ravis de t'aider.",
      },
      {
        order: 6,
        question_de: "Wie funktioniert SMARTDOCK?",
        question_en: "How does SMARTDOCK work?",
        question_fr: "Comment fonctionne SMARTDOCK ?",
        answer_de: "Das jeweilige SMARTDOCK Gerät wird via Plug-and-Play mit der Steuerungselektronik deines Bootes verbunden. Sobald das SMARTDOCK Gerät per Bluetooth gekoppelt ist, kannst du dein Boot von jeder beliebigen Stelle an Bord per App steuern.",
        answer_en: "The relevant SMARTDOCK device connects to your boat's control system via plug-and-play. Once the SMARTDOCK device is paired via Bluetooth, you can control your boat from anywhere on board using the app.",
        answer_fr: "L'appareil SMARTDOCK correspondant se connecte au système électronique de commande de ton bateau via la fonction Plug-and-Play. Dès que l'appareil SMARTDOCK est appairé via Bluetooth, tu peux piloter ton bateau depuis n'importe quel endroit à bord grâce à l'application.",
      },
      {
        order: 5,
        question_de: "Wie kann ich alle mit dem Gerät verbundenen Smartphones löschen?",
        question_en: "How can I delete all smartphones connected to the device?",
        question_fr: "Comment puis-je supprimer tous les smartphones connectés à l'appareil ?",
        answer_de: "Um die mit einem SMARTDOCK-Gerät gekoppelten Smartphones zu löschen, gehst du folgendermaßen vor:\nUnterbrich die Stromversorgung des SMARTDOCK-Produktes, indem du den entsprechenden Stecker des Gerätes abziehst.\nHalte den Taster gedrückt, und stelle die Stromversorgung wieder her.\nDas Gerät gibt eine aufsteigende Tonfolge aus, und die LED blinkt einige Male schnell. Anschließend wechselt die LED auf Dauerleuchten und signalisiert damit, dass der Kopplungsmodus aktiv ist.\nAlle mit dem SMARTDOCK-Gerät verbundenen Smartphones wurden gelöscht, und du kannst jetzt ein neues Gerät koppeln.\n\nAchtung:\nWenn du mehrere SMARTDOCK-Produkteinstalliert hast, musst du den Löschvorgang für jedes SMARTDOCK Gerät einzeln durchführen.",
        answer_en: "To delete smartphones paired with a SMARTDOCK device, follow these steps:\nDisconnect the SMARTDOCK product from the mains by unplugging the relevant plug.\nPress and hold the button, then reconnect the device to the mains.\nThe device will emit a rising tone and the LED will flash rapidly a few times. The LED will then switch to a steady glow, indicating that pairing mode is active.\nAll smartphones connected to the SMARTDOCK device have been removed, and you can now pair a new device.\n\nPlease note:\nIf you have several SMARTDOCK products installed, you must carry out the removal process for each SMARTDOCK device individually.",
        answer_fr: "Pour supprimer les smartphones appairés à un appareil SMARTDOCK, procédez comme suit :\nDébranchez l'appareil SMARTDOCK en retirant la fiche correspondante.\nMaintenez le bouton enfoncé, puis rebranchez l'appareil.\nL'appareil émet une séquence de bips ascendants et la LED clignote rapidement plusieurs fois. La LED passe ensuite en mode fixe, indiquant ainsi que le mode de couplage est actif.\nTous les smartphones connectés à l'appareil SMARTDOCK ont été supprimés et vous pouvez désormais coupler un nouvel appareil.\n\nAttention :\nSi vous avez installé plusieurs appareils SMARTDOCK, vous devez effectuer la procédure de suppression séparément pour chaque appareil SMARTDOCK.",
      },
      {
        order: 4,
        question_de: "Wie kann ich ein Smartphone mit einem SMARTDOCK-Produkt koppeln?",
        question_en: "How can I pair a smartphone with a SMARTDOCK product?",
        question_fr: "Comment puis-je connecter un smartphone à un produit SMARTDOCK ?",
        answer_de: "Installiere zunächst die SMARTDOCK App auf dem neu zu koppelnden Smartphone und aktiviere Bluetooth für die App in den Einstellungen.\nUm das Smartphone mit der mit dem entsprechenden SMARTDOCK-Produkt zu koppeln, musst du den Kopplungsmodus an dem SMARTDOCK-Produkt aktivieren. Dazu hast du zwei Möglichkeiten:\n\nVariante 1:\nAktiviere BLUETOOTH für die SMARTDOCK App in den Einstellungen des neu anzulernenden Smartphones.\nDrücke den Taster am SMARTDOCK-Produkt , bis die die LED durchgängig blau leuchtet.\n\nVariante 2:\nÖffne die App auf einem bereits verbundenen Smartphone und aktiviere den Kopplungsmodus, indem du auf „Steuercomputer\" tippst, das Gerät auswählst und dann auf die Schaltfläche „Kopplungsmodus aktivieren\" tippst.\n\nSobald der Kopplungsmodus des SMARTDOCK-Produkts aktiviert ist, öffnest du die SMARTDOCK App auf dem neu zu koppelnden Smartphone.\nAuf dem Startbildschirm tippst du auf das Zahnrad-Symbol. Wähle dann „Verbunde Geräte\" -> „Steuercomputer suchen\". Eine Liste der verfügbaren Geräte wird angezeigt. Wähle das gewünschte Produkt aus. Ein Dialogfenster zeigt dir an, dass die Verbindung hergestellt wird.",
        answer_en: "First, install the SMARTDOCK app on the smartphone you wish to pair and enable Bluetooth for the app in the settings.\nTo pair the smartphone with the relevant SMARTDOCK product, you must activate pairing mode on the SMARTDOCK product. There are two ways to do this:\n\nOption 1:\nEnable BLUETOOTH for the SMARTDOCK app in the settings of the smartphone you wish to pair.\nPress the button on the SMARTDOCK product until the LED lights up blue continuously.\n\nOption 2:\nOpen the app on a smartphone that is already connected and activate pairing mode by tapping 'Control Unit', selecting the device and then tapping the 'Activate Pairing Mode' button.\n\nOnce pairing mode is activated on the SMARTDOCK product, open the SMARTDOCK app on the smartphone you wish to pair.\nOn the home screen, tap the cog icon. Then select 'Connected Devices' -> 'Search for Control Unit'. A list of available devices will be displayed. Select the desired product. A dialogue box will appear to indicate that the connection is being established.",
        answer_fr: "Commence par installer l'application SMARTDOCK sur le smartphone que tu souhaites coupler, puis active le Bluetooth pour l'application dans les paramètres.\nPour coupler le smartphone avec le produit SMARTDOCK correspondant, tu dois activer le mode de couplage sur le produit SMARTDOCK. Pour cela, tu as deux possibilités :\n\nOption 1 :\nActive le Bluetooth pour l'application SMARTDOCK dans les paramètres du smartphone que tu souhaites coupler.\nAppuyez sur le bouton du produit SMARTDOCK jusqu'à ce que la LED s'allume en bleu fixe.\n\nOption 2 :\nOuvrez l'application sur un smartphone déjà connecté et activez le mode d'appairage en appuyant sur « Unité de commande », en sélectionnant l'appareil, puis en appuyant sur le bouton « Activer le mode d'appairage ».\n\nDès que le mode de couplage du produit SMARTDOCK est activé, ouvrez l'application SMARTDOCK sur le smartphone que vous souhaitez coupler.\nSur l'écran d'accueil, appuyez sur l'icône en forme de roue dentée. Sélectionnez ensuite « Appareils connectés » -> « Rechercher un calculateur ». Une liste des appareils disponibles s'affiche. Sélectionnez le produit souhaité. Une fenêtre de dialogue vous indique que la connexion est en cours d'établissement.",
      },
      {
        order: 3,
        question_de: "Ich kann die Steuerung meines Bootes nicht auf dem Smartphone übernehmen. Woran kann das liegen?",
        question_en: "I cannot take control of my boat on my smartphone. What could be the reason?",
        question_fr: "Je n'arrive pas à prendre les commandes de mon bateau depuis mon smartphone. À quoi cela peut-il être dû ?",
        answer_de: "Es kann verschiedene Gründe haben, wenn du dein Boot nicht mit deinem Smartphone steuern kannst.\n1.  Die Bluetooth-Verbindung ist nicht aktiv.\n2.  Docking ist am Joystick nicht aktiviert/der Gashebel steht nicht in Neutralstellung.\n3.  Der Akkustand ist zu niedrig.\nTippe in der SMARTDOCK App auf das Zahnrad-Symbol und prüfe unter „Verbundene Geräte\", ob unter dem Namen des Geräts „connected\" steht. Nur dann ist dein Gerät verbunden.\n\nUm die Steuerung deines Bootes auf dem Smartphone zu übernehmen, muss Docking am Joystick aktiviert sein bzw. der Gashebel in der Neutralstellung stehen. Vergewissere dich am Steuerstand, dass dies der Fall ist.\n\nDer Akkustand deines Smartphones liegt unter 18 Prozent. Aus Sicherheitsgründen wird die Steuerung per Smartphone verhindert, wenn dein Smartphone Akkustand weniger als 18 Prozent beträgt. Bitte lade dein Endgerät auf, um die Steuerung übernehmen zu können.",
        answer_en: "There may be various reasons why you cannot control your boat using your smartphone.\n1. The Bluetooth connection is not active.\n2. Docking is not enabled on the joystick / the throttle is not in neutral.\n3. The battery level is too low.\nTap the cog icon in the SMARTDOCK app and check under 'Connected Devices' to see if 'connected' appears next to the device's name. Only then is your device connected.\n\nTo take control of your boat via your smartphone, docking must be enabled on the joystick or the throttle must be in the neutral position. Check at the helm to ensure this is the case.\n\nYour smartphone's battery level is below 18 per cent. For safety reasons, control via smartphone is disabled if your smartphone's battery level is below 18 per cent. Please charge your device so that you can take control.",
        answer_fr: "Il peut y avoir plusieurs raisons pour lesquelles tu ne parviens pas à contrôler ton bateau avec ton smartphone.\n1.  La connexion Bluetooth n'est pas active.\n2.  La fonction « Docking » n'est pas activée sur le joystick / la manette des gaz n'est pas en position neutre.\n3.  Le niveau de batterie est trop bas.\nDans l'application SMARTDOCK, appuyez sur l'icône en forme de roue dentée et vérifiez dans la rubrique « Appareils connectés » si la mention « connected » apparaît sous le nom de l'appareil. Ce n'est qu'alors que votre appareil est connecté.\n\nPour prendre le contrôle de votre bateau depuis votre smartphone, la fonction « Docking » doit être activée sur le joystick ou la manette des gaz doit être en position neutre. Assure-toi que c'est bien le cas depuis le poste de pilotage.\n\nLe niveau de batterie de ton smartphone est inférieur à 18 %. Pour des raisons de sécurité, la commande via smartphone est désactivée lorsque le niveau de batterie de ton smartphone est inférieur à 18 %. Recharge ton appareil pour pouvoir prendre le contrôle.",
      },
    ];

    for (const data of seeds) {
      const r = new Record(collection);
      r.load(data);
      app.save(r);
    }
  },
  (app) => {
    const questions = [
      "Welche Funktionen bietet die SMARTDOCK-App?",
      "Wie lange dauert es, bis ein per App erteilter Steuerbefehl von den Motoren ausgeführt wird?",
      "Was passiert, wenn die Verbindung zum SMARTDOCK-Produkt abbricht?",
      "Kann SMARTDOCK nachgerüstet werden?",
      "Ist mein Motor mit SMARTDOCK kompatibel?",
      "Wie funktioniert SMARTDOCK?",
      "Wie kann ich alle mit dem Gerät verbundenen Smartphones löschen?",
      "Wie kann ich ein Smartphone mit einem SMARTDOCK-Produkt koppeln?",
      "Ich kann die Steuerung meines Bootes nicht auf dem Smartphone übernehmen. Woran kann das liegen?",
    ];
    for (const q of questions) {
      try {
        const r = app.findFirstRecordByFilter("faqs", `question_de = {:q}`, { q });
        app.delete(r);
      } catch (e) {
        if (e.message.includes("no rows in result set")) {
          continue;
        }
        throw e;
      }
    }
  },
);
