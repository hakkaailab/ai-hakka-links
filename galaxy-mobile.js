(() => {
  const graph=document.querySelector('#ecosystem .galaxy');
  if(!graph)return;
  const view=document.createElement('div');view.className='eco-map-window';view.setAttribute('aria-label','星系圖，可拖曳及雙指縮放');graph.before(view);view.append(graph);
  const tools=document.createElement('div');tools.className='eco-map-controls';tools.innerHTML='<span>拖曳探索 · 雙指縮放</span><div><button type="button" data-zoom="out" aria-label="縮小星系圖">−</button><button type="button" data-zoom="fit" aria-label="顯示完整星系圖">全圖</button><button type="button" data-zoom="in" aria-label="放大星系圖">＋</button></div>';view.after(tools);
  const mobile=matchMedia('(max-width:700px)');let scale=1,fit=1,x=0,y=0,lastWidth=0;const points=new Map();let moved=false,blockedUntil=0,lastPoint=null,pinch=null;
  function draw(){
    if(!mobile.matches)return;
    const w=view.clientWidth,h=view.clientHeight;
    x=1000*scale<=w?(w-1000*scale)/2:Math.max(w-1000*scale,Math.min(0,x));
    y=720*scale<=h?(h-720*scale)/2:Math.max(h-720*scale,Math.min(0,y));
    graph.style.transform=`translate(${x}px,${y}px) scale(${scale})`;
    tools.querySelector('[data-zoom="out"]').disabled=scale<=fit+.001;
    tools.querySelector('[data-zoom="in"]').disabled=scale>=1.5;
  }
  function reset(){
    points.clear();pinch=null;lastPoint=null;
    if(!mobile.matches){graph.style.transform='';lastWidth=0;return;}
    lastWidth=view.clientWidth;fit=lastWidth/1000;scale=fit;x=0;y=(view.clientHeight-720*scale)/2;draw();
  }
  function zoom(next,cx=view.clientWidth/2,cy=view.clientHeight/2){const old=scale;scale=Math.max(fit,Math.min(1.5,next));x=cx-(cx-x)*scale/old;y=cy-(cy-y)*scale/old;draw();}
  tools.addEventListener('click',event=>{const b=event.target.closest('button');if(!b)return;const k=b.dataset.zoom;if(k==='fit')reset();else zoom(scale*(k==='in'?1.5:1/1.5));});
  function center(){const ps=[...points.values()];return{x:(ps[0].x+ps[1].x)/2,y:(ps[0].y+ps[1].y)/2,d:Math.hypot(ps[0].x-ps[1].x,ps[0].y-ps[1].y)};}
  view.addEventListener('pointerdown',e=>{if(!mobile.matches)return;const r=view.getBoundingClientRect();points.set(e.pointerId,{x:e.clientX-r.left,y:e.clientY-r.top});if(points.size===1){moved=false;lastPoint=points.get(e.pointerId);}else if(points.size===2){pinch={...center(),scale,tx:x,ty:y};moved=true;}});
  view.addEventListener('pointermove',e=>{
    if(!points.has(e.pointerId)||!mobile.matches)return;const r=view.getBoundingClientRect();const p={x:e.clientX-r.left,y:e.clientY-r.top};points.set(e.pointerId,p);
    if(points.size>=2&&pinch){const c=center();const next=Math.max(fit,Math.min(1.5,pinch.scale*c.d/Math.max(1,pinch.d)));scale=next;const base=pinch; x=c.x-(base.x-base.tx)*scale/base.scale;y=c.y-(base.y-base.ty)*scale/base.scale;draw();moved=true;}
    else if(lastPoint){const dx=p.x-lastPoint.x,dy=p.y-lastPoint.y;if(moved||Math.hypot(dx,dy)>5){x+=dx;y+=dy;lastPoint=p;moved=true;draw();}}
    if(moved){e.preventDefault();if(!view.hasPointerCapture(e.pointerId))view.setPointerCapture(e.pointerId);}
  });
  function end(e){if(!points.has(e.pointerId))return;points.delete(e.pointerId);if(moved)blockedUntil=performance.now()+300;pinch=null;lastPoint=points.size?[...points.values()][0]:null;if(view.hasPointerCapture(e.pointerId))view.releasePointerCapture(e.pointerId);}
  view.addEventListener('pointerup',end);view.addEventListener('pointercancel',end);
  view.addEventListener('click',e=>{if(mobile.matches&&performance.now()<blockedUntil){e.preventDefault();e.stopImmediatePropagation();}},true);
  mobile.addEventListener('change',reset);new ResizeObserver(()=>{if(mobile.matches&&view.clientWidth!==lastWidth)reset();}).observe(view);reset();
})();
