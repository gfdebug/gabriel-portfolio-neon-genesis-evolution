'use strict';
const PROJECTS = [
 {id:'shopcore',name:'ShopCore V6',category:'sistemas',type:'E-commerce com painel administrativo',description:'Loja virtual demonstrativa com catálogo e carrinho interativos, autenticação de administrador, gestão de preços e estoque e integração com Supabase. Não processa pagamentos reais.',technologies:['React','TypeScript','Vite','Supabase','RLS','Git'],features:['Catálogo de oito produtos demonstrativos','Login administrativo com autenticação','Gerenciamento de preço, estoque e visibilidade','Persistência no Supabase e políticas RLS','15 testes automatizados aprovados e deploy em produção'],images:['shopcore-1.webp','shopcore-2.webp','shopcore-3.webp'],url:'https://shopcore-ultimate.vercel.app/'},
 {id:'nexora',name:'Nexora',category:'sistemas',type:'Sistema web',description:'Sistema demonstrativo de gestão empresarial com autenticação, cadastro de clientes, financeiro, tarefas e relatórios. Uma experiência organizada para explorar rotinas administrativas.',technologies:['HTML','CSS','JavaScript','Supabase','SQL','RLS'],features:['Autenticação de usuários com Supabase','Cadastro e organização de clientes','Controle de entradas e saídas','Gestão de tarefas e relatórios','Políticas de acesso por usuário no banco'],images:['nexora-1.webp','nexora-2.webp','nexora-3.webp','nexora-4.webp'],url:'https://nexora-zeta-rouge.vercel.app/'},
 {id:'nexdata',"name": "NexData", "category": "dados", "type": "Tratamento de dados com Python e SQL", "description": "Plataforma demonstrativa com laboratório de dados no navegador e API Python integrada. Importa CSV e Excel, valida e trata inconsistências, cruza tabelas e executa SQL. Exporta dados tratados e relatórios, mantendo os painéis financeiro, de estoque e administrativo.", "technologies": ["Python", "Pandas", "FastAPI", "TypeScript", "SQL", "DuckDB-Wasm", "OpenPyXL", "Vite"], "features": ["Laboratório local com qualidade, limpeza reversível, cruzamentos LEFT/INNER e SQL", "API Python com FastAPI, Pandas e OpenPyXL no mesmo domínio", "Validação de números, datas e e-mails; IDs com zeros preservados", "Regras explícitas para espaços, duplicadas, linhas vazias e valores inválidos", "Pacote ZIP com CSV, Excel, ocorrências e relatório JSON", "Exportação com proteção contra interpretação de fórmulas", "28 testes automatizados; processamento e exportação verificados", "Módulos financeiro, estoque e administrativo preservados", "Laboratório local; módulo Python envia arquivos à API, sem armazenamento intencional de planilhas"], "images": ["nexdata-python-capa.webp", "nexdata-python-regras.webp", "nexdata-python-resultado.webp", "nexdata-1.webp", "nexdata-2.webp", "nexdata-3.webp", "nexdata-4.webp"], "url": "https://nexdata-seven.vercel.app/"},
 {id:'sabor', "name": "Sabor da Praça", "category": "sites", "type": "Restaurante com pedidos e gestão", "description": "Restaurante fictício com cardápio interativo, adicionais, sacola, pedidos persistentes e acompanhamento do preparo. Cozinha e gestão demonstrativas conectadas ao Supabase, com dados isolados por visitante e interface responsiva.", "technologies": ["React", "TypeScript", "Supabase", "PostgreSQL", "Realtime", "Vite"], "features": ["Busca, categorias, favoritos e filtro vegetariano", "Adicionais, sacola e checkout fictício para retirada ou mesa", "Acompanhamento e cancelamento inicial de pedidos", "Cozinha com etapas de recebimento, preparo, pronto e conclusão", "Gestão de cardápio, disponibilidade, indicadores e exportação CSV", "Preços e estoque validados no servidor; proteção contra pedidos duplicados", "19 testes automatizados; integração online, isolamento e Realtime verificados", "Sem pagamentos ou entregas reais; papéis de cliente, cozinha e gestão simulados"], "images": ["sabor-1.webp", "sabor-2.webp", "sabor-3.webp", "sabor-4.webp"], "url": "https://loquacious-cendol-c3884f.netlify.app/"},
 {id:'bella',"name":"Bella Studio","category":"sites","type":"Site com agendamento e gestão","description":"Salão fictício com agendamento por serviço e profissional, área do cliente e painel de gestão. Interface responsiva com fotos ilustrativas, personagens e dados persistidos em ambientes demonstrativos separados.","technologies":["React","TypeScript","Cloudflare D1","SQLite","Vinext","Drizzle"],"features":["Reserva por serviço, profissional, data e horário disponível","Personagens fictícias com avatar e apresentação","Remarcação e cancelamento com regras de antecedência","Gestão de serviços, profissionais e bloqueios da agenda","Indicadores calculados sobre os atendimentos e histórico de ações","Exportações CSV e calendário; banco persistente D1","21 testes automatizados e 10 verificações HTTP na prévia","Sem cobranças reais; perfis cliente e gestora demonstrativos"],"images":["bella-1.webp","bella-2.webp","bella-3.webp","bella-4.webp"],"url":"https://merry-hamster-308b45.netlify.app/"}
];

