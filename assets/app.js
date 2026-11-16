(function(){
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
var sel='.tabs,.aud li,.sec h2,.sec>.wrap>.kick,.card,.news,.steps li,.person,.box,.vals li,.tr li,.ticks li,.nums li,.ab,.form,.cdata>div,.side,.tph';
var els=[].slice.call(document.querySelectorAll(sel));
els.forEach(function(e){e.classList.add('rv');var i=[].indexOf.call(e.parentNode.children,e);e.dataset.d=Math.min(i,8)*80;e.style.transitionDelay=e.dataset.d+'ms'});
function show(e){e.classList.add('in');setTimeout(function(){e.style.transitionDelay=''},900+ +e.dataset.d)}
if(rm||!('IntersectionObserver' in window)){els.forEach(show)}else{
  var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){show(x.target);io.unobserve(x.target)}})},{threshold:.12,rootMargin:'0px 0px -40px'});
  els.forEach(function(e){io.observe(e)})}
var top=document.querySelector('.top');
addEventListener('scroll',function(){top.classList.toggle('sc',scrollY>10)},{passive:true});
var r=document.getElementById('rot');
if(r&&!rm){var w=r.dataset.w.split('|'),i=0;setInterval(function(){r.classList.add('out');setTimeout(function(){i=(i+1)%w.length;r.textContent=w[i];r.classList.remove('out')},360)},2600)}
var hp=document.querySelector('.hp');
if(hp&&!rm&&matchMedia('(pointer:fine)').matches){addEventListener('mousemove',function(e){
  hp.style.setProperty('--px',(e.clientX/innerWidth-.5)*16+'px');hp.style.setProperty('--py',(e.clientY/innerHeight-.5)*16+'px')})}
})();
(function(){
var tb=[].slice.call(document.querySelectorAll('.tb')),tp=[].slice.call(document.querySelectorAll('.tp'));
function go(i){tb.forEach(function(b,j){b.classList.toggle('on',j===i);b.setAttribute('aria-selected',j===i?'true':'false')});
  tp.forEach(function(p,j){p.classList.toggle('on',j===i)})}
tb.forEach(function(b,i){b.addEventListener('click',function(){go(i)});
  b.addEventListener('keydown',function(e){var d=e.key==='ArrowDown'||e.key==='ArrowRight'?1:e.key==='ArrowUp'||e.key==='ArrowLeft'?-1:0;
    if(d){e.preventDefault();var n=(i+d+tb.length)%tb.length;go(n);tb[n].focus()}})});
})();
