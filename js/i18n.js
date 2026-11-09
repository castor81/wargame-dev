/* Wargame Studio – nyelvi réteg a belépő oldalhoz (HU, EN, DE, FR).
   A szerepkörök magyar nevei és leírásai a js/profiles.js-ben vannak, a többi nyelvé itt. */
(function (g) {
  var LANGS = [['hu', 'HU', 'Magyar'], ['en', 'EN', 'English'], ['de', 'DE', 'Deutsch'], ['fr', 'FR', 'Français']];
  var UI = {
    hu: { subtitle: 'Húzd ki a biztosítószeget a belépéshez', pull: 'Pull', loading0: 'Betöltés… 0%', loading: 'Betöltés…', skip: 'Pin kihúzása billentyűzettel', sound: 'Hang be/ki',
      loginTitle: 'Bejelentkezés', loginSub: 'Válaszd ki a szerepkörödet a belépéshez.', roleLbl: 'Szerepkör', rolePh: 'Válassz szerepkört…', nameLbl: 'Megjelenített név', optional: '(nem kötelező)',
      signIn: 'Belépés', checking: 'Ellenőrzés…', signedIn: 'Belépve ✓', success: 'Sikeres belépés.', failed: 'A belépés nem sikerült.', pickRole: 'Válassz szerepkört a listából.',
      devNote: 'Fejlesztői mód: egyelőre jelszó nélküli belépés, a szerepkör szabadon választható.', langLbl: 'Nyelv' },
    en: { subtitle: 'Pull the safety pin to sign in', pull: 'Pull', loading0: 'Loading… 0%', loading: 'Loading…', skip: 'Pull the pin with the keyboard', sound: 'Sound on/off',
      loginTitle: 'Sign in', loginSub: 'Select your role to continue.', roleLbl: 'Role', rolePh: 'Select a role…', nameLbl: 'Display name', optional: '(optional)',
      signIn: 'Sign in', checking: 'Checking…', signedIn: 'Signed in ✓', success: 'Signed in successfully.', failed: 'Sign-in failed.', pickRole: 'Select a role from the list.',
      devNote: 'Developer mode: passwordless sign-in for now; any role can be chosen.', langLbl: 'Language' },
    de: { subtitle: 'Ziehe den Sicherungssplint, um dich anzumelden', pull: 'Ziehen', loading0: 'Laden… 0%', loading: 'Laden…', skip: 'Splint mit der Tastatur ziehen', sound: 'Ton an/aus',
      loginTitle: 'Anmeldung', loginSub: 'Wähle deine Rolle, um fortzufahren.', roleLbl: 'Rolle', rolePh: 'Rolle auswählen…', nameLbl: 'Anzeigename', optional: '(optional)',
      signIn: 'Anmelden', checking: 'Prüfung…', signedIn: 'Angemeldet ✓', success: 'Anmeldung erfolgreich.', failed: 'Anmeldung fehlgeschlagen.', pickRole: 'Wähle eine Rolle aus der Liste.',
      devNote: 'Entwicklermodus: vorerst Anmeldung ohne Passwort; die Rolle ist frei wählbar.', langLbl: 'Sprache' },
    fr: { subtitle: 'Retirez la goupille de sécurité pour vous connecter', pull: 'Tirer', loading0: 'Chargement… 0%', loading: 'Chargement…', skip: 'Retirer la goupille au clavier', sound: 'Son activé/désactivé',
      loginTitle: 'Connexion', loginSub: 'Choisissez votre rôle pour continuer.', roleLbl: 'Rôle', rolePh: 'Choisir un rôle…', nameLbl: 'Nom affiché', optional: '(facultatif)',
      signIn: 'Se connecter', checking: 'Vérification…', signedIn: 'Connecté ✓', success: 'Connexion réussie.', failed: 'Échec de la connexion.', pickRole: 'Choisissez un rôle dans la liste.',
      devNote: 'Mode développeur : connexion sans mot de passe pour l’instant ; le rôle est librement choisi.', langLbl: 'Langue' }
  };
  var GROUPS = {
    en: { ctl: 'Control and adjudication', dev: 'Design and development', ply: 'Players and actors', spn: 'Sponsor' },
    de: { ctl: 'Leitung und Bewertung', dev: 'Entwurf und Entwicklung', ply: 'Spieler und Akteure', spn: 'Auftraggeber' },
    fr: { ctl: 'Conduite et arbitrage', dev: 'Conception et développement', ply: 'Joueurs et acteurs', spn: 'Commanditaire' }
  };
  var ROLES = {
    en: {
      IGA: ['Wargame Director', 'Full authority: closes gates, starts runs and turns, all views.'],
      ADJ: ['Adjudicator', 'Adjudicates the teams’ decisions and announces the results on the Game Board.'],
      FAC: ['Facilitator', 'Supports the flow of the game and records observations for each turn.'],
      ELE: ['Analyst', 'Collects and analyses DCAP data; the Data and analysis view is the home screen.'],
      TER: ['Game Designer', 'Designs the objectives, rules and structure of the game (steps 1–5).'],
      FOR: ['Scenario Designer', 'Scenario and injects; releases the injects during the turns.'],
      FEJ: ['Game Developer', 'Develops tools, data model and game interface; supports playtests.'],
      REN: ['Event Manager', 'Venue, headcount, seats and logistics; the Players view is the home screen.'],
      JAT: ['Players', 'Members of the player teams: own seat, phone view, following the Game Board.'],
      OPF: ['Non-player teams (OPFOR)', 'Leads the opposing and neutral actors within the game control.'],
      MEG: ['Sponsor', 'Approves sponsor checkpoints and reviews the results and the report.']
    },
    de: {
      IGA: ['Wargame-Direktor', 'Volle Befugnis: Tore schließen, Durchläufe und Runden starten, alle Ansichten.'],
      ADJ: ['Adjudikator (Schiedsrichter)', 'Bewertet die Entscheidungen der Teams und gibt die Ergebnisse auf dem Spielfeld bekannt.'],
      FAC: ['Moderator (Facilitator)', 'Unterstützt den Spielablauf und erfasst Beobachtungen zu den Runden.'],
      ELE: ['Analyst', 'Erhebt und analysiert DCAP-Daten; Startansicht ist „Daten und Analyse“.'],
      TER: ['Spieldesigner', 'Entwirft Ziele, Regeln und Struktur des Spiels (Schritte 1–5).'],
      FOR: ['Szenarioentwickler', 'Szenario und Injects; gibt die Injects in den Runden frei.'],
      FEJ: ['Spielentwickler', 'Entwickelt Werkzeuge, Datenmodell und Spieloberfläche; unterstützt Playtests.'],
      REN: ['Veranstaltungsmanager', 'Ort, Teilnehmerzahl, Plätze und Logistik; Startansicht ist „Spieler“.'],
      JAT: ['Spieler', 'Mitglieder der Spielerteams: eigener Platz, Smartphone-Ansicht, Verfolgen des Spielfelds.'],
      OPF: ['Nicht-Spieler-Teams (OPFOR)', 'Führt die gegnerischen und neutralen Akteure im Rahmen der Spielleitung.'],
      MEG: ['Auftraggeber', 'Genehmigt Auftraggeber-Punkte und prüft Ergebnisse und Bericht.']
    },
    fr: {
      IGA: ['Directeur du wargame', 'Pleins pouvoirs : clôture des étapes de validation, lancement des séries et des tours, toutes les vues.'],
      ADJ: ['Adjudicateur (arbitre)', 'Arbitre les décisions des équipes et annonce les résultats sur le plateau de jeu.'],
      FAC: ['Facilitateur', 'Soutient le déroulement du jeu et consigne des observations pour chaque tour.'],
      ELE: ['Analyste', 'Collecte et analyse les données DCAP ; la vue Données et analyse est la page d’accueil.'],
      TER: ['Concepteur de jeu', 'Conçoit les objectifs, les règles et la structure du jeu (étapes 1 à 5).'],
      FOR: ['Concepteur de scénario', 'Scénario et injects ; diffuse les injects pendant les tours.'],
      FEJ: ['Développeur de jeu', 'Développe les outils, le modèle de données et l’interface de jeu ; soutient les tests de jeu.'],
      REN: ['Responsable événementiel', 'Lieu, effectifs, places et logistique ; la vue Joueurs est la page d’accueil.'],
      JAT: ['Joueurs', 'Membres des équipes de joueurs : place attribuée, vue sur téléphone, suivi du plateau de jeu.'],
      OPF: ['Équipes non joueuses (OPFOR)', 'Dirige les acteurs adverses et neutres dans le cadre de la conduite du jeu.'],
      MEG: ['Commanditaire', 'Valide les points de contrôle du commanditaire et examine les résultats et le rapport.']
    }
  };
  var KEY = 'wgd-lang', lang = 'hu', subs = [];
  function pick() {
    var s = ''; try { s = localStorage.getItem(KEY) || ''; } catch (e) {}
    if (!UI[s]) { var n = (navigator.language || 'hu').slice(0, 2).toLowerCase(); s = UI[n] ? n : 'hu'; }
    return s;
  }
  function T(k) { return (UI[lang] && UI[lang][k]) || UI.hu[k] || k; }
  function role(id) {
    var p = g.WG_PROFILES && g.WG_PROFILES.byId[id]; if (!p) return { nm: id, desc: '' };
    var r = ROLES[lang] && ROLES[lang][id]; return r ? { nm: r[0], desc: r[1] } : { nm: p.nm, desc: p.desc };
  }
  function group(id) {
    if (GROUPS[lang]) return GROUPS[lang][id];
    var a = g.WG_PROFILES.groups.filter(function (x) { return x[0] === id; })[0]; return a ? a[1] : id;
  }
  function apply() {
    document.documentElement.lang = lang;
    [].forEach.call(document.querySelectorAll('[data-i18n]'), function (e) { e.textContent = T(e.getAttribute('data-i18n')); });
    [].forEach.call(document.querySelectorAll('[data-i18n-aria]'), function (e) { e.setAttribute('aria-label', T(e.getAttribute('data-i18n-aria'))); });
    [].forEach.call(document.querySelectorAll('.lang button'), function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
    var lg = document.querySelector('.lang'); if (lg) lg.setAttribute('aria-label', T('langLbl'));
    subs.forEach(function (f) { f(); });
  }
  function set(l) { if (!UI[l]) return; lang = l; try { localStorage.setItem(KEY, l); } catch (e) {} apply(); }
  lang = pick();
  g.WG_I18N = { langs: LANGS, T: T, role: role, group: group, set: set, get: function () { return lang; }, apply: apply, onChange: function (f) { subs.push(f); } };
  g.T = T;
  document.addEventListener('DOMContentLoaded', function () {
    var lg = document.querySelector('.lang');
    if (lg) lg.addEventListener('click', function (e) { var b = e.target.closest('button[data-lang]'); if (b) set(b.dataset.lang); });
    apply();
  });
})(window);