PROJECTS.sort((a,b)=>['sabor','bella','nexdata','nexora','shopcore'].indexOf(a.id)-['sabor','bella','nexdata','nexora','shopcore'].indexOf(b.id));
const PROJECT_EXTRA = {
 shopcore:{challenge:['Demonstrar um comércio virtual com áreas públicas e administração protegida.','Demonstrate a shopping experience with public pages and protected administration.'],solution:['Catálogo, simulação de carrinho, login e inventário editável com Supabase.','Catalog, simulated cart, login and editable inventory using Supabase.'],validation:['15 testes automatizados, build de produção e revisão das políticas RLS.','15 automated tests, production build and RLS policy review.']},
 nexora:{challenge:['Organizar informações de gestão em uma interface demonstrativa.','Organize management information in a demonstration interface.'],solution:['Painéis, cadastro, tarefas e autenticação com Supabase.','Dashboards, records, tasks and Supabase authentication.'],validation:['Projeto demonstrativo publicado; funcionalidades descritas sem métricas comerciais.','Published demo; features described without claiming commercial metrics.']},
 nexdata:{"challenge": ["Transformar planilhas inconsistentes em bases revisáveis e demonstrar frontend, API e processamento Python em um único produto.", "Turn inconsistent spreadsheets into reviewable datasets and demonstrate frontend, API and Python processing in one product."], "solution": ["Laboratório TypeScript com SQL em DuckDB-Wasm e módulo Python integrado com FastAPI, Pandas, validação e exportação CSV/Excel/ZIP, no mesmo domínio.", "A TypeScript workbench with DuckDB-Wasm SQL and an integrated FastAPI/Pandas backend for validation and CSV/Excel/ZIP exports on the same domain."], "validation": ["28 testes automatizados aprovados, build concluído e fluxos de Python, download e SQL verificados. API publicada testada com dados fictícios. O laboratório é local; Python recebe o arquivo no servidor.", "28 automated tests passed, build completed, and Python, download and SQL workflows checked. Published API tested with fictional data. The workbench runs locally; Python receives the file on the server."]},
 sabor:{"challenge": ["Conectar a experiência de um restaurante fictício do cardápio à operação, mantendo os dados separados por visitante.", "Connect a fictional restaurant menu to its operations while isolating each visitor’s demonstration data."], "solution": ["React e TypeScript com pedidos persistentes, regras de estoque e preços no PostgreSQL, cozinha, gestão e sinalização Realtime.", "React and TypeScript with persistent orders, PostgreSQL inventory and pricing rules, kitchen, management and Realtime signals."], "validation": ["19 testes automatizados aprovados. Integração online, idempotência, isolamento, fluxo da cozinha e Realtime verificados. Sem transações comerciais reais.", "19 automated tests passed. Online integration, idempotency, isolation, kitchen workflow and Realtime verified. No real commercial transactions."]},
 bella:{challenge:['Evoluir um site de beleza para demonstrar atendimento e gestão conectados.','Evolve a beauty website into connected booking and management experiences.'],solution:['Agendamento com regras no servidor, área do cliente, gestão, indicadores e personagens fictícias.','Server-validated booking, customer area, management, metrics and fictional characters.'],validation:['21 testes automatizados e 10 verificações HTTP na prévia. Sem pagamentos reais; papéis demonstrativos.','21 automated tests and 10 HTTP checks in preview. No real payments; demonstration roles.']}
};
const PROJECT_EN={
 shopcore:{type:'E-commerce with admin dashboard',description:'Demonstration store featuring an interactive catalog and cart, admin login, pricing and inventory management, and Supabase integration. No real payments.',features:['Eight demo products','Authenticated administrator login','Price, inventory and visibility management','Supabase persistence and RLS policies','15 automated tests passed and production deployment']},
 nexora:{type:'Web management system',description:'Demonstration business management system featuring authentication, customer records, finances, tasks and reports.',features:['Supabase user authentication','Customer records and organization','Income and expenses overview','Tasks and reports','User-scoped database policies']},
 nexdata:{"type": "Data processing with Python and SQL", "description": "Demonstration platform with a browser data workbench and an integrated Python API. Import CSV and Excel, validate and clean data, join tables and run SQL. Export processed datasets and reports alongside financial, inventory and administrative dashboards.", "features": ["Local workbench: data quality, reversible cleaning, LEFT/INNER joins and SQL", "Same-domain Python API with FastAPI, Pandas and OpenPyXL", "Number, date and email validation; leading-zero IDs preserved", "Explicit rules for whitespace, duplicates, empty rows and invalid values", "ZIP package with CSV, Excel, issues and a JSON report", "Exports protected against spreadsheet formula interpretation", "28 automated tests; processing and export workflows checked", "Financial, inventory and administrative dashboards preserved", "Local workbench; the Python module sends files to the API without intentional spreadsheet storage"]},
 sabor:{"type": "Restaurant ordering and management", "description": "Fictional restaurant featuring an interactive menu, extras, cart, persistent orders and preparation tracking. Demonstration kitchen and management views use Supabase, visitor-isolated data and a responsive interface.", "features": ["Search, categories, favorites and vegetarian filter", "Extras, cart and simulated pickup or table checkout", "Order tracking and initial cancellation", "Kitchen workflow from received to completed", "Menu, availability, metrics and CSV exports", "Server-validated prices and stock; duplicate-order protection", "19 automated tests; online integration, isolation and Realtime checked", "No real payments or deliveries; simulated customer, kitchen and management roles"]},
 bella:{type:'Website with booking and management',description:'Fictional beauty studio with service and professional booking, a customer area and a management dashboard. Responsive design, illustrative photos, characters and persistent data in separate demo environments.',features:['Book an available service, professional, date and time','Fictional professionals with illustrated avatars and introductions','Rescheduling and cancellation with advance-notice rules','Manage services, professionals and blocked time','Metrics calculated from appointments and an activity history','CSV/calendar exports and persistent D1 storage','21 automated tests and 10 HTTP checks in preview','No real charges; customer and manager are demo perspectives']}
};

