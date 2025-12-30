:root{
  --bg:#0f0f12;
  --card:#17171c;
  --alt:#121217;
  --text:#f2f2f4;
  --muted:#b9bac3;
  --line:rgba(255,255,255,.10);

  /* soft aesthetic latte palette */
  --accent:#ffd6e7;   /* blush */
  --accent2:#ffe6b7;  /* cream */
  --accent3:#ffcfa1;  /* latte */
  --shadow: 0 18px 60px rgba(0,0,0,.45);

  --radius: 18px;
  --radius2: 26px;
  --max: 1120px;
}

*{box-sizing:border-box}
html,body{margin:0;padding:0}
body{
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
  background:
    radial-gradient(900px 520px at 18% 8%, rgba(255,214,231,.16), transparent 60%),
    radial-gradient(760px 460px at 85% 0%, rgba(255,230,183,.14), transparent 60%),
    radial-gradient(760px 460px at 70% 90%, rgba(255,207,161,.10), transparent 60%),
    var(--bg);
  color:var(--text);
  line-height:1.5;
}

a{color:inherit;text-decoration:none}
.container{width:min(var(--max), calc(100% - 40px)); margin:0 auto;}

.header{
  position:sticky; top:0; z-index:50;
  backdrop-filter: blur(10px);
  background: rgba(15,15,18,.65);
  border-bottom:1px solid var(--line);
}
.nav{
  display:flex; align-items:center; justify-content:space-between;
  padding:14px 0;
}

.brand{display:flex; gap:10px; align-items:center; font-weight:900; letter-spacing:.2px}
.brand__mark{
  width:36px; height:36px; display:grid; place-items:center;
  border-radius:12px;
  background: linear-gradient(135deg, rgba(255,214,231,.22), rgba(255,230,183,.12));
  border:1px solid var(--line);
}
.brand__text{font-size:16px}

.navLinks{display:flex; gap:18px; align-items:center}
.navLinks a{color:var(--muted)}
.navLinks a:hover{color:var(--text)}

.menuBtn{
  display:none;
  width:44px; height:40px; border-radius:12px;
  border:1px solid var(--line);
  background: rgba(255,255,255,.04);
}
.menuBtn span{
  display:block; height:2px; margin:7px 10px;
  background: rgba(242,242,244,.85);
  border-radius:5px;
}

.btn{
  display:inline-flex; align-items:center; justify-content:center;
  padding:12px 16px;
  border-radius:14px;
  font-weight:900;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  color:#1a1410;
  border:0;
  box-shadow: 0 10px 25px rgba(255,214,231,.10);
}
.btn--ghost{
  background: transparent;
  border:1px solid var(--line);
  color:var(--text);
  box-shadow:none;
}
.btn--small{padding:9px 12px; border-radius:12px; font-weight:950}

.hero{padding:58px 0 22px}
.heroGrid{
  display:grid;
  grid-template-columns: 1.2fr .95fr;
  gap:28px;
  align-items:stretch;
}
.pill{
  display:inline-flex; align-items:center; gap:10px;
  padding:7px 12px;
  border:1px solid var(--line);
  background: rgba(255,255,255,.04);
  border-radius:999px;
  color:var(--muted);
  margin:0 0 10px;
}
h1{font-size:44px; line-height:1.06; margin:6px 0 12px}
.sub{color:var(--muted); font-size:16px; max-width:62ch}
.heroCtas{display:flex; gap:12px; margin:18px 0 18px}

.heroStats{display:flex; gap:12px; flex-wrap:wrap}
.stat{
  flex:1;
  min-width:150px;
  padding:14px 14px;
  border-radius:var(--radius);
  border:1px solid var(--line);
  background: rgba(255,255,255,.03);
}
.stat__big{font-weight:1000; font-size:18px}
.stat__small{color:var(--muted); font-size:13px}

.taglineRow{
  display:flex; gap:10px; flex-wrap:wrap;
  margin-top:14px;
}
.taglineRow--center{justify-content:center}
.tag{
  font-size:12px;
  font-weight:900;
  color:rgba(242,242,244,.90);
  padding:7px 10px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.03);
}

.heroCard{
  border:1px solid var(--line);
  background: rgba(255,255,255,.03);
  border-radius: var(--radius2);
  overflow:hidden;
  box-shadow: var(--shadow);
  display:flex;
  flex-direction:column;
}
.heroCard__img{
  min-height:310px;
  background:
    radial-gradient(520px 240px at 22% 22%, rgba(255,214,231,.28), transparent 60%),
    radial-gradient(520px 240px at 75% 15%, rgba(255,230,183,.20), transparent 60%),
    radial-gradient(520px 240px at 65% 90%, rgba(255,207,161,.12), transparent 60%),
    linear-gradient(135deg, rgba(255,255,255,.06), rgba(255,255,255,.01));
  position:relative;
}
.imgTag{
  position:absolute; left:16px; top:16px;
  padding:8px 10px;
  border-radius:999px;
  border:1px solid var(--line);
  background: rgba(15,15,18,.55);
  color:var(--text);
  font-weight:950;
  font-size:12px;
}
.heroCard__info{
  display:flex; justify-content:space-between; align-items:flex-start;
  padding:16px;
  gap:12px;
}
.kicker{color:var(--muted); font-size:12px; letter-spacing:.2px}
.title{font-weight:1000; font-size:16px}
.mini{color:var(--muted); font-size:13px; margin-top:2px}
.price{font-weight:1000; color:var(--accent2)}

