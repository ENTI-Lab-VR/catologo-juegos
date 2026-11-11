const ICON_PATH='assets/iconFilter/';
const COVER_PATH='assets/gamesPicture/';

// file: nombre del archivo dentro de assets/gamesPicture (cámbialo cuando tengas las portadas)
const games=[
 {title:'Gran Turismo 7',platform:'PlayStation 5',genre:'Carreras',players:2,file:'granTurismo7.jpg',description:'Simulador de conducción con cientos de coches reales, circuitos de todo el mundo y un café para aprender su historia.'},
 {title:'Gris',platform:'PlayStation 5',genre:'Plataformas',players:1,file:'Gris.jpg',description:'Una aventura de plataformas en acuarela sobre una joven que atraviesa el duelo.'},
 {title:'Sackboy: Una Aventura A Lo Grande',platform:'PlayStation 5',genre:'Plataformas',players:4,file:'sackboyUnaAventuraALoGrande.jpg',description:'Plataformas 3D con Sackboy para salvar Craftworld, solo o con hasta cuatro jugadores.'},
 {title:'Spiritfarer',platform:'PlayStation 5',genre:'Simulación',players:2,file:'spiritfarer.jpg',description:'Gestiona un barco, cuida de los espíritus y acompáñalos en su último viaje.'},
 {title:'Street Fighter 6',platform:'Xbox Series S/X',genre:'Lucha',players:2,file:'streetFighter6.jpg',description:'Combates uno contra uno con controles clásicos y modernos, y un modo historia en mundo abierto.'},
 {title:'Dance Central',platform:'Xbox 360',genre:'Party',players:2,file:'danceCentral.jpg',description:'Baila coreografías completas sin mando: Kinect sigue todo tu cuerpo.'},
 {title:'Forza Motorsport 4',platform:'Xbox 360',genre:'Carreras',players:2,file:'forzaMotorsport4.jpg',description:'Simulación de carreras en circuitos reales con cientos de coches y modo Autovista.'},
 {title:'Halo 4',platform:'Xbox 360',genre:'Acción',players:4,file:'halo4.jpg',description:'El Jefe Maestro vuelve junto a Cortana para enfrentarse a una amenaza antigua en el planeta Réquiem.'},
 {title:'Kinect Sports',platform:'Xbox 360',genre:'Deportes',players:2,file:'kinectSports.jpg',description:'Fútbol, bolos, boxeo, atletismo y más, jugando con tu propio cuerpo gracias a Kinect.'},
 {title:'Batman: Arkham Knight',platform:'Xbox One',genre:'Acción',players:1,file:'batmanArkhamKnight.jpg',description:'Batman protege Gotham del Espantapájaros y del misterioso Caballero de Arkham, ahora con el Batmóvil.'},
 {title:'Dead Rising 3',platform:'Xbox One',genre:'Acción',players:2,file:'deadRising3.jpg',description:'Sobrevive a un apocalipsis zombi en Los Perdidos fabricando armas y vehículos imposibles.'},
 {title:'Evolve',platform:'Xbox One',genre:'Acción',players:1,file:'evolve.jpg',description:'Cuatro cazadores contra un monstruo que evoluciona: partidas asimétricas online.'},
 {title:'Far Cry 4',platform:'Xbox One',genre:'Acción',players:2,file:'farCry4.jpg',description:'Mundo abierto en Kyrat, un país del Himalaya gobernado por el excéntrico Pagan Min.'},
 {title:'Halo Infinite',platform:'Xbox One',genre:'Acción',players:1,file:'haloInfinite.jpg',description:'El Jefe Maestro explora el anillo Zeta en la primera campaña de mundo abierto de la saga.'},
 {title:'Moving Out',platform:'Xbox One',genre:'Party',players:4,file:'movingOut.jpg',description:'Haz mudanzas caóticas con amigos: muebles, ventanas rotas y física disparatada.'},
 {title:'Overcooked! 2',platform:'Xbox One',genre:'Party',players:4,file:'overcooked2.jpg',description:'Cocina en equipo contrarreloj en cocinas cada vez más locas.'},
 {title:'ReCore',platform:'Xbox One',genre:'Aventura',players:1,file:'reCore.jpg',description:'Explora un planeta desértico junto a robots compañeros con distintas habilidades.'},
 {title:"Rocket League (Collector's Edition)",platform:'Xbox One',genre:'Deportes',players:4,file:'rocketLeagueXboxOne.jpg',description:'Fútbol con coches propulsados por cohetes, en partidas rápidas y muy competitivas.'},
 {title:'Ryse: Son of Rome',platform:'Xbox One',genre:'Acción',players:1,file:'ryseSonOfRome.jpg',description:'Combate cuerpo a cuerpo como Marius Titus, un soldado que busca venganza en la antigua Roma.'},
 {title:'Sombras de Mordor',platform:'Xbox One',genre:'Acción',players:1,file:'sombrasDeMordor.jpg',description:'Un montaraz y un espectro élfico se enfrentan a los orcos de Mordor con el sistema Némesis.'},
 {title:'Star Wars Jedi: Fallen Order',platform:'Xbox One',genre:'Acción',players:1,file:'starWarsJediFallenOrder.jpg',description:'Cal Kestis, un padawan superviviente, huye del Imperio mientras recupera sus poderes.'},
 {title:'It Takes Two',platform:'PlayStation 4',genre:'Aventura',players:2,file:'itTakesTwo.jpg',description:'Una aventura cooperativa diseñada para jugar entre dos personas.'},
 {title:'Alien Isolation',platform:'PlayStation 4',genre:'Terror',players:1,file:'alienIsolation.jpg',description:'Sobrevive a bordo de una estación espacial mientras un xenomorfo te da caza.'},
 {title:"Assassin's Creed Syndicate",platform:'PlayStation 4',genre:'Acción',players:1,file:'assassinsCreedSyndicate.jpg',description:'Los gemelos Frye se enfrentan a las bandas del Londres victoriano.'},
 {title:'Cuphead',platform:'PlayStation 4',genre:'Plataformas',players:2,file:'cuphead.jpg',description:'Combates contra jefes muy difíciles con el estilo de los dibujos animados de los años 30.'},
 {title:'Days Gone',platform:'PlayStation 4',genre:'Acción',players:1,file:'daysGone.jpg',description:'Sobrevive en moto por un mundo abierto lleno de hordas de infectados.'},
 {title:'Detroit: Become Human',platform:'PlayStation 4',genre:'Aventura',players:1,file:'detroitBecomeHuman.jpg',description:'Tres androides, muchas decisiones y una historia que cambia según lo que elijas.'},
 {title:'Dragon Ball FighterZ',platform:'PlayStation 4',genre:'Lucha',players:2,file:'dragonBallFighterZ.jpg',description:'Combates por equipos de tres con los personajes de Dragon Ball y un estilo de anime en 2D.'},
 {title:'Dying Light',platform:'PlayStation 4',genre:'Acción',players:4,file:'dyingLight.jpg',description:'Parkour y supervivencia en una ciudad llena de zombis que se vuelven más peligrosos de noche.'},
 {title:'FIFA 14',platform:'PlayStation 4',genre:'Deportes',players:4,file:'FIFA14.jpg',description:'Fútbol con equipos y ligas oficiales de la temporada 2013-2014.'},
 {title:'FIFA 19',platform:'PlayStation 4',genre:'Deportes',players:4,file:'FIFA19.jpg',description:'Fútbol con la Champions League oficial y el final de la historia de El Camino.'},
 {title:'¡Has Sido Tú!',platform:'PlayStation 4',genre:'Party',players:6,file:'hasSidoTu.jpg',description:'Juego de preguntas y votaciones para descubrir quién es quién en tu grupo, jugando con el móvil.'},
 {title:'Intenciones Ocultas',platform:'PlayStation 4',genre:'Party',players:6,file:'intencionesOcultas.jpg',description:'Thriller interactivo en el que el grupo decide junto cómo avanza la historia, jugando con el móvil.'},
 {title:'Killzone Shadow Fall',platform:'PlayStation 4',genre:'Acción',players:1,file:'killzoneShadowFall.jpg',description:'Shooter en primera persona en una ciudad dividida por un muro entre dos bandos.'},
 {title:'Knack',platform:'PlayStation 4',genre:'Plataformas',players:2,file:'knack.jpg',description:'Un héroe hecho de reliquias que crece a medida que absorbe piezas nuevas.'},
 {title:'Rayman Legends',platform:'PlayStation 4',genre:'Plataformas',players:4,file:'raymanLegends.jpg',description:'Plataformas 2D con niveles musicales y cooperativo para cuatro personas.'},
 {title:'Rayman Legends',platform:'PlayStation Vita',genre:'Plataformas',players:1,file:'raymanLegendsVita.jpg',description:'Plataformas 2D con niveles musicales, adaptado a la pantalla táctil de la Vita.'},
 {title:'Resident Evil 5',platform:'PlayStation 4',genre:'Terror',players:2,file:'residentEvil5.jpg',description:'Chris Redfield y Sheva Alomar investigan un brote biológico en África, solos o en cooperativo.'},
 {title:'Rocket League (Anniversary Edition)',platform:'PlayStation 4',genre:'Deportes',players:4,file:'rocketLeague.jpg',description:'Fútbol con coches propulsados por cohetes, en partidas rápidas y muy competitivas.'},
 {title:'Saber es Poder',platform:'PlayStation 4',genre:'Party',players:6,file:'saberEsPoder.jpg',description:'Concurso de preguntas con trampas y poderes para fastidiar al resto, jugando con el móvil.'},
 {title:'SingStar Celebration',platform:'PlayStation 4',genre:'Party',players:8,file:'singStarCelebration.jpg',description:'Karaoke con éxitos actuales usando el móvil como micrófono.'},
 {title:'The Evil Within',platform:'PlayStation 4',genre:'Terror',players:1,file:'theEvilWithin.jpg',description:'Survival horror de Shinji Mikami en un mundo retorcido y lleno de criaturas.'},
 {title:'Unravel Yarny Bundle',platform:'PlayStation 4',genre:'Plataformas',players:2,file:'unravelYarnyBundle.jpg',description:'Unravel y Unravel Two: puzles y plataformas con Yarny, un muñeco de lana.'},
 {title:'Youtubers Life OMG',platform:'PlayStation 4',genre:'Simulación',players:1,file:'youtubersLifeOMG.jpg',description:'Crea tu canal, graba vídeos y conviértete en una estrella de internet.'},
 {title:'Just Dance 2014',platform:'Wii',genre:'Party',players:4,file:'justDance2014.jpg',description:'Sigue las coreografías, comparte bailes y suma puntos con tus amigos.'},
 {title:'Dance Dance Revolution Hottest Party 2',platform:'Wii',genre:'Party',players:4,file:'danceDanceRevolutionHottestParty2.jpg',description:'Baila al ritmo de las flechas con la alfombra de baile y el mando de Wii.'},
 {title:'Super Mario Galaxy',platform:'Wii',genre:'Plataformas',players:2,file:'superMarioGalaxy.jpg',description:'Salta de planeta en planeta por el espacio para rescatar a la princesa Peach.'},
 {title:'Mario Kart 8 Deluxe',platform:'Nintendo Switch',genre:'Carreras',players:4,file:'marioKart8Deluxe.jpg',description:'Carreras disparatadas en circuitos llenos de atajos y objetos.'},
 {title:'Curse of the Sea Rats',platform:'Nintendo Switch',genre:'Plataformas',players:4,file:'curseOfTheSeaRats.jpg',description:'Un metroidvania dibujado a mano en el que cuatro prisioneros convertidos en ratas persiguen a una bruja pirata.'},
 {title:'Donkey Kong Country: Tropical Freeze',platform:'Nintendo Switch',genre:'Plataformas',players:2,file:'donkeyKongCountryTropicalFreeze.jpg',description:'Recupera la isla de Donkey Kong, congelada por los vikingos, en niveles de plataformas exigentes.'},
 {title:'Endling - Extinction is Forever',platform:'Nintendo Switch',genre:'Aventura',players:1,file:'endlingExtinctionIsForever.jpg',description:'Protege a tus cachorros como la última zorra de la Tierra en un mundo destruido por el ser humano.'},
 {title:'Kirby y la tierra olvidada',platform:'Nintendo Switch',genre:'Plataformas',players:2,file:'kirbyYLaTierraOlvidada.jpg',description:'La primera aventura 3D de Kirby: explora un mundo abandonado y rescata a los Waddle Dees.'},
 {title:"Luigi's Mansion 3",platform:'Nintendo Switch',genre:'Aventura',players:8,file:'luigisMansion3.jpg',description:'Recorre un hotel encantado planta a planta para rescatar a tus amigos de los fantasmas.'},
 {title:'Mario Party Superstars',platform:'Nintendo Switch',genre:'Party',players:4,file:'marioPartySuperstars.jpg',description:'Tableros y minijuegos clásicos de Mario Party para competir con amigos.'},
 {title:'Mario Strikers: Battle League Football',platform:'Nintendo Switch',genre:'Deportes',players:8,file:'marioStrikersBattleLF.jpg',description:'Fútbol cinco contra cinco sin reglas, con tiros especiales y entradas a lo bestia.'},
 {title:'Mario Tennis Aces',platform:'Nintendo Switch',genre:'Deportes',players:4,file:'marioTennisAces.jpg',description:'Partidos de tenis con golpes especiales, modo aventura y torneos con amigos.'},
 {title:"Super Mario 3D World + Bowser's Fury",platform:'Nintendo Switch',genre:'Plataformas',players:4,file:'superMario3DWorldBowsersFury.jpg',description:'Plataformas 3D cooperativas y una nueva aventura en mundo abierto contra un Bowser gigante.'},
 {title:'Super Mario Maker 2',platform:'Nintendo Switch',genre:'Plataformas',players:4,file:'superMarioMaker2.jpg',description:'Crea tus propios niveles de Mario, compártelos y juega los de otras personas.'},
 {title:'Super Mario Party',platform:'Nintendo Switch',genre:'Party',players:4,file:'superMarioParty.jpg',description:'Dados, tableros y minijuegos que aprovechan los Joy-Con para jugar en grupo.'},
 {title:'WarioWare: Get It Together!',platform:'Nintendo Switch',genre:'Party',players:4,file:'warioWareGetItTogether.jpg',description:'Cientos de microjuegos frenéticos de pocos segundos, solo o en compañía.'},
 {title:'Deus Ex: Invisible War',platform:'PC',genre:'RPG',players:1,file:'deusExInvisibleWar.jpg',description:'Rol y acción en un futuro ciberpunk donde cada misión se puede resolver de varias formas.'},
 {title:'Els Sostenibles IV',platform:'PC',genre:'Aventura',players:1,file:'elsSosteniblesIV.jpg',description:'Cuarta entrega de Els Sostenibles.'},
 {title:'Indie Basement Collection',platform:'PC',genre:'Aventura',players:1,file:'indieBasementCollection.jpg',description:'Recopilatorio de juegos independientes.'},
 {title:'World of Goo',platform:'PC',genre:'Puzles',players:1,file:'WorldOfGoo.jpg',description:'Construye estructuras con bolitas de goo para guiarlas hasta la tubería de salida.'},
 {title:'Minecraft: The Story of Mojang',platform:'Películas',genre:'Documental',players:0,file:'minecraftTheStoryOfMojang.jpg',description:'Documental sobre los primeros años de Mojang y el éxito inesperado de Minecraft.'},
 {title:'Mission: Impossible',platform:'Películas',genre:'Acción',players:0,file:'missionImpossible.jpg',description:'El agente Ethan Hunt intenta limpiar su nombre tras ser acusado de traicionar a su equipo.'},
 {title:"Ocean's Eleven",platform:'Películas',genre:'Thriller',players:0,file:'oceansEleven.jpg',description:'Danny Ocean reúne a once especialistas para robar tres casinos de Las Vegas a la vez.'},
 {title:'BlazBlue: Calamity Trigger',platform:'PlayStation 3',genre:'Lucha',players:2,file:'blazblueCalamityTrigger.jpg',description:'Lucha 2D de estilo anime con personajes muy distintos entre sí y combos espectaculares.'},
 {title:'Grand Theft Auto V',platform:'PlayStation 3',genre:'Acción',players:1,file:'GTAV.jpg',description:'Tres criminales, una ciudad enorme y golpes cada vez más ambiciosos en Los Santos.'},
 {title:'Heavy Rain (Move Edition)',platform:'PlayStation 3',genre:'Aventura',players:1,file:'heavyRain.jpg',description:'Thriller interactivo en el que cuatro personajes persiguen al Asesino del Origami; compatible con PlayStation Move.'},
 {title:'Ico & Shadow of the Colossus Classics HD',platform:'PlayStation 3',genre:'Aventura',players:1,file:'Ico&ShadowOfTheColossu Classics.jpg',description:'Dos clásicos de Fumito Ueda remasterizados en HD: escapar de un castillo y derrotar a dieciséis colosos.'},
 {title:"Journey (Collector's Edition)",platform:'PlayStation 3',genre:'Aventura',players:1,file:'journeyCollectorsEdition.jpg',description:'Viaja por un desierto inmenso hacia una montaña lejana; incluye flOw y Flower.'},
 {title:'Tekken Tag Tournament 2',platform:'PlayStation 3',genre:'Lucha',players:4,file:'tekkenTagTournament2.jpg',description:'Combates por parejas con relevos entre luchadores y una plantilla enorme de la saga Tekken.'},
 {title:'The Last of Us',platform:'PlayStation 3',genre:'Acción',players:1,file:'theLastOfUs.jpg',description:'Joel y Ellie cruzan unos Estados Unidos devastados por una pandemia.'},
 {title:'Animal Crossing: New Leaf',platform:'Nintendo 3DS',genre:'Simulación',players:4,file:'animalCrossingNewLeaf.jpg',description:'Conviértete en alcalde de tu propio pueblo y decide cómo crece día a día.'},
 {title:"Luigi's Mansion",platform:'Nintendo 3DS',genre:'Aventura',players:2,file:'luigisMansion.jpg',description:'Recorre una mansión encantada y atrapa fantasmas con la Succionaentes 3000.'},
 {title:'Monster Hunter 4 Ultimate',platform:'Nintendo 3DS',genre:'Acción',players:4,file:'monsterHunter4Ultimate.jpg',description:'Caza monstruos gigantes, mejora tu equipo y forma grupo con otros cazadores.'},
 {title:'New Super Mario Bros. 2',platform:'Nintendo 3DS',genre:'Plataformas',players:2,file:'newSuperMarioBros2.jpg',description:'Plataformas clásicas de Mario con un objetivo: recoger un millón de monedas.'},
 {title:'Captain Toad: Treasure Tracker',platform:'Wii U',genre:'Puzles',players:1,file:'captainToadTreasureTracker.jpg',description:'Guía a Toad por pequeños niveles con forma de cubo llenos de tesoros y secretos.'},
 {title:'FIFA 13',platform:'Wii U',genre:'Deportes',players:4,file:'FIFA13.jpg',description:'Fútbol con equipos y ligas oficiales, usando el GamePad para dar órdenes tácticas.'},
 {title:'Mario Kart 8',platform:'Wii U',genre:'Carreras',players:4,file:'marioKart8.jpg',description:'Carreras con circuitos antigravedad, objetos y personajes de todo el universo Mario.'},
 {title:'Mario Party 10',platform:'Wii U',genre:'Party',players:5,file:'marioParty10.jpg',description:'Tableros y minijuegos en grupo, con un modo en el que un jugador controla a Bowser desde el GamePad.'},
 {title:'Mario Tennis: Ultra Smash',platform:'Wii U',genre:'Deportes',players:4,file:'marioTennisUltraSmash.jpg',description:'Partidos de tenis rápidos con champiñones gigantes y golpes espectaculares.'},
 {title:'Mass Effect 3: Edición Especial',platform:'Wii U',genre:'RPG',players:1,file:'massEffect3EdicionEspecial.jpg',description:'El comandante Shepard reúne a la galaxia para enfrentarse a la invasión de los segadores.'},
 {title:'New Super Mario Bros. U',platform:'Wii U',genre:'Plataformas',players:5,file:'NewSuperMarioBrosU.jpg',description:'Plataformas 2D clásicas de Mario en HD, con cooperativo para varios jugadores.'},
 {title:'Nintendo Land',platform:'Wii U',genre:'Party',players:5,file:'nintendoLand.jpg',description:'Un parque temático con atracciones basadas en las sagas de Nintendo, pensado para jugar en grupo.'},
 {title:'Rayman Legends',platform:'Wii U',genre:'Plataformas',players:5,file:'raymanLegendsWiiU.jpg',description:'Plataformas 2D con niveles musicales y desafíos que aprovechan la pantalla táctil del GamePad.'},
 {title:'Splatoon',platform:'Wii U',genre:'Acción',players:2,file:'splatoon.jpg',description:'Combates por equipos en los que gana quien pinte más terreno con su tinta.'},
 {title:'Super Mario 3D World',platform:'Wii U',genre:'Plataformas',players:4,file:'superMario3DWorld.jpg',description:'Plataformas 3D cooperativas para hasta cuatro jugadores, con el traje de gato de Mario.'},
 {title:'Super Mario Maker',platform:'Wii U',genre:'Plataformas',players:1,file:'superMarioMaker.jpg',description:'Diseña tus propios niveles de Mario con el GamePad y juega los de otras personas.'},
 {title:'Super Smash Bros. para Wii U',platform:'Wii U',genre:'Lucha',players:8,file:'superSmashBrosWiiU.jpg',description:'Combates multitudinarios con personajes de Nintendo y sagas invitadas.'},
 {title:'The Legend of Zelda: The Wind Waker HD',platform:'Wii U',genre:'Aventura',players:1,file:'theLegendOfZelda.jpg',description:'Navega por un gran océano lleno de islas para rescatar a la hermana de Link.'},
 {title:"Yoshi's Woolly World",platform:'Wii U',genre:'Plataformas',players:2,file:'yoshisWoollyWorld.jpg',description:'Plataformas en un mundo hecho de lana, tela y botones, solo o con otro Yoshi.'},
];