PROJECTS.find(p=>p.id==="shopcore").description="Catálogo, carrinho e gestão de produtos reunidos em uma loja virtual demonstrativa. Inclui login administrativo, controle de preços e estoque e integração com Supabase. Não processa pagamentos reais.";
PROJECTS.find(p=>p.id==="nexora").description="Clientes, finanças, tarefas e relatórios em um só lugar. Sistema demonstrativo de gestão empresarial com autenticação e organização das rotinas administrativas.";
PROJECTS.find(p=>p.id==="nexdata").description="Transforma planilhas inconsistentes em dados organizados para análise. Importa CSV e Excel, valida informações, cruza tabelas, executa SQL e exporta arquivos e relatórios por meio de um laboratório web e uma API Python.";
PROJECTS.find(p=>p.id==="sabor").description="Do cardápio ao preparo: uma experiência de pedidos conectada à cozinha e à gestão. Restaurante fictício com adicionais, sacola, acompanhamento dos pedidos e dados separados por visitante.";
PROJECTS.find(p=>p.id==="bella").description="Organização de horários e atendimentos em uma experiência de agendamento online. Salão fictício com escolha de serviço e profissional, área do cliente e painel de gestão.";
PROJECT_EN["shopcore"].description="Catalog, cart and product management in a demonstration online store. Includes admin login, pricing, inventory and Supabase integration. No real payments.";
PROJECT_EN["nexora"].description="Customers, finances, tasks and reports in one place. A demonstration business management system with authentication and organized administrative workflows.";
PROJECT_EN["nexdata"].description="Turn inconsistent spreadsheets into organized data for analysis. Import CSV and Excel, validate records, join tables, run SQL and export files and reports using a web workbench and a Python API.";
PROJECT_EN["sabor"].description="From menu to preparation: ordering connected to the kitchen and management. A fictional restaurant with extras, a cart, order tracking and visitor-isolated data.";
PROJECT_EN["bella"].description="Organized schedules and appointments through online booking. A fictional salon with service and professional selection, a customer area and management dashboard.";