.strip{
  padding:12px 0 28px;
}
.stripGrid{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:12px;
}
.stripItem{
  border:1px solid var(--line);
  background: rgba(255,255,255,.03);
  border-radius: var(--radius);
  padding:14px;
  display:flex;
  gap:12px;
  align-items:center;
}
.stripIcon{
  width:40px; height:40px;
  display:grid; place-items:center;
  border-radius:14px;
  border:1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.03);
  font-size:18px;
}
.stripTitle{font-weight:1000}
.stripText{color:var(--muted); font-size:13px}

.section{padding:56px 0}
.section--alt{
  background: linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,.00));
  border-top:1px solid var(--line);
  border-bottom:1px solid var(--line);
}
.sectionHead{margin-bottom:18px}
.sectionHead h2{margin:0 0 6px; font-size:30px}
.sectionHead p{margin:0; color:var(--muted)}

.tabs{
  display:flex; gap:10px; flex-wrap:wrap;
  margin:16px 0 18px;
}
.tab{
  border:1px solid var(--line);
  background: rgba(255,255,255,.03);
  color:var(--text);
  padding:10px 12px;
  border-radius:999px;
  cursor:pointer;
  font-weight:950;
}
.tab.active{
  background: linear-gradient(135deg, rgba(255,214,231,.18), rgba(255,230,183,.10));
  border-color: rgba(255,214,231,.35);
}

.menuGrid{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:14px;
}
.item{
  border:1px solid var(--line);
  background: rgba(255,255,255,.03);
  border-radius: var(--radius);
  padding:14px;
  display:flex; flex-direction:column;
  gap:8px;
}
.itemTop{display:flex; justify-content:space-between; gap:10px}
.itemName{font-weight:1000}
.itemPrice{color:var(--accent2); font-weight:1000}
.itemDesc{color:var(--muted); font-size:13px; margin:0}
.badges{display:flex; gap:8px; flex-wrap:wrap}
.badgePill{
  font-size:12px;
  padding:6px 9px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.12);
  color:var(--muted);
  background: rgba(255,255,255,.02);
}
.note{
  margin-top:16px;
  padding:14px;
  border-radius: var(--radius);
  border:1px dashed rgba(255,255,255,.18);
  color:var(--muted);
}

.eventsGrid{
  display:grid;
  grid-template-columns: 1fr 1.2fr;
  gap:16px;
  align-items:stretch;
}
.eventsCard{
  border:1px solid var(--line);
  background: rgba(255,255,255,.03);
  border-radius: var(--radius2);
  padding:18px;
}
.mutedP{color:var(--muted); margin:0 0 14px}
.chips{display:flex; flex-wrap:wrap; gap:8px; margin:10px 0 16px}
.chip{
  font-size:12px;
  font-weight:950;
  color:rgba(242,242,244,.90);
  padding:7px 10px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.03);
}
.eventsBtns{display:flex; gap:10px; flex-wrap:wrap}

.packageGrid{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:12px;
}
.package{
  border:1px solid var(--line);
  background: rgba(255,255,255,.03);
  border-radius: var(--radius2);
  padding:16px;
}
.package--featured{
  background: linear-gradient(135deg, rgba(255,214,231,.10), rgba(255,230,183,.06));
  border-color: rgba(255,214,231,.30);
}
.packageTop{display:flex; justify-content:space-between; align-items:center; gap:10px}
.packageName{font-weight:1000}
.packagePrice{color:var(--accent2); font-weight:1000}
.packageDesc{color:var(--muted); font-size:13px; margin:10px 0 12px}
.packageList{margin:0; padding-left:18px; color:var(--muted)}
.packageList li{margin:6px 0}

.aboutGrid{
  display:grid;
  grid-template-columns: 1.1fr .9fr;
  gap:16px;
  align-items:stretch;
}
.aboutCard{
  border:1px solid var(--line);
  background: rgba(255,255,255,.03);
  border-radius: var(--radius2);
  padding:18px;
}
.aboutCard h2{margin:0 0 8px}
.aboutCard p{margin:0 0 12px; color:var(--text)}
.aboutCard p.mutedP{color:var(--muted)}
.checklist{margin:0 0 16px; padding-left:18px; color:var(--muted)}
.checklist li{margin:6px 0}

