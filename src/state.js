export const read=(key,fallback)=>{try{return JSON.parse(localStorage.getItem('little-'+key))??fallback}catch{return fallback}};
export const save=(key,value)=>{try{localStorage.setItem('little-'+key,JSON.stringify(value))}catch{}};
export const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const toast=s=>{document.querySelector('#toast').textContent=s;document.querySelector('#toast').classList.add('show');setTimeout(()=>document.querySelector('#toast').classList.remove('show'),3200)};
export const pick=a=>a[Math.floor(Math.random()*a.length)];
export const confetti=()=>{for(let i=0;i<35;i++){const s=document.createElement('span');s.className='confetti';s.textContent=pick(['✦','♥','✧']);s.style.cssText=`left:${Math.random()*100}vw;color:${pick(['#eac7ff','#ffc7d5','#f3d894'])};animation-delay:${Math.random()}s`;document.body.append(s);setTimeout(()=>s.remove(),3000)}};