PROJECTS.forEach(p=>{p.images=[p.id+'-desktop.jpg',...p.images,p.id+'-mobile.jpg']});
const projectImagePath=file=>/^.+-(desktop|mobile)\.jpg$/.test(file)?'./'+file:'./assets/'+file;
const localizedProject=p=>window.GL_LANG==='en'?{...p,...PROJECT_EN[p.id]}:p;
const projectText=(pt,en)=>window.GL_LANG==='en'?en:pt;

const $=(q,scope=document)=>scope.querySelector(q);const $$=(q,scope=document)=>[...scope.querySelectorAll(q)];
const grid=$('#projectGrid');let activeFilter='todos';let activeProject=null;let imageIndex=0;let toastTimer;
function renderProjects(){const search=$('#projectSearch').value.trim().toLocaleLowerCase();const list=PROJECTS.filter(p=>(activeFilter==='todos'||p.category===activeFilter)&&[p.name,p.type,p.description,...p.technologies,...Object.values(PROJECT_EN[p.id]||{}).flat()].join(' ').toLocaleLowerCase().includes(search));grid.innerHTML='';list.forEach((original)=>{const p=localizedProject(original);const card=document.createElement('article');card.className='project-card';card.innerHTML=`<button type="button" class="project-thumbnail" data-open="${p.id}" aria-label="${projectText('Ver imagens e detalhes de','View images and details of')} ${p.name}"><img src="${projectImagePath(p.images[0])}" alt="Captura real do projeto ${p.name}" loading="lazy"><span class="thumbnail-label">${projectText('PROJETO AUTORAL','INDEPENDENT PROJECT')}</span><span class="thumbnail-icon" aria-hidden="true">↗</span></button><div class="project-content"><span class="project-index">${String(PROJECTS.indexOf(original)+1).padStart(2,'0')} / ${p.type.toUpperCase()}</span><h3>${p.name}</h3><p>${p.description}</p><div class="project-tags">${p.technologies.slice(0,4).map(t=>`<span>${t}</span>`).join('')}</div><div class="project-footer"><button type="button" data-open="${p.id}">${projectText('Ver detalhes','View details')}</button><a href="${p.url}" target="_blank" rel="noopener noreferrer" aria-label="Abrir demonstração de ${p.name}">${projectText('Abrir projeto','Open project')}</a></div></div>`;grid.append(card)});$('#emptyState').hidden=list.length!==0}
$$('.filter').forEach(b=>b.addEventListener('click',()=>{activeFilter=b.dataset.filter;$$('.filter').forEach(f=>{const current=f===b;f.classList.toggle('is-active',current);f.setAttribute('aria-pressed',String(current))});renderProjects()}));$('#projectSearch').addEventListener('input',renderProjects);grid.addEventListener('click',e=>{const btn=e.target.closest('[data-open]');if(btn)openProject(btn.dataset.open)});
const dialog=$('#projectDialog');function openProject(id){const p=PROJECTS.find(x=>x.id===id);if(!p)return;activeProject=p;imageIndex=0;const d=localizedProject(p);$('#dialogType').textContent=d.type+' / '+projectText('Projeto demonstrativo','Demonstration project');$('#dialogTitle').textContent=p.name;$('#dialogDescription').textContent=d.description;$('#dialogTech').replaceChildren(...p.technologies.map(t=>{const s=document.createElement('span');s.textContent=t;return s}));$('#dialogFeatures').replaceChildren(...d.features.map(t=>{const li=document.createElement('li');li.textContent=t;return li}));$('#dialogLive').href=p.url;const c=PROJECT_EXTRA[p.id];const lang=window.GL_LANG==='en'?1:0;$('#dialogChallenge').textContent=c.challenge[lang];$('#dialogSolution').textContent=c.solution[lang];$('#dialogValidation').textContent=c.validation[lang];updateGallery();dialog.showModal();document.body.classList.add('modal-open')}
function updateGallery(){if(!activeProject)return;const src=projectImagePath(activeProject.images[imageIndex]);const mobile=src.includes('-mobile.');$('#galleryDesktop').setAttribute('aria-pressed',String(!mobile));$('#galleryMobile').setAttribute('aria-pressed',String(mobile));const img=$('#dialogImage');img.onerror=()=>{img.onerror=null;img.src=projectImagePath(activeProject.images[0])};img.src=src;img.alt=`${projectText('Captura','Screenshot')} ${imageIndex+1} ${projectText('de','of')} ${activeProject.images.length} — ${activeProject.name}`;$('#galleryFormat').textContent=src.includes('-mobile.')?projectText('Visualização em largura de celular · 454 px','Mobile-width view · 454 px'):projectText('Visualização desktop','Desktop view');$('#galleryIndicator').textContent=`${String(imageIndex+1).padStart(2,'0')} / ${String(activeProject.images.length).padStart(2,'0')}`}
$('#galleryDesktop').addEventListener('click',()=>{imageIndex=0;updateGallery()});$('#galleryMobile').addEventListener('click',()=>{if(activeProject){imageIndex=activeProject.images.length-1;updateGallery()}});
function moveGallery(delta){if(!activeProject)return;imageIndex=(imageIndex+delta+activeProject.images.length)%activeProject.images.length;updateGallery()}
$('#galleryPrev').addEventListener('click',()=>moveGallery(-1));$('#galleryNext').addEventListener('click',()=>moveGallery(1));$('#dialogClose').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');activeProject=null});dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});dialog.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();moveGallery(1)}if(e.key==='ArrowLeft'){e.preventDefault();moveGallery(-1)}});
function toast(message){const el=$('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2800)}
async function copyText(value){try{await navigator.clipboard.writeText(value);toast(projectText('Copiado para a área de transferência!','Copied to clipboard!'))}catch{const field=document.createElement('textarea');field.value=value;document.body.append(field);field.select();const ok=document.execCommand('copy');field.remove();toast(ok?projectText('Copiado!','Copied!'):projectText('Não foi possível copiar. Use o link visível.','Copy failed. Use the visible link.'))}}
$('#copyEmail').addEventListener('click',()=>copyText('gf.dlimaa25@gmail.com'));$('#copyProjectLink').addEventListener('click',()=>{if(activeProject)copyText(activeProject.url)});
const themeToggle=$('#themeToggle');try{if(localStorage.getItem('gl-theme')==='light')document.body.classList.add('light')}catch{}function updateTheme(){themeToggle.setAttribute('aria-label',document.body.classList.contains('light')?projectText('Ativar modo escuro','Enable dark mode'):projectText('Ativar modo claro','Enable light mode'));themeToggle.querySelector('span').textContent=document.body.classList.contains('light')?'☾':'☀'}updateTheme();themeToggle.addEventListener('click',()=>{document.body.classList.toggle('light');try{localStorage.setItem('gl-theme',document.body.classList.contains('light')?'light':'dark')}catch{}updateTheme()});
const menuToggle=$('#menuToggle');const nav=$('#navigation');menuToggle.addEventListener('click',()=>{const opened=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(opened));menuToggle.setAttribute('aria-label',opened?projectText('Fechar menu','Close menu'):projectText('Abrir menu','Open menu'));menuToggle.querySelector('span').textContent=opened?'✕':'☰'});$$('a',nav).forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label',projectText('Abrir menu','Open menu'));menuToggle.querySelector('span').textContent='☰'}));
function scrollUpdate(){const el=document.documentElement;$('#readingProgress').style.width=(100*el.scrollTop/Math.max(1,el.scrollHeight-el.clientHeight))+'%'}window.addEventListener('scroll',scrollUpdate,{passive:true});scrollUpdate();
const observer=('IntersectionObserver'in window)?new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){const link=$(`.nav a[href="#${entry.target.id}"]`);$$('.nav a').forEach(a=>a.classList.toggle('active',a===link))}})},{rootMargin:'-30% 0px -55% 0px'}):null;if(observer)$$('main section[id]').forEach(s=>observer.observe(s));$('#year').textContent=String(new Date().getFullYear());renderProjects();document.addEventListener('gl-language-change',()=>{updateTheme();renderProjects();if(activeProject){const id=activeProject.id;const idx=imageIndex;$('#dialogDescription').textContent=localizedProject(activeProject).description;$('#dialogType').textContent=localizedProject(activeProject).type+' / '+projectText('Projeto demonstrativo','Demonstration project');$('#dialogFeatures').replaceChildren(...localizedProject(activeProject).features.map(x=>{const li=document.createElement('li');li.textContent=x;return li}));const c=PROJECT_EXTRA[id],l=window.GL_LANG==='en'?1:0;$('#dialogChallenge').textContent=c.challenge[l];$('#dialogSolution').textContent=c.solution[l];$('#dialogValidation').textContent=c.validation[l];imageIndex=idx;updateGallery();}});