.quoteCard{
  border:1px solid rgba(255,255,255,.12);
  background: rgba(15,15,18,.45);
  border-radius: var(--radius);
  padding:14px;
  display:grid;
  gap:6px;
}
.quoteMark{font-size:26px; line-height:1; color:var(--accent)}
.quoteText{font-weight:1000}
.quoteBy{color:var(--muted); font-size:13px}

.aboutPhoto{
  border-radius: var(--radius2);
  border:1px solid var(--line);
  background:
    radial-gradient(600px 320px at 18% 22%, rgba(255,214,231,.22), transparent 60%),
    radial-gradient(600px 320px at 85% 8%, rgba(255,230,183,.16), transparent 60%),
    radial-gradient(600px 320px at 65% 95%, rgba(255,207,161,.10), transparent 60%),
    linear-gradient(135deg, rgba(255,255,255,.06), rgba(255,255,255,.01));
  position:relative;
  overflow:hidden;
}
.aboutPhoto__overlay{
  position:absolute; inset:0;
  display:flex;
  align-items:flex-end;
  justify-content:flex-start;
  padding:16px;
}
.badge{
  border-radius: 18px;
  border:1px solid rgba(255,255,255,.12);
  background: rgba(15,15,18,.60);
  padding:12px;
}
.badge__big{font-weight:1000}
.badge__small{color:var(--muted); font-size:13px}

.gallery{
  display:grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 120px;
  gap:12px;
}
.g{
  position:relative;
  border-radius: var(--radius);
  border:1px solid var(--line);
  background:
    radial-gradient(420px 180px at 20% 20%, rgba(255,214,231,.16), transparent 60%),
    radial-gradient(420px 180px at 80% 10%, rgba(255,230,183,.12), transparent 60%),
    linear-gradient(135deg, rgba(255,255,255,.06), rgba(255,255,255,.01));
  overflow:hidden;
}
.gLabel{
  position:absolute;
  left:12px; bottom:12px;
  font-size:12px;
  font-weight:1000;
  padding:7px 10px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.12);
  background: rgba(15,15,18,.55);
  color: rgba(242,242,244,.92);
}
.g1{grid-column: span 5; grid-row: span 2}
.g2{grid-column: span 4; grid-row: span 2}
.g3{grid-column: span 3; grid-row: span 1}
.g4{grid-column: span 3; grid-row: span 1}
.g5{grid-column: span 6; grid-row: span 2}
.g6{grid-column: span 6; grid-row: span 2}

.contactGrid{display:grid; gap:14px}
.contactCards{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:12px;
}
.contactCard{
  border:1px solid var(--line);
  background: rgba(255,255,255,.03);
  border-radius: var(--radius2);
  padding:16px;
}
.contactTitle{color:var(--muted); font-weight:950; font-size:12px; letter-spacing:.2px}
.contactBig{font-weight:1000; font-size:16px; margin:8px 0 6px}
.tiny{font-size:12px}
.muted{color:var(--muted)}

.form{
  border:1px solid var(--line);
  background: rgba(255,255,255,.03);
  border-radius: var(--radius2);
  padding:18px;
}
.formRow{display:grid; grid-template-columns: 1fr 1fr; gap:12px}
label{display:flex; flex-direction:column; gap:6px; font-weight:950}
input, textarea, select{
  width:100%;
  padding:12px 12px;
  border-radius: 14px;
  border:1px solid rgba(255,255,255,.14);
  background: rgba(15,15,18,.55);
  color:var(--text);
  outline:none;
}
input:focus, textarea:focus, select:focus{border-color: rgba(255,214,231,.45)}
.formActions{display:flex; gap:10px; flex-wrap:wrap; margin-top:10px}
.formNote{margin:10px 0 0; color:var(--muted)}

.footer{
  padding:26px 0;
  border-top:1px solid var(--line);
}
.footerGrid{
  display:flex; justify-content:space-between; align-items:center;
  gap:14px; flex-wrap:wrap;
}
.brandFooter{font-weight:1000; margin-bottom:4px}
.footerLinks{display:flex; gap:12px}
.footerLinks a{color:var(--muted)}
.footerLinks a:hover{color:var(--text)}

@media (max-width: 980px){
  .heroGrid{grid-template-columns: 1fr}
  .menuGrid{grid-template-columns: 1fr 1fr}
  .eventsGrid{grid-template-columns: 1fr}
  .packageGrid{grid-template-columns: 1fr}
  .aboutGrid{grid-template-columns: 1fr}
  .contactCards{grid-template-columns: 1fr}
  h1{font-size:38px}
  .stripGrid{grid-template-columns: 1fr}
}

@media (max-width: 700px){
  .navLinks{
    position:fixed;
    top:64px; left:20px; right:20px;
    background: rgba(15,15,18,.92);
    border:1px solid var(--line);
    border-radius: 18px;
    padding:14px;
    display:none;
    flex-direction:column;
    align-items:stretch;
    gap:10px;
  }
  .navLinks.show{display:flex}
  .menuBtn{display:block}
  .menuGrid{grid-template-columns: 1fr}
  .formRow{grid-template-columns: 1fr}
}
