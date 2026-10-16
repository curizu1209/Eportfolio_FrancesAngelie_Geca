/* =====================================================================
   CERTIFICATE SETTINGS  (paste your Google Drive link here)
   ---------------------------------------------------------------------
   In Google Drive: right-click your certificate > Share > set access to
   "Anyone with the link" > Copy link > paste it between the quotes below.
   ===================================================================== */
var CERTIFICATE = {
  title:  "Hospitality Management Certificate",
  issuer: "Our lady of Fatima University",
  date:   "August 2025",
  link:   "https://drive.google.com/drive/folders/1dGT-FSOPgGvgV9Qa3QMQ0L1Sm2NUI08p?usp=sharing"    // <-- PASTE YOUR GOOGLE DRIVE LINK HERE
};
/* ===================================================================== */

(function(){
  var btn=document.getElementById('certBtn'), status=document.getElementById('certStatus');
  document.getElementById('certTitle').textContent=CERTIFICATE.title;
  document.getElementById('certMeta').textContent=CERTIFICATE.issuer+' · '+CERTIFICATE.date;
  document.getElementById('yr').textContent=new Date().getFullYear();

  if(CERTIFICATE.link){ btn.href=CERTIFICATE.link; }
  else{
    btn.addEventListener('click',function(e){
      e.preventDefault();
      status.textContent='Add your Google Drive link in CERTIFICATE.link in the code.';
    });
  }

  /* Navigation */
  var links=[].slice.call(document.querySelectorAll('.nav a.link')), mb=document.querySelector('.menu-btn'), menu=document.getElementById('menu');
  mb.addEventListener('click',function(){var o=menu.classList.toggle('open');mb.setAttribute('aria-expanded',o);});
  links.forEach(function(a){a.addEventListener('click',function(){menu.classList.remove('open');mb.setAttribute('aria-expanded','false');});});
  var secs=links.map(function(a){return document.querySelector(a.getAttribute('href'));});
  function setActive(){var y=window.scrollY+130,c=0;secs.forEach(function(s,i){if(s.offsetTop<=y)c=i;});links.forEach(function(a,i){a.classList.toggle('active',i===c);});}
  window.addEventListener('scroll',setActive,{passive:true});setActive();
})();