// NEON GENESIS V3: optional visual enhancements, no external libraries.
(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let motionEnabled = !reducedMotion.matches;
  try { const saved=localStorage.getItem('gl-v3-motion'); if(saved!==null) motionEnabled=saved==='on' && !reducedMotion.matches; } catch {}
  const motionButton=document.getElementById('motionToggle');
  const canvas=document.getElementById('neonField');
  const context=canvas.getContext('2d', {alpha:true});
  let width=0,height=0,dots=[],frame=0,animationId=0;
  const palette=['#F1F5F9','#94A3B8','#94A3B8','#dce1e8'];
  const random=(a,b)=>a+Math.random()*(b-a);
  const resetCanvas=()=>{
    const dpr=Math.min(window.devicePixelRatio||1,1.75);
    width=window.innerWidth; height=window.innerHeight;
    canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);
    context.setTransform(dpr,0,0,dpr,0,0);
    dots=Array.from({length:Math.min(88,Math.max(22,Math.floor(width*height/18000)))},()=>({x:random(0,width),y:random(0,height),radius:random(.45,1.7),speed:random(.16,.72),alpha:random(.14,.56),color:palette[Math.floor(Math.random()*palette.length)]}));
  };
  function renderField(){
    if(!motionEnabled)return;
    frame++;
    context.clearRect(0,0,width,height);
    const t=frame*.012;
    for(let i=0;i<dots.length;i++){
      const p=dots[i];p.y-=p.speed;if(p.y<0){p.y=height;p.x=random(0,width)}
      const wobble=Math.sin(t+i)*.12;
      context.beginPath();context.fillStyle=p.color;context.globalAlpha=p.alpha;context.arc(p.x+wobble,p.y,p.radius,0,Math.PI*2);context.fill();
      if(i%3===0){context.strokeStyle=p.color;context.globalAlpha=p.alpha*.2;context.beginPath();context.moveTo(p.x,p.y);context.lineTo(p.x,p.y+random(5,18));context.stroke()}
    }
    context.globalAlpha=1;
    animationId=requestAnimationFrame(renderField);
  }
  let resizeTimer;
  window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(resetCanvas,120)},{passive:true});
  const cursor=document.getElementById('cursorAura');
  const canHover=window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  if(canHover)window.addEventListener('pointermove',e=>{
    if(!motionEnabled)return;
    cursor.classList.add('visible');cursor.style.transform=`translate3d(${e.clientX-130}px,${e.clientY-130}px,0)`;
  },{passive:true});
  const revealNodes=[...document.querySelectorAll('[data-reveal]')];
  function startReveals(){
    document.body.classList.add('motion-ready');
    if(!('IntersectionObserver'in window)){revealNodes.forEach(el=>el.classList.add('in-view'));return;}
    const obs=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');obs.unobserve(entry.target)}})},{threshold:.06,rootMargin:'0px 0px -20px 0px'});
    revealNodes.forEach(el=>obs.observe(el));
  }
  function applyMotion(){
    document.body.classList.toggle('motion-off',!motionEnabled);
    motionButton.setAttribute('aria-pressed',String(motionEnabled));
    motionButton.setAttribute('aria-label',motionEnabled?projectText('Desativar animações','Disable animations'):projectText('Ativar animações','Enable animations'));
    motionButton.title=motionEnabled?projectText('Desativar animações','Disable animations'):projectText('Ativar animações','Enable animations');
    cancelAnimationFrame(animationId);context.clearRect(0,0,canvas.width,canvas.height);
    if(motionEnabled){resetCanvas();renderField();} else cursor.classList.remove('visible');
  }
  motionButton.addEventListener('click',()=>{
    if(reducedMotion.matches){toast(projectText('Seu sistema solicita movimento reduzido.','Your system requests reduced motion.'));return;}
    motionEnabled=!motionEnabled;
    try{localStorage.setItem('gl-v3-motion',motionEnabled?'on':'off')}catch{}
    applyMotion();toast(motionEnabled?projectText('Efeitos ativados.','Effects enabled.'):projectText('Efeitos pausados.','Effects paused.'));
  });
  applyMotion();startReveals();
  // Tilt is decorative only; keyboard navigation remains unchanged.
  if(canHover){
    const tilt=document.querySelector('.hero-visual');
    const hero=document.querySelector('.hero');
    hero.addEventListener('pointermove',e=>{
      if(!motionEnabled)return;
      const r=hero.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;
      tilt.style.transform=`perspective(1100px) rotateY(${(x*6).toFixed(2)}deg) rotateX(${(-y*5).toFixed(2)}deg)`;
    },{passive:true});
    hero.addEventListener('pointerleave',()=>{tilt.style.transform=''}, {passive:true});
    document.getElementById('projectGrid').addEventListener('pointermove',e=>{
      if(!motionEnabled)return;
      const card=e.target.closest('.project-card');if(!card)return;
      const r=card.getBoundingClientRect();card.style.setProperty('--mx',(e.clientX-r.left)+'px');card.style.setProperty('--my',(e.clientY-r.top)+'px');
    },{passive:true});
  }
  const bootPhrases={pt:['Inicializando experiências digitais...','Carregando projetos: ShopCore · Nexora · NexData · Sabor da Praça · Bella Studio','Status: pronto para explorar. Digite help no terminal.'],en:['Initializing digital experiences...','Loading projects: ShopCore · Nexora · NexData · Sabor da Praça · Bella Studio','Status: ready to explore. Type help in the terminal.']};
  let phrase=0,char=0,erase=false;
  function typeBoot(){
    if(!motionEnabled)return;
    const list=bootPhrases[window.GL_LANG||'pt'];const str=list[phrase];char+=erase?-1:1;
    document.getElementById('bootText').textContent=str.slice(0,Math.max(0,char));
    if(!erase&&char>=str.length){erase=true;setTimeout(typeBoot,2300);return}
    if(erase&&char<=0){erase=false;phrase=(phrase+1)%list.length;setTimeout(typeBoot,420);return}
    setTimeout(typeBoot,erase?24:47);
  }
  if(!reducedMotion.matches)typeBoot();else document.getElementById('bootText').textContent=bootPhrases[window.GL_LANG||'pt'][2];
  const terminal=document.getElementById('terminalDialog');
  const output=document.getElementById('terminalOutput');
  const input=document.getElementById('terminalInput');
  const commands={
    help:'COMANDOS DISPONÍVEIS\nhelp       mostra esta lista\nabout      sobre Gabriel\nprojects   lista projetos\nnexora     abre estudo de caso Nexora\nshopcore   abre estudo de caso ShopCore\nnexdata    abre estudo de caso NexData\nsabor      abre estudo de caso Sabor da Praça\nbella      abre estudo de caso Bella Studio\nskills     habilidades e tecnologias\ncontact    dados de contato\nclear      limpa este terminal\nmatrix     surpresa visual\nexit       fecha o terminal',
    about:'Gabriel Lima — estudante de Análise e Desenvolvimento de Sistemas na Estácio. Desenvolvimento web, interfaces, dashboards e sistemas autorais demonstrativos.',
    projects:'[01] ShopCore V6 — e-commerce com Supabase\n[02] Nexora — gestão web com Supabase\n[03] NexData — Python, Pandas, API REST, tratamento e SQL\n[04] Sabor da Praça — pedidos, cozinha e gestão com Supabase\n[05] Bella Studio — agendamento e gestão demonstrativos\n\nDigite o nome do projeto para abrir detalhes.',
    skills:'HTML5 / CSS3 / JavaScript / Supabase / SQL / CSV / Excel / Responsividade / Interfaces / Dashboards',
    contact:'WhatsApp: wa.me/5531972120246\nE-mail: gf.dlimaa25@gmail.com\nGitHub: github.com/GFDLima\nLinkedIn: gabriel-lima-565636184/\n\nUse a seção de contato para enviar uma mensagem.'
  };
  function appendLine(value,kind='answer'){
    const p=document.createElement('p');p.className='line-'+kind;p.textContent=value;output.appendChild(p);output.scrollTop=output.scrollHeight;
  }
  function runCommand(value){
    const typed=value.trim().toLowerCase();if(!typed)return;
    appendLine('visitor@gabriel.dev:~$ '+value,'command');
    if(typed==='clear'){output.replaceChildren();return}
    if(typed==='exit'){terminal.close();return}
    if(['shopcore','nexora','nexdata','sabor','bella'].includes(typed)){
      terminal.close();openProject(typed);return;
    }
    if(typed==='matrix'){
      appendLine('Reality is code. Explore o universo neon, mas lembre-se: projetos reais em primeiro lugar. ✦','system');
      if(motionEnabled){document.body.classList.add('neon-flash');setTimeout(()=>document.body.classList.remove('neon-flash'),650)}
      return;
    }
    const translations=window.GL_LANG==='en'?{help:'AVAILABLE COMMANDS\nhelp — this list\nabout — about Gabriel\nprojects — list projects\nshopcore / nexora / nexdata / sabor / bella — open a case study\nskills — technologies\ncontact — contact details\nclear — clear terminal\nmatrix — visual surprise\nexit — close terminal',about:'Gabriel Lima — Systems Analysis and Development student at Estácio, building demonstration web applications.',projects:'[01] ShopCore — e-commerce with Supabase\n[02] Nexora — business management\n[03] NexData — Python, Pandas, REST API, data cleaning and SQL\n[04] Sabor da Praça — ordering, kitchen and management with Supabase\n[05] Bella Studio — booking and management demo',skills:'HTML5 / CSS3 / JavaScript / React / TypeScript / Supabase / Python / Pandas / FastAPI / SQL / CSV / Excel / Git',contact:'WhatsApp: wa.me/5531972120246\nEmail: gf.dlimaa25@gmail.com\nGitHub: github.com/GFDLima\nLinkedIn: gabriel-lima-565636184/'}:commands;appendLine(translations[typed]||projectText('Comando desconhecido. Digite help para ver as opções.','Unknown command. Type help for options.'),translations[typed]?'answer':'error');
  }
  function openTerminal(){
    if(dialog.open)dialog.close();
    if(!terminal.open){terminal.showModal();if(!output.children.length){appendLine('GABRIEL_OS v3.0 // SISTEMA ONLINE','system');appendLine(projectText('Bem-vindo ao terminal interativo. Digite help para começar.','Welcome to the interactive terminal. Type help to get started.'),'answer')}input.focus()}
  }
  document.querySelectorAll('[data-terminal-open]').forEach(b=>b.addEventListener('click',openTerminal));
  document.getElementById('terminalClose').addEventListener('click',()=>terminal.close());
  document.getElementById('terminalForm').addEventListener('submit',e=>{e.preventDefault();runCommand(input.value);input.value='';input.focus()});
  document.querySelectorAll('[data-command]').forEach(b=>b.addEventListener('click',()=>{runCommand(b.dataset.command);input.focus()}));
  terminal.addEventListener('click',e=>{if(e.target===terminal)terminal.close()});
  document.addEventListener('keydown',e=>{
    if(e.ctrlKey&&e.key.toLowerCase()==='k'&&!e.altKey&&!e.shiftKey){e.preventDefault();terminal.open?terminal.close():openTerminal()}
  });
  // Respect changes in OS accessibility preferences in real time.
  reducedMotion.addEventListener('change',e=>{if(e.matches){motionEnabled=false;applyMotion();document.getElementById('bootText').textContent=bootPhrases[window.GL_LANG||'pt'][2];revealNodes.forEach(el=>el.classList.add('in-view'))}});
})();

