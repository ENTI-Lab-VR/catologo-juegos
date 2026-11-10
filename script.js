const games = [
 {title:'Animal Crossing: New Horizons',platform:'Nintendo Switch',genre:'Simulación',players:4,featured:true,image:1,description:'Crea tu propia isla, conoce a sus habitantes y diseña un rincón a tu gusto.'},
 {title:"Baldur's Gate 3",platform:'PC',genre:'RPG',players:4,image:2,description:'Una aventura de rol fantástica donde tus decisiones cambian la historia.'},
 {title:'Elden Ring',platform:'PlayStation 5',genre:'RPG',players:4,featured:true,image:3,description:'Explora un vasto mundo de fantasía lleno de desafíos, secretos y grandes enemigos.'},
 {title:'Forza Horizon 5',platform:'Xbox Series S/X',genre:'Carreras',players:4,image:4,description:'Conduce por un mundo abierto inspirado en México y participa en eventos de motor.'},
 {title:'Hollow Knight',platform:'Nintendo Switch',genre:'Plataformas',players:1,featured:true,image:5,emoji:'✦',description:'Desciende a un reino misterioso de insectos y explora sus laberintos.'},
 {title:'It Takes Two',platform:'PlayStation 4',genre:'Aventura',players:2,image:6,emoji:'✿',description:'Una aventura cooperativa diseñada para jugar entre dos personas.'},
 {title:'Just Dance',platform:'Wii',genre:'Simulación',players:4,image:7,emoji:'♫',description:'Sigue las coreografías, comparte bailes y suma puntos con tus amigos.'},
 {title:'Mario Kart 8 Deluxe',platform:'Nintendo Switch',genre:'Carreras',players:4,image:8,emoji:'★',description:'Carreras disparatadas en circuitos llenos de atajos y objetos.'},
 {title:'Minecraft',platform:'PC',genre:'Aventura',players:4,image:9,emoji:'◆',description:'Construye, explora y sobrevive en un mundo hecho de bloques.'},
 {title:'Persona 5',platform:'PlayStation 3',genre:'RPG',players:1,image:10,emoji:'♛',description:'Alterna la vida cotidiana con incursiones a mundos extraordinarios.'},
 {title:'The Legend of Zelda: Ocarina of Time 3D',platform:'Nintendo 3DS',genre:'Aventura',players:1,image:11,emoji:'⚔',description:'Una aventura clásica de exploración y rompecabezas.'},
 {title:'Wii Sports',platform:'Wii U',genre:'Simulación',players:4,image:12,emoji:'●',description:'Disfruta de diferentes deportes en partidas rápidas con compañía.'}
];
const platforms = [
 {name:'Todos',icon:'grid'}, {name:'Nintendo 3DS',icon:'nintendo'}, {name:'Nintendo Switch',icon:'nintendo'},
 {name:'PC',icon:'pc'}, {name:'Películas',icon:'movie'}, {name:'PlayStation 3',icon:'ps'},
 {name:'PlayStation 4',icon:'ps'}, {name:'PlayStation 5',icon:'ps'}, {name:'PlayStation Vita',icon:'ps'},
 {name:'Wii',icon:'wii'}, {name:'Wii U',icon:'wii'}, {name:'Xbox Series S/X',icon:'xbox'},
 {name:'Xbox 360',icon:'xbox'}, {name:'Xbox One',icon:'xbox'}
];
const genres=['Todos','Acción','Aventura','Carreras','Plataformas','RPG','Simulación'];
const playerOptions=['Todos','1','2','3','4+'];
const state={search:'',platform:'Todos',genre:'Todos',players:'Todos'};
const $=selector=>document.querySelector(selector);
const sanitize=str=>String(str).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function iconMarkup(type){
 if(type==='grid')return '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>';
 if(type==='pc')return '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>';
 if(type==='movie')return '<svg viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M3 8V4h18v4M7 4l3 4M14 4l3 4"/></svg>';
 if(type==='nintendo')return '<span style="border:1.8px solid currentColor;border-radius:11px;padding:1px 6px;font-size:13px">N</span>';
 if(type==='ps')return '<span style="font-style:italic;font-size:17px;letter-spacing:-3px;padding-right:3px">PS</span>';
 if(type==='wii')return '<span style="font-weight:800">Wii</span>';
 return '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m8 8 8 8M16 8l-8 8"/></svg>';
}
function renderFilters(){
 $('#platformFilters').innerHTML=platforms.map(p=>`<button class="platform-item ${state.platform===p.name?'active':''}" data-platform="${sanitize(p.name)}" type="button" aria-pressed="${state.platform===p.name}"><span class="platform-bubble">${iconMarkup(p.icon)}</span><span class="platform-name">${sanitize(p.name)}</span></button>`).join('');
 $('#genreFilters').innerHTML=genres.map(g=>`<button class="chip ${state.genre===g?'active':''}" data-genre="${sanitize(g)}" type="button" aria-pressed="${state.genre===g}">${sanitize(g)}</button>`).join('');
 $('#playerFilters').innerHTML=playerOptions.map(p=>`<button class="chip ${state.players===p?'active':''}" data-players="${sanitize(p)}" type="button" aria-pressed="${state.players===p}">${sanitize(p)}</button>`).join('');
}
function matches(game){
 const q=state.search.toLocaleLowerCase('es').trim();
 return (!q || [game.title,game.platform,game.genre].some(v=>v.toLocaleLowerCase('es').includes(q)))
 && (state.platform==='Todos'||game.platform===state.platform)
 && (state.genre==='Todos'||game.genre===state.genre)
 && (state.players==='Todos'||(state.players==='4+'?game.players>=4:game.players===Number(state.players)));
}
function renderGames(){
 const filtered=games.filter(matches).sort((a,b)=>a.title.localeCompare(b.title,'es'));
 $('#gameCount').textContent=filtered.length;
 $('#counterLabel').textContent=filtered.length===1?'juego disponible':'juegos disponibles';
 $('#gameGrid').innerHTML=filtered.map(g=>{
 const index=games.indexOf(g);
 const bg=g.image<=4?`style="background-image:url('assets/portada-${g.image}.jpg')"`:'';
 return `<article class="game-card"><button class="cover-button" type="button" data-game="${index}" aria-label="Ver detalles de ${sanitize(g.title)}"><div class="cover cover-${g.image}" ${bg}>${g.image>4?`<span class="cover-art" aria-hidden="true">${g.emoji}</span>`:''}${g.featured?'<span class="tag featured">DESTACADO</span>':''}<span class="tag players">${g.players} ${g.players===1?'JUGADOR':'JUGADORES'}</span></div></button><div class="card-details"><div class="card-title-row"><h3 class="card-title">${sanitize(g.title)}</h3><span class="platform-tag" title="${sanitize(g.platform)}">${sanitize(g.platform.toUpperCase())}</span></div><p class="card-genre">${sanitize(g.genre)}</p></div></article>`;
 }).join('');
 $('#emptyState').hidden=filtered.length!==0;
}
function update(){renderFilters();renderGames()}
function reset(){state.search='';state.platform='Todos';state.genre='Todos';state.players='Todos';$('#searchInput').value='';update()}
document.addEventListener('click',e=>{
 const platform=e.target.closest('[data-platform]');if(platform){state.platform=platform.dataset.platform;update();return}
 const genre=e.target.closest('[data-genre]');if(genre){state.genre=genre.dataset.genre;update();return}
 const players=e.target.closest('[data-players]');if(players){state.players=players.dataset.players;update();return}
 const gameButton=e.target.closest('[data-game]');if(gameButton){const g=games[Number(gameButton.dataset.game)];$('#dialogContent').innerHTML=`<h2 id="dialogTitle">${sanitize(g.title)}</h2><div class="modal-pills"><span>${sanitize(g.platform)}</span><span>${sanitize(g.genre)}</span><span>${g.players} ${g.players===1?'jugador':'jugadores'}</span></div><p>${sanitize(g.description)}</p>`;$('#gameDialog').showModal()}
});
$('#searchInput').addEventListener('input',e=>{state.search=e.target.value;renderGames()});
$('#clearFilters').addEventListener('click',reset);
$('#resetEmpty').addEventListener('click',reset);
$('#closeDialog').addEventListener('click',()=>$('#gameDialog').close());
$('#gameDialog').addEventListener('click',e=>{if(e.target===$('#gameDialog'))$('#gameDialog').close()});
update();
