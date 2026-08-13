/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_DE");

  const record0 = new Record(collection);
    record0.id = "tkor6tq5jz64y4f";
    record0.set("key", "datenschutz_title");
    record0.set("de", "Datenschutzerkl\u00e4rung");
    record0.set("page", "datenschutz");
    record0.set("section", "header");
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.id = "e4or8mrxgnwi0b9";
    record1.set("key", "datenschutz_subtitle");
    record1.set("de", "Informationen \u00fcber die Erhebung, Verarbeitung und Nutzung Ihrer personenbezogenen Daten.");
    record1.set("page", "datenschutz");
    record1.set("section", "header");
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record2 = new Record(collection);
    record2.id = "ifgyye6occtsr8j";
    record2.set("key", "datenschutz_section1_title");
    record2.set("de", "1. Einleitung");
    record2.set("page", "datenschutz");
    record2.set("section", "introduction");
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record3 = new Record(collection);
    record3.id = "gffrz2e1nlc231k";
    record3.set("key", "datenschutz_section1_content");
    record3.set("de", "Wir freuen uns \u00fcber Ihr Interesse an unserer Website und unseren Produkten. Der Schutz Ihrer Privatsph\u00e4re ist f\u00fcr uns sehr wichtig. Nachstehend informieren wir Sie ausf\u00fchrlich \u00fcber den Umgang mit Ihren Daten. Personenbezogene Daten sind alle Daten, mit denen Sie pers\u00f6nlich identifiziert werden k\u00f6nnen. Hierzu z\u00e4hlen beispielsweise Name, E-Mail-Adresse, Anschrift oder auch Nutzungsdaten wie Ihre IP-Adresse.");
    record3.set("page", "datenschutz");
    record3.set("section", "introduction");
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record4 = new Record(collection);
    record4.id = "cahhlg53i9b5mfv";
    record4.set("key", "datenschutz_section2_title");
    record4.set("de", "2. Kontakt (Verantwortlicher)");
    record4.set("page", "datenschutz");
    record4.set("section", "contact");
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record5 = new Record(collection);
    record5.id = "065yrbqjs397ki7";
    record5.set("key", "datenschutz_section2_content");
    record5.set("de", "Verantwortlicher f\u00fcr die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:");
    record5.set("page", "datenschutz");
    record5.set("section", "contact");
  try {
    app.save(record5);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record6 = new Record(collection);
    record6.id = "xapl5pla5antglh";
    record6.set("key", "datenschutz_section2_phone");
    record6.set("de", "Telefon:");
    record6.set("page", "datenschutz");
    record6.set("section", "contact");
  try {
    app.save(record6);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record7 = new Record(collection);
    record7.id = "fsn30694jrcf9jw";
    record7.set("key", "datenschutz_section2_imprint");
    record7.set("de", "Weitere Details zur verantwortlichen Stelle finden Sie in unserem Impressum.");
    record7.set("page", "datenschutz");
    record7.set("section", "contact");
  try {
    app.save(record7);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record8 = new Record(collection);
    record8.id = "dunrrvdr5lzv74s";
    record8.set("key", "datenschutz_section3_title");
    record8.set("de", "3. Server-Logfiles");
    record8.set("page", "datenschutz");
    record8.set("section", "server_logfiles");
  try {
    app.save(record8);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record9 = new Record(collection);
    record9.id = "8g6thxd08auw22v";
    record9.set("key", "datenschutz_section3_content");
    record9.set("de", "Sie k\u00f6nnen unsere Webseiten besuchen, ohne Angaben zu Ihrer Person zu machen. Bei jedem Aufruf einer Webseite speichert der Webserver lediglich automatisch ein sogenanntes Server-Logfile, das z.B. den Namen der angeforderten Datei, Ihre IP-Adresse, Datum und Uhrzeit des Abrufs, \u00fcbertragene Datenmenge und den anfragenden Provider (Zugriffsdaten) enth\u00e4lt und den Abruf dokumentiert. Diese Zugriffsdaten werden ausschlie\u00dflich zum Zwecke der Sicherstellung eines st\u00f6rungsfreien Betriebs der Seite sowie der Verbesserung unseres Angebots ausgewertet. Dies dient gem\u00e4\u00df Art. 6 Abs. 1 S. 1 lit. f DSGVO der Wahrung unserer im Rahmen einer Interessensabw\u00e4gung \u00fcberwiegenden berechtigten Interessen an einer korrekten Darstellung unseres Angebots.");
    record9.set("page", "datenschutz");
    record9.set("section", "server_logfiles");
  try {
    app.save(record9);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record10 = new Record(collection);
    record10.id = "7ygnbpsu8by77ix";
    record10.set("key", "datenschutz_section4_title");
    record10.set("de", "4. Initiativ-Kontaktaufnahme des Kunden per E-Mail");
    record10.set("page", "datenschutz");
    record10.set("section", "email_contact");
  try {
    app.save(record10);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record11 = new Record(collection);
    record11.id = "nv1cudq13ukllxp";
    record11.set("key", "datenschutz_section4_content");
    record11.set("de", "Wenn Sie per E-Mail oder \u00fcber ein Kontaktformular Kontakt mit uns aufnehmen, werden die von Ihnen mitgeteilten Daten (Ihre E-Mail-Adresse, ggf. Ihr Name und Ihre Telefonnummer) von uns gespeichert, um Ihre Fragen zu beantworten. Die in diesem Zusammenhang anfallenden Daten l\u00f6schen wir, nachdem die Speicherung nicht mehr erforderlich ist, oder schr\u00e4nken die Verarbeitung ein, falls gesetzliche Aufbewahrungspflichten bestehen. Rechtsgrundlage f\u00fcr die Verarbeitung der Daten ist unser berechtigtes Interesse an der Beantwortung Ihres Anliegens gem\u00e4\u00df Art. 6 Abs. 1 lit. f DSGVO. Zielt Ihre Kontaktierung auf den Abschluss eines Vertrages ab, so ist zus\u00e4tzliche Rechtsgrundlage f\u00fcr die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO.");
    record11.set("page", "datenschutz");
    record11.set("section", "email_contact");
  try {
    app.save(record11);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record12 = new Record(collection);
    record12.id = "5qanykijoiwt7oc";
    record12.set("key", "datenschutz_section5_title");
    record12.set("de", "5. Bestellungen");
    record12.set("page", "datenschutz");
    record12.set("section", "orders");
  try {
    app.save(record12);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record13 = new Record(collection);
    record13.id = "84dhd6vukaz7kcs";
    record13.set("key", "datenschutz_section5_content");
    record13.set("de", "Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit sie f\u00fcr die Begr\u00fcndung, inhaltliche Ausgestaltung oder \u00c4nderung des Rechtsverh\u00e4ltnisses (Bestandsdaten) erforderlich sind. Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erf\u00fcllung eines Vertrags oder vorvertraglicher Ma\u00dfnahmen gestattet. Zur Vertragserf\u00fcllung geben wir Ihre Daten an das mit der Lieferung beauftragte Versandunternehmen weiter, soweit dies zur Lieferung bestellter Waren erforderlich ist. Zur Abwicklung von Zahlungen geben wir die hierf\u00fcr erforderlichen Zahlungsdaten an das mit der Zahlung beauftragte Kreditinstitut und ggf. von uns beauftragte Zahlungsdienstleister weiter.");
    record13.set("page", "datenschutz");
    record13.set("section", "orders");
  try {
    app.save(record13);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record14 = new Record(collection);
    record14.id = "dbs8idpmedwp266";
    record14.set("key", "datenschutz_section6_title");
    record14.set("de", "6. Werbung (Newsletter)");
    record14.set("page", "datenschutz");
    record14.set("section", "newsletter");
  try {
    app.save(record14);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record15 = new Record(collection);
    record15.id = "chc98sfn6e8q54n";
    record15.set("key", "datenschutz_section6_content");
    record15.set("de", "Wenn Sie sich zu unserem Newsletter anmelden, verwenden wir die hierf\u00fcr erforderlichen oder gesondert von Ihnen mitgeteilten Daten, um Ihnen regelm\u00e4\u00dfig unseren E-Mail-Newsletter aufgrund Ihrer Einwilligung gem\u00e4\u00df Art. 6 Abs. 1 S. 1 lit. a DSGVO zuzusenden. Die Abmeldung vom Newsletter ist jederzeit m\u00f6glich und kann entweder durch eine Nachricht an die oben beschriebene Kontaktm\u00f6glichkeit oder \u00fcber einen daf\u00fcr vorgesehenen Link im Newsletter erfolgen. Nach Abmeldung l\u00f6schen wir Ihre E-Mail-Adresse, soweit Sie nicht ausdr\u00fccklich in eine weitere Nutzung Ihrer Daten eingewilligt haben.");
    record15.set("page", "datenschutz");
    record15.set("section", "newsletter");
  try {
    app.save(record15);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record16 = new Record(collection);
    record16.id = "dwxn130xhy0me1e";
    record16.set("key", "datenschutz_section7_title");
    record16.set("de", "7. Cookies");
    record16.set("page", "datenschutz");
    record16.set("section", "cookies");
  try {
    app.save(record16);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record17 = new Record(collection);
    record17.id = "c4dtr9bu6i8c7pg";
    record17.set("key", "datenschutz_section7_subtitle");
    record17.set("de", "Technisch notwendige Cookies");
    record17.set("page", "datenschutz");
    record17.set("section", "cookies");
  try {
    app.save(record17);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record18 = new Record(collection);
    record18.id = "iyg97hy65sncic9";
    record18.set("key", "datenschutz_section7_content");
    record18.set("de", "Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter Funktionen zu erm\u00f6glichen, verwenden wir auf verschiedenen Seiten sogenannte Cookies. Dies dient der Wahrung unserer im Rahmen einer Interessensabw\u00e4gung \u00fcberwiegenden berechtigten Interessen an einer optimierten Darstellung unseres Angebots gem\u00e4\u00df Art. 6 Abs. 1 S. 1 lit. f DSGVO. Die meisten der von uns verwendeten Cookies werden nach Ende der Browser-Sitzung wieder von Ihrer Festplatte gel\u00f6scht (sog. Sitzungs-Cookies). Andere Cookies verbleiben auf Ihrem Rechner und erm\u00f6glichen es uns, Ihren Rechner bei Ihrem n\u00e4chsten Besuch wiederzuerkennen (dauerhafte Cookies).");
    record18.set("page", "datenschutz");
    record18.set("section", "cookies");
  try {
    app.save(record18);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record19 = new Record(collection);
    record19.id = "6132vfqnuqs0eco";
    record19.set("key", "datenschutz_cookiebot_title");
    record19.set("de", "Cookiebot");
    record19.set("page", "datenschutz");
    record19.set("section", "cookiebot");
  try {
    app.save(record19);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record20 = new Record(collection);
    record20.id = "dyyckqnrc694y9l";
    record20.set("key", "datenschutz_cookiebot_content");
    record20.set("de", "Wir nutzen das Consent-Management-Tool Cookiebot des Anbieters Usercentrics A/S, Havnegade 39, 1058 Kopenhagen, D\u00e4nemark, um Ihre Einwilligung zur Speicherung bestimmter Cookies auf Ihrem Endger\u00e4t oder zum Einsatz bestimmter Technologien einzuholen und datenschutzkonform zu dokumentieren. Beim Betreten unserer Website wird eine Verbindung zu den Servern von Cookiebot hergestellt, um Ihre Einwilligungen und sonstige Erkl\u00e4rungen zur Cookie-Nutzung einzuholen. Cookiebot speichert hierbei einen Cookie in Ihrem Browser, um Ihnen die erteilten Einwilligungen bzw. deren Widerruf zuordnen zu k\u00f6nnen. Die so erfassten Daten werden gespeichert, bis Sie uns zur L\u00f6schung auffordern, den Cookiebot-Cookie selbst l\u00f6schen oder der Zweck f\u00fcr die Datenspeicherung entf\u00e4llt.");
    record20.set("page", "datenschutz");
    record20.set("section", "cookiebot");
  try {
    app.save(record20);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record21 = new Record(collection);
    record21.id = "bi8savcifkx9joy";
    record21.set("key", "datenschutz_section8_title");
    record21.set("de", "8. Analyse");
    record21.set("page", "datenschutz");
    record21.set("section", "analytics");
  try {
    app.save(record21);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record22 = new Record(collection);
    record22.id = "3hhr4xxggl341yn";
    record22.set("key", "datenschutz_section8_ga4_title");
    record22.set("de", "Google Analytics 4");
    record22.set("page", "datenschutz");
    record22.set("section", "analytics");
  try {
    app.save(record22);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record23 = new Record(collection);
    record23.id = "jjvz090pdgohd8d";
    record23.set("key", "datenschutz_section8_ga4_content");
    record23.set("de", "Wir nutzen auf unserer Website Google Analytics 4, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (Google). Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website durch Sie erm\u00f6glichen. Die durch das Cookie erzeugten Informationen \u00fcber Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA \u00fcbertragen und dort gespeichert. Bei Google Analytics 4 ist die IP-Anonymisierung standardm\u00e4\u00dfig aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europ\u00e4ischen Union oder in anderen Vertragsstaaten des Abkommens \u00fcber den Europ\u00e4ischen Wirtschaftsraum vor der \u00dcbermittlung gek\u00fcrzt. Sie k\u00f6nnen die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht s\u00e4mtliche Funktionen dieser Website vollumf\u00e4nglich werden nutzen k\u00f6nnen. Sie k\u00f6nnen dar\u00fcber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verf\u00fcgbare Browser-Plug-in herunterladen und installieren: https://tools.google.com/dlpage/gaoptout?hl=de.");
    record23.set("page", "datenschutz");
    record23.set("section", "analytics");
  try {
    app.save(record23);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record24 = new Record(collection);
    record24.id = "kd5lqqfc291br07";
    record24.set("key", "datenschutz_section9_title");
    record24.set("de", "9. Plug-ins und Sonstiges");
    record24.set("page", "datenschutz");
    record24.set("section", "plugins");
  try {
    app.save(record24);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record25 = new Record(collection);
    record25.id = "exisrpe9v1dpubw";
    record25.set("key", "datenschutz_section9_gtm_title");
    record25.set("de", "Google Tag Manager");
    record25.set("page", "datenschutz");
    record25.set("section", "plugins");
  try {
    app.save(record25);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record26 = new Record(collection);
    record26.id = "xa8nxelm7r3cz6o";
    record26.set("key", "datenschutz_section9_gtm_content");
    record26.set("de", "Wir setzen den Google Tag Manager ein. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Der Google Tag Manager ist ein Tool, mit dem wir Tracking- oder Statistik-Tools und andere Technologien auf unserer Website einbinden k\u00f6nnen. Der Google Tag Manager selbst erstellt keine Nutzerprofile, speichert keine Cookies und nimmt keine eigenst\u00e4ndigen Analysen vor. Er dient lediglich der Verwaltung und Ausspielung der \u00fcber ihn eingebundenen Tools.");
    record26.set("page", "datenschutz");
    record26.set("section", "plugins");
  try {
    app.save(record26);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record27 = new Record(collection);
    record27.id = "18g8k0t7tm7mx68";
    record27.set("key", "datenschutz_cloudfront_title");
    record27.set("de", "Cloudfront");
    record27.set("page", "datenschutz");
    record27.set("section", "cloudfront");
  try {
    app.save(record27);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record28 = new Record(collection);
    record28.id = "jvd426hndz25kyw";
    record28.set("key", "datenschutz_cloudfront_content");
    record28.set("de", "Wir nutzen das Content Delivery Network (CDN) Amazon CloudFront. Anbieter ist die Amazon Web Services EMEA SARL, 38 avenue John F. Kennedy, L-1855, Luxemburg. Amazon CloudFront ist ein global verteiltes CDN, das es uns erm\u00f6glicht, Inhalte unserer Website schneller und sicherer an Sie auszuliefern. Dabei wird der Datentransfer zwischen Ihrem Browser und unserer Website \u00fcber die Infrastruktur von CloudFront geroutet. Rechtsgrundlage f\u00fcr die Nutzung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und effizienten Bereitstellung unseres Onlineangebotes).");
    record28.set("page", "datenschutz");
    record28.set("section", "cloudfront");
  try {
    app.save(record28);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record29 = new Record(collection);
    record29.id = "myfr2lrphni683v";
    record29.set("key", "datenschutz_section10_title");
    record29.set("de", "10. Betroffenenrechte und Speicherdauer");
    record29.set("page", "datenschutz");
    record29.set("section", "rights_duration");
  try {
    app.save(record29);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record30 = new Record(collection);
    record30.id = "lhpab1sz24zc1zt";
    record30.set("key", "datenschutz_section10_content");
    record30.set("de", "Die von uns verarbeiteten Daten werden gel\u00f6scht oder in ihrer Verarbeitung eingeschr\u00e4nkt, sobald der Zweck der Speicherung entf\u00e4llt, keine gesetzlichen Aufbewahrungsfristen der L\u00f6schung entgegenstehen und/oder unsererseits kein berechtigtes Interesse an der Weiterspeicherung fortbesteht.");
    record30.set("page", "datenschutz");
    record30.set("section", "rights_duration");
  try {
    app.save(record30);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record31 = new Record(collection);
    record31.id = "zrg0sx71u1l5g2u";
    record31.set("key", "datenschutz_section11_title");
    record31.set("de", "11. Rechte der betroffenen Person");
    record31.set("page", "datenschutz");
    record31.set("section", "subject_rights");
  try {
    app.save(record31);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record32 = new Record(collection);
    record32.id = "75bvzlu0v2fxehx";
    record32.set("key", "datenschutz_section11_content");
    record32.set("de", "Sie haben unter den jeweiligen gesetzlichen Voraussetzungen folgende Rechte bez\u00fcglich Ihrer personenbezogenen Daten: Recht auf Auskunft (Art. 15 DSGVO) \u00fcber Ihre von uns verarbeiteten personenbezogenen Daten. Recht auf Berichtigung (Art. 16 DSGVO) unrichtiger oder auf Vervollst\u00e4ndigung Ihrer bei uns gespeicherten personenbezogenen Daten. Recht auf L\u00f6schung (Art. 17 DSGVO) Ihrer bei uns gespeicherten personenbezogenen Daten, soweit nicht die Verarbeitung zur Aus\u00fcbung des Rechts auf freie Meinungs\u00e4u\u00dferung und Information, zur Erf\u00fcllung einer rechtlichen Verpflichtung, aus Gr\u00fcnden des \u00f6ffentlichen Interesses oder zur Geltendmachung, Aus\u00fcbung oder Verteidigung von Rechtsanspr\u00fcchen erforderlich ist. Recht auf Einschr\u00e4nkung der Verarbeitung (Art. 18 DSGVO) Ihrer personenbezogenen Daten, soweit die Richtigkeit der Daten von Ihnen bestritten wird, die Verarbeitung unrechtm\u00e4\u00dfig ist, Sie aber deren L\u00f6schung ablehnen. Recht auf Daten\u00fcbertragbarkeit (Art. 20 DSGVO), d.h. das Recht, Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, g\u00e4ngigen und maschinenlesebaren Format zu erhalten.");
    record32.set("page", "datenschutz");
    record32.set("section", "subject_rights");
  try {
    app.save(record32);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record33 = new Record(collection);
    record33.id = "5ezg2djhxet20fm";
    record33.set("key", "datenschutz_section12_title");
    record33.set("de", "12. Beschwerderecht bei der Aufsichtsbeh\u00f6rde");
    record33.set("page", "datenschutz");
    record33.set("section", "complaint_right");
  try {
    app.save(record33);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record34 = new Record(collection);
    record34.id = "lxenqu9bz8rv1ig";
    record34.set("key", "datenschutz_section12_content");
    record34.set("de", "Gem\u00e4\u00df Art. 77 DSGVO haben Sie das Recht, sich bei einer Aufsichtsbeh\u00f6rde zu beschweren. In der Regel k\u00f6nnen Sie sich hierf\u00fcr an die Aufsichtsbeh\u00f6rde Ihres \u00fcblichen Aufenthaltsortes oder Arbeitsplatzes oder unseres Unternehmenssitzes wenden.");
    record34.set("page", "datenschutz");
    record34.set("section", "complaint_right");
  try {
    app.save(record34);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record35 = new Record(collection);
    record35.id = "9v596s1oo6hdon3";
    record35.set("key", "datenschutz_section13_title");
    record35.set("de", "13. Widerspruchsrecht");
    record35.set("page", "datenschutz");
    record35.set("section", "objection_right");
  try {
    app.save(record35);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record36 = new Record(collection);
    record36.id = "kmz52fddm4x6i30";
    record36.set("key", "datenschutz_section13_content");
    record36.set("de", "Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gem\u00e4\u00df Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gem\u00e4\u00df Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit daf\u00fcr Gr\u00fcnde vorliegen, die sich aus Ihrer besonderen Situation ergeben oder sich der Widerspruch gegen Direktwerbung richtet. Im letzteren Fall haben Sie ein generelles Widerspruchsrecht, das ohne Angabe einer besonderen Situation von uns umgesetzt wird. M\u00f6chten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch machen, gen\u00fcgt eine E-Mail an die im Impressum oder in Abschnitt 2 genannte E-Mail-Adresse.");
    record36.set("page", "datenschutz");
    record36.set("section", "objection_right");
  try {
    app.save(record36);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record37 = new Record(collection);
    record37.id = "qbyplxjxfq0iosh";
    record37.set("key", "datenschutz_section14_title");
    record37.set("de", "14. Erg\u00e4nzung / Anpassung zur Datenschutzerkl\u00e4rung");
    record37.set("page", "datenschutz");
    record37.set("section", "amendments");
  try {
    app.save(record37);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record38 = new Record(collection);
    record38.id = "m8ll1cvec9rsri8";
    record38.set("key", "datenschutz_hostinger_title");
    record38.set("de", "Webhosting, technische Bereitstellung und Formularspeicherung \u00fcber Hostinger Horizons");
    record38.set("page", "datenschutz");
    record38.set("section", "hostinger");
  try {
    app.save(record38);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record39 = new Record(collection);
    record39.id = "jij6im358umssc5";
    record39.set("key", "datenschutz_hostinger_content");
    record39.set("de", "Wir nutzen f\u00fcr das Webhosting, die technische Bereitstellung unserer Website sowie die Speicherung von Formulardaten die Dienste von Hostinger Horizons (Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Zypern). Wenn Sie unsere Website besuchen oder Formulare auf unserer Website nutzen, werden Ihre Daten auf den Servern von Hostinger Horizons verarbeitet und gespeichert. Dies umfasst unter anderem IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die \u00fcber eine Website generiert werden. Die Inanspruchnahme von Hostinger Horizons erfolgt zum Zwecke einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO) sowie zur Anbahnung und Erf\u00fcllung von Vertr\u00e4gen mit unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO). Wir haben einen Vertrag \u00fcber Auftragsverarbeitung (AVV) mit Hostinger Horizons geschlossen. Dies stellt sicher, dass Hostinger Horizons Ihre personenbezogenen Daten nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet. Ihre Daten werden nur so lange gespeichert, wie es f\u00fcr die Erf\u00fcllung der vorgenannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Ihnen stehen selbstverst\u00e4ndlich auch bez\u00fcglich dieser bei unserem Hoster verarbeiteten Daten alle in Abschnitt 11 genannten Betroffenenrechte zu.");
    record39.set("page", "datenschutz");
    record39.set("section", "hostinger");
  try {
    app.save(record39);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record40 = new Record(collection);
    record40.id = "lym5v1pkgxl3g61";
    record40.set("key", "datenschutz_hetzner_title");
    record40.set("de", "Domainverwaltung / DNS \u00fcber Hetzner");
    record40.set("page", "datenschutz");
    record40.set("section", "hetzner");
  try {
    app.save(record40);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record41 = new Record(collection);
    record41.id = "3470qiet7zagwco";
    record41.set("key", "datenschutz_hetzner_content");
    record41.set("de", "F\u00fcr die Domainverwaltung und als DNS-Provider nutzen wir die Dienste der Hetzner Online GmbH (Industriestr. 25, 91710 Gunzenhausen, Deutschland). Bei der Nutzung unserer Website werden zur Aufl\u00f6sung der Domainnamen in IP-Adressen (DNS-Routing) Anfragen an die Server von Hetzner gesendet. Hierbei k\u00f6nnen technische Verbindungsdaten wie Ihre IP-Adresse an Hetzner \u00fcbertragen und in Form von Logfiles kurzzeitig gespeichert werden. Die Nutzung von Hetzner erfolgt auf Grundlage unseres berechtigten Interesses an einer zuverl\u00e4ssigen und sicheren Erreichbarkeit unserer Website unter unserem Domainnamen gem\u00e4\u00df Art. 6 Abs. 1 lit. f DSGVO. Auch mit Hetzner haben wir einen entsprechenden Vertrag zur Auftragsverarbeitung (AVV) abgeschlossen, um den Schutz Ihrer Daten bei der Domain- und DNS-Verwaltung sicherzustellen. Die im Rahmen der DNS-Abfragen anfallenden Logdaten werden in der Regel nach wenigen Tagen gel\u00f6scht, sofern keine rechtlichen Verpflichtungen zur l\u00e4ngeren Aufbewahrung bestehen. Ihre Rechte als betroffene Person k\u00f6nnen Sie jederzeit auch im Hinblick auf diese Verarbeitungsvorg\u00e4nge gegen\u00fcber uns geltend machen.");
    record41.set("page", "datenschutz");
    record41.set("section", "hetzner");
  try {
    app.save(record41);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record42 = new Record(collection);
    record42.id = "kozusicirx89r4w";
    record42.set("key", "datenschutz_last_update");
    record42.set("de", "Letzte Aktualisierung: 22.10.2024");
    record42.set("page", "datenschutz");
    record42.set("section", "footer");
  try {
    app.save(record42);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["kozusicirx89r4w", "3470qiet7zagwco", "lym5v1pkgxl3g61", "jij6im358umssc5", "m8ll1cvec9rsri8", "qbyplxjxfq0iosh", "kmz52fddm4x6i30", "9v596s1oo6hdon3", "lxenqu9bz8rv1ig", "5ezg2djhxet20fm", "75bvzlu0v2fxehx", "zrg0sx71u1l5g2u", "lhpab1sz24zc1zt", "myfr2lrphni683v", "jvd426hndz25kyw", "18g8k0t7tm7mx68", "xa8nxelm7r3cz6o", "exisrpe9v1dpubw", "kd5lqqfc291br07", "jjvz090pdgohd8d", "3hhr4xxggl341yn", "bi8savcifkx9joy", "dyyckqnrc694y9l", "6132vfqnuqs0eco", "iyg97hy65sncic9", "c4dtr9bu6i8c7pg", "dwxn130xhy0me1e", "chc98sfn6e8q54n", "dbs8idpmedwp266", "84dhd6vukaz7kcs", "5qanykijoiwt7oc", "nv1cudq13ukllxp", "7ygnbpsu8by77ix", "8g6thxd08auw22v", "dunrrvdr5lzv74s", "fsn30694jrcf9jw", "xapl5pla5antglh", "065yrbqjs397ki7", "cahhlg53i9b5mfv", "gffrz2e1nlc231k", "ifgyye6occtsr8j", "e4or8mrxgnwi0b9", "tkor6tq5jz64y4f"];
  for (const seededRecordId of seededRecordIds) {
    try {
      app.delete(app.findRecordById("translation_DE", seededRecordId));
    } catch (error) {
      if (error.message.includes("no rows in result set")) {
        continue;
      }
      throw error;
    }
  }
})
