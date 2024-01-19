(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const za="160",Ci={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fd=0,vl=1,Bd=2,nh=1,Gd=2,On=3,ti=0,jt=1,Tn=2,$n=0,nr=1,Sl=2,xl=3,Ml=4,zd=5,hi=100,Hd=101,Vd=102,yl=103,Tl=104,kd=200,Wd=201,Xd=202,qd=203,ma=204,ga=205,Yd=206,jd=207,Zd=208,$d=209,Kd=210,Qd=211,Jd=212,ef=213,tf=214,nf=0,rf=1,sf=2,Ys=3,of=4,af=5,lf=6,cf=7,Ha=0,uf=1,hf=2,Kn=0,df=1,ff=2,pf=3,mf=4,gf=5,_f=6,ih=300,ar=301,lr=302,_a=303,Ea=304,ro=306,va=1e3,mn=1001,Sa=1002,Wt=1003,bl=1004,bo=1005,on=1006,Ef=1007,zr=1008,Qn=1009,vf=1010,Sf=1011,Va=1012,rh=1013,jn=1014,Zn=1015,Hr=1016,sh=1017,oh=1018,_i=1020,xf=1021,gn=1023,Mf=1024,yf=1025,Ei=1026,cr=1027,Tf=1028,ah=1029,bf=1030,lh=1031,ch=1033,Ao=33776,Ro=33777,wo=33778,Io=33779,Al=35840,Rl=35841,wl=35842,Il=35843,uh=36196,Pl=37492,Cl=37496,Ll=37808,Dl=37809,Ol=37810,Nl=37811,Ul=37812,Fl=37813,Bl=37814,Gl=37815,zl=37816,Hl=37817,Vl=37818,kl=37819,Wl=37820,Xl=37821,Po=36492,ql=36494,Yl=36495,Af=36283,jl=36284,Zl=36285,$l=36286,hh=3e3,vi=3001,Rf=3200,wf=3201,ka=0,If=1,ln="",Lt="srgb",Un="srgb-linear",Wa="display-p3",so="display-p3-linear",js="linear",st="srgb",Zs="rec709",$s="p3",Di=7680,Kl=519,Pf=512,Cf=513,Lf=514,dh=515,Df=516,Of=517,Nf=518,Uf=519,Ql=35044,Jl="300 es",xa=1035,Nn=2e3,Ks=2001;class Ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ec=1234567;const Cr=Math.PI/180,Vr=180/Math.PI;function Ri(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function wt(n,e,t){return Math.max(e,Math.min(t,n))}function Xa(n,e){return(n%e+e)%e}function Ff(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Bf(n,e,t){return n!==e?(t-n)/(e-n):0}function Lr(n,e,t){return(1-t)*n+t*e}function Gf(n,e,t,i){return Lr(n,e,1-Math.exp(-t*i))}function zf(n,e=1){return e-Math.abs(Xa(n,e*2)-e)}function Hf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Vf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function kf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Wf(n,e){return n+Math.random()*(e-n)}function Xf(n){return n*(.5-Math.random())}function qf(n){n!==void 0&&(ec=n);let e=ec+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yf(n){return n*Cr}function jf(n){return n*Vr}function Ma(n){return(n&n-1)===0&&n!==0}function Zf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Qs(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function $f(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Dr={DEG2RAD:Cr,RAD2DEG:Vr,generateUUID:Ri,clamp:wt,euclideanModulo:Xa,mapLinear:Ff,inverseLerp:Bf,lerp:Lr,damp:Gf,pingpong:zf,smoothstep:Hf,smootherstep:Vf,randInt:kf,randFloat:Wf,randFloatSpread:Xf,seededRandom:qf,degToRad:Yf,radToDeg:jf,isPowerOfTwo:Ma,ceilPowerOfTwo:Zf,floorPowerOfTwo:Qs,setQuaternionFromProperEuler:$f,normalize:Vt,denormalize:Zi};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,r,s,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],_=r[0],m=r[3],f=r[6],v=r[1],E=r[4],S=r[7],I=r[2],T=r[5],R=r[8];return s[0]=o*_+a*v+l*I,s[3]=o*m+a*E+l*T,s[6]=o*f+a*S+l*R,s[1]=c*_+u*v+h*I,s[4]=c*m+u*E+h*T,s[7]=c*f+u*S+h*R,s[2]=d*_+p*v+g*I,s[5]=d*m+p*E+g*T,s[8]=d*f+p*S+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=t*h+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Co.makeScale(e,t)),this}rotate(e){return this.premultiply(Co.makeRotation(-e)),this}translate(e,t){return this.premultiply(Co.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Co=new Ze;function fh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Js(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kf(){const n=Js("canvas");return n.style.display="block",n}const tc={};function Or(n){n in tc||(tc[n]=!0,console.warn(n))}const nc=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ic=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),es={[Un]:{transfer:js,primaries:Zs,toReference:n=>n,fromReference:n=>n},[Lt]:{transfer:st,primaries:Zs,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[so]:{transfer:js,primaries:$s,toReference:n=>n.applyMatrix3(ic),fromReference:n=>n.applyMatrix3(nc)},[Wa]:{transfer:st,primaries:$s,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ic),fromReference:n=>n.applyMatrix3(nc).convertLinearToSRGB()}},Qf=new Set([Un,so]),tt={enabled:!0,_workingColorSpace:Un,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Qf.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=es[e].toReference,r=es[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return es[n].primaries},getTransfer:function(n){return n===ln?js:es[n].transfer}};function ir(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Lo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Oi;class ph{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Oi===void 0&&(Oi=Js("canvas")),Oi.width=e.width,Oi.height=e.height;const i=Oi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Js("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ir(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ir(t[i]/255)*255):t[i]=ir(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jf=0;class mh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Ri(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Do(r[o].image)):s.push(Do(r[o]))}else s=Do(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Do(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ph.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ep=0;class Jt extends Ai{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,i=mn,r=mn,s=on,o=zr,a=gn,l=Qn,c=Jt.DEFAULT_ANISOTROPY,u=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Ri(),this.name="",this.source=new mh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===vi?Lt:ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ih)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case va:e.x=e.x-Math.floor(e.x);break;case mn:e.x=e.x<0?0:1;break;case Sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case va:e.y=e.y-Math.floor(e.y);break;case mn:e.y=e.y<0?0:1;break;case Sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Lt?vi:hh}set encoding(e){Or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===vi?Lt:ln}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=ih;Jt.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,i=0,r=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,S=(p+1)/2,I=(f+1)/2,T=(u+d)/4,R=(h+_)/4,D=(g+m)/4;return E>S&&E>I?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=T/i,s=R/i):S>I?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=D/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=R/s,r=D/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tp extends Ai{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Or("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===vi?Lt:ln),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends tp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class gh extends Jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class np extends Jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dt{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==p||u!==g){let m=1-a;const f=l*d+c*p+u*g+h*_,v=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const I=Math.sqrt(E),T=Math.atan2(I,f*v);m=Math.sin(m*T)/I,a=Math.sin(a*T)/I}const S=a*v;if(l=l*m+d*S,c=c*m+p*S,u=u*m+g*S,h=h*m+_*S,m===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-a*p,e[t+2]=c*g+u*p+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,i=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Oo.copy(this).projectOnVector(e),this.sub(Oo)}reflect(e){return this.sub(Oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oo=new C,rc=new Dt;class Gn{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,un):un.fromBufferAttribute(s,o),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ts.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ts.copy(i.boundingBox)),ts.applyMatrix4(e.matrixWorld),this.union(ts)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),ns.subVectors(this.max,gr),Ni.subVectors(e.a,gr),Ui.subVectors(e.b,gr),Fi.subVectors(e.c,gr),zn.subVectors(Ui,Ni),Hn.subVectors(Fi,Ui),ri.subVectors(Ni,Fi);let t=[0,-zn.z,zn.y,0,-Hn.z,Hn.y,0,-ri.z,ri.y,zn.z,0,-zn.x,Hn.z,0,-Hn.x,ri.z,0,-ri.x,-zn.y,zn.x,0,-Hn.y,Hn.x,0,-ri.y,ri.x,0];return!No(t,Ni,Ui,Fi,ns)||(t=[1,0,0,0,1,0,0,0,1],!No(t,Ni,Ui,Fi,ns))?!1:(is.crossVectors(zn,Hn),t=[is.x,is.y,is.z],No(t,Ni,Ui,Fi,ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wn=[new C,new C,new C,new C,new C,new C,new C,new C],un=new C,ts=new Gn,Ni=new C,Ui=new C,Fi=new C,zn=new C,Hn=new C,ri=new C,gr=new C,ns=new C,is=new C,si=new C;function No(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){si.fromArray(n,s);const a=r.x*Math.abs(si.x)+r.y*Math.abs(si.y)+r.z*Math.abs(si.z),l=e.dot(si),c=t.dot(si),u=i.dot(si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ip=new Gn,_r=new C,Uo=new C;class oo{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ip.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);const t=_r.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(_r,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(Uo)),this.expandByPoint(_r.copy(e.center).sub(Uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new C,Fo=new C,rs=new C,Vn=new C,Bo=new C,ss=new C,Go=new C;class ao{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Fo.copy(e).add(t).multiplyScalar(.5),rs.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(Fo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(rs),a=Vn.dot(this.direction),l=-Vn.dot(rs),c=Vn.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Fo).addScaledVector(rs,d),p}intersectSphere(e,t){In.subVectors(e.center,this.origin);const i=In.dot(this.direction),r=In.dot(In)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,i,r,s){Bo.subVectors(t,e),ss.subVectors(i,e),Go.crossVectors(Bo,ss);let o=this.direction.dot(Go),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,e);const l=a*this.direction.dot(ss.crossVectors(Vn,ss));if(l<0)return null;const c=a*this.direction.dot(Bo.cross(Vn));if(c<0||l+c>o)return null;const u=-a*Vn.dot(Go);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,i,r,s,o,a,l,c,u,h,d,p,g,_,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,d,p,g,_,m)}set(e,t,i,r,s,o,a,l,c,u,h,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Bi.setFromMatrixColumn(e,0).length(),s=1/Bi.setFromMatrixColumn(e,1).length(),o=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rp,e,sp)}lookAt(e,t,i){const r=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),kn.crossVectors(i,$t),kn.lengthSq()===0&&(Math.abs(i.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),kn.crossVectors(i,$t)),kn.normalize(),os.crossVectors($t,kn),r[0]=kn.x,r[4]=os.x,r[8]=$t.x,r[1]=kn.y,r[5]=os.y,r[9]=$t.y,r[2]=kn.z,r[6]=os.z,r[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],v=i[3],E=i[7],S=i[11],I=i[15],T=r[0],R=r[4],D=r[8],x=r[12],y=r[1],N=r[5],z=r[9],$=r[13],w=r[2],F=r[6],P=r[10],B=r[14],H=r[3],G=r[7],X=r[11],Z=r[15];return s[0]=o*T+a*y+l*w+c*H,s[4]=o*R+a*N+l*F+c*G,s[8]=o*D+a*z+l*P+c*X,s[12]=o*x+a*$+l*B+c*Z,s[1]=u*T+h*y+d*w+p*H,s[5]=u*R+h*N+d*F+p*G,s[9]=u*D+h*z+d*P+p*X,s[13]=u*x+h*$+d*B+p*Z,s[2]=g*T+_*y+m*w+f*H,s[6]=g*R+_*N+m*F+f*G,s[10]=g*D+_*z+m*P+f*X,s[14]=g*x+_*$+m*B+f*Z,s[3]=v*T+E*y+S*w+I*H,s[7]=v*R+E*N+S*F+I*G,s[11]=v*D+E*z+S*P+I*X,s[15]=v*x+E*$+S*B+I*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*p-i*l*p)+_*(+t*l*p-t*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-t*l*h+t*a*d+r*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],v=h*m*c-_*d*c+_*l*p-a*m*p-h*l*f+a*d*f,E=g*d*c-u*m*c-g*l*p+o*m*p+u*l*f-o*d*f,S=u*_*c-g*h*c+g*a*p-o*_*p-u*a*f+o*h*f,I=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,T=t*v+i*E+r*S+s*I;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=v*R,e[1]=(_*d*s-h*m*s-_*r*p+i*m*p+h*r*f-i*d*f)*R,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*f+i*l*f)*R,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*p-i*l*p)*R,e[4]=E*R,e[5]=(u*m*s-g*d*s+g*r*p-t*m*p-u*r*f+t*d*f)*R,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*f-t*l*f)*R,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*p+t*l*p)*R,e[8]=S*R,e[9]=(g*h*s-u*_*s-g*i*p+t*_*p+u*i*f-t*h*f)*R,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*f+t*a*f)*R,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*p-t*a*p)*R,e[12]=I*R,e[13]=(u*_*r-g*h*r+g*i*d-t*_*d-u*i*m+t*h*m)*R,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*R,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*d+t*a*d)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,g=s*h,_=o*u,m=o*h,f=a*h,v=l*c,E=l*u,S=l*h,I=i.x,T=i.y,R=i.z;return r[0]=(1-(_+f))*I,r[1]=(p+S)*I,r[2]=(g-E)*I,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(d+f))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(g+E)*R,r[9]=(m-v)*R,r[10]=(1-(d+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Bi.set(r[0],r[1],r[2]).length();const o=Bi.set(r[4],r[5],r[6]).length(),a=Bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],hn.copy(this);const c=1/s,u=1/o,h=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=h,hn.elements[9]*=h,hn.elements[10]*=h,t.setFromRotationMatrix(hn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Nn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let p,g;if(a===Nn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ks)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Nn){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),d=(t+e)*c,p=(i+r)*u;let g,_;if(a===Nn)g=(o+s)*h,_=-2*h;else if(a===Ks)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Bi=new C,hn=new pt,rp=new C(0,0,0),sp=new C(1,1,1),kn=new C,os=new C,$t=new C,sc=new pt,oc=new Dt;class Yr{constructor(e=0,t=0,i=0,r=Yr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oc.setFromEuler(this),this.setFromQuaternion(oc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yr.DEFAULT_ORDER="XYZ";class qa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let op=0;const ac=new C,Gi=new Dt,Pn=new pt,as=new C,Er=new C,ap=new C,lp=new Dt,lc=new C(1,0,0),cc=new C(0,1,0),uc=new C(0,0,1),cp={type:"added"},up={type:"removed"};class xt extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new C,t=new Yr,i=new Dt,r=new C(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ze}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.premultiply(Gi),this}rotateX(e){return this.rotateOnAxis(lc,e)}rotateY(e){return this.rotateOnAxis(cc,e)}rotateZ(e){return this.rotateOnAxis(uc,e)}translateOnAxis(e,t){return ac.copy(e).applyQuaternion(this.quaternion),this.position.add(ac.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lc,e)}translateY(e){return this.translateOnAxis(cc,e)}translateZ(e){return this.translateOnAxis(uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?as.copy(e):as.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Er,as,this.up):Pn.lookAt(as,Er,this.up),this.quaternion.setFromRotationMatrix(Pn),r&&(Pn.extractRotation(r.matrixWorld),Gi.setFromRotationMatrix(Pn),this.quaternion.premultiply(Gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(cp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(up)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,e,ap),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,lp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}xt.DEFAULT_UP=new C(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new C,Cn=new C,zo=new C,Ln=new C,zi=new C,Hi=new C,hc=new C,Ho=new C,Vo=new C,ko=new C;let ls=!1;class pn{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),dn.subVectors(e,t),r.cross(dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){dn.subVectors(r,t),Cn.subVectors(i,t),zo.subVectors(e,t);const o=dn.dot(dn),a=dn.dot(Cn),l=dn.dot(zo),c=Cn.dot(Cn),u=Cn.dot(zo),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getUV(e,t,i,r,s,o,a,l){return ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ls=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(a,Ln.z),l)}static isFrontFacing(e,t,i,r){return dn.subVectors(i,t),Cn.subVectors(e,t),dn.cross(Cn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),dn.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ls=!0),pn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return pn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;zi.subVectors(r,i),Hi.subVectors(s,i),Ho.subVectors(e,i);const l=zi.dot(Ho),c=Hi.dot(Ho);if(l<=0&&c<=0)return t.copy(i);Vo.subVectors(e,r);const u=zi.dot(Vo),h=Hi.dot(Vo);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(zi,o);ko.subVectors(e,s);const p=zi.dot(ko),g=Hi.dot(ko);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Hi,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return hc.subVectors(s,r),a=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(hc,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(i).addScaledVector(zi,o).addScaledVector(Hi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},cs={h:0,s:0,l:0};function Wo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=Xa(e,1),t=wt(t,0,1),i=wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Wo(o,s,e+1/3),this.g=Wo(o,s,e),this.b=Wo(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,t=Lt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){const i=_h[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return tt.fromWorkingColorSpace(Ft.copy(this),e),Math.round(wt(Ft.r*255,0,255))*65536+Math.round(wt(Ft.g*255,0,255))*256+Math.round(wt(Ft.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Ft.copy(this),t);const i=Ft.r,r=Ft.g,s=Ft.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Lt){tt.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,i=Ft.g,r=Ft.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(cs);const i=Lr(Wn.h,cs.h,t),r=Lr(Wn.s,cs.s,t),s=Lr(Wn.l,cs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ve;Ve.NAMES=_h;let hp=0;class wi extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=nr,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ma,this.blendDst=ga,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(i.blending=this.blending),this.side!==ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ma&&(i.blendSrc=this.blendSrc),this.blendDst!==ga&&(i.blendDst=this.blendDst),this.blendEquation!==hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jr extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new C,us=new ue;class vn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ql,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)us.fromBufferAttribute(this,t),us.applyMatrix3(e),this.setXY(t,us.x,us.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Zi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ql&&(e.usage=this.usage),e}}class Eh extends vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vh extends vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class et extends vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let dp=0;const tn=new pt,Xo=new xt,Vi=new C,Kt=new Gn,vr=new Gn,At=new C;class Pt extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fh(e)?vh:Eh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,i){return tn.makeTranslation(e,t,i),this.applyMatrix4(tn),this}scale(e,t,i){return tn.makeScale(e,t,i),this.applyMatrix4(tn),this}lookAt(e){return Xo.lookAt(e),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const i=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(Kt.min,vr.min),Kt.expandByPoint(At),At.addVectors(Kt.max,vr.max),Kt.expandByPoint(At)):(Kt.expandByPoint(vr.min),Kt.expandByPoint(vr.max))}Kt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)At.fromBufferAttribute(a,c),l&&(Vi.fromBufferAttribute(e,c),At.add(Vi)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let y=0;y<a;y++)c[y]=new C,u[y]=new C;const h=new C,d=new C,p=new C,g=new ue,_=new ue,m=new ue,f=new C,v=new C;function E(y,N,z){h.fromArray(r,y*3),d.fromArray(r,N*3),p.fromArray(r,z*3),g.fromArray(o,y*2),_.fromArray(o,N*2),m.fromArray(o,z*2),d.sub(h),p.sub(h),_.sub(g),m.sub(g);const $=1/(_.x*m.y-m.x*_.y);isFinite($)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar($),v.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar($),c[y].add(f),c[N].add(f),c[z].add(f),u[y].add(v),u[N].add(v),u[z].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let y=0,N=S.length;y<N;++y){const z=S[y],$=z.start,w=z.count;for(let F=$,P=$+w;F<P;F+=3)E(i[F+0],i[F+1],i[F+2])}const I=new C,T=new C,R=new C,D=new C;function x(y){R.fromArray(s,y*3),D.copy(R);const N=c[y];I.copy(N),I.sub(R.multiplyScalar(R.dot(N))).normalize(),T.crossVectors(D,N);const $=T.dot(u[y])<0?-1:1;l[y*4]=I.x,l[y*4+1]=I.y,l[y*4+2]=I.z,l[y*4+3]=$}for(let y=0,N=S.length;y<N;++y){const z=S[y],$=z.start,w=z.count;for(let F=$,P=$+w;F<P;F+=3)x(i[F+0]),x(i[F+1]),x(i[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new C,s=new C,o=new C,a=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new vn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dc=new pt,oi=new ao,hs=new oo,fc=new C,ki=new C,Wi=new C,Xi=new C,qo=new C,ds=new C,fs=new ue,ps=new ue,ms=new ue,pc=new C,mc=new C,gc=new C,gs=new C,_s=new C;class ve extends xt{constructor(e=new Pt,t=new jr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ds.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(qo.fromBufferAttribute(h,e),o?ds.addScaledVector(qo,u):ds.addScaledVector(qo.sub(t),u))}t.add(ds)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hs.copy(i.boundingSphere),hs.applyMatrix4(s),oi.copy(e.ray).recast(e.near),!(hs.containsPoint(oi.origin)===!1&&(oi.intersectSphere(hs,fc)===null||oi.origin.distanceToSquared(fc)>(e.far-e.near)**2))&&(dc.copy(s).invert(),oi.copy(e.ray).applyMatrix4(dc),!(i.boundingBox!==null&&oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,oi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,I=E;S<I;S+=3){const T=a.getX(S),R=a.getX(S+1),D=a.getX(S+2);r=Es(this,f,e,i,c,u,h,T,R,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=a.getX(m),E=a.getX(m+1),S=a.getX(m+2);r=Es(this,o,e,i,c,u,h,v,E,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,I=E;S<I;S+=3){const T=S,R=S+1,D=S+2;r=Es(this,f,e,i,c,u,h,T,R,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=m,E=m+1,S=m+2;r=Es(this,o,e,i,c,u,h,v,E,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function fp(n,e,t,i,r,s,o,a){let l;if(e.side===jt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ti,a),l===null)return null;_s.copy(a),_s.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(_s);return c<t.near||c>t.far?null:{distance:c,point:_s.clone(),object:n}}function Es(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ki),n.getVertexPosition(l,Wi),n.getVertexPosition(c,Xi);const u=fp(n,e,t,i,ki,Wi,Xi,gs);if(u){r&&(fs.fromBufferAttribute(r,a),ps.fromBufferAttribute(r,l),ms.fromBufferAttribute(r,c),u.uv=pn.getInterpolation(gs,ki,Wi,Xi,fs,ps,ms,new ue)),s&&(fs.fromBufferAttribute(s,a),ps.fromBufferAttribute(s,l),ms.fromBufferAttribute(s,c),u.uv1=pn.getInterpolation(gs,ki,Wi,Xi,fs,ps,ms,new ue),u.uv2=u.uv1),o&&(pc.fromBufferAttribute(o,a),mc.fromBufferAttribute(o,l),gc.fromBufferAttribute(o,c),u.normal=pn.getInterpolation(gs,ki,Wi,Xi,pc,mc,gc,new C),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new C,materialIndex:0};pn.getNormal(ki,Wi,Xi,h.normal),u.face=h}return u}class ut extends Pt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(h,2));function g(_,m,f,v,E,S,I,T,R,D,x){const y=S/R,N=I/D,z=S/2,$=I/2,w=T/2,F=R+1,P=D+1;let B=0,H=0;const G=new C;for(let X=0;X<P;X++){const Z=X*N-$;for(let oe=0;oe<F;oe++){const j=oe*y-z;G[_]=j*v,G[m]=Z*E,G[f]=w,c.push(G.x,G.y,G.z),G[_]=0,G[m]=0,G[f]=T>0?1:-1,u.push(G.x,G.y,G.z),h.push(oe/R),h.push(1-X/D),B+=1}}for(let X=0;X<D;X++)for(let Z=0;Z<R;Z++){const oe=d+Z+F*X,j=d+Z+F*(X+1),J=d+(Z+1)+F*(X+1),Se=d+(Z+1)+F*X;l.push(oe,j,Se),l.push(j,J,Se),H+=6}a.addGroup(p,H,x),p+=H,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ur(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function kt(n){const e={};for(let t=0;t<n.length;t++){const i=ur(n[t]);for(const r in i)e[r]=i[r]}return e}function pp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Sh(n){return n.getRenderTarget()===null?n.outputColorSpace:tt.workingColorSpace}const mp={clone:ur,merge:kt};var gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_p=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gp,this.fragmentShader=_p,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ur(e.uniforms),this.uniformsGroups=pp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class xh extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Nn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class an extends xh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qi=-90,Yi=1;class Ep extends xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(qi,Yi,e,t);r.layers=this.layers,this.add(r);const s=new an(qi,Yi,e,t);s.layers=this.layers,this.add(s);const o=new an(qi,Yi,e,t);o.layers=this.layers,this.add(o);const a=new an(qi,Yi,e,t);a.layers=this.layers,this.add(a);const l=new an(qi,Yi,e,t);l.layers=this.layers,this.add(l);const c=new an(qi,Yi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Nn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Mh extends Jt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ar,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vp extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Or("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===vi?Lt:ln),this.texture=new Mh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ut(5,5,5),s=new Ti({name:"CubemapFromEquirect",uniforms:ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:$n});s.uniforms.tEquirect.value=t;const o=new ve(r,s),a=t.minFilter;return t.minFilter===zr&&(t.minFilter=on),new Ep(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Yo=new C,Sp=new C,xp=new Ze;class Yn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Yo.subVectors(i,t).cross(Sp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Yo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||xp.getNormalMatrix(e),r=this.coplanarPoint(Yo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new oo,vs=new C;class yh{constructor(e=new Yn,t=new Yn,i=new Yn,r=new Yn,s=new Yn,o=new Yn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Nn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],f=r[12],v=r[13],E=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,m-p,S-f).normalize(),i[1].setComponents(l+s,d+c,m+p,S+f).normalize(),i[2].setComponents(l+o,d+u,m+g,S+v).normalize(),i[3].setComponents(l-o,d-u,m-g,S-v).normalize(),i[4].setComponents(l-a,d-h,m-_,S-E).normalize(),t===Nn)i[5].setComponents(l+a,d+h,m+_,S+E).normalize();else if(t===Ks)i[5].setComponents(a,h,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(e){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(vs.x=r.normal.x>0?e.max.x:e.min.x,vs.y=r.normal.y>0?e.max.y:e.min.y,vs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Th(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Mp(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,d=c.usage,p=h.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,h){const d=u.array,p=u._updateRange,g=u.updateRanges;if(n.bindBuffer(h,c),p.count===-1&&g.length===0&&n.bufferSubData(h,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const f=g[_];t?n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class lo extends Pt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const v=f*d-o;for(let E=0;E<c;E++){const S=E*h-s;g.push(S,-v,0),_.push(0,0,1),m.push(E/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const E=v+c*f,S=v+c*(f+1),I=v+1+c*(f+1),T=v+1+c*f;p.push(E,S,T),p.push(S,I,T)}this.setIndex(p),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.width,e.height,e.widthSegments,e.heightSegments)}}var yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ap=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ip=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Np=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Up=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",em=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,im=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,um=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Em=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ym=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Am=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Im=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Um=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Bm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Km=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ng=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ig=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,og=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ag=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_g=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ig=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Pg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ng=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ug=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,e_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:yp,alphahash_pars_fragment:Tp,alphamap_fragment:bp,alphamap_pars_fragment:Ap,alphatest_fragment:Rp,alphatest_pars_fragment:wp,aomap_fragment:Ip,aomap_pars_fragment:Pp,batching_pars_vertex:Cp,batching_vertex:Lp,begin_vertex:Dp,beginnormal_vertex:Op,bsdfs:Np,iridescence_fragment:Up,bumpmap_pars_fragment:Fp,clipping_planes_fragment:Bp,clipping_planes_pars_fragment:Gp,clipping_planes_pars_vertex:zp,clipping_planes_vertex:Hp,color_fragment:Vp,color_pars_fragment:kp,color_pars_vertex:Wp,color_vertex:Xp,common:qp,cube_uv_reflection_fragment:Yp,defaultnormal_vertex:jp,displacementmap_pars_vertex:Zp,displacementmap_vertex:$p,emissivemap_fragment:Kp,emissivemap_pars_fragment:Qp,colorspace_fragment:Jp,colorspace_pars_fragment:em,envmap_fragment:tm,envmap_common_pars_fragment:nm,envmap_pars_fragment:im,envmap_pars_vertex:rm,envmap_physical_pars_fragment:gm,envmap_vertex:sm,fog_vertex:om,fog_pars_vertex:am,fog_fragment:lm,fog_pars_fragment:cm,gradientmap_pars_fragment:um,lightmap_fragment:hm,lightmap_pars_fragment:dm,lights_lambert_fragment:fm,lights_lambert_pars_fragment:pm,lights_pars_begin:mm,lights_toon_fragment:_m,lights_toon_pars_fragment:Em,lights_phong_fragment:vm,lights_phong_pars_fragment:Sm,lights_physical_fragment:xm,lights_physical_pars_fragment:Mm,lights_fragment_begin:ym,lights_fragment_maps:Tm,lights_fragment_end:bm,logdepthbuf_fragment:Am,logdepthbuf_pars_fragment:Rm,logdepthbuf_pars_vertex:wm,logdepthbuf_vertex:Im,map_fragment:Pm,map_pars_fragment:Cm,map_particle_fragment:Lm,map_particle_pars_fragment:Dm,metalnessmap_fragment:Om,metalnessmap_pars_fragment:Nm,morphcolor_vertex:Um,morphnormal_vertex:Fm,morphtarget_pars_vertex:Bm,morphtarget_vertex:Gm,normal_fragment_begin:zm,normal_fragment_maps:Hm,normal_pars_fragment:Vm,normal_pars_vertex:km,normal_vertex:Wm,normalmap_pars_fragment:Xm,clearcoat_normal_fragment_begin:qm,clearcoat_normal_fragment_maps:Ym,clearcoat_pars_fragment:jm,iridescence_pars_fragment:Zm,opaque_fragment:$m,packing:Km,premultiplied_alpha_fragment:Qm,project_vertex:Jm,dithering_fragment:eg,dithering_pars_fragment:tg,roughnessmap_fragment:ng,roughnessmap_pars_fragment:ig,shadowmap_pars_fragment:rg,shadowmap_pars_vertex:sg,shadowmap_vertex:og,shadowmask_pars_fragment:ag,skinbase_vertex:lg,skinning_pars_vertex:cg,skinning_vertex:ug,skinnormal_vertex:hg,specularmap_fragment:dg,specularmap_pars_fragment:fg,tonemapping_fragment:pg,tonemapping_pars_fragment:mg,transmission_fragment:gg,transmission_pars_fragment:_g,uv_pars_fragment:Eg,uv_pars_vertex:vg,uv_vertex:Sg,worldpos_vertex:xg,background_vert:Mg,background_frag:yg,backgroundCube_vert:Tg,backgroundCube_frag:bg,cube_vert:Ag,cube_frag:Rg,depth_vert:wg,depth_frag:Ig,distanceRGBA_vert:Pg,distanceRGBA_frag:Cg,equirect_vert:Lg,equirect_frag:Dg,linedashed_vert:Og,linedashed_frag:Ng,meshbasic_vert:Ug,meshbasic_frag:Fg,meshlambert_vert:Bg,meshlambert_frag:Gg,meshmatcap_vert:zg,meshmatcap_frag:Hg,meshnormal_vert:Vg,meshnormal_frag:kg,meshphong_vert:Wg,meshphong_frag:Xg,meshphysical_vert:qg,meshphysical_frag:Yg,meshtoon_vert:jg,meshtoon_frag:Zg,points_vert:$g,points_frag:Kg,shadow_vert:Qg,shadow_frag:Jg,sprite_vert:e_,sprite_frag:t_},_e={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},yn={basic:{uniforms:kt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:kt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ve(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:kt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:kt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:kt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ve(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:kt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:kt([_e.points,_e.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:kt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:kt([_e.common,_e.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:kt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:kt([_e.sprite,_e.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:kt([_e.common,_e.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:kt([_e.lights,_e.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};yn.physical={uniforms:kt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Ss={r:0,b:0,g:0};function n_(n,e,t,i,r,s,o){const a=new Ve(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function g(m,f){let v=!1,E=f.isScene===!0?f.background:null;E&&E.isTexture&&(E=(f.backgroundBlurriness>0?t:e).get(E)),E===null?_(a,l):E&&E.isColor&&(_(E,1),v=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),E&&(E.isCubeTexture||E.mapping===ro)?(u===void 0&&(u=new ve(new ut(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:ur(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=tt.getTransfer(E.colorSpace)!==st,(h!==E||d!==E.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ve(new lo(2,2),new Ti({name:"BackgroundMaterial",uniforms:ur(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=tt.getTransfer(E.colorSpace)!==st,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(Ss,Sh(n)),i.buffers.color.setClear(Ss.r,Ss.g,Ss.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function i_(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(w,F,P,B,H){let G=!1;if(o){const X=_(B,P,F);c!==X&&(c=X,p(c.object)),G=f(w,B,P,H),G&&v(w,B,P,H)}else{const X=F.wireframe===!0;(c.geometry!==B.id||c.program!==P.id||c.wireframe!==X)&&(c.geometry=B.id,c.program=P.id,c.wireframe=X,G=!0)}H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(G||u)&&(u=!1,D(w,F,P,B),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(w){return i.isWebGL2?n.bindVertexArray(w):s.bindVertexArrayOES(w)}function g(w){return i.isWebGL2?n.deleteVertexArray(w):s.deleteVertexArrayOES(w)}function _(w,F,P){const B=P.wireframe===!0;let H=a[w.id];H===void 0&&(H={},a[w.id]=H);let G=H[F.id];G===void 0&&(G={},H[F.id]=G);let X=G[B];return X===void 0&&(X=m(d()),G[B]=X),X}function m(w){const F=[],P=[],B=[];for(let H=0;H<r;H++)F[H]=0,P[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:P,attributeDivisors:B,object:w,attributes:{},index:null}}function f(w,F,P,B){const H=c.attributes,G=F.attributes;let X=0;const Z=P.getAttributes();for(const oe in Z)if(Z[oe].location>=0){const J=H[oe];let Se=G[oe];if(Se===void 0&&(oe==="instanceMatrix"&&w.instanceMatrix&&(Se=w.instanceMatrix),oe==="instanceColor"&&w.instanceColor&&(Se=w.instanceColor)),J===void 0||J.attribute!==Se||Se&&J.data!==Se.data)return!0;X++}return c.attributesNum!==X||c.index!==B}function v(w,F,P,B){const H={},G=F.attributes;let X=0;const Z=P.getAttributes();for(const oe in Z)if(Z[oe].location>=0){let J=G[oe];J===void 0&&(oe==="instanceMatrix"&&w.instanceMatrix&&(J=w.instanceMatrix),oe==="instanceColor"&&w.instanceColor&&(J=w.instanceColor));const Se={};Se.attribute=J,J&&J.data&&(Se.data=J.data),H[oe]=Se,X++}c.attributes=H,c.attributesNum=X,c.index=B}function E(){const w=c.newAttributes;for(let F=0,P=w.length;F<P;F++)w[F]=0}function S(w){I(w,0)}function I(w,F){const P=c.newAttributes,B=c.enabledAttributes,H=c.attributeDivisors;P[w]=1,B[w]===0&&(n.enableVertexAttribArray(w),B[w]=1),H[w]!==F&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](w,F),H[w]=F)}function T(){const w=c.newAttributes,F=c.enabledAttributes;for(let P=0,B=F.length;P<B;P++)F[P]!==w[P]&&(n.disableVertexAttribArray(P),F[P]=0)}function R(w,F,P,B,H,G,X){X===!0?n.vertexAttribIPointer(w,F,P,H,G):n.vertexAttribPointer(w,F,P,B,H,G)}function D(w,F,P,B){if(i.isWebGL2===!1&&(w.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const H=B.attributes,G=P.getAttributes(),X=F.defaultAttributeValues;for(const Z in G){const oe=G[Z];if(oe.location>=0){let j=H[Z];if(j===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(j=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(j=w.instanceColor)),j!==void 0){const J=j.normalized,Se=j.itemSize,ae=t.get(j);if(ae===void 0)continue;const he=ae.buffer,Ae=ae.type,Ce=ae.bytesPerElement,xe=i.isWebGL2===!0&&(Ae===n.INT||Ae===n.UNSIGNED_INT||j.gpuType===rh);if(j.isInterleavedBufferAttribute){const De=j.data,O=De.stride,de=j.offset;if(De.isInstancedInterleavedBuffer){for(let K=0;K<oe.locationSize;K++)I(oe.location+K,De.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let K=0;K<oe.locationSize;K++)S(oe.location+K);n.bindBuffer(n.ARRAY_BUFFER,he);for(let K=0;K<oe.locationSize;K++)R(oe.location+K,Se/oe.locationSize,Ae,J,O*Ce,(de+Se/oe.locationSize*K)*Ce,xe)}else{if(j.isInstancedBufferAttribute){for(let De=0;De<oe.locationSize;De++)I(oe.location+De,j.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let De=0;De<oe.locationSize;De++)S(oe.location+De);n.bindBuffer(n.ARRAY_BUFFER,he);for(let De=0;De<oe.locationSize;De++)R(oe.location+De,Se/oe.locationSize,Ae,J,Se*Ce,Se/oe.locationSize*De*Ce,xe)}}else if(X!==void 0){const J=X[Z];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(oe.location,J);break;case 3:n.vertexAttrib3fv(oe.location,J);break;case 4:n.vertexAttrib4fv(oe.location,J);break;default:n.vertexAttrib1fv(oe.location,J)}}}}T()}function x(){z();for(const w in a){const F=a[w];for(const P in F){const B=F[P];for(const H in B)g(B[H].object),delete B[H];delete F[P]}delete a[w]}}function y(w){if(a[w.id]===void 0)return;const F=a[w.id];for(const P in F){const B=F[P];for(const H in B)g(B[H].object),delete B[H];delete F[P]}delete a[w.id]}function N(w){for(const F in a){const P=a[F];if(P[w.id]===void 0)continue;const B=P[w.id];for(const H in B)g(B[H].object),delete B[H];delete P[w.id]}}function z(){$(),u=!0,c!==l&&(c=l,p(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:z,resetDefaultState:$,dispose:x,releaseStatesOfGeometry:y,releaseStatesOfProgram:N,initAttributes:E,enableAttribute:S,disableUnusedAttributes:T}}function r_(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,h){n.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,d){if(d===0)return;let p,g;if(r)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,u,h,d),t.update(h,s,d)}function c(u,h,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{p.multiDrawArraysWEBGL(s,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function s_(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=d>0,S=o||e.has("OES_texture_float"),I=E&&S,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:E,floatFragmentTextures:S,floatVertexTextures:I,maxSamples:T}}function o_(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Yn,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,E=v*4;let S=f.clippingState||null;l.value=S,S=u(g,d,E,p);for(let I=0;I!==E;++I)S[I]=t[I];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,S=p;E!==_;++E,S+=4)o.copy(h[E]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function a_(n){let e=new WeakMap;function t(o,a){return a===_a?o.mapping=ar:a===Ea&&(o.mapping=lr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===_a||a===Ea)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new vp(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class bh extends xh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $i=4,_c=[.125,.215,.35,.446,.526,.582],di=20,jo=new bh,Ec=new Ve;let Zo=null,$o=0,Ko=0;const ci=(1+Math.sqrt(5))/2,ji=1/ci,vc=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,ci,ji),new C(0,ci,-ji),new C(ji,0,ci),new C(-ji,0,ci),new C(ci,ji,0),new C(-ci,ji,0)];class Sc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Zo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zo,$o,Ko),e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ar||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:Hr,format:gn,colorSpace:Un,depthBuffer:!1},r=xc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l_(s)),this._blurMaterial=c_(s,e,t)}return r}_compileMaterial(e){const t=new ve(this._lodPlanes[0],e);this._renderer.compile(t,jo)}_sceneToCubeUV(e,t,i,r){const a=new an(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Ec),u.toneMapping=Kn,u.autoClear=!1;const p=new jr({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new ve(new ut,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Ec),_=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const E=this._cubeSize;xs(r,v*E,f>2?E:0,E,E),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ar||e.mapping===lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ve(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;xs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,jo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vc[(r-1)%vc.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ve(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*di-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):di;m>di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${di}`);const f=[];let v=0;for(let R=0;R<di;++R){const D=R/_,x=Math.exp(-D*D/2);f.push(x),R===0?v+=x:R<m&&(v+=2*x)}for(let R=0;R<f.length;R++)f[R]=f[R]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;const S=this._sizeLods[r],I=3*S*(r>E-$i?r-E+$i:0),T=4*(this._cubeSize-S);xs(t,I,T,3*S,2*S),l.setRenderTarget(t),l.render(h,jo)}}function l_(n){const e=[],t=[],i=[];let r=n;const s=n-$i+1+_c.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-$i?l=_c[o-n+$i-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,v=new Float32Array(_*g*p),E=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let T=0;T<p;T++){const R=T%3*2/3-1,D=T>2?0:-1,x=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];v.set(x,_*g*T),E.set(d,m*g*T);const y=[T,T,T,T,T,T];S.set(y,f*g*T)}const I=new Pt;I.setAttribute("position",new vn(v,_)),I.setAttribute("uv",new vn(E,m)),I.setAttribute("faceIndex",new vn(S,f)),e.push(I),r>$i&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function xc(n,e,t){const i=new yi(n,e,t);return i.texture.mapping=ro,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function c_(n,e,t){const i=new Float32Array(di),r=new C(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Mc(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function yc(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Ya(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function u_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===_a||l===Ea,u=l===ar||l===lr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Sc(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Sc(n));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function h_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function d_(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let E=0,S=v.length;E<S;E+=3){const I=v[E+0],T=v[E+1],R=v[E+2];d.push(I,T,T,R,R,I)}}else if(g!==void 0){const v=g.array;_=g.version;for(let E=0,S=v.length/3-1;E<S;E+=3){const I=E+0,T=E+1,R=E+2;d.push(I,T,T,R,R,I)}}else return;const m=new(fh(d)?vh:Eh)(d,1);m.version=_;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function f_(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,g){n.drawElements(s,g,a,p*l),t.update(g,s,1)}function h(p,g,_){if(_===0)return;let m,f;if(r)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,g,a,p*l,_),t.update(g,s,_)}function d(p,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(s,g,0,a,p,0,_);let f=0;for(let v=0;v<_;v++)f+=g[v];t.update(f,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function p_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function m_(n,e){return n[0]-e[0]}function g_(n,e){return Math.abs(e[1])-Math.abs(n[1])}function __(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ot,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let F=function(){$.dispose(),s.delete(u),u.removeEventListener("dispose",F)};var p=F;m!==void 0&&m.texture.dispose();const E=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,I=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let x=0;E===!0&&(x=1),S===!0&&(x=2),I===!0&&(x=3);let y=u.attributes.position.count*x,N=1;y>e.maxTextureSize&&(N=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const z=new Float32Array(y*N*4*_),$=new gh(z,y,N,_);$.type=Zn,$.needsUpdate=!0;const w=x*4;for(let P=0;P<_;P++){const B=T[P],H=R[P],G=D[P],X=y*N*4*P;for(let Z=0;Z<B.count;Z++){const oe=Z*w;E===!0&&(o.fromBufferAttribute(B,Z),z[X+oe+0]=o.x,z[X+oe+1]=o.y,z[X+oe+2]=o.z,z[X+oe+3]=0),S===!0&&(o.fromBufferAttribute(H,Z),z[X+oe+4]=o.x,z[X+oe+5]=o.y,z[X+oe+6]=o.z,z[X+oe+7]=0),I===!0&&(o.fromBufferAttribute(G,Z),z[X+oe+8]=o.x,z[X+oe+9]=o.y,z[X+oe+10]=o.z,z[X+oe+11]=G.itemSize===4?o.w:1)}}m={count:_,texture:$,size:new ue(y,N)},s.set(u,m),u.addEventListener("dispose",F)}let f=0;for(let E=0;E<d.length;E++)f+=d[E];const v=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=i[u.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];i[u.id]=_}for(let S=0;S<g;S++){const I=_[S];I[0]=S,I[1]=d[S]}_.sort(g_);for(let S=0;S<8;S++)S<g&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(m_);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let v=0;for(let S=0;S<8;S++){const I=a[S],T=I[0],R=I[1];T!==Number.MAX_SAFE_INTEGER&&R?(m&&u.getAttribute("morphTarget"+S)!==m[T]&&u.setAttribute("morphTarget"+S,m[T]),f&&u.getAttribute("morphNormal"+S)!==f[T]&&u.setAttribute("morphNormal"+S,f[T]),r[S]=R,v+=R):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),f&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const E=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function E_(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Ah extends Jt{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ei,u!==Ei&&u!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ei&&(i=jn),i===void 0&&u===cr&&(i=_i),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Rh=new Jt,wh=new Ah(1,1);wh.compareFunction=dh;const Ih=new gh,Ph=new np,Ch=new Mh,Tc=[],bc=[],Ac=new Float32Array(16),Rc=new Float32Array(9),wc=new Float32Array(4);function fr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Tc[r];if(s===void 0&&(s=new Float32Array(r),Tc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function co(n,e){let t=bc[e];t===void 0&&(t=new Int32Array(e),bc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function v_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function S_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function x_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function M_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function y_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,i))return;wc.set(i),n.uniformMatrix2fv(this.addr,!1,wc),yt(t,i)}}function T_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,i))return;Rc.set(i),n.uniformMatrix3fv(this.addr,!1,Rc),yt(t,i)}}function b_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,i))return;Ac.set(i),n.uniformMatrix4fv(this.addr,!1,Ac),yt(t,i)}}function A_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function R_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function w_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function I_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function P_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function C_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function L_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function D_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function O_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?wh:Rh;t.setTexture2D(e||s,r)}function N_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ph,r)}function U_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ch,r)}function F_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ih,r)}function B_(n){switch(n){case 5126:return v_;case 35664:return S_;case 35665:return x_;case 35666:return M_;case 35674:return y_;case 35675:return T_;case 35676:return b_;case 5124:case 35670:return A_;case 35667:case 35671:return R_;case 35668:case 35672:return w_;case 35669:case 35673:return I_;case 5125:return P_;case 36294:return C_;case 36295:return L_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return O_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return F_}}function G_(n,e){n.uniform1fv(this.addr,e)}function z_(n,e){const t=fr(e,this.size,2);n.uniform2fv(this.addr,t)}function H_(n,e){const t=fr(e,this.size,3);n.uniform3fv(this.addr,t)}function V_(n,e){const t=fr(e,this.size,4);n.uniform4fv(this.addr,t)}function k_(n,e){const t=fr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function W_(n,e){const t=fr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function X_(n,e){const t=fr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function q_(n,e){n.uniform1iv(this.addr,e)}function Y_(n,e){n.uniform2iv(this.addr,e)}function j_(n,e){n.uniform3iv(this.addr,e)}function Z_(n,e){n.uniform4iv(this.addr,e)}function $_(n,e){n.uniform1uiv(this.addr,e)}function K_(n,e){n.uniform2uiv(this.addr,e)}function Q_(n,e){n.uniform3uiv(this.addr,e)}function J_(n,e){n.uniform4uiv(this.addr,e)}function e0(n,e,t){const i=this.cache,r=e.length,s=co(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Rh,s[o])}function t0(n,e,t){const i=this.cache,r=e.length,s=co(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ph,s[o])}function n0(n,e,t){const i=this.cache,r=e.length,s=co(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ch,s[o])}function i0(n,e,t){const i=this.cache,r=e.length,s=co(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ih,s[o])}function r0(n){switch(n){case 5126:return G_;case 35664:return z_;case 35665:return H_;case 35666:return V_;case 35674:return k_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return q_;case 35667:case 35671:return Y_;case 35668:case 35672:return j_;case 35669:case 35673:return Z_;case 5125:return $_;case 36294:return K_;case 36295:return Q_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}class s0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=B_(t.type)}}class o0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=r0(t.type)}}class a0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Qo=/(\w+)(\])?(\[|\.)?/g;function Ic(n,e){n.seq.push(e),n.map[e.id]=e}function l0(n,e,t){const i=n.name,r=i.length;for(Qo.lastIndex=0;;){const s=Qo.exec(i),o=Qo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ic(t,c===void 0?new s0(a,n,e):new o0(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new a0(a),Ic(t,h)),t=h}}}class Hs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);l0(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Pc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const c0=37297;let u0=0;function h0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function d0(n){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(n);let i;switch(e===t?i="":e===$s&&t===Zs?i="LinearDisplayP3ToLinearSRGB":e===Zs&&t===$s&&(i="LinearSRGBToLinearDisplayP3"),n){case Un:case so:return[i,"LinearTransferOETF"];case Lt:case Wa:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Cc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+h0(n.getShaderSource(e),o)}else return r}function f0(n,e){const t=d0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function p0(n,e){let t;switch(e){case df:t="Linear";break;case ff:t="Reinhard";break;case pf:t="OptimizedCineon";break;case mf:t="ACESFilmic";break;case _f:t="AgX";break;case gf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function m0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ki).join(`
`)}function g0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ki).join(`
`)}function _0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function E0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ki(n){return n!==""}function Lc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const v0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ya(n){return n.replace(v0,x0)}const S0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function x0(n,e){let t=He[e];if(t===void 0){const i=S0.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ya(t)}const M0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oc(n){return n.replace(M0,y0)}function y0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function T0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Gd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function b0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ar:case lr:e="ENVMAP_TYPE_CUBE";break;case ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function A0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case lr:e="ENVMAP_MODE_REFRACTION";break}return e}function R0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ha:e="ENVMAP_BLENDING_MULTIPLY";break;case uf:e="ENVMAP_BLENDING_MIX";break;case hf:e="ENVMAP_BLENDING_ADD";break}return e}function w0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function I0(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=T0(t),c=b0(t),u=A0(t),h=R0(t),d=w0(t),p=t.isWebGL2?"":m0(t),g=g0(t),_=_0(s),m=r.createProgram();let f,v,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ki).join(`
`),f.length>0&&(f+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ki).join(`
`),v.length>0&&(v+=`
`)):(f=[Nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),v=[p,Nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?He.tonemapping_pars_fragment:"",t.toneMapping!==Kn?p0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,f0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ki).join(`
`)),o=ya(o),o=Lc(o,t),o=Dc(o,t),a=ya(a),a=Lc(a,t),a=Dc(a,t),o=Oc(o),a=Oc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const S=E+f+o,I=E+v+a,T=Pc(r,r.VERTEX_SHADER,S),R=Pc(r,r.FRAGMENT_SHADER,I);r.attachShader(m,T),r.attachShader(m,R),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function D(z){if(n.debug.checkShaderErrors){const $=r.getProgramInfoLog(m).trim(),w=r.getShaderInfoLog(T).trim(),F=r.getShaderInfoLog(R).trim();let P=!0,B=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(P=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,T,R);else{const H=Cc(r,T,"vertex"),G=Cc(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+H+`
`+G)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(w===""||F==="")&&(B=!1);B&&(z.diagnostics={runnable:P,programLog:$,vertexShader:{log:w,prefix:f},fragmentShader:{log:F,prefix:v}})}r.deleteShader(T),r.deleteShader(R),x=new Hs(r,m),y=E0(r,m)}let x;this.getUniforms=function(){return x===void 0&&D(this),x};let y;this.getAttributes=function(){return y===void 0&&D(this),y};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(m,c0)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=u0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=R,this}let P0=0;class C0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new L0(e),t.set(e,i)),i}}class L0{constructor(e){this.id=P0++,this.code=e,this.usedTimes=0}}function D0(n,e,t,i,r,s,o){const a=new qa,l=new C0,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function m(x,y,N,z,$){const w=z.fog,F=$.geometry,P=x.isMeshStandardMaterial?z.environment:null,B=(x.isMeshStandardMaterial?t:e).get(x.envMap||P),H=B&&B.mapping===ro?B.image.height:null,G=g[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const X=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Z=X!==void 0?X.length:0;let oe=0;F.morphAttributes.position!==void 0&&(oe=1),F.morphAttributes.normal!==void 0&&(oe=2),F.morphAttributes.color!==void 0&&(oe=3);let j,J,Se,ae;if(G){const Gt=yn[G];j=Gt.vertexShader,J=Gt.fragmentShader}else j=x.vertexShader,J=x.fragmentShader,l.update(x),Se=l.getVertexShaderID(x),ae=l.getFragmentShaderID(x);const he=n.getRenderTarget(),Ae=$.isInstancedMesh===!0,Ce=$.isBatchedMesh===!0,xe=!!x.map,De=!!x.matcap,O=!!B,de=!!x.aoMap,K=!!x.lightMap,le=!!x.bumpMap,Q=!!x.normalMap,Re=!!x.displacementMap,Me=!!x.emissiveMap,b=!!x.metalnessMap,M=!!x.roughnessMap,k=x.anisotropy>0,se=x.clearcoat>0,ne=x.iridescence>0,te=x.sheen>0,be=x.transmission>0,Ee=k&&!!x.anisotropyMap,ye=se&&!!x.clearcoatMap,Le=se&&!!x.clearcoatNormalMap,Fe=se&&!!x.clearcoatRoughnessMap,ie=ne&&!!x.iridescenceMap,Xe=ne&&!!x.iridescenceThicknessMap,L=te&&!!x.sheenColorMap,re=te&&!!x.sheenRoughnessMap,ge=!!x.specularMap,ce=!!x.specularColorMap,we=!!x.specularIntensityMap,qe=be&&!!x.transmissionMap,$e=be&&!!x.thicknessMap,ke=!!x.gradientMap,me=!!x.alphaMap,U=x.alphaTest>0,fe=!!x.alphaHash,pe=!!x.extensions,Oe=!!F.attributes.uv1,Ie=!!F.attributes.uv2,Qe=!!F.attributes.uv3;let Je=Kn;return x.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Je=n.toneMapping),{isWebGL2:u,shaderID:G,shaderType:x.type,shaderName:x.name,vertexShader:j,fragmentShader:J,defines:x.defines,customVertexShaderID:Se,customFragmentShaderID:ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Ce,instancing:Ae,instancingColor:Ae&&$.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Un,map:xe,matcap:De,envMap:O,envMapMode:O&&B.mapping,envMapCubeUVHeight:H,aoMap:de,lightMap:K,bumpMap:le,normalMap:Q,displacementMap:d&&Re,emissiveMap:Me,normalMapObjectSpace:Q&&x.normalMapType===If,normalMapTangentSpace:Q&&x.normalMapType===ka,metalnessMap:b,roughnessMap:M,anisotropy:k,anisotropyMap:Ee,clearcoat:se,clearcoatMap:ye,clearcoatNormalMap:Le,clearcoatRoughnessMap:Fe,iridescence:ne,iridescenceMap:ie,iridescenceThicknessMap:Xe,sheen:te,sheenColorMap:L,sheenRoughnessMap:re,specularMap:ge,specularColorMap:ce,specularIntensityMap:we,transmission:be,transmissionMap:qe,thicknessMap:$e,gradientMap:ke,opaque:x.transparent===!1&&x.blending===nr,alphaMap:me,alphaTest:U,alphaHash:fe,combine:x.combine,mapUv:xe&&_(x.map.channel),aoMapUv:de&&_(x.aoMap.channel),lightMapUv:K&&_(x.lightMap.channel),bumpMapUv:le&&_(x.bumpMap.channel),normalMapUv:Q&&_(x.normalMap.channel),displacementMapUv:Re&&_(x.displacementMap.channel),emissiveMapUv:Me&&_(x.emissiveMap.channel),metalnessMapUv:b&&_(x.metalnessMap.channel),roughnessMapUv:M&&_(x.roughnessMap.channel),anisotropyMapUv:Ee&&_(x.anisotropyMap.channel),clearcoatMapUv:ye&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Le&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:L&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:re&&_(x.sheenRoughnessMap.channel),specularMapUv:ge&&_(x.specularMap.channel),specularColorMapUv:ce&&_(x.specularColorMap.channel),specularIntensityMapUv:we&&_(x.specularIntensityMap.channel),transmissionMapUv:qe&&_(x.transmissionMap.channel),thicknessMapUv:$e&&_(x.thicknessMap.channel),alphaMapUv:me&&_(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Q||k),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Oe,vertexUv2s:Ie,vertexUv3s:Qe,pointsUvs:$.isPoints===!0&&!!F.attributes.uv&&(xe||me),fog:!!w,useFog:x.fog===!0,fogExp2:w&&w.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:$.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:oe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Je,useLegacyLights:n._useLegacyLights,decodeVideoTexture:xe&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===st,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Tn,flipSided:x.side===jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:pe&&x.extensions.derivatives===!0,extensionFragDepth:pe&&x.extensions.fragDepth===!0,extensionDrawBuffers:pe&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&x.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)y.push(N),y.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(v(y,x),E(y,x),y.push(n.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function v(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function E(x,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function S(x){const y=g[x.type];let N;if(y){const z=yn[y];N=mp.clone(z.uniforms)}else N=x.uniforms;return N}function I(x,y){let N;for(let z=0,$=c.length;z<$;z++){const w=c[z];if(w.cacheKey===y){N=w,++N.usedTimes;break}}return N===void 0&&(N=new I0(n,y,x,s),c.push(N)),N}function T(x){if(--x.usedTimes===0){const y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),x.destroy()}}function R(x){l.remove(x)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:I,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:D}}function O0(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function N0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Uc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Fc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,p,g,_,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),e++,f}function a(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||N0),i.length>1&&i.sort(d||Uc),r.length>1&&r.sort(d||Uc)}function u(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function U0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Fc,n.set(i,[o])):r>=s.length?(o=new Fc,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function F0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ve};break;case"SpotLight":t={position:new C,direction:new C,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function B0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let G0=0;function z0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function H0(n,e){const t=new F0,i=B0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new C);const s=new C,o=new pt,a=new pt;function l(u,h){let d=0,p=0,g=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let _=0,m=0,f=0,v=0,E=0,S=0,I=0,T=0,R=0,D=0,x=0;u.sort(z0);const y=h===!0?Math.PI:1;for(let z=0,$=u.length;z<$;z++){const w=u[z],F=w.color,P=w.intensity,B=w.distance,H=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)d+=F.r*P*y,p+=F.g*P*y,g+=F.b*P*y;else if(w.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(w.sh.coefficients[G],P);x++}else if(w.isDirectionalLight){const G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity*y),w.castShadow){const X=w.shadow,Z=i.get(w);Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,r.directionalShadow[_]=Z,r.directionalShadowMap[_]=H,r.directionalShadowMatrix[_]=w.shadow.matrix,S++}r.directional[_]=G,_++}else if(w.isSpotLight){const G=t.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(F).multiplyScalar(P*y),G.distance=B,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,r.spot[f]=G;const X=w.shadow;if(w.map&&(r.spotLightMap[R]=w.map,R++,X.updateMatrices(w),w.castShadow&&D++),r.spotLightMatrix[f]=X.matrix,w.castShadow){const Z=i.get(w);Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,r.spotShadow[f]=Z,r.spotShadowMap[f]=H,T++}f++}else if(w.isRectAreaLight){const G=t.get(w);G.color.copy(F).multiplyScalar(P),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),r.rectArea[v]=G,v++}else if(w.isPointLight){const G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity*y),G.distance=w.distance,G.decay=w.decay,w.castShadow){const X=w.shadow,Z=i.get(w);Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,Z.shadowCameraNear=X.camera.near,Z.shadowCameraFar=X.camera.far,r.pointShadow[m]=Z,r.pointShadowMap[m]=H,r.pointShadowMatrix[m]=w.shadow.matrix,I++}r.point[m]=G,m++}else if(w.isHemisphereLight){const G=t.get(w);G.skyColor.copy(w.color).multiplyScalar(P*y),G.groundColor.copy(w.groundColor).multiplyScalar(P*y),r.hemi[E]=G,E++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=g;const N=r.hash;(N.directionalLength!==_||N.pointLength!==m||N.spotLength!==f||N.rectAreaLength!==v||N.hemiLength!==E||N.numDirectionalShadows!==S||N.numPointShadows!==I||N.numSpotShadows!==T||N.numSpotMaps!==R||N.numLightProbes!==x)&&(r.directional.length=_,r.spot.length=f,r.rectArea.length=v,r.point.length=m,r.hemi.length=E,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=T+R-D,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=x,N.directionalLength=_,N.pointLength=m,N.spotLength=f,N.rectAreaLength=v,N.hemiLength=E,N.numDirectionalShadows=S,N.numPointShadows=I,N.numSpotShadows=T,N.numSpotMaps=R,N.numLightProbes=x,r.version=G0++)}function c(u,h){let d=0,p=0,g=0,_=0,m=0;const f=h.matrixWorldInverse;for(let v=0,E=u.length;v<E;v++){const S=u[v];if(S.isDirectionalLight){const I=r.directional[d];I.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(f),d++}else if(S.isSpotLight){const I=r.spot[g];I.position.setFromMatrixPosition(S.matrixWorld),I.position.applyMatrix4(f),I.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const I=r.rectArea[_];I.position.setFromMatrixPosition(S.matrixWorld),I.position.applyMatrix4(f),a.identity(),o.copy(S.matrixWorld),o.premultiply(f),a.extractRotation(o),I.halfWidth.set(S.width*.5,0,0),I.halfHeight.set(0,S.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const I=r.point[p];I.position.setFromMatrixPosition(S.matrixWorld),I.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const I=r.hemi[m];I.direction.setFromMatrixPosition(S.matrixWorld),I.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:r}}function Bc(n,e){const t=new H0(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function V0(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Bc(n,e),t.set(s,[l])):o>=a.length?(l=new Bc(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class k0 extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class W0 extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const X0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Y0(n,e,t){let i=new yh;const r=new ue,s=new ue,o=new Ot,a=new k0({depthPacking:wf}),l=new W0,c={},u=t.maxTextureSize,h={[ti]:jt,[jt]:ti,[Tn]:Tn},d=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:X0,fragmentShader:q0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Pt;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ve(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nh;let f=this.type;this.render=function(T,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const x=n.getRenderTarget(),y=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),z=n.state;z.setBlending($n),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const $=f!==On&&this.type===On,w=f===On&&this.type!==On;for(let F=0,P=T.length;F<P;F++){const B=T[F],H=B.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const G=H.getFrameExtents();if(r.multiply(G),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/G.x),r.x=s.x*G.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/G.y),r.y=s.y*G.y,H.mapSize.y=s.y)),H.map===null||$===!0||w===!0){const Z=this.type!==On?{minFilter:Wt,magFilter:Wt}:{};H.map!==null&&H.map.dispose(),H.map=new yi(r.x,r.y,Z),H.map.texture.name=B.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const X=H.getViewportCount();for(let Z=0;Z<X;Z++){const oe=H.getViewport(Z);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),z.viewport(o),H.updateMatrices(B,Z),i=H.getFrustum(),S(R,D,H.camera,B,this.type)}H.isPointLightShadow!==!0&&this.type===On&&v(H,D),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(x,y,N)};function v(T,R){const D=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new yi(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,D,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,D,p,_,null)}function E(T,R,D,x){let y=null;const N=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)y=N;else if(y=D.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const z=y.uuid,$=R.uuid;let w=c[z];w===void 0&&(w={},c[z]=w);let F=w[$];F===void 0&&(F=y.clone(),w[$]=F,R.addEventListener("dispose",I)),y=F}if(y.visible=R.visible,y.wireframe=R.wireframe,x===On?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:h[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=n.properties.get(y);z.light=D}return y}function S(T,R,D,x,y){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===On)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const $=e.update(T),w=T.material;if(Array.isArray(w)){const F=$.groups;for(let P=0,B=F.length;P<B;P++){const H=F[P],G=w[H.materialIndex];if(G&&G.visible){const X=E(T,G,x,y);T.onBeforeShadow(n,T,R,D,$,X,H),n.renderBufferDirect(D,null,$,X,T,H),T.onAfterShadow(n,T,R,D,$,X,H)}}}else if(w.visible){const F=E(T,w,x,y);T.onBeforeShadow(n,T,R,D,$,F,null),n.renderBufferDirect(D,null,$,F,T,null),T.onAfterShadow(n,T,R,D,$,F,null)}}const z=T.children;for(let $=0,w=z.length;$<w;$++)S(z[$],R,D,x,y)}function I(T){T.target.removeEventListener("dispose",I);for(const D in c){const x=c[D],y=T.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}function j0(n,e,t){const i=t.isWebGL2;function r(){let U=!1;const fe=new Ot;let pe=null;const Oe=new Ot(0,0,0,0);return{setMask:function(Ie){pe!==Ie&&!U&&(n.colorMask(Ie,Ie,Ie,Ie),pe=Ie)},setLocked:function(Ie){U=Ie},setClear:function(Ie,Qe,Je,Tt,Gt){Gt===!0&&(Ie*=Tt,Qe*=Tt,Je*=Tt),fe.set(Ie,Qe,Je,Tt),Oe.equals(fe)===!1&&(n.clearColor(Ie,Qe,Je,Tt),Oe.copy(fe))},reset:function(){U=!1,pe=null,Oe.set(-1,0,0,0)}}}function s(){let U=!1,fe=null,pe=null,Oe=null;return{setTest:function(Ie){Ie?Ce(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(Ie){fe!==Ie&&!U&&(n.depthMask(Ie),fe=Ie)},setFunc:function(Ie){if(pe!==Ie){switch(Ie){case nf:n.depthFunc(n.NEVER);break;case rf:n.depthFunc(n.ALWAYS);break;case sf:n.depthFunc(n.LESS);break;case Ys:n.depthFunc(n.LEQUAL);break;case of:n.depthFunc(n.EQUAL);break;case af:n.depthFunc(n.GEQUAL);break;case lf:n.depthFunc(n.GREATER);break;case cf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=Ie}},setLocked:function(Ie){U=Ie},setClear:function(Ie){Oe!==Ie&&(n.clearDepth(Ie),Oe=Ie)},reset:function(){U=!1,fe=null,pe=null,Oe=null}}}function o(){let U=!1,fe=null,pe=null,Oe=null,Ie=null,Qe=null,Je=null,Tt=null,Gt=null;return{setTest:function(rt){U||(rt?Ce(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(rt){fe!==rt&&!U&&(n.stencilMask(rt),fe=rt)},setFunc:function(rt,zt,Sn){(pe!==rt||Oe!==zt||Ie!==Sn)&&(n.stencilFunc(rt,zt,Sn),pe=rt,Oe=zt,Ie=Sn)},setOp:function(rt,zt,Sn){(Qe!==rt||Je!==zt||Tt!==Sn)&&(n.stencilOp(rt,zt,Sn),Qe=rt,Je=zt,Tt=Sn)},setLocked:function(rt){U=rt},setClear:function(rt){Gt!==rt&&(n.clearStencil(rt),Gt=rt)},reset:function(){U=!1,fe=null,pe=null,Oe=null,Ie=null,Qe=null,Je=null,Tt=null,Gt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,v=null,E=null,S=null,I=null,T=null,R=null,D=null,x=new Ve(0,0,0),y=0,N=!1,z=null,$=null,w=null,F=null,P=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,G=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=G>=1):X.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=G>=2);let Z=null,oe={};const j=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),Se=new Ot().fromArray(j),ae=new Ot().fromArray(J);function he(U,fe,pe,Oe){const Ie=new Uint8Array(4),Qe=n.createTexture();n.bindTexture(U,Qe),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<pe;Je++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(fe,0,n.RGBA,1,1,Oe,0,n.RGBA,n.UNSIGNED_BYTE,Ie):n.texImage2D(fe+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ie);return Qe}const Ae={};Ae[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ae[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(n.DEPTH_TEST),l.setFunc(Ys),Me(!1),b(vl),Ce(n.CULL_FACE),Q($n);function Ce(U){d[U]!==!0&&(n.enable(U),d[U]=!0)}function xe(U){d[U]!==!1&&(n.disable(U),d[U]=!1)}function De(U,fe){return p[U]!==fe?(n.bindFramebuffer(U,fe),p[U]=fe,i&&(U===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=fe),U===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=fe)),!0):!1}function O(U,fe){let pe=_,Oe=!1;if(U)if(pe=g.get(fe),pe===void 0&&(pe=[],g.set(fe,pe)),U.isWebGLMultipleRenderTargets){const Ie=U.texture;if(pe.length!==Ie.length||pe[0]!==n.COLOR_ATTACHMENT0){for(let Qe=0,Je=Ie.length;Qe<Je;Qe++)pe[Qe]=n.COLOR_ATTACHMENT0+Qe;pe.length=Ie.length,Oe=!0}}else pe[0]!==n.COLOR_ATTACHMENT0&&(pe[0]=n.COLOR_ATTACHMENT0,Oe=!0);else pe[0]!==n.BACK&&(pe[0]=n.BACK,Oe=!0);Oe&&(t.isWebGL2?n.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function de(U){return m!==U?(n.useProgram(U),m=U,!0):!1}const K={[hi]:n.FUNC_ADD,[Hd]:n.FUNC_SUBTRACT,[Vd]:n.FUNC_REVERSE_SUBTRACT};if(i)K[yl]=n.MIN,K[Tl]=n.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(K[yl]=U.MIN_EXT,K[Tl]=U.MAX_EXT)}const le={[kd]:n.ZERO,[Wd]:n.ONE,[Xd]:n.SRC_COLOR,[ma]:n.SRC_ALPHA,[Kd]:n.SRC_ALPHA_SATURATE,[Zd]:n.DST_COLOR,[Yd]:n.DST_ALPHA,[qd]:n.ONE_MINUS_SRC_COLOR,[ga]:n.ONE_MINUS_SRC_ALPHA,[$d]:n.ONE_MINUS_DST_COLOR,[jd]:n.ONE_MINUS_DST_ALPHA,[Qd]:n.CONSTANT_COLOR,[Jd]:n.ONE_MINUS_CONSTANT_COLOR,[ef]:n.CONSTANT_ALPHA,[tf]:n.ONE_MINUS_CONSTANT_ALPHA};function Q(U,fe,pe,Oe,Ie,Qe,Je,Tt,Gt,rt){if(U===$n){f===!0&&(xe(n.BLEND),f=!1);return}if(f===!1&&(Ce(n.BLEND),f=!0),U!==zd){if(U!==v||rt!==N){if((E!==hi||T!==hi)&&(n.blendEquation(n.FUNC_ADD),E=hi,T=hi),rt)switch(U){case nr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sl:n.blendFunc(n.ONE,n.ONE);break;case xl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ml:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case nr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ml:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,I=null,R=null,D=null,x.set(0,0,0),y=0,v=U,N=rt}return}Ie=Ie||fe,Qe=Qe||pe,Je=Je||Oe,(fe!==E||Ie!==T)&&(n.blendEquationSeparate(K[fe],K[Ie]),E=fe,T=Ie),(pe!==S||Oe!==I||Qe!==R||Je!==D)&&(n.blendFuncSeparate(le[pe],le[Oe],le[Qe],le[Je]),S=pe,I=Oe,R=Qe,D=Je),(Tt.equals(x)===!1||Gt!==y)&&(n.blendColor(Tt.r,Tt.g,Tt.b,Gt),x.copy(Tt),y=Gt),v=U,N=!1}function Re(U,fe){U.side===Tn?xe(n.CULL_FACE):Ce(n.CULL_FACE);let pe=U.side===jt;fe&&(pe=!pe),Me(pe),U.blending===nr&&U.transparent===!1?Q($n):Q(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const Oe=U.stencilWrite;c.setTest(Oe),Oe&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),k(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Ce(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Me(U){z!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),z=U)}function b(U){U!==Fd?(Ce(n.CULL_FACE),U!==$&&(U===vl?n.cullFace(n.BACK):U===Bd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),$=U}function M(U){U!==w&&(H&&n.lineWidth(U),w=U)}function k(U,fe,pe){U?(Ce(n.POLYGON_OFFSET_FILL),(F!==fe||P!==pe)&&(n.polygonOffset(fe,pe),F=fe,P=pe)):xe(n.POLYGON_OFFSET_FILL)}function se(U){U?Ce(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function ne(U){U===void 0&&(U=n.TEXTURE0+B-1),Z!==U&&(n.activeTexture(U),Z=U)}function te(U,fe,pe){pe===void 0&&(Z===null?pe=n.TEXTURE0+B-1:pe=Z);let Oe=oe[pe];Oe===void 0&&(Oe={type:void 0,texture:void 0},oe[pe]=Oe),(Oe.type!==U||Oe.texture!==fe)&&(Z!==pe&&(n.activeTexture(pe),Z=pe),n.bindTexture(U,fe||Ae[U]),Oe.type=U,Oe.texture=fe)}function be(){const U=oe[Z];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function L(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(U){Se.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Se.copy(U))}function qe(U){ae.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ae.copy(U))}function $e(U,fe){let pe=h.get(fe);pe===void 0&&(pe=new WeakMap,h.set(fe,pe));let Oe=pe.get(U);Oe===void 0&&(Oe=n.getUniformBlockIndex(fe,U.name),pe.set(U,Oe))}function ke(U,fe){const Oe=h.get(fe).get(U);u.get(fe)!==Oe&&(n.uniformBlockBinding(fe,Oe,U.__bindingPointIndex),u.set(fe,Oe))}function me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},Z=null,oe={},p={},g=new WeakMap,_=[],m=null,f=!1,v=null,E=null,S=null,I=null,T=null,R=null,D=null,x=new Ve(0,0,0),y=0,N=!1,z=null,$=null,w=null,F=null,P=null,Se.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ce,disable:xe,bindFramebuffer:De,drawBuffers:O,useProgram:de,setBlending:Q,setMaterial:Re,setFlipSided:Me,setCullFace:b,setLineWidth:M,setPolygonOffset:k,setScissorTest:se,activeTexture:ne,bindTexture:te,unbindTexture:be,compressedTexImage2D:Ee,compressedTexImage3D:ye,texImage2D:ge,texImage3D:ce,updateUBOMapping:$e,uniformBlockBinding:ke,texStorage2D:L,texStorage3D:re,texSubImage2D:Le,texSubImage3D:Fe,compressedTexSubImage2D:ie,compressedTexSubImage3D:Xe,scissor:we,viewport:qe,reset:me}}function Z0(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,M){return p?new OffscreenCanvas(b,M):Js("canvas")}function _(b,M,k,se){let ne=1;if((b.width>se||b.height>se)&&(ne=se/Math.max(b.width,b.height)),ne<1||M===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const te=M?Qs:Math.floor,be=te(ne*b.width),Ee=te(ne*b.height);h===void 0&&(h=g(be,Ee));const ye=k?g(be,Ee):h;return ye.width=be,ye.height=Ee,ye.getContext("2d").drawImage(b,0,0,be,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+be+"x"+Ee+")."),ye}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return Ma(b.width)&&Ma(b.height)}function f(b){return a?!1:b.wrapS!==mn||b.wrapT!==mn||b.minFilter!==Wt&&b.minFilter!==on}function v(b,M){return b.generateMipmaps&&M&&b.minFilter!==Wt&&b.minFilter!==on}function E(b){n.generateMipmap(b)}function S(b,M,k,se,ne=!1){if(a===!1)return M;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let te=M;if(M===n.RED&&(k===n.FLOAT&&(te=n.R32F),k===n.HALF_FLOAT&&(te=n.R16F),k===n.UNSIGNED_BYTE&&(te=n.R8)),M===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(te=n.R8UI),k===n.UNSIGNED_SHORT&&(te=n.R16UI),k===n.UNSIGNED_INT&&(te=n.R32UI),k===n.BYTE&&(te=n.R8I),k===n.SHORT&&(te=n.R16I),k===n.INT&&(te=n.R32I)),M===n.RG&&(k===n.FLOAT&&(te=n.RG32F),k===n.HALF_FLOAT&&(te=n.RG16F),k===n.UNSIGNED_BYTE&&(te=n.RG8)),M===n.RGBA){const be=ne?js:tt.getTransfer(se);k===n.FLOAT&&(te=n.RGBA32F),k===n.HALF_FLOAT&&(te=n.RGBA16F),k===n.UNSIGNED_BYTE&&(te=be===st?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function I(b,M,k){return v(b,k)===!0||b.isFramebufferTexture&&b.minFilter!==Wt&&b.minFilter!==on?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function T(b){return b===Wt||b===bl||b===bo?n.NEAREST:n.LINEAR}function R(b){const M=b.target;M.removeEventListener("dispose",R),x(M),M.isVideoTexture&&u.delete(M)}function D(b){const M=b.target;M.removeEventListener("dispose",D),N(M)}function x(b){const M=i.get(b);if(M.__webglInit===void 0)return;const k=b.source,se=d.get(k);if(se){const ne=se[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&y(b),Object.keys(se).length===0&&d.delete(k)}i.remove(b)}function y(b){const M=i.get(b);n.deleteTexture(M.__webglTexture);const k=b.source,se=d.get(k);delete se[M.__cacheKey],o.memory.textures--}function N(b){const M=b.texture,k=i.get(b),se=i.get(M);if(se.__webglTexture!==void 0&&(n.deleteTexture(se.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(k.__webglFramebuffer[ne]))for(let te=0;te<k.__webglFramebuffer[ne].length;te++)n.deleteFramebuffer(k.__webglFramebuffer[ne][te]);else n.deleteFramebuffer(k.__webglFramebuffer[ne]);k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer[ne])}else{if(Array.isArray(k.__webglFramebuffer))for(let ne=0;ne<k.__webglFramebuffer.length;ne++)n.deleteFramebuffer(k.__webglFramebuffer[ne]);else n.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&n.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ne=0;ne<k.__webglColorRenderbuffer.length;ne++)k.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(k.__webglColorRenderbuffer[ne]);k.__webglDepthRenderbuffer&&n.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ne=0,te=M.length;ne<te;ne++){const be=i.get(M[ne]);be.__webglTexture&&(n.deleteTexture(be.__webglTexture),o.memory.textures--),i.remove(M[ne])}i.remove(M),i.remove(b)}let z=0;function $(){z=0}function w(){const b=z;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),z+=1,b}function F(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function P(b,M){const k=i.get(b);if(b.isVideoTexture&&Re(b),b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){const se=b.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(k,b,M);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+M)}function B(b,M){const k=i.get(b);if(b.version>0&&k.__version!==b.version){Se(k,b,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+M)}function H(b,M){const k=i.get(b);if(b.version>0&&k.__version!==b.version){Se(k,b,M);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+M)}function G(b,M){const k=i.get(b);if(b.version>0&&k.__version!==b.version){ae(k,b,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+M)}const X={[va]:n.REPEAT,[mn]:n.CLAMP_TO_EDGE,[Sa]:n.MIRRORED_REPEAT},Z={[Wt]:n.NEAREST,[bl]:n.NEAREST_MIPMAP_NEAREST,[bo]:n.NEAREST_MIPMAP_LINEAR,[on]:n.LINEAR,[Ef]:n.LINEAR_MIPMAP_NEAREST,[zr]:n.LINEAR_MIPMAP_LINEAR},oe={[Pf]:n.NEVER,[Uf]:n.ALWAYS,[Cf]:n.LESS,[dh]:n.LEQUAL,[Lf]:n.EQUAL,[Nf]:n.GEQUAL,[Df]:n.GREATER,[Of]:n.NOTEQUAL};function j(b,M,k){if(k?(n.texParameteri(b,n.TEXTURE_WRAP_S,X[M.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,X[M.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,X[M.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,Z[M.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,Z[M.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==mn||M.wrapT!==mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,T(M.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==Wt&&M.minFilter!==on&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,oe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Wt||M.minFilter!==bo&&M.minFilter!==zr||M.type===Zn&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Hr&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(b,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function J(b,M){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",R));const se=M.source;let ne=d.get(se);ne===void 0&&(ne={},d.set(se,ne));const te=F(M);if(te!==b.__cacheKey){ne[te]===void 0&&(ne[te]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ne[te].usedTimes++;const be=ne[b.__cacheKey];be!==void 0&&(ne[b.__cacheKey].usedTimes--,be.usedTimes===0&&y(M)),b.__cacheKey=te,b.__webglTexture=ne[te].texture}return k}function Se(b,M,k){let se=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=n.TEXTURE_3D);const ne=J(b,M),te=M.source;t.bindTexture(se,b.__webglTexture,n.TEXTURE0+k);const be=i.get(te);if(te.version!==be.__version||ne===!0){t.activeTexture(n.TEXTURE0+k);const Ee=tt.getPrimaries(tt.workingColorSpace),ye=M.colorSpace===ln?null:tt.getPrimaries(M.colorSpace),Le=M.colorSpace===ln||Ee===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Fe=f(M)&&m(M.image)===!1;let ie=_(M.image,Fe,!1,r.maxTextureSize);ie=Me(M,ie);const Xe=m(ie)||a,L=s.convert(M.format,M.colorSpace);let re=s.convert(M.type),ge=S(M.internalFormat,L,re,M.colorSpace,M.isVideoTexture);j(se,M,Xe);let ce;const we=M.mipmaps,qe=a&&M.isVideoTexture!==!0&&ge!==uh,$e=be.__version===void 0||ne===!0,ke=I(M,ie,Xe);if(M.isDepthTexture)ge=n.DEPTH_COMPONENT,a?M.type===Zn?ge=n.DEPTH_COMPONENT32F:M.type===jn?ge=n.DEPTH_COMPONENT24:M.type===_i?ge=n.DEPTH24_STENCIL8:ge=n.DEPTH_COMPONENT16:M.type===Zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ei&&ge===n.DEPTH_COMPONENT&&M.type!==Va&&M.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=jn,re=s.convert(M.type)),M.format===cr&&ge===n.DEPTH_COMPONENT&&(ge=n.DEPTH_STENCIL,M.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=_i,re=s.convert(M.type))),$e&&(qe?t.texStorage2D(n.TEXTURE_2D,1,ge,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,ge,ie.width,ie.height,0,L,re,null));else if(M.isDataTexture)if(we.length>0&&Xe){qe&&$e&&t.texStorage2D(n.TEXTURE_2D,ke,ge,we[0].width,we[0].height);for(let me=0,U=we.length;me<U;me++)ce=we[me],qe?t.texSubImage2D(n.TEXTURE_2D,me,0,0,ce.width,ce.height,L,re,ce.data):t.texImage2D(n.TEXTURE_2D,me,ge,ce.width,ce.height,0,L,re,ce.data);M.generateMipmaps=!1}else qe?($e&&t.texStorage2D(n.TEXTURE_2D,ke,ge,ie.width,ie.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,L,re,ie.data)):t.texImage2D(n.TEXTURE_2D,0,ge,ie.width,ie.height,0,L,re,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qe&&$e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,ge,we[0].width,we[0].height,ie.depth);for(let me=0,U=we.length;me<U;me++)ce=we[me],M.format!==gn?L!==null?qe?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,ce.width,ce.height,ie.depth,L,ce.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,ge,ce.width,ce.height,ie.depth,0,ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,ce.width,ce.height,ie.depth,L,re,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,ge,ce.width,ce.height,ie.depth,0,L,re,ce.data)}else{qe&&$e&&t.texStorage2D(n.TEXTURE_2D,ke,ge,we[0].width,we[0].height);for(let me=0,U=we.length;me<U;me++)ce=we[me],M.format!==gn?L!==null?qe?t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,ce.width,ce.height,L,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,me,ge,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(n.TEXTURE_2D,me,0,0,ce.width,ce.height,L,re,ce.data):t.texImage2D(n.TEXTURE_2D,me,ge,ce.width,ce.height,0,L,re,ce.data)}else if(M.isDataArrayTexture)qe?($e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,ge,ie.width,ie.height,ie.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,L,re,ie.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ge,ie.width,ie.height,ie.depth,0,L,re,ie.data);else if(M.isData3DTexture)qe?($e&&t.texStorage3D(n.TEXTURE_3D,ke,ge,ie.width,ie.height,ie.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,L,re,ie.data)):t.texImage3D(n.TEXTURE_3D,0,ge,ie.width,ie.height,ie.depth,0,L,re,ie.data);else if(M.isFramebufferTexture){if($e)if(qe)t.texStorage2D(n.TEXTURE_2D,ke,ge,ie.width,ie.height);else{let me=ie.width,U=ie.height;for(let fe=0;fe<ke;fe++)t.texImage2D(n.TEXTURE_2D,fe,ge,me,U,0,L,re,null),me>>=1,U>>=1}}else if(we.length>0&&Xe){qe&&$e&&t.texStorage2D(n.TEXTURE_2D,ke,ge,we[0].width,we[0].height);for(let me=0,U=we.length;me<U;me++)ce=we[me],qe?t.texSubImage2D(n.TEXTURE_2D,me,0,0,L,re,ce):t.texImage2D(n.TEXTURE_2D,me,ge,L,re,ce);M.generateMipmaps=!1}else qe?($e&&t.texStorage2D(n.TEXTURE_2D,ke,ge,ie.width,ie.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,L,re,ie)):t.texImage2D(n.TEXTURE_2D,0,ge,L,re,ie);v(M,Xe)&&E(se),be.__version=te.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function ae(b,M,k){if(M.image.length!==6)return;const se=J(b,M),ne=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+k);const te=i.get(ne);if(ne.version!==te.__version||se===!0){t.activeTexture(n.TEXTURE0+k);const be=tt.getPrimaries(tt.workingColorSpace),Ee=M.colorSpace===ln?null:tt.getPrimaries(M.colorSpace),ye=M.colorSpace===ln||be===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Le=M.isCompressedTexture||M.image[0].isCompressedTexture,Fe=M.image[0]&&M.image[0].isDataTexture,ie=[];for(let me=0;me<6;me++)!Le&&!Fe?ie[me]=_(M.image[me],!1,!0,r.maxCubemapSize):ie[me]=Fe?M.image[me].image:M.image[me],ie[me]=Me(M,ie[me]);const Xe=ie[0],L=m(Xe)||a,re=s.convert(M.format,M.colorSpace),ge=s.convert(M.type),ce=S(M.internalFormat,re,ge,M.colorSpace),we=a&&M.isVideoTexture!==!0,qe=te.__version===void 0||se===!0;let $e=I(M,Xe,L);j(n.TEXTURE_CUBE_MAP,M,L);let ke;if(Le){we&&qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,$e,ce,Xe.width,Xe.height);for(let me=0;me<6;me++){ke=ie[me].mipmaps;for(let U=0;U<ke.length;U++){const fe=ke[U];M.format!==gn?re!==null?we?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,U,0,0,fe.width,fe.height,re,fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,U,ce,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,U,0,0,fe.width,fe.height,re,ge,fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,U,ce,fe.width,fe.height,0,re,ge,fe.data)}}}else{ke=M.mipmaps,we&&qe&&(ke.length>0&&$e++,t.texStorage2D(n.TEXTURE_CUBE_MAP,$e,ce,ie[0].width,ie[0].height));for(let me=0;me<6;me++)if(Fe){we?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ie[me].width,ie[me].height,re,ge,ie[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ce,ie[me].width,ie[me].height,0,re,ge,ie[me].data);for(let U=0;U<ke.length;U++){const pe=ke[U].image[me].image;we?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,U+1,0,0,pe.width,pe.height,re,ge,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,U+1,ce,pe.width,pe.height,0,re,ge,pe.data)}}else{we?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,re,ge,ie[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ce,re,ge,ie[me]);for(let U=0;U<ke.length;U++){const fe=ke[U];we?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,U+1,0,0,re,ge,fe.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,U+1,ce,re,ge,fe.image[me])}}}v(M,L)&&E(n.TEXTURE_CUBE_MAP),te.__version=ne.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function he(b,M,k,se,ne,te){const be=s.convert(k.format,k.colorSpace),Ee=s.convert(k.type),ye=S(k.internalFormat,be,Ee,k.colorSpace);if(!i.get(M).__hasExternalTextures){const Fe=Math.max(1,M.width>>te),ie=Math.max(1,M.height>>te);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,te,ye,Fe,ie,M.depth,0,be,Ee,null):t.texImage2D(ne,te,ye,Fe,ie,0,be,Ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Q(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ne,i.get(k).__webglTexture,0,le(M)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ne,i.get(k).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(b,M,k){if(n.bindRenderbuffer(n.RENDERBUFFER,b),M.depthBuffer&&!M.stencilBuffer){let se=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(k||Q(M)){const ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Zn?se=n.DEPTH_COMPONENT32F:ne.type===jn&&(se=n.DEPTH_COMPONENT24));const te=le(M);Q(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,se,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,te,se,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,se,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(M.depthBuffer&&M.stencilBuffer){const se=le(M);k&&Q(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,M.width,M.height):Q(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const se=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0;ne<se.length;ne++){const te=se[ne],be=s.convert(te.format,te.colorSpace),Ee=s.convert(te.type),ye=S(te.internalFormat,be,Ee,te.colorSpace),Le=le(M);k&&Q(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,ye,M.width,M.height):Q(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,ye,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ye,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),P(M.depthTexture,0);const se=i.get(M.depthTexture).__webglTexture,ne=le(M);if(M.depthTexture.format===Ei)Q(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(M.depthTexture.format===cr)Q(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function xe(b){const M=i.get(b),k=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ce(M.__webglFramebuffer,b)}else if(k){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]=n.createRenderbuffer(),Ae(M.__webglDepthbuffer[se],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),Ae(M.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(b,M,k){const se=i.get(b);M!==void 0&&he(se.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&xe(b)}function O(b){const M=b.texture,k=i.get(b),se=i.get(M);b.addEventListener("dispose",D),b.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=M.version,o.memory.textures++);const ne=b.isWebGLCubeRenderTarget===!0,te=b.isWebGLMultipleRenderTargets===!0,be=m(b)||a;if(ne){k.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(a&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[Ee]=[];for(let ye=0;ye<M.mipmaps.length;ye++)k.__webglFramebuffer[Ee][ye]=n.createFramebuffer()}else k.__webglFramebuffer[Ee]=n.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let Ee=0;Ee<M.mipmaps.length;Ee++)k.__webglFramebuffer[Ee]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(te)if(r.drawBuffers){const Ee=b.texture;for(let ye=0,Le=Ee.length;ye<Le;ye++){const Fe=i.get(Ee[ye]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Q(b)===!1){const Ee=te?M:[M];k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ye=0;ye<Ee.length;ye++){const Le=Ee[ye];k.__webglColorRenderbuffer[ye]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ye]);const Fe=s.convert(Le.format,Le.colorSpace),ie=s.convert(Le.type),Xe=S(Le.internalFormat,Fe,ie,Le.colorSpace,b.isXRRenderTarget===!0),L=le(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,L,Xe,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,k.__webglColorRenderbuffer[ye])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Ae(k.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),j(n.TEXTURE_CUBE_MAP,M,be);for(let Ee=0;Ee<6;Ee++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)he(k.__webglFramebuffer[Ee][ye],b,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ye);else he(k.__webglFramebuffer[Ee],b,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);v(M,be)&&E(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const Ee=b.texture;for(let ye=0,Le=Ee.length;ye<Le;ye++){const Fe=Ee[ye],ie=i.get(Fe);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),j(n.TEXTURE_2D,Fe,be),he(k.__webglFramebuffer,b,Fe,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,0),v(Fe,be)&&E(n.TEXTURE_2D)}t.unbindTexture()}else{let Ee=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?Ee=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ee,se.__webglTexture),j(Ee,M,be),a&&M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)he(k.__webglFramebuffer[ye],b,M,n.COLOR_ATTACHMENT0,Ee,ye);else he(k.__webglFramebuffer,b,M,n.COLOR_ATTACHMENT0,Ee,0);v(M,be)&&E(Ee),t.unbindTexture()}b.depthBuffer&&xe(b)}function de(b){const M=m(b)||a,k=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let se=0,ne=k.length;se<ne;se++){const te=k[se];if(v(te,M)){const be=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ee=i.get(te).__webglTexture;t.bindTexture(be,Ee),E(be),t.unbindTexture()}}}function K(b){if(a&&b.samples>0&&Q(b)===!1){const M=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],k=b.width,se=b.height;let ne=n.COLOR_BUFFER_BIT;const te=[],be=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(b),ye=b.isWebGLMultipleRenderTargets===!0;if(ye)for(let Le=0;Le<M.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Le=0;Le<M.length;Le++){te.push(n.COLOR_ATTACHMENT0+Le),b.depthBuffer&&te.push(be);const Fe=Ee.__ignoreDepthValues!==void 0?Ee.__ignoreDepthValues:!1;if(Fe===!1&&(b.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),ye&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Le]),Fe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[be]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[be])),ye){const ie=i.get(M[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,k,se,0,0,k,se,ne,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ye)for(let Le=0;Le<M.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Le]);const Fe=i.get(M[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}}function le(b){return Math.min(r.maxSamples,b.samples)}function Q(b){const M=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Re(b){const M=o.render.frame;u.get(b)!==M&&(u.set(b,M),b.update())}function Me(b,M){const k=b.colorSpace,se=b.format,ne=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===xa||k!==Un&&k!==ln&&(tt.getTransfer(k)===st?a===!1?e.has("EXT_sRGB")===!0&&se===gn?(b.format=xa,b.minFilter=on,b.generateMipmaps=!1):M=ph.sRGBToLinear(M):(se!==gn||ne!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}this.allocateTextureUnit=w,this.resetTextureUnits=$,this.setTexture2D=P,this.setTexture2DArray=B,this.setTexture3D=H,this.setTextureCube=G,this.rebindTextures=De,this.setupRenderTarget=O,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Q}function $0(n,e,t){const i=t.isWebGL2;function r(s,o=ln){let a;const l=tt.getTransfer(o);if(s===Qn)return n.UNSIGNED_BYTE;if(s===sh)return n.UNSIGNED_SHORT_4_4_4_4;if(s===oh)return n.UNSIGNED_SHORT_5_5_5_1;if(s===vf)return n.BYTE;if(s===Sf)return n.SHORT;if(s===Va)return n.UNSIGNED_SHORT;if(s===rh)return n.INT;if(s===jn)return n.UNSIGNED_INT;if(s===Zn)return n.FLOAT;if(s===Hr)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===xf)return n.ALPHA;if(s===gn)return n.RGBA;if(s===Mf)return n.LUMINANCE;if(s===yf)return n.LUMINANCE_ALPHA;if(s===Ei)return n.DEPTH_COMPONENT;if(s===cr)return n.DEPTH_STENCIL;if(s===xa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Tf)return n.RED;if(s===ah)return n.RED_INTEGER;if(s===bf)return n.RG;if(s===lh)return n.RG_INTEGER;if(s===ch)return n.RGBA_INTEGER;if(s===Ao||s===Ro||s===wo||s===Io)if(l===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ao)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ro)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Io)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ao)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ro)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Io)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Al||s===Rl||s===wl||s===Il)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Al)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===wl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Il)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===uh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Pl||s===Cl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Pl)return l===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Cl)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ll||s===Dl||s===Ol||s===Nl||s===Ul||s===Fl||s===Bl||s===Gl||s===zl||s===Hl||s===Vl||s===kl||s===Wl||s===Xl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ll)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Dl)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ol)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Nl)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ul)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fl)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Bl)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gl)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zl)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hl)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vl)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===kl)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wl)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xl)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Po||s===ql||s===Yl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Po)return l===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ql)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Yl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Af||s===jl||s===Zl||s===$l)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Po)return a.COMPRESSED_RED_RGTC1_EXT;if(s===jl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Zl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$l)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_i?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class K0 extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ms extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Q0={type:"move"};class Jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Q0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ms;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class J0 extends Ai{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const _=t.getContextAttributes();let m=null,f=null;const v=[],E=[],S=new ue;let I=null;const T=new an;T.layers.enable(1),T.viewport=new Ot;const R=new an;R.layers.enable(2),R.viewport=new Ot;const D=[T,R],x=new K0;x.layers.enable(1),x.layers.enable(2);let y=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let J=v[j];return J===void 0&&(J=new Jo,v[j]=J),J.getTargetRaySpace()},this.getControllerGrip=function(j){let J=v[j];return J===void 0&&(J=new Jo,v[j]=J),J.getGripSpace()},this.getHand=function(j){let J=v[j];return J===void 0&&(J=new Jo,v[j]=J),J.getHandSpace()};function z(j){const J=E.indexOf(j.inputSource);if(J===-1)return;const Se=v[J];Se!==void 0&&(Se.update(j.inputSource,j.frame,c||o),Se.dispatchEvent({type:j.type,data:j.inputSource}))}function $(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",w);for(let j=0;j<v.length;j++){const J=E[j];J!==null&&(E[j]=null,v[j].disconnect(J))}y=null,N=null,e.setRenderTarget(m),p=null,d=null,h=null,r=null,f=null,oe.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",$),r.addEventListener("inputsourceschange",w),_.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new yi(p.framebufferWidth,p.framebufferHeight,{format:gn,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let J=null,Se=null,ae=null;_.depth&&(ae=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=_.stencil?cr:Ei,Se=_.stencil?_i:jn);const he={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(he),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new yi(d.textureWidth,d.textureHeight,{format:gn,type:Qn,depthTexture:new Ah(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ae=e.properties.get(f);Ae.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),oe.setContext(r),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function w(j){for(let J=0;J<j.removed.length;J++){const Se=j.removed[J],ae=E.indexOf(Se);ae>=0&&(E[ae]=null,v[ae].disconnect(Se))}for(let J=0;J<j.added.length;J++){const Se=j.added[J];let ae=E.indexOf(Se);if(ae===-1){for(let Ae=0;Ae<v.length;Ae++)if(Ae>=E.length){E.push(Se),ae=Ae;break}else if(E[Ae]===null){E[Ae]=Se,ae=Ae;break}if(ae===-1)break}const he=v[ae];he&&he.connect(Se)}}const F=new C,P=new C;function B(j,J,Se){F.setFromMatrixPosition(J.matrixWorld),P.setFromMatrixPosition(Se.matrixWorld);const ae=F.distanceTo(P),he=J.projectionMatrix.elements,Ae=Se.projectionMatrix.elements,Ce=he[14]/(he[10]-1),xe=he[14]/(he[10]+1),De=(he[9]+1)/he[5],O=(he[9]-1)/he[5],de=(he[8]-1)/he[0],K=(Ae[8]+1)/Ae[0],le=Ce*de,Q=Ce*K,Re=ae/(-de+K),Me=Re*-de;J.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Me),j.translateZ(Re),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const b=Ce+Re,M=xe+Re,k=le-Me,se=Q+(ae-Me),ne=De*xe/M*b,te=O*xe/M*b;j.projectionMatrix.makePerspective(k,se,ne,te,b,M),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function H(j,J){J===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(J.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;x.near=R.near=T.near=j.near,x.far=R.far=T.far=j.far,(y!==x.near||N!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),y=x.near,N=x.far);const J=j.parent,Se=x.cameras;H(x,J);for(let ae=0;ae<Se.length;ae++)H(Se[ae],J);Se.length===2?B(x,T,R):x.projectionMatrix.copy(T.projectionMatrix),G(j,x,J)};function G(j,J,Se){Se===null?j.matrix.copy(J.matrixWorld):(j.matrix.copy(Se.matrixWorld),j.matrix.invert(),j.matrix.multiply(J.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Vr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)};let X=null;function Z(j,J){if(u=J.getViewerPose(c||o),g=J,u!==null){const Se=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ae=!1;Se.length!==x.cameras.length&&(x.cameras.length=0,ae=!0);for(let he=0;he<Se.length;he++){const Ae=Se[he];let Ce=null;if(p!==null)Ce=p.getViewport(Ae);else{const De=h.getViewSubImage(d,Ae);Ce=De.viewport,he===0&&(e.setRenderTargetTextures(f,De.colorTexture,d.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(f))}let xe=D[he];xe===void 0&&(xe=new an,xe.layers.enable(he),xe.viewport=new Ot,D[he]=xe),xe.matrix.fromArray(Ae.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(Ae.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),he===0&&(x.matrix.copy(xe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ae===!0&&x.cameras.push(xe)}}for(let Se=0;Se<v.length;Se++){const ae=E[Se],he=v[Se];ae!==null&&he!==void 0&&he.update(ae,J,c||o)}X&&X(j,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const oe=new Th;oe.setAnimationLoop(Z),this.setAnimationLoop=function(j){X=j},this.dispose=function(){}}}function eE(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Sh(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,v,E,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===jt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===jt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const E=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*E,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=E*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===jt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function tE(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,E){const S=E.program;i.uniformBlockBinding(v,S)}function c(v,E){let S=r[v.id];S===void 0&&(g(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",m));const I=E.program;i.updateUBOMapping(v,I);const T=e.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function u(v){const E=h();v.__bindingPointIndex=E;const S=n.createBuffer(),I=v.__size,T=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,I,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,S),S}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const E=r[v.id],S=v.uniforms,I=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let T=0,R=S.length;T<R;T++){const D=Array.isArray(S[T])?S[T]:[S[T]];for(let x=0,y=D.length;x<y;x++){const N=D[x];if(p(N,T,x,I)===!0){const z=N.__offset,$=Array.isArray(N.value)?N.value:[N.value];let w=0;for(let F=0;F<$.length;F++){const P=$[F],B=_(P);typeof P=="number"||typeof P=="boolean"?(N.__data[0]=P,n.bufferSubData(n.UNIFORM_BUFFER,z+w,N.__data)):P.isMatrix3?(N.__data[0]=P.elements[0],N.__data[1]=P.elements[1],N.__data[2]=P.elements[2],N.__data[3]=0,N.__data[4]=P.elements[3],N.__data[5]=P.elements[4],N.__data[6]=P.elements[5],N.__data[7]=0,N.__data[8]=P.elements[6],N.__data[9]=P.elements[7],N.__data[10]=P.elements[8],N.__data[11]=0):(P.toArray(N.__data,w),w+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,E,S,I){const T=v.value,R=E+"_"+S;if(I[R]===void 0)return typeof T=="number"||typeof T=="boolean"?I[R]=T:I[R]=T.clone(),!0;{const D=I[R];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return I[R]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function g(v){const E=v.uniforms;let S=0;const I=16;for(let R=0,D=E.length;R<D;R++){const x=Array.isArray(E[R])?E[R]:[E[R]];for(let y=0,N=x.length;y<N;y++){const z=x[y],$=Array.isArray(z.value)?z.value:[z.value];for(let w=0,F=$.length;w<F;w++){const P=$[w],B=_(P),H=S%I;H!==0&&I-H<B.boundary&&(S+=I-H),z.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=B.storage}}}const T=S%I;return T>0&&(S+=I-T),v.__size=S,v.__cache={},this}function _(v){const E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),E}function m(v){const E=v.target;E.removeEventListener("dispose",m);const S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function f(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Lh{constructor(e={}){const{canvas:t=Kf(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this._useLegacyLights=!1,this.toneMapping=Kn,this.toneMappingExposure=1;const E=this;let S=!1,I=0,T=0,R=null,D=-1,x=null;const y=new Ot,N=new Ot;let z=null;const $=new Ve(0);let w=0,F=t.width,P=t.height,B=1,H=null,G=null;const X=new Ot(0,0,F,P),Z=new Ot(0,0,F,P);let oe=!1;const j=new yh;let J=!1,Se=!1,ae=null;const he=new pt,Ae=new ue,Ce=new C,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return R===null?B:1}let O=i;function de(A,V){for(let q=0;q<A.length;q++){const Y=A[q],W=t.getContext(Y,V);if(W!==null)return W}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${za}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",fe,!1),O===null){const V=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&V.shift(),O=de(V,A),O===null)throw de(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let K,le,Q,Re,Me,b,M,k,se,ne,te,be,Ee,ye,Le,Fe,ie,Xe,L,re,ge,ce,we,qe;function $e(){K=new h_(O),le=new s_(O,K,e),K.init(le),ce=new $0(O,K,le),Q=new j0(O,K,le),Re=new p_(O),Me=new O0,b=new Z0(O,K,Q,Me,le,ce,Re),M=new a_(E),k=new u_(E),se=new Mp(O,le),we=new i_(O,K,se,le),ne=new d_(O,se,Re,we),te=new E_(O,ne,se,Re),L=new __(O,le,b),Fe=new o_(Me),be=new D0(E,M,k,K,le,we,Fe),Ee=new eE(E,Me),ye=new U0,Le=new V0(K,le),Xe=new n_(E,M,k,Q,te,d,l),ie=new Y0(E,te,le),qe=new tE(O,Re,le,Q),re=new r_(O,K,Re,le),ge=new f_(O,K,Re,le),Re.programs=be.programs,E.capabilities=le,E.extensions=K,E.properties=Me,E.renderLists=ye,E.shadowMap=ie,E.state=Q,E.info=Re}$e();const ke=new J0(E,O);this.xr=ke,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=K.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=K.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(A){A!==void 0&&(B=A,this.setSize(F,P,!1))},this.getSize=function(A){return A.set(F,P)},this.setSize=function(A,V,q=!0){if(ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,P=V,t.width=Math.floor(A*B),t.height=Math.floor(V*B),q===!0&&(t.style.width=A+"px",t.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(F*B,P*B).floor()},this.setDrawingBufferSize=function(A,V,q){F=A,P=V,B=q,t.width=Math.floor(A*q),t.height=Math.floor(V*q),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(X)},this.setViewport=function(A,V,q,Y){A.isVector4?X.set(A.x,A.y,A.z,A.w):X.set(A,V,q,Y),Q.viewport(y.copy(X).multiplyScalar(B).floor())},this.getScissor=function(A){return A.copy(Z)},this.setScissor=function(A,V,q,Y){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,V,q,Y),Q.scissor(N.copy(Z).multiplyScalar(B).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(A){Q.setScissorTest(oe=A)},this.setOpaqueSort=function(A){H=A},this.setTransparentSort=function(A){G=A},this.getClearColor=function(A){return A.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(A=!0,V=!0,q=!0){let Y=0;if(A){let W=!1;if(R!==null){const Te=R.texture.format;W=Te===ch||Te===lh||Te===ah}if(W){const Te=R.texture.type,Pe=Te===Qn||Te===jn||Te===Va||Te===_i||Te===sh||Te===oh,Ne=Xe.getClearColor(),Ue=Xe.getClearAlpha(),We=Ne.r,Ge=Ne.g,ze=Ne.b;Pe?(p[0]=We,p[1]=Ge,p[2]=ze,p[3]=Ue,O.clearBufferuiv(O.COLOR,0,p)):(g[0]=We,g[1]=Ge,g[2]=ze,g[3]=Ue,O.clearBufferiv(O.COLOR,0,g))}else Y|=O.COLOR_BUFFER_BIT}V&&(Y|=O.DEPTH_BUFFER_BIT),q&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),ye.dispose(),Le.dispose(),Me.dispose(),M.dispose(),k.dispose(),te.dispose(),we.dispose(),qe.dispose(),be.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Gt),ke.removeEventListener("sessionend",rt),ae&&(ae.dispose(),ae=null),zt.stop()};function me(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=Re.autoReset,V=ie.enabled,q=ie.autoUpdate,Y=ie.needsUpdate,W=ie.type;$e(),Re.autoReset=A,ie.enabled=V,ie.autoUpdate=q,ie.needsUpdate=Y,ie.type=W}function fe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function pe(A){const V=A.target;V.removeEventListener("dispose",pe),Oe(V)}function Oe(A){Ie(A),Me.remove(A)}function Ie(A){const V=Me.get(A).programs;V!==void 0&&(V.forEach(function(q){be.releaseProgram(q)}),A.isShaderMaterial&&be.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,q,Y,W,Te){V===null&&(V=xe);const Pe=W.isMesh&&W.matrixWorld.determinant()<0,Ne=Dd(A,V,q,Y,W);Q.setMaterial(Y,Pe);let Ue=q.index,We=1;if(Y.wireframe===!0){if(Ue=ne.getWireframeAttribute(q),Ue===void 0)return;We=2}const Ge=q.drawRange,ze=q.attributes.position;let dt=Ge.start*We,Zt=(Ge.start+Ge.count)*We;Te!==null&&(dt=Math.max(dt,Te.start*We),Zt=Math.min(Zt,(Te.start+Te.count)*We)),Ue!==null?(dt=Math.max(dt,0),Zt=Math.min(Zt,Ue.count)):ze!=null&&(dt=Math.max(dt,0),Zt=Math.min(Zt,ze.count));const bt=Zt-dt;if(bt<0||bt===1/0)return;we.setup(W,Y,Ne,q,Ue);let Rn,at=re;if(Ue!==null&&(Rn=se.get(Ue),at=ge,at.setIndex(Rn)),W.isMesh)Y.wireframe===!0?(Q.setLineWidth(Y.wireframeLinewidth*De()),at.setMode(O.LINES)):at.setMode(O.TRIANGLES);else if(W.isLine){let Ye=Y.linewidth;Ye===void 0&&(Ye=1),Q.setLineWidth(Ye*De()),W.isLineSegments?at.setMode(O.LINES):W.isLineLoop?at.setMode(O.LINE_LOOP):at.setMode(O.LINE_STRIP)}else W.isPoints?at.setMode(O.POINTS):W.isSprite&&at.setMode(O.TRIANGLES);if(W.isBatchedMesh)at.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)at.renderInstances(dt,bt,W.count);else if(q.isInstancedBufferGeometry){const Ye=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,xo=Math.min(q.instanceCount,Ye);at.renderInstances(dt,bt,xo)}else at.render(dt,bt)};function Qe(A,V,q){A.transparent===!0&&A.side===Tn&&A.forceSinglePass===!1?(A.side=jt,A.needsUpdate=!0,Jr(A,V,q),A.side=ti,A.needsUpdate=!0,Jr(A,V,q),A.side=Tn):Jr(A,V,q)}this.compile=function(A,V,q=null){q===null&&(q=A),m=Le.get(q),m.init(),v.push(m),q.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),A!==q&&A.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(E._useLegacyLights);const Y=new Set;return A.traverse(function(W){const Te=W.material;if(Te)if(Array.isArray(Te))for(let Pe=0;Pe<Te.length;Pe++){const Ne=Te[Pe];Qe(Ne,q,W),Y.add(Ne)}else Qe(Te,q,W),Y.add(Te)}),v.pop(),m=null,Y},this.compileAsync=function(A,V,q=null){const Y=this.compile(A,V,q);return new Promise(W=>{function Te(){if(Y.forEach(function(Pe){Me.get(Pe).currentProgram.isReady()&&Y.delete(Pe)}),Y.size===0){W(A);return}setTimeout(Te,10)}K.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Je=null;function Tt(A){Je&&Je(A)}function Gt(){zt.stop()}function rt(){zt.start()}const zt=new Th;zt.setAnimationLoop(Tt),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(A){Je=A,ke.setAnimationLoop(A),A===null?zt.stop():zt.start()},ke.addEventListener("sessionstart",Gt),ke.addEventListener("sessionend",rt),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(V),V=ke.getCamera()),A.isScene===!0&&A.onBeforeRender(E,A,V,R),m=Le.get(A,v.length),m.init(),v.push(m),he.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),j.setFromProjectionMatrix(he),Se=this.localClippingEnabled,J=Fe.init(this.clippingPlanes,Se),_=ye.get(A,f.length),_.init(),f.push(_),Sn(A,V,0,E.sortObjects),_.finish(),E.sortObjects===!0&&_.sort(H,G),this.info.render.frame++,J===!0&&Fe.beginShadows();const q=m.state.shadowsArray;if(ie.render(q,A,V),J===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xe.render(_,A),m.setupLights(E._useLegacyLights),V.isArrayCamera){const Y=V.cameras;for(let W=0,Te=Y.length;W<Te;W++){const Pe=Y[W];fl(_,A,Pe,Pe.viewport)}}else fl(_,A,V);R!==null&&(b.updateMultisampleRenderTarget(R),b.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(E,A,V),we.resetDefaultState(),D=-1,x=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Sn(A,V,q,Y){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){Y&&Ce.setFromMatrixPosition(A.matrixWorld).applyMatrix4(he);const Pe=te.update(A),Ne=A.material;Ne.visible&&_.push(A,Pe,Ne,q,Ce.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){const Pe=te.update(A),Ne=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ce.copy(A.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ce.copy(Pe.boundingSphere.center)),Ce.applyMatrix4(A.matrixWorld).applyMatrix4(he)),Array.isArray(Ne)){const Ue=Pe.groups;for(let We=0,Ge=Ue.length;We<Ge;We++){const ze=Ue[We],dt=Ne[ze.materialIndex];dt&&dt.visible&&_.push(A,Pe,dt,q,Ce.z,ze)}}else Ne.visible&&_.push(A,Pe,Ne,q,Ce.z,null)}}const Te=A.children;for(let Pe=0,Ne=Te.length;Pe<Ne;Pe++)Sn(Te[Pe],V,q,Y)}function fl(A,V,q,Y){const W=A.opaque,Te=A.transmissive,Pe=A.transparent;m.setupLightsView(q),J===!0&&Fe.setGlobalState(E.clippingPlanes,q),Te.length>0&&Ld(W,Te,V,q),Y&&Q.viewport(y.copy(Y)),W.length>0&&Qr(W,V,q),Te.length>0&&Qr(Te,V,q),Pe.length>0&&Qr(Pe,V,q),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Ld(A,V,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const Te=le.isWebGL2;ae===null&&(ae=new yi(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")?Hr:Qn,minFilter:zr,samples:Te?4:0})),E.getDrawingBufferSize(Ae),Te?ae.setSize(Ae.x,Ae.y):ae.setSize(Qs(Ae.x),Qs(Ae.y));const Pe=E.getRenderTarget();E.setRenderTarget(ae),E.getClearColor($),w=E.getClearAlpha(),w<1&&E.setClearColor(16777215,.5),E.clear();const Ne=E.toneMapping;E.toneMapping=Kn,Qr(A,q,Y),b.updateMultisampleRenderTarget(ae),b.updateRenderTargetMipmap(ae);let Ue=!1;for(let We=0,Ge=V.length;We<Ge;We++){const ze=V[We],dt=ze.object,Zt=ze.geometry,bt=ze.material,Rn=ze.group;if(bt.side===Tn&&dt.layers.test(Y.layers)){const at=bt.side;bt.side=jt,bt.needsUpdate=!0,pl(dt,q,Y,Zt,bt,Rn),bt.side=at,bt.needsUpdate=!0,Ue=!0}}Ue===!0&&(b.updateMultisampleRenderTarget(ae),b.updateRenderTargetMipmap(ae)),E.setRenderTarget(Pe),E.setClearColor($,w),E.toneMapping=Ne}function Qr(A,V,q){const Y=V.isScene===!0?V.overrideMaterial:null;for(let W=0,Te=A.length;W<Te;W++){const Pe=A[W],Ne=Pe.object,Ue=Pe.geometry,We=Y===null?Pe.material:Y,Ge=Pe.group;Ne.layers.test(q.layers)&&pl(Ne,V,q,Ue,We,Ge)}}function pl(A,V,q,Y,W,Te){A.onBeforeRender(E,V,q,Y,W,Te),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(E,V,q,Y,A,Te),W.transparent===!0&&W.side===Tn&&W.forceSinglePass===!1?(W.side=jt,W.needsUpdate=!0,E.renderBufferDirect(q,V,Y,W,A,Te),W.side=ti,W.needsUpdate=!0,E.renderBufferDirect(q,V,Y,W,A,Te),W.side=Tn):E.renderBufferDirect(q,V,Y,W,A,Te),A.onAfterRender(E,V,q,Y,W,Te)}function Jr(A,V,q){V.isScene!==!0&&(V=xe);const Y=Me.get(A),W=m.state.lights,Te=m.state.shadowsArray,Pe=W.state.version,Ne=be.getParameters(A,W.state,Te,V,q),Ue=be.getProgramCacheKey(Ne);let We=Y.programs;Y.environment=A.isMeshStandardMaterial?V.environment:null,Y.fog=V.fog,Y.envMap=(A.isMeshStandardMaterial?k:M).get(A.envMap||Y.environment),We===void 0&&(A.addEventListener("dispose",pe),We=new Map,Y.programs=We);let Ge=We.get(Ue);if(Ge!==void 0){if(Y.currentProgram===Ge&&Y.lightsStateVersion===Pe)return gl(A,Ne),Ge}else Ne.uniforms=be.getUniforms(A),A.onBuild(q,Ne,E),A.onBeforeCompile(Ne,E),Ge=be.acquireProgram(Ne,Ue),We.set(Ue,Ge),Y.uniforms=Ne.uniforms;const ze=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=Fe.uniform),gl(A,Ne),Y.needsLights=Nd(A),Y.lightsStateVersion=Pe,Y.needsLights&&(ze.ambientLightColor.value=W.state.ambient,ze.lightProbe.value=W.state.probe,ze.directionalLights.value=W.state.directional,ze.directionalLightShadows.value=W.state.directionalShadow,ze.spotLights.value=W.state.spot,ze.spotLightShadows.value=W.state.spotShadow,ze.rectAreaLights.value=W.state.rectArea,ze.ltc_1.value=W.state.rectAreaLTC1,ze.ltc_2.value=W.state.rectAreaLTC2,ze.pointLights.value=W.state.point,ze.pointLightShadows.value=W.state.pointShadow,ze.hemisphereLights.value=W.state.hemi,ze.directionalShadowMap.value=W.state.directionalShadowMap,ze.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ze.spotShadowMap.value=W.state.spotShadowMap,ze.spotLightMatrix.value=W.state.spotLightMatrix,ze.spotLightMap.value=W.state.spotLightMap,ze.pointShadowMap.value=W.state.pointShadowMap,ze.pointShadowMatrix.value=W.state.pointShadowMatrix),Y.currentProgram=Ge,Y.uniformsList=null,Ge}function ml(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=Hs.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function gl(A,V){const q=Me.get(A);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function Dd(A,V,q,Y,W){V.isScene!==!0&&(V=xe),b.resetTextureUnits();const Te=V.fog,Pe=Y.isMeshStandardMaterial?V.environment:null,Ne=R===null?E.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Un,Ue=(Y.isMeshStandardMaterial?k:M).get(Y.envMap||Pe),We=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ge=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ze=!!q.morphAttributes.position,dt=!!q.morphAttributes.normal,Zt=!!q.morphAttributes.color;let bt=Kn;Y.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(bt=E.toneMapping);const Rn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,at=Rn!==void 0?Rn.length:0,Ye=Me.get(Y),xo=m.state.lights;if(J===!0&&(Se===!0||A!==x)){const en=A===x&&Y.id===D;Fe.setState(Y,A,en)}let ct=!1;Y.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==xo.state.version||Ye.outputColorSpace!==Ne||W.isBatchedMesh&&Ye.batching===!1||!W.isBatchedMesh&&Ye.batching===!0||W.isInstancedMesh&&Ye.instancing===!1||!W.isInstancedMesh&&Ye.instancing===!0||W.isSkinnedMesh&&Ye.skinning===!1||!W.isSkinnedMesh&&Ye.skinning===!0||W.isInstancedMesh&&Ye.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ye.instancingColor===!1&&W.instanceColor!==null||Ye.envMap!==Ue||Y.fog===!0&&Ye.fog!==Te||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Fe.numPlanes||Ye.numIntersection!==Fe.numIntersection)||Ye.vertexAlphas!==We||Ye.vertexTangents!==Ge||Ye.morphTargets!==ze||Ye.morphNormals!==dt||Ye.morphColors!==Zt||Ye.toneMapping!==bt||le.isWebGL2===!0&&Ye.morphTargetsCount!==at)&&(ct=!0):(ct=!0,Ye.__version=Y.version);let ni=Ye.currentProgram;ct===!0&&(ni=Jr(Y,V,W));let _l=!1,mr=!1,Mo=!1;const Nt=ni.getUniforms(),ii=Ye.uniforms;if(Q.useProgram(ni.program)&&(_l=!0,mr=!0,Mo=!0),Y.id!==D&&(D=Y.id,mr=!0),_l||x!==A){Nt.setValue(O,"projectionMatrix",A.projectionMatrix),Nt.setValue(O,"viewMatrix",A.matrixWorldInverse);const en=Nt.map.cameraPosition;en!==void 0&&en.setValue(O,Ce.setFromMatrixPosition(A.matrixWorld)),le.logarithmicDepthBuffer&&Nt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Nt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,mr=!0,Mo=!0)}if(W.isSkinnedMesh){Nt.setOptional(O,W,"bindMatrix"),Nt.setOptional(O,W,"bindMatrixInverse");const en=W.skeleton;en&&(le.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),Nt.setValue(O,"boneTexture",en.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Nt.setOptional(O,W,"batchingTexture"),Nt.setValue(O,"batchingTexture",W._matricesTexture,b));const yo=q.morphAttributes;if((yo.position!==void 0||yo.normal!==void 0||yo.color!==void 0&&le.isWebGL2===!0)&&L.update(W,q,ni),(mr||Ye.receiveShadow!==W.receiveShadow)&&(Ye.receiveShadow=W.receiveShadow,Nt.setValue(O,"receiveShadow",W.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(ii.envMap.value=Ue,ii.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),mr&&(Nt.setValue(O,"toneMappingExposure",E.toneMappingExposure),Ye.needsLights&&Od(ii,Mo),Te&&Y.fog===!0&&Ee.refreshFogUniforms(ii,Te),Ee.refreshMaterialUniforms(ii,Y,B,P,ae),Hs.upload(O,ml(Ye),ii,b)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Hs.upload(O,ml(Ye),ii,b),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Nt.setValue(O,"center",W.center),Nt.setValue(O,"modelViewMatrix",W.modelViewMatrix),Nt.setValue(O,"normalMatrix",W.normalMatrix),Nt.setValue(O,"modelMatrix",W.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const en=Y.uniformsGroups;for(let To=0,Ud=en.length;To<Ud;To++)if(le.isWebGL2){const El=en[To];qe.update(El,ni),qe.bind(El,ni)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ni}function Od(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Nd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,V,q){Me.get(A.texture).__webglTexture=V,Me.get(A.depthTexture).__webglTexture=q;const Y=Me.get(A);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,V){const q=Me.get(A);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,q=0){R=A,I=V,T=q;let Y=!0,W=null,Te=!1,Pe=!1;if(A){const Ue=Me.get(A);Ue.__useDefaultFramebuffer!==void 0?(Q.bindFramebuffer(O.FRAMEBUFFER,null),Y=!1):Ue.__webglFramebuffer===void 0?b.setupRenderTarget(A):Ue.__hasExternalTextures&&b.rebindTextures(A,Me.get(A.texture).__webglTexture,Me.get(A.depthTexture).__webglTexture);const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Pe=!0);const Ge=Me.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ge[V])?W=Ge[V][q]:W=Ge[V],Te=!0):le.isWebGL2&&A.samples>0&&b.useMultisampledRTT(A)===!1?W=Me.get(A).__webglMultisampledFramebuffer:Array.isArray(Ge)?W=Ge[q]:W=Ge,y.copy(A.viewport),N.copy(A.scissor),z=A.scissorTest}else y.copy(X).multiplyScalar(B).floor(),N.copy(Z).multiplyScalar(B).floor(),z=oe;if(Q.bindFramebuffer(O.FRAMEBUFFER,W)&&le.drawBuffers&&Y&&Q.drawBuffers(A,W),Q.viewport(y),Q.scissor(N),Q.setScissorTest(z),Te){const Ue=Me.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ue.__webglTexture,q)}else if(Pe){const Ue=Me.get(A.texture),We=V||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ue.__webglTexture,q||0,We)}D=-1},this.readRenderTargetPixels=function(A,V,q,Y,W,Te,Pe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){Q.bindFramebuffer(O.FRAMEBUFFER,Ne);try{const Ue=A.texture,We=Ue.format,Ge=Ue.type;if(We!==gn&&ce.convert(We)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Ge===Hr&&(K.has("EXT_color_buffer_half_float")||le.isWebGL2&&K.has("EXT_color_buffer_float"));if(Ge!==Qn&&ce.convert(Ge)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===Zn&&(le.isWebGL2||K.has("OES_texture_float")||K.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-Y&&q>=0&&q<=A.height-W&&O.readPixels(V,q,Y,W,ce.convert(We),ce.convert(Ge),Te)}finally{const Ue=R!==null?Me.get(R).__webglFramebuffer:null;Q.bindFramebuffer(O.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(A,V,q=0){const Y=Math.pow(2,-q),W=Math.floor(V.image.width*Y),Te=Math.floor(V.image.height*Y);b.setTexture2D(V,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,A.x,A.y,W,Te),Q.unbindTexture()},this.copyTextureToTexture=function(A,V,q,Y=0){const W=V.image.width,Te=V.image.height,Pe=ce.convert(q.format),Ne=ce.convert(q.type);b.setTexture2D(q,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,q.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,q.unpackAlignment),V.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Y,A.x,A.y,W,Te,Pe,Ne,V.image.data):V.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Y,A.x,A.y,V.mipmaps[0].width,V.mipmaps[0].height,Pe,V.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,Y,A.x,A.y,Pe,Ne,V.image),Y===0&&q.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(A,V,q,Y,W=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=A.max.x-A.min.x+1,Pe=A.max.y-A.min.y+1,Ne=A.max.z-A.min.z+1,Ue=ce.convert(Y.format),We=ce.convert(Y.type);let Ge;if(Y.isData3DTexture)b.setTexture3D(Y,0),Ge=O.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)b.setTexture2DArray(Y,0),Ge=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Y.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Y.unpackAlignment);const ze=O.getParameter(O.UNPACK_ROW_LENGTH),dt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Zt=O.getParameter(O.UNPACK_SKIP_PIXELS),bt=O.getParameter(O.UNPACK_SKIP_ROWS),Rn=O.getParameter(O.UNPACK_SKIP_IMAGES),at=q.isCompressedTexture?q.mipmaps[W]:q.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,at.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,at.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,A.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,A.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,A.min.z),q.isDataTexture||q.isData3DTexture?O.texSubImage3D(Ge,W,V.x,V.y,V.z,Te,Pe,Ne,Ue,We,at.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Ge,W,V.x,V.y,V.z,Te,Pe,Ne,Ue,at.data)):O.texSubImage3D(Ge,W,V.x,V.y,V.z,Te,Pe,Ne,Ue,We,at),O.pixelStorei(O.UNPACK_ROW_LENGTH,ze),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,dt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Zt),O.pixelStorei(O.UNPACK_SKIP_ROWS,bt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Rn),W===0&&Y.generateMipmaps&&O.generateMipmap(Ge),Q.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),Q.unbindTexture()},this.resetState=function(){I=0,T=0,R=null,Q.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Wa?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===so?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Lt?vi:hh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===vi?Lt:Un}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class nE extends Lh{}nE.prototype.isWebGL1Renderer=!0;class iE extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Zr extends wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gc=new C,zc=new C,Hc=new pt,ea=new ao,ys=new oo;class Mn extends xt{constructor(e=new Pt,t=new Zr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Gc.fromBufferAttribute(t,r-1),zc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Gc.distanceTo(zc);e.setAttribute("lineDistance",new et(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere),ys.applyMatrix4(r),ys.radius+=s,e.ray.intersectsSphere(ys)===!1)return;Hc.copy(r).invert(),ea.copy(e.ray).applyMatrix4(Hc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new C,u=new C,h=new C,d=new C,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const f=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let E=f,S=v-1;E<S;E+=p){const I=g.getX(E),T=g.getX(E+1);if(c.fromBufferAttribute(m,I),u.fromBufferAttribute(m,T),ea.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let E=f,S=v-1;E<S;E+=p){if(c.fromBufferAttribute(m,E),u.fromBufferAttribute(m,E+1),ea.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Vc=new C,kc=new C;class Dh extends Mn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Vc.fromBufferAttribute(t,r),kc.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Vc.distanceTo(kc);e.setAttribute("lineDistance",new et(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],d=i[r+1]-u,p=(o-u)/d;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ue:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new C,r=[],s=[],o=[],a=new C,l=new pt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new C)}s[0]=new C,o[0]=new C;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(wt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(wt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ja extends An{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new ue,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class rE extends ja{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Za(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,p*=u,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Ts=new C,ta=new Za,na=new Za,ia=new Za;class sE extends An{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new C){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Ts.subVectors(r[0],r[1]).add(r[0]),c=Ts);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Ts.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ts),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ta.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),na.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),ia.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(ta.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),na.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),ia.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(ta.calc(l),na.calc(l),ia.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wc(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function oE(n,e){const t=1-n;return t*t*e}function aE(n,e){return 2*(1-n)*n*e}function lE(n,e){return n*n*e}function Nr(n,e,t,i){return oE(n,e)+aE(n,t)+lE(n,i)}function cE(n,e){const t=1-n;return t*t*t*e}function uE(n,e){const t=1-n;return 3*t*t*n*e}function hE(n,e){return 3*(1-n)*n*n*e}function dE(n,e){return n*n*n*e}function Ur(n,e,t,i,r){return cE(n,e)+uE(n,t)+hE(n,i)+dE(n,r)}class Oh extends An{constructor(e=new ue,t=new ue,i=new ue,r=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ue){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ur(e,r.x,s.x,o.x,a.x),Ur(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fE extends An{constructor(e=new C,t=new C,i=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new C){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ur(e,r.x,s.x,o.x,a.x),Ur(e,r.y,s.y,o.y,a.y),Ur(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Nh extends An{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pE extends An{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uh extends An{constructor(e=new ue,t=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ue){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Nr(e,r.x,s.x,o.x),Nr(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mE extends An{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Nr(e,r.x,s.x,o.x),Nr(e,r.y,s.y,o.y),Nr(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fh extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Wc(a,l.x,c.x,u.x,h.x),Wc(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ue().fromArray(r))}return this}}var Ta=Object.freeze({__proto__:null,ArcCurve:rE,CatmullRomCurve3:sE,CubicBezierCurve:Oh,CubicBezierCurve3:fE,EllipseCurve:ja,LineCurve:Nh,LineCurve3:pE,QuadraticBezierCurve:Uh,QuadraticBezierCurve3:mE,SplineCurve:Fh});class gE extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ta[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Ta[r.type]().fromJSON(r))}return this}}class ba extends gE{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Nh(this.currentPoint.clone(),new ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Uh(this.currentPoint.clone(),new ue(e,t),new ue(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new Oh(this.currentPoint.clone(),new ue(e,t),new ue(i,r),new ue(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Fh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new ja(e,t,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ct extends Pt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],p=[];let g=0;const _=[],m=i/2;let f=0;v(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new et(h,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(p,2));function v(){const S=new C,I=new C;let T=0;const R=(t-e)/i;for(let D=0;D<=s;D++){const x=[],y=D/s,N=y*(t-e)+e;for(let z=0;z<=r;z++){const $=z/r,w=$*l+a,F=Math.sin(w),P=Math.cos(w);I.x=N*F,I.y=-y*i+m,I.z=N*P,h.push(I.x,I.y,I.z),S.set(F,R,P).normalize(),d.push(S.x,S.y,S.z),p.push($,1-y),x.push(g++)}_.push(x)}for(let D=0;D<r;D++)for(let x=0;x<s;x++){const y=_[x][D],N=_[x+1][D],z=_[x+1][D+1],$=_[x][D+1];u.push(y,N,$),u.push(N,z,$),T+=6}c.addGroup(f,T,0),f+=T}function E(S){const I=g,T=new ue,R=new C;let D=0;const x=S===!0?e:t,y=S===!0?1:-1;for(let z=1;z<=r;z++)h.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),g++;const N=g;for(let z=0;z<=r;z++){const w=z/r*l+a,F=Math.cos(w),P=Math.sin(w);R.x=x*P,R.y=m*y,R.z=x*F,h.push(R.x,R.y,R.z),d.push(0,y,0),T.x=F*.5+.5,T.y=P*.5*y+.5,p.push(T.x,T.y),g++}for(let z=0;z<r;z++){const $=I+z,w=N+z;S===!0?u.push(w,w+1,$):u.push(w+1,w,$),D+=3}c.addGroup(f,D,S===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ct(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $a extends Pt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new et(s,3)),this.setAttribute("normal",new et(s.slice(),3)),this.setAttribute("uv",new et(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const E=new C,S=new C,I=new C;for(let T=0;T<t.length;T+=3)p(t[T+0],E),p(t[T+1],S),p(t[T+2],I),l(E,S,I,v)}function l(v,E,S,I){const T=I+1,R=[];for(let D=0;D<=T;D++){R[D]=[];const x=v.clone().lerp(S,D/T),y=E.clone().lerp(S,D/T),N=T-D;for(let z=0;z<=N;z++)z===0&&D===T?R[D][z]=x:R[D][z]=x.clone().lerp(y,z/N)}for(let D=0;D<T;D++)for(let x=0;x<2*(T-D)-1;x++){const y=Math.floor(x/2);x%2===0?(d(R[D][y+1]),d(R[D+1][y]),d(R[D][y])):(d(R[D][y+1]),d(R[D+1][y+1]),d(R[D+1][y]))}}function c(v){const E=new C;for(let S=0;S<s.length;S+=3)E.x=s[S+0],E.y=s[S+1],E.z=s[S+2],E.normalize().multiplyScalar(v),s[S+0]=E.x,s[S+1]=E.y,s[S+2]=E.z}function u(){const v=new C;for(let E=0;E<s.length;E+=3){v.x=s[E+0],v.y=s[E+1],v.z=s[E+2];const S=m(v)/2/Math.PI+.5,I=f(v)/Math.PI+.5;o.push(S,1-I)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){const E=o[v+0],S=o[v+2],I=o[v+4],T=Math.max(E,S,I),R=Math.min(E,S,I);T>.9&&R<.1&&(E<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),I<.2&&(o[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function p(v,E){const S=v*3;E.x=e[S+0],E.y=e[S+1],E.z=e[S+2]}function g(){const v=new C,E=new C,S=new C,I=new C,T=new ue,R=new ue,D=new ue;for(let x=0,y=0;x<s.length;x+=9,y+=6){v.set(s[x+0],s[x+1],s[x+2]),E.set(s[x+3],s[x+4],s[x+5]),S.set(s[x+6],s[x+7],s[x+8]),T.set(o[y+0],o[y+1]),R.set(o[y+2],o[y+3]),D.set(o[y+4],o[y+5]),I.copy(v).add(E).add(S).divideScalar(3);const N=m(I);_(T,y+0,v,N),_(R,y+2,E,N),_(D,y+4,S,N)}}function _(v,E,S,I){I<0&&v.x===1&&(o[E]=v.x-1),S.x===0&&S.z===0&&(o[E]=I/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.vertices,e.indices,e.radius,e.details)}}class Vs extends ba{constructor(e){super(e),this.uuid=Ri(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new ba().fromJSON(r))}return this}}const _E={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Bh(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,d,p;if(i&&(s=ME(n,e,s,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let g=t;g<r;g+=t)h=n[g],d=n[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return kr(s,o,t,a,l,p,0),o}};function Bh(n,e,t,i,r){let s,o;if(r===DE(n,e,t,i)>0)for(s=e;s<t;s+=i)o=Xc(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=Xc(s,n[s],n[s+1],o);return o&&uo(o,o.next)&&(Xr(o),o=o.next),o}function bi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(uo(t,t.next)||lt(t.prev,t,t.next)===0)){if(Xr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function kr(n,e,t,i,r,s,o){if(!n)return;!o&&s&&RE(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?vE(n,i,r,s):EE(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Xr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=SE(bi(n),e,t),kr(n,e,t,i,r,s,2)):o===2&&xE(n,e,t,i,r,s):kr(bi(n),e,t,i,r,s,1);break}}}function EE(n){const e=n.prev,t=n,i=n.next;if(lt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&Qi(r,a,s,l,o,c,g.x,g.y)&&lt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vE(n,e,t,i){const r=n.prev,s=n,o=n.next;if(lt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,_=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,f=Aa(p,g,e,t,i),v=Aa(_,m,e,t,i);let E=n.prevZ,S=n.nextZ;for(;E&&E.z>=f&&S&&S.z<=v;){if(E.x>=p&&E.x<=_&&E.y>=g&&E.y<=m&&E!==r&&E!==o&&Qi(a,u,l,h,c,d,E.x,E.y)&&lt(E.prev,E,E.next)>=0||(E=E.prevZ,S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Qi(a,u,l,h,c,d,S.x,S.y)&&lt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;E&&E.z>=f;){if(E.x>=p&&E.x<=_&&E.y>=g&&E.y<=m&&E!==r&&E!==o&&Qi(a,u,l,h,c,d,E.x,E.y)&&lt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;S&&S.z<=v;){if(S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Qi(a,u,l,h,c,d,S.x,S.y)&&lt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function SE(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!uo(r,s)&&Gh(r,i,i.next,s)&&Wr(r,s)&&Wr(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Xr(i),Xr(i.next),i=n=s),i=i.next}while(i!==n);return bi(i)}function xE(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&PE(o,a)){let l=zh(o,a);o=bi(o,o.next),l=bi(l,l.next),kr(o,e,t,i,r,s,0),kr(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function ME(n,e,t,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=Bh(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(IE(c));for(r.sort(yE),s=0;s<r.length;s++)t=TE(r[s],t);return t}function yE(n,e){return n.x-e.x}function TE(n,e){const t=bE(n,e);if(!t)return e;const i=zh(t,n);return bi(i,i.next),bi(t,t.next)}function bE(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>i&&(i=d,r=t.x<t.next.x?t:t.next,d===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Qi(o<c?s:i,o,l,c,o<c?i:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),Wr(t,n)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&AE(r,t)))&&(r=t,u=h)),t=t.next;while(t!==a);return r}function AE(n,e){return lt(n.prev,n,e.prev)<0&&lt(e.next,n,n.next)<0}function RE(n,e,t,i){let r=n;do r.z===0&&(r.z=Aa(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,wE(r)}function wE(n){let e,t,i,r,s,o,a,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(o>1);return n}function Aa(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function IE(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Qi(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function PE(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!CE(n,e)&&(Wr(n,e)&&Wr(e,n)&&LE(n,e)&&(lt(n.prev,n,e.prev)||lt(n,e.prev,e))||uo(n,e)&&lt(n.prev,n,n.next)>0&&lt(e.prev,e,e.next)>0)}function lt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function uo(n,e){return n.x===e.x&&n.y===e.y}function Gh(n,e,t,i){const r=As(lt(n,e,t)),s=As(lt(n,e,i)),o=As(lt(t,i,n)),a=As(lt(t,i,e));return!!(r!==s&&o!==a||r===0&&bs(n,t,e)||s===0&&bs(n,i,e)||o===0&&bs(t,n,i)||a===0&&bs(t,e,i))}function bs(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function As(n){return n>0?1:n<0?-1:0}function CE(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Gh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Wr(n,e){return lt(n.prev,n,n.next)<0?lt(n,e,n.next)>=0&&lt(n,n.prev,e)>=0:lt(n,e,n.prev)<0||lt(n,n.next,e)<0}function LE(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function zh(n,e){const t=new Ra(n.i,n.x,n.y),i=new Ra(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Xc(n,e,t,i){const r=new Ra(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Xr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ra(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function DE(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class rr{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return rr.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];qc(e),Yc(i,e);let o=e.length;t.forEach(qc);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Yc(i,t[l]);const a=_E.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function qc(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Yc(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Ka extends Pt{constructor(e=new Vs([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new et(r,3)),this.setAttribute("uv",new et(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:OE;let E,S=!1,I,T,R,D;f&&(E=f.getSpacedPoints(u),S=!0,d=!1,I=f.computeFrenetFrames(u,!1),T=new C,R=new C,D=new C),d||(m=0,p=0,g=0,_=0);const x=a.extractPoints(c);let y=x.shape;const N=x.holes;if(!rr.isClockWise(y)){y=y.reverse();for(let O=0,de=N.length;O<de;O++){const K=N[O];rr.isClockWise(K)&&(N[O]=K.reverse())}}const $=rr.triangulateShape(y,N),w=y;for(let O=0,de=N.length;O<de;O++){const K=N[O];y=y.concat(K)}function F(O,de,K){return de||console.error("THREE.ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(de,K)}const P=y.length,B=$.length;function H(O,de,K){let le,Q,Re;const Me=O.x-de.x,b=O.y-de.y,M=K.x-O.x,k=K.y-O.y,se=Me*Me+b*b,ne=Me*k-b*M;if(Math.abs(ne)>Number.EPSILON){const te=Math.sqrt(se),be=Math.sqrt(M*M+k*k),Ee=de.x-b/te,ye=de.y+Me/te,Le=K.x-k/be,Fe=K.y+M/be,ie=((Le-Ee)*k-(Fe-ye)*M)/(Me*k-b*M);le=Ee+Me*ie-O.x,Q=ye+b*ie-O.y;const Xe=le*le+Q*Q;if(Xe<=2)return new ue(le,Q);Re=Math.sqrt(Xe/2)}else{let te=!1;Me>Number.EPSILON?M>Number.EPSILON&&(te=!0):Me<-Number.EPSILON?M<-Number.EPSILON&&(te=!0):Math.sign(b)===Math.sign(k)&&(te=!0),te?(le=-b,Q=Me,Re=Math.sqrt(se)):(le=Me,Q=b,Re=Math.sqrt(se/2))}return new ue(le/Re,Q/Re)}const G=[];for(let O=0,de=w.length,K=de-1,le=O+1;O<de;O++,K++,le++)K===de&&(K=0),le===de&&(le=0),G[O]=H(w[O],w[K],w[le]);const X=[];let Z,oe=G.concat();for(let O=0,de=N.length;O<de;O++){const K=N[O];Z=[];for(let le=0,Q=K.length,Re=Q-1,Me=le+1;le<Q;le++,Re++,Me++)Re===Q&&(Re=0),Me===Q&&(Me=0),Z[le]=H(K[le],K[Re],K[Me]);X.push(Z),oe=oe.concat(Z)}for(let O=0;O<m;O++){const de=O/m,K=p*Math.cos(de*Math.PI/2),le=g*Math.sin(de*Math.PI/2)+_;for(let Q=0,Re=w.length;Q<Re;Q++){const Me=F(w[Q],G[Q],le);he(Me.x,Me.y,-K)}for(let Q=0,Re=N.length;Q<Re;Q++){const Me=N[Q];Z=X[Q];for(let b=0,M=Me.length;b<M;b++){const k=F(Me[b],Z[b],le);he(k.x,k.y,-K)}}}const j=g+_;for(let O=0;O<P;O++){const de=d?F(y[O],oe[O],j):y[O];S?(R.copy(I.normals[0]).multiplyScalar(de.x),T.copy(I.binormals[0]).multiplyScalar(de.y),D.copy(E[0]).add(R).add(T),he(D.x,D.y,D.z)):he(de.x,de.y,0)}for(let O=1;O<=u;O++)for(let de=0;de<P;de++){const K=d?F(y[de],oe[de],j):y[de];S?(R.copy(I.normals[O]).multiplyScalar(K.x),T.copy(I.binormals[O]).multiplyScalar(K.y),D.copy(E[O]).add(R).add(T),he(D.x,D.y,D.z)):he(K.x,K.y,h/u*O)}for(let O=m-1;O>=0;O--){const de=O/m,K=p*Math.cos(de*Math.PI/2),le=g*Math.sin(de*Math.PI/2)+_;for(let Q=0,Re=w.length;Q<Re;Q++){const Me=F(w[Q],G[Q],le);he(Me.x,Me.y,h+K)}for(let Q=0,Re=N.length;Q<Re;Q++){const Me=N[Q];Z=X[Q];for(let b=0,M=Me.length;b<M;b++){const k=F(Me[b],Z[b],le);S?he(k.x,k.y+E[u-1].y,E[u-1].x+K):he(k.x,k.y,h+K)}}}J(),Se();function J(){const O=r.length/3;if(d){let de=0,K=P*de;for(let le=0;le<B;le++){const Q=$[le];Ae(Q[2]+K,Q[1]+K,Q[0]+K)}de=u+m*2,K=P*de;for(let le=0;le<B;le++){const Q=$[le];Ae(Q[0]+K,Q[1]+K,Q[2]+K)}}else{for(let de=0;de<B;de++){const K=$[de];Ae(K[2],K[1],K[0])}for(let de=0;de<B;de++){const K=$[de];Ae(K[0]+P*u,K[1]+P*u,K[2]+P*u)}}i.addGroup(O,r.length/3-O,0)}function Se(){const O=r.length/3;let de=0;ae(w,de),de+=w.length;for(let K=0,le=N.length;K<le;K++){const Q=N[K];ae(Q,de),de+=Q.length}i.addGroup(O,r.length/3-O,1)}function ae(O,de){let K=O.length;for(;--K>=0;){const le=K;let Q=K-1;Q<0&&(Q=O.length-1);for(let Re=0,Me=u+m*2;Re<Me;Re++){const b=P*Re,M=P*(Re+1),k=de+le+b,se=de+Q+b,ne=de+Q+M,te=de+le+M;Ce(k,se,ne,te)}}}function he(O,de,K){l.push(O),l.push(de),l.push(K)}function Ae(O,de,K){xe(O),xe(de),xe(K);const le=r.length/3,Q=v.generateTopUV(i,r,le-3,le-2,le-1);De(Q[0]),De(Q[1]),De(Q[2])}function Ce(O,de,K,le){xe(O),xe(de),xe(le),xe(de),xe(K),xe(le);const Q=r.length/3,Re=v.generateSideWallUV(i,r,Q-6,Q-3,Q-2,Q-1);De(Re[0]),De(Re[1]),De(Re[3]),De(Re[1]),De(Re[2]),De(Re[3])}function xe(O){r.push(l[O*3+0]),r.push(l[O*3+1]),r.push(l[O*3+2])}function De(O){s.push(O.x),s.push(O.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return NE(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Ta[r.type]().fromJSON(r)),new Ka(i,e.options)}}const OE={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new ue(s,o),new ue(a,l),new ue(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[r*3],p=e[r*3+1],g=e[r*3+2],_=e[s*3],m=e[s*3+1],f=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ue(o,1-l),new ue(c,1-h),new ue(d,1-g),new ue(_,1-f)]:[new ue(a,1-l),new ue(u,1-h),new ue(p,1-g),new ue(m,1-f)]}};function NE(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ji extends $a{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ji(e.radius,e.detail)}}class ho extends Pt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new C,d=new C,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){const v=[],E=f/i;let S=0;f===0&&o===0?S=.5/t:f===i&&l===Math.PI&&(S=-.5/t);for(let I=0;I<=t;I++){const T=I/t;h.x=-e*Math.cos(r+T*s)*Math.sin(o+E*a),h.y=e*Math.cos(o+E*a),h.z=e*Math.sin(r+T*s)*Math.sin(o+E*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(T+S,1-E),v.push(c++)}u.push(v)}for(let f=0;f<i;f++)for(let v=0;v<t;v++){const E=u[f][v+1],S=u[f][v],I=u[f+1][v],T=u[f+1][v+1];(f!==0||o>0)&&p.push(E,S,T),(f!==i-1||l<Math.PI)&&p.push(S,I,T)}this.setIndex(p),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fi extends Pt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new C,h=new C,d=new C;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,f=(r+1)*(p-1)+g,v=(r+1)*p+g;o.push(_,m,v),o.push(m,f,v)}this.setIndex(o),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Qa extends wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class UE extends wi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const jc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class FE{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const BE=new FE;class Ja{constructor(e){this.manager=e!==void 0?e:BE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ja.DEFAULT_MATERIAL_NAME="__DEFAULT";const Dn={};class GE extends Error{constructor(e,t){super(e),this.response=t}}class zE extends Ja{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=jc.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Dn[e]!==void 0){Dn[e].push({onLoad:t,onProgress:i,onError:r});return}Dn[e]=[],Dn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Dn[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){v();function v(){h.read().then(({done:E,value:S})=>{if(E)f.close();else{_+=S.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let T=0,R=u.length;T<R;T++){const D=u[T];D.onProgress&&D.onProgress(I)}f.enqueue(S),v()}})}}});return new Response(m)}else throw new GE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{jc.add(e,c);const u=Dn[e];delete Dn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Dn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Dn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class HE extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class VE extends HE{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}class Hh{constructor(e,t,i=0,r=1/0){this.ray=new ao(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new qa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return wa(e,this,i,t),i.sort(Zc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)wa(e[r],this,i,t);return i.sort(Zc),i}}function Zc(n,e){return n.distance-e.distance}function wa(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)wa(r[s],e,t,!0)}}class $c{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class kE extends Dh{constructor(e=10,t=10,i=4473924,r=8947848){i=new Ve(i),r=new Ve(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,p=0,g=-a;d<=t;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=d===s?i:r;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const u=new Pt;u.setAttribute("position",new et(l,3)),u.setAttribute("color",new et(c,3));const h=new Zr({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class WE extends Dh{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Pt;r.setAttribute("position",new et(t,3)),r.setAttribute("color",new et(i,3));const s=new Zr({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new Ve,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class XE{constructor(){this.type="ShapePath",this.color=new Ve,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ba,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(f){const v=[];for(let E=0,S=f.length;E<S;E++){const I=f[E],T=new Vs;T.curves=I.curves,v.push(T)}return v}function i(f,v){const E=v.length;let S=!1;for(let I=E-1,T=0;T<E;I=T++){let R=v[I],D=v[T],x=D.x-R.x,y=D.y-R.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(R=v[T],x=-x,D=v[I],y=-y),f.y<R.y||f.y>D.y)continue;if(f.y===R.y){if(f.x===R.x)return!0}else{const N=y*(f.x-R.x)-x*(f.y-R.y);if(N===0)return!0;if(N<0)continue;S=!S}}else{if(f.y!==R.y)continue;if(D.x<=f.x&&f.x<=R.x||R.x<=f.x&&f.x<=D.x)return!0}}return S}const r=rr.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Vs,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const h=[],d=[];let p=[],g=0,_;d[g]=void 0,p[g]=[];for(let f=0,v=s.length;f<v;f++)a=s[f],_=a.getPoints(),o=r(_),o=e?!o:o,o?(!u&&d[g]&&g++,d[g]={s:new Vs,p:_},d[g].s.curves=a.curves,u&&g++,p[g]=[]):p[g].push({h:a,p:_[0]});if(!d[0])return t(s);if(d.length>1){let f=!1,v=0;for(let E=0,S=d.length;E<S;E++)h[E]=[];for(let E=0,S=d.length;E<S;E++){const I=p[E];for(let T=0;T<I.length;T++){const R=I[T];let D=!0;for(let x=0;x<d.length;x++)i(R.p,d[x].p)&&(E!==x&&v++,D?(D=!1,h[x].push(R)):f=!0);D&&h[E].push(R)}}v>0&&f===!1&&(p=h)}let m;for(let f=0,v=d.length;f<v;f++){l=d[f].s,c.push(l),m=p[f];for(let E=0,S=m.length;E<S;E++)l.holes.push(m[E].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:za}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=za);const Kc={type:"change"},ra={type:"start"},Qc={type:"end"},Rs=new ao,Jc=new Yn,qE=Math.cos(70*Dr.DEG2RAD);class YE extends Ai{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ci.ROTATE,MIDDLE:Ci.DOLLY,RIGHT:Ci.PAN},this.touches={ONE:Li.ROTATE,TWO:Li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",te),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",te),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Kc),i.update(),s=r.NONE},this.update=function(){const L=new C,re=new Dt().setFromUnitVectors(e.up,new C(0,1,0)),ge=re.clone().invert(),ce=new C,we=new Dt,qe=new C,$e=2*Math.PI;return function(me=null){const U=i.object.position;L.copy(U).sub(i.target),L.applyQuaternion(re),a.setFromVector3(L),i.autoRotate&&s===r.NONE&&N(x(me)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let fe=i.minAzimuthAngle,pe=i.maxAzimuthAngle;isFinite(fe)&&isFinite(pe)&&(fe<-Math.PI?fe+=$e:fe>Math.PI&&(fe-=$e),pe<-Math.PI?pe+=$e:pe>Math.PI&&(pe-=$e),fe<=pe?a.theta=Math.max(fe,Math.min(pe,a.theta)):a.theta=a.theta>(fe+pe)/2?Math.max(fe,a.theta):Math.min(pe,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&T||i.object.isOrthographicCamera?a.radius=G(a.radius):a.radius=G(a.radius*c),L.setFromSpherical(a),L.applyQuaternion(ge),U.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Oe=!1;if(i.zoomToCursor&&T){let Ie=null;if(i.object.isPerspectiveCamera){const Qe=L.length();Ie=G(Qe*c);const Je=Qe-Ie;i.object.position.addScaledVector(S,Je),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Qe=new C(I.x,I.y,0);Qe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Oe=!0;const Je=new C(I.x,I.y,0);Je.unproject(i.object),i.object.position.sub(Je).add(Qe),i.object.updateMatrixWorld(),Ie=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Ie!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Ie).add(i.object.position):(Rs.origin.copy(i.object.position),Rs.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Rs.direction))<qE?e.lookAt(i.target):(Jc.setFromNormalAndCoplanarPoint(i.object.up,i.target),Rs.intersectPlane(Jc,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Oe=!0);return c=1,T=!1,Oe||ce.distanceToSquared(i.object.position)>o||8*(1-we.dot(i.object.quaternion))>o||qe.distanceToSquared(i.target)>0?(i.dispatchEvent(Kc),ce.copy(i.object.position),we.copy(i.object.quaternion),qe.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ye),i.domElement.removeEventListener("pointerdown",Me),i.domElement.removeEventListener("pointercancel",M),i.domElement.removeEventListener("wheel",ne),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",M),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",te),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new $c,l=new $c;let c=1;const u=new C,h=new ue,d=new ue,p=new ue,g=new ue,_=new ue,m=new ue,f=new ue,v=new ue,E=new ue,S=new C,I=new ue;let T=!1;const R=[],D={};function x(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function y(L){const re=Math.abs(L)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*re)}function N(L){l.theta-=L}function z(L){l.phi-=L}const $=function(){const L=new C;return function(ge,ce){L.setFromMatrixColumn(ce,0),L.multiplyScalar(-ge),u.add(L)}}(),w=function(){const L=new C;return function(ge,ce){i.screenSpacePanning===!0?L.setFromMatrixColumn(ce,1):(L.setFromMatrixColumn(ce,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(ge),u.add(L)}}(),F=function(){const L=new C;return function(ge,ce){const we=i.domElement;if(i.object.isPerspectiveCamera){const qe=i.object.position;L.copy(qe).sub(i.target);let $e=L.length();$e*=Math.tan(i.object.fov/2*Math.PI/180),$(2*ge*$e/we.clientHeight,i.object.matrix),w(2*ce*$e/we.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?($(ge*(i.object.right-i.object.left)/i.object.zoom/we.clientWidth,i.object.matrix),w(ce*(i.object.top-i.object.bottom)/i.object.zoom/we.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function P(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function B(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function H(L,re){if(!i.zoomToCursor)return;T=!0;const ge=i.domElement.getBoundingClientRect(),ce=L-ge.left,we=re-ge.top,qe=ge.width,$e=ge.height;I.x=ce/qe*2-1,I.y=-(we/$e)*2+1,S.set(I.x,I.y,1).unproject(i.object).sub(i.object.position).normalize()}function G(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function X(L){h.set(L.clientX,L.clientY)}function Z(L){H(L.clientX,L.clientX),f.set(L.clientX,L.clientY)}function oe(L){g.set(L.clientX,L.clientY)}function j(L){d.set(L.clientX,L.clientY),p.subVectors(d,h).multiplyScalar(i.rotateSpeed);const re=i.domElement;N(2*Math.PI*p.x/re.clientHeight),z(2*Math.PI*p.y/re.clientHeight),h.copy(d),i.update()}function J(L){v.set(L.clientX,L.clientY),E.subVectors(v,f),E.y>0?P(y(E.y)):E.y<0&&B(y(E.y)),f.copy(v),i.update()}function Se(L){_.set(L.clientX,L.clientY),m.subVectors(_,g).multiplyScalar(i.panSpeed),F(m.x,m.y),g.copy(_),i.update()}function ae(L){H(L.clientX,L.clientY),L.deltaY<0?B(y(L.deltaY)):L.deltaY>0&&P(y(L.deltaY)),i.update()}function he(L){let re=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(0,i.keyPanSpeed),re=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(0,-i.keyPanSpeed),re=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(i.keyPanSpeed,0),re=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(-i.keyPanSpeed,0),re=!0;break}re&&(L.preventDefault(),i.update())}function Ae(L){if(R.length===1)h.set(L.pageX,L.pageY);else{const re=Xe(L),ge=.5*(L.pageX+re.x),ce=.5*(L.pageY+re.y);h.set(ge,ce)}}function Ce(L){if(R.length===1)g.set(L.pageX,L.pageY);else{const re=Xe(L),ge=.5*(L.pageX+re.x),ce=.5*(L.pageY+re.y);g.set(ge,ce)}}function xe(L){const re=Xe(L),ge=L.pageX-re.x,ce=L.pageY-re.y,we=Math.sqrt(ge*ge+ce*ce);f.set(0,we)}function De(L){i.enableZoom&&xe(L),i.enablePan&&Ce(L)}function O(L){i.enableZoom&&xe(L),i.enableRotate&&Ae(L)}function de(L){if(R.length==1)d.set(L.pageX,L.pageY);else{const ge=Xe(L),ce=.5*(L.pageX+ge.x),we=.5*(L.pageY+ge.y);d.set(ce,we)}p.subVectors(d,h).multiplyScalar(i.rotateSpeed);const re=i.domElement;N(2*Math.PI*p.x/re.clientHeight),z(2*Math.PI*p.y/re.clientHeight),h.copy(d)}function K(L){if(R.length===1)_.set(L.pageX,L.pageY);else{const re=Xe(L),ge=.5*(L.pageX+re.x),ce=.5*(L.pageY+re.y);_.set(ge,ce)}m.subVectors(_,g).multiplyScalar(i.panSpeed),F(m.x,m.y),g.copy(_)}function le(L){const re=Xe(L),ge=L.pageX-re.x,ce=L.pageY-re.y,we=Math.sqrt(ge*ge+ce*ce);v.set(0,we),E.set(0,Math.pow(v.y/f.y,i.zoomSpeed)),P(E.y),f.copy(v);const qe=(L.pageX+re.x)*.5,$e=(L.pageY+re.y)*.5;H(qe,$e)}function Q(L){i.enableZoom&&le(L),i.enablePan&&K(L)}function Re(L){i.enableZoom&&le(L),i.enableRotate&&de(L)}function Me(L){i.enabled!==!1&&(R.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",b),i.domElement.addEventListener("pointerup",M)),Le(L),L.pointerType==="touch"?be(L):k(L))}function b(L){i.enabled!==!1&&(L.pointerType==="touch"?Ee(L):se(L))}function M(L){Fe(L),R.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",M)),i.dispatchEvent(Qc),s=r.NONE}function k(L){let re;switch(L.button){case 0:re=i.mouseButtons.LEFT;break;case 1:re=i.mouseButtons.MIDDLE;break;case 2:re=i.mouseButtons.RIGHT;break;default:re=-1}switch(re){case Ci.DOLLY:if(i.enableZoom===!1)return;Z(L),s=r.DOLLY;break;case Ci.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;oe(L),s=r.PAN}else{if(i.enableRotate===!1)return;X(L),s=r.ROTATE}break;case Ci.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;X(L),s=r.ROTATE}else{if(i.enablePan===!1)return;oe(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ra)}function se(L){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;j(L);break;case r.DOLLY:if(i.enableZoom===!1)return;J(L);break;case r.PAN:if(i.enablePan===!1)return;Se(L);break}}function ne(L){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(L.preventDefault(),i.dispatchEvent(ra),ae(L),i.dispatchEvent(Qc))}function te(L){i.enabled===!1||i.enablePan===!1||he(L)}function be(L){switch(ie(L),R.length){case 1:switch(i.touches.ONE){case Li.ROTATE:if(i.enableRotate===!1)return;Ae(L),s=r.TOUCH_ROTATE;break;case Li.PAN:if(i.enablePan===!1)return;Ce(L),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Li.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;De(L),s=r.TOUCH_DOLLY_PAN;break;case Li.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;O(L),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ra)}function Ee(L){switch(ie(L),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;de(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;K(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Q(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Re(L),i.update();break;default:s=r.NONE}}function ye(L){i.enabled!==!1&&L.preventDefault()}function Le(L){R.push(L.pointerId)}function Fe(L){delete D[L.pointerId];for(let re=0;re<R.length;re++)if(R[re]==L.pointerId){R.splice(re,1);return}}function ie(L){let re=D[L.pointerId];re===void 0&&(re=new ue,D[L.pointerId]=re),re.set(L.pageX,L.pageY)}function Xe(L){const re=L.pointerId===R[0]?R[1]:R[0];return D[re]}i.domElement.addEventListener("contextmenu",ye),i.domElement.addEventListener("pointerdown",Me),i.domElement.addEventListener("pointercancel",M),i.domElement.addEventListener("wheel",ne,{passive:!1}),this.update()}}const li=new Hh,Bt=new C,Xn=new C,ot=new Dt,eu={X:new C(1,0,0),Y:new C(0,1,0),Z:new C(0,0,1)},sa={type:"change"},tu={type:"mouseDown"},nu={type:"mouseUp",mode:null},iu={type:"objectChange"};class jE extends xt{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const i=new ev;this._gizmo=i,this.add(i);const r=new tv;this._plane=r,this.add(r);const s=this;function o(v,E){let S=E;Object.defineProperty(s,v,{get:function(){return S!==void 0?S:E},set:function(I){S!==I&&(S=I,r[v]=I,i[v]=I,s.dispatchEvent({type:v+"-changed",value:I}),s.dispatchEvent(sa))}}),s[v]=E,r[v]=E,i[v]=E}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new C,l=new C,c=new Dt,u=new Dt,h=new C,d=new Dt,p=new C,g=new C,_=new C,m=0,f=new C;o("worldPosition",a),o("worldPositionStart",l),o("worldQuaternion",c),o("worldQuaternionStart",u),o("cameraPosition",h),o("cameraQuaternion",d),o("pointStart",p),o("pointEnd",g),o("rotationAxis",_),o("rotationAngle",m),o("eye",f),this._offset=new C,this._startNorm=new C,this._endNorm=new C,this._cameraScale=new C,this._parentPosition=new C,this._parentQuaternion=new Dt,this._parentQuaternionInv=new Dt,this._parentScale=new C,this._worldScaleStart=new C,this._worldQuaternionInv=new Dt,this._worldScale=new C,this._positionStart=new C,this._quaternionStart=new Dt,this._scaleStart=new C,this._getPointer=ZE.bind(this),this._onPointerDown=KE.bind(this),this._onPointerHover=$E.bind(this),this._onPointerMove=QE.bind(this),this._onPointerUp=JE.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;li.setFromCamera(e,this.camera);const t=oa(this._gizmo.picker[this.mode],li);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){li.setFromCamera(e,this.camera);const t=oa(this._plane,li,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,tu.mode=this.mode,this.dispatchEvent(tu)}}pointerMove(e){const t=this.axis,i=this.mode,r=this.object;let s=this.space;if(i==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),r===void 0||t===null||this.dragging===!1||e.button!==-1)return;li.setFromCamera(e,this.camera);const o=oa(this._plane,li,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(ot.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(Bt.setFromMatrixPosition(r.parent.matrixWorld)),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(Bt.setFromMatrixPosition(r.parent.matrixWorld))));else if(i==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Xn.set(a,a,a)}else Bt.copy(this.pointStart),Xn.copy(this.pointEnd),Bt.applyQuaternion(this._worldQuaternionInv),Xn.applyQuaternion(this._worldQuaternionInv),Xn.divide(Bt),t.search("X")===-1&&(Xn.x=1),t.search("Y")===-1&&(Xn.y=1),t.search("Z")===-1&&(Xn.z=1);r.scale.copy(this._scaleStart).multiply(Xn),this.scaleSnap&&(t.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Bt.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Bt.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(eu[t]),Bt.copy(eu[t]),s==="local"&&Bt.applyQuaternion(this.worldQuaternion),Bt.cross(this.eye),Bt.length()===0?l=!0:this.rotationAngle=this._offset.dot(Bt.normalize())*a),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(ot.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(ot.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(sa),this.dispatchEvent(iu)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(nu.mode=this.mode,this.dispatchEvent(nu)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(sa),this.dispatchEvent(iu),this.pointStart.copy(this.pointEnd))}getRaycaster(){return li}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function ZE(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{const e=this.domElement.getBoundingClientRect();return{x:(n.clientX-e.left)/e.width*2-1,y:-(n.clientY-e.top)/e.height*2+1,button:n.button}}}function $E(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function KE(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function QE(n){this.enabled&&this.pointerMove(this._getPointer(n))}function JE(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function oa(n,e,t){const i=e.intersectObject(n,!0);for(let r=0;r<i.length;r++)if(i[r].object.visible||t)return i[r];return!1}const ws=new Yr,it=new C(0,1,0),ru=new C(0,0,0),su=new pt,Is=new Dt,ks=new Dt,xn=new C,ou=new pt,Ir=new C(1,0,0),ui=new C(0,1,0),Pr=new C(0,0,1),Ps=new C,Sr=new C,xr=new C;class ev extends xt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new jr({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Zr({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;const r=t.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const u=e.clone();u.color.setHex(255),u.opacity=.5;const h=e.clone();h.opacity=.25;const d=e.clone();d.color.setHex(16776960),d.opacity=.25,e.clone().color.setHex(16776960);const g=e.clone();g.color.setHex(7895160);const _=new Ct(0,.04,.1,12);_.translate(0,.05,0);const m=new ut(.08,.08,.08);m.translate(0,.04,0);const f=new Pt;f.setAttribute("position",new et([0,0,0,1,0,0],3));const v=new Ct(.0075,.0075,.5,3);v.translate(0,.25,0);function E(F,P){const B=new fi(F,.0075,3,64,P*Math.PI*2);return B.rotateY(Math.PI/2),B.rotateX(Math.PI/2),B}function S(){const F=new Pt;return F.setAttribute("position",new et([0,0,0,1,1,1],3)),F}const I={X:[[new ve(_,s),[.5,0,0],[0,0,-Math.PI/2]],[new ve(_,s),[-.5,0,0],[0,0,Math.PI/2]],[new ve(v,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ve(_,o),[0,.5,0]],[new ve(_,o),[0,-.5,0],[Math.PI,0,0]],[new ve(v,o)]],Z:[[new ve(_,a),[0,0,.5],[Math.PI/2,0,0]],[new ve(_,a),[0,0,-.5],[-Math.PI/2,0,0]],[new ve(v,a),null,[Math.PI/2,0,0]]],XYZ:[[new ve(new Ji(.1,0),h.clone()),[0,0,0]]],XY:[[new ve(new ut(.15,.15,.01),u.clone()),[.15,.15,0]]],YZ:[[new ve(new ut(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ve(new ut(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},T={X:[[new ve(new Ct(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new ve(new Ct(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ve(new Ct(.2,0,.6,4),i),[0,.3,0]],[new ve(new Ct(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ve(new Ct(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new ve(new Ct(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ve(new Ji(.2,0),i)]],XY:[[new ve(new ut(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new ve(new ut(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ve(new ut(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},R={START:[[new ve(new Ji(.01,2),r),null,null,null,"helper"]],END:[[new ve(new Ji(.01,2),r),null,null,null,"helper"]],DELTA:[[new Mn(S(),r),null,null,null,"helper"]],X:[[new Mn(f,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Mn(f,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Mn(f,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},D={XYZE:[[new ve(E(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new ve(E(.5,.5),s)]],Y:[[new ve(E(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new ve(E(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new ve(E(.75,1),d),null,[0,Math.PI/2,0]]]},x={AXIS:[[new Mn(f,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},y={XYZE:[[new ve(new ho(.25,10,8),i)]],X:[[new ve(new fi(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ve(new fi(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ve(new fi(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ve(new fi(.75,.1,2,24),i)]]},N={X:[[new ve(m,s),[.5,0,0],[0,0,-Math.PI/2]],[new ve(v,s),[0,0,0],[0,0,-Math.PI/2]],[new ve(m,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ve(m,o),[0,.5,0]],[new ve(v,o)],[new ve(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ve(m,a),[0,0,.5],[Math.PI/2,0,0]],[new ve(v,a),[0,0,0],[Math.PI/2,0,0]],[new ve(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ve(new ut(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new ve(new ut(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ve(new ut(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ve(new ut(.1,.1,.1),h.clone())]]},z={X:[[new ve(new Ct(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new ve(new Ct(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ve(new Ct(.2,0,.6,4),i),[0,.3,0]],[new ve(new Ct(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ve(new Ct(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new ve(new Ct(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ve(new ut(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new ve(new ut(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ve(new ut(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ve(new ut(.2,.2,.2),i),[0,0,0]]]},$={X:[[new Mn(f,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Mn(f,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Mn(f,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function w(F){const P=new xt;for(const B in F)for(let H=F[B].length;H--;){const G=F[B][H][0].clone(),X=F[B][H][1],Z=F[B][H][2],oe=F[B][H][3],j=F[B][H][4];G.name=B,G.tag=j,X&&G.position.set(X[0],X[1],X[2]),Z&&G.rotation.set(Z[0],Z[1],Z[2]),oe&&G.scale.set(oe[0],oe[1],oe[2]),G.updateMatrix();const J=G.geometry.clone();J.applyMatrix4(G.matrix),G.geometry=J,G.renderOrder=1/0,G.position.set(0,0,0),G.rotation.set(0,0,0),G.scale.set(1,1,1),P.add(G)}return P}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=w(I)),this.add(this.gizmo.rotate=w(D)),this.add(this.gizmo.scale=w(N)),this.add(this.picker.translate=w(T)),this.add(this.picker.rotate=w(y)),this.add(this.picker.scale=w(z)),this.add(this.helper.translate=w(R)),this.add(this.helper.rotate=w(x)),this.add(this.helper.scale=w($)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:ks;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const o=r[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(ot.setFromEuler(ws.set(0,0,0)),o.quaternion.copy(i).multiply(ot),Math.abs(it.copy(Ir).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(ot.setFromEuler(ws.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(ot),Math.abs(it.copy(ui).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(ot.setFromEuler(ws.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(ot),Math.abs(it.copy(Pr).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(ot.setFromEuler(ws.set(0,Math.PI/2,0)),it.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(su.lookAt(ru,it,ui)),o.quaternion.multiply(ot),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Bt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Bt.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Bt),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(it.copy(Ir).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(it.copy(ui).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(it.copy(Pr).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(it.copy(Pr).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(it.copy(Ir).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(it.copy(ui).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Is.copy(i),it.copy(this.eye).applyQuaternion(ot.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(su.lookAt(this.eye,ru,ui)),o.name==="X"&&(ot.setFromAxisAngle(Ir,Math.atan2(-it.y,it.z)),ot.multiplyQuaternions(Is,ot),o.quaternion.copy(ot)),o.name==="Y"&&(ot.setFromAxisAngle(ui,Math.atan2(it.x,it.z)),ot.multiplyQuaternions(Is,ot),o.quaternion.copy(ot)),o.name==="Z"&&(ot.setFromAxisAngle(Pr,Math.atan2(it.y,it.x)),ot.multiplyQuaternions(Is,ot),o.quaternion.copy(ot))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(l){return o.name===l}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class tv extends ve{constructor(){super(new lo(1e5,1e5,2,2),new jr({visible:!1,wireframe:!0,side:Tn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Ps.copy(Ir).applyQuaternion(t==="local"?this.worldQuaternion:ks),Sr.copy(ui).applyQuaternion(t==="local"?this.worldQuaternion:ks),xr.copy(Pr).applyQuaternion(t==="local"?this.worldQuaternion:ks),it.copy(Sr),this.mode){case"translate":case"scale":switch(this.axis){case"X":it.copy(this.eye).cross(Ps),xn.copy(Ps).cross(it);break;case"Y":it.copy(this.eye).cross(Sr),xn.copy(Sr).cross(it);break;case"Z":it.copy(this.eye).cross(xr),xn.copy(xr).cross(it);break;case"XY":xn.copy(xr);break;case"YZ":xn.copy(Ps);break;case"XZ":it.copy(xr),xn.copy(Sr);break;case"XYZ":case"E":xn.set(0,0,0);break}break;case"rotate":default:xn.set(0,0,0)}xn.length()===0?this.quaternion.copy(this.cameraQuaternion):(ou.lookAt(Bt.set(0,0,0),xn,it),this.quaternion.setFromRotationMatrix(ou)),super.updateMatrixWorld(e)}}class Cs extends Ka{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const r=i.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}class nv extends Ja{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new zE(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},i,r)}parse(e){return new iv(e)}}class iv{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],r=rv(e,t,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}}function rv(n,e,t){const i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const u=i[c];if(u===`
`)a=0,l-=s;else{const h=sv(u,r,a,l,t);a+=h.offsetX,o.push(h.path)}}return o}function sv(n,e,t,i,r){const s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}const o=new XE;let a,l,c,u,h,d,p,g;if(s.o){const _=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,f=_.length;m<f;)switch(_[m++]){case"m":a=_[m++]*e+t,l=_[m++]*e+i,o.moveTo(a,l);break;case"l":a=_[m++]*e+t,l=_[m++]*e+i,o.lineTo(a,l);break;case"q":c=_[m++]*e+t,u=_[m++]*e+i,h=_[m++]*e+t,d=_[m++]*e+i,o.quadraticCurveTo(h,d,c,u);break;case"b":c=_[m++]*e+t,u=_[m++]*e+i,h=_[m++]*e+t,d=_[m++]*e+i,p=_[m++]*e+t,g=_[m++]*e+i,o.bezierCurveTo(h,d,p,g,c,u);break}}return{offsetX:s.ha*e,path:o}}/*!
 * FilePond 4.30.6
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */const ov=n=>n instanceof HTMLElement,av=(n,e=[],t=[])=>{const i={...n},r=[],s=[],o=()=>({...i}),a=()=>{const g=[...r];return r.length=0,g},l=()=>{const g=[...s];s.length=0,g.forEach(({type:_,data:m})=>{c(_,m)})},c=(g,_,m)=>{if(m&&!document.hidden){s.push({type:g,data:_});return}p[g]&&p[g](_),r.push({type:g,data:_})},u=(g,..._)=>d[g]?d[g](..._):null,h={getState:o,processActionQueue:a,processDispatchQueue:l,dispatch:c,query:u};let d={};e.forEach(g=>{d={...g(i),...d}});let p={};return t.forEach(g=>{p={...g(c,u,i),...p}}),h},lv=(n,e,t)=>{if(typeof t=="function"){n[e]=t;return}Object.defineProperty(n,e,{...t})},ht=(n,e)=>{for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])},Jn=n=>{const e={};return ht(n,t=>{lv(e,t,n[t])}),e},_t=(n,e,t=null)=>{if(t===null)return n.getAttribute(e)||n.hasAttribute(e);n.setAttribute(e,t)},cv="http://www.w3.org/2000/svg",uv=["svg","path"],au=n=>uv.includes(n),eo=(n,e,t={})=>{typeof e=="object"&&(t=e,e=null);const i=au(n)?document.createElementNS(cv,n):document.createElement(n);return e&&(au(n)?_t(i,"class",e):i.className=e),ht(t,(r,s)=>{_t(i,r,s)}),i},hv=n=>(e,t)=>{typeof t<"u"&&n.children[t]?n.insertBefore(e,n.children[t]):n.appendChild(e)},dv=(n,e)=>(t,i)=>(typeof i<"u"?e.splice(i,0,t):e.push(t),t),fv=(n,e)=>t=>(e.splice(e.indexOf(t),1),t.element.parentNode&&n.removeChild(t.element),t),pv=typeof window<"u"&&typeof window.document<"u",Vh=()=>pv,mv=Vh()?eo("svg"):{},gv="children"in mv?n=>n.children.length:n=>n.childNodes.length,kh=(n,e,t,i)=>{const r=t[0]||n.left,s=t[1]||n.top,o=r+n.width,a=s+n.height*(i[1]||1),l={element:{...n},inner:{left:n.left,top:n.top,right:n.right,bottom:n.bottom},outer:{left:r,top:s,right:o,bottom:a}};return e.filter(c=>!c.isRectIgnored()).map(c=>c.rect).forEach(c=>{lu(l.inner,{...c.inner}),lu(l.outer,{...c.outer})}),cu(l.inner),l.outer.bottom+=l.element.marginBottom,l.outer.right+=l.element.marginRight,cu(l.outer),l},lu=(n,e)=>{e.top+=n.top,e.right+=n.left,e.bottom+=n.top,e.left+=n.left,e.bottom>n.bottom&&(n.bottom=e.bottom),e.right>n.right&&(n.right=e.right)},cu=n=>{n.width=n.right-n.left,n.height=n.bottom-n.top},pi=n=>typeof n=="number",_v=(n,e,t,i=.001)=>Math.abs(n-e)<i&&Math.abs(t)<i,Ev=({stiffness:n=.5,damping:e=.75,mass:t=10}={})=>{let i=null,r=null,s=0,o=!1;const c=Jn({interpolate:(u,h)=>{if(o)return;if(!(pi(i)&&pi(r))){o=!0,s=0;return}const d=-(r-i)*n;s+=d/t,r+=s,s*=e,_v(r,i,s)||h?(r=i,s=0,o=!0,c.onupdate(r),c.oncomplete(r)):c.onupdate(r)},target:{set:u=>{if(pi(u)&&!pi(r)&&(r=u),i===null&&(i=u,r=u),i=u,r===i||typeof i>"u"){o=!0,s=0,c.onupdate(r),c.oncomplete(r);return}o=!1},get:()=>i},resting:{get:()=>o},onupdate:u=>{},oncomplete:u=>{}});return c},vv=n=>n<.5?2*n*n:-1+(4-2*n)*n,Sv=({duration:n=500,easing:e=vv,delay:t=0}={})=>{let i=null,r,s,o=!0,a=!1,l=null;const u=Jn({interpolate:(h,d)=>{o||l===null||(i===null&&(i=h),!(h-i<t)&&(r=h-i-t,r>=n||d?(r=1,s=a?0:1,u.onupdate(s*l),u.oncomplete(s*l),o=!0):(s=r/n,u.onupdate((r>=0?e(a?1-s:s):0)*l))))},target:{get:()=>a?0:l,set:h=>{if(l===null){l=h,u.onupdate(h),u.oncomplete(h);return}h<l?(l=1,a=!0):(a=!1,l=h),o=!1,i=null}},resting:{get:()=>o},onupdate:h=>{},oncomplete:h=>{}});return u},uu={spring:Ev,tween:Sv},xv=(n,e,t)=>{const i=n[e]&&typeof n[e][t]=="object"?n[e][t]:n[e]||n,r=typeof i=="string"?i:i.type,s=typeof i=="object"?{...i}:{};return uu[r]?uu[r](s):null},el=(n,e,t,i=!1)=>{e=Array.isArray(e)?e:[e],e.forEach(r=>{n.forEach(s=>{let o=s,a=()=>t[s],l=c=>t[s]=c;typeof s=="object"&&(o=s.key,a=s.getter||a,l=s.setter||l),!(r[o]&&!i)&&(r[o]={get:a,set:l})})})},Mv=({mixinConfig:n,viewProps:e,viewInternalAPI:t,viewExternalAPI:i})=>{const r={...e},s=[];return ht(n,(o,a)=>{const l=xv(a);if(!l)return;l.onupdate=u=>{e[o]=u},l.target=r[o],el([{key:o,setter:u=>{l.target!==u&&(l.target=u)},getter:()=>e[o]}],[t,i],e,!0),s.push(l)}),{write:o=>{let a=document.hidden,l=!0;return s.forEach(c=>{c.resting||(l=!1),c.interpolate(o,a)}),l},destroy:()=>{}}},yv=n=>(e,t)=>{n.addEventListener(e,t)},Tv=n=>(e,t)=>{n.removeEventListener(e,t)},bv=({mixinConfig:n,viewProps:e,viewInternalAPI:t,viewExternalAPI:i,viewState:r,view:s})=>{const o=[],a=yv(s.element),l=Tv(s.element);return i.on=(c,u)=>{o.push({type:c,fn:u}),a(c,u)},i.off=(c,u)=>{o.splice(o.findIndex(h=>h.type===c&&h.fn===u),1),l(c,u)},{write:()=>!0,destroy:()=>{o.forEach(c=>{l(c.type,c.fn)})}}},Av=({mixinConfig:n,viewProps:e,viewExternalAPI:t})=>{el(n,t,e)},Ht=n=>n!=null,Rv={opacity:1,scaleX:1,scaleY:1,translateX:0,translateY:0,rotateX:0,rotateY:0,rotateZ:0,originX:0,originY:0},wv=({mixinConfig:n,viewProps:e,viewInternalAPI:t,viewExternalAPI:i,view:r})=>{const s={...e},o={};el(n,[t,i],e);const a=()=>[e.translateX||0,e.translateY||0],l=()=>[e.scaleX||0,e.scaleY||0],c=()=>r.rect?kh(r.rect,r.childViews,a(),l()):null;return t.rect={get:c},i.rect={get:c},n.forEach(u=>{e[u]=typeof s[u]>"u"?Rv[u]:s[u]}),{write:()=>{if(Iv(o,e))return Pv(r.element,e),Object.assign(o,{...e}),!0},destroy:()=>{}}},Iv=(n,e)=>{if(Object.keys(n).length!==Object.keys(e).length)return!0;for(const t in e)if(e[t]!==n[t])return!0;return!1},Pv=(n,{opacity:e,perspective:t,translateX:i,translateY:r,scaleX:s,scaleY:o,rotateX:a,rotateY:l,rotateZ:c,originX:u,originY:h,width:d,height:p})=>{let g="",_="";(Ht(u)||Ht(h))&&(_+=`transform-origin: ${u||0}px ${h||0}px;`),Ht(t)&&(g+=`perspective(${t}px) `),(Ht(i)||Ht(r))&&(g+=`translate3d(${i||0}px, ${r||0}px, 0) `),(Ht(s)||Ht(o))&&(g+=`scale3d(${Ht(s)?s:1}, ${Ht(o)?o:1}, 1) `),Ht(c)&&(g+=`rotateZ(${c}rad) `),Ht(a)&&(g+=`rotateX(${a}rad) `),Ht(l)&&(g+=`rotateY(${l}rad) `),g.length&&(_+=`transform:${g};`),Ht(e)&&(_+=`opacity:${e};`,e===0&&(_+="visibility:hidden;"),e<1&&(_+="pointer-events:none;")),Ht(p)&&(_+=`height:${p}px;`),Ht(d)&&(_+=`width:${d}px;`);const m=n.elementCurrentStyle||"";(_.length!==m.length||_!==m)&&(n.style.cssText=_,n.elementCurrentStyle=_)},Cv={styles:wv,listeners:bv,animations:Mv,apis:Av},hu=(n={},e={},t={})=>(e.layoutCalculated||(n.paddingTop=parseInt(t.paddingTop,10)||0,n.marginTop=parseInt(t.marginTop,10)||0,n.marginRight=parseInt(t.marginRight,10)||0,n.marginBottom=parseInt(t.marginBottom,10)||0,n.marginLeft=parseInt(t.marginLeft,10)||0,e.layoutCalculated=!0),n.left=e.offsetLeft||0,n.top=e.offsetTop||0,n.width=e.offsetWidth||0,n.height=e.offsetHeight||0,n.right=n.left+n.width,n.bottom=n.top+n.height,n.scrollTop=e.scrollTop,n.hidden=e.offsetParent===null,n),Et=({tag:n="div",name:e=null,attributes:t={},read:i=()=>{},write:r=()=>{},create:s=()=>{},destroy:o=()=>{},filterFrameActionsForChild:a=(p,g)=>g,didCreateView:l=()=>{},didWriteView:c=()=>{},ignoreRect:u=!1,ignoreRectUpdate:h=!1,mixins:d=[]}={})=>(p,g={})=>{const _=eo(n,`filepond--${e}`,t),m=window.getComputedStyle(_,null),f=hu();let v=null,E=!1;const S=[],I=[],T={},R={},D=[r],x=[i],y=[o],N=()=>_,z=()=>S.concat(),$=()=>T,w=ae=>(he,Ae)=>he(ae,Ae),F=()=>v||(v=kh(f,S,[0,0],[1,1]),v),P=()=>m,B=()=>{v=null,S.forEach(Ae=>Ae._read()),!(h&&f.width&&f.height)&&hu(f,_,m);const he={root:J,props:g,rect:f};x.forEach(Ae=>Ae(he))},H=(ae,he,Ae)=>{let Ce=he.length===0;return D.forEach(xe=>{xe({props:g,root:J,actions:he,timestamp:ae,shouldOptimize:Ae})===!1&&(Ce=!1)}),I.forEach(xe=>{xe.write(ae)===!1&&(Ce=!1)}),S.filter(xe=>!!xe.element.parentNode).forEach(xe=>{xe._write(ae,a(xe,he),Ae)||(Ce=!1)}),S.forEach((xe,De)=>{xe.element.parentNode||(J.appendChild(xe.element,De),xe._read(),xe._write(ae,a(xe,he),Ae),Ce=!1)}),E=Ce,c({props:g,root:J,actions:he,timestamp:ae}),Ce},G=()=>{I.forEach(ae=>ae.destroy()),y.forEach(ae=>{ae({root:J,props:g})}),S.forEach(ae=>ae._destroy())},X={element:{get:N},style:{get:P},childViews:{get:z}},Z={...X,rect:{get:F},ref:{get:$},is:ae=>e===ae,appendChild:hv(_),createChildView:w(p),linkView:ae=>(S.push(ae),ae),unlinkView:ae=>{S.splice(S.indexOf(ae),1)},appendChildView:dv(_,S),removeChildView:fv(_,S),registerWriter:ae=>D.push(ae),registerReader:ae=>x.push(ae),registerDestroyer:ae=>y.push(ae),invalidateLayout:()=>_.layoutCalculated=!1,dispatch:p.dispatch,query:p.query},oe={element:{get:N},childViews:{get:z},rect:{get:F},resting:{get:()=>E},isRectIgnored:()=>u,_read:B,_write:H,_destroy:G},j={...X,rect:{get:()=>f}};Object.keys(d).sort((ae,he)=>ae==="styles"?1:he==="styles"?-1:0).forEach(ae=>{const he=Cv[ae]({mixinConfig:d[ae],viewProps:g,viewState:R,viewInternalAPI:Z,viewExternalAPI:oe,view:Jn(j)});he&&I.push(he)});const J=Jn(Z);s({root:J,props:g});const Se=gv(_);return S.forEach((ae,he)=>{J.appendChild(ae.element,Se+he)}),l(J),Jn(oe)},Lv=(n,e,t=60)=>{const i="__framePainter";if(window[i]){window[i].readers.push(n),window[i].writers.push(e);return}window[i]={readers:[n],writers:[e]};const r=window[i],s=1e3/t;let o=null,a=null,l=null,c=null;const u=()=>{document.hidden?(l=()=>window.setTimeout(()=>h(performance.now()),s),c=()=>window.clearTimeout(a)):(l=()=>window.requestAnimationFrame(h),c=()=>window.cancelAnimationFrame(a))};document.addEventListener("visibilitychange",()=>{c&&c(),u(),h(performance.now())});const h=d=>{a=l(h),o||(o=d);const p=d-o;p<=s||(o=d-p%s,r.readers.forEach(g=>g()),r.writers.forEach(g=>g(d)))};return u(),h(performance.now()),{pause:()=>{c(a)}}},qt=(n,e)=>({root:t,props:i,actions:r=[],timestamp:s,shouldOptimize:o})=>{r.filter(a=>n[a.type]).forEach(a=>n[a.type]({root:t,props:i,action:a.data,timestamp:s,shouldOptimize:o})),e&&e({root:t,props:i,actions:r,timestamp:s,shouldOptimize:o})},du=(n,e)=>e.parentNode.insertBefore(n,e),fu=(n,e)=>e.parentNode.insertBefore(n,e.nextSibling),fo=n=>Array.isArray(n),Fn=n=>n==null,Dv=n=>n.trim(),po=n=>""+n,Ov=(n,e=",")=>Fn(n)?[]:fo(n)?n:po(n).split(e).map(Dv).filter(t=>t.length),Wh=n=>typeof n=="boolean",Xh=n=>Wh(n)?n:n==="true",Xt=n=>typeof n=="string",qh=n=>pi(n)?n:Xt(n)?po(n).replace(/[a-z]+/gi,""):0,Ws=n=>parseInt(qh(n),10),pu=n=>parseFloat(qh(n)),pr=n=>pi(n)&&isFinite(n)&&Math.floor(n)===n,mu=(n,e=1e3)=>{if(pr(n))return n;let t=po(n).trim();return/MB$/i.test(t)?(t=t.replace(/MB$i/,"").trim(),Ws(t)*e*e):/KB/i.test(t)?(t=t.replace(/KB$i/,"").trim(),Ws(t)*e):Ws(t)},mi=n=>typeof n=="function",Nv=n=>{let e=self,t=n.split("."),i=null;for(;i=t.shift();)if(e=e[i],!e)return null;return e},gu={process:"POST",patch:"PATCH",revert:"DELETE",fetch:"GET",restore:"GET",load:"GET"},Uv=n=>{const e={};return e.url=Xt(n)?n:n.url||"",e.timeout=n.timeout?parseInt(n.timeout,10):0,e.headers=n.headers?n.headers:{},ht(gu,t=>{e[t]=Fv(t,n[t],gu[t],e.timeout,e.headers)}),e.process=n.process||Xt(n)||n.url?e.process:null,e.remove=n.remove||null,delete e.headers,e},Fv=(n,e,t,i,r)=>{if(e===null)return null;if(typeof e=="function")return e;const s={url:t==="GET"||t==="PATCH"?`?${n}=`:"",method:t,headers:r,withCredentials:!1,timeout:i,onload:null,ondata:null,onerror:null};if(Xt(e))return s.url=e,s;if(Object.assign(s,e),Xt(s.headers)){const o=s.headers.split(/:(.+)/);s.headers={header:o[0],value:o[1]}}return s.withCredentials=Xh(s.withCredentials),s},Bv=n=>Uv(n),Gv=n=>n===null,It=n=>typeof n=="object"&&n!==null,zv=n=>It(n)&&Xt(n.url)&&It(n.process)&&It(n.revert)&&It(n.restore)&&It(n.fetch),Ia=n=>fo(n)?"array":Gv(n)?"null":pr(n)?"int":/^[0-9]+ ?(?:GB|MB|KB)$/gi.test(n)?"bytes":zv(n)?"api":typeof n,Hv=n=>n.replace(/{\s*'/g,'{"').replace(/'\s*}/g,'"}').replace(/'\s*:/g,'":').replace(/:\s*'/g,':"').replace(/,\s*'/g,',"').replace(/'\s*,/g,'",'),Vv={array:Ov,boolean:Xh,int:n=>Ia(n)==="bytes"?mu(n):Ws(n),number:pu,float:pu,bytes:mu,string:n=>mi(n)?n:po(n),function:n=>Nv(n),serverapi:Bv,object:n=>{try{return JSON.parse(Hv(n))}catch{return null}}},kv=(n,e)=>Vv[e](n),Yh=(n,e,t)=>{if(n===e)return n;let i=Ia(n);if(i!==t){const r=kv(n,t);if(i=Ia(r),r===null)throw`Trying to assign value with incorrect type to "${option}", allowed type: "${t}"`;n=r}return n},Wv=(n,e)=>{let t=n;return{enumerable:!0,get:()=>t,set:i=>{t=Yh(i,n,e)}}},Xv=n=>{const e={};return ht(n,t=>{const i=n[t];e[t]=Wv(i[0],i[1])}),Jn(e)},qv=n=>({items:[],listUpdateTimeout:null,itemUpdateTimeout:null,processingQueue:[],options:Xv(n)}),mo=(n,e="-")=>n.split(/(?=[A-Z])/).map(t=>t.toLowerCase()).join(e),Yv=(n,e)=>{const t={};return ht(e,i=>{t[i]={get:()=>n.getState().options[i],set:r=>{n.dispatch(`SET_${mo(i,"_").toUpperCase()}`,{value:r})}}}),t},jv=n=>(e,t,i)=>{const r={};return ht(n,s=>{const o=mo(s,"_").toUpperCase();r[`SET_${o}`]=a=>{try{i.options[s]=a.value}catch{}e(`DID_SET_${o}`,{value:i.options[s]})}}),r},Zv=n=>e=>{const t={};return ht(n,i=>{t[`GET_${mo(i,"_").toUpperCase()}`]=r=>e.options[i]}),t},cn={API:1,DROP:2,BROWSE:3,PASTE:4,NONE:5},tl=()=>Math.random().toString(36).substring(2,11),nl=(n,e)=>n.splice(e,1),$v=(n,e)=>{e?n():document.hidden?Promise.resolve(1).then(n):setTimeout(n,0)},go=()=>{const n=[],e=(i,r)=>{nl(n,n.findIndex(s=>s.event===i&&(s.cb===r||!r)))},t=(i,r,s)=>{n.filter(o=>o.event===i).map(o=>o.cb).forEach(o=>$v(()=>o(...r),s))};return{fireSync:(i,...r)=>{t(i,r,!0)},fire:(i,...r)=>{t(i,r,!1)},on:(i,r)=>{n.push({event:i,cb:r})},onOnce:(i,r)=>{n.push({event:i,cb:(...s)=>{e(i,r),r(...s)}})},off:e}},jh=(n,e,t)=>{Object.getOwnPropertyNames(n).filter(i=>!t.includes(i)).forEach(i=>Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i)))},Kv=["fire","process","revert","load","on","off","onOnce","retryLoad","extend","archive","archived","release","released","requestProcessing","freeze"],Yt=n=>{const e={};return jh(n,e,Kv),e},Qv=n=>{n.forEach((e,t)=>{e.released&&nl(n,t)})},Be={INIT:1,IDLE:2,PROCESSING_QUEUED:9,PROCESSING:3,PROCESSING_COMPLETE:5,PROCESSING_ERROR:6,PROCESSING_REVERT_ERROR:10,LOADING:7,LOAD_ERROR:8},Rt={INPUT:1,LIMBO:2,LOCAL:3},Zh=n=>/[^0-9]+/.exec(n),$h=()=>Zh(1.1.toLocaleString())[0],Jv=()=>{const n=$h(),e=1e3.toLocaleString();return e!=="1000"?Zh(e)[0]:n==="."?",":"."},ee={BOOLEAN:"boolean",INT:"int",NUMBER:"number",STRING:"string",ARRAY:"array",OBJECT:"object",FUNCTION:"function",ACTION:"action",SERVER_API:"serverapi",REGEX:"regex"},il=[],fn=(n,e,t)=>new Promise((i,r)=>{const s=il.filter(a=>a.key===n).map(a=>a.cb);if(s.length===0){i(e);return}const o=s.shift();s.reduce((a,l)=>a.then(c=>l(c,t)),o(e,t)).then(a=>i(a)).catch(a=>r(a))}),Ii=(n,e,t)=>il.filter(i=>i.key===n).map(i=>i.cb(e,t)),eS=(n,e)=>il.push({key:n,cb:e}),tS=n=>Object.assign(er,n),to=()=>({...er}),nS=n=>{ht(n,(e,t)=>{er[e]&&(er[e][0]=Yh(t,er[e][0],er[e][1]))})},er={id:[null,ee.STRING],name:["filepond",ee.STRING],disabled:[!1,ee.BOOLEAN],className:[null,ee.STRING],required:[!1,ee.BOOLEAN],captureMethod:[null,ee.STRING],allowSyncAcceptAttribute:[!0,ee.BOOLEAN],allowDrop:[!0,ee.BOOLEAN],allowBrowse:[!0,ee.BOOLEAN],allowPaste:[!0,ee.BOOLEAN],allowMultiple:[!1,ee.BOOLEAN],allowReplace:[!0,ee.BOOLEAN],allowRevert:[!0,ee.BOOLEAN],allowRemove:[!0,ee.BOOLEAN],allowProcess:[!0,ee.BOOLEAN],allowReorder:[!1,ee.BOOLEAN],allowDirectoriesOnly:[!1,ee.BOOLEAN],storeAsFile:[!1,ee.BOOLEAN],forceRevert:[!1,ee.BOOLEAN],maxFiles:[null,ee.INT],checkValidity:[!1,ee.BOOLEAN],itemInsertLocationFreedom:[!0,ee.BOOLEAN],itemInsertLocation:["before",ee.STRING],itemInsertInterval:[75,ee.INT],dropOnPage:[!1,ee.BOOLEAN],dropOnElement:[!0,ee.BOOLEAN],dropValidation:[!1,ee.BOOLEAN],ignoredFiles:[[".ds_store","thumbs.db","desktop.ini"],ee.ARRAY],instantUpload:[!0,ee.BOOLEAN],maxParallelUploads:[2,ee.INT],allowMinimumUploadDuration:[!0,ee.BOOLEAN],chunkUploads:[!1,ee.BOOLEAN],chunkForce:[!1,ee.BOOLEAN],chunkSize:[5e6,ee.INT],chunkRetryDelays:[[500,1e3,3e3],ee.ARRAY],server:[null,ee.SERVER_API],fileSizeBase:[1e3,ee.INT],labelFileSizeBytes:["bytes",ee.STRING],labelFileSizeKilobytes:["KB",ee.STRING],labelFileSizeMegabytes:["MB",ee.STRING],labelFileSizeGigabytes:["GB",ee.STRING],labelDecimalSeparator:[$h(),ee.STRING],labelThousandsSeparator:[Jv(),ee.STRING],labelIdle:['Drag & Drop your files or <span class="filepond--label-action">Browse</span>',ee.STRING],labelInvalidField:["Field contains invalid files",ee.STRING],labelFileWaitingForSize:["Waiting for size",ee.STRING],labelFileSizeNotAvailable:["Size not available",ee.STRING],labelFileCountSingular:["file in list",ee.STRING],labelFileCountPlural:["files in list",ee.STRING],labelFileLoading:["Loading",ee.STRING],labelFileAdded:["Added",ee.STRING],labelFileLoadError:["Error during load",ee.STRING],labelFileRemoved:["Removed",ee.STRING],labelFileRemoveError:["Error during remove",ee.STRING],labelFileProcessing:["Uploading",ee.STRING],labelFileProcessingComplete:["Upload complete",ee.STRING],labelFileProcessingAborted:["Upload cancelled",ee.STRING],labelFileProcessingError:["Error during upload",ee.STRING],labelFileProcessingRevertError:["Error during revert",ee.STRING],labelTapToCancel:["tap to cancel",ee.STRING],labelTapToRetry:["tap to retry",ee.STRING],labelTapToUndo:["tap to undo",ee.STRING],labelButtonRemoveItem:["Remove",ee.STRING],labelButtonAbortItemLoad:["Abort",ee.STRING],labelButtonRetryItemLoad:["Retry",ee.STRING],labelButtonAbortItemProcessing:["Cancel",ee.STRING],labelButtonUndoItemProcessing:["Undo",ee.STRING],labelButtonRetryItemProcessing:["Retry",ee.STRING],labelButtonProcessItem:["Upload",ee.STRING],iconRemove:['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"/></svg>',ee.STRING],iconProcess:['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="currentColor" fill-rule="evenodd"/></svg>',ee.STRING],iconRetry:['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M10.81 9.185l-.038.02A4.997 4.997 0 0 0 8 13.683a5 5 0 0 0 5 5 5 5 0 0 0 5-5 1 1 0 0 1 2 0A7 7 0 1 1 9.722 7.496l-.842-.21a.999.999 0 1 1 .484-1.94l3.23.806c.535.133.86.675.73 1.21l-.804 3.233a.997.997 0 0 1-1.21.73.997.997 0 0 1-.73-1.21l.23-.928v-.002z" fill="currentColor" fill-rule="nonzero"/></svg>',ee.STRING],iconUndo:['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M9.185 10.81l.02-.038A4.997 4.997 0 0 1 13.683 8a5 5 0 0 1 5 5 5 5 0 0 1-5 5 1 1 0 0 0 0 2A7 7 0 1 0 7.496 9.722l-.21-.842a.999.999 0 1 0-1.94.484l.806 3.23c.133.535.675.86 1.21.73l3.233-.803a.997.997 0 0 0 .73-1.21.997.997 0 0 0-1.21-.73l-.928.23-.002-.001z" fill="currentColor" fill-rule="nonzero"/></svg>',ee.STRING],iconDone:['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M18.293 9.293a1 1 0 0 1 1.414 1.414l-7.002 7a1 1 0 0 1-1.414 0l-3.998-4a1 1 0 1 1 1.414-1.414L12 15.586l6.294-6.293z" fill="currentColor" fill-rule="nonzero"/></svg>',ee.STRING],oninit:[null,ee.FUNCTION],onwarning:[null,ee.FUNCTION],onerror:[null,ee.FUNCTION],onactivatefile:[null,ee.FUNCTION],oninitfile:[null,ee.FUNCTION],onaddfilestart:[null,ee.FUNCTION],onaddfileprogress:[null,ee.FUNCTION],onaddfile:[null,ee.FUNCTION],onprocessfilestart:[null,ee.FUNCTION],onprocessfileprogress:[null,ee.FUNCTION],onprocessfileabort:[null,ee.FUNCTION],onprocessfilerevert:[null,ee.FUNCTION],onprocessfile:[null,ee.FUNCTION],onprocessfiles:[null,ee.FUNCTION],onremovefile:[null,ee.FUNCTION],onpreparefile:[null,ee.FUNCTION],onupdatefiles:[null,ee.FUNCTION],onreorderfiles:[null,ee.FUNCTION],beforeDropFile:[null,ee.FUNCTION],beforeAddFile:[null,ee.FUNCTION],beforeRemoveFile:[null,ee.FUNCTION],beforePrepareFile:[null,ee.FUNCTION],stylePanelLayout:[null,ee.STRING],stylePanelAspectRatio:[null,ee.STRING],styleItemPanelAspectRatio:[null,ee.STRING],styleButtonRemoveItemPosition:["left",ee.STRING],styleButtonProcessItemPosition:["right",ee.STRING],styleLoadIndicatorPosition:["right",ee.STRING],styleProgressIndicatorPosition:["right",ee.STRING],styleButtonRemoveItemAlign:[!1,ee.BOOLEAN],files:[[],ee.ARRAY],credits:[["https://pqina.nl/","Powered by PQINA"],ee.ARRAY]},gi=(n,e)=>Fn(e)?n[0]||null:pr(e)?n[e]||null:(typeof e=="object"&&(e=e.id),n.find(t=>t.id===e)||null),Kh=n=>{if(Fn(n))return n;if(/:/.test(n)){const e=n.split(":");return e[1]/e[0]}return parseFloat(n)},_n=n=>n.filter(e=>!e.archived),iS={EMPTY:0,IDLE:1,ERROR:2,BUSY:3,READY:4};let Ls=null;const rS=()=>{if(Ls===null)try{const n=new DataTransfer;n.items.add(new File(["hello world"],"This_Works.txt"));const e=document.createElement("input");e.setAttribute("type","file"),e.files=n.files,Ls=e.files.length===1}catch{Ls=!1}return Ls},sS=[Be.LOAD_ERROR,Be.PROCESSING_ERROR,Be.PROCESSING_REVERT_ERROR],oS=[Be.LOADING,Be.PROCESSING,Be.PROCESSING_QUEUED,Be.INIT],aS=[Be.PROCESSING_COMPLETE],lS=n=>sS.includes(n.status),cS=n=>oS.includes(n.status),uS=n=>aS.includes(n.status),_u=n=>It(n.options.server)&&(It(n.options.server.process)||mi(n.options.server.process)),hS=n=>({GET_STATUS:()=>{const e=_n(n.items),{EMPTY:t,ERROR:i,BUSY:r,IDLE:s,READY:o}=iS;return e.length===0?t:e.some(lS)?i:e.some(cS)?r:e.some(uS)?o:s},GET_ITEM:e=>gi(n.items,e),GET_ACTIVE_ITEM:e=>gi(_n(n.items),e),GET_ACTIVE_ITEMS:()=>_n(n.items),GET_ITEMS:()=>n.items,GET_ITEM_NAME:e=>{const t=gi(n.items,e);return t?t.filename:null},GET_ITEM_SIZE:e=>{const t=gi(n.items,e);return t?t.fileSize:null},GET_STYLES:()=>Object.keys(n.options).filter(e=>/^style/.test(e)).map(e=>({name:e,value:n.options[e]})),GET_PANEL_ASPECT_RATIO:()=>/circle/.test(n.options.stylePanelLayout)?1:Kh(n.options.stylePanelAspectRatio),GET_ITEM_PANEL_ASPECT_RATIO:()=>n.options.styleItemPanelAspectRatio,GET_ITEMS_BY_STATUS:e=>_n(n.items).filter(t=>t.status===e),GET_TOTAL_ITEMS:()=>_n(n.items).length,SHOULD_UPDATE_FILE_INPUT:()=>n.options.storeAsFile&&rS()&&!_u(n),IS_ASYNC:()=>_u(n),GET_FILE_SIZE_LABELS:e=>({labelBytes:e("GET_LABEL_FILE_SIZE_BYTES")||void 0,labelKilobytes:e("GET_LABEL_FILE_SIZE_KILOBYTES")||void 0,labelMegabytes:e("GET_LABEL_FILE_SIZE_MEGABYTES")||void 0,labelGigabytes:e("GET_LABEL_FILE_SIZE_GIGABYTES")||void 0})}),dS=n=>{const e=_n(n.items).length;if(!n.options.allowMultiple)return e===0;const t=n.options.maxFiles;return t===null||e<t},Qh=(n,e,t)=>Math.max(Math.min(t,n),e),fS=(n,e,t)=>n.splice(e,0,t),pS=(n,e,t)=>Fn(e)?null:typeof t>"u"?(n.push(e),e):(t=Qh(t,0,n.length),fS(n,t,e),e),Pa=n=>/^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i.test(n),$r=n=>`${n}`.split("/").pop().split("?").shift(),_o=n=>n.split(".").pop(),mS=n=>{if(typeof n!="string")return"";const e=n.split("/").pop();return/svg/.test(e)?"svg":/zip|compressed/.test(e)?"zip":/plain/.test(e)?"txt":/msword/.test(e)?"doc":/[a-z]+/.test(e)?e==="jpeg"?"jpg":e:""},Mr=(n,e="")=>(e+n).slice(-e.length),Jh=(n=new Date)=>`${n.getFullYear()}-${Mr(n.getMonth()+1,"00")}-${Mr(n.getDate(),"00")}_${Mr(n.getHours(),"00")}-${Mr(n.getMinutes(),"00")}-${Mr(n.getSeconds(),"00")}`,hr=(n,e,t=null,i=null)=>{const r=typeof t=="string"?n.slice(0,n.size,t):n.slice(0,n.size,n.type);return r.lastModifiedDate=new Date,n._relativePath&&(r._relativePath=n._relativePath),Xt(e)||(e=Jh()),e&&i===null&&_o(e)?r.name=e:(i=i||mS(r.type),r.name=e+(i?"."+i:"")),r},gS=()=>window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,ed=(n,e)=>{const t=gS();if(t){const i=new t;return i.append(n),i.getBlob(e)}return new Blob([n],{type:e})},_S=(n,e)=>{const t=new ArrayBuffer(n.length),i=new Uint8Array(t);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return ed(t,e)},td=n=>(/^data:(.+);/.exec(n)||[])[1]||null,ES=n=>n.split(",")[1].replace(/\s/g,""),vS=n=>atob(ES(n)),SS=n=>{const e=td(n),t=vS(n);return _S(t,e)},xS=(n,e,t)=>hr(SS(n),e,null,t),MS=n=>{if(!/^content-disposition:/i.test(n))return null;const e=n.split(/filename=|filename\*=.+''/).splice(1).map(t=>t.trim().replace(/^["']|[;"']{0,2}$/g,"")).filter(t=>t.length);return e.length?decodeURI(e[e.length-1]):null},yS=n=>{if(/content-length:/i.test(n)){const e=n.match(/[0-9]+/)[0];return e?parseInt(e,10):null}return null},TS=n=>/x-content-transfer-id:/i.test(n)&&(n.split(":")[1]||"").trim()||null,rl=n=>{const e={source:null,name:null,size:null},t=n.split(`
`);for(let i of t){const r=MS(i);if(r){e.name=r;continue}const s=yS(i);if(s){e.size=s;continue}const o=TS(i);if(o){e.source=o;continue}}return e},bS=n=>{const e={source:null,complete:!1,progress:0,size:null,timestamp:null,duration:0,request:null},t=()=>e.progress,i=()=>{e.request&&e.request.abort&&e.request.abort()},r=()=>{const a=e.source;o.fire("init",a),a instanceof File?o.fire("load",a):a instanceof Blob?o.fire("load",hr(a,a.name)):Pa(a)?o.fire("load",xS(a)):s(a)},s=a=>{if(!n){o.fire("error",{type:"error",body:"Can't load URL",code:400});return}e.timestamp=Date.now(),e.request=n(a,l=>{e.duration=Date.now()-e.timestamp,e.complete=!0,l instanceof Blob&&(l=hr(l,l.name||$r(a))),o.fire("load",l instanceof Blob?l:l?l.body:null)},l=>{o.fire("error",typeof l=="string"?{type:"error",code:0,body:l}:l)},(l,c,u)=>{if(u&&(e.size=u),e.duration=Date.now()-e.timestamp,!l){e.progress=null;return}e.progress=c/u,o.fire("progress",e.progress)},()=>{o.fire("abort")},l=>{const c=rl(typeof l=="string"?l:l.headers);o.fire("meta",{size:e.size||c.size,filename:c.name,source:c.source})})},o={...go(),setSource:a=>e.source=a,getProgress:t,abort:i,load:r};return o},Eu=n=>/GET|HEAD/.test(n),Si=(n,e,t)=>{const i={onheaders:()=>{},onprogress:()=>{},onload:()=>{},ontimeout:()=>{},onerror:()=>{},onabort:()=>{},abort:()=>{r=!0,o.abort()}};let r=!1,s=!1;t={method:"POST",headers:{},withCredentials:!1,...t},e=encodeURI(e),Eu(t.method)&&n&&(e=`${e}${encodeURIComponent(typeof n=="string"?n:JSON.stringify(n))}`);const o=new XMLHttpRequest,a=Eu(t.method)?o:o.upload;return a.onprogress=l=>{r||i.onprogress(l.lengthComputable,l.loaded,l.total)},o.onreadystatechange=()=>{o.readyState<2||o.readyState===4&&o.status===0||s||(s=!0,i.onheaders(o))},o.onload=()=>{o.status>=200&&o.status<300?i.onload(o):i.onerror(o)},o.onerror=()=>i.onerror(o),o.onabort=()=>{r=!0,i.onabort()},o.ontimeout=()=>i.ontimeout(o),o.open(t.method,e,!0),pr(t.timeout)&&(o.timeout=t.timeout),Object.keys(t.headers).forEach(l=>{const c=unescape(encodeURIComponent(t.headers[l]));o.setRequestHeader(l,c)}),t.responseType&&(o.responseType=t.responseType),t.withCredentials&&(o.withCredentials=!0),o.send(n),i},ft=(n,e,t,i)=>({type:n,code:e,body:t,headers:i}),xi=n=>e=>{n(ft("error",0,"Timeout",e.getAllResponseHeaders()))},vu=n=>/\?/.test(n),Fr=(...n)=>{let e="";return n.forEach(t=>{e+=vu(e)&&vu(t)?t.replace(/\?/,"&"):t}),e},aa=(n="",e)=>{if(typeof e=="function")return e;if(!e||!Xt(e.url))return null;const t=e.onload||(r=>r),i=e.onerror||(r=>null);return(r,s,o,a,l,c)=>{const u=Si(r,Fr(n,e.url),{...e,responseType:"blob"});return u.onload=h=>{const d=h.getAllResponseHeaders(),p=rl(d).name||$r(r);s(ft("load",h.status,e.method==="HEAD"?null:hr(t(h.response),p),d))},u.onerror=h=>{o(ft("error",h.status,i(h.response)||h.statusText,h.getAllResponseHeaders()))},u.onheaders=h=>{c(ft("headers",h.status,null,h.getAllResponseHeaders()))},u.ontimeout=xi(o),u.onprogress=a,u.onabort=l,u}},nn={QUEUED:0,COMPLETE:1,PROCESSING:2,ERROR:3,WAITING:4},AS=(n,e,t,i,r,s,o,a,l,c,u)=>{const h=[],{chunkTransferId:d,chunkServer:p,chunkSize:g,chunkRetryDelays:_}=u,m={serverId:d,aborted:!1},f=e.ondata||(w=>w),v=e.onload||((w,F)=>F==="HEAD"?w.getResponseHeader("Upload-Offset"):w.response),E=e.onerror||(w=>null),S=w=>{const F=new FormData;It(r)&&F.append(t,JSON.stringify(r));const P=typeof e.headers=="function"?e.headers(i,r):{...e.headers,"Upload-Length":i.size},B={...e,headers:P},H=Si(f(F),Fr(n,e.url),B);H.onload=G=>w(v(G,B.method)),H.onerror=G=>o(ft("error",G.status,E(G.response)||G.statusText,G.getAllResponseHeaders())),H.ontimeout=xi(o)},I=w=>{const F=Fr(n,p.url,m.serverId),B={headers:typeof e.headers=="function"?e.headers(m.serverId):{...e.headers},method:"HEAD"},H=Si(null,F,B);H.onload=G=>w(v(G,B.method)),H.onerror=G=>o(ft("error",G.status,E(G.response)||G.statusText,G.getAllResponseHeaders())),H.ontimeout=xi(o)},T=Math.floor(i.size/g);for(let w=0;w<=T;w++){const F=w*g,P=i.slice(F,F+g,"application/offset+octet-stream");h[w]={index:w,size:P.size,offset:F,data:P,file:i,progress:0,retries:[..._],status:nn.QUEUED,error:null,request:null,timeout:null}}const R=()=>s(m.serverId),D=w=>w.status===nn.QUEUED||w.status===nn.ERROR,x=w=>{if(m.aborted)return;if(w=w||h.find(D),!w){h.every(X=>X.status===nn.COMPLETE)&&R();return}w.status=nn.PROCESSING,w.progress=null;const F=p.ondata||(X=>X),P=p.onerror||(X=>null),B=Fr(n,p.url,m.serverId),H=typeof p.headers=="function"?p.headers(w):{...p.headers,"Content-Type":"application/offset+octet-stream","Upload-Offset":w.offset,"Upload-Length":i.size,"Upload-Name":i.name},G=w.request=Si(F(w.data),B,{...p,headers:H});G.onload=()=>{w.status=nn.COMPLETE,w.request=null,z()},G.onprogress=(X,Z,oe)=>{w.progress=X?Z:null,N()},G.onerror=X=>{w.status=nn.ERROR,w.request=null,w.error=P(X.response)||X.statusText,y(w)||o(ft("error",X.status,P(X.response)||X.statusText,X.getAllResponseHeaders()))},G.ontimeout=X=>{w.status=nn.ERROR,w.request=null,y(w)||xi(o)(X)},G.onabort=()=>{w.status=nn.QUEUED,w.request=null,l()}},y=w=>w.retries.length===0?!1:(w.status=nn.WAITING,clearTimeout(w.timeout),w.timeout=setTimeout(()=>{x(w)},w.retries.shift()),!0),N=()=>{const w=h.reduce((P,B)=>P===null||B.progress===null?null:P+B.progress,0);if(w===null)return a(!1,0,0);const F=h.reduce((P,B)=>P+B.size,0);a(!0,w,F)},z=()=>{h.filter(F=>F.status===nn.PROCESSING).length>=1||x()},$=()=>{h.forEach(w=>{clearTimeout(w.timeout),w.request&&w.request.abort()})};return m.serverId?I(w=>{m.aborted||(h.filter(F=>F.offset<w).forEach(F=>{F.status=nn.COMPLETE,F.progress=F.size}),z())}):S(w=>{m.aborted||(c(w),m.serverId=w,z())}),{abort:()=>{m.aborted=!0,$()}}},RS=(n,e,t,i)=>(r,s,o,a,l,c,u)=>{if(!r)return;const h=i.chunkUploads,d=h&&r.size>i.chunkSize,p=h&&(d||i.chunkForce);if(r instanceof Blob&&p)return AS(n,e,t,r,s,o,a,l,c,u,i);const g=e.ondata||(I=>I),_=e.onload||(I=>I),m=e.onerror||(I=>null),f=typeof e.headers=="function"?e.headers(r,s)||{}:{...e.headers},v={...e,headers:f};var E=new FormData;It(s)&&E.append(t,JSON.stringify(s)),(r instanceof Blob?[{name:null,file:r}]:r).forEach(I=>{E.append(t,I.file,I.name===null?I.file.name:`${I.name}${I.file.name}`)});const S=Si(g(E),Fr(n,e.url),v);return S.onload=I=>{o(ft("load",I.status,_(I.response),I.getAllResponseHeaders()))},S.onerror=I=>{a(ft("error",I.status,m(I.response)||I.statusText,I.getAllResponseHeaders()))},S.ontimeout=xi(a),S.onprogress=l,S.onabort=c,S},wS=(n="",e,t,i)=>typeof e=="function"?(...r)=>e(t,...r,i):!e||!Xt(e.url)?null:RS(n,e,t,i),yr=(n="",e)=>{if(typeof e=="function")return e;if(!e||!Xt(e.url))return(r,s)=>s();const t=e.onload||(r=>r),i=e.onerror||(r=>null);return(r,s,o)=>{const a=Si(r,n+e.url,e);return a.onload=l=>{s(ft("load",l.status,t(l.response),l.getAllResponseHeaders()))},a.onerror=l=>{o(ft("error",l.status,i(l.response)||l.statusText,l.getAllResponseHeaders()))},a.ontimeout=xi(o),a}},nd=(n=0,e=1)=>n+Math.random()*(e-n),IS=(n,e=1e3,t=0,i=25,r=250)=>{let s=null;const o=Date.now(),a=()=>{let l=Date.now()-o,c=nd(i,r);l+c>e&&(c=l+c-e);let u=l/e;if(u>=1||document.hidden){n(1);return}n(u),s=setTimeout(a,c)};return e>0&&a(),{clear:()=>{clearTimeout(s)}}},PS=(n,e)=>{const t={complete:!1,perceivedProgress:0,perceivedPerformanceUpdater:null,progress:null,timestamp:null,perceivedDuration:0,duration:0,request:null,response:null},{allowMinimumUploadDuration:i}=e,r=(u,h)=>{const d=()=>{t.duration===0||t.progress===null||c.fire("progress",c.getProgress())},p=()=>{t.complete=!0,c.fire("load-perceived",t.response.body)};c.fire("start"),t.timestamp=Date.now(),t.perceivedPerformanceUpdater=IS(g=>{t.perceivedProgress=g,t.perceivedDuration=Date.now()-t.timestamp,d(),t.response&&t.perceivedProgress===1&&!t.complete&&p()},i?nd(750,1500):0),t.request=n(u,h,g=>{t.response=It(g)?g:{type:"load",code:200,body:`${g}`,headers:{}},t.duration=Date.now()-t.timestamp,t.progress=1,c.fire("load",t.response.body),(!i||i&&t.perceivedProgress===1)&&p()},g=>{t.perceivedPerformanceUpdater.clear(),c.fire("error",It(g)?g:{type:"error",code:0,body:`${g}`})},(g,_,m)=>{t.duration=Date.now()-t.timestamp,t.progress=g?_/m:null,d()},()=>{t.perceivedPerformanceUpdater.clear(),c.fire("abort",t.response?t.response.body:null)},g=>{c.fire("transfer",g)})},s=()=>{t.request&&(t.perceivedPerformanceUpdater.clear(),t.request.abort&&t.request.abort(),t.complete=!0)},o=()=>{s(),t.complete=!1,t.perceivedProgress=0,t.progress=0,t.timestamp=null,t.perceivedDuration=0,t.duration=0,t.request=null,t.response=null},a=i?()=>t.progress?Math.min(t.progress,t.perceivedProgress):null:()=>t.progress||null,l=i?()=>Math.min(t.duration,t.perceivedDuration):()=>t.duration,c={...go(),process:r,abort:s,getProgress:a,getDuration:l,reset:o};return c},id=n=>n.substring(0,n.lastIndexOf("."))||n,CS=n=>{let e=[n.name,n.size,n.type];return n instanceof Blob||Pa(n)?e[0]=n.name||Jh():Pa(n)?(e[1]=n.length,e[2]=td(n)):Xt(n)&&(e[0]=$r(n),e[1]=0,e[2]="application/octet-stream"),{name:e[0],size:e[1],type:e[2]}},dr=n=>!!(n instanceof File||n instanceof Blob&&n.name),rd=n=>{if(!It(n))return n;const e=fo(n)?[]:{};for(const t in n){if(!n.hasOwnProperty(t))continue;const i=n[t];e[t]=i&&It(i)?rd(i):i}return e},LS=(n=null,e=null,t=null)=>{const i=tl(),r={archived:!1,frozen:!1,released:!1,source:null,file:t,serverFileReference:e,transferId:null,processingAborted:!1,status:e?Be.PROCESSING_COMPLETE:Be.INIT,activeLoader:null,activeProcessor:null};let s=null;const o={},a=D=>r.status=D,l=(D,...x)=>{r.released||r.frozen||T.fire(D,...x)},c=()=>_o(r.file.name),u=()=>r.file.type,h=()=>r.file.size,d=()=>r.file,p=(D,x,y)=>{if(r.source=D,T.fireSync("init"),r.file){T.fireSync("load-skip");return}r.file=CS(D),x.on("init",()=>{l("load-init")}),x.on("meta",N=>{r.file.size=N.size,r.file.filename=N.filename,N.source&&(n=Rt.LIMBO,r.serverFileReference=N.source,r.status=Be.PROCESSING_COMPLETE),l("load-meta")}),x.on("progress",N=>{a(Be.LOADING),l("load-progress",N)}),x.on("error",N=>{a(Be.LOAD_ERROR),l("load-request-error",N)}),x.on("abort",()=>{a(Be.INIT),l("load-abort")}),x.on("load",N=>{r.activeLoader=null;const z=w=>{r.file=dr(w)?w:r.file,n===Rt.LIMBO&&r.serverFileReference?a(Be.PROCESSING_COMPLETE):a(Be.IDLE),l("load")},$=w=>{r.file=N,l("load-meta"),a(Be.LOAD_ERROR),l("load-file-error",w)};if(r.serverFileReference){z(N);return}y(N,z,$)}),x.setSource(D),r.activeLoader=x,x.load()},g=()=>{r.activeLoader&&r.activeLoader.load()},_=()=>{if(r.activeLoader){r.activeLoader.abort();return}a(Be.INIT),l("load-abort")},m=(D,x)=>{if(r.processingAborted){r.processingAborted=!1;return}if(a(Be.PROCESSING),s=null,!(r.file instanceof Blob)){T.on("load",()=>{m(D,x)});return}D.on("load",z=>{r.transferId=null,r.serverFileReference=z}),D.on("transfer",z=>{r.transferId=z}),D.on("load-perceived",z=>{r.activeProcessor=null,r.transferId=null,r.serverFileReference=z,a(Be.PROCESSING_COMPLETE),l("process-complete",z)}),D.on("start",()=>{l("process-start")}),D.on("error",z=>{r.activeProcessor=null,a(Be.PROCESSING_ERROR),l("process-error",z)}),D.on("abort",z=>{r.activeProcessor=null,r.serverFileReference=z,a(Be.IDLE),l("process-abort"),s&&s()}),D.on("progress",z=>{l("process-progress",z)});const y=z=>{r.archived||D.process(z,{...o})},N=console.error;x(r.file,y,N),r.activeProcessor=D},f=()=>{r.processingAborted=!1,a(Be.PROCESSING_QUEUED)},v=()=>new Promise(D=>{if(!r.activeProcessor){r.processingAborted=!0,a(Be.IDLE),l("process-abort"),D();return}s=()=>{D()},r.activeProcessor.abort()}),E=(D,x)=>new Promise((y,N)=>{const z=r.serverFileReference!==null?r.serverFileReference:r.transferId;if(z===null){y();return}D(z,()=>{r.serverFileReference=null,r.transferId=null,y()},$=>{if(!x){y();return}a(Be.PROCESSING_REVERT_ERROR),l("process-revert-error"),N($)}),a(Be.IDLE),l("process-revert")}),S=(D,x,y)=>{const N=D.split("."),z=N[0],$=N.pop();let w=o;N.forEach(F=>w=w[F]),JSON.stringify(w[$])!==JSON.stringify(x)&&(w[$]=x,l("metadata-update",{key:z,value:o[z],silent:y}))},T={id:{get:()=>i},origin:{get:()=>n,set:D=>n=D},serverId:{get:()=>r.serverFileReference},transferId:{get:()=>r.transferId},status:{get:()=>r.status},filename:{get:()=>r.file.name},filenameWithoutExtension:{get:()=>id(r.file.name)},fileExtension:{get:c},fileType:{get:u},fileSize:{get:h},file:{get:d},relativePath:{get:()=>r.file._relativePath},source:{get:()=>r.source},getMetadata:D=>rd(D?o[D]:o),setMetadata:(D,x,y)=>{if(It(D)){const N=D;return Object.keys(N).forEach(z=>{S(z,N[z],x)}),D}return S(D,x,y),x},extend:(D,x)=>R[D]=x,abortLoad:_,retryLoad:g,requestProcessing:f,abortProcessing:v,load:p,process:m,revert:E,...go(),freeze:()=>r.frozen=!0,release:()=>r.released=!0,released:{get:()=>r.released},archive:()=>r.archived=!0,archived:{get:()=>r.archived}},R=Jn(T);return R},DS=(n,e)=>Fn(e)?0:Xt(e)?n.findIndex(t=>t.id===e):-1,Su=(n,e)=>{const t=DS(n,e);if(!(t<0))return n[t]||null},xu=(n,e,t,i,r,s)=>{const o=Si(null,n,{method:"GET",responseType:"blob"});return o.onload=a=>{const l=a.getAllResponseHeaders(),c=rl(l).name||$r(n);e(ft("load",a.status,hr(a.response,c),l))},o.onerror=a=>{t(ft("error",a.status,a.statusText,a.getAllResponseHeaders()))},o.onheaders=a=>{s(ft("headers",a.status,null,a.getAllResponseHeaders()))},o.ontimeout=xi(t),o.onprogress=i,o.onabort=r,o},Mu=n=>(n.indexOf("//")===0&&(n=location.protocol+n),n.toLowerCase().replace("blob:","").replace(/([a-z])?:\/\//,"$1").split("/")[0]),OS=n=>(n.indexOf(":")>-1||n.indexOf("//")>-1)&&Mu(location.href)!==Mu(n),Ds=n=>(...e)=>mi(n)?n(...e):n,NS=n=>!dr(n.file),la=(n,e)=>{clearTimeout(e.listUpdateTimeout),e.listUpdateTimeout=setTimeout(()=>{n("DID_UPDATE_ITEMS",{items:_n(e.items)})},0)},yu=(n,...e)=>new Promise(t=>{if(!n)return t(!0);const i=n(...e);if(i==null)return t(!0);if(typeof i=="boolean")return t(i);typeof i.then=="function"&&i.then(t)}),ca=(n,e)=>{n.items.sort((t,i)=>e(Yt(t),Yt(i)))},rn=(n,e)=>({query:t,success:i=()=>{},failure:r=()=>{},...s}={})=>{const o=gi(n.items,t);if(!o){r({error:ft("error",0,"Item not found"),file:null});return}e(o,i,r,s||{})},US=(n,e,t)=>({ABORT_ALL:()=>{_n(t.items).forEach(i=>{i.freeze(),i.abortLoad(),i.abortProcessing()})},DID_SET_FILES:({value:i=[]})=>{const r=i.map(o=>({source:o.source?o.source:o,options:o.options}));let s=_n(t.items);s.forEach(o=>{r.find(a=>a.source===o.source||a.source===o.file)||n("REMOVE_ITEM",{query:o,remove:!1})}),s=_n(t.items),r.forEach((o,a)=>{s.find(l=>l.source===o.source||l.file===o.source)||n("ADD_ITEM",{...o,interactionMethod:cn.NONE,index:a})})},DID_UPDATE_ITEM_METADATA:({id:i,action:r,change:s})=>{s.silent||(clearTimeout(t.itemUpdateTimeout),t.itemUpdateTimeout=setTimeout(()=>{const o=Su(t.items,i);if(!e("IS_ASYNC")){fn("SHOULD_PREPARE_OUTPUT",!1,{item:o,query:e,action:r,change:s}).then(u=>{const h=e("GET_BEFORE_PREPARE_FILE");h&&(u=h(o,u)),u&&n("REQUEST_PREPARE_OUTPUT",{query:i,item:o,success:d=>{n("DID_PREPARE_OUTPUT",{id:i,file:d})}},!0)});return}o.origin===Rt.LOCAL&&n("DID_LOAD_ITEM",{id:o.id,error:null,serverFileReference:o.source});const a=()=>{setTimeout(()=>{n("REQUEST_ITEM_PROCESSING",{query:i})},32)},l=u=>{o.revert(yr(t.options.server.url,t.options.server.revert),e("GET_FORCE_REVERT")).then(u?a:()=>{}).catch(()=>{})},c=u=>{o.abortProcessing().then(u?a:()=>{})};if(o.status===Be.PROCESSING_COMPLETE)return l(t.options.instantUpload);if(o.status===Be.PROCESSING)return c(t.options.instantUpload);t.options.instantUpload&&a()},0))},MOVE_ITEM:({query:i,index:r})=>{const s=gi(t.items,i);if(!s)return;const o=t.items.indexOf(s);r=Qh(r,0,t.items.length-1),o!==r&&t.items.splice(r,0,t.items.splice(o,1)[0])},SORT:({compare:i})=>{ca(t,i),n("DID_SORT_ITEMS",{items:e("GET_ACTIVE_ITEMS")})},ADD_ITEMS:({items:i,index:r,interactionMethod:s,success:o=()=>{},failure:a=()=>{}})=>{let l=r;if(r===-1||typeof r>"u"){const p=e("GET_ITEM_INSERT_LOCATION"),g=e("GET_TOTAL_ITEMS");l=p==="before"?0:g}const c=e("GET_IGNORED_FILES"),u=p=>dr(p)?!c.includes(p.name.toLowerCase()):!Fn(p),d=i.filter(u).map(p=>new Promise((g,_)=>{n("ADD_ITEM",{interactionMethod:s,source:p.source||p,success:g,failure:_,index:l++,options:p.options||{}})}));Promise.all(d).then(o).catch(a)},ADD_ITEM:({source:i,index:r=-1,interactionMethod:s,success:o=()=>{},failure:a=()=>{},options:l={}})=>{if(Fn(i)){a({error:ft("error",0,"No source"),file:null});return}if(dr(i)&&t.options.ignoredFiles.includes(i.name.toLowerCase()))return;if(!dS(t)){if(t.options.allowMultiple||!t.options.allowMultiple&&!t.options.allowReplace){const v=ft("warning",0,"Max files");n("DID_THROW_MAX_FILES",{source:i,error:v}),a({error:v,file:null});return}const f=_n(t.items)[0];if(f.status===Be.PROCESSING_COMPLETE||f.status===Be.PROCESSING_REVERT_ERROR){const v=e("GET_FORCE_REVERT");if(f.revert(yr(t.options.server.url,t.options.server.revert),v).then(()=>{v&&n("ADD_ITEM",{source:i,index:r,interactionMethod:s,success:o,failure:a,options:l})}).catch(()=>{}),v)return}n("REMOVE_ITEM",{query:f.id})}const c=l.type==="local"?Rt.LOCAL:l.type==="limbo"?Rt.LIMBO:Rt.INPUT,u=LS(c,c===Rt.INPUT?null:i,l.file);Object.keys(l.metadata||{}).forEach(f=>{u.setMetadata(f,l.metadata[f])}),Ii("DID_CREATE_ITEM",u,{query:e,dispatch:n});const h=e("GET_ITEM_INSERT_LOCATION");t.options.itemInsertLocationFreedom||(r=h==="before"?-1:t.items.length),pS(t.items,u,r),mi(h)&&i&&ca(t,h);const d=u.id;u.on("init",()=>{n("DID_INIT_ITEM",{id:d})}),u.on("load-init",()=>{n("DID_START_ITEM_LOAD",{id:d})}),u.on("load-meta",()=>{n("DID_UPDATE_ITEM_META",{id:d})}),u.on("load-progress",f=>{n("DID_UPDATE_ITEM_LOAD_PROGRESS",{id:d,progress:f})}),u.on("load-request-error",f=>{const v=Ds(t.options.labelFileLoadError)(f);if(f.code>=400&&f.code<500){n("DID_THROW_ITEM_INVALID",{id:d,error:f,status:{main:v,sub:`${f.code} (${f.body})`}}),a({error:f,file:Yt(u)});return}n("DID_THROW_ITEM_LOAD_ERROR",{id:d,error:f,status:{main:v,sub:t.options.labelTapToRetry}})}),u.on("load-file-error",f=>{n("DID_THROW_ITEM_INVALID",{id:d,error:f.status,status:f.status}),a({error:f.status,file:Yt(u)})}),u.on("load-abort",()=>{n("REMOVE_ITEM",{query:d})}),u.on("load-skip",()=>{n("COMPLETE_LOAD_ITEM",{query:d,item:u,data:{source:i,success:o}})}),u.on("load",()=>{const f=v=>{if(!v){n("REMOVE_ITEM",{query:d});return}u.on("metadata-update",E=>{n("DID_UPDATE_ITEM_METADATA",{id:d,change:E})}),fn("SHOULD_PREPARE_OUTPUT",!1,{item:u,query:e}).then(E=>{const S=e("GET_BEFORE_PREPARE_FILE");S&&(E=S(u,E));const I=()=>{n("COMPLETE_LOAD_ITEM",{query:d,item:u,data:{source:i,success:o}}),la(n,t)};if(E){n("REQUEST_PREPARE_OUTPUT",{query:d,item:u,success:T=>{n("DID_PREPARE_OUTPUT",{id:d,file:T}),I()}},!0);return}I()})};fn("DID_LOAD_ITEM",u,{query:e,dispatch:n}).then(()=>{yu(e("GET_BEFORE_ADD_FILE"),Yt(u)).then(f)}).catch(v=>{if(!v||!v.error||!v.status)return f(!1);n("DID_THROW_ITEM_INVALID",{id:d,error:v.error,status:v.status})})}),u.on("process-start",()=>{n("DID_START_ITEM_PROCESSING",{id:d})}),u.on("process-progress",f=>{n("DID_UPDATE_ITEM_PROCESS_PROGRESS",{id:d,progress:f})}),u.on("process-error",f=>{n("DID_THROW_ITEM_PROCESSING_ERROR",{id:d,error:f,status:{main:Ds(t.options.labelFileProcessingError)(f),sub:t.options.labelTapToRetry}})}),u.on("process-revert-error",f=>{n("DID_THROW_ITEM_PROCESSING_REVERT_ERROR",{id:d,error:f,status:{main:Ds(t.options.labelFileProcessingRevertError)(f),sub:t.options.labelTapToRetry}})}),u.on("process-complete",f=>{n("DID_COMPLETE_ITEM_PROCESSING",{id:d,error:null,serverFileReference:f}),n("DID_DEFINE_VALUE",{id:d,value:f})}),u.on("process-abort",()=>{n("DID_ABORT_ITEM_PROCESSING",{id:d})}),u.on("process-revert",()=>{n("DID_REVERT_ITEM_PROCESSING",{id:d}),n("DID_DEFINE_VALUE",{id:d,value:null})}),n("DID_ADD_ITEM",{id:d,index:r,interactionMethod:s}),la(n,t);const{url:p,load:g,restore:_,fetch:m}=t.options.server||{};u.load(i,bS(c===Rt.INPUT?Xt(i)&&OS(i)&&m?aa(p,m):xu:c===Rt.LIMBO?aa(p,_):aa(p,g)),(f,v,E)=>{fn("LOAD_FILE",f,{query:e}).then(v).catch(E)})},REQUEST_PREPARE_OUTPUT:({item:i,success:r,failure:s=()=>{}})=>{const o={error:ft("error",0,"Item not found"),file:null};if(i.archived)return s(o);fn("PREPARE_OUTPUT",i.file,{query:e,item:i}).then(a=>{fn("COMPLETE_PREPARE_OUTPUT",a,{query:e,item:i}).then(l=>{if(i.archived)return s(o);r(l)})})},COMPLETE_LOAD_ITEM:({item:i,data:r})=>{const{success:s,source:o}=r,a=e("GET_ITEM_INSERT_LOCATION");if(mi(a)&&o&&ca(t,a),n("DID_LOAD_ITEM",{id:i.id,error:null,serverFileReference:i.origin===Rt.INPUT?null:o}),s(Yt(i)),i.origin===Rt.LOCAL){n("DID_LOAD_LOCAL_ITEM",{id:i.id});return}if(i.origin===Rt.LIMBO){n("DID_COMPLETE_ITEM_PROCESSING",{id:i.id,error:null,serverFileReference:o}),n("DID_DEFINE_VALUE",{id:i.id,value:i.serverId||o});return}e("IS_ASYNC")&&t.options.instantUpload&&n("REQUEST_ITEM_PROCESSING",{query:i.id})},RETRY_ITEM_LOAD:rn(t,i=>{i.retryLoad()}),REQUEST_ITEM_PREPARE:rn(t,(i,r,s)=>{n("REQUEST_PREPARE_OUTPUT",{query:i.id,item:i,success:o=>{n("DID_PREPARE_OUTPUT",{id:i.id,file:o}),r({file:i,output:o})},failure:s},!0)}),REQUEST_ITEM_PROCESSING:rn(t,(i,r,s)=>{if(!(i.status===Be.IDLE||i.status===Be.PROCESSING_ERROR)){const a=()=>n("REQUEST_ITEM_PROCESSING",{query:i,success:r,failure:s}),l=()=>document.hidden?a():setTimeout(a,32);i.status===Be.PROCESSING_COMPLETE||i.status===Be.PROCESSING_REVERT_ERROR?i.revert(yr(t.options.server.url,t.options.server.revert),e("GET_FORCE_REVERT")).then(l).catch(()=>{}):i.status===Be.PROCESSING&&i.abortProcessing().then(l);return}i.status!==Be.PROCESSING_QUEUED&&(i.requestProcessing(),n("DID_REQUEST_ITEM_PROCESSING",{id:i.id}),n("PROCESS_ITEM",{query:i,success:r,failure:s},!0))}),PROCESS_ITEM:rn(t,(i,r,s)=>{const o=e("GET_MAX_PARALLEL_UPLOADS");if(e("GET_ITEMS_BY_STATUS",Be.PROCESSING).length===o){t.processingQueue.push({id:i.id,success:r,failure:s});return}if(i.status===Be.PROCESSING)return;const l=()=>{const u=t.processingQueue.shift();if(!u)return;const{id:h,success:d,failure:p}=u,g=gi(t.items,h);if(!g||g.archived){l();return}n("PROCESS_ITEM",{query:h,success:d,failure:p},!0)};i.onOnce("process-complete",()=>{r(Yt(i)),l();const u=t.options.server;if(t.options.instantUpload&&i.origin===Rt.LOCAL&&mi(u.remove)){const p=()=>{};i.origin=Rt.LIMBO,t.options.server.remove(i.source,p,p)}e("GET_ITEMS_BY_STATUS",Be.PROCESSING_COMPLETE).length===t.items.length&&n("DID_COMPLETE_ITEM_PROCESSING_ALL")}),i.onOnce("process-error",u=>{s({error:u,file:Yt(i)}),l()});const c=t.options;i.process(PS(wS(c.server.url,c.server.process,c.name,{chunkTransferId:i.transferId,chunkServer:c.server.patch,chunkUploads:c.chunkUploads,chunkForce:c.chunkForce,chunkSize:c.chunkSize,chunkRetryDelays:c.chunkRetryDelays}),{allowMinimumUploadDuration:e("GET_ALLOW_MINIMUM_UPLOAD_DURATION")}),(u,h,d)=>{fn("PREPARE_OUTPUT",u,{query:e,item:i}).then(p=>{n("DID_PREPARE_OUTPUT",{id:i.id,file:p}),h(p)}).catch(d)})}),RETRY_ITEM_PROCESSING:rn(t,i=>{n("REQUEST_ITEM_PROCESSING",{query:i})}),REQUEST_REMOVE_ITEM:rn(t,i=>{yu(e("GET_BEFORE_REMOVE_FILE"),Yt(i)).then(r=>{r&&n("REMOVE_ITEM",{query:i})})}),RELEASE_ITEM:rn(t,i=>{i.release()}),REMOVE_ITEM:rn(t,(i,r,s,o)=>{const a=()=>{const c=i.id;Su(t.items,c).archive(),n("DID_REMOVE_ITEM",{error:null,id:c,item:i}),la(n,t),r(Yt(i))},l=t.options.server;i.origin===Rt.LOCAL&&l&&mi(l.remove)&&o.remove!==!1?(n("DID_START_ITEM_REMOVE",{id:i.id}),l.remove(i.source,()=>a(),c=>{n("DID_THROW_ITEM_REMOVE_ERROR",{id:i.id,error:ft("error",0,c,null),status:{main:Ds(t.options.labelFileRemoveError)(c),sub:t.options.labelTapToRetry}})})):((o.revert&&i.origin!==Rt.LOCAL&&i.serverId!==null||t.options.chunkUploads&&i.file.size>t.options.chunkSize||t.options.chunkUploads&&t.options.chunkForce)&&i.revert(yr(t.options.server.url,t.options.server.revert),e("GET_FORCE_REVERT")),a())}),ABORT_ITEM_LOAD:rn(t,i=>{i.abortLoad()}),ABORT_ITEM_PROCESSING:rn(t,i=>{if(i.serverId){n("REVERT_ITEM_PROCESSING",{id:i.id});return}i.abortProcessing().then(()=>{t.options.instantUpload&&n("REMOVE_ITEM",{query:i.id})})}),REQUEST_REVERT_ITEM_PROCESSING:rn(t,i=>{if(!t.options.instantUpload){n("REVERT_ITEM_PROCESSING",{query:i});return}const r=a=>{a&&n("REVERT_ITEM_PROCESSING",{query:i})},s=e("GET_BEFORE_REMOVE_FILE");if(!s)return r(!0);const o=s(Yt(i));if(o==null)return r(!0);if(typeof o=="boolean")return r(o);typeof o.then=="function"&&o.then(r)}),REVERT_ITEM_PROCESSING:rn(t,i=>{i.revert(yr(t.options.server.url,t.options.server.revert),e("GET_FORCE_REVERT")).then(()=>{(t.options.instantUpload||NS(i))&&n("REMOVE_ITEM",{query:i.id})}).catch(()=>{})}),SET_OPTIONS:({options:i})=>{const r=Object.keys(i),s=FS.filter(a=>r.includes(a));[...s,...Object.keys(i).filter(a=>!s.includes(a))].forEach(a=>{n(`SET_${mo(a,"_").toUpperCase()}`,{value:i[a]})})}}),FS=["server"],sl=n=>n,Bn=n=>document.createElement(n),mt=(n,e)=>{let t=n.childNodes[0];t?e!==t.nodeValue&&(t.nodeValue=e):(t=document.createTextNode(e),n.appendChild(t))},Tu=(n,e,t,i)=>{const r=(i%360-90)*Math.PI/180;return{x:n+t*Math.cos(r),y:e+t*Math.sin(r)}},BS=(n,e,t,i,r,s)=>{const o=Tu(n,e,t,r),a=Tu(n,e,t,i);return["M",o.x,o.y,"A",t,t,0,s,0,a.x,a.y].join(" ")},GS=(n,e,t,i,r)=>{let s=1;return r>i&&r-i<=.5&&(s=0),i>r&&i-r>=.5&&(s=0),BS(n,e,t,Math.min(.9999,i)*360,Math.min(.9999,r)*360,s)},zS=({root:n,props:e})=>{e.spin=!1,e.progress=0,e.opacity=0;const t=eo("svg");n.ref.path=eo("path",{"stroke-width":2,"stroke-linecap":"round"}),t.appendChild(n.ref.path),n.ref.svg=t,n.appendChild(t)},HS=({root:n,props:e})=>{if(e.opacity===0)return;e.align&&(n.element.dataset.align=e.align);const t=parseInt(_t(n.ref.path,"stroke-width"),10),i=n.rect.element.width*.5;let r=0,s=0;e.spin?(r=0,s=.5):(r=0,s=e.progress);const o=GS(i,i,i-t,r,s);_t(n.ref.path,"d",o),_t(n.ref.path,"stroke-opacity",e.spin||e.progress>0?1:0)},bu=Et({tag:"div",name:"progress-indicator",ignoreRectUpdate:!0,ignoreRect:!0,create:zS,write:HS,mixins:{apis:["progress","spin","align"],styles:["opacity"],animations:{opacity:{type:"tween",duration:500},progress:{type:"spring",stiffness:.95,damping:.65,mass:10}}}}),VS=({root:n,props:e})=>{n.element.innerHTML=(e.icon||"")+`<span>${e.label}</span>`,e.isDisabled=!1},kS=({root:n,props:e})=>{const{isDisabled:t}=e,i=n.query("GET_DISABLED")||e.opacity===0;i&&!t?(e.isDisabled=!0,_t(n.element,"disabled","disabled")):!i&&t&&(e.isDisabled=!1,n.element.removeAttribute("disabled"))},sd=Et({tag:"button",attributes:{type:"button"},ignoreRect:!0,ignoreRectUpdate:!0,name:"file-action-button",mixins:{apis:["label"],styles:["translateX","translateY","scaleX","scaleY","opacity"],animations:{scaleX:"spring",scaleY:"spring",translateX:"spring",translateY:"spring",opacity:{type:"tween",duration:250}},listeners:!0},create:VS,write:kS}),od=(n,e=".",t=1e3,i={})=>{const{labelBytes:r="bytes",labelKilobytes:s="KB",labelMegabytes:o="MB",labelGigabytes:a="GB"}=i;n=Math.round(Math.abs(n));const l=t,c=t*t,u=t*t*t;return n<l?`${n} ${r}`:n<c?`${Math.floor(n/l)} ${s}`:n<u?`${Au(n/c,1,e)} ${o}`:`${Au(n/u,2,e)} ${a}`},Au=(n,e,t)=>n.toFixed(e).split(".").filter(i=>i!=="0").join(t),WS=({root:n,props:e})=>{const t=Bn("span");t.className="filepond--file-info-main",_t(t,"aria-hidden","true"),n.appendChild(t),n.ref.fileName=t;const i=Bn("span");i.className="filepond--file-info-sub",n.appendChild(i),n.ref.fileSize=i,mt(i,n.query("GET_LABEL_FILE_WAITING_FOR_SIZE")),mt(t,sl(n.query("GET_ITEM_NAME",e.id)))},Ca=({root:n,props:e})=>{mt(n.ref.fileSize,od(n.query("GET_ITEM_SIZE",e.id),".",n.query("GET_FILE_SIZE_BASE"),n.query("GET_FILE_SIZE_LABELS",n.query))),mt(n.ref.fileName,sl(n.query("GET_ITEM_NAME",e.id)))},Ru=({root:n,props:e})=>{if(pr(n.query("GET_ITEM_SIZE",e.id))){Ca({root:n,props:e});return}mt(n.ref.fileSize,n.query("GET_LABEL_FILE_SIZE_NOT_AVAILABLE"))},XS=Et({name:"file-info",ignoreRect:!0,ignoreRectUpdate:!0,write:qt({DID_LOAD_ITEM:Ca,DID_UPDATE_ITEM_META:Ca,DID_THROW_ITEM_LOAD_ERROR:Ru,DID_THROW_ITEM_INVALID:Ru}),didCreateView:n=>{Ii("CREATE_VIEW",{...n,view:n})},create:WS,mixins:{styles:["translateX","translateY"],animations:{translateX:"spring",translateY:"spring"}}}),ad=n=>Math.round(n*100),qS=({root:n})=>{const e=Bn("span");e.className="filepond--file-status-main",n.appendChild(e),n.ref.main=e;const t=Bn("span");t.className="filepond--file-status-sub",n.appendChild(t),n.ref.sub=t,ld({root:n,action:{progress:null}})},ld=({root:n,action:e})=>{const t=e.progress===null?n.query("GET_LABEL_FILE_LOADING"):`${n.query("GET_LABEL_FILE_LOADING")} ${ad(e.progress)}%`;mt(n.ref.main,t),mt(n.ref.sub,n.query("GET_LABEL_TAP_TO_CANCEL"))},YS=({root:n,action:e})=>{const t=e.progress===null?n.query("GET_LABEL_FILE_PROCESSING"):`${n.query("GET_LABEL_FILE_PROCESSING")} ${ad(e.progress)}%`;mt(n.ref.main,t),mt(n.ref.sub,n.query("GET_LABEL_TAP_TO_CANCEL"))},jS=({root:n})=>{mt(n.ref.main,n.query("GET_LABEL_FILE_PROCESSING")),mt(n.ref.sub,n.query("GET_LABEL_TAP_TO_CANCEL"))},ZS=({root:n})=>{mt(n.ref.main,n.query("GET_LABEL_FILE_PROCESSING_ABORTED")),mt(n.ref.sub,n.query("GET_LABEL_TAP_TO_RETRY"))},$S=({root:n})=>{mt(n.ref.main,n.query("GET_LABEL_FILE_PROCESSING_COMPLETE")),mt(n.ref.sub,n.query("GET_LABEL_TAP_TO_UNDO"))},wu=({root:n})=>{mt(n.ref.main,""),mt(n.ref.sub,"")},Tr=({root:n,action:e})=>{mt(n.ref.main,e.status.main),mt(n.ref.sub,e.status.sub)},KS=Et({name:"file-status",ignoreRect:!0,ignoreRectUpdate:!0,write:qt({DID_LOAD_ITEM:wu,DID_REVERT_ITEM_PROCESSING:wu,DID_REQUEST_ITEM_PROCESSING:jS,DID_ABORT_ITEM_PROCESSING:ZS,DID_COMPLETE_ITEM_PROCESSING:$S,DID_UPDATE_ITEM_PROCESS_PROGRESS:YS,DID_UPDATE_ITEM_LOAD_PROGRESS:ld,DID_THROW_ITEM_LOAD_ERROR:Tr,DID_THROW_ITEM_INVALID:Tr,DID_THROW_ITEM_PROCESSING_ERROR:Tr,DID_THROW_ITEM_PROCESSING_REVERT_ERROR:Tr,DID_THROW_ITEM_REMOVE_ERROR:Tr}),didCreateView:n=>{Ii("CREATE_VIEW",{...n,view:n})},create:qS,mixins:{styles:["translateX","translateY","opacity"],animations:{opacity:{type:"tween",duration:250},translateX:"spring",translateY:"spring"}}}),La={AbortItemLoad:{label:"GET_LABEL_BUTTON_ABORT_ITEM_LOAD",action:"ABORT_ITEM_LOAD",className:"filepond--action-abort-item-load",align:"LOAD_INDICATOR_POSITION"},RetryItemLoad:{label:"GET_LABEL_BUTTON_RETRY_ITEM_LOAD",action:"RETRY_ITEM_LOAD",icon:"GET_ICON_RETRY",className:"filepond--action-retry-item-load",align:"BUTTON_PROCESS_ITEM_POSITION"},RemoveItem:{label:"GET_LABEL_BUTTON_REMOVE_ITEM",action:"REQUEST_REMOVE_ITEM",icon:"GET_ICON_REMOVE",className:"filepond--action-remove-item",align:"BUTTON_REMOVE_ITEM_POSITION"},ProcessItem:{label:"GET_LABEL_BUTTON_PROCESS_ITEM",action:"REQUEST_ITEM_PROCESSING",icon:"GET_ICON_PROCESS",className:"filepond--action-process-item",align:"BUTTON_PROCESS_ITEM_POSITION"},AbortItemProcessing:{label:"GET_LABEL_BUTTON_ABORT_ITEM_PROCESSING",action:"ABORT_ITEM_PROCESSING",className:"filepond--action-abort-item-processing",align:"BUTTON_PROCESS_ITEM_POSITION"},RetryItemProcessing:{label:"GET_LABEL_BUTTON_RETRY_ITEM_PROCESSING",action:"RETRY_ITEM_PROCESSING",icon:"GET_ICON_RETRY",className:"filepond--action-retry-item-processing",align:"BUTTON_PROCESS_ITEM_POSITION"},RevertItemProcessing:{label:"GET_LABEL_BUTTON_UNDO_ITEM_PROCESSING",action:"REQUEST_REVERT_ITEM_PROCESSING",icon:"GET_ICON_UNDO",className:"filepond--action-revert-item-processing",align:"BUTTON_PROCESS_ITEM_POSITION"}},Da=[];ht(La,n=>{Da.push(n)});const Qt=n=>{if(Oa(n)==="right")return 0;const e=n.ref.buttonRemoveItem.rect.element;return e.hidden?null:e.width+e.left},QS=n=>n.ref.buttonAbortItemLoad.rect.element.width,Os=n=>Math.floor(n.ref.buttonRemoveItem.rect.element.height/4),JS=n=>Math.floor(n.ref.buttonRemoveItem.rect.element.left/2),ex=n=>n.query("GET_STYLE_LOAD_INDICATOR_POSITION"),tx=n=>n.query("GET_STYLE_PROGRESS_INDICATOR_POSITION"),Oa=n=>n.query("GET_STYLE_BUTTON_REMOVE_ITEM_POSITION"),nx={buttonAbortItemLoad:{opacity:0},buttonRetryItemLoad:{opacity:0},buttonRemoveItem:{opacity:0},buttonProcessItem:{opacity:0},buttonAbortItemProcessing:{opacity:0},buttonRetryItemProcessing:{opacity:0},buttonRevertItemProcessing:{opacity:0},loadProgressIndicator:{opacity:0,align:ex},processProgressIndicator:{opacity:0,align:tx},processingCompleteIndicator:{opacity:0,scaleX:.75,scaleY:.75},info:{translateX:0,translateY:0,opacity:0},status:{translateX:0,translateY:0,opacity:0}},Iu={buttonRemoveItem:{opacity:1},buttonProcessItem:{opacity:1},info:{translateX:Qt},status:{translateX:Qt}},ua={buttonAbortItemProcessing:{opacity:1},processProgressIndicator:{opacity:1},status:{opacity:1}},tr={DID_THROW_ITEM_INVALID:{buttonRemoveItem:{opacity:1},info:{translateX:Qt},status:{translateX:Qt,opacity:1}},DID_START_ITEM_LOAD:{buttonAbortItemLoad:{opacity:1},loadProgressIndicator:{opacity:1},status:{opacity:1}},DID_THROW_ITEM_LOAD_ERROR:{buttonRetryItemLoad:{opacity:1},buttonRemoveItem:{opacity:1},info:{translateX:Qt},status:{opacity:1}},DID_START_ITEM_REMOVE:{processProgressIndicator:{opacity:1,align:Oa},info:{translateX:Qt},status:{opacity:0}},DID_THROW_ITEM_REMOVE_ERROR:{processProgressIndicator:{opacity:0,align:Oa},buttonRemoveItem:{opacity:1},info:{translateX:Qt},status:{opacity:1,translateX:Qt}},DID_LOAD_ITEM:Iu,DID_LOAD_LOCAL_ITEM:{buttonRemoveItem:{opacity:1},info:{translateX:Qt},status:{translateX:Qt}},DID_START_ITEM_PROCESSING:ua,DID_REQUEST_ITEM_PROCESSING:ua,DID_UPDATE_ITEM_PROCESS_PROGRESS:ua,DID_COMPLETE_ITEM_PROCESSING:{buttonRevertItemProcessing:{opacity:1},info:{opacity:1},status:{opacity:1}},DID_THROW_ITEM_PROCESSING_ERROR:{buttonRemoveItem:{opacity:1},buttonRetryItemProcessing:{opacity:1},status:{opacity:1},info:{translateX:Qt}},DID_THROW_ITEM_PROCESSING_REVERT_ERROR:{buttonRevertItemProcessing:{opacity:1},status:{opacity:1},info:{opacity:1}},DID_ABORT_ITEM_PROCESSING:{buttonRemoveItem:{opacity:1},buttonProcessItem:{opacity:1},info:{translateX:Qt},status:{opacity:1}},DID_REVERT_ITEM_PROCESSING:Iu},ix=Et({create:({root:n})=>{n.element.innerHTML=n.query("GET_ICON_DONE")},name:"processing-complete-indicator",ignoreRect:!0,mixins:{styles:["scaleX","scaleY","opacity"],animations:{scaleX:"spring",scaleY:"spring",opacity:{type:"tween",duration:250}}}}),rx=({root:n,props:e})=>{const t=Object.keys(La).reduce((g,_)=>(g[_]={...La[_]},g),{}),{id:i}=e,r=n.query("GET_ALLOW_REVERT"),s=n.query("GET_ALLOW_REMOVE"),o=n.query("GET_ALLOW_PROCESS"),a=n.query("GET_INSTANT_UPLOAD"),l=n.query("IS_ASYNC"),c=n.query("GET_STYLE_BUTTON_REMOVE_ITEM_ALIGN");let u;l?o&&!r?u=g=>!/RevertItemProcessing/.test(g):!o&&r?u=g=>!/ProcessItem|RetryItemProcessing|AbortItemProcessing/.test(g):!o&&!r&&(u=g=>!/Process/.test(g)):u=g=>!/Process/.test(g);const h=u?Da.filter(u):Da.concat();if(a&&r&&(t.RevertItemProcessing.label="GET_LABEL_BUTTON_REMOVE_ITEM",t.RevertItemProcessing.icon="GET_ICON_REMOVE"),l&&!r){const g=tr.DID_COMPLETE_ITEM_PROCESSING;g.info.translateX=JS,g.info.translateY=Os,g.status.translateY=Os,g.processingCompleteIndicator={opacity:1,scaleX:1,scaleY:1}}if(l&&!o&&(["DID_START_ITEM_PROCESSING","DID_REQUEST_ITEM_PROCESSING","DID_UPDATE_ITEM_PROCESS_PROGRESS","DID_THROW_ITEM_PROCESSING_ERROR"].forEach(g=>{tr[g].status.translateY=Os}),tr.DID_THROW_ITEM_PROCESSING_ERROR.status.translateX=QS),c&&r){t.RevertItemProcessing.align="BUTTON_REMOVE_ITEM_POSITION";const g=tr.DID_COMPLETE_ITEM_PROCESSING;g.info.translateX=Qt,g.status.translateY=Os,g.processingCompleteIndicator={opacity:1,scaleX:1,scaleY:1}}s||(t.RemoveItem.disabled=!0),ht(t,(g,_)=>{const m=n.createChildView(sd,{label:n.query(_.label),icon:n.query(_.icon),opacity:0});h.includes(g)&&n.appendChildView(m),_.disabled&&(m.element.setAttribute("disabled","disabled"),m.element.setAttribute("hidden","hidden")),m.element.dataset.align=n.query(`GET_STYLE_${_.align}`),m.element.classList.add(_.className),m.on("click",f=>{f.stopPropagation(),!_.disabled&&n.dispatch(_.action,{query:i})}),n.ref[`button${g}`]=m}),n.ref.processingCompleteIndicator=n.appendChildView(n.createChildView(ix)),n.ref.processingCompleteIndicator.element.dataset.align=n.query("GET_STYLE_BUTTON_PROCESS_ITEM_POSITION"),n.ref.info=n.appendChildView(n.createChildView(XS,{id:i})),n.ref.status=n.appendChildView(n.createChildView(KS,{id:i}));const d=n.appendChildView(n.createChildView(bu,{opacity:0,align:n.query("GET_STYLE_LOAD_INDICATOR_POSITION")}));d.element.classList.add("filepond--load-indicator"),n.ref.loadProgressIndicator=d;const p=n.appendChildView(n.createChildView(bu,{opacity:0,align:n.query("GET_STYLE_PROGRESS_INDICATOR_POSITION")}));p.element.classList.add("filepond--process-indicator"),n.ref.processProgressIndicator=p,n.ref.activeStyles=[]},sx=({root:n,actions:e,props:t})=>{ox({root:n,actions:e,props:t});let i=e.concat().filter(r=>/^DID_/.test(r.type)).reverse().find(r=>tr[r.type]);if(i){n.ref.activeStyles=[];const r=tr[i.type];ht(nx,(s,o)=>{const a=n.ref[s];ht(o,(l,c)=>{const u=r[s]&&typeof r[s][l]<"u"?r[s][l]:c;n.ref.activeStyles.push({control:a,key:l,value:u})})})}n.ref.activeStyles.forEach(({control:r,key:s,value:o})=>{r[s]=typeof o=="function"?o(n):o})},ox=qt({DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING:({root:n,action:e})=>{n.ref.buttonAbortItemProcessing.label=e.value},DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD:({root:n,action:e})=>{n.ref.buttonAbortItemLoad.label=e.value},DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL:({root:n,action:e})=>{n.ref.buttonAbortItemRemoval.label=e.value},DID_REQUEST_ITEM_PROCESSING:({root:n})=>{n.ref.processProgressIndicator.spin=!0,n.ref.processProgressIndicator.progress=0},DID_START_ITEM_LOAD:({root:n})=>{n.ref.loadProgressIndicator.spin=!0,n.ref.loadProgressIndicator.progress=0},DID_START_ITEM_REMOVE:({root:n})=>{n.ref.processProgressIndicator.spin=!0,n.ref.processProgressIndicator.progress=0},DID_UPDATE_ITEM_LOAD_PROGRESS:({root:n,action:e})=>{n.ref.loadProgressIndicator.spin=!1,n.ref.loadProgressIndicator.progress=e.progress},DID_UPDATE_ITEM_PROCESS_PROGRESS:({root:n,action:e})=>{n.ref.processProgressIndicator.spin=!1,n.ref.processProgressIndicator.progress=e.progress}}),ax=Et({create:rx,write:sx,didCreateView:n=>{Ii("CREATE_VIEW",{...n,view:n})},name:"file"}),lx=({root:n,props:e})=>{n.ref.fileName=Bn("legend"),n.appendChild(n.ref.fileName),n.ref.file=n.appendChildView(n.createChildView(ax,{id:e.id})),n.ref.data=!1},cx=({root:n,props:e})=>{mt(n.ref.fileName,sl(n.query("GET_ITEM_NAME",e.id)))},ux=Et({create:lx,ignoreRect:!0,write:qt({DID_LOAD_ITEM:cx}),didCreateView:n=>{Ii("CREATE_VIEW",{...n,view:n})},tag:"fieldset",name:"file-wrapper"}),Pu={type:"spring",damping:.6,mass:7},hx=({root:n,props:e})=>{[{name:"top"},{name:"center",props:{translateY:null,scaleY:null},mixins:{animations:{scaleY:Pu},styles:["translateY","scaleY"]}},{name:"bottom",props:{translateY:null},mixins:{animations:{translateY:Pu},styles:["translateY"]}}].forEach(t=>{dx(n,t,e.name)}),n.element.classList.add(`filepond--${e.name}`),n.ref.scalable=null},dx=(n,e,t)=>{const i=Et({name:`panel-${e.name} filepond--${t}`,mixins:e.mixins,ignoreRectUpdate:!0}),r=n.createChildView(i,e.props);n.ref[e.name]=n.appendChildView(r)},fx=({root:n,props:e})=>{if((n.ref.scalable===null||e.scalable!==n.ref.scalable)&&(n.ref.scalable=Wh(e.scalable)?e.scalable:!0,n.element.dataset.scalable=n.ref.scalable),!e.height)return;const t=n.ref.top.rect.element,i=n.ref.bottom.rect.element,r=Math.max(t.height+i.height,e.height);n.ref.center.translateY=t.height,n.ref.center.scaleY=(r-t.height-i.height)/100,n.ref.bottom.translateY=r-i.height},cd=Et({name:"panel",read:({root:n,props:e})=>e.heightCurrent=n.ref.bottom.translateY,write:fx,create:hx,ignoreRect:!0,mixins:{apis:["height","heightCurrent","scalable"]}}),px=n=>{const e=n.map(i=>i.id);let t;return{setIndex:i=>{t=i},getIndex:()=>t,getItemIndex:i=>e.indexOf(i.id)}},Cu={type:"spring",stiffness:.75,damping:.45,mass:10},Lu="spring",Du={DID_START_ITEM_LOAD:"busy",DID_UPDATE_ITEM_LOAD_PROGRESS:"loading",DID_THROW_ITEM_INVALID:"load-invalid",DID_THROW_ITEM_LOAD_ERROR:"load-error",DID_LOAD_ITEM:"idle",DID_THROW_ITEM_REMOVE_ERROR:"remove-error",DID_START_ITEM_REMOVE:"busy",DID_START_ITEM_PROCESSING:"busy processing",DID_REQUEST_ITEM_PROCESSING:"busy processing",DID_UPDATE_ITEM_PROCESS_PROGRESS:"processing",DID_COMPLETE_ITEM_PROCESSING:"processing-complete",DID_THROW_ITEM_PROCESSING_ERROR:"processing-error",DID_THROW_ITEM_PROCESSING_REVERT_ERROR:"processing-revert-error",DID_ABORT_ITEM_PROCESSING:"cancelled",DID_REVERT_ITEM_PROCESSING:"idle"},mx=({root:n,props:e})=>{if(n.ref.handleClick=i=>n.dispatch("DID_ACTIVATE_ITEM",{id:e.id}),n.element.id=`filepond--item-${e.id}`,n.element.addEventListener("click",n.ref.handleClick),n.ref.container=n.appendChildView(n.createChildView(ux,{id:e.id})),n.ref.panel=n.appendChildView(n.createChildView(cd,{name:"item-panel"})),n.ref.panel.height=null,e.markedForRemoval=!1,!n.query("GET_ALLOW_REORDER"))return;n.element.dataset.dragState="idle";const t=i=>{if(!i.isPrimary)return;let r=!1;const s={x:i.pageX,y:i.pageY};e.dragOrigin={x:n.translateX,y:n.translateY},e.dragCenter={x:i.offsetX,y:i.offsetY};const o=px(n.query("GET_ACTIVE_ITEMS"));n.dispatch("DID_GRAB_ITEM",{id:e.id,dragState:o});const a=c=>{if(!c.isPrimary)return;c.stopPropagation(),c.preventDefault(),e.dragOffset={x:c.pageX-s.x,y:c.pageY-s.y},e.dragOffset.x*e.dragOffset.x+e.dragOffset.y*e.dragOffset.y>16&&!r&&(r=!0,n.element.removeEventListener("click",n.ref.handleClick)),n.dispatch("DID_DRAG_ITEM",{id:e.id,dragState:o})},l=c=>{c.isPrimary&&(document.removeEventListener("pointermove",a),document.removeEventListener("pointerup",l),e.dragOffset={x:c.pageX-s.x,y:c.pageY-s.y},n.dispatch("DID_DROP_ITEM",{id:e.id,dragState:o}),r&&setTimeout(()=>n.element.addEventListener("click",n.ref.handleClick),0))};document.addEventListener("pointermove",a),document.addEventListener("pointerup",l)};n.element.addEventListener("pointerdown",t)},gx=qt({DID_UPDATE_PANEL_HEIGHT:({root:n,action:e})=>{n.height=e.height}}),_x=qt({DID_GRAB_ITEM:({root:n,props:e})=>{e.dragOrigin={x:n.translateX,y:n.translateY}},DID_DRAG_ITEM:({root:n})=>{n.element.dataset.dragState="drag"},DID_DROP_ITEM:({root:n,props:e})=>{e.dragOffset=null,e.dragOrigin=null,n.element.dataset.dragState="drop"}},({root:n,actions:e,props:t,shouldOptimize:i})=>{n.element.dataset.dragState==="drop"&&n.scaleX<=1&&(n.element.dataset.dragState="idle");let r=e.concat().filter(o=>/^DID_/.test(o.type)).reverse().find(o=>Du[o.type]);r&&r.type!==t.currentState&&(t.currentState=r.type,n.element.dataset.filepondItemState=Du[t.currentState]||"");const s=n.query("GET_ITEM_PANEL_ASPECT_RATIO")||n.query("GET_PANEL_ASPECT_RATIO");s?i||(n.height=n.rect.element.width*s):(gx({root:n,actions:e,props:t}),!n.height&&n.ref.container.rect.element.height>0&&(n.height=n.ref.container.rect.element.height)),i&&(n.ref.panel.height=null),n.ref.panel.height=n.height}),Ex=Et({create:mx,write:_x,destroy:({root:n,props:e})=>{n.element.removeEventListener("click",n.ref.handleClick),n.dispatch("RELEASE_ITEM",{query:e.id})},tag:"li",name:"item",mixins:{apis:["id","interactionMethod","markedForRemoval","spawnDate","dragCenter","dragOrigin","dragOffset"],styles:["translateX","translateY","scaleX","scaleY","opacity","height"],animations:{scaleX:Lu,scaleY:Lu,translateX:Cu,translateY:Cu,opacity:{type:"tween",duration:150}}}});var ol=(n,e)=>Math.max(1,Math.floor((n+1)/e));const al=(n,e,t)=>{if(!t)return;const i=n.rect.element.width,r=e.length;let s=null;if(r===0||t.top<e[0].rect.element.top)return-1;const a=e[0].rect.element,l=a.marginLeft+a.marginRight,c=a.width+l,u=ol(i,c);if(u===1){for(let p=0;p<r;p++){const g=e[p],_=g.rect.outer.top+g.rect.element.height*.5;if(t.top<_)return p}return r}const h=a.marginTop+a.marginBottom,d=a.height+h;for(let p=0;p<r;p++){const g=p%u,_=Math.floor(p/u),m=g*c,f=_*d,v=f-a.marginTop,E=m+c,S=f+d+a.marginBottom;if(t.top<S&&t.top>v){if(t.left<E)return p;p!==r-1?s=p:s=null}}return s!==null?s:r},Ns={height:0,width:0,get getHeight(){return this.height},set setHeight(n){(this.height===0||n===0)&&(this.height=n)},get getWidth(){return this.width},set setWidth(n){(this.width===0||n===0)&&(this.width=n)},setDimensions:function(n,e){(this.height===0||n===0)&&(this.height=n),(this.width===0||e===0)&&(this.width=e)}},vx=({root:n})=>{_t(n.element,"role","list"),n.ref.lastItemSpanwDate=Date.now()},Sx=({root:n,action:e})=>{const{id:t,index:i,interactionMethod:r}=e;n.ref.addIndex=i;const s=Date.now();let o=s,a=1;if(r!==cn.NONE){a=0;const l=n.query("GET_ITEM_INSERT_INTERVAL"),c=s-n.ref.lastItemSpanwDate;o=c<l?s+(l-c):s}n.ref.lastItemSpanwDate=o,n.appendChildView(n.createChildView(Ex,{spawnDate:o,id:t,opacity:a,interactionMethod:r}),i)},Ou=(n,e,t,i=0,r=1)=>{n.dragOffset?(n.translateX=null,n.translateY=null,n.translateX=n.dragOrigin.x+n.dragOffset.x,n.translateY=n.dragOrigin.y+n.dragOffset.y,n.scaleX=1.025,n.scaleY=1.025):(n.translateX=e,n.translateY=t,Date.now()>n.spawnDate&&(n.opacity===0&&xx(n,e,t,i,r),n.scaleX=1,n.scaleY=1,n.opacity=1))},xx=(n,e,t,i,r)=>{n.interactionMethod===cn.NONE?(n.translateX=null,n.translateX=e,n.translateY=null,n.translateY=t):n.interactionMethod===cn.DROP?(n.translateX=null,n.translateX=e-i*20,n.translateY=null,n.translateY=t-r*10,n.scaleX=.8,n.scaleY=.8):n.interactionMethod===cn.BROWSE?(n.translateY=null,n.translateY=t-30):n.interactionMethod===cn.API&&(n.translateX=null,n.translateX=e-30,n.translateY=null)},Mx=({root:n,action:e})=>{const{id:t}=e,i=n.childViews.find(r=>r.id===t);i&&(i.scaleX=.9,i.scaleY=.9,i.opacity=0,i.markedForRemoval=!0)},ha=n=>n.rect.element.height+n.rect.element.marginBottom*.5+n.rect.element.marginTop*.5,yx=n=>n.rect.element.width+n.rect.element.marginLeft*.5+n.rect.element.marginRight*.5,Tx=({root:n,action:e})=>{const{id:t,dragState:i}=e,r=n.query("GET_ITEM",{id:t}),s=n.childViews.find(m=>m.id===t),o=n.childViews.length,a=i.getItemIndex(r);if(!s)return;const l={x:s.dragOrigin.x+s.dragOffset.x+s.dragCenter.x,y:s.dragOrigin.y+s.dragOffset.y+s.dragCenter.y},c=ha(s),u=yx(s);let h=Math.floor(n.rect.outer.width/u);h>o&&(h=o);const d=Math.floor(o/h+1);Ns.setHeight=c*d,Ns.setWidth=u*h;var p={y:Math.floor(l.y/c),x:Math.floor(l.x/u),getGridIndex:function(){return l.y>Ns.getHeight||l.y<0||l.x>Ns.getWidth||l.x<0?a:this.y*h+this.x},getColIndex:function(){const f=n.query("GET_ACTIVE_ITEMS"),v=n.childViews.filter(N=>N.rect.element.height),E=f.map(N=>v.find(z=>z.id===N.id)),S=E.findIndex(N=>N===s),I=ha(s),T=E.length;let R=T,D=0,x=0,y=0;for(let N=0;N<T;N++)if(D=ha(E[N]),y=x,x=y+D,l.y<x){if(S>N){if(l.y<y+I){R=N;break}continue}R=N;break}return R}};const g=h>1?p.getGridIndex():p.getColIndex();n.dispatch("MOVE_ITEM",{query:s,index:g});const _=i.getIndex();if(_===void 0||_!==g){if(i.setIndex(g),_===void 0)return;n.dispatch("DID_REORDER_ITEMS",{items:n.query("GET_ACTIVE_ITEMS"),origin:a,target:g})}},bx=qt({DID_ADD_ITEM:Sx,DID_REMOVE_ITEM:Mx,DID_DRAG_ITEM:Tx}),Ax=({root:n,props:e,actions:t,shouldOptimize:i})=>{bx({root:n,props:e,actions:t});const{dragCoordinates:r}=e,s=n.rect.element.width,o=n.childViews.filter(E=>E.rect.element.height),a=n.query("GET_ACTIVE_ITEMS").map(E=>o.find(S=>S.id===E.id)).filter(E=>E),l=r?al(n,a,r):null,c=n.ref.addIndex||null;n.ref.addIndex=null;let u=0,h=0,d=0;if(a.length===0)return;const p=a[0].rect.element,g=p.marginTop+p.marginBottom,_=p.marginLeft+p.marginRight,m=p.width+_,f=p.height+g,v=ol(s,m);if(v===1){let E=0,S=0;a.forEach((I,T)=>{if(l){let x=T-l;x===-2?S=-g*.25:x===-1?S=-g*.75:x===0?S=g*.75:x===1?S=g*.25:S=0}i&&(I.translateX=null,I.translateY=null),I.markedForRemoval||Ou(I,0,E+S);let D=(I.rect.element.height+g)*(I.markedForRemoval?I.opacity:1);E+=D})}else{let E=0,S=0;a.forEach((I,T)=>{T===l&&(u=1),T===c&&(d+=1),I.markedForRemoval&&I.opacity<.5&&(h-=1);const R=T+d+u+h,D=R%v,x=Math.floor(R/v),y=D*m,N=x*f,z=Math.sign(y-E),$=Math.sign(N-S);E=y,S=N,!I.markedForRemoval&&(i&&(I.translateX=null,I.translateY=null),Ou(I,y,N,z,$))})}},Rx=(n,e)=>e.filter(t=>t.data&&t.data.id?n.id===t.data.id:!0),wx=Et({create:vx,write:Ax,tag:"ul",name:"list",didWriteView:({root:n})=>{n.childViews.filter(e=>e.markedForRemoval&&e.opacity===0&&e.resting).forEach(e=>{e._destroy(),n.removeChildView(e)})},filterFrameActionsForChild:Rx,mixins:{apis:["dragCoordinates"]}}),Ix=({root:n,props:e})=>{n.ref.list=n.appendChildView(n.createChildView(wx)),e.dragCoordinates=null,e.overflowing=!1},Px=({root:n,props:e,action:t})=>{n.query("GET_ITEM_INSERT_LOCATION_FREEDOM")&&(e.dragCoordinates={left:t.position.scopeLeft-n.ref.list.rect.element.left,top:t.position.scopeTop-(n.rect.outer.top+n.rect.element.marginTop+n.rect.element.scrollTop)})},Cx=({props:n})=>{n.dragCoordinates=null},Lx=qt({DID_DRAG:Px,DID_END_DRAG:Cx}),Dx=({root:n,props:e,actions:t})=>{if(Lx({root:n,props:e,actions:t}),n.ref.list.dragCoordinates=e.dragCoordinates,e.overflowing&&!e.overflow&&(e.overflowing=!1,n.element.dataset.state="",n.height=null),e.overflow){const i=Math.round(e.overflow);i!==n.height&&(e.overflowing=!0,n.element.dataset.state="overflow",n.height=i)}},Ox=Et({create:Ix,write:Dx,name:"list-scroller",mixins:{apis:["overflow","dragCoordinates"],styles:["height","translateY"],animations:{translateY:"spring"}}}),En=(n,e,t,i="")=>{t?_t(n,e,i):n.removeAttribute(e)},Nx=n=>{if(!(!n||n.value==="")){try{n.value=""}catch{}if(n.value){const e=Bn("form"),t=n.parentNode,i=n.nextSibling;e.appendChild(n),e.reset(),i?t.insertBefore(n,i):t.appendChild(n)}}},Ux=({root:n,props:e})=>{n.element.id=`filepond--browser-${e.id}`,_t(n.element,"name",n.query("GET_NAME")),_t(n.element,"aria-controls",`filepond--assistant-${e.id}`),_t(n.element,"aria-labelledby",`filepond--drop-label-${e.id}`),ud({root:n,action:{value:n.query("GET_ACCEPTED_FILE_TYPES")}}),hd({root:n,action:{value:n.query("GET_ALLOW_MULTIPLE")}}),dd({root:n,action:{value:n.query("GET_ALLOW_DIRECTORIES_ONLY")}}),Na({root:n}),fd({root:n,action:{value:n.query("GET_REQUIRED")}}),pd({root:n,action:{value:n.query("GET_CAPTURE_METHOD")}}),n.ref.handleChange=t=>{if(!n.element.value)return;const i=Array.from(n.element.files).map(r=>(r._relativePath=r.webkitRelativePath,r));setTimeout(()=>{e.onload(i),Nx(n.element)},250)},n.element.addEventListener("change",n.ref.handleChange)},ud=({root:n,action:e})=>{n.query("GET_ALLOW_SYNC_ACCEPT_ATTRIBUTE")&&En(n.element,"accept",!!e.value,e.value?e.value.join(","):"")},hd=({root:n,action:e})=>{En(n.element,"multiple",e.value)},dd=({root:n,action:e})=>{En(n.element,"webkitdirectory",e.value)},Na=({root:n})=>{const e=n.query("GET_DISABLED"),t=n.query("GET_ALLOW_BROWSE"),i=e||!t;En(n.element,"disabled",i)},fd=({root:n,action:e})=>{e.value?n.query("GET_TOTAL_ITEMS")===0&&En(n.element,"required",!0):En(n.element,"required",!1)},pd=({root:n,action:e})=>{En(n.element,"capture",!!e.value,e.value===!0?"":e.value)},Nu=({root:n})=>{const{element:e}=n;n.query("GET_TOTAL_ITEMS")>0?(En(e,"required",!1),En(e,"name",!1)):(En(e,"name",!0,n.query("GET_NAME")),n.query("GET_CHECK_VALIDITY")&&e.setCustomValidity(""),n.query("GET_REQUIRED")&&En(e,"required",!0))},Fx=({root:n})=>{n.query("GET_CHECK_VALIDITY")&&n.element.setCustomValidity(n.query("GET_LABEL_INVALID_FIELD"))},Bx=Et({tag:"input",name:"browser",ignoreRect:!0,ignoreRectUpdate:!0,attributes:{type:"file"},create:Ux,destroy:({root:n})=>{n.element.removeEventListener("change",n.ref.handleChange)},write:qt({DID_LOAD_ITEM:Nu,DID_REMOVE_ITEM:Nu,DID_THROW_ITEM_INVALID:Fx,DID_SET_DISABLED:Na,DID_SET_ALLOW_BROWSE:Na,DID_SET_ALLOW_DIRECTORIES_ONLY:dd,DID_SET_ALLOW_MULTIPLE:hd,DID_SET_ACCEPTED_FILE_TYPES:ud,DID_SET_CAPTURE_METHOD:pd,DID_SET_REQUIRED:fd})}),Uu={ENTER:13,SPACE:32},Gx=({root:n,props:e})=>{const t=Bn("label");_t(t,"for",`filepond--browser-${e.id}`),_t(t,"id",`filepond--drop-label-${e.id}`),_t(t,"aria-hidden","true"),n.ref.handleKeyDown=i=>{(i.keyCode===Uu.ENTER||i.keyCode===Uu.SPACE)&&(i.preventDefault(),n.ref.label.click())},n.ref.handleClick=i=>{i.target===t||t.contains(i.target)||n.ref.label.click()},t.addEventListener("keydown",n.ref.handleKeyDown),n.element.addEventListener("click",n.ref.handleClick),md(t,e.caption),n.appendChild(t),n.ref.label=t},md=(n,e)=>{n.innerHTML=e;const t=n.querySelector(".filepond--label-action");return t&&_t(t,"tabindex","0"),e},zx=Et({name:"drop-label",ignoreRect:!0,create:Gx,destroy:({root:n})=>{n.ref.label.addEventListener("keydown",n.ref.handleKeyDown),n.element.removeEventListener("click",n.ref.handleClick)},write:qt({DID_SET_LABEL_IDLE:({root:n,action:e})=>{md(n.ref.label,e.value)}}),mixins:{styles:["opacity","translateX","translateY"],animations:{opacity:{type:"tween",duration:150},translateX:"spring",translateY:"spring"}}}),Hx=Et({name:"drip-blob",ignoreRect:!0,mixins:{styles:["translateX","translateY","scaleX","scaleY","opacity"],animations:{scaleX:"spring",scaleY:"spring",translateX:"spring",translateY:"spring",opacity:{type:"tween",duration:250}}}}),Vx=({root:n})=>{const e=n.rect.element.width*.5,t=n.rect.element.height*.5;n.ref.blob=n.appendChildView(n.createChildView(Hx,{opacity:0,scaleX:2.5,scaleY:2.5,translateX:e,translateY:t}))},kx=({root:n,action:e})=>{if(!n.ref.blob){Vx({root:n});return}n.ref.blob.translateX=e.position.scopeLeft,n.ref.blob.translateY=e.position.scopeTop,n.ref.blob.scaleX=1,n.ref.blob.scaleY=1,n.ref.blob.opacity=1},Wx=({root:n})=>{n.ref.blob&&(n.ref.blob.opacity=0)},Xx=({root:n})=>{n.ref.blob&&(n.ref.blob.scaleX=2.5,n.ref.blob.scaleY=2.5,n.ref.blob.opacity=0)},qx=({root:n,props:e,actions:t})=>{Yx({root:n,props:e,actions:t});const{blob:i}=n.ref;t.length===0&&i&&i.opacity===0&&(n.removeChildView(i),n.ref.blob=null)},Yx=qt({DID_DRAG:kx,DID_DROP:Xx,DID_END_DRAG:Wx}),jx=Et({ignoreRect:!0,ignoreRectUpdate:!0,name:"drip",write:qx}),gd=(n,e)=>{try{const t=new DataTransfer;e.forEach(i=>{i instanceof File?t.items.add(i):t.items.add(new File([i],i.name,{type:i.type}))}),n.files=t.files}catch{return!1}return!0},Zx=({root:n})=>n.ref.fields={},Eo=(n,e)=>n.ref.fields[e],ll=n=>{n.query("GET_ACTIVE_ITEMS").forEach(e=>{n.ref.fields[e.id]&&n.element.appendChild(n.ref.fields[e.id])})},Fu=({root:n})=>ll(n),$x=({root:n,action:e})=>{const r=!(n.query("GET_ITEM",e.id).origin===Rt.LOCAL)&&n.query("SHOULD_UPDATE_FILE_INPUT"),s=Bn("input");s.type=r?"file":"hidden",s.name=n.query("GET_NAME"),s.disabled=n.query("GET_DISABLED"),n.ref.fields[e.id]=s,ll(n)},Kx=({root:n,action:e})=>{const t=Eo(n,e.id);if(!t||(e.serverFileReference!==null&&(t.value=e.serverFileReference),!n.query("SHOULD_UPDATE_FILE_INPUT")))return;const i=n.query("GET_ITEM",e.id);gd(t,[i.file])},Qx=({root:n,action:e})=>{n.query("SHOULD_UPDATE_FILE_INPUT")&&setTimeout(()=>{const t=Eo(n,e.id);t&&gd(t,[e.file])},0)},Jx=({root:n})=>{n.element.disabled=n.query("GET_DISABLED")},eM=({root:n,action:e})=>{const t=Eo(n,e.id);t&&(t.parentNode&&t.parentNode.removeChild(t),delete n.ref.fields[e.id])},tM=({root:n,action:e})=>{const t=Eo(n,e.id);t&&(e.value===null?t.removeAttribute("value"):t.type!="file"&&(t.value=e.value),ll(n))},nM=qt({DID_SET_DISABLED:Jx,DID_ADD_ITEM:$x,DID_LOAD_ITEM:Kx,DID_REMOVE_ITEM:eM,DID_DEFINE_VALUE:tM,DID_PREPARE_OUTPUT:Qx,DID_REORDER_ITEMS:Fu,DID_SORT_ITEMS:Fu}),iM=Et({tag:"fieldset",name:"data",create:Zx,write:nM,ignoreRect:!0}),rM=n=>"getRootNode"in n?n.getRootNode():document,sM=["jpg","jpeg","png","gif","bmp","webp","svg","tiff"],oM=["css","csv","html","txt"],aM={zip:"zip|compressed",epub:"application/epub+zip"},_d=(n="")=>(n=n.toLowerCase(),sM.includes(n)?"image/"+(n==="jpg"?"jpeg":n==="svg"?"svg+xml":n):oM.includes(n)?"text/"+n:aM[n]||""),cl=n=>new Promise((e,t)=>{const i=mM(n);if(i.length&&!lM(n))return e(i);cM(n).then(e)}),lM=n=>n.files?n.files.length>0:!1,cM=n=>new Promise((e,t)=>{const i=(n.items?Array.from(n.items):[]).filter(r=>uM(r)).map(r=>hM(r));if(!i.length){e(n.files?Array.from(n.files):[]);return}Promise.all(i).then(r=>{const s=[];r.forEach(o=>{s.push.apply(s,o)}),e(s.filter(o=>o).map(o=>(o._relativePath||(o._relativePath=o.webkitRelativePath),o)))}).catch(console.error)}),uM=n=>{if(Ed(n)){const e=ul(n);if(e)return e.isFile||e.isDirectory}return n.kind==="file"},hM=n=>new Promise((e,t)=>{if(pM(n)){dM(ul(n)).then(e).catch(t);return}e([n.getAsFile()])}),dM=n=>new Promise((e,t)=>{const i=[];let r=0,s=0;const o=()=>{s===0&&r===0&&e(i)},a=l=>{r++;const c=l.createReader(),u=()=>{c.readEntries(h=>{if(h.length===0){r--,o();return}h.forEach(d=>{d.isDirectory?a(d):(s++,d.file(p=>{const g=fM(p);d.fullPath&&(g._relativePath=d.fullPath),i.push(g),s--,o()}))}),u()},t)};u()};a(n)}),fM=n=>{if(n.type.length)return n;const e=n.lastModifiedDate,t=n.name,i=_d(_o(n.name));return i.length&&(n=n.slice(0,n.size,i),n.name=t,n.lastModifiedDate=e),n},pM=n=>Ed(n)&&(ul(n)||{}).isDirectory,Ed=n=>"webkitGetAsEntry"in n,ul=n=>n.webkitGetAsEntry(),mM=n=>{let e=[];try{if(e=_M(n),e.length)return e;e=gM(n)}catch{}return e},gM=n=>{let e=n.getData("url");return typeof e=="string"&&e.length?[e]:[]},_M=n=>{let e=n.getData("text/html");if(typeof e=="string"&&e.length){const t=e.match(/src\s*=\s*"(.+?)"/);if(t)return[t[1]]}return[]},no=[],Mi=n=>({pageLeft:n.pageX,pageTop:n.pageY,scopeLeft:n.offsetX||n.layerX,scopeTop:n.offsetY||n.layerY}),EM=(n,e,t)=>{const i=vM(e),r={element:n,filterElement:t,state:null,ondrop:()=>{},onenter:()=>{},ondrag:()=>{},onexit:()=>{},onload:()=>{},allowdrop:()=>{}};return r.destroy=i.addListener(r),r},vM=n=>{const e=no.find(i=>i.element===n);if(e)return e;const t=SM(n);return no.push(t),t},SM=n=>{const e=[],t={dragenter:MM,dragover:yM,dragleave:bM,drop:TM},i={};ht(t,(s,o)=>{i[s]=o(n,e),n.addEventListener(s,i[s],!1)});const r={element:n,addListener:s=>(e.push(s),()=>{e.splice(e.indexOf(s),1),e.length===0&&(no.splice(no.indexOf(r),1),ht(t,o=>{n.removeEventListener(o,i[o],!1)}))})};return r},xM=(n,e)=>("elementFromPoint"in n||(n=document),n.elementFromPoint(e.x,e.y)),hl=(n,e)=>{const t=rM(e),i=xM(t,{x:n.pageX-window.pageXOffset,y:n.pageY-window.pageYOffset});return i===e||e.contains(i)};let vd=null;const Us=(n,e)=>{try{n.dropEffect=e}catch{}},MM=(n,e)=>t=>{t.preventDefault(),vd=t.target,e.forEach(i=>{const{element:r,onenter:s}=i;hl(t,r)&&(i.state="enter",s(Mi(t)))})},yM=(n,e)=>t=>{t.preventDefault();const i=t.dataTransfer;cl(i).then(r=>{let s=!1;e.some(o=>{const{filterElement:a,element:l,onenter:c,onexit:u,ondrag:h,allowdrop:d}=o;Us(i,"copy");const p=d(r);if(!p){Us(i,"none");return}if(hl(t,l)){if(s=!0,o.state===null){o.state="enter",c(Mi(t));return}if(o.state="over",a&&!p){Us(i,"none");return}h(Mi(t))}else a&&!s&&Us(i,"none"),o.state&&(o.state=null,u(Mi(t)))})})},TM=(n,e)=>t=>{t.preventDefault();const i=t.dataTransfer;cl(i).then(r=>{e.forEach(s=>{const{filterElement:o,element:a,ondrop:l,onexit:c,allowdrop:u}=s;if(s.state=null,!(o&&!hl(t,a))){if(!u(r))return c(Mi(t));l(Mi(t),r)}})})},bM=(n,e)=>t=>{vd===t.target&&e.forEach(i=>{const{onexit:r}=i;i.state=null,r(Mi(t))})},AM=(n,e,t)=>{n.classList.add("filepond--hopper");const{catchesDropsOnPage:i,requiresDropOnElement:r,filterItems:s=u=>u}=t,o=EM(n,i?document.documentElement:n,r);let a="",l="";o.allowdrop=u=>e(s(u)),o.ondrop=(u,h)=>{const d=s(h);if(!e(d)){c.ondragend(u);return}l="drag-drop",c.onload(d,u)},o.ondrag=u=>{c.ondrag(u)},o.onenter=u=>{l="drag-over",c.ondragstart(u)},o.onexit=u=>{l="drag-exit",c.ondragend(u)};const c={updateHopperState:()=>{a!==l&&(n.dataset.hopperState=l,a=l)},onload:()=>{},ondragstart:()=>{},ondrag:()=>{},ondragend:()=>{},destroy:()=>{o.destroy()}};return c};let Ua=!1;const sr=[],Sd=n=>{const e=document.activeElement;if(e&&/textarea|input/i.test(e.nodeName)){let t=!1,i=e;for(;i!==document.body;){if(i.classList.contains("filepond--root")){t=!0;break}i=i.parentNode}if(!t)return}cl(n.clipboardData).then(t=>{t.length&&sr.forEach(i=>i(t))})},RM=n=>{sr.includes(n)||(sr.push(n),!Ua&&(Ua=!0,document.addEventListener("paste",Sd)))},wM=n=>{nl(sr,sr.indexOf(n)),sr.length===0&&(document.removeEventListener("paste",Sd),Ua=!1)},IM=()=>{const n=t=>{e.onload(t)},e={destroy:()=>{wM(n)},onload:()=>{}};return RM(n),e},PM=({root:n,props:e})=>{n.element.id=`filepond--assistant-${e.id}`,_t(n.element,"role","status"),_t(n.element,"aria-live","polite"),_t(n.element,"aria-relevant","additions")};let Bu=null,Gu=null;const da=[],vo=(n,e)=>{n.element.textContent=e},CM=n=>{n.element.textContent=""},xd=(n,e,t)=>{const i=n.query("GET_TOTAL_ITEMS");vo(n,`${t} ${e}, ${i} ${i===1?n.query("GET_LABEL_FILE_COUNT_SINGULAR"):n.query("GET_LABEL_FILE_COUNT_PLURAL")}`),clearTimeout(Gu),Gu=setTimeout(()=>{CM(n)},1500)},Md=n=>n.element.parentNode.contains(document.activeElement),LM=({root:n,action:e})=>{if(!Md(n))return;n.element.textContent="";const t=n.query("GET_ITEM",e.id);da.push(t.filename),clearTimeout(Bu),Bu=setTimeout(()=>{xd(n,da.join(", "),n.query("GET_LABEL_FILE_ADDED")),da.length=0},750)},DM=({root:n,action:e})=>{if(!Md(n))return;const t=e.item;xd(n,t.filename,n.query("GET_LABEL_FILE_REMOVED"))},OM=({root:n,action:e})=>{const i=n.query("GET_ITEM",e.id).filename,r=n.query("GET_LABEL_FILE_PROCESSING_COMPLETE");vo(n,`${i} ${r}`)},zu=({root:n,action:e})=>{const i=n.query("GET_ITEM",e.id).filename,r=n.query("GET_LABEL_FILE_PROCESSING_ABORTED");vo(n,`${i} ${r}`)},Fs=({root:n,action:e})=>{const i=n.query("GET_ITEM",e.id).filename;vo(n,`${e.status.main} ${i} ${e.status.sub}`)},NM=Et({create:PM,ignoreRect:!0,ignoreRectUpdate:!0,write:qt({DID_LOAD_ITEM:LM,DID_REMOVE_ITEM:DM,DID_COMPLETE_ITEM_PROCESSING:OM,DID_ABORT_ITEM_PROCESSING:zu,DID_REVERT_ITEM_PROCESSING:zu,DID_THROW_ITEM_REMOVE_ERROR:Fs,DID_THROW_ITEM_LOAD_ERROR:Fs,DID_THROW_ITEM_INVALID:Fs,DID_THROW_ITEM_PROCESSING_ERROR:Fs}),tag:"span",name:"assistant"}),yd=(n,e="-")=>n.replace(new RegExp(`${e}.`,"g"),t=>t.charAt(1).toUpperCase()),Td=(n,e=16,t=!0)=>{let i=Date.now(),r=null;return(...s)=>{clearTimeout(r);const o=Date.now()-i,a=()=>{i=Date.now(),n(...s)};o<e?t||(r=setTimeout(a,e-o)):a()}},UM=1e6,io=n=>n.preventDefault(),FM=({root:n,props:e})=>{const t=n.query("GET_ID");t&&(n.element.id=t);const i=n.query("GET_CLASS_NAME");i&&i.split(" ").filter(l=>l.length).forEach(l=>{n.element.classList.add(l)}),n.ref.label=n.appendChildView(n.createChildView(zx,{...e,translateY:null,caption:n.query("GET_LABEL_IDLE")})),n.ref.list=n.appendChildView(n.createChildView(Ox,{translateY:null})),n.ref.panel=n.appendChildView(n.createChildView(cd,{name:"panel-root"})),n.ref.assistant=n.appendChildView(n.createChildView(NM,{...e})),n.ref.data=n.appendChildView(n.createChildView(iM,{...e})),n.ref.measure=Bn("div"),n.ref.measure.style.height="100%",n.element.appendChild(n.ref.measure),n.ref.bounds=null,n.query("GET_STYLES").filter(l=>!Fn(l.value)).map(({name:l,value:c})=>{n.element.dataset[l]=c}),n.ref.widthPrevious=null,n.ref.widthUpdated=Td(()=>{n.ref.updateHistory=[],n.dispatch("DID_RESIZE_ROOT")},250),n.ref.previousAspectRatio=null,n.ref.updateHistory=[];const r=window.matchMedia("(pointer: fine) and (hover: hover)").matches,s="PointerEvent"in window;n.query("GET_ALLOW_REORDER")&&s&&!r&&(n.element.addEventListener("touchmove",io,{passive:!1}),n.element.addEventListener("gesturestart",io));const o=n.query("GET_CREDITS");if(o.length===2){const l=document.createElement("a");l.className="filepond--credits",l.setAttribute("aria-hidden","true"),l.href=o[0],l.tabindex=-1,l.target="_blank",l.rel="noopener noreferrer",l.textContent=o[1],n.element.appendChild(l),n.ref.credits=l}},BM=({root:n,props:e,actions:t})=>{if(kM({root:n,props:e,actions:t}),t.filter(T=>/^DID_SET_STYLE_/.test(T.type)).filter(T=>!Fn(T.data.value)).map(({type:T,data:R})=>{const D=yd(T.substring(8).toLowerCase(),"_");n.element.dataset[D]=R.value,n.invalidateLayout()}),n.rect.element.hidden)return;n.rect.element.width!==n.ref.widthPrevious&&(n.ref.widthPrevious=n.rect.element.width,n.ref.widthUpdated());let i=n.ref.bounds;i||(i=n.ref.bounds=HM(n),n.element.removeChild(n.ref.measure),n.ref.measure=null);const{hopper:r,label:s,list:o,panel:a}=n.ref;r&&r.updateHopperState();const l=n.query("GET_PANEL_ASPECT_RATIO"),c=n.query("GET_ALLOW_MULTIPLE"),u=n.query("GET_TOTAL_ITEMS"),h=c?n.query("GET_MAX_FILES")||UM:1,d=u===h,p=t.find(T=>T.type==="DID_ADD_ITEM");if(d&&p){const T=p.data.interactionMethod;s.opacity=0,c?s.translateY=-40:T===cn.API?s.translateX=40:T===cn.BROWSE?s.translateY=40:s.translateY=30}else d||(s.opacity=1,s.translateX=0,s.translateY=0);const g=GM(n),_=zM(n),m=s.rect.element.height,f=!c||d?0:m,v=d?o.rect.element.marginTop:0,E=u===0?0:o.rect.element.marginBottom,S=f+v+_.visual+E,I=f+v+_.bounds+E;if(o.translateY=Math.max(0,f-o.rect.element.marginTop)-g.top,l){const T=n.rect.element.width,R=T*l;l!==n.ref.previousAspectRatio&&(n.ref.previousAspectRatio=l,n.ref.updateHistory=[]);const D=n.ref.updateHistory;D.push(T);const x=2;if(D.length>x*2){const N=D.length,z=N-10;let $=0;for(let w=N;w>=z;w--)if(D[w]===D[w-2]&&$++,$>=x)return}a.scalable=!1,a.height=R;const y=R-f-(E-g.bottom)-(d?v:0);_.visual>y?o.overflow=y:o.overflow=null,n.height=R}else if(i.fixedHeight){a.scalable=!1;const T=i.fixedHeight-f-(E-g.bottom)-(d?v:0);_.visual>T?o.overflow=T:o.overflow=null}else if(i.cappedHeight){const T=S>=i.cappedHeight,R=Math.min(i.cappedHeight,S);a.scalable=!0,a.height=T?R:R-g.top-g.bottom;const D=R-f-(E-g.bottom)-(d?v:0);S>i.cappedHeight&&_.visual>D?o.overflow=D:o.overflow=null,n.height=Math.min(i.cappedHeight,I-g.top-g.bottom)}else{const T=u>0?g.top+g.bottom:0;a.scalable=!0,a.height=Math.max(m,S-T),n.height=Math.max(m,I-T)}n.ref.credits&&a.heightCurrent&&(n.ref.credits.style.transform=`translateY(${a.heightCurrent}px)`)},GM=n=>{const e=n.ref.list.childViews[0].childViews[0];return e?{top:e.rect.element.marginTop,bottom:e.rect.element.marginBottom}:{top:0,bottom:0}},zM=n=>{let e=0,t=0;const i=n.ref.list,r=i.childViews[0],s=r.childViews.filter(v=>v.rect.element.height),o=n.query("GET_ACTIVE_ITEMS").map(v=>s.find(E=>E.id===v.id)).filter(v=>v);if(o.length===0)return{visual:e,bounds:t};const a=r.rect.element.width,l=al(r,o,i.dragCoordinates),c=o[0].rect.element,u=c.marginTop+c.marginBottom,h=c.marginLeft+c.marginRight,d=c.width+h,p=c.height+u,g=typeof l<"u"&&l>=0?1:0,_=o.find(v=>v.markedForRemoval&&v.opacity<.45)?-1:0,m=o.length+g+_,f=ol(a,d);return f===1?o.forEach(v=>{const E=v.rect.element.height+u;t+=E,e+=E*v.opacity}):(t=Math.ceil(m/f)*p,e=t),{visual:e,bounds:t}},HM=n=>{const e=n.ref.measureHeight||null;return{cappedHeight:parseInt(n.style.maxHeight,10)||null,fixedHeight:e===0?null:e}},dl=(n,e)=>{const t=n.query("GET_ALLOW_REPLACE"),i=n.query("GET_ALLOW_MULTIPLE"),r=n.query("GET_TOTAL_ITEMS");let s=n.query("GET_MAX_FILES");const o=e.length;return!i&&o>1?(n.dispatch("DID_THROW_MAX_FILES",{source:e,error:ft("warning",0,"Max files")}),!0):(s=i?s:1,!i&&t?!1:pr(s)&&r+o>s?(n.dispatch("DID_THROW_MAX_FILES",{source:e,error:ft("warning",0,"Max files")}),!0):!1)},VM=(n,e,t)=>{const i=n.childViews[0];return al(i,e,{left:t.scopeLeft-i.rect.element.left,top:t.scopeTop-(n.rect.outer.top+n.rect.element.marginTop+n.rect.element.scrollTop)})},Hu=n=>{const e=n.query("GET_ALLOW_DROP"),t=n.query("GET_DISABLED"),i=e&&!t;if(i&&!n.ref.hopper){const r=AM(n.element,s=>{const o=n.query("GET_BEFORE_DROP_FILE")||(()=>!0);return n.query("GET_DROP_VALIDATION")?s.every(l=>Ii("ALLOW_HOPPER_ITEM",l,{query:n.query}).every(c=>c===!0)&&o(l)):!0},{filterItems:s=>{const o=n.query("GET_IGNORED_FILES");return s.filter(a=>dr(a)?!o.includes(a.name.toLowerCase()):!0)},catchesDropsOnPage:n.query("GET_DROP_ON_PAGE"),requiresDropOnElement:n.query("GET_DROP_ON_ELEMENT")});r.onload=(s,o)=>{const l=n.ref.list.childViews[0].childViews.filter(u=>u.rect.element.height),c=n.query("GET_ACTIVE_ITEMS").map(u=>l.find(h=>h.id===u.id)).filter(u=>u);fn("ADD_ITEMS",s,{dispatch:n.dispatch}).then(u=>{if(dl(n,u))return!1;n.dispatch("ADD_ITEMS",{items:u,index:VM(n.ref.list,c,o),interactionMethod:cn.DROP})}),n.dispatch("DID_DROP",{position:o}),n.dispatch("DID_END_DRAG",{position:o})},r.ondragstart=s=>{n.dispatch("DID_START_DRAG",{position:s})},r.ondrag=Td(s=>{n.dispatch("DID_DRAG",{position:s})}),r.ondragend=s=>{n.dispatch("DID_END_DRAG",{position:s})},n.ref.hopper=r,n.ref.drip=n.appendChildView(n.createChildView(jx))}else!i&&n.ref.hopper&&(n.ref.hopper.destroy(),n.ref.hopper=null,n.removeChildView(n.ref.drip))},Vu=(n,e)=>{const t=n.query("GET_ALLOW_BROWSE"),i=n.query("GET_DISABLED"),r=t&&!i;r&&!n.ref.browser?n.ref.browser=n.appendChildView(n.createChildView(Bx,{...e,onload:s=>{fn("ADD_ITEMS",s,{dispatch:n.dispatch}).then(o=>{if(dl(n,o))return!1;n.dispatch("ADD_ITEMS",{items:o,index:-1,interactionMethod:cn.BROWSE})})}}),0):!r&&n.ref.browser&&(n.removeChildView(n.ref.browser),n.ref.browser=null)},ku=n=>{const e=n.query("GET_ALLOW_PASTE"),t=n.query("GET_DISABLED"),i=e&&!t;i&&!n.ref.paster?(n.ref.paster=IM(),n.ref.paster.onload=r=>{fn("ADD_ITEMS",r,{dispatch:n.dispatch}).then(s=>{if(dl(n,s))return!1;n.dispatch("ADD_ITEMS",{items:s,index:-1,interactionMethod:cn.PASTE})})}):!i&&n.ref.paster&&(n.ref.paster.destroy(),n.ref.paster=null)},kM=qt({DID_SET_ALLOW_BROWSE:({root:n,props:e})=>{Vu(n,e)},DID_SET_ALLOW_DROP:({root:n})=>{Hu(n)},DID_SET_ALLOW_PASTE:({root:n})=>{ku(n)},DID_SET_DISABLED:({root:n,props:e})=>{Hu(n),ku(n),Vu(n,e),n.query("GET_DISABLED")?n.element.dataset.disabled="disabled":n.element.removeAttribute("data-disabled")}}),WM=Et({name:"root",read:({root:n})=>{n.ref.measure&&(n.ref.measureHeight=n.ref.measure.offsetHeight)},create:FM,write:BM,destroy:({root:n})=>{n.ref.paster&&n.ref.paster.destroy(),n.ref.hopper&&n.ref.hopper.destroy(),n.element.removeEventListener("touchmove",io),n.element.removeEventListener("gesturestart",io)},mixins:{styles:["height"]}}),XM=(n={})=>{let e=null;const t=to(),i=av(qv(t),[hS,Zv(t)],[US,jv(t)]);i.dispatch("SET_OPTIONS",{options:n});const r=()=>{document.hidden||i.dispatch("KICK")};document.addEventListener("visibilitychange",r);let s=null,o=!1,a=!1,l=null,c=null;const u=()=>{o||(o=!0),clearTimeout(s),s=setTimeout(()=>{o=!1,l=null,c=null,a&&(a=!1,i.dispatch("DID_STOP_RESIZE"))},500)};window.addEventListener("resize",u);const h=WM(i,{id:tl()});let d=!1,p=!1;const g={_read:()=>{o&&(c=window.innerWidth,l||(l=c),!a&&c!==l&&(i.dispatch("DID_START_RESIZE"),a=!0)),p&&d&&(d=h.element.offsetParent===null),!d&&(h._read(),p=h.rect.element.hidden)},_write:P=>{const B=i.processActionQueue().filter(H=>!/^SET_/.test(H.type));d&&!B.length||(v(B),d=h._write(P,B,a),Qv(i.query("GET_ITEMS")),d&&i.processDispatchQueue())}},_=P=>B=>{const H={type:P};if(!B)return H;if(B.hasOwnProperty("error")&&(H.error=B.error?{...B.error}:null),B.status&&(H.status={...B.status}),B.file&&(H.output=B.file),B.source)H.file=B.source;else if(B.item||B.id){const G=B.item?B.item:i.query("GET_ITEM",B.id);H.file=G?Yt(G):null}return B.items&&(H.items=B.items.map(Yt)),/progress/.test(P)&&(H.progress=B.progress),B.hasOwnProperty("origin")&&B.hasOwnProperty("target")&&(H.origin=B.origin,H.target=B.target),H},m={DID_DESTROY:_("destroy"),DID_INIT:_("init"),DID_THROW_MAX_FILES:_("warning"),DID_INIT_ITEM:_("initfile"),DID_START_ITEM_LOAD:_("addfilestart"),DID_UPDATE_ITEM_LOAD_PROGRESS:_("addfileprogress"),DID_LOAD_ITEM:_("addfile"),DID_THROW_ITEM_INVALID:[_("error"),_("addfile")],DID_THROW_ITEM_LOAD_ERROR:[_("error"),_("addfile")],DID_THROW_ITEM_REMOVE_ERROR:[_("error"),_("removefile")],DID_PREPARE_OUTPUT:_("preparefile"),DID_START_ITEM_PROCESSING:_("processfilestart"),DID_UPDATE_ITEM_PROCESS_PROGRESS:_("processfileprogress"),DID_ABORT_ITEM_PROCESSING:_("processfileabort"),DID_COMPLETE_ITEM_PROCESSING:_("processfile"),DID_COMPLETE_ITEM_PROCESSING_ALL:_("processfiles"),DID_REVERT_ITEM_PROCESSING:_("processfilerevert"),DID_THROW_ITEM_PROCESSING_ERROR:[_("error"),_("processfile")],DID_REMOVE_ITEM:_("removefile"),DID_UPDATE_ITEMS:_("updatefiles"),DID_ACTIVATE_ITEM:_("activatefile"),DID_REORDER_ITEMS:_("reorderfiles")},f=P=>{const B={pond:F,...P};delete B.type,h.element.dispatchEvent(new CustomEvent(`FilePond:${P.type}`,{detail:B,bubbles:!0,cancelable:!0,composed:!0}));const H=[];P.hasOwnProperty("error")&&H.push(P.error),P.hasOwnProperty("file")&&H.push(P.file);const G=["type","error","file"];Object.keys(P).filter(Z=>!G.includes(Z)).forEach(Z=>H.push(P[Z])),F.fire(P.type,...H);const X=i.query(`GET_ON${P.type.toUpperCase()}`);X&&X(...H)},v=P=>{P.length&&P.filter(B=>m[B.type]).forEach(B=>{const H=m[B.type];(Array.isArray(H)?H:[H]).forEach(G=>{B.type==="DID_INIT_ITEM"?f(G(B.data)):setTimeout(()=>{f(G(B.data))},0)})})},E=P=>i.dispatch("SET_OPTIONS",{options:P}),S=P=>i.query("GET_ACTIVE_ITEM",P),I=P=>new Promise((B,H)=>{i.dispatch("REQUEST_ITEM_PREPARE",{query:P,success:G=>{B(G)},failure:G=>{H(G)}})}),T=(P,B={})=>new Promise((H,G)=>{x([{source:P,options:B}],{index:B.index}).then(X=>H(X&&X[0])).catch(G)}),R=P=>P.file&&P.id,D=(P,B)=>(typeof P=="object"&&!R(P)&&!B&&(B=P,P=void 0),i.dispatch("REMOVE_ITEM",{...B,query:P}),i.query("GET_ACTIVE_ITEM",P)===null),x=(...P)=>new Promise((B,H)=>{const G=[],X={};if(fo(P[0]))G.push.apply(G,P[0]),Object.assign(X,P[1]||{});else{const Z=P[P.length-1];typeof Z=="object"&&!(Z instanceof Blob)&&Object.assign(X,P.pop()),G.push(...P)}i.dispatch("ADD_ITEMS",{items:G,index:X.index,interactionMethod:cn.API,success:B,failure:H})}),y=()=>i.query("GET_ACTIVE_ITEMS"),N=P=>new Promise((B,H)=>{i.dispatch("REQUEST_ITEM_PROCESSING",{query:P,success:G=>{B(G)},failure:G=>{H(G)}})}),z=(...P)=>{const B=Array.isArray(P[0])?P[0]:P,H=B.length?B:y();return Promise.all(H.map(I))},$=(...P)=>{const B=Array.isArray(P[0])?P[0]:P;if(!B.length){const H=y().filter(G=>!(G.status===Be.IDLE&&G.origin===Rt.LOCAL)&&G.status!==Be.PROCESSING&&G.status!==Be.PROCESSING_COMPLETE&&G.status!==Be.PROCESSING_REVERT_ERROR);return Promise.all(H.map(N))}return Promise.all(B.map(N))},w=(...P)=>{const B=Array.isArray(P[0])?P[0]:P;let H;typeof B[B.length-1]=="object"?H=B.pop():Array.isArray(P[0])&&(H=P[1]);const G=y();return B.length?B.map(Z=>pi(Z)?G[Z]?G[Z].id:null:Z).filter(Z=>Z).map(Z=>D(Z,H)):Promise.all(G.map(Z=>D(Z,H)))},F={...go(),...g,...Yv(i,t),setOptions:E,addFile:T,addFiles:x,getFile:S,processFile:N,prepareFile:I,removeFile:D,moveFile:(P,B)=>i.dispatch("MOVE_ITEM",{query:P,index:B}),getFiles:y,processFiles:$,removeFiles:w,prepareFiles:z,sort:P=>i.dispatch("SORT",{compare:P}),browse:()=>{var P=h.element.querySelector("input[type=file]");P&&P.click()},destroy:()=>{F.fire("destroy",h.element),i.dispatch("ABORT_ALL"),h._destroy(),window.removeEventListener("resize",u),document.removeEventListener("visibilitychange",r),i.dispatch("DID_DESTROY")},insertBefore:P=>du(h.element,P),insertAfter:P=>fu(h.element,P),appendTo:P=>P.appendChild(h.element),replaceElement:P=>{du(h.element,P),P.parentNode.removeChild(P),e=P},restoreElement:()=>{e&&(fu(e,h.element),h.element.parentNode.removeChild(h.element),e=null)},isAttachedTo:P=>h.element===P||e===P,element:{get:()=>h.element},status:{get:()=>i.query("GET_STATUS")}};return i.dispatch("DID_INIT"),Jn(F)},bd=(n={})=>{const e={};return ht(to(),(i,r)=>{e[i]=r[0]}),XM({...e,...n})},qM=n=>n.charAt(0).toLowerCase()+n.slice(1),YM=n=>yd(n.replace(/^data-/,"")),Ad=(n,e)=>{ht(e,(t,i)=>{ht(n,(r,s)=>{const o=new RegExp(t);if(!o.test(r)||(delete n[r],i===!1))return;if(Xt(i)){n[i]=s;return}const l=i.group;It(i)&&!n[l]&&(n[l]={}),n[l][qM(r.replace(o,""))]=s}),i.mapping&&Ad(n[i.group],i.mapping)})},jM=(n,e={})=>{const t=[];ht(n.attributes,r=>{t.push(n.attributes[r])});const i=t.filter(r=>r.name).reduce((r,s)=>{const o=_t(n,s.name);return r[YM(s.name)]=o===s.name?!0:o,r},{});return Ad(i,e),i},ZM=(n,e={})=>{const t={"^class$":"className","^multiple$":"allowMultiple","^capture$":"captureMethod","^webkitdirectory$":"allowDirectoriesOnly","^server":{group:"server",mapping:{"^process":{group:"process"},"^revert":{group:"revert"},"^fetch":{group:"fetch"},"^restore":{group:"restore"},"^load":{group:"load"}}},"^type$":!1,"^files$":!1};Ii("SET_ATTRIBUTE_TO_OPTION_MAP",t);const i={...e},r=jM(n.nodeName==="FIELDSET"?n.querySelector("input[type=file]"):n,t);Object.keys(r).forEach(o=>{It(r[o])?(It(i[o])||(i[o]={}),Object.assign(i[o],r[o])):i[o]=r[o]}),i.files=(e.files||[]).concat(Array.from(n.querySelectorAll("input:not([type=file])")).map(o=>({source:o.value,options:{type:o.dataset.type}})));const s=bd(i);return n.files&&Array.from(n.files).forEach(o=>{s.addFile(o)}),s.replaceElement(n),s},$M=(...n)=>ov(n[0])?ZM(...n):bd(...n),KM=["fire","_read","_write"],Wu=n=>{const e={};return jh(n,e,KM),e},QM=(n,e)=>n.replace(/(?:{([a-zA-Z]+)})/g,(t,i)=>e[i]),JM=n=>{const e=new Blob(["(",n.toString(),")()"],{type:"application/javascript"}),t=URL.createObjectURL(e),i=new Worker(t);return{transfer:(r,s)=>{},post:(r,s,o)=>{const a=tl();i.onmessage=l=>{l.data.id===a&&s(l.data.message)},i.postMessage({id:a,message:r},o)},terminate:()=>{i.terminate(),URL.revokeObjectURL(t)}}},ey=n=>new Promise((e,t)=>{const i=new Image;i.onload=()=>{e(i)},i.onerror=r=>{t(r)},i.src=n}),Rd=(n,e)=>{const t=n.slice(0,n.size,n.type);return t.lastModifiedDate=n.lastModifiedDate,t.name=e,t},ty=n=>Rd(n,n.name),Xu=[],ny=n=>{if(Xu.includes(n))return;Xu.push(n);const e=n({addFilter:eS,utils:{Type:ee,forin:ht,isString:Xt,isFile:dr,toNaturalFileSize:od,replaceInString:QM,getExtensionFromFilename:_o,getFilenameWithoutExtension:id,guesstimateMimeType:_d,getFileFromBlob:hr,getFilenameFromURL:$r,createRoute:qt,createWorker:JM,createView:Et,createItemAPI:Yt,loadImage:ey,copyFile:ty,renameFile:Rd,createBlob:ed,applyFilterChain:fn,text:mt,getNumericAspectRatioFromString:Kh},views:{fileActionButton:sd}});tS(e.options)},iy=()=>Object.prototype.toString.call(window.operamini)==="[object OperaMini]",ry=()=>"Promise"in window,sy=()=>"slice"in Blob.prototype,oy=()=>"URL"in window&&"createObjectURL"in window.URL,ay=()=>"visibilityState"in document,ly=()=>"performance"in window,cy=()=>"supports"in(window.CSS||{}),uy=()=>/MSIE|Trident/.test(window.navigator.userAgent),qu=(()=>{const n=Vh()&&!iy()&&ay()&&ry()&&sy()&&oy()&&ly()&&(cy()||uy());return()=>n})(),qn={apps:[]},hy="filepond",Pi=()=>{};let Yu={},Xs=Pi,fa=Pi,ju=Pi,Zu=Pi,$u=Pi,Ku=Pi,Fa=Pi;if(qu()){Lv(()=>{qn.apps.forEach(t=>t._read())},t=>{qn.apps.forEach(i=>i._write(t))});const n=()=>{document.dispatchEvent(new CustomEvent("FilePond:loaded",{detail:{supported:qu,create:Xs,destroy:fa,parse:ju,find:Zu,registerPlugin:$u,setOptions:Fa}})),document.removeEventListener("DOMContentLoaded",n)};document.readyState!=="loading"?setTimeout(()=>n(),0):document.addEventListener("DOMContentLoaded",n);const e=()=>ht(to(),(t,i)=>{Yu[t]=i[1]});Yu={},e(),Xs=(...t)=>{const i=$M(...t);return i.on("destroy",fa),qn.apps.push(i),Wu(i)},fa=t=>{const i=qn.apps.findIndex(r=>r.isAttachedTo(t));return i>=0?(qn.apps.splice(i,1)[0].restoreElement(),!0):!1},ju=t=>Array.from(t.querySelectorAll(`.${hy}`)).filter(s=>!qn.apps.find(o=>o.isAttachedTo(s))).map(s=>Xs(s)),Zu=t=>{const i=qn.apps.find(r=>r.isAttachedTo(t));return i?Wu(i):null},$u=(...t)=>{t.forEach(ny),e()},Ku=()=>{const t={};return ht(to(),(i,r)=>{t[i]=r[0]}),t},Fa=t=>(It(t)&&(qn.apps.forEach(i=>{i.setOptions(t)}),nS(t)),Ku())}const dy={labelIdle:'فایل را اینجا بکشید و رها کنید، یا <span class="filepond--label-action"> جستجو کنید </span>',labelInvalidField:"فیلد دارای فایل های نامعتبر است",labelFileWaitingForSize:"Waiting for size",labelFileSizeNotAvailable:"حجم فایل مجاز نیست",labelFileLoading:"درحال بارگذاری",labelFileLoadError:"خطا در زمان اجرا",labelFileProcessing:"درحال بارگذاری",labelFileProcessingComplete:"بارگذاری کامل شد",labelFileProcessingAborted:"بارگذاری لغو شد",labelFileProcessingError:"خطا در زمان بارگذاری",labelFileProcessingRevertError:"خطا در زمان حذف",labelFileRemoveError:"خطا در زمان حذف",labelTapToCancel:"برای لغو ضربه بزنید",labelTapToRetry:"برای تکرار کلیک کنید",labelTapToUndo:"برای برگشت کلیک کنید",labelButtonRemoveItem:"حذف",labelButtonAbortItemLoad:"لغو",labelButtonRetryItemLoad:"تکرار",labelButtonAbortItemProcessing:"لغو",labelButtonUndoItemProcessing:"برگشت",labelButtonRetryItemProcessing:"تکرار",labelButtonProcessItem:"بارگذاری",labelMaxFileSizeExceeded:"فایل بسیار حجیم است",labelMaxFileSize:"حداکثر مجاز فایل {filesize} است",labelMaxTotalFileSizeExceeded:"از حداکثر حجم فایل بیشتر شد",labelMaxTotalFileSize:"حداکثر حجم فایل {filesize} است",labelFileTypeNotAllowed:"نوع فایل نامعتبر است",fileValidateTypeLabelExpectedTypes:"در انتظار {allButLastType} یا {lastType}",imageValidateSizeLabelFormatError:"فرمت تصویر پشتیبانی نمی شود",imageValidateSizeLabelImageSizeTooSmall:"تصویر بسیار کوچک است",imageValidateSizeLabelImageSizeTooBig:"تصویر بسیار بزرگ است",imageValidateSizeLabelExpectedMinSize:"حداقل اندازه {minWidth} × {minHeight} است",imageValidateSizeLabelExpectedMaxSize:"حداکثر اندازه {maxWidth} × {maxHeight} است",imageValidateSizeLabelImageResolutionTooLow:"وضوح تصویر بسیار کم است",imageValidateSizeLabelImageResolutionTooHigh:"وضوع تصویر بسیار زیاد است",imageValidateSizeLabelExpectedMinResolution:"حداقل وضوح تصویر {minResolution} است",imageValidateSizeLabelExpectedMaxResolution:"حداکثر وضوح تصویر {maxResolution} است"};Fa(dy);let St,bn,pa,Qu,Bs,Gs,br,Ar,Rr,ei,qs,je,qr,sn,nt;const wr={width:20,height:20,depth:1};let Kr=new Array,fy=16711680,Br=new ue,py=new Array;const wd=document.getElementById("p3d"),zs=document.getElementById("top-options"),Ke=document.getElementById("right-options"),Id=window.innerWidth,Pd=window.innerHeight;let Ba=Id/Pd,or=!1,Gr,my=!1,gy=document.getElementById("overlay");if(gy==null){let n=document.createElement("div");n.id="overlay",n.classList.add("overlay"),document.body.appendChild(n)}let vt=document.getElementById("overlay");const Ju=(n,e)=>{if(n&&e==null){vt.innerHTML="";let t=document.createElement("div");t.classList.add("cls_overlay"),t.innerHTML="&times;",vt.appendChild(t);let i=document.createElement("div");i.classList.add("mt3"),i.innerHTML=n,vt.appendChild(i),vt.scrollTo(0,0),vt.style.transition="opacity .25s",vt.style.zIndex="99999",vt.style.opacity="1",Gr=!0}else if(n&&e=="nocls"){oldoverlayHtml=vt.innerHTML,vt.innerHTML="";let t=document.createElement("div");t.classList.add("mt3"),t.innerHTML=n,vt.appendChild(t);let i=document.createElement("div");i.id="min_overlay",i.innerHTML="&#8630;",i.title="Return",vt.appendChild(i),vt.style.transition="opacity .5s",vt.style.zIndex="100",vt.style.opacity="1",Gr=!0}else vt.style.transition="opacity .25s",vt.style.zIndex="-1",vt.style.opacity="0",Gr=!1,vt.style.overflowY="scroll",setTimeout(()=>{vt.classList.remove("centered")},500)},_y=n=>{n.stopPropagation();let e=n.target.id,t=n.target;if(t.classList.contains("cls_overlay")&&Gr==!0)Ju();else if(t.classList.contains("clsy")&&Gr==!0)Ju();else if(t.classList.contains("info")&&my==!1)infoMan(n);else if(e=="scale-top-options")je.setMode("scale");else if(e=="rotate-top-options")je.setMode("rotate");else if(e=="position-top-options")je.setMode("translate");else if(e=="options-top-options")Ke.classList.contains("hidden")?(t.querySelector("svg").innerHTML='<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>',t.querySelector("span").textContent="بستن"):(t.querySelector("svg").innerHTML='<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>',t.querySelector("span").textContent="گزینه‌ها"),nt?Ga("3d"):Ga();else if(e=="menu-button"){const r=document.getElementById("top-options");if(t.dataset.status=="1"){t.dataset.status=0,r.style.width="2.75rem",r.style.overflowX="hidden";const s=document.getElementById("menu-icon").outerHTML;t.innerHTML=s}else{t.dataset.status=1,r.style.width="fit-content",r.style.overflowX="scroll";const s=document.getElementById("menu-chevron").outerHTML;t.innerHTML=s}}else if(e=="minimize-right-option")Ke.classList.add("hidden"),document.querySelector("#options-top-options svg").innerHTML='<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>',document.querySelector("#options-top-options span").textContent="گزینه‌ها";else if(e=="add-top-options"){const r=document.getElementById("info-panel");if(r.classList.toggle("hidden"),or==!1){const s=r.querySelector('input[type="file"]');console.log(r);const o=Xs(s);o.labelIdle='مدل خود را در اینجا بیاندازید یا برای انتخاب فایل کلیک کنید<br><span class="add-model-icon">+</span>',r.querySelector(".filepond--credits").remove(),or=!0,zs.querySelector("#add-top-options svg").innerHTML='<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>',zs.querySelector("#add-top-options span").textContent="بستن"}else zs.querySelector("#add-top-options svg").innerHTML='<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>',zs.querySelector("#add-top-options span").textContent="افزودن",or=!1}else e=="addCube"?Ey():e=="addCylinder"?vy():e=="addSphere"&&Sy();Br.set(n.clientX/ei.domElement.clientWidth*2-1,-(n.clientY/ei.domElement.clientHeight)*2+1),qr.setFromCamera(Br,bn);const i=qr.intersectObjects(Kr,!1);i.length>0&&(je.attach(i[0].object),nt=i[0].object)},eh=n=>{const e=n.target.value,t=n.target.parentNode.parentNode,i=t.querySelector(".value");i.value=e;const r=t.dataset.type.split("-");r[1]!="rotation"?nt[r[1]][r[2]]=e:nt[r[1]][r[2]]=e*(Math.PI/180);const s=new C;new Gn().setFromObject(nt).getSize(s),Ke.querySelector('[data-type="selected-width"] input').value=s.x,Ke.querySelector('[data-type="selected-height"] input').value=s.y,Ke.querySelector('[data-type="selected-depth"] input').value=s.z},th=n=>{const e=n.target.value,t=n.target.parentNode,i=t.querySelector(".value");i.value=e;const r=t.dataset.type.split("-");r[1]!="rotation"?nt[r[1]][r[2]]=e:nt[r[1]][r[2]]=e*(Math.PI/180);const s=new C;new Gn().setFromObject(nt).getSize(s),Ke.querySelector('[data-type="selected-width"] input').value=s.x,Ke.querySelector('[data-type="selected-height"] input').value=s.y,Ke.querySelector('[data-type="selected-depth"] input').value=s.z},Cd=()=>{Ba=window.innerWidth/window.innerHeight,bn.aspect=Ba,bn.updateProjectionMatrix(),ei.setSize(window.innerWidth,window.innerHeight),So()},Ey=()=>{const n=document.getElementById("top-options"),e=document.getElementById("info-panel"),t=new ut(1,1,1),i=new Qa({color:4551027}),r=new ve(t,i);r.position.set(0,0,0),St.add(r),e.classList.toggle("hidden"),n.querySelector("#add-top-options svg").innerHTML='<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>',n.querySelector("#add-top-options span").textContent="افزودن",je.attach(r),nt=r,St.add(je),or=!1,Kr.push(r)},vy=()=>{const n=document.getElementById("top-options"),e=document.getElementById("info-panel"),t=new Ct(1,1,1),i=new Qa({color:4551027}),r=new ve(t,i);r.position.set(0,0,0),St.add(r),e.classList.toggle("hidden"),n.querySelector("#add-top-options svg").innerHTML='<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>',n.querySelector("#add-top-options span").textContent="افزودن",je.attach(r),nt=r,St.add(je),or=!1,Kr.push(r)},Sy=()=>{const n=document.getElementById("top-options"),e=document.getElementById("info-panel"),t=new ho(1,32,16),i=new UE({color:4551027}),r=new ve(t,i);r.position.set(0,0,0),St.add(r),e.classList.toggle("hidden"),n.querySelector("#add-top-options svg").innerHTML='<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>',n.querySelector("#add-top-options span").textContent="افزودن",je.attach(r),nt=r,St.add(je),or=!1,Kr.push(r)},xy=()=>{if(!Ke.classList.contains("hidden")&&nt){Ke.querySelectorAll('[data-type="selected-position-x"] input').forEach(t=>{t.value=nt.position.x}),Ke.querySelectorAll('[data-type="selected-position-y"] input').forEach(t=>{t.value=nt.position.y}),Ke.querySelectorAll('[data-type="selected-position-z"] input').forEach(t=>{t.value=nt.position.z}),Ke.querySelectorAll('[data-type="selected-rotation-x"] input').forEach(t=>{let i=Math.round(Dr.radToDeg(nt.rotation.x)*100)/100;t.value=i}),Ke.querySelectorAll('[data-type="selected-rotation-y"] input').forEach(t=>{let i=Math.round(Dr.radToDeg(nt.rotation.y)*100)/100;t.value=i}),Ke.querySelectorAll('[data-type="selected-rotation-z"] input').forEach(t=>{let i=Math.round(Dr.radToDeg(nt.rotation.z)*100)/100;t.value=i}),Ke.querySelectorAll('[data-type="selected-scale-x"] input').forEach(t=>{t.value=nt.scale.x}),Ke.querySelectorAll('[data-type="selected-scale-y"] input').forEach(t=>{t.value=nt.scale.y}),Ke.querySelectorAll('[data-type="selected-scale-z"] input').forEach(t=>{t.value=nt.scale.z});const n=new C;new Gn().setFromObject(nt).getSize(n),Ke.querySelector('[data-type="selected-width"] input').value=n.x,Ke.querySelector('[data-type="selected-height"] input').value=n.y,Ke.querySelector('[data-type="selected-depth"] input').value=n.z}},My=()=>{St=new iE,St.background=new Ve(3092035);const n=new WE(30);St.add(n),qr=new Hh},yy=()=>{bn=new an(50,Ba,1,1e3),bn.position.set(0,15,20),new bh(1e4),St.add(bn)},Ty=()=>{const n=new VE(16777215,526368,1);n.position.set(0,0,5).normalize(),St.add(n)},by=()=>{Qu=new kE(wr.width,wr.height),St.add(Qu);const n=new ut(wr.width,wr.depth,wr.height),e=new Qa({color:1381661});Bs=new ve(n,e),Bs.name="میز",Bs.position.set(0,-.6,0),St.add(Bs);const t=new Zr({color:1381661});[["+","+"],["+","-"],["-","-"],["-","+"]].forEach((r,s)=>{let o=new Pt;const a=r[0]=="+"?10:-10,l=r[1]=="+"?10:-10,c=new Float32Array([a,0,l,a,30,l]);o.setAttribute("position",new vn(c,3));const u=new Mn(o,t);py[s]=u,u.name="خط عمودی"+s,St.add(u)})},Ay=()=>{new nv().load("node_modules/three/examples/fonts/helvetiker_regular.typeface.json",function(e){const t=new jr({color:16777215}),i=new Cs("20mm",{font:e,size:.6,height:.2}),r=new Cs("20mm",{font:e,size:.6,height:.2}),s=new Cs("1mm",{font:e,size:.3,height:.1}),o=new Cs("30mm",{font:e,size:.3,height:.1});Gs=new ve(i,t),Gs.name="متن X",br=new ve(r,t),br.name="متن Y",Ar=new ve(s,t),Ar.name="متن Z",Rr=new ve(o,t),Rr.name="متن خط",Gs.position.set(7,.3,-10.3),br.position.set(-10.3,.3,-7),br.rotation.y=Math.PI/2,Ar.position.set(-10.3,-1.1,10),Ar.rotation.z=Math.PI/2,Rr.position.set(-10.3,7,10),Rr.rotation.z=Math.PI/2,St.add(Rr),St.add(Ar),St.add(br),St.add(Gs)})},Ry=()=>{ei=new Lh({canvas:wd,alpha:!0,antialias:!0}),ei.setPixelRatio(window.devicePixelRatio),ei.setSize(Id,Pd)},wy=()=>{qs=new YE(bn,wd),qs.enableDamping=!0,je=new jE(bn,ei.domElement),je.addEventListener("change",So),je.addEventListener("objectChange",xy),je.addEventListener("dragging-changed",function(n){qs.enabled=!n.value})},Iy=n=>{Br.x=n.clientX/window.innerWidth*2-1,Br.y=-(n.clientY/window.innerHeight)*2+1,qr.setFromCamera(Br,bn);const e=qr.intersectObjects(Kr);e.length>0?e[0].object!=sn&&(sn&&sn.material.color.setHex(sn.currentHex),sn=e[0].object,sn.currentHex=sn.material.color.getHex(),sn.material.color.setHex(fy)):sn&&(sn.material.color.setHex(sn.currentHex),sn=null)},Ga=n=>{const e=["width","height","depth"];if(Ke.classList.contains("hidden")){if(n?Ke.innerHTML=document.getElementById("options-top-options-content-"+n).innerHTML:Ke.textContent="آبجکتی انتخاب نشده است.",n=="3d"){const t=new C;new Gn().setFromObject(nt).getSize(t),Ke.querySelector('[data-type="selected-width"] input').value=t.x,Ke.querySelector('[data-type="selected-height"] input').value=t.y,Ke.querySelector('[data-type="selected-depth"] input').value=t.z}Ke.querySelectorAll('input[type="range"]').forEach(t=>{t.addEventListener("input",eh);const i=t.parentNode.parentNode.dataset.type.split("-");nt&&!e.includes(i[1])&&(t.value=nt[i[1]][i[2]])}),Ke.querySelectorAll('input[type="tel"]').forEach(t=>{t.addEventListener("input",th);const i=t.parentNode.dataset.type.split("-");nt&&!e.includes(i[1])&&(t.value=nt[i[1]][i[2]])}),Ke.classList.remove("hidden")}else Ke.querySelectorAll('input[type="range"]').forEach(t=>{t.removeEventListener("input",eh)}),Ke.querySelectorAll('input[type="tel"]').forEach(t=>{t.removeEventListener("input",th),Ke.classList.remove("hidden")}),Ke.classList.add("hidden")},Py=n=>{const e=n.code,t=n.key;if(e=="KeyQ"){je.setSpace(je.space==="local"?"world":"local");return}else if(t=="Shift"){je.setTranslationSnap(100),je.setRotationSnap(Dr.degToRad(15)),je.setScaleSnap(.25);return}else if(e=="KeyW"){je.setMode("translate");return}else if(e=="KeyE"){je.setMode("rotate");return}else if(e=="KeyR"){je.setMode("scale");return}else if(e!="KeyC")if(e=="KeyV"){const i=Math.random()+.1,r=Math.random()+.1;cameraPersp.fov=i*160,pa.bottom=-i*500,pa.top=i*500,cameraPersp.zoom=r*5,pa.zoom=r*5,Cd();return}else if(e=="KeyX"){je.showX=!je.showX;return}else if(e=="KeyY"){je.showY=!je.showY;return}else if(e=="KeyZ"){je.showZ=!je.showZ;return}else if(e=="Space"){je.enabled=!je.enabled;return}else if(e=="KeyE"){je.reset();return}else if(t==="["){je.setSize(je.size+.1);return}else if(t==="]"){je.setSize(Math.max(je.size-.1,.1));return}else e=="KeyT"&&nt&&Ga("3d")},Cy=()=>{ei.render(St,bn)},So=()=>{requestAnimationFrame(So),Cy(),qs.update()},Ly=()=>{My(),yy(),Ty(),by(),Ay(),Ry(),wy(),So(),document.addEventListener("click",_y),window.addEventListener("resize",Cd),window.addEventListener("keydown",Py),window.addEventListener("keyup",function(n){if(n.key=="Shift"){je.setTranslationSnap(null),je.setRotationSnap(null),je.setScaleSnap(null);return}}),document.addEventListener("pointermove",Iy)};Ly();
