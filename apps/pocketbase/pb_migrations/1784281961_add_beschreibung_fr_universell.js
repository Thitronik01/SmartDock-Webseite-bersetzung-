/// <reference path="../pb_data/types.d.ts" />

migrate(
  (app) => {
    const frenchDescription = `1
Préparation à l'installation
Débranchez l'alimentation électrique des propulseurs.

2
Accédez aux connecteurs des propulseurs
Accédez aux connecteurs des propulseurs. Ceux-ci se trouvent généralement au poste de pilotage, près du panneau de commande des propulseurs.

3
Débranchez les connecteurs
Débranchez les connecteurs des propulseurs d'étrave et/ou de poupe.

4
Raccordez le TCU
Raccordez maintenant votre TCU à l'aide du faisceau de câbles fourni. Assurez-vous que les connecteurs sont correctement branchés et bien fixés. Vous trouverez les détails des raccordements des connecteurs ainsi que des informations plus complètes sur l'installation dans le manuel PDF correspondant au système de propulsion de votre bateau.

Remarque : si votre bateau est équipé de propulseurs d'étrave et de poupe, assurez-vous que les commandes de poupe et d'étrave sont chacune correctement raccordées.

5
Installez l'application
Téléchargez maintenant l'application SMARTDOCK depuis le Google Play Store ou l'App Store. Lorsque vous lancez l'application, un bouton de configuration automatique s'affiche. Ne l'appuyez pas pour l'instant.

6
Lancez le mode d'appairage du TCU
Rétablissez l'alimentation électrique via l'interrupteur principal. Tant qu'aucun téléphone portable n'est appairé avec le TCU, le mode d'appairage se lance automatiquement. Vous pouvez le constater lorsque la LED reste allumée en continu.

REMARQUE : pour appairer le TCU avec un autre téléphone portable, activez manuellement le mode d'appairage du TCU en appuyant longuement sur le bouton de l'appareil jusqu'à ce que la LED du TCU reste allumée en continu (mode d'appairage actif).

7
Appairez l'application avec le TCU
Appuyez maintenant sur le bouton « Démarrer » dans l'application pour lancer la configuration automatique. Une fois que l'application aura détecté vos appareils, un tutoriel s'affichera et vous guidera tout au long du processus de configuration pour régler les paramètres avancés.

Votre application est désormais appairée et prête à l'emploi. N'hésitez pas à utiliser le mode démo pour vous familiariser avec les commandes.`;

    let record;
    try {
      record = app.findFirstRecordByFilter(
        "anleitungen",
        "titel = 'Universell'",
      );
    } catch (e) {
      record = null;
    }

    if (record) {
      record.set("beschreibung_fr", frenchDescription);
      app.save(record);
    }
  },
  (app) => {
    let record;
    try {
      record = app.findFirstRecordByFilter(
        "anleitungen",
        "titel = 'Universell'",
      );
      if (record) {
        record.set("beschreibung_fr", "");
        app.save(record);
      }
    } catch (e) {
      // ignore
    }
  }
);