// file: nombre del archivo dentro de assets/iconFilter; icon: icono de respaldo si la imagen no carga
const platforms=[
 {name:'Todos',file:'todos.png',icon:'grid'},
 {name:'Nintendo 3DS',file:'nintendo-3ds.png',icon:'nintendo'},
 {name:'Nintendo Switch',label:'Switch',file:'switch.png',icon:'nintendo'},
 {name:'PC',file:'pc.png',icon:'pc'},
 {name:'Películas',file:'dvd.png',icon:'movie'},
 {name:'PlayStation 3',label:'PS3',file:'playstation3.png',icon:'ps'},
 {name:'PlayStation 4',label:'PS4',file:'playstation4.png',icon:'ps'},
 {name:'PlayStation 5',label:'PS5',file:'playstation5.png',icon:'ps'},
 {name:'PlayStation Vita',label:'PS Vita',file:'playstationVita.png',icon:'ps'},
 {name:'Wii',file:'wii.png',icon:'wii'},
 {name:'Wii U',file:'wiiu.png',icon:'wii'},
 {name:'Xbox Series S/X',file:'xboxSerie.png',icon:'xbox'},
 {name:'Xbox 360',file:'xbox360.png',icon:'xbox'},
 {name:'Xbox One',file:'xboxOne.png',icon:'xbox'}
];

