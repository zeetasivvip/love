import {rooms} from './data.js';

export const steps = rooms.map(room => room[0]);
export const tasks = {
  garden: ['Baca satu pesan untukmu.', 'Aku sudah membaca'],
  library: ['Buka dan baca satu cerita, lalu tandai selesai di akhir cerita.'],
  poetry: ['Baca satu puisi di taman ini.', 'Aku sudah membaca'],
  happiness: ['Centang tiga hal kecil untuk hari ini.'],
  comfort: ['Luangkan waktu untuk bernapas dengan tenang.', 'Aku sudah mengambil jeda'],
  playground: ['Menangkan satu permainan untuk melanjutkan.'],
  kingdom: ['Menangkan satu permainan di kerajaan ini.'],
  magical: ['Buka satu kejutan ajaib.'],
  storyland: ['Selesaikan satu petualangan sampai akhir.'],
  music: ['Putar satu lagu yang ingin kamu dengarkan.'],
  daily: ['Centang tiga hal kecil untuk hari ini.'],
  secret: ['Buka hadiah pertamamu.'],
  surprise: ['Buka satu kejutan untukmu.'],
  castle: ['Tulis dan simpan satu harapan.'],
  final: ['Baca surat terakhir untukmu.', 'Aku sudah membaca']
};
export function normalizeProgress(value){
  const completed=Number.isInteger(value?.completed)?Math.max(0,Math.min(steps.length,value.completed)):0;
  return {completed,ready:completed<steps.length&&value?.ready===true};
}
export function stepForRoute(route,completed){
  if(route==='read'||route==='reader')return 'library';
  if(route==='game')return completed===steps.indexOf('kingdom')?'kingdom':'playground';
  if(route==='story-adventure')return 'storyland';
  return steps.includes(route)?route:null;
}
export function canVisit(route,completed){
  if(['','welcome','home'].includes(route))return true;
  if(route==='chapters')return completed>=steps.length;
  const step=stepForRoute(route,completed);
  return step!==null&&steps.indexOf(step)<=completed;
}
