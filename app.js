'use strict';
(() => {
 const data = window.RESORT_ACTIVITIES;
 const dates = [...new Set(data.activities.flatMap(a=>a.sessions.map(s=>s.date)))].sort();
 const tabs = document.querySelector('#dateTabs');
 const grid = document.querySelector('#activityGrid');
 const dayLabel = document.querySelector('#dayLabel');
 const dayName = date => new Intl.DateTimeFormat('en-GB',{weekday:'long',timeZone:'Europe/Paris'}).format(new Date(`${date}T12:00:00+01:00`));
 const longDate = date => new Intl.DateTimeFormat('en-GB',{weekday:'long',day:'numeric',month:'long',timeZone:'Europe/Paris'}).format(new Date(`${date}T12:00:00+01:00`));
 const today = new Intl.DateTimeFormat('sv-SE',{timeZone:data.timeZone,year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
 const initial = new URLSearchParams(location.search).get('day');
 let selected = dates.includes(initial) ? initial : dates.includes(today) ? today : dates.find(d=>d>=today) || dates[0];
 const clock = '<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
 const person = '<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="7" r="3"/><path d="M5 21v-3a7 7 0 0 1 14 0v3"/></svg>';
 function render(){
  tabs.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.date===selected)));
  dayLabel.textContent=longDate(selected);
  grid.replaceChildren();
  data.activities.forEach(activity=>{
   const session=activity.sessions.find(s=>s.date===selected);if(!session)return;
   const article=document.createElement('article');article.className='activity-card';article.dataset.id=activity.id;
   const photo=document.createElement('div');photo.className='photo-wrap';
   const img=document.createElement('img');img.src=activity.image;img.alt=activity.alt;img.loading='lazy';img.width=1600;img.height=1000;img.style.objectPosition=activity.imagePosition;photo.append(img);
   const time=document.createElement('span');time.className='time';time.textContent=activity.id==='gym'?`Open from ${session.start}–${session.end}`:session.end?`${session.start}–${session.end}`:session.start;photo.append(time);
   if(activity.confirmation){const badge=document.createElement('span');badge.className='confirmation-badge';badge.textContent=activity.confirmation;photo.append(badge);}
   article.append(photo);
   const body=document.createElement('div');body.className='card-body';
   [['p','category',activity.category],['h3','',activity.title],['p','tagline',activity.tagline],['p','description',activity.description]].forEach(([tag,cls,text])=>{const el=document.createElement(tag);el.className=cls;el.textContent=text;body.append(el)});
   const detail=document.createElement('div');detail.className='card-detail';detail.innerHTML=activity.id==='stretching'?person:clock;
   const detailText=document.createElement('span');detailText.textContent=activity.id==='stretching'?'With your Fitness G.O':activity.id==='gym'?`Fitness Room · Open ${session.start}–${session.end}`:`${longDate(selected)} · ${session.start}–${session.end}`;if(activity.id==='gym'){
    detailText.textContent='';
    const locationLabel=document.createElement('strong');
    locationLabel.textContent='Fitness Room';
    detailText.append(locationLabel,document.createTextNode(` · Open ${session.start}–${session.end}`));
    detail.innerHTML='<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>';
   }
   detail.append(detailText);body.append(detail);article.append(body);grid.append(article);
  });
 }
 dates.forEach(date=>{const b=document.createElement('button');b.className='date-tab';b.type='button';b.dataset.date=date;b.setAttribute('aria-controls','activityGrid');b.setAttribute('aria-label',longDate(date)+' 2026');
  [['span',dayName(date)],['strong',String(Number(date.slice(-2)))],['small','NOVEMBER']].forEach(([tag,text])=>{const e=document.createElement(tag);e.textContent=text;b.append(e)});
  b.addEventListener('click',()=>{selected=date;const url=new URL(location.href);url.searchParams.set('day',date);history.replaceState({},'',url);render()});tabs.append(b);
 });
 render();
})();