const genres=['Todos','Acción','Aventura','Carreras','Deportes','Documental','Lucha','Party','Plataformas','Puzles','RPG','Simulación','Terror','Thriller'];
const playerOptions=['Todos','1','2','3','4+'];
const state={search:'',platform:'Todos',genre:'Todos',players:'Todos'};
const $=selector=>document.querySelector(selector);
const sanitize=str=>String(str).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const initials=title=>title.replace(/^The /,'').split(/[\s:]+/).map(w=>w.replace(/^[^\p{L}\p{N}]+/u,'')).filter(w=>/^[\p{Lu}0-9]/u.test(w)).slice(0,2).map(w=>w[0]).join('');
const playersLabel=(n,upper)=>{const t=n?`${n} ${n===1?'jugador':'jugadores'}`:'Película';return upper?t.toUpperCase():t};

function fallbackIcon(type){
 if(type==='grid')return '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>';
 if(type==='pc')return '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>';
 if(type==='movie')return '<svg viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M3 8V4h18v4M7 4l3 4M14 4l3 4"/></svg>';
 if(type==='nintendo')return '<span class="txt-icon nin">N</span>';
 if(type==='ps')return '<span class="txt-icon ps">PS</span>';
 if(type==='wii')return '<span class="txt-icon">Wii</span>';
 return '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m8 8 8 8M16 8l-8 8"/></svg>';
}