// Quote drafting stays in browser memory. The visitor reviews before opening WhatsApp.
const quoteForm=document.getElementById('quoteForm');
function prepareQuote(){
 const name=document.getElementById('quoteName').value.trim();
 const description=document.getElementById('quoteDescription').value.trim();
 const select=document.getElementById('quoteService');
 if(!name||description.length<10||!select.value)return false;
 const service=select.options[select.selectedIndex].textContent;
 const message=projectText(`Olá, Gabriel! Sou ${name}. Conheci seu portfólio e gostaria de um orçamento.\n\nServiço: ${service}\nProjeto: ${description}`,`Hello Gabriel! I’m ${name}. I saw your portfolio and would like a quote.\n\nService: ${service}\nProject: ${description}`);
 document.getElementById('quoteMessage').textContent=message;
 document.getElementById('quoteSend').href='https://wa.me/5531972120246?text='+encodeURIComponent(message);
 return true;
}
quoteForm.addEventListener('submit',event=>{
 event.preventDefault();
 if(!prepareQuote())return;
 const preview=document.getElementById('quotePreview');preview.hidden=false;preview.focus();
});
quoteForm.addEventListener('input',()=>{document.getElementById('quotePreview').hidden=true;document.getElementById('quoteSend').removeAttribute('href')});
document.addEventListener('gl-language-change',()=>{if(!document.getElementById('quotePreview').hidden)prepareQuote()});