function coverMarkup(g,extraClass=''){
 return `<div class="cover ${extraClass}" data-fallback><img src="${COVER_PATH}${encodeURIComponent(g.file)}" alt="" loading="lazy"><span class="cover-initials" aria-hidden="true">${sanitize(initials(g.title))}</span></div>`;
}

function renderFilters(){
 $('#platformFilters').innerHTML=platforms.map(p=>`<button class="platform-item ${state.platform===p.name?'active':''}" data-platform="${sanitize(p.name)}" type="button" aria-pressed="${state.platform===p.name}"><span class="platform-hex" data-fallback><img src="${ICON_PATH}${encodeURIComponent(p.file)}" alt=""><span class="platform-fallback">${fallbackIcon(p.icon)}</span></span><span class="platform-name">${sanitize(p.label||p.name)}</span></button>`).join('');
 $('#genreFilters').innerHTML=genres.map(g=>`<button class="chip ${state.genre===g?'active':''}" data-genre="${sanitize(g)}" type="button" aria-pressed="${state.genre===g}">${sanitize(g)}</button>`).join('');
 $('#playerFilters').innerHTML=playerOptions.map(p=>`<button class="chip ${state.players===p?'active':''}" data-players="${sanitize(p)}" type="button" aria-pressed="${state.players===p}">${sanitize(p)}</button>`).join('');
}

function matches(game){
 const q=state.search.toLocaleLowerCase('es').trim();
 return (!q||[game.title,game.platform,game.genre].some(v=>v.toLocaleLowerCase('es').includes(q)))
 &&(state.platform==='Todos'||game.platform===state.platform)
 &&(state.genre==='Todos'||game.genre===state.genre)
 &&(state.players==='Todos'||(state.players==='4+'?game.players>=4:game.players===Number(state.players)));
}

function renderGames(){
 const filtered=games.filter(matches).sort((a,b)=>a.title.localeCompare(b.title,'es'));
 $('#gameCount').textContent=filtered.length;
 $('#counterLabel').textContent=filtered.length===1?'juego disponible':'juegos disponibles';
 $('#gameGrid').innerHTML=filtered.map(g=>`<article class="game-card">
  <button class="cover-button" type="button" data-game="${games.indexOf(g)}" aria-label="Ver detalles de ${sanitize(g.title)}">
   ${coverMarkup(g)}
   ${g.featured?'<span class="tag featured">DESTACADO</span>':''}
   <span class="tag players">${playersLabel(g.players,true)}</span>
  </button>
  <div class="card-details">
   <span class="platform-tag">${sanitize(g.platform)}</span>
   <h3 class="card-title">${sanitize(g.title)}</h3>
   <p class="card-genre">${sanitize(g.genre)}</p>
  </div>
 </article>`).join('');
 $('#emptyState').hidden=filtered.length!==0;
}

function openGame(g){
 $('#dialogContent').innerHTML=`<div class="modal-top">${coverMarkup(g,'modal-cover')}<div><p class="modal-eyebrow">${sanitize(g.genre)}</p><h2 id="dialogTitle">${sanitize(g.title)}</h2></div></div><div class="modal-pills"><span>${sanitize(g.platform)}</span><span>${playersLabel(g.players)}</span>${g.featured?'<span>Destacado</span>':''}</div><p>${sanitize(g.description)}</p>`;
 $('#gameDialog').showModal();
}

function update(){renderFilters();renderGames()}
function reset(){Object.assign(state,{search:'',platform:'Todos',genre:'Todos',players:'Todos'});$('#searchInput').value='';update()}

document.addEventListener('error',e=>{
 if(e.target.tagName!=='IMG')return;
 e.target.closest('[data-fallback]')?.classList.add('no-img');
 e.target.remove();
},true);

document.addEventListener('click',e=>{
 const platform=e.target.closest('[data-platform]');if(platform){state.platform=platform.dataset.platform;update();return}
 const genre=e.target.closest('[data-genre]');if(genre){state.genre=genre.dataset.genre;update();return}
 const players=e.target.closest('[data-players]');if(players){state.players=players.dataset.players;update();return}
 const gameButton=e.target.closest('[data-game]');if(gameButton)openGame(games[Number(gameButton.dataset.game)]);
});
$('#searchInput').addEventListener('input',e=>{state.search=e.target.value;renderGames()});
$('#clearFilters').addEventListener('click',reset);
$('#resetEmpty').addEventListener('click',reset);
$('#closeDialog').addEventListener('click',()=>$('#gameDialog').close());
$('#gameDialog').addEventListener('click',e=>{if(e.target===$('#gameDialog'))$('#gameDialog').close()});
update();
