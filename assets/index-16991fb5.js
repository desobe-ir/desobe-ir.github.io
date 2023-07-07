var Ec=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);var Kg=Ec(_a=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sa="154",ei={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tc=0,Aa=1,bc=2,vl=1,Ac=2,on=3,un=0,Me=1,ln=2,yn=0,Ai=1,wa=2,Ra=3,Ca=4,wc=5,xi=100,Rc=101,Cc=102,Pa=103,La=104,Pc=200,Lc=201,Uc=202,Dc=203,xl=204,Ml=205,Ic=206,Nc=207,Oc=208,Fc=209,Bc=210,zc=0,Hc=1,Gc=2,Wr=3,kc=4,Vc=5,Wc=6,Xc=7,yl=0,qc=1,Yc=2,hn=0,jc=1,Zc=2,Kc=3,Jc=4,$c=5,Sl=300,Ci=301,Pi=302,Xr=303,qr=304,Zs=306,Yr=1e3,He=1001,jr=1002,_e=1003,Ua=1004,rr=1005,Ce=1006,Qc=1007,Ki=1008,Sn=1009,th=1010,eh=1011,ra=1012,El=1013,gn=1014,_n=1015,Ji=1016,Tl=1017,bl=1018,Wn=1020,nh=1021,Ge=1023,ih=1024,sh=1025,Xn=1026,Li=1027,rh=1028,Al=1029,ah=1030,wl=1031,Rl=1033,ar=33776,or=33777,lr=33778,cr=33779,Da=35840,Ia=35841,Na=35842,Oa=35843,oh=36196,Fa=37492,Ba=37496,za=37808,Ha=37809,Ga=37810,ka=37811,Va=37812,Wa=37813,Xa=37814,qa=37815,Ya=37816,ja=37817,Za=37818,Ka=37819,Ja=37820,$a=37821,hr=36492,lh=36283,Qa=36284,to=36285,eo=36286,Cl=3e3,qn=3001,ch=3200,hh=3201,Pl=0,uh=1,Yn="",Bt="srgb",Ze="srgb-linear",Ll="display-p3",ur=7680,fh=519,dh=512,ph=513,mh=514,gh=515,_h=516,vh=517,xh=518,Mh=519,no=35044,io="300 es",Zr=1035,cn=2e3,Gs=2001;class ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fr=Math.PI/180,Kr=180/Math.PI;function Di(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fe[i&255]+fe[i>>8&255]+fe[i>>16&255]+fe[i>>24&255]+"-"+fe[t&255]+fe[t>>8&255]+"-"+fe[t>>16&15|64]+fe[t>>24&255]+"-"+fe[e&63|128]+fe[e>>8&255]+"-"+fe[e>>16&255]+fe[e>>24&255]+fe[n&255]+fe[n>>8&255]+fe[n>>16&255]+fe[n>>24&255]).toLowerCase()}function ue(i,t,e){return Math.max(t,Math.min(e,i))}function yh(i,t){return(i%t+t)%t}function dr(i,t,e){return(1-e)*i+e*t}function so(i){return(i&i-1)===0&&i!==0}function Jr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function os(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class rt{constructor(t=0,e=0){rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,s,r,o,a,c,l){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],m=n[5],v=n[8],g=s[0],f=s[3],d=s[6],b=s[1],_=s[4],x=s[7],E=s[2],L=s[5],D=s[8];return r[0]=o*g+a*b+c*E,r[3]=o*f+a*_+c*L,r[6]=o*d+a*x+c*D,r[1]=l*g+h*b+u*E,r[4]=l*f+h*_+u*L,r[7]=l*d+h*x+u*D,r[2]=p*g+m*b+v*E,r[5]=p*f+m*_+v*L,r[8]=p*d+m*x+v*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,p=a*c-h*r,m=l*r-o*c,v=e*u+n*p+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=u*g,t[1]=(s*l-h*n)*g,t[2]=(a*n-s*o)*g,t[3]=p*g,t[4]=(h*e-s*c)*g,t[5]=(s*r-a*e)*g,t[6]=m*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(pr.makeScale(t,e)),this}rotate(t){return this.premultiply(pr.makeRotation(-t)),this}translate(t,e){return this.premultiply(pr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const pr=new Ot;function Ul(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const ro={};function Xi(i){i in ro||(ro[i]=!0,console.warn(i))}function wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Sh=new Ot().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Eh=new Ot().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Th(i){return i.convertSRGBToLinear().applyMatrix3(Eh)}function bh(i){return i.applyMatrix3(Sh).convertLinearToSRGB()}const Ah={[Ze]:i=>i,[Bt]:i=>i.convertSRGBToLinear(),[Ll]:Th},wh={[Ze]:i=>i,[Bt]:i=>i.convertLinearToSRGB(),[Ll]:bh},Ie={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Ze},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ah[t],s=wh[e];if(n===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)}};let ii;class Dl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ii===void 0&&(ii=ks("canvas")),ii.width=t.width,ii.height=t.height;const n=ii.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ii}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ks("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wi(e[n]/255)*255):e[n]=wi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Rh=0;class Il{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Di(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(gr(s[o].image)):r.push(gr(s[o]))}else r=gr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function gr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ch=0;class Ae extends ti{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=He,s=He,r=Ce,o=Ki,a=Ge,c=Sn,l=Ae.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Di(),this.name="",this.source=new Il(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Xi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===qn?Bt:Yn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yr:t.x=t.x-Math.floor(t.x);break;case He:t.x=t.x<0?0:1;break;case jr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yr:t.y=t.y-Math.floor(t.y);break;case He:t.y=t.y<0?0:1;break;case jr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Xi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Bt?qn:Cl}set encoding(t){Xi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===qn?Bt:Yn}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=Sl;Ae.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,s=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],p=c[1],m=c[5],v=c[9],g=c[2],f=c[6],d=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-g)<.01&&Math.abs(v-f)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+g)<.1&&Math.abs(v+f)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,x=(m+1)/2,E=(d+1)/2,L=(h+p)/4,D=(u+g)/4,G=(v+f)/4;return _>x&&_>E?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=L/n,r=D/n):x>E?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=L/s,r=G/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=D/r,s=G/r),this.set(n,s,r,e),this}let b=Math.sqrt((f-v)*(f-v)+(u-g)*(u-g)+(p-h)*(p-h));return Math.abs(b)<.001&&(b=1),this.x=(f-v)/b,this.y=(u-g)/b,this.z=(p-h)/b,this.w=Math.acos((l+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jn extends ti{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(Xi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===qn?Bt:Yn),this.texture=new Ae(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ce,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Il(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nl extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_e,this.minFilter=_e,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ph extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_e,this.minFilter=_e,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class En{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const p=r[o+0],m=r[o+1],v=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=p,t[e+1]=m,t[e+2]=v,t[e+3]=g;return}if(u!==g||c!==p||l!==m||h!==v){let f=1-a;const d=c*p+l*m+h*v+u*g,b=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const E=Math.sqrt(_),L=Math.atan2(E,d*b);f=Math.sin(f*L)/E,a=Math.sin(a*L)/E}const x=a*b;if(c=c*f+p*x,l=l*f+m*x,h=h*f+v*x,u=u*f+g*x,f===1-a){const E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],p=r[o+1],m=r[o+2],v=r[o+3];return t[e]=a*v+h*u+c*m-l*p,t[e+1]=c*v+h*p+l*u-a*m,t[e+2]=l*v+h*m+a*p-c*u,t[e+3]=h*v-a*u-c*p-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),p=c(n/2),m=c(s/2),v=c(r/2);switch(o){case"XYZ":this._x=p*h*u+l*m*v,this._y=l*m*u-p*h*v,this._z=l*h*v+p*m*u,this._w=l*h*u-p*m*v;break;case"YXZ":this._x=p*h*u+l*m*v,this._y=l*m*u-p*h*v,this._z=l*h*v-p*m*u,this._w=l*h*u+p*m*v;break;case"ZXY":this._x=p*h*u-l*m*v,this._y=l*m*u+p*h*v,this._z=l*h*v+p*m*u,this._w=l*h*u-p*m*v;break;case"ZYX":this._x=p*h*u-l*m*v,this._y=l*m*u+p*h*v,this._z=l*h*v-p*m*u,this._w=l*h*u+p*m*v;break;case"YZX":this._x=p*h*u+l*m*v,this._y=l*m*u+p*h*v,this._z=l*h*v-p*m*u,this._w=l*h*u-p*m*v;break;case"XZY":this._x=p*h*u-l*m*v,this._y=l*m*u-p*h*v,this._z=l*h*v+p*m*u,this._w=l*h*u+p*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],p=n+a+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,n=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ao.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ao.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=c*e+o*s-a*n,h=c*n+a*e-r*s,u=c*s+r*n-o*e,p=-r*e-o*n-a*s;return this.x=l*c+p*-r+h*-a-u*-o,this.y=h*c+p*-o+u*-r-l*-a,this.z=u*c+p*-a+l*-o-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _r.copy(this).projectOnVector(t),this.sub(_r)}reflect(t){return this.sub(_r.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _r=new H,ao=new En;class ns{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),si.copy(t.boundingBox),si.applyMatrix4(t.matrixWorld),this.union(si);else{const s=t.geometry;if(s!==void 0)if(e&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let o=0,a=r.count;o<a;o++)tn.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(tn)}else s.boundingBox===null&&s.computeBoundingBox(),si.copy(s.boundingBox),si.applyMatrix4(t.matrixWorld),this.union(si)}const n=t.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,tn),tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fi),ls.subVectors(this.max,Fi),ri.subVectors(t.a,Fi),ai.subVectors(t.b,Fi),oi.subVectors(t.c,Fi),fn.subVectors(ai,ri),dn.subVectors(oi,ai),wn.subVectors(ri,oi);let e=[0,-fn.z,fn.y,0,-dn.z,dn.y,0,-wn.z,wn.y,fn.z,0,-fn.x,dn.z,0,-dn.x,wn.z,0,-wn.x,-fn.y,fn.x,0,-dn.y,dn.x,0,-wn.y,wn.x,0];return!vr(e,ri,ai,oi,ls)||(e=[1,0,0,0,1,0,0,0,1],!vr(e,ri,ai,oi,ls))?!1:(cs.crossVectors(fn,dn),e=[cs.x,cs.y,cs.z],vr(e,ri,ai,oi,ls))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qe=[new H,new H,new H,new H,new H,new H,new H,new H],tn=new H,si=new ns,ri=new H,ai=new H,oi=new H,fn=new H,dn=new H,wn=new H,Fi=new H,ls=new H,cs=new H,Rn=new H;function vr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Rn.fromArray(i,r);const a=s.x*Math.abs(Rn.x)+s.y*Math.abs(Rn.y)+s.z*Math.abs(Rn.z),c=t.dot(Rn),l=e.dot(Rn),h=n.dot(Rn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Lh=new ns,Bi=new H,xr=new H;class Ks{constructor(t=new H,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Lh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bi.subVectors(t,this.center);const e=Bi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Bi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bi.copy(t.center).add(xr)),this.expandByPoint(Bi.copy(t.center).sub(xr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const en=new H,Mr=new H,hs=new H,pn=new H,yr=new H,us=new H,Sr=new H;class aa{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,en)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=en.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(en.copy(this.origin).addScaledVector(this.direction,e),en.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Mr.copy(t).add(e).multiplyScalar(.5),hs.copy(e).sub(t).normalize(),pn.copy(this.origin).sub(Mr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(hs),a=pn.dot(this.direction),c=-pn.dot(hs),l=pn.lengthSq(),h=Math.abs(1-o*o);let u,p,m,v;if(h>0)if(u=o*c-a,p=o*a-c,v=r*h,u>=0)if(p>=-v)if(p<=v){const g=1/h;u*=g,p*=g,m=u*(u+o*p+2*a)+p*(o*u+p+2*c)+l}else p=r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*c)+l;else p=-r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*c)+l;else p<=-v?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+p*(p+2*c)+l):p<=v?(u=0,p=Math.min(Math.max(-r,-c),r),m=p*(p+2*c)+l):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+p*(p+2*c)+l);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Mr).addScaledVector(hs,p),m}intersectSphere(t,e){en.subVectors(t.center,this.origin);const n=en.dot(this.direction),s=en.dot(en)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),h>=0?(r=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-p.z)*u,c=(t.max.z-p.z)*u):(a=(t.max.z-p.z)*u,c=(t.min.z-p.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,en)!==null}intersectTriangle(t,e,n,s,r){yr.subVectors(e,t),us.subVectors(n,t),Sr.crossVectors(yr,us);let o=this.direction.dot(Sr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pn.subVectors(this.origin,t);const c=a*this.direction.dot(us.crossVectors(pn,us));if(c<0)return null;const l=a*this.direction.dot(yr.cross(pn));if(l<0||c+l>o)return null;const h=-a*pn.dot(Sr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,e,n,s,r,o,a,c,l,h,u,p,m,v,g,f){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,p,m,v,g,f)}set(t,e,n,s,r,o,a,c,l,h,u,p,m,v,g,f){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=p,d[3]=m,d[7]=v,d[11]=g,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/li.setFromMatrixColumn(t,0).length(),r=1/li.setFromMatrixColumn(t,1).length(),o=1/li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const p=o*h,m=o*u,v=a*h,g=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+v*l,e[5]=p-g*l,e[9]=-a*c,e[2]=g-p*l,e[6]=v+m*l,e[10]=o*c}else if(t.order==="YXZ"){const p=c*h,m=c*u,v=l*h,g=l*u;e[0]=p+g*a,e[4]=v*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-v,e[6]=g+p*a,e[10]=o*c}else if(t.order==="ZXY"){const p=c*h,m=c*u,v=l*h,g=l*u;e[0]=p-g*a,e[4]=-o*u,e[8]=v+m*a,e[1]=m+v*a,e[5]=o*h,e[9]=g-p*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const p=o*h,m=o*u,v=a*h,g=a*u;e[0]=c*h,e[4]=v*l-m,e[8]=p*l+g,e[1]=c*u,e[5]=g*l+p,e[9]=m*l-v,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const p=o*c,m=o*l,v=a*c,g=a*l;e[0]=c*h,e[4]=g-p*u,e[8]=v*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*u+v,e[10]=p-g*u}else if(t.order==="XZY"){const p=o*c,m=o*l,v=a*c,g=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=p*u+g,e[5]=o*h,e[9]=m*u-v,e[2]=v*u-m,e[6]=a*h,e[10]=g*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uh,t,Dh)}lookAt(t,e,n){const s=this.elements;return Ee.subVectors(t,e),Ee.lengthSq()===0&&(Ee.z=1),Ee.normalize(),mn.crossVectors(n,Ee),mn.lengthSq()===0&&(Math.abs(n.z)===1?Ee.x+=1e-4:Ee.z+=1e-4,Ee.normalize(),mn.crossVectors(n,Ee)),mn.normalize(),fs.crossVectors(Ee,mn),s[0]=mn.x,s[4]=fs.x,s[8]=Ee.x,s[1]=mn.y,s[5]=fs.y,s[9]=Ee.y,s[2]=mn.z,s[6]=fs.z,s[10]=Ee.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],m=n[13],v=n[2],g=n[6],f=n[10],d=n[14],b=n[3],_=n[7],x=n[11],E=n[15],L=s[0],D=s[4],G=s[8],M=s[12],R=s[1],ot=s[5],tt=s[9],V=s[13],X=s[2],J=s[6],lt=s[10],q=s[14],z=s[3],dt=s[7],at=s[11],j=s[15];return r[0]=o*L+a*R+c*X+l*z,r[4]=o*D+a*ot+c*J+l*dt,r[8]=o*G+a*tt+c*lt+l*at,r[12]=o*M+a*V+c*q+l*j,r[1]=h*L+u*R+p*X+m*z,r[5]=h*D+u*ot+p*J+m*dt,r[9]=h*G+u*tt+p*lt+m*at,r[13]=h*M+u*V+p*q+m*j,r[2]=v*L+g*R+f*X+d*z,r[6]=v*D+g*ot+f*J+d*dt,r[10]=v*G+g*tt+f*lt+d*at,r[14]=v*M+g*V+f*q+d*j,r[3]=b*L+_*R+x*X+E*z,r[7]=b*D+_*ot+x*J+E*dt,r[11]=b*G+_*tt+x*lt+E*at,r[15]=b*M+_*V+x*q+E*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],p=t[10],m=t[14],v=t[3],g=t[7],f=t[11],d=t[15];return v*(+r*c*u-s*l*u-r*a*p+n*l*p+s*a*m-n*c*m)+g*(+e*c*m-e*l*p+r*o*p-s*o*m+s*l*h-r*c*h)+f*(+e*l*u-e*a*m-r*o*u+n*o*m+r*a*h-n*l*h)+d*(-s*a*h-e*c*u+e*a*p+s*o*u-n*o*p+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],p=t[10],m=t[11],v=t[12],g=t[13],f=t[14],d=t[15],b=u*f*l-g*p*l+g*c*m-a*f*m-u*c*d+a*p*d,_=v*p*l-h*f*l-v*c*m+o*f*m+h*c*d-o*p*d,x=h*g*l-v*u*l+v*a*m-o*g*m-h*a*d+o*u*d,E=v*u*c-h*g*c-v*a*p+o*g*p+h*a*f-o*u*f,L=e*b+n*_+s*x+r*E;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/L;return t[0]=b*D,t[1]=(g*p*r-u*f*r-g*s*m+n*f*m+u*s*d-n*p*d)*D,t[2]=(a*f*r-g*c*r+g*s*l-n*f*l-a*s*d+n*c*d)*D,t[3]=(u*c*r-a*p*r-u*s*l+n*p*l+a*s*m-n*c*m)*D,t[4]=_*D,t[5]=(h*f*r-v*p*r+v*s*m-e*f*m-h*s*d+e*p*d)*D,t[6]=(v*c*r-o*f*r-v*s*l+e*f*l+o*s*d-e*c*d)*D,t[7]=(o*p*r-h*c*r+h*s*l-e*p*l-o*s*m+e*c*m)*D,t[8]=x*D,t[9]=(v*u*r-h*g*r-v*n*m+e*g*m+h*n*d-e*u*d)*D,t[10]=(o*g*r-v*a*r+v*n*l-e*g*l-o*n*d+e*a*d)*D,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*m-e*a*m)*D,t[12]=E*D,t[13]=(h*g*s-v*u*s+v*n*p-e*g*p-h*n*f+e*u*f)*D,t[14]=(v*a*s-o*g*s-v*n*c+e*g*c+o*n*f-e*a*f)*D,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*p+e*a*p)*D,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,p=r*l,m=r*h,v=r*u,g=o*h,f=o*u,d=a*u,b=c*l,_=c*h,x=c*u,E=n.x,L=n.y,D=n.z;return s[0]=(1-(g+d))*E,s[1]=(m+x)*E,s[2]=(v-_)*E,s[3]=0,s[4]=(m-x)*L,s[5]=(1-(p+d))*L,s[6]=(f+b)*L,s[7]=0,s[8]=(v+_)*D,s[9]=(f-b)*D,s[10]=(1-(p+g))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=li.set(s[0],s[1],s[2]).length();const o=li.set(s[4],s[5],s[6]).length(),a=li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ne.copy(this);const l=1/r,h=1/o,u=1/a;return Ne.elements[0]*=l,Ne.elements[1]*=l,Ne.elements[2]*=l,Ne.elements[4]*=h,Ne.elements[5]*=h,Ne.elements[6]*=h,Ne.elements[8]*=u,Ne.elements[9]*=u,Ne.elements[10]*=u,e.setFromRotationMatrix(Ne),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=cn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s);let m,v;if(a===cn)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Gs)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=cn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),p=(e+t)*l,m=(n+s)*h;let v,g;if(a===cn)v=(o+r)*u,g=-2*u;else if(a===Gs)v=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=g,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const li=new H,Ne=new Kt,Uh=new H(0,0,0),Dh=new H(1,1,1),mn=new H,fs=new H,Ee=new H,oo=new Kt,lo=new En;class Js{constructor(t=0,e=0,n=0,s=Js.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ue(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return oo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lo.setFromEuler(this),this.setFromQuaternion(lo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Js.DEFAULT_ORDER="XYZ";class oa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ih=0;const co=new H,ci=new En,nn=new Kt,ds=new H,zi=new H,Nh=new H,Oh=new En,ho=new H(1,0,0),uo=new H(0,1,0),fo=new H(0,0,1),Fh={type:"added"},po={type:"removed"};class he extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=he.DEFAULT_UP.clone();const t=new H,e=new Js,n=new En,s=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Ot}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=he.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.multiply(ci),this}rotateOnWorldAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.premultiply(ci),this}rotateX(t){return this.rotateOnAxis(ho,t)}rotateY(t){return this.rotateOnAxis(uo,t)}rotateZ(t){return this.rotateOnAxis(fo,t)}translateOnAxis(t,e){return co.copy(t).applyQuaternion(this.quaternion),this.position.add(co.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ho,t)}translateY(t){return this.translateOnAxis(uo,t)}translateZ(t){return this.translateOnAxis(fo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ds.copy(t):ds.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(zi,ds,this.up):nn.lookAt(ds,zi,this.up),this.quaternion.setFromRotationMatrix(nn),s&&(nn.extractRotation(s.matrixWorld),ci.setFromRotationMatrix(nn),this.quaternion.premultiply(ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Fh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(po)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(po)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(nn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,t,Nh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,Oh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),p=o(t.skeletons),m=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}he.DEFAULT_UP=new H(0,1,0);he.DEFAULT_MATRIX_AUTO_UPDATE=!0;he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Oe=new H,sn=new H,Er=new H,rn=new H,hi=new H,ui=new H,mo=new H,Tr=new H,br=new H,Ar=new H;let ps=!1;class ze{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Oe.subVectors(t,e),s.cross(Oe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Oe.subVectors(s,e),sn.subVectors(n,e),Er.subVectors(t,e);const o=Oe.dot(Oe),a=Oe.dot(sn),c=Oe.dot(Er),l=sn.dot(sn),h=sn.dot(Er),u=o*l-a*a;if(u===0)return r.set(-2,-1,-1);const p=1/u,m=(l*c-a*h)*p,v=(o*h-a*c)*p;return r.set(1-m-v,v,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,rn),rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getUV(t,e,n,s,r,o,a,c){return ps===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ps=!0),this.getInterpolation(t,e,n,s,r,o,a,c)}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,rn),c.setScalar(0),c.addScaledVector(r,rn.x),c.addScaledVector(o,rn.y),c.addScaledVector(a,rn.z),c}static isFrontFacing(t,e,n,s){return Oe.subVectors(n,e),sn.subVectors(t,e),Oe.cross(sn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oe.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),Oe.cross(sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ze.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return ps===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ps=!0),ze.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return ze.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;hi.subVectors(s,n),ui.subVectors(r,n),Tr.subVectors(t,n);const c=hi.dot(Tr),l=ui.dot(Tr);if(c<=0&&l<=0)return e.copy(n);br.subVectors(t,s);const h=hi.dot(br),u=ui.dot(br);if(h>=0&&u<=h)return e.copy(s);const p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(hi,o);Ar.subVectors(t,r);const m=hi.dot(Ar),v=ui.dot(Ar);if(v>=0&&m<=v)return e.copy(r);const g=m*l-c*v;if(g<=0&&l>=0&&v<=0)return a=l/(l-v),e.copy(n).addScaledVector(ui,a);const f=h*v-m*u;if(f<=0&&u-h>=0&&m-v>=0)return mo.subVectors(r,s),a=(u-h)/(u-h+(m-v)),e.copy(s).addScaledVector(mo,a);const d=1/(f+g+p);return o=g*d,a=p*d,e.copy(n).addScaledVector(hi,o).addScaledVector(ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Bh=0;class Ii extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=Ai,this.side=un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=Ml,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==un&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ol={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fe={h:0,s:0,l:0},ms={h:0,s:0,l:0};function wr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Bt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ie.workingColorSpace){if(t=yh(t,1),e=ue(e,0,1),n=ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=wr(o,r,t+1/3),this.g=wr(o,r,t),this.b=wr(o,r,t-1/3)}return Ie.toWorkingColorSpace(this,s),this}setStyle(t,e=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Bt){const n=Ol[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}copyLinearToSRGB(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Bt){return Ie.fromWorkingColorSpace(de.copy(this),t),Math.round(ue(de.r*255,0,255))*65536+Math.round(ue(de.g*255,0,255))*256+Math.round(ue(de.b*255,0,255))}getHexString(t=Bt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ie.workingColorSpace){Ie.fromWorkingColorSpace(de.copy(this),e);const n=de.r,s=de.g,r=de.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Ie.workingColorSpace){return Ie.fromWorkingColorSpace(de.copy(this),e),t.r=de.r,t.g=de.g,t.b=de.b,t}getStyle(t=Bt){Ie.fromWorkingColorSpace(de.copy(this),t);const e=de.r,n=de.g,s=de.b;return t!==Bt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Fe),Fe.h+=t,Fe.s+=e,Fe.l+=n,this.setHSL(Fe.h,Fe.s,Fe.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fe),t.getHSL(ms);const n=dr(Fe.h,ms.h,e),s=dr(Fe.s,ms.s,e),r=dr(Fe.l,ms.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const de=new Wt;Wt.NAMES=Ol;class $s extends Ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ee=new H,gs=new rt;class Le{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=no,this.updateRange={offset:0,count:-1},this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gs.fromBufferAttribute(this,e),gs.applyMatrix3(t),this.setXY(e,gs.x,gs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.applyMatrix3(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.applyMatrix4(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.applyNormalMatrix(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.transformDirection(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=os(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=os(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=os(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=os(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==no&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class Fl extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Bl extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class xe extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}}let zh=0;const we=new Kt,Rr=new he,fi=new H,Te=new ns,Hi=new ns,le=new H;class Ue extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ul(t)?Bl:Fl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return we.makeRotationFromQuaternion(t),this.applyMatrix4(we),this}rotateX(t){return we.makeRotationX(t),this.applyMatrix4(we),this}rotateY(t){return we.makeRotationY(t),this.applyMatrix4(we),this}rotateZ(t){return we.makeRotationZ(t),this.applyMatrix4(we),this}translate(t,e,n){return we.makeTranslation(t,e,n),this.applyMatrix4(we),this}scale(t,e,n){return we.makeScale(t,e,n),this.applyMatrix4(we),this}lookAt(t){return Rr.lookAt(t),Rr.updateMatrix(),this.applyMatrix4(Rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new xe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Te.setFromBufferAttribute(r),this.morphTargetsRelative?(le.addVectors(this.boundingBox.min,Te.min),this.boundingBox.expandByPoint(le),le.addVectors(this.boundingBox.max,Te.max),this.boundingBox.expandByPoint(le)):(this.boundingBox.expandByPoint(Te.min),this.boundingBox.expandByPoint(Te.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(t){const n=this.boundingSphere.center;if(Te.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Hi.setFromBufferAttribute(a),this.morphTargetsRelative?(le.addVectors(Te.min,Hi.min),Te.expandByPoint(le),le.addVectors(Te.max,Hi.max),Te.expandByPoint(le)):(Te.expandByPoint(Hi.min),Te.expandByPoint(Hi.max))}Te.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(le));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)le.fromBufferAttribute(a,l),c&&(fi.fromBufferAttribute(t,l),le.add(fi)),s=Math.max(s,n.distanceToSquared(le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let R=0;R<a;R++)l[R]=new H,h[R]=new H;const u=new H,p=new H,m=new H,v=new rt,g=new rt,f=new rt,d=new H,b=new H;function _(R,ot,tt){u.fromArray(s,R*3),p.fromArray(s,ot*3),m.fromArray(s,tt*3),v.fromArray(o,R*2),g.fromArray(o,ot*2),f.fromArray(o,tt*2),p.sub(u),m.sub(u),g.sub(v),f.sub(v);const V=1/(g.x*f.y-f.x*g.y);isFinite(V)&&(d.copy(p).multiplyScalar(f.y).addScaledVector(m,-g.y).multiplyScalar(V),b.copy(m).multiplyScalar(g.x).addScaledVector(p,-f.x).multiplyScalar(V),l[R].add(d),l[ot].add(d),l[tt].add(d),h[R].add(b),h[ot].add(b),h[tt].add(b))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let R=0,ot=x.length;R<ot;++R){const tt=x[R],V=tt.start,X=tt.count;for(let J=V,lt=V+X;J<lt;J+=3)_(n[J+0],n[J+1],n[J+2])}const E=new H,L=new H,D=new H,G=new H;function M(R){D.fromArray(r,R*3),G.copy(D);const ot=l[R];E.copy(ot),E.sub(D.multiplyScalar(D.dot(ot))).normalize(),L.crossVectors(G,ot);const V=L.dot(h[R])<0?-1:1;c[R*4]=E.x,c[R*4+1]=E.y,c[R*4+2]=E.z,c[R*4+3]=V}for(let R=0,ot=x.length;R<ot;++R){const tt=x[R],V=tt.start,X=tt.count;for(let J=V,lt=V+X;J<lt;J+=3)M(n[J+0]),M(n[J+1]),M(n[J+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new H,r=new H,o=new H,a=new H,c=new H,l=new H,h=new H,u=new H;if(t)for(let p=0,m=t.count;p<m;p+=3){const v=t.getX(p+0),g=t.getX(p+1),f=t.getX(p+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,f),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),a.add(h),c.add(h),l.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)le.fromBufferAttribute(t,e),le.normalize(),t.setXYZ(e,le.x,le.y,le.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,p=new l.constructor(c.length*h);let m=0,v=0;for(let g=0,f=c.length;g<f;g++){a.isInterleavedBufferAttribute?m=c[g]*a.data.stride+a.offset:m=c[g]*h;for(let d=0;d<h;d++)p[v++]=l[m++]}return new Le(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ue,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const p=l[h],m=t(p,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){const m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const go=new Kt,Cn=new aa,_s=new Ks,_o=new H,di=new H,pi=new H,mi=new H,Cr=new H,vs=new H,xs=new rt,Ms=new rt,ys=new rt,vo=new H,xo=new H,Mo=new H,Ss=new H,Es=new H;class ve extends he{constructor(t=new Ue,e=new $s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){vs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Cr.fromBufferAttribute(u,t),o?vs.addScaledVector(Cr,h):vs.addScaledVector(Cr.sub(e),h))}e.add(vs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(r),Cn.copy(t.ray).recast(t.near),!(_s.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(_s,_o)===null||Cn.origin.distanceToSquared(_o)>(t.far-t.near)**2))&&(go.copy(r).invert(),Cn.copy(t.ray).applyMatrix4(go),!(n.boundingBox!==null&&Cn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Cn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=p.length;v<g;v++){const f=p[v],d=o[f.materialIndex],b=Math.max(f.start,m.start),_=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let x=b,E=_;x<E;x+=3){const L=a.getX(x),D=a.getX(x+1),G=a.getX(x+2);s=Ts(this,d,t,n,l,h,u,L,D,G),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let f=v,d=g;f<d;f+=3){const b=a.getX(f),_=a.getX(f+1),x=a.getX(f+2);s=Ts(this,o,t,n,l,h,u,b,_,x),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,g=p.length;v<g;v++){const f=p[v],d=o[f.materialIndex],b=Math.max(f.start,m.start),_=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let x=b,E=_;x<E;x+=3){const L=x,D=x+1,G=x+2;s=Ts(this,d,t,n,l,h,u,L,D,G),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),g=Math.min(c.count,m.start+m.count);for(let f=v,d=g;f<d;f+=3){const b=f,_=f+1,x=f+2;s=Ts(this,o,t,n,l,h,u,b,_,x),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function Hh(i,t,e,n,s,r,o,a){let c;if(t.side===Me?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===un,a),c===null)return null;Es.copy(a),Es.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Es);return l<e.near||l>e.far?null:{distance:l,point:Es.clone(),object:i}}function Ts(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,di),i.getVertexPosition(c,pi),i.getVertexPosition(l,mi);const h=Hh(i,t,e,n,di,pi,mi,Ss);if(h){s&&(xs.fromBufferAttribute(s,a),Ms.fromBufferAttribute(s,c),ys.fromBufferAttribute(s,l),h.uv=ze.getInterpolation(Ss,di,pi,mi,xs,Ms,ys,new rt)),r&&(xs.fromBufferAttribute(r,a),Ms.fromBufferAttribute(r,c),ys.fromBufferAttribute(r,l),h.uv1=ze.getInterpolation(Ss,di,pi,mi,xs,Ms,ys,new rt),h.uv2=h.uv1),o&&(vo.fromBufferAttribute(o,a),xo.fromBufferAttribute(o,c),Mo.fromBufferAttribute(o,l),h.normal=ze.getInterpolation(Ss,di,pi,mi,vo,xo,Mo,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new H,materialIndex:0};ze.getNormal(di,pi,mi,u.normal),h.face=u}return h}class is extends Ue{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let p=0,m=0;v("z","y","x",-1,-1,n,e,t,o,r,0),v("z","y","x",1,-1,n,e,-t,o,r,1),v("x","z","y",1,1,t,n,e,s,o,2),v("x","z","y",1,-1,t,n,-e,s,o,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(u,2));function v(g,f,d,b,_,x,E,L,D,G,M){const R=x/D,ot=E/G,tt=x/2,V=E/2,X=L/2,J=D+1,lt=G+1;let q=0,z=0;const dt=new H;for(let at=0;at<lt;at++){const j=at*ot-V;for(let nt=0;nt<J;nt++){const yt=nt*R-tt;dt[g]=yt*b,dt[f]=j*_,dt[d]=X,l.push(dt.x,dt.y,dt.z),dt[g]=0,dt[f]=0,dt[d]=L>0?1:-1,h.push(dt.x,dt.y,dt.z),u.push(nt/D),u.push(1-at/G),q+=1}}for(let at=0;at<G;at++)for(let j=0;j<D;j++){const nt=p+j+J*at,yt=p+j+J*(at+1),F=p+(j+1)+J*(at+1),U=p+(j+1)+J*at;c.push(nt,yt,U),c.push(yt,F,U),z+=6}a.addGroup(m,z,M),m+=z,p+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ui(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ge(i){const t={};for(let e=0;e<i.length;e++){const n=Ui(i[e]);for(const s in n)t[s]=n[s]}return t}function Gh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function zl(i){return i.getRenderTarget()===null?i.outputColorSpace:Ze}const kh={clone:Ui,merge:ge};var Vh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends Ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vh,this.fragmentShader=Wh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ui(t.uniforms),this.uniformsGroups=Gh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Hl extends he{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pe extends Hl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Kr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gi=-90,_i=1;class Xh extends he{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const s=new Pe(gi,_i,t,e);s.layers=this.layers,this.add(s);const r=new Pe(gi,_i,t,e);r.layers=this.layers,this.add(r);const o=new Pe(gi,_i,t,e);o.layers=this.layers,this.add(o);const a=new Pe(gi,_i,t,e);a.layers=this.layers,this.add(a);const c=new Pe(gi,_i,t,e);c.layers=this.layers,this.add(c);const l=new Pe(gi,_i,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,a,c,l]=this.children,h=t.getRenderTarget(),u=t.toneMapping,p=t.xr.enabled;t.toneMapping=hn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,s),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Gl extends Ae{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ci,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qh extends Jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Xi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===qn?Bt:Yn),this.texture=new Gl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ce}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new is(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Me,blending:yn});r.uniforms.tEquirect.value=e;const o=new ve(s,r),a=e.minFilter;return e.minFilter===Ki&&(e.minFilter=Ce),new Xh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Pr=new H,Yh=new H,jh=new Ot;class Dn{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Pr.subVectors(n,e).cross(Yh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Pr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||jh.getNormalMatrix(t),s=this.coplanarPoint(Pr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new Ks,bs=new H;class la{constructor(t=new Dn,e=new Dn,n=new Dn,s=new Dn,r=new Dn,o=new Dn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=cn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],p=s[7],m=s[8],v=s[9],g=s[10],f=s[11],d=s[12],b=s[13],_=s[14],x=s[15];if(n[0].setComponents(c-r,p-l,f-m,x-d).normalize(),n[1].setComponents(c+r,p+l,f+m,x+d).normalize(),n[2].setComponents(c+o,p+h,f+v,x+b).normalize(),n[3].setComponents(c-o,p-h,f-v,x-b).normalize(),n[4].setComponents(c-a,p-u,f-g,x-_).normalize(),e===cn)n[5].setComponents(c+a,p+u,f+g,x+_).normalize();else if(e===Gs)n[5].setComponents(a,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(t){return Pn.center.set(0,0,0),Pn.radius=.7071067811865476,Pn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(bs.x=s.normal.x>0?t.max.x:t.min.x,bs.y=s.normal.y>0?t.max.y:t.min.y,bs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(bs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zh(i,t){const e=t.isWebGL2,n=new WeakMap;function s(l,h){const u=l.array,p=l.usage,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,u,p),l.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function r(l,h,u){const p=h.array,m=h.updateRange;i.bindBuffer(u,l),m.count===-1?i.bufferSubData(u,0,p):(e?i.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const p=n.get(l);(!p||p.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u===void 0?n.set(l,s(l,h)):u.version<l.version&&(r(u.buffer,l,h),u.version=l.version)}return{get:o,remove:a,update:c}}class Tn extends Ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,p=e/c,m=[],v=[],g=[],f=[];for(let d=0;d<h;d++){const b=d*p-o;for(let _=0;_<l;_++){const x=_*u-r;v.push(x,-b,0),g.push(0,0,1),f.push(_/a),f.push(1-d/c)}}for(let d=0;d<c;d++)for(let b=0;b<a;b++){const _=b+l*d,x=b+l*(d+1),E=b+1+l*(d+1),L=b+1+l*d;m.push(_,x,L),m.push(x,E,L)}this.setIndex(m),this.setAttribute("position",new xe(v,3)),this.setAttribute("normal",new xe(g,3)),this.setAttribute("uv",new xe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Kh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jh=`#ifdef USE_ALPHAHASH
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
#endif`,$h=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,eu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,su=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ru=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,au=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ou=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,lu=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_u=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
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
} // validated`,vu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,xu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Su=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tu="gl_FragColor = linearToOutputTexel( gl_FragColor );",bu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Au=`#ifdef USE_ENVMAP
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
#endif`,wu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ru=`#ifdef USE_ENVMAP
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
#endif`,Cu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pu=`#ifdef USE_ENVMAP
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
#endif`,Lu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Du=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Iu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nu=`#ifdef USE_GRADIENTMAP
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
}`,Ou=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Gu=`#ifdef USE_ENVMAP
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
#endif`,ku=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Yu=`struct PhysicalMaterial {
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,ju=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ku=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ju=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$u=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ef=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,nf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rf=`#if defined( USE_POINTS_UV )
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
#endif`,af=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,of=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cf=`#ifdef USE_MORPHNORMALS
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
#endif`,hf=`#ifdef USE_MORPHTARGETS
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
#endif`,uf=`#ifdef USE_MORPHTARGETS
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
#endif`,ff=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,df=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_f=`#ifdef USE_NORMALMAP
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
#endif`,vf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,xf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ef=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Af=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Df=`float getShadowMask() {
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
}`,If=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Of=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ff=`#ifdef USE_SKINNING
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
#endif`,Bf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kf=`#ifdef USE_TRANSMISSION
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
#endif`,Vf=`#ifdef USE_TRANSMISSION
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
#endif`,Wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,td=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
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
}`,ed=`#if DEPTH_PACKING == 3200
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
}`,nd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,id=`#define DISTANCE
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
}`,sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ad=`uniform float scale;
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
}`,od=`uniform vec3 diffuse;
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
}`,ld=`#include <common>
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
}`,cd=`uniform vec3 diffuse;
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
}`,hd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,ud=`#define LAMBERT
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
}`,fd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,dd=`#define MATCAP
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
}`,pd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,md=`#define NORMAL
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
}`,gd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,_d=`#define PHONG
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
}`,vd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
}`,xd=`#define STANDARD
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Md=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
}`,yd=`#define TOON
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
}`,Sd=`uniform float size;
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
}`,Ed=`uniform vec3 diffuse;
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
}`,Td=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
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
}`,bd=`uniform vec3 color;
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
}`,Ad=`uniform float rotation;
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
}`,wd=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:Kh,alphahash_pars_fragment:Jh,alphamap_fragment:$h,alphamap_pars_fragment:Qh,alphatest_fragment:tu,alphatest_pars_fragment:eu,aomap_fragment:nu,aomap_pars_fragment:iu,begin_vertex:su,beginnormal_vertex:ru,bsdfs:au,iridescence_fragment:ou,bumpmap_pars_fragment:lu,clipping_planes_fragment:cu,clipping_planes_pars_fragment:hu,clipping_planes_pars_vertex:uu,clipping_planes_vertex:fu,color_fragment:du,color_pars_fragment:pu,color_pars_vertex:mu,color_vertex:gu,common:_u,cube_uv_reflection_fragment:vu,defaultnormal_vertex:xu,displacementmap_pars_vertex:Mu,displacementmap_vertex:yu,emissivemap_fragment:Su,emissivemap_pars_fragment:Eu,colorspace_fragment:Tu,colorspace_pars_fragment:bu,envmap_fragment:Au,envmap_common_pars_fragment:wu,envmap_pars_fragment:Ru,envmap_pars_vertex:Cu,envmap_physical_pars_fragment:Gu,envmap_vertex:Pu,fog_vertex:Lu,fog_pars_vertex:Uu,fog_fragment:Du,fog_pars_fragment:Iu,gradientmap_pars_fragment:Nu,lightmap_fragment:Ou,lightmap_pars_fragment:Fu,lights_lambert_fragment:Bu,lights_lambert_pars_fragment:zu,lights_pars_begin:Hu,lights_toon_fragment:ku,lights_toon_pars_fragment:Vu,lights_phong_fragment:Wu,lights_phong_pars_fragment:Xu,lights_physical_fragment:qu,lights_physical_pars_fragment:Yu,lights_fragment_begin:ju,lights_fragment_maps:Zu,lights_fragment_end:Ku,logdepthbuf_fragment:Ju,logdepthbuf_pars_fragment:$u,logdepthbuf_pars_vertex:Qu,logdepthbuf_vertex:tf,map_fragment:ef,map_pars_fragment:nf,map_particle_fragment:sf,map_particle_pars_fragment:rf,metalnessmap_fragment:af,metalnessmap_pars_fragment:of,morphcolor_vertex:lf,morphnormal_vertex:cf,morphtarget_pars_vertex:hf,morphtarget_vertex:uf,normal_fragment_begin:ff,normal_fragment_maps:df,normal_pars_fragment:pf,normal_pars_vertex:mf,normal_vertex:gf,normalmap_pars_fragment:_f,clearcoat_normal_fragment_begin:vf,clearcoat_normal_fragment_maps:xf,clearcoat_pars_fragment:Mf,iridescence_pars_fragment:yf,opaque_fragment:Sf,packing:Ef,premultiplied_alpha_fragment:Tf,project_vertex:bf,dithering_fragment:Af,dithering_pars_fragment:wf,roughnessmap_fragment:Rf,roughnessmap_pars_fragment:Cf,shadowmap_pars_fragment:Pf,shadowmap_pars_vertex:Lf,shadowmap_vertex:Uf,shadowmask_pars_fragment:Df,skinbase_vertex:If,skinning_pars_vertex:Nf,skinning_vertex:Of,skinnormal_vertex:Ff,specularmap_fragment:Bf,specularmap_pars_fragment:zf,tonemapping_fragment:Hf,tonemapping_pars_fragment:Gf,transmission_fragment:kf,transmission_pars_fragment:Vf,uv_pars_fragment:Wf,uv_pars_vertex:Xf,uv_vertex:qf,worldpos_vertex:Yf,background_vert:jf,background_frag:Zf,backgroundCube_vert:Kf,backgroundCube_frag:Jf,cube_vert:$f,cube_frag:Qf,depth_vert:td,depth_frag:ed,distanceRGBA_vert:nd,distanceRGBA_frag:id,equirect_vert:sd,equirect_frag:rd,linedashed_vert:ad,linedashed_frag:od,meshbasic_vert:ld,meshbasic_frag:cd,meshlambert_vert:hd,meshlambert_frag:ud,meshmatcap_vert:fd,meshmatcap_frag:dd,meshnormal_vert:pd,meshnormal_frag:md,meshphong_vert:gd,meshphong_frag:_d,meshphysical_vert:vd,meshphysical_frag:xd,meshtoon_vert:Md,meshtoon_frag:yd,points_vert:Sd,points_frag:Ed,shadow_vert:Td,shadow_frag:bd,sprite_vert:Ad,sprite_frag:wd},St={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Ye={basic:{uniforms:ge([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:ge([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:ge([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:ge([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:ge([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:ge([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:ge([St.points,St.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:ge([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:ge([St.common,St.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:ge([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:ge([St.sprite,St.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:ge([St.common,St.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:ge([St.lights,St.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Ye.physical={uniforms:ge([Ye.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const As={r:0,b:0,g:0};function Rd(i,t,e,n,s,r,o){const a=new Wt(0);let c=r===!0?0:1,l,h,u=null,p=0,m=null;function v(f,d){let b=!1,_=d.isScene===!0?d.background:null;switch(_&&_.isTexture&&(_=(d.backgroundBlurriness>0?e:t).get(_)),_===null?g(a,c):_&&_.isColor&&(g(_,1),b=!0),i.xr.getEnvironmentBlendMode()){case"opaque":b=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),b=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),b=!0;break}(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Zs)?(h===void 0&&(h=new ve(new is(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Ui(Ye.backgroundCube.uniforms),vertexShader:Ye.backgroundCube.vertexShader,fragmentShader:Ye.backgroundCube.fragmentShader,side:Me,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,D,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=_.colorSpace!==Bt,(u!==_||p!==_.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,p=_.version,m=i.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ve(new Tn(2,2),new $n({name:"BackgroundMaterial",uniforms:Ui(Ye.background.uniforms),vertexShader:Ye.background.vertexShader,fragmentShader:Ye.background.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=_.colorSpace!==Bt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||p!==_.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,p=_.version,m=i.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function g(f,d){f.getRGB(As,zl(i)),n.buffers.color.setClear(As.r,As.g,As.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(f,d=1){a.set(f),c=d,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,g(a,c)},render:v}}function Cd(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=f(null);let l=c,h=!1;function u(X,J,lt,q,z){let dt=!1;if(o){const at=g(q,lt,J);l!==at&&(l=at,m(l.object)),dt=d(X,q,lt,z),dt&&b(X,q,lt,z)}else{const at=J.wireframe===!0;(l.geometry!==q.id||l.program!==lt.id||l.wireframe!==at)&&(l.geometry=q.id,l.program=lt.id,l.wireframe=at,dt=!0)}z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(dt||h)&&(h=!1,G(X,J,lt,q),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(X){return n.isWebGL2?i.bindVertexArray(X):r.bindVertexArrayOES(X)}function v(X){return n.isWebGL2?i.deleteVertexArray(X):r.deleteVertexArrayOES(X)}function g(X,J,lt){const q=lt.wireframe===!0;let z=a[X.id];z===void 0&&(z={},a[X.id]=z);let dt=z[J.id];dt===void 0&&(dt={},z[J.id]=dt);let at=dt[q];return at===void 0&&(at=f(p()),dt[q]=at),at}function f(X){const J=[],lt=[],q=[];for(let z=0;z<s;z++)J[z]=0,lt[z]=0,q[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:lt,attributeDivisors:q,object:X,attributes:{},index:null}}function d(X,J,lt,q){const z=l.attributes,dt=J.attributes;let at=0;const j=lt.getAttributes();for(const nt in j)if(j[nt].location>=0){const F=z[nt];let U=dt[nt];if(U===void 0&&(nt==="instanceMatrix"&&X.instanceMatrix&&(U=X.instanceMatrix),nt==="instanceColor"&&X.instanceColor&&(U=X.instanceColor)),F===void 0||F.attribute!==U||U&&F.data!==U.data)return!0;at++}return l.attributesNum!==at||l.index!==q}function b(X,J,lt,q){const z={},dt=J.attributes;let at=0;const j=lt.getAttributes();for(const nt in j)if(j[nt].location>=0){let F=dt[nt];F===void 0&&(nt==="instanceMatrix"&&X.instanceMatrix&&(F=X.instanceMatrix),nt==="instanceColor"&&X.instanceColor&&(F=X.instanceColor));const U={};U.attribute=F,F&&F.data&&(U.data=F.data),z[nt]=U,at++}l.attributes=z,l.attributesNum=at,l.index=q}function _(){const X=l.newAttributes;for(let J=0,lt=X.length;J<lt;J++)X[J]=0}function x(X){E(X,0)}function E(X,J){const lt=l.newAttributes,q=l.enabledAttributes,z=l.attributeDivisors;lt[X]=1,q[X]===0&&(i.enableVertexAttribArray(X),q[X]=1),z[X]!==J&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](X,J),z[X]=J)}function L(){const X=l.newAttributes,J=l.enabledAttributes;for(let lt=0,q=J.length;lt<q;lt++)J[lt]!==X[lt]&&(i.disableVertexAttribArray(lt),J[lt]=0)}function D(X,J,lt,q,z,dt,at){at===!0?i.vertexAttribIPointer(X,J,lt,z,dt):i.vertexAttribPointer(X,J,lt,q,z,dt)}function G(X,J,lt,q){if(n.isWebGL2===!1&&(X.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const z=q.attributes,dt=lt.getAttributes(),at=J.defaultAttributeValues;for(const j in dt){const nt=dt[j];if(nt.location>=0){let yt=z[j];if(yt===void 0&&(j==="instanceMatrix"&&X.instanceMatrix&&(yt=X.instanceMatrix),j==="instanceColor"&&X.instanceColor&&(yt=X.instanceColor)),yt!==void 0){const F=yt.normalized,U=yt.itemSize,T=e.get(yt);if(T===void 0)continue;const S=T.buffer,Z=T.type,mt=T.bytesPerElement,$=n.isWebGL2===!0&&(Z===i.INT||Z===i.UNSIGNED_INT||yt.gpuType===El);if(yt.isInterleavedBufferAttribute){const ht=yt.data,A=ht.stride,Q=yt.offset;if(ht.isInstancedInterleavedBuffer){for(let O=0;O<nt.locationSize;O++)E(nt.location+O,ht.meshPerAttribute);X.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let O=0;O<nt.locationSize;O++)x(nt.location+O);i.bindBuffer(i.ARRAY_BUFFER,S);for(let O=0;O<nt.locationSize;O++)D(nt.location+O,U/nt.locationSize,Z,F,A*mt,(Q+U/nt.locationSize*O)*mt,$)}else{if(yt.isInstancedBufferAttribute){for(let ht=0;ht<nt.locationSize;ht++)E(nt.location+ht,yt.meshPerAttribute);X.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ht=0;ht<nt.locationSize;ht++)x(nt.location+ht);i.bindBuffer(i.ARRAY_BUFFER,S);for(let ht=0;ht<nt.locationSize;ht++)D(nt.location+ht,U/nt.locationSize,Z,F,U*mt,U/nt.locationSize*ht*mt,$)}}else if(at!==void 0){const F=at[j];if(F!==void 0)switch(F.length){case 2:i.vertexAttrib2fv(nt.location,F);break;case 3:i.vertexAttrib3fv(nt.location,F);break;case 4:i.vertexAttrib4fv(nt.location,F);break;default:i.vertexAttrib1fv(nt.location,F)}}}}L()}function M(){tt();for(const X in a){const J=a[X];for(const lt in J){const q=J[lt];for(const z in q)v(q[z].object),delete q[z];delete J[lt]}delete a[X]}}function R(X){if(a[X.id]===void 0)return;const J=a[X.id];for(const lt in J){const q=J[lt];for(const z in q)v(q[z].object),delete q[z];delete J[lt]}delete a[X.id]}function ot(X){for(const J in a){const lt=a[J];if(lt[X.id]===void 0)continue;const q=lt[X.id];for(const z in q)v(q[z].object),delete q[z];delete lt[X.id]}}function tt(){V(),h=!0,l!==c&&(l=c,m(l.object))}function V(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:tt,resetDefaultState:V,dispose:M,releaseStatesOfGeometry:R,releaseStatesOfProgram:ot,initAttributes:_,enableAttribute:x,disableUnusedAttributes:L}}function Pd(i,t,e,n){const s=n.isWebGL2;let r;function o(l){r=l}function a(l,h){i.drawArrays(r,l,h),e.update(h,r,1)}function c(l,h,u){if(u===0)return;let p,m;if(s)p=i,m="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,l,h,u),e.update(h,r,u)}this.setMode=o,this.render=a,this.renderInstances=c}function Ld(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,x=o||t.has("OES_texture_float"),E=_&&x,L=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:f,maxVaryings:d,maxFragmentUniforms:b,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:E,maxSamples:L}}function Ud(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Dn,a=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||n!==0||s;return s=p,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,m){const v=u.clippingPlanes,g=u.clipIntersection,f=u.clipShadows,d=i.get(u);if(!s||v===null||v.length===0||r&&!f)r?h(null):l();else{const b=r?0:n,_=b*4;let x=d.clippingState||null;c.value=x,x=h(v,p,_,m);for(let E=0;E!==_;++E)x[E]=e[E];d.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,m,v){const g=u!==null?u.length:0;let f=null;if(g!==0){if(f=c.value,v!==!0||f===null){const d=m+g*4,b=p.matrixWorldInverse;a.getNormalMatrix(b),(f===null||f.length<d)&&(f=new Float32Array(d));for(let _=0,x=m;_!==g;++_,x+=4)o.copy(u[_]).applyMatrix4(b,a),o.normal.toArray(f,x),f[x+3]=o.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,f}}function Dd(i){let t=new WeakMap;function e(o,a){return a===Xr?o.mapping=Ci:a===qr&&(o.mapping=Pi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Xr||a===qr)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new qh(c.height/2);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Vl extends Hl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ei=4,yo=[.125,.215,.35,.446,.526,.582],Nn=20,Lr=new Vl,So=new Wt;let Ur=null;const In=(1+Math.sqrt(5))/2,vi=1/In,Eo=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,In,vi),new H(0,In,-vi),new H(vi,0,In),new H(-vi,0,In),new H(In,vi,0),new H(-In,vi,0)];class To{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ur=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ao(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ur),t.scissorTest=!1,ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ci||t.mapping===Pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ur=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ce,minFilter:Ce,generateMipmaps:!1,type:Ji,format:Ge,colorSpace:Ze,depthBuffer:!1},s=bo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Id(r)),this._blurMaterial=Nd(r,t,e)}return s}_compileMaterial(t){const e=new ve(this._lodPlanes[0],t);this._renderer.compile(e,Lr)}_sceneToCubeUV(t,e,n,s){const a=new Pe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(So),h.toneMapping=hn,h.autoClear=!1;const m=new $s({name:"PMREM.Background",side:Me,depthWrite:!1,depthTest:!1}),v=new ve(new is,m);let g=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,g=!0):(m.color.copy(So),g=!0);for(let d=0;d<6;d++){const b=d%3;b===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):b===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const _=this._cubeSize;ws(s,b*_,d>2?_:0,_,_),h.setRenderTarget(s),g&&h.render(v,a),h.render(t,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=p,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ci||t.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ao());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ve(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ws(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Lr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Eo[(s-1)%Eo.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ve(this._lodPlanes[s],l),p=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Nn-1),g=r/v,f=isFinite(r)?1+Math.floor(h*g):Nn;f>Nn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Nn}`);const d=[];let b=0;for(let D=0;D<Nn;++D){const G=D/g,M=Math.exp(-G*G/2);d.push(M),D===0?b+=M:D<f&&(b+=2*M)}for(let D=0;D<d.length;D++)d[D]=d[D]/b;p.envMap.value=t.texture,p.samples.value=f,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:_}=this;p.dTheta.value=v,p.mipInt.value=_-n;const x=this._sizeLods[s],E=3*x*(s>_-Ei?s-_+Ei:0),L=4*(this._cubeSize-x);ws(e,E,L,3*x,2*x),c.setRenderTarget(e),c.render(u,Lr)}}function Id(i){const t=[],e=[],n=[];let s=i;const r=i-Ei+1+yo.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ei?c=yo[o-i+Ei-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,v=6,g=3,f=2,d=1,b=new Float32Array(g*v*m),_=new Float32Array(f*v*m),x=new Float32Array(d*v*m);for(let L=0;L<m;L++){const D=L%3*2/3-1,G=L>2?0:-1,M=[D,G,0,D+2/3,G,0,D+2/3,G+1,0,D,G,0,D+2/3,G+1,0,D,G+1,0];b.set(M,g*v*L),_.set(p,f*v*L);const R=[L,L,L,L,L,L];x.set(R,d*v*L)}const E=new Ue;E.setAttribute("position",new Le(b,g)),E.setAttribute("uv",new Le(_,f)),E.setAttribute("faceIndex",new Le(x,d)),t.push(E),s>Ei&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function bo(i,t,e){const n=new Jn(i,t,e);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ws(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Nd(i,t,e){const n=new Float32Array(Nn),s=new H(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ca(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Ao(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ca(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function wo(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function ca(){return`

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
	`}function Od(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Xr||c===qr,h=c===Ci||c===Pi;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new To(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new To(i));const p=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Fd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Bd(i,t,e,n){const s={},r=new WeakMap;function o(u){const p=u.target;p.index!==null&&t.remove(p.index);for(const v in p.attributes)t.remove(p.attributes[v]);for(const v in p.morphAttributes){const g=p.morphAttributes[v];for(let f=0,d=g.length;f<d;f++)t.remove(g[f])}p.removeEventListener("dispose",o),delete s[p.id];const m=r.get(p);m&&(t.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function c(u){const p=u.attributes;for(const v in p)t.update(p[v],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const v in m){const g=m[v];for(let f=0,d=g.length;f<d;f++)t.update(g[f],i.ARRAY_BUFFER)}}function l(u){const p=[],m=u.index,v=u.attributes.position;let g=0;if(m!==null){const b=m.array;g=m.version;for(let _=0,x=b.length;_<x;_+=3){const E=b[_+0],L=b[_+1],D=b[_+2];p.push(E,L,L,D,D,E)}}else{const b=v.array;g=v.version;for(let _=0,x=b.length/3-1;_<x;_+=3){const E=_+0,L=_+1,D=_+2;p.push(E,L,L,D,D,E)}}const f=new(Ul(p)?Bl:Fl)(p,1);f.version=g;const d=r.get(u);d&&t.remove(d),r.set(u,f)}function h(u){const p=r.get(u);if(p){const m=u.index;m!==null&&p.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function zd(i,t,e,n){const s=n.isWebGL2;let r;function o(p){r=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function h(p,m){i.drawElements(r,m,a,p*c),e.update(m,r,1)}function u(p,m,v){if(v===0)return;let g,f;if(s)g=i,f="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[f](r,m,a,p*c,v),e.update(m,r,v)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u}function Hd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Gd(i,t){return i[0]-t[0]}function kd(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Vd(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,o=new ce,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){const p=l.morphTargetInfluences;if(t.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let f=r.get(h);if(f===void 0||f.count!==g){let J=function(){V.dispose(),r.delete(h),h.removeEventListener("dispose",J)};var m=J;f!==void 0&&f.texture.dispose();const _=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],G=h.morphAttributes.color||[];let M=0;_===!0&&(M=1),x===!0&&(M=2),E===!0&&(M=3);let R=h.attributes.position.count*M,ot=1;R>t.maxTextureSize&&(ot=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const tt=new Float32Array(R*ot*4*g),V=new Nl(tt,R,ot,g);V.type=_n,V.needsUpdate=!0;const X=M*4;for(let lt=0;lt<g;lt++){const q=L[lt],z=D[lt],dt=G[lt],at=R*ot*4*lt;for(let j=0;j<q.count;j++){const nt=j*X;_===!0&&(o.fromBufferAttribute(q,j),tt[at+nt+0]=o.x,tt[at+nt+1]=o.y,tt[at+nt+2]=o.z,tt[at+nt+3]=0),x===!0&&(o.fromBufferAttribute(z,j),tt[at+nt+4]=o.x,tt[at+nt+5]=o.y,tt[at+nt+6]=o.z,tt[at+nt+7]=0),E===!0&&(o.fromBufferAttribute(dt,j),tt[at+nt+8]=o.x,tt[at+nt+9]=o.y,tt[at+nt+10]=o.z,tt[at+nt+11]=dt.itemSize===4?o.w:1)}}f={count:g,texture:V,size:new rt(R,ot)},r.set(h,f),h.addEventListener("dispose",J)}let d=0;for(let _=0;_<p.length;_++)d+=p[_];const b=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",b),u.getUniforms().setValue(i,"morphTargetInfluences",p),u.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}else{const v=p===void 0?0:p.length;let g=n[h.id];if(g===void 0||g.length!==v){g=[];for(let x=0;x<v;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<v;x++){const E=g[x];E[0]=x,E[1]=p[x]}g.sort(kd);for(let x=0;x<8;x++)x<v&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Gd);const f=h.morphAttributes.position,d=h.morphAttributes.normal;let b=0;for(let x=0;x<8;x++){const E=a[x],L=E[0],D=E[1];L!==Number.MAX_SAFE_INTEGER&&D?(f&&h.getAttribute("morphTarget"+x)!==f[L]&&h.setAttribute("morphTarget"+x,f[L]),d&&h.getAttribute("morphNormal"+x)!==d[L]&&h.setAttribute("morphNormal"+x,d[L]),s[x]=D,b+=D):(f&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),d&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}const _=h.morphTargetsRelative?1:1-b;u.getUniforms().setValue(i,"morphTargetBaseInfluence",_),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Wd(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const Wl=new Ae,Xl=new Nl,ql=new Ph,Yl=new Gl,Ro=[],Co=[],Po=new Float32Array(16),Lo=new Float32Array(9),Uo=new Float32Array(4);function Ni(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ro[s];if(r===void 0&&(r=new Float32Array(s),Ro[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Qs(i,t){let e=Co[t];e===void 0&&(e=new Int32Array(t),Co[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Xd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;i.uniform2fv(this.addr,t),re(e,t)}}function Yd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(se(e,t))return;i.uniform3fv(this.addr,t),re(e,t)}}function jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;i.uniform4fv(this.addr,t),re(e,t)}}function Zd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),re(e,t)}else{if(se(e,n))return;Uo.set(n),i.uniformMatrix2fv(this.addr,!1,Uo),re(e,n)}}function Kd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),re(e,t)}else{if(se(e,n))return;Lo.set(n),i.uniformMatrix3fv(this.addr,!1,Lo),re(e,n)}}function Jd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),re(e,t)}else{if(se(e,n))return;Po.set(n),i.uniformMatrix4fv(this.addr,!1,Po),re(e,n)}}function $d(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;i.uniform2iv(this.addr,t),re(e,t)}}function tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(se(e,t))return;i.uniform3iv(this.addr,t),re(e,t)}}function ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;i.uniform4iv(this.addr,t),re(e,t)}}function np(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;i.uniform2uiv(this.addr,t),re(e,t)}}function sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(se(e,t))return;i.uniform3uiv(this.addr,t),re(e,t)}}function rp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;i.uniform4uiv(this.addr,t),re(e,t)}}function ap(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2D(t||Wl,s)}function op(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ql,s)}function lp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Yl,s)}function cp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Xl,s)}function hp(i){switch(i){case 5126:return Xd;case 35664:return qd;case 35665:return Yd;case 35666:return jd;case 35674:return Zd;case 35675:return Kd;case 35676:return Jd;case 5124:case 35670:return $d;case 35667:case 35671:return Qd;case 35668:case 35672:return tp;case 35669:case 35673:return ep;case 5125:return np;case 36294:return ip;case 36295:return sp;case 36296:return rp;case 35678:case 36198:case 36298:case 36306:case 35682:return ap;case 35679:case 36299:case 36307:return op;case 35680:case 36300:case 36308:case 36293:return lp;case 36289:case 36303:case 36311:case 36292:return cp}}function up(i,t){i.uniform1fv(this.addr,t)}function fp(i,t){const e=Ni(t,this.size,2);i.uniform2fv(this.addr,e)}function dp(i,t){const e=Ni(t,this.size,3);i.uniform3fv(this.addr,e)}function pp(i,t){const e=Ni(t,this.size,4);i.uniform4fv(this.addr,e)}function mp(i,t){const e=Ni(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function gp(i,t){const e=Ni(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _p(i,t){const e=Ni(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function vp(i,t){i.uniform1iv(this.addr,t)}function xp(i,t){i.uniform2iv(this.addr,t)}function Mp(i,t){i.uniform3iv(this.addr,t)}function yp(i,t){i.uniform4iv(this.addr,t)}function Sp(i,t){i.uniform1uiv(this.addr,t)}function Ep(i,t){i.uniform2uiv(this.addr,t)}function Tp(i,t){i.uniform3uiv(this.addr,t)}function bp(i,t){i.uniform4uiv(this.addr,t)}function Ap(i,t,e){const n=this.cache,s=t.length,r=Qs(e,s);se(n,r)||(i.uniform1iv(this.addr,r),re(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Wl,r[o])}function wp(i,t,e){const n=this.cache,s=t.length,r=Qs(e,s);se(n,r)||(i.uniform1iv(this.addr,r),re(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ql,r[o])}function Rp(i,t,e){const n=this.cache,s=t.length,r=Qs(e,s);se(n,r)||(i.uniform1iv(this.addr,r),re(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Yl,r[o])}function Cp(i,t,e){const n=this.cache,s=t.length,r=Qs(e,s);se(n,r)||(i.uniform1iv(this.addr,r),re(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Xl,r[o])}function Pp(i){switch(i){case 5126:return up;case 35664:return fp;case 35665:return dp;case 35666:return pp;case 35674:return mp;case 35675:return gp;case 35676:return _p;case 5124:case 35670:return vp;case 35667:case 35671:return xp;case 35668:case 35672:return Mp;case 35669:case 35673:return yp;case 5125:return Sp;case 36294:return Ep;case 36295:return Tp;case 36296:return bp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ap;case 35679:case 36299:case 36307:return wp;case 35680:case 36300:case 36308:case 36293:return Rp;case 36289:case 36303:case 36311:case 36292:return Cp}}class Lp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=hp(e.type)}}class Up{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Pp(e.type)}}class Dp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Dr=/(\w+)(\])?(\[|\.)?/g;function Do(i,t){i.seq.push(t),i.map[t.id]=t}function Ip(i,t,e){const n=i.name,s=n.length;for(Dr.lastIndex=0;;){const r=Dr.exec(n),o=Dr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Do(e,l===void 0?new Lp(a,i,t):new Up(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Dp(a),Do(e,u)),e=u}}}class Is{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Ip(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Io(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}let Np=0;function Op(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Fp(i){switch(i){case Ze:return["Linear","( value )"];case Bt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function No(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Op(i.getShaderSource(t),o)}else return s}function Bp(i,t){const e=Fp(t);return"vec4 "+i+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function zp(i,t){let e;switch(t){case jc:e="Linear";break;case Zc:e="Reinhard";break;case Kc:e="OptimizedCineon";break;case Jc:e="ACESFilmic";break;case $c:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Hp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vi).join(`
`)}function Gp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Vi(i){return i!==""}function Oo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Vp=/^[ \t]*#include +<([\w\d./]+)>/gm;function $r(i){return i.replace(Vp,Xp)}const Wp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Xp(i,t){let e=Ht[t];if(e===void 0){const n=Wp.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return $r(e)}const qp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bo(i){return i.replace(qp,Yp)}function Yp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zo(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function jp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ac?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===on&&(t="SHADOWMAP_TYPE_VSM"),t}function Zp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ci:case Pi:t="ENVMAP_TYPE_CUBE";break;case Zs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Kp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Pi:t="ENVMAP_MODE_REFRACTION";break}return t}function Jp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yl:t="ENVMAP_BLENDING_MULTIPLY";break;case qc:t="ENVMAP_BLENDING_MIX";break;case Yc:t="ENVMAP_BLENDING_ADD";break}return t}function $p(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Qp(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=jp(e),l=Zp(e),h=Kp(e),u=Jp(e),p=$p(e),m=e.isWebGL2?"":Hp(e),v=Gp(r),g=s.createProgram();let f,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Vi).join(`
`),f.length>0&&(f+=`
`),d=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Vi).join(`
`),d.length>0&&(d+=`
`)):(f=[zo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vi).join(`
`),d=[m,zo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hn?"#define TONE_MAPPING":"",e.toneMapping!==hn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==hn?zp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Bp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vi).join(`
`)),o=$r(o),o=Oo(o,e),o=Fo(o,e),a=$r(a),a=Oo(a,e),a=Fo(a,e),o=Bo(o),a=Bo(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",e.glslVersion===io?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===io?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=b+f+o,x=b+d+a,E=Io(s,s.VERTEX_SHADER,_),L=Io(s,s.FRAGMENT_SHADER,x);if(s.attachShader(g,E),s.attachShader(g,L),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g),i.debug.checkShaderErrors){const M=s.getProgramInfoLog(g).trim(),R=s.getShaderInfoLog(E).trim(),ot=s.getShaderInfoLog(L).trim();let tt=!0,V=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,E,L);else{const X=No(s,E,"vertex"),J=No(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+X+`
`+J)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(R===""||ot==="")&&(V=!1);V&&(this.diagnostics={runnable:tt,programLog:M,vertexShader:{log:R,prefix:f},fragmentShader:{log:ot,prefix:d}})}s.deleteShader(E),s.deleteShader(L);let D;this.getUniforms=function(){return D===void 0&&(D=new Is(s,g)),D};let G;return this.getAttributes=function(){return G===void 0&&(G=kp(s,g)),G},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Np++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=L,this}let tm=0;class em{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new nm(t),e.set(t,n)),n}}class nm{constructor(t){this.id=tm++,this.code=t,this.usedTimes=0}}function im(i,t,e,n,s,r,o){const a=new oa,c=new em,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function f(M,R,ot,tt,V){const X=tt.fog,J=V.geometry,lt=M.isMeshStandardMaterial?tt.environment:null,q=(M.isMeshStandardMaterial?e:t).get(M.envMap||lt),z=q&&q.mapping===Zs?q.image.height:null,dt=v[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const at=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,j=at!==void 0?at.length:0;let nt=0;J.morphAttributes.position!==void 0&&(nt=1),J.morphAttributes.normal!==void 0&&(nt=2),J.morphAttributes.color!==void 0&&(nt=3);let yt,F,U,T;if(dt){const Ve=Ye[dt];yt=Ve.vertexShader,F=Ve.fragmentShader}else yt=M.vertexShader,F=M.fragmentShader,c.update(M),U=c.getVertexShaderID(M),T=c.getFragmentShaderID(M);const S=i.getRenderTarget(),Z=V.isInstancedMesh===!0,mt=!!M.map,$=!!M.matcap,ht=!!q,A=!!M.aoMap,Q=!!M.lightMap,O=!!M.bumpMap,k=!!M.normalMap,W=!!M.displacementMap,ft=!!M.emissiveMap,N=!!M.metalnessMap,w=!!M.roughnessMap,gt=M.anisotropy>0,Tt=M.clearcoat>0,Gt=M.iridescence>0,P=M.sheen>0,y=M.transmission>0,it=gt&&!!M.anisotropyMap,vt=Tt&&!!M.clearcoatMap,xt=Tt&&!!M.clearcoatNormalMap,I=Tt&&!!M.clearcoatRoughnessMap,pt=Gt&&!!M.iridescenceMap,_t=Gt&&!!M.iridescenceThicknessMap,et=P&&!!M.sheenColorMap,At=P&&!!M.sheenRoughnessMap,Lt=!!M.specularMap,Pt=!!M.specularColorMap,Ct=!!M.specularIntensityMap,wt=y&&!!M.transmissionMap,Dt=y&&!!M.thicknessMap,Vt=!!M.gradientMap,B=!!M.alphaMap,Et=M.alphaTest>0,st=!!M.alphaHash,Mt=!!M.extensions,bt=!!J.attributes.uv1,qt=!!J.attributes.uv2,jt=!!J.attributes.uv3;return{isWebGL2:h,shaderID:dt,shaderType:M.type,shaderName:M.name,vertexShader:yt,fragmentShader:F,defines:M.defines,customVertexShaderID:U,customFragmentShaderID:T,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:Z,instancingColor:Z&&V.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:S===null?i.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Ze,map:mt,matcap:$,envMap:ht,envMapMode:ht&&q.mapping,envMapCubeUVHeight:z,aoMap:A,lightMap:Q,bumpMap:O,normalMap:k,displacementMap:p&&W,emissiveMap:ft,normalMapObjectSpace:k&&M.normalMapType===uh,normalMapTangentSpace:k&&M.normalMapType===Pl,metalnessMap:N,roughnessMap:w,anisotropy:gt,anisotropyMap:it,clearcoat:Tt,clearcoatMap:vt,clearcoatNormalMap:xt,clearcoatRoughnessMap:I,iridescence:Gt,iridescenceMap:pt,iridescenceThicknessMap:_t,sheen:P,sheenColorMap:et,sheenRoughnessMap:At,specularMap:Lt,specularColorMap:Pt,specularIntensityMap:Ct,transmission:y,transmissionMap:wt,thicknessMap:Dt,gradientMap:Vt,opaque:M.transparent===!1&&M.blending===Ai,alphaMap:B,alphaTest:Et,alphaHash:st,combine:M.combine,mapUv:mt&&g(M.map.channel),aoMapUv:A&&g(M.aoMap.channel),lightMapUv:Q&&g(M.lightMap.channel),bumpMapUv:O&&g(M.bumpMap.channel),normalMapUv:k&&g(M.normalMap.channel),displacementMapUv:W&&g(M.displacementMap.channel),emissiveMapUv:ft&&g(M.emissiveMap.channel),metalnessMapUv:N&&g(M.metalnessMap.channel),roughnessMapUv:w&&g(M.roughnessMap.channel),anisotropyMapUv:it&&g(M.anisotropyMap.channel),clearcoatMapUv:vt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:xt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:I&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:et&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:At&&g(M.sheenRoughnessMap.channel),specularMapUv:Lt&&g(M.specularMap.channel),specularColorMapUv:Pt&&g(M.specularColorMap.channel),specularIntensityMapUv:Ct&&g(M.specularIntensityMap.channel),transmissionMapUv:wt&&g(M.transmissionMap.channel),thicknessMapUv:Dt&&g(M.thicknessMap.channel),alphaMapUv:B&&g(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(k||gt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,vertexUv1s:bt,vertexUv2s:qt,vertexUv3s:jt,pointsUvs:V.isPoints===!0&&!!J.attributes.uv&&(mt||B),fog:!!X,useFog:M.fog===!0,fogExp2:X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:V.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:nt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&ot.length>0,shadowMapType:i.shadowMap.type,toneMapping:M.toneMapped?i.toneMapping:hn,useLegacyLights:i.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ln,flipSided:M.side===Me,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Mt&&M.extensions.derivatives===!0,extensionFragDepth:Mt&&M.extensions.fragDepth===!0,extensionDrawBuffers:Mt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Mt&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const R=[];if(M.shaderID?R.push(M.shaderID):(R.push(M.customVertexShaderID),R.push(M.customFragmentShaderID)),M.defines!==void 0)for(const ot in M.defines)R.push(ot),R.push(M.defines[ot]);return M.isRawShaderMaterial===!1&&(b(R,M),_(R,M),R.push(i.outputColorSpace)),R.push(M.customProgramCacheKey),R.join()}function b(M,R){M.push(R.precision),M.push(R.outputColorSpace),M.push(R.envMapMode),M.push(R.envMapCubeUVHeight),M.push(R.mapUv),M.push(R.alphaMapUv),M.push(R.lightMapUv),M.push(R.aoMapUv),M.push(R.bumpMapUv),M.push(R.normalMapUv),M.push(R.displacementMapUv),M.push(R.emissiveMapUv),M.push(R.metalnessMapUv),M.push(R.roughnessMapUv),M.push(R.anisotropyMapUv),M.push(R.clearcoatMapUv),M.push(R.clearcoatNormalMapUv),M.push(R.clearcoatRoughnessMapUv),M.push(R.iridescenceMapUv),M.push(R.iridescenceThicknessMapUv),M.push(R.sheenColorMapUv),M.push(R.sheenRoughnessMapUv),M.push(R.specularMapUv),M.push(R.specularColorMapUv),M.push(R.specularIntensityMapUv),M.push(R.transmissionMapUv),M.push(R.thicknessMapUv),M.push(R.combine),M.push(R.fogExp2),M.push(R.sizeAttenuation),M.push(R.morphTargetsCount),M.push(R.morphAttributeCount),M.push(R.numDirLights),M.push(R.numPointLights),M.push(R.numSpotLights),M.push(R.numSpotLightMaps),M.push(R.numHemiLights),M.push(R.numRectAreaLights),M.push(R.numDirLightShadows),M.push(R.numPointLightShadows),M.push(R.numSpotLightShadows),M.push(R.numSpotLightShadowsWithMaps),M.push(R.shadowMapType),M.push(R.toneMapping),M.push(R.numClippingPlanes),M.push(R.numClipIntersection),M.push(R.depthPacking)}function _(M,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),M.push(a.mask)}function x(M){const R=v[M.type];let ot;if(R){const tt=Ye[R];ot=kh.clone(tt.uniforms)}else ot=M.uniforms;return ot}function E(M,R){let ot;for(let tt=0,V=l.length;tt<V;tt++){const X=l[tt];if(X.cacheKey===R){ot=X,++ot.usedTimes;break}}return ot===void 0&&(ot=new Qp(i,R,M,r),l.push(ot)),ot}function L(M){if(--M.usedTimes===0){const R=l.indexOf(M);l[R]=l[l.length-1],l.pop(),M.destroy()}}function D(M){c.remove(M)}function G(){c.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:x,acquireProgram:E,releaseProgram:L,releaseShaderCache:D,programs:l,dispose:G}}function sm(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function rm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ho(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Go(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,p,m,v,g,f){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:p,material:m,groupOrder:v,renderOrder:u.renderOrder,z:g,group:f},i[t]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=m,d.groupOrder=v,d.renderOrder=u.renderOrder,d.z=g,d.group=f),t++,d}function a(u,p,m,v,g,f){const d=o(u,p,m,v,g,f);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):e.push(d)}function c(u,p,m,v,g,f){const d=o(u,p,m,v,g,f);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function l(u,p){e.length>1&&e.sort(u||rm),n.length>1&&n.sort(p||Ho),s.length>1&&s.sort(p||Ho)}function h(){for(let u=t,p=i.length;u<p;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function am(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Go,i.set(n,[o])):s>=r.length?(o=new Go,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function om(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new Wt};break;case"SpotLight":e={position:new H,direction:new H,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function lm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let cm=0;function hm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function um(i,t){const e=new om,n=lm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)s.probe.push(new H);const r=new H,o=new Kt,a=new Kt;function c(h,u){let p=0,m=0,v=0;for(let ot=0;ot<9;ot++)s.probe[ot].set(0,0,0);let g=0,f=0,d=0,b=0,_=0,x=0,E=0,L=0,D=0,G=0;h.sort(hm);const M=u===!0?Math.PI:1;for(let ot=0,tt=h.length;ot<tt;ot++){const V=h[ot],X=V.color,J=V.intensity,lt=V.distance,q=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)p+=X.r*J*M,m+=X.g*J*M,v+=X.b*J*M;else if(V.isLightProbe)for(let z=0;z<9;z++)s.probe[z].addScaledVector(V.sh.coefficients[z],J);else if(V.isDirectionalLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity*M),V.castShadow){const dt=V.shadow,at=n.get(V);at.shadowBias=dt.bias,at.shadowNormalBias=dt.normalBias,at.shadowRadius=dt.radius,at.shadowMapSize=dt.mapSize,s.directionalShadow[g]=at,s.directionalShadowMap[g]=q,s.directionalShadowMatrix[g]=V.shadow.matrix,x++}s.directional[g]=z,g++}else if(V.isSpotLight){const z=e.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(X).multiplyScalar(J*M),z.distance=lt,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,s.spot[d]=z;const dt=V.shadow;if(V.map&&(s.spotLightMap[D]=V.map,D++,dt.updateMatrices(V),V.castShadow&&G++),s.spotLightMatrix[d]=dt.matrix,V.castShadow){const at=n.get(V);at.shadowBias=dt.bias,at.shadowNormalBias=dt.normalBias,at.shadowRadius=dt.radius,at.shadowMapSize=dt.mapSize,s.spotShadow[d]=at,s.spotShadowMap[d]=q,L++}d++}else if(V.isRectAreaLight){const z=e.get(V);z.color.copy(X).multiplyScalar(J),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),s.rectArea[b]=z,b++}else if(V.isPointLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity*M),z.distance=V.distance,z.decay=V.decay,V.castShadow){const dt=V.shadow,at=n.get(V);at.shadowBias=dt.bias,at.shadowNormalBias=dt.normalBias,at.shadowRadius=dt.radius,at.shadowMapSize=dt.mapSize,at.shadowCameraNear=dt.camera.near,at.shadowCameraFar=dt.camera.far,s.pointShadow[f]=at,s.pointShadowMap[f]=q,s.pointShadowMatrix[f]=V.shadow.matrix,E++}s.point[f]=z,f++}else if(V.isHemisphereLight){const z=e.get(V);z.skyColor.copy(V.color).multiplyScalar(J*M),z.groundColor.copy(V.groundColor).multiplyScalar(J*M),s.hemi[_]=z,_++}}b>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=St.LTC_FLOAT_1,s.rectAreaLTC2=St.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=St.LTC_HALF_1,s.rectAreaLTC2=St.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=m,s.ambient[2]=v;const R=s.hash;(R.directionalLength!==g||R.pointLength!==f||R.spotLength!==d||R.rectAreaLength!==b||R.hemiLength!==_||R.numDirectionalShadows!==x||R.numPointShadows!==E||R.numSpotShadows!==L||R.numSpotMaps!==D)&&(s.directional.length=g,s.spot.length=d,s.rectArea.length=b,s.point.length=f,s.hemi.length=_,s.directionalShadow.length=x,s.directionalShadowMap.length=x,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=x,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=L+D-G,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=G,R.directionalLength=g,R.pointLength=f,R.spotLength=d,R.rectAreaLength=b,R.hemiLength=_,R.numDirectionalShadows=x,R.numPointShadows=E,R.numSpotShadows=L,R.numSpotMaps=D,s.version=cm++)}function l(h,u){let p=0,m=0,v=0,g=0,f=0;const d=u.matrixWorldInverse;for(let b=0,_=h.length;b<_;b++){const x=h[b];if(x.isDirectionalLight){const E=s.directional[p];E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),p++}else if(x.isSpotLight){const E=s.spot[v];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),v++}else if(x.isRectAreaLight){const E=s.rectArea[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(d),a.identity(),o.copy(x.matrixWorld),o.premultiply(d),a.extractRotation(o),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const E=s.point[m];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(d),m++}else if(x.isHemisphereLight){const E=s.hemi[f];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(d),f++}}}return{setup:c,setupView:l,state:s}}function ko(i,t){const e=new um(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function fm(i,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new ko(i,t),e.set(r,[c])):o>=a.length?(c=new ko(i,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:n,dispose:s}}class dm extends Ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pm extends Ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const mm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gm=`uniform sampler2D shadow_pass;
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
}`;function _m(i,t,e){let n=new la;const s=new rt,r=new rt,o=new ce,a=new dm({depthPacking:hh}),c=new pm,l={},h=e.maxTextureSize,u={[un]:Me,[Me]:un,[ln]:ln},p=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:mm,fragmentShader:gm}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const v=new Ue;v.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ve(v,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vl;let d=this.type;this.render=function(E,L,D){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;const G=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),ot=i.state;ot.setBlending(yn),ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const tt=d!==on&&this.type===on,V=d===on&&this.type!==on;for(let X=0,J=E.length;X<J;X++){const lt=E[X],q=lt.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const z=q.getFrameExtents();if(s.multiply(z),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/z.x),s.x=r.x*z.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/z.y),s.y=r.y*z.y,q.mapSize.y=r.y)),q.map===null||tt===!0||V===!0){const at=this.type!==on?{minFilter:_e,magFilter:_e}:{};q.map!==null&&q.map.dispose(),q.map=new Jn(s.x,s.y,at),q.map.texture.name=lt.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const dt=q.getViewportCount();for(let at=0;at<dt;at++){const j=q.getViewport(at);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),ot.viewport(o),q.updateMatrices(lt,at),n=q.getFrustum(),x(L,D,q.camera,lt,this.type)}q.isPointLightShadow!==!0&&this.type===on&&b(q,D),q.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(G,M,R)};function b(E,L){const D=t.update(g);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Jn(s.x,s.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(L,null,D,p,g,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(L,null,D,m,g,null)}function _(E,L,D,G){let M=null;const R=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)M=R;else if(M=D.isPointLight===!0?c:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const ot=M.uuid,tt=L.uuid;let V=l[ot];V===void 0&&(V={},l[ot]=V);let X=V[tt];X===void 0&&(X=M.clone(),V[tt]=X),M=X}if(M.visible=L.visible,M.wireframe=L.wireframe,G===on?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:u[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const ot=i.properties.get(M);ot.light=D}return M}function x(E,L,D,G,M){if(E.visible===!1)return;if(E.layers.test(L.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===on)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);const tt=t.update(E),V=E.material;if(Array.isArray(V)){const X=tt.groups;for(let J=0,lt=X.length;J<lt;J++){const q=X[J],z=V[q.materialIndex];if(z&&z.visible){const dt=_(E,z,G,M);i.renderBufferDirect(D,null,tt,dt,E,q)}}}else if(V.visible){const X=_(E,V,G,M);i.renderBufferDirect(D,null,tt,X,E,null)}}const ot=E.children;for(let tt=0,V=ot.length;tt<V;tt++)x(ot[tt],L,D,G,M)}}function vm(i,t,e){const n=e.isWebGL2;function s(){let B=!1;const Et=new ce;let st=null;const Mt=new ce(0,0,0,0);return{setMask:function(bt){st!==bt&&!B&&(i.colorMask(bt,bt,bt,bt),st=bt)},setLocked:function(bt){B=bt},setClear:function(bt,qt,jt,ae,Ve){Ve===!0&&(bt*=ae,qt*=ae,jt*=ae),Et.set(bt,qt,jt,ae),Mt.equals(Et)===!1&&(i.clearColor(bt,qt,jt,ae),Mt.copy(Et))},reset:function(){B=!1,st=null,Mt.set(-1,0,0,0)}}}function r(){let B=!1,Et=null,st=null,Mt=null;return{setTest:function(bt){bt?S(i.DEPTH_TEST):Z(i.DEPTH_TEST)},setMask:function(bt){Et!==bt&&!B&&(i.depthMask(bt),Et=bt)},setFunc:function(bt){if(st!==bt){switch(bt){case zc:i.depthFunc(i.NEVER);break;case Hc:i.depthFunc(i.ALWAYS);break;case Gc:i.depthFunc(i.LESS);break;case Wr:i.depthFunc(i.LEQUAL);break;case kc:i.depthFunc(i.EQUAL);break;case Vc:i.depthFunc(i.GEQUAL);break;case Wc:i.depthFunc(i.GREATER);break;case Xc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=bt}},setLocked:function(bt){B=bt},setClear:function(bt){Mt!==bt&&(i.clearDepth(bt),Mt=bt)},reset:function(){B=!1,Et=null,st=null,Mt=null}}}function o(){let B=!1,Et=null,st=null,Mt=null,bt=null,qt=null,jt=null,ae=null,Ve=null;return{setTest:function(Jt){B||(Jt?S(i.STENCIL_TEST):Z(i.STENCIL_TEST))},setMask:function(Jt){Et!==Jt&&!B&&(i.stencilMask(Jt),Et=Jt)},setFunc:function(Jt,We,pe){(st!==Jt||Mt!==We||bt!==pe)&&(i.stencilFunc(Jt,We,pe),st=Jt,Mt=We,bt=pe)},setOp:function(Jt,We,pe){(qt!==Jt||jt!==We||ae!==pe)&&(i.stencilOp(Jt,We,pe),qt=Jt,jt=We,ae=pe)},setLocked:function(Jt){B=Jt},setClear:function(Jt){Ve!==Jt&&(i.clearStencil(Jt),Ve=Jt)},reset:function(){B=!1,Et=null,st=null,Mt=null,bt=null,qt=null,jt=null,ae=null,Ve=null}}}const a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap;let p={},m={},v=new WeakMap,g=[],f=null,d=!1,b=null,_=null,x=null,E=null,L=null,D=null,G=null,M=!1,R=null,ot=null,tt=null,V=null,X=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let lt=!1,q=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(z)[1]),lt=q>=1):z.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),lt=q>=2);let dt=null,at={};const j=i.getParameter(i.SCISSOR_BOX),nt=i.getParameter(i.VIEWPORT),yt=new ce().fromArray(j),F=new ce().fromArray(nt);function U(B,Et,st,Mt){const bt=new Uint8Array(4),qt=i.createTexture();i.bindTexture(B,qt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<st;jt++)n&&(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)?i.texImage3D(Et,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(Et+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return qt}const T={};T[i.TEXTURE_2D]=U(i.TEXTURE_2D,i.TEXTURE_2D,1),T[i.TEXTURE_CUBE_MAP]=U(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(T[i.TEXTURE_2D_ARRAY]=U(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),T[i.TEXTURE_3D]=U(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),S(i.DEPTH_TEST),c.setFunc(Wr),W(!1),ft(Aa),S(i.CULL_FACE),O(yn);function S(B){p[B]!==!0&&(i.enable(B),p[B]=!0)}function Z(B){p[B]!==!1&&(i.disable(B),p[B]=!1)}function mt(B,Et){return m[B]!==Et?(i.bindFramebuffer(B,Et),m[B]=Et,n&&(B===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Et),B===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Et)),!0):!1}function $(B,Et){let st=g,Mt=!1;if(B)if(st=v.get(Et),st===void 0&&(st=[],v.set(Et,st)),B.isWebGLMultipleRenderTargets){const bt=B.texture;if(st.length!==bt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let qt=0,jt=bt.length;qt<jt;qt++)st[qt]=i.COLOR_ATTACHMENT0+qt;st.length=bt.length,Mt=!0}}else st[0]!==i.COLOR_ATTACHMENT0&&(st[0]=i.COLOR_ATTACHMENT0,Mt=!0);else st[0]!==i.BACK&&(st[0]=i.BACK,Mt=!0);Mt&&(e.isWebGL2?i.drawBuffers(st):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(st))}function ht(B){return f!==B?(i.useProgram(B),f=B,!0):!1}const A={[xi]:i.FUNC_ADD,[Rc]:i.FUNC_SUBTRACT,[Cc]:i.FUNC_REVERSE_SUBTRACT};if(n)A[Pa]=i.MIN,A[La]=i.MAX;else{const B=t.get("EXT_blend_minmax");B!==null&&(A[Pa]=B.MIN_EXT,A[La]=B.MAX_EXT)}const Q={[Pc]:i.ZERO,[Lc]:i.ONE,[Uc]:i.SRC_COLOR,[xl]:i.SRC_ALPHA,[Bc]:i.SRC_ALPHA_SATURATE,[Oc]:i.DST_COLOR,[Ic]:i.DST_ALPHA,[Dc]:i.ONE_MINUS_SRC_COLOR,[Ml]:i.ONE_MINUS_SRC_ALPHA,[Fc]:i.ONE_MINUS_DST_COLOR,[Nc]:i.ONE_MINUS_DST_ALPHA};function O(B,Et,st,Mt,bt,qt,jt,ae){if(B===yn){d===!0&&(Z(i.BLEND),d=!1);return}if(d===!1&&(S(i.BLEND),d=!0),B!==wc){if(B!==b||ae!==M){if((_!==xi||L!==xi)&&(i.blendEquation(i.FUNC_ADD),_=xi,L=xi),ae)switch(B){case Ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wa:i.blendFunc(i.ONE,i.ONE);break;case Ra:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ca:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ra:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ca:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}x=null,E=null,D=null,G=null,b=B,M=ae}return}bt=bt||Et,qt=qt||st,jt=jt||Mt,(Et!==_||bt!==L)&&(i.blendEquationSeparate(A[Et],A[bt]),_=Et,L=bt),(st!==x||Mt!==E||qt!==D||jt!==G)&&(i.blendFuncSeparate(Q[st],Q[Mt],Q[qt],Q[jt]),x=st,E=Mt,D=qt,G=jt),b=B,M=!1}function k(B,Et){B.side===ln?Z(i.CULL_FACE):S(i.CULL_FACE);let st=B.side===Me;Et&&(st=!st),W(st),B.blending===Ai&&B.transparent===!1?O(yn):O(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),a.setMask(B.colorWrite);const Mt=B.stencilWrite;l.setTest(Mt),Mt&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),w(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?S(i.SAMPLE_ALPHA_TO_COVERAGE):Z(i.SAMPLE_ALPHA_TO_COVERAGE)}function W(B){R!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),R=B)}function ft(B){B!==Tc?(S(i.CULL_FACE),B!==ot&&(B===Aa?i.cullFace(i.BACK):B===bc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Z(i.CULL_FACE),ot=B}function N(B){B!==tt&&(lt&&i.lineWidth(B),tt=B)}function w(B,Et,st){B?(S(i.POLYGON_OFFSET_FILL),(V!==Et||X!==st)&&(i.polygonOffset(Et,st),V=Et,X=st)):Z(i.POLYGON_OFFSET_FILL)}function gt(B){B?S(i.SCISSOR_TEST):Z(i.SCISSOR_TEST)}function Tt(B){B===void 0&&(B=i.TEXTURE0+J-1),dt!==B&&(i.activeTexture(B),dt=B)}function Gt(B,Et,st){st===void 0&&(dt===null?st=i.TEXTURE0+J-1:st=dt);let Mt=at[st];Mt===void 0&&(Mt={type:void 0,texture:void 0},at[st]=Mt),(Mt.type!==B||Mt.texture!==Et)&&(dt!==st&&(i.activeTexture(st),dt=st),i.bindTexture(B,Et||T[B]),Mt.type=B,Mt.texture=Et)}function P(){const B=at[dt];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function vt(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function I(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _t(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(B){yt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),yt.copy(B))}function Ct(B){F.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),F.copy(B))}function wt(B,Et){let st=u.get(Et);st===void 0&&(st=new WeakMap,u.set(Et,st));let Mt=st.get(B);Mt===void 0&&(Mt=i.getUniformBlockIndex(Et,B.name),st.set(B,Mt))}function Dt(B,Et){const Mt=u.get(Et).get(B);h.get(Et)!==Mt&&(i.uniformBlockBinding(Et,Mt,B.__bindingPointIndex),h.set(Et,Mt))}function Vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},dt=null,at={},m={},v=new WeakMap,g=[],f=null,d=!1,b=null,_=null,x=null,E=null,L=null,D=null,G=null,M=!1,R=null,ot=null,tt=null,V=null,X=null,yt.set(0,0,i.canvas.width,i.canvas.height),F.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:S,disable:Z,bindFramebuffer:mt,drawBuffers:$,useProgram:ht,setBlending:O,setMaterial:k,setFlipSided:W,setCullFace:ft,setLineWidth:N,setPolygonOffset:w,setScissorTest:gt,activeTexture:Tt,bindTexture:Gt,unbindTexture:P,compressedTexImage2D:y,compressedTexImage3D:it,texImage2D:At,texImage3D:Lt,updateUBOMapping:wt,uniformBlockBinding:Dt,texStorage2D:_t,texStorage3D:et,texSubImage2D:vt,texSubImage3D:xt,compressedTexSubImage2D:I,compressedTexSubImage3D:pt,scissor:Pt,viewport:Ct,reset:Vt}}function xm(i,t,e,n,s,r,o){const a=s.isWebGL2,c=s.maxTextures,l=s.maxCubemapSize,h=s.maxTextureSize,u=s.maxSamples,p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,y){return d?new OffscreenCanvas(P,y):ks("canvas")}function _(P,y,it,vt){let xt=1;if((P.width>vt||P.height>vt)&&(xt=vt/Math.max(P.width,P.height)),xt<1||y===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const I=y?Jr:Math.floor,pt=I(xt*P.width),_t=I(xt*P.height);g===void 0&&(g=b(pt,_t));const et=it?b(pt,_t):g;return et.width=pt,et.height=_t,et.getContext("2d").drawImage(P,0,0,pt,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+pt+"x"+_t+")."),et}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function x(P){return so(P.width)&&so(P.height)}function E(P){return a?!1:P.wrapS!==He||P.wrapT!==He||P.minFilter!==_e&&P.minFilter!==Ce}function L(P,y){return P.generateMipmaps&&y&&P.minFilter!==_e&&P.minFilter!==Ce}function D(P){i.generateMipmap(P)}function G(P,y,it,vt,xt=!1){if(a===!1)return y;if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let I=y;return y===i.RED&&(it===i.FLOAT&&(I=i.R32F),it===i.HALF_FLOAT&&(I=i.R16F),it===i.UNSIGNED_BYTE&&(I=i.R8)),y===i.RG&&(it===i.FLOAT&&(I=i.RG32F),it===i.HALF_FLOAT&&(I=i.RG16F),it===i.UNSIGNED_BYTE&&(I=i.RG8)),y===i.RGBA&&(it===i.FLOAT&&(I=i.RGBA32F),it===i.HALF_FLOAT&&(I=i.RGBA16F),it===i.UNSIGNED_BYTE&&(I=vt===Bt&&xt===!1?i.SRGB8_ALPHA8:i.RGBA8),it===i.UNSIGNED_SHORT_4_4_4_4&&(I=i.RGBA4),it===i.UNSIGNED_SHORT_5_5_5_1&&(I=i.RGB5_A1)),(I===i.R16F||I===i.R32F||I===i.RG16F||I===i.RG32F||I===i.RGBA16F||I===i.RGBA32F)&&t.get("EXT_color_buffer_float"),I}function M(P,y,it){return L(P,it)===!0||P.isFramebufferTexture&&P.minFilter!==_e&&P.minFilter!==Ce?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function R(P){return P===_e||P===Ua||P===rr?i.NEAREST:i.LINEAR}function ot(P){const y=P.target;y.removeEventListener("dispose",ot),V(y),y.isVideoTexture&&v.delete(y)}function tt(P){const y=P.target;y.removeEventListener("dispose",tt),J(y)}function V(P){const y=n.get(P);if(y.__webglInit===void 0)return;const it=P.source,vt=f.get(it);if(vt){const xt=vt[y.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&X(P),Object.keys(vt).length===0&&f.delete(it)}n.remove(P)}function X(P){const y=n.get(P);i.deleteTexture(y.__webglTexture);const it=P.source,vt=f.get(it);delete vt[y.__cacheKey],o.memory.textures--}function J(P){const y=P.texture,it=n.get(P),vt=n.get(y);if(vt.__webglTexture!==void 0&&(i.deleteTexture(vt.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++)i.deleteFramebuffer(it.__webglFramebuffer[xt]),it.__webglDepthbuffer&&i.deleteRenderbuffer(it.__webglDepthbuffer[xt]);else{if(i.deleteFramebuffer(it.__webglFramebuffer),it.__webglDepthbuffer&&i.deleteRenderbuffer(it.__webglDepthbuffer),it.__webglMultisampledFramebuffer&&i.deleteFramebuffer(it.__webglMultisampledFramebuffer),it.__webglColorRenderbuffer)for(let xt=0;xt<it.__webglColorRenderbuffer.length;xt++)it.__webglColorRenderbuffer[xt]&&i.deleteRenderbuffer(it.__webglColorRenderbuffer[xt]);it.__webglDepthRenderbuffer&&i.deleteRenderbuffer(it.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let xt=0,I=y.length;xt<I;xt++){const pt=n.get(y[xt]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),o.memory.textures--),n.remove(y[xt])}n.remove(y),n.remove(P)}let lt=0;function q(){lt=0}function z(){const P=lt;return P>=c&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+c),lt+=1,P}function dt(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function at(P,y){const it=n.get(P);if(P.isVideoTexture&&Tt(P),P.isRenderTargetTexture===!1&&P.version>0&&it.__version!==P.version){const vt=P.image;if(vt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(it,P,y);return}}e.bindTexture(i.TEXTURE_2D,it.__webglTexture,i.TEXTURE0+y)}function j(P,y){const it=n.get(P);if(P.version>0&&it.__version!==P.version){mt(it,P,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,it.__webglTexture,i.TEXTURE0+y)}function nt(P,y){const it=n.get(P);if(P.version>0&&it.__version!==P.version){mt(it,P,y);return}e.bindTexture(i.TEXTURE_3D,it.__webglTexture,i.TEXTURE0+y)}function yt(P,y){const it=n.get(P);if(P.version>0&&it.__version!==P.version){$(it,P,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture,i.TEXTURE0+y)}const F={[Yr]:i.REPEAT,[He]:i.CLAMP_TO_EDGE,[jr]:i.MIRRORED_REPEAT},U={[_e]:i.NEAREST,[Ua]:i.NEAREST_MIPMAP_NEAREST,[rr]:i.NEAREST_MIPMAP_LINEAR,[Ce]:i.LINEAR,[Qc]:i.LINEAR_MIPMAP_NEAREST,[Ki]:i.LINEAR_MIPMAP_LINEAR},T={[dh]:i.NEVER,[Mh]:i.ALWAYS,[ph]:i.LESS,[gh]:i.LEQUAL,[mh]:i.EQUAL,[xh]:i.GEQUAL,[_h]:i.GREATER,[vh]:i.NOTEQUAL};function S(P,y,it){if(it?(i.texParameteri(P,i.TEXTURE_WRAP_S,F[y.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,F[y.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,F[y.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,U[y.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,U[y.minFilter])):(i.texParameteri(P,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(P,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(y.wrapS!==He||y.wrapT!==He)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(P,i.TEXTURE_MAG_FILTER,R(y.magFilter)),i.texParameteri(P,i.TEXTURE_MIN_FILTER,R(y.minFilter)),y.minFilter!==_e&&y.minFilter!==Ce&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,T[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const vt=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===_e||y.minFilter!==rr&&y.minFilter!==Ki||y.type===_n&&t.has("OES_texture_float_linear")===!1||a===!1&&y.type===Ji&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(P,vt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function Z(P,y){let it=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",ot));const vt=y.source;let xt=f.get(vt);xt===void 0&&(xt={},f.set(vt,xt));const I=dt(y);if(I!==P.__cacheKey){xt[I]===void 0&&(xt[I]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,it=!0),xt[I].usedTimes++;const pt=xt[P.__cacheKey];pt!==void 0&&(xt[P.__cacheKey].usedTimes--,pt.usedTimes===0&&X(y)),P.__cacheKey=I,P.__webglTexture=xt[I].texture}return it}function mt(P,y,it){let vt=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(vt=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(vt=i.TEXTURE_3D);const xt=Z(P,y),I=y.source;e.bindTexture(vt,P.__webglTexture,i.TEXTURE0+it);const pt=n.get(I);if(I.version!==pt.__version||xt===!0){e.activeTexture(i.TEXTURE0+it),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const _t=E(y)&&x(y.image)===!1;let et=_(y.image,_t,!1,h);et=Gt(y,et);const At=x(et)||a,Lt=r.convert(y.format,y.colorSpace);let Pt=r.convert(y.type),Ct=G(y.internalFormat,Lt,Pt,y.colorSpace);S(vt,y,At);let wt;const Dt=y.mipmaps,Vt=a&&y.isVideoTexture!==!0,B=pt.__version===void 0||xt===!0,Et=M(y,et,At);if(y.isDepthTexture)Ct=i.DEPTH_COMPONENT,a?y.type===_n?Ct=i.DEPTH_COMPONENT32F:y.type===gn?Ct=i.DEPTH_COMPONENT24:y.type===Wn?Ct=i.DEPTH24_STENCIL8:Ct=i.DEPTH_COMPONENT16:y.type===_n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Xn&&Ct===i.DEPTH_COMPONENT&&y.type!==ra&&y.type!==gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=gn,Pt=r.convert(y.type)),y.format===Li&&Ct===i.DEPTH_COMPONENT&&(Ct=i.DEPTH_STENCIL,y.type!==Wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Wn,Pt=r.convert(y.type))),B&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,Ct,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Ct,et.width,et.height,0,Lt,Pt,null));else if(y.isDataTexture)if(Dt.length>0&&At){Vt&&B&&e.texStorage2D(i.TEXTURE_2D,Et,Ct,Dt[0].width,Dt[0].height);for(let st=0,Mt=Dt.length;st<Mt;st++)wt=Dt[st],Vt?e.texSubImage2D(i.TEXTURE_2D,st,0,0,wt.width,wt.height,Lt,Pt,wt.data):e.texImage2D(i.TEXTURE_2D,st,Ct,wt.width,wt.height,0,Lt,Pt,wt.data);y.generateMipmaps=!1}else Vt?(B&&e.texStorage2D(i.TEXTURE_2D,Et,Ct,et.width,et.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,Lt,Pt,et.data)):e.texImage2D(i.TEXTURE_2D,0,Ct,et.width,et.height,0,Lt,Pt,et.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Vt&&B&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Ct,Dt[0].width,Dt[0].height,et.depth);for(let st=0,Mt=Dt.length;st<Mt;st++)wt=Dt[st],y.format!==Ge?Lt!==null?Vt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,wt.width,wt.height,et.depth,Lt,wt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Ct,wt.width,wt.height,et.depth,0,wt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,wt.width,wt.height,et.depth,Lt,Pt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Ct,wt.width,wt.height,et.depth,0,Lt,Pt,wt.data)}else{Vt&&B&&e.texStorage2D(i.TEXTURE_2D,Et,Ct,Dt[0].width,Dt[0].height);for(let st=0,Mt=Dt.length;st<Mt;st++)wt=Dt[st],y.format!==Ge?Lt!==null?Vt?e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,wt.width,wt.height,Lt,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Ct,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?e.texSubImage2D(i.TEXTURE_2D,st,0,0,wt.width,wt.height,Lt,Pt,wt.data):e.texImage2D(i.TEXTURE_2D,st,Ct,wt.width,wt.height,0,Lt,Pt,wt.data)}else if(y.isDataArrayTexture)Vt?(B&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Ct,et.width,et.height,et.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,Lt,Pt,et.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,et.width,et.height,et.depth,0,Lt,Pt,et.data);else if(y.isData3DTexture)Vt?(B&&e.texStorage3D(i.TEXTURE_3D,Et,Ct,et.width,et.height,et.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,Lt,Pt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,et.width,et.height,et.depth,0,Lt,Pt,et.data);else if(y.isFramebufferTexture){if(B)if(Vt)e.texStorage2D(i.TEXTURE_2D,Et,Ct,et.width,et.height);else{let st=et.width,Mt=et.height;for(let bt=0;bt<Et;bt++)e.texImage2D(i.TEXTURE_2D,bt,Ct,st,Mt,0,Lt,Pt,null),st>>=1,Mt>>=1}}else if(Dt.length>0&&At){Vt&&B&&e.texStorage2D(i.TEXTURE_2D,Et,Ct,Dt[0].width,Dt[0].height);for(let st=0,Mt=Dt.length;st<Mt;st++)wt=Dt[st],Vt?e.texSubImage2D(i.TEXTURE_2D,st,0,0,Lt,Pt,wt):e.texImage2D(i.TEXTURE_2D,st,Ct,Lt,Pt,wt);y.generateMipmaps=!1}else Vt?(B&&e.texStorage2D(i.TEXTURE_2D,Et,Ct,et.width,et.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Lt,Pt,et)):e.texImage2D(i.TEXTURE_2D,0,Ct,Lt,Pt,et);L(y,At)&&D(vt),pt.__version=I.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function $(P,y,it){if(y.image.length!==6)return;const vt=Z(P,y),xt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+it);const I=n.get(xt);if(xt.version!==I.__version||vt===!0){e.activeTexture(i.TEXTURE0+it),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const pt=y.isCompressedTexture||y.image[0].isCompressedTexture,_t=y.image[0]&&y.image[0].isDataTexture,et=[];for(let st=0;st<6;st++)!pt&&!_t?et[st]=_(y.image[st],!1,!0,l):et[st]=_t?y.image[st].image:y.image[st],et[st]=Gt(y,et[st]);const At=et[0],Lt=x(At)||a,Pt=r.convert(y.format,y.colorSpace),Ct=r.convert(y.type),wt=G(y.internalFormat,Pt,Ct,y.colorSpace),Dt=a&&y.isVideoTexture!==!0,Vt=I.__version===void 0||vt===!0;let B=M(y,At,Lt);S(i.TEXTURE_CUBE_MAP,y,Lt);let Et;if(pt){Dt&&Vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,B,wt,At.width,At.height);for(let st=0;st<6;st++){Et=et[st].mipmaps;for(let Mt=0;Mt<Et.length;Mt++){const bt=Et[Mt];y.format!==Ge?Pt!==null?Dt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Mt,0,0,bt.width,bt.height,Pt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Mt,wt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Mt,0,0,bt.width,bt.height,Pt,Ct,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Mt,wt,bt.width,bt.height,0,Pt,Ct,bt.data)}}}else{Et=y.mipmaps,Dt&&Vt&&(Et.length>0&&B++,e.texStorage2D(i.TEXTURE_CUBE_MAP,B,wt,et[0].width,et[0].height));for(let st=0;st<6;st++)if(_t){Dt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,et[st].width,et[st].height,Pt,Ct,et[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,wt,et[st].width,et[st].height,0,Pt,Ct,et[st].data);for(let Mt=0;Mt<Et.length;Mt++){const qt=Et[Mt].image[st].image;Dt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Mt+1,0,0,qt.width,qt.height,Pt,Ct,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Mt+1,wt,qt.width,qt.height,0,Pt,Ct,qt.data)}}else{Dt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Pt,Ct,et[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,wt,Pt,Ct,et[st]);for(let Mt=0;Mt<Et.length;Mt++){const bt=Et[Mt];Dt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Mt+1,0,0,Pt,Ct,bt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Mt+1,wt,Pt,Ct,bt.image[st])}}}L(y,Lt)&&D(i.TEXTURE_CUBE_MAP),I.__version=xt.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function ht(P,y,it,vt,xt){const I=r.convert(it.format,it.colorSpace),pt=r.convert(it.type),_t=G(it.internalFormat,I,pt,it.colorSpace);n.get(y).__hasExternalTextures||(xt===i.TEXTURE_3D||xt===i.TEXTURE_2D_ARRAY?e.texImage3D(xt,0,_t,y.width,y.height,y.depth,0,I,pt,null):e.texImage2D(xt,0,_t,y.width,y.height,0,I,pt,null)),e.bindFramebuffer(i.FRAMEBUFFER,P),gt(y)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,xt,n.get(it).__webglTexture,0,w(y)):(xt===i.TEXTURE_2D||xt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,vt,xt,n.get(it).__webglTexture,0),e.bindFramebuffer(i.FRAMEBUFFER,null)}function A(P,y,it){if(i.bindRenderbuffer(i.RENDERBUFFER,P),y.depthBuffer&&!y.stencilBuffer){let vt=i.DEPTH_COMPONENT16;if(it||gt(y)){const xt=y.depthTexture;xt&&xt.isDepthTexture&&(xt.type===_n?vt=i.DEPTH_COMPONENT32F:xt.type===gn&&(vt=i.DEPTH_COMPONENT24));const I=w(y);gt(y)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I,vt,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,I,vt,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,vt,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,P)}else if(y.depthBuffer&&y.stencilBuffer){const vt=w(y);it&&gt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,i.DEPTH24_STENCIL8,y.width,y.height):gt(y)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,P)}else{const vt=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let xt=0;xt<vt.length;xt++){const I=vt[xt],pt=r.convert(I.format,I.colorSpace),_t=r.convert(I.type),et=G(I.internalFormat,pt,_t,I.colorSpace),At=w(y);it&&gt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,et,y.width,y.height):gt(y)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,et,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,et,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Q(P,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),at(y.depthTexture,0);const vt=n.get(y.depthTexture).__webglTexture,xt=w(y);if(y.depthTexture.format===Xn)gt(y)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,vt,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,vt,0);else if(y.depthTexture.format===Li)gt(y)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,vt,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function O(P){const y=n.get(P),it=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!y.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");Q(y.__webglFramebuffer,P)}else if(it){y.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[vt]),y.__webglDepthbuffer[vt]=i.createRenderbuffer(),A(y.__webglDepthbuffer[vt],P,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),A(y.__webglDepthbuffer,P,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function k(P,y,it){const vt=n.get(P);y!==void 0&&ht(vt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),it!==void 0&&O(P)}function W(P){const y=P.texture,it=n.get(P),vt=n.get(y);P.addEventListener("dispose",tt),P.isWebGLMultipleRenderTargets!==!0&&(vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture()),vt.__version=y.version,o.memory.textures++);const xt=P.isWebGLCubeRenderTarget===!0,I=P.isWebGLMultipleRenderTargets===!0,pt=x(P)||a;if(xt){it.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)it.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(it.__webglFramebuffer=i.createFramebuffer(),I)if(s.drawBuffers){const _t=P.texture;for(let et=0,At=_t.length;et<At;et++){const Lt=n.get(_t[et]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&gt(P)===!1){const _t=I?y:[y];it.__webglMultisampledFramebuffer=i.createFramebuffer(),it.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let et=0;et<_t.length;et++){const At=_t[et];it.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,it.__webglColorRenderbuffer[et]);const Lt=r.convert(At.format,At.colorSpace),Pt=r.convert(At.type),Ct=G(At.internalFormat,Lt,Pt,At.colorSpace,P.isXRRenderTarget===!0),wt=w(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,Ct,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,it.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(it.__webglDepthRenderbuffer=i.createRenderbuffer(),A(it.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xt){e.bindTexture(i.TEXTURE_CUBE_MAP,vt.__webglTexture),S(i.TEXTURE_CUBE_MAP,y,pt);for(let _t=0;_t<6;_t++)ht(it.__webglFramebuffer[_t],P,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t);L(y,pt)&&D(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(I){const _t=P.texture;for(let et=0,At=_t.length;et<At;et++){const Lt=_t[et],Pt=n.get(Lt);e.bindTexture(i.TEXTURE_2D,Pt.__webglTexture),S(i.TEXTURE_2D,Lt,pt),ht(it.__webglFramebuffer,P,Lt,i.COLOR_ATTACHMENT0+et,i.TEXTURE_2D),L(Lt,pt)&&D(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?_t=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(_t,vt.__webglTexture),S(_t,y,pt),ht(it.__webglFramebuffer,P,y,i.COLOR_ATTACHMENT0,_t),L(y,pt)&&D(_t),e.unbindTexture()}P.depthBuffer&&O(P)}function ft(P){const y=x(P)||a,it=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let vt=0,xt=it.length;vt<xt;vt++){const I=it[vt];if(L(I,y)){const pt=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,_t=n.get(I).__webglTexture;e.bindTexture(pt,_t),D(pt),e.unbindTexture()}}}function N(P){if(a&&P.samples>0&&gt(P)===!1){const y=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],it=P.width,vt=P.height;let xt=i.COLOR_BUFFER_BIT;const I=[],pt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(P),et=P.isWebGLMultipleRenderTargets===!0;if(et)for(let At=0;At<y.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let At=0;At<y.length;At++){I.push(i.COLOR_ATTACHMENT0+At),P.depthBuffer&&I.push(pt);const Lt=_t.__ignoreDepthValues!==void 0?_t.__ignoreDepthValues:!1;if(Lt===!1&&(P.depthBuffer&&(xt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&(xt|=i.STENCIL_BUFFER_BIT)),et&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[At]),Lt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[pt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[pt])),et){const Pt=n.get(y[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pt,0)}i.blitFramebuffer(0,0,it,vt,0,0,it,vt,xt,i.NEAREST),m&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,I)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let At=0;At<y.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,_t.__webglColorRenderbuffer[At]);const Lt=n.get(y[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}}function w(P){return Math.min(u,P.samples)}function gt(P){const y=n.get(P);return a&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Tt(P){const y=o.render.frame;v.get(P)!==y&&(v.set(P,y),P.update())}function Gt(P,y){const it=P.colorSpace,vt=P.format,xt=P.type;return P.isCompressedTexture===!0||P.format===Zr||it!==Ze&&it!==Yn&&(it===Bt?a===!1?t.has("EXT_sRGB")===!0&&vt===Ge?(P.format=Zr,P.minFilter=Ce,P.generateMipmaps=!1):y=Dl.sRGBToLinear(y):(vt!==Ge||xt!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),y}this.allocateTextureUnit=z,this.resetTextureUnits=q,this.setTexture2D=at,this.setTexture2DArray=j,this.setTexture3D=nt,this.setTextureCube=yt,this.rebindTextures=k,this.setupRenderTarget=W,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=O,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=gt}function Mm(i,t,e){const n=e.isWebGL2;function s(r,o=Yn){let a;if(r===Sn)return i.UNSIGNED_BYTE;if(r===Tl)return i.UNSIGNED_SHORT_4_4_4_4;if(r===bl)return i.UNSIGNED_SHORT_5_5_5_1;if(r===th)return i.BYTE;if(r===eh)return i.SHORT;if(r===ra)return i.UNSIGNED_SHORT;if(r===El)return i.INT;if(r===gn)return i.UNSIGNED_INT;if(r===_n)return i.FLOAT;if(r===Ji)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===nh)return i.ALPHA;if(r===Ge)return i.RGBA;if(r===ih)return i.LUMINANCE;if(r===sh)return i.LUMINANCE_ALPHA;if(r===Xn)return i.DEPTH_COMPONENT;if(r===Li)return i.DEPTH_STENCIL;if(r===Zr)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===rh)return i.RED;if(r===Al)return i.RED_INTEGER;if(r===ah)return i.RG;if(r===wl)return i.RG_INTEGER;if(r===Rl)return i.RGBA_INTEGER;if(r===ar||r===or||r===lr||r===cr)if(o===Bt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ar)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===or)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===lr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===cr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ar)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===or)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===lr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===cr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Da||r===Ia||r===Na||r===Oa)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Da)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ia)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Na)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Oa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===oh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Fa||r===Ba)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Fa)return o===Bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ba)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===za||r===Ha||r===Ga||r===ka||r===Va||r===Wa||r===Xa||r===qa||r===Ya||r===ja||r===Za||r===Ka||r===Ja||r===$a)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===za)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ha)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ga)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ka)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Va)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wa)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xa)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qa)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ya)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ja)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Za)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ka)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ja)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===$a)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===hr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===hr)return o===Bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===lh||r===Qa||r===to||r===eo)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===hr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Qa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===to)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===eo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wn?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class ym extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}let Yt=class extends he{constructor(){super(),this.isGroup=!0,this.type="Group"}};const Sm={type:"move"};class Ir{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const g of t.hand.values()){const f=e.getJointPose(g,n),d=this._getHandJoint(l,g);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,v=.005;l.inputState.pinching&&p>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Em extends Ae{constructor(t,e,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:Xn,h!==Xn&&h!==Li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xn&&(n=gn),n===void 0&&h===Li&&(n=Wn),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:_e,this.minFilter=c!==void 0?c:_e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Tm extends ti{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,p=null,m=null,v=null;const g=e.getContextAttributes();let f=null,d=null;const b=[],_=[],x=new Pe;x.layers.enable(1),x.viewport=new ce;const E=new Pe;E.layers.enable(2),E.viewport=new ce;const L=[x,E],D=new ym;D.layers.enable(1),D.layers.enable(2);let G=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let nt=b[j];return nt===void 0&&(nt=new Ir,b[j]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(j){let nt=b[j];return nt===void 0&&(nt=new Ir,b[j]=nt),nt.getGripSpace()},this.getHand=function(j){let nt=b[j];return nt===void 0&&(nt=new Ir,b[j]=nt),nt.getHandSpace()};function R(j){const nt=_.indexOf(j.inputSource);if(nt===-1)return;const yt=b[nt];yt!==void 0&&(yt.update(j.inputSource,j.frame,l||o),yt.dispatchEvent({type:j.type,data:j.inputSource}))}function ot(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",ot),s.removeEventListener("inputsourceschange",tt);for(let j=0;j<b.length;j++){const nt=_[j];nt!==null&&(_[j]=null,b[j].disconnect(nt))}G=null,M=null,t.setRenderTarget(f),m=null,p=null,u=null,s=null,d=null,at.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",ot),s.addEventListener("inputsourceschange",tt),g.xrCompatible!==!0&&await e.makeXRCompatible(),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const nt={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:m}),d=new Jn(m.framebufferWidth,m.framebufferHeight,{format:Ge,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let nt=null,yt=null,F=null;g.depth&&(F=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=g.stencil?Li:Xn,yt=g.stencil?Wn:gn);const U={colorFormat:e.RGBA8,depthFormat:F,scaleFactor:r};u=new XRWebGLBinding(s,e),p=u.createProjectionLayer(U),s.updateRenderState({layers:[p]}),d=new Jn(p.textureWidth,p.textureHeight,{format:Ge,type:Sn,depthTexture:new Em(p.textureWidth,p.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const T=t.properties.get(d);T.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),at.setContext(s),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function tt(j){for(let nt=0;nt<j.removed.length;nt++){const yt=j.removed[nt],F=_.indexOf(yt);F>=0&&(_[F]=null,b[F].disconnect(yt))}for(let nt=0;nt<j.added.length;nt++){const yt=j.added[nt];let F=_.indexOf(yt);if(F===-1){for(let T=0;T<b.length;T++)if(T>=_.length){_.push(yt),F=T;break}else if(_[T]===null){_[T]=yt,F=T;break}if(F===-1)break}const U=b[F];U&&U.connect(yt)}}const V=new H,X=new H;function J(j,nt,yt){V.setFromMatrixPosition(nt.matrixWorld),X.setFromMatrixPosition(yt.matrixWorld);const F=V.distanceTo(X),U=nt.projectionMatrix.elements,T=yt.projectionMatrix.elements,S=U[14]/(U[10]-1),Z=U[14]/(U[10]+1),mt=(U[9]+1)/U[5],$=(U[9]-1)/U[5],ht=(U[8]-1)/U[0],A=(T[8]+1)/T[0],Q=S*ht,O=S*A,k=F/(-ht+A),W=k*-ht;nt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(W),j.translateZ(k),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const ft=S+k,N=Z+k,w=Q-W,gt=O+(F-W),Tt=mt*Z/N*ft,Gt=$*Z/N*ft;j.projectionMatrix.makePerspective(w,gt,Tt,Gt,ft,N),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function lt(j,nt){nt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(nt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;D.near=E.near=x.near=j.near,D.far=E.far=x.far=j.far,(G!==D.near||M!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),G=D.near,M=D.far);const nt=j.parent,yt=D.cameras;lt(D,nt);for(let F=0;F<yt.length;F++)lt(yt[F],nt);yt.length===2?J(D,x,E):D.projectionMatrix.copy(x.projectionMatrix),q(j,D,nt)};function q(j,nt,yt){yt===null?j.matrix.copy(nt.matrixWorld):(j.matrix.copy(yt.matrixWorld),j.matrix.invert(),j.matrix.multiply(nt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0);const F=j.children;for(let U=0,T=F.length;U<T;U++)F[U].updateMatrixWorld(!0);j.projectionMatrix.copy(nt.projectionMatrix),j.projectionMatrixInverse.copy(nt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Kr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(j){c=j,p!==null&&(p.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)};let z=null;function dt(j,nt){if(h=nt.getViewerPose(l||o),v=nt,h!==null){const yt=h.views;m!==null&&(t.setRenderTargetFramebuffer(d,m.framebuffer),t.setRenderTarget(d));let F=!1;yt.length!==D.cameras.length&&(D.cameras.length=0,F=!0);for(let U=0;U<yt.length;U++){const T=yt[U];let S=null;if(m!==null)S=m.getViewport(T);else{const mt=u.getViewSubImage(p,T);S=mt.viewport,U===0&&(t.setRenderTargetTextures(d,mt.colorTexture,p.ignoreDepthValues?void 0:mt.depthStencilTexture),t.setRenderTarget(d))}let Z=L[U];Z===void 0&&(Z=new Pe,Z.layers.enable(U),Z.viewport=new ce,L[U]=Z),Z.matrix.fromArray(T.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(T.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(S.x,S.y,S.width,S.height),U===0&&(D.matrix.copy(Z.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),F===!0&&D.cameras.push(Z)}}for(let yt=0;yt<b.length;yt++){const F=_[yt],U=b[yt];F!==null&&U!==void 0&&U.update(F,nt,l||o)}z&&z(j,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),v=null}const at=new kl;at.setAnimationLoop(dt),this.setAnimationLoop=function(j){z=j},this.dispose=function(){}}}function bm(i,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,zl(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,b,_,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(f,d):d.isMeshToonMaterial?(r(f,d),u(f,d)):d.isMeshPhongMaterial?(r(f,d),h(f,d)):d.isMeshStandardMaterial?(r(f,d),p(f,d),d.isMeshPhysicalMaterial&&m(f,d,x)):d.isMeshMatcapMaterial?(r(f,d),v(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),g(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(o(f,d),d.isLineDashedMaterial&&a(f,d)):d.isPointsMaterial?c(f,d,b,_):d.isSpriteMaterial?l(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Me&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Me&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const b=t.get(d).envMap;if(b&&(f.envMap.value=b,f.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap){f.lightMap.value=d.lightMap;const _=i.useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=d.lightMapIntensity*_,e(d.lightMap,f.lightMapTransform)}d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function o(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function a(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function c(f,d,b,_){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*b,f.scale.value=_*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function l(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function u(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function p(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),t.get(d).envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,b){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Me&&f.clearcoatNormalScale.value.negate())),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,d){d.matcap&&(f.matcap.value=d.matcap)}function g(f,d){const b=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Am(i,t,e,n){let s={},r={},o=[];const a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(b,_){const x=_.program;n.uniformBlockBinding(b,x)}function l(b,_){let x=s[b.id];x===void 0&&(v(b),x=h(b),s[b.id]=x,b.addEventListener("dispose",f));const E=_.program;n.updateUBOMapping(b,E);const L=t.render.frame;r[b.id]!==L&&(p(b),r[b.id]=L)}function h(b){const _=u();b.__bindingPointIndex=_;const x=i.createBuffer(),E=b.__size,L=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,E,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,x),x}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const _=s[b.id],x=b.uniforms,E=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let L=0,D=x.length;L<D;L++){const G=x[L];if(m(G,L,E)===!0){const M=G.__offset,R=Array.isArray(G.value)?G.value:[G.value];let ot=0;for(let tt=0;tt<R.length;tt++){const V=R[tt],X=g(V);typeof V=="number"?(G.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,M+ot,G.__data)):V.isMatrix3?(G.__data[0]=V.elements[0],G.__data[1]=V.elements[1],G.__data[2]=V.elements[2],G.__data[3]=V.elements[0],G.__data[4]=V.elements[3],G.__data[5]=V.elements[4],G.__data[6]=V.elements[5],G.__data[7]=V.elements[0],G.__data[8]=V.elements[6],G.__data[9]=V.elements[7],G.__data[10]=V.elements[8],G.__data[11]=V.elements[0]):(V.toArray(G.__data,ot),ot+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,M,G.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,_,x){const E=b.value;if(x[_]===void 0){if(typeof E=="number")x[_]=E;else{const L=Array.isArray(E)?E:[E],D=[];for(let G=0;G<L.length;G++)D.push(L[G].clone());x[_]=D}return!0}else if(typeof E=="number"){if(x[_]!==E)return x[_]=E,!0}else{const L=Array.isArray(x[_])?x[_]:[x[_]],D=Array.isArray(E)?E:[E];for(let G=0;G<L.length;G++){const M=L[G];if(M.equals(D[G])===!1)return M.copy(D[G]),!0}}return!1}function v(b){const _=b.uniforms;let x=0;const E=16;let L=0;for(let D=0,G=_.length;D<G;D++){const M=_[D],R={boundary:0,storage:0},ot=Array.isArray(M.value)?M.value:[M.value];for(let tt=0,V=ot.length;tt<V;tt++){const X=ot[tt],J=g(X);R.boundary+=J.boundary,R.storage+=J.storage}if(M.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=x,D>0){L=x%E;const tt=E-L;L!==0&&tt-R.boundary<0&&(x+=E-L,M.__offset=x)}x+=R.storage}return L=x%E,L>0&&(x+=E-L),b.__size=x,b.__cache={},this}function g(b){const _={boundary:0,storage:0};return typeof b=="number"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function f(b){const _=b.target;_.removeEventListener("dispose",f);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function d(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}function wm(){const i=ks("canvas");return i.style.display="block",i}class jl{constructor(t={}){const{canvas:e=wm(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,f=null;const d=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Bt,this.useLegacyLights=!0,this.toneMapping=hn,this.toneMappingExposure=1;const _=this;let x=!1,E=0,L=0,D=null,G=-1,M=null;const R=new ce,ot=new ce;let tt=null;const V=new Wt(0);let X=0,J=e.width,lt=e.height,q=1,z=null,dt=null;const at=new ce(0,0,J,lt),j=new ce(0,0,J,lt);let nt=!1;const yt=new la;let F=!1,U=!1,T=null;const S=new Kt,Z=new rt,mt=new H,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ht(){return D===null?q:1}let A=n;function Q(C,K){for(let ct=0;ct<C.length;ct++){const Y=C[ct],ut=e.getContext(Y,K);if(ut!==null)return ut}return null}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sa}`),e.addEventListener("webglcontextlost",Et,!1),e.addEventListener("webglcontextrestored",st,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),A===null){const K=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&K.shift(),A=Q(K,C),A===null)throw Q(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&A instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),A.getShaderPrecisionFormat===void 0&&(A.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let O,k,W,ft,N,w,gt,Tt,Gt,P,y,it,vt,xt,I,pt,_t,et,At,Lt,Pt,Ct,wt,Dt;function Vt(){O=new Fd(A),k=new Ld(A,O,t),O.init(k),Ct=new Mm(A,O,k),W=new vm(A,O,k),ft=new Hd(A),N=new sm,w=new xm(A,O,W,N,k,Ct,ft),gt=new Dd(_),Tt=new Od(_),Gt=new Zh(A,k),wt=new Cd(A,O,Gt,k),P=new Bd(A,Gt,ft,wt),y=new Wd(A,P,Gt,ft),At=new Vd(A,k,w),pt=new Ud(N),it=new im(_,gt,Tt,O,k,wt,pt),vt=new bm(_,N),xt=new am,I=new fm(O,k),et=new Rd(_,gt,Tt,W,y,p,c),_t=new _m(_,y,k),Dt=new Am(A,ft,k,W),Lt=new Pd(A,O,ft,k),Pt=new zd(A,O,ft,k),ft.programs=it.programs,_.capabilities=k,_.extensions=O,_.properties=N,_.renderLists=xt,_.shadowMap=_t,_.state=W,_.info=ft}Vt();const B=new Tm(_,A);this.xr=B,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const C=O.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=O.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(J,lt,!1))},this.getSize=function(C){return C.set(J,lt)},this.setSize=function(C,K,ct=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=C,lt=K,e.width=Math.floor(C*q),e.height=Math.floor(K*q),ct===!0&&(e.style.width=C+"px",e.style.height=K+"px"),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(J*q,lt*q).floor()},this.setDrawingBufferSize=function(C,K,ct){J=C,lt=K,q=ct,e.width=Math.floor(C*ct),e.height=Math.floor(K*ct),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(at)},this.setViewport=function(C,K,ct,Y){C.isVector4?at.set(C.x,C.y,C.z,C.w):at.set(C,K,ct,Y),W.viewport(R.copy(at).multiplyScalar(q).floor())},this.getScissor=function(C){return C.copy(j)},this.setScissor=function(C,K,ct,Y){C.isVector4?j.set(C.x,C.y,C.z,C.w):j.set(C,K,ct,Y),W.scissor(ot.copy(j).multiplyScalar(q).floor())},this.getScissorTest=function(){return nt},this.setScissorTest=function(C){W.setScissorTest(nt=C)},this.setOpaqueSort=function(C){z=C},this.setTransparentSort=function(C){dt=C},this.getClearColor=function(C){return C.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(C=!0,K=!0,ct=!0){let Y=0;if(C){let ut=!1;if(D!==null){const Rt=D.texture.format;ut=Rt===Rl||Rt===wl||Rt===Al}if(ut){const Rt=D.texture.type,Ut=Rt===Sn||Rt===gn||Rt===ra||Rt===Wn||Rt===Tl||Rt===bl,It=et.getClearColor(),Nt=et.getClearAlpha(),kt=It.r,Ft=It.g,zt=It.b;Ut?(m[0]=kt,m[1]=Ft,m[2]=zt,m[3]=Nt,A.clearBufferuiv(A.COLOR,0,m)):(v[0]=kt,v[1]=Ft,v[2]=zt,v[3]=Nt,A.clearBufferiv(A.COLOR,0,v))}else Y|=A.COLOR_BUFFER_BIT}K&&(Y|=A.DEPTH_BUFFER_BIT),ct&&(Y|=A.STENCIL_BUFFER_BIT),A.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Et,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),xt.dispose(),I.dispose(),N.dispose(),gt.dispose(),Tt.dispose(),y.dispose(),wt.dispose(),Dt.dispose(),it.dispose(),B.dispose(),B.removeEventListener("sessionstart",Jt),B.removeEventListener("sessionend",We),T&&(T.dispose(),T=null),pe.stop()};function Et(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function st(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const C=ft.autoReset,K=_t.enabled,ct=_t.autoUpdate,Y=_t.needsUpdate,ut=_t.type;Vt(),ft.autoReset=C,_t.enabled=K,_t.autoUpdate=ct,_t.needsUpdate=Y,_t.type=ut}function Mt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function bt(C){const K=C.target;K.removeEventListener("dispose",bt),qt(K)}function qt(C){jt(C),N.remove(C)}function jt(C){const K=N.get(C).programs;K!==void 0&&(K.forEach(function(ct){it.releaseProgram(ct)}),C.isShaderMaterial&&it.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,ct,Y,ut,Rt){K===null&&(K=$);const Ut=ut.isMesh&&ut.matrixWorld.determinant()<0,It=xc(C,K,ct,Y,ut);W.setMaterial(Y,Ut);let Nt=ct.index,kt=1;Y.wireframe===!0&&(Nt=P.getWireframeAttribute(ct),kt=2);const Ft=ct.drawRange,zt=ct.attributes.position;let $t=Ft.start*kt,Qt=(Ft.start+Ft.count)*kt;Rt!==null&&($t=Math.max($t,Rt.start*kt),Qt=Math.min(Qt,(Rt.start+Rt.count)*kt)),Nt!==null?($t=Math.max($t,0),Qt=Math.min(Qt,Nt.count)):zt!=null&&($t=Math.max($t,0),Qt=Math.min(Qt,zt.count));const De=Qt-$t;if(De<0||De===1/0)return;wt.setup(ut,Y,It,ct,Nt);let $e,te=Lt;if(Nt!==null&&($e=Gt.get(Nt),te=Pt,te.setIndex($e)),ut.isMesh)Y.wireframe===!0?(W.setLineWidth(Y.wireframeLinewidth*ht()),te.setMode(A.LINES)):te.setMode(A.TRIANGLES);else if(ut.isLine){let Xt=Y.linewidth;Xt===void 0&&(Xt=1),W.setLineWidth(Xt*ht()),ut.isLineSegments?te.setMode(A.LINES):ut.isLineLoop?te.setMode(A.LINE_LOOP):te.setMode(A.LINE_STRIP)}else ut.isPoints?te.setMode(A.POINTS):ut.isSprite&&te.setMode(A.TRIANGLES);if(ut.isInstancedMesh)te.renderInstances($t,De,ut.count);else if(ct.isInstancedBufferGeometry){const Xt=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,er=Math.min(ct.instanceCount,Xt);te.renderInstances($t,De,er)}else te.render($t,De)},this.compile=function(C,K){function ct(Y,ut,Rt){Y.transparent===!0&&Y.side===ln&&Y.forceSinglePass===!1?(Y.side=Me,Y.needsUpdate=!0,as(Y,ut,Rt),Y.side=un,Y.needsUpdate=!0,as(Y,ut,Rt),Y.side=ln):as(Y,ut,Rt)}f=I.get(C),f.init(),b.push(f),C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(K.layers)&&(f.pushLight(Y),Y.castShadow&&f.pushShadow(Y))}),f.setupLights(_.useLegacyLights),C.traverse(function(Y){const ut=Y.material;if(ut)if(Array.isArray(ut))for(let Rt=0;Rt<ut.length;Rt++){const Ut=ut[Rt];ct(Ut,C,Y)}else ct(ut,C,Y)}),b.pop(),f=null};let ae=null;function Ve(C){ae&&ae(C)}function Jt(){pe.stop()}function We(){pe.start()}const pe=new kl;pe.setAnimationLoop(Ve),typeof self<"u"&&pe.setContext(self),this.setAnimationLoop=function(C){ae=C,B.setAnimationLoop(C),C===null?pe.stop():pe.start()},B.addEventListener("sessionstart",Jt),B.addEventListener("sessionend",We),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(K),K=B.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,K,D),f=I.get(C,b.length),f.init(),b.push(f),S.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),yt.setFromProjectionMatrix(S),U=this.localClippingEnabled,F=pt.init(this.clippingPlanes,U),g=xt.get(C,d.length),g.init(),d.push(g),Ma(C,K,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(z,dt),this.info.render.frame++,F===!0&&pt.beginShadows();const ct=f.state.shadowsArray;if(_t.render(ct,C,K),F===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(g,C),f.setupLights(_.useLegacyLights),K.isArrayCamera){const Y=K.cameras;for(let ut=0,Rt=Y.length;ut<Rt;ut++){const Ut=Y[ut];ya(g,C,Ut,Ut.viewport)}}else ya(g,C,K);D!==null&&(w.updateMultisampleRenderTarget(D),w.updateRenderTargetMipmap(D)),C.isScene===!0&&C.onAfterRender(_,C,K),wt.resetDefaultState(),G=-1,M=null,b.pop(),b.length>0?f=b[b.length-1]:f=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function Ma(C,K,ct,Y){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)ct=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||yt.intersectsSprite(C)){Y&&mt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(S);const Ut=y.update(C),It=C.material;It.visible&&g.push(C,Ut,It,ct,mt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||yt.intersectsObject(C))){const Ut=y.update(C),It=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),mt.copy(C.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),mt.copy(Ut.boundingSphere.center)),mt.applyMatrix4(C.matrixWorld).applyMatrix4(S)),Array.isArray(It)){const Nt=Ut.groups;for(let kt=0,Ft=Nt.length;kt<Ft;kt++){const zt=Nt[kt],$t=It[zt.materialIndex];$t&&$t.visible&&g.push(C,Ut,$t,ct,mt.z,zt)}}else It.visible&&g.push(C,Ut,It,ct,mt.z,null)}}const Rt=C.children;for(let Ut=0,It=Rt.length;Ut<It;Ut++)Ma(Rt[Ut],K,ct,Y)}function ya(C,K,ct,Y){const ut=C.opaque,Rt=C.transmissive,Ut=C.transparent;f.setupLightsView(ct),F===!0&&pt.setGlobalState(_.clippingPlanes,ct),Rt.length>0&&vc(ut,Rt,K,ct),Y&&W.viewport(R.copy(Y)),ut.length>0&&rs(ut,K,ct),Rt.length>0&&rs(Rt,K,ct),Ut.length>0&&rs(Ut,K,ct),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function vc(C,K,ct,Y){const ut=k.isWebGL2;T===null&&(T=new Jn(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")?Ji:Sn,minFilter:Ki,samples:ut?4:0})),_.getDrawingBufferSize(Z),ut?T.setSize(Z.x,Z.y):T.setSize(Jr(Z.x),Jr(Z.y));const Rt=_.getRenderTarget();_.setRenderTarget(T),_.getClearColor(V),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear();const Ut=_.toneMapping;_.toneMapping=hn,rs(C,ct,Y),w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T);let It=!1;for(let Nt=0,kt=K.length;Nt<kt;Nt++){const Ft=K[Nt],zt=Ft.object,$t=Ft.geometry,Qt=Ft.material,De=Ft.group;if(Qt.side===ln&&zt.layers.test(Y.layers)){const $e=Qt.side;Qt.side=Me,Qt.needsUpdate=!0,Sa(zt,ct,Y,$t,Qt,De),Qt.side=$e,Qt.needsUpdate=!0,It=!0}}It===!0&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),_.setRenderTarget(Rt),_.setClearColor(V,X),_.toneMapping=Ut}function rs(C,K,ct){const Y=K.isScene===!0?K.overrideMaterial:null;for(let ut=0,Rt=C.length;ut<Rt;ut++){const Ut=C[ut],It=Ut.object,Nt=Ut.geometry,kt=Y===null?Ut.material:Y,Ft=Ut.group;It.layers.test(ct.layers)&&Sa(It,K,ct,Nt,kt,Ft)}}function Sa(C,K,ct,Y,ut,Rt){C.onBeforeRender(_,K,ct,Y,ut,Rt),C.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ut.onBeforeRender(_,K,ct,Y,C,Rt),ut.transparent===!0&&ut.side===ln&&ut.forceSinglePass===!1?(ut.side=Me,ut.needsUpdate=!0,_.renderBufferDirect(ct,K,Y,ut,C,Rt),ut.side=un,ut.needsUpdate=!0,_.renderBufferDirect(ct,K,Y,ut,C,Rt),ut.side=ln):_.renderBufferDirect(ct,K,Y,ut,C,Rt),C.onAfterRender(_,K,ct,Y,ut,Rt)}function as(C,K,ct){K.isScene!==!0&&(K=$);const Y=N.get(C),ut=f.state.lights,Rt=f.state.shadowsArray,Ut=ut.state.version,It=it.getParameters(C,ut.state,Rt,K,ct),Nt=it.getProgramCacheKey(It);let kt=Y.programs;Y.environment=C.isMeshStandardMaterial?K.environment:null,Y.fog=K.fog,Y.envMap=(C.isMeshStandardMaterial?Tt:gt).get(C.envMap||Y.environment),kt===void 0&&(C.addEventListener("dispose",bt),kt=new Map,Y.programs=kt);let Ft=kt.get(Nt);if(Ft!==void 0){if(Y.currentProgram===Ft&&Y.lightsStateVersion===Ut)return Ea(C,It),Ft}else It.uniforms=it.getUniforms(C),C.onBuild(ct,It,_),C.onBeforeCompile(It,_),Ft=it.acquireProgram(It,Nt),kt.set(Nt,Ft),Y.uniforms=It.uniforms;const zt=Y.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(zt.clippingPlanes=pt.uniform),Ea(C,It),Y.needsLights=yc(C),Y.lightsStateVersion=Ut,Y.needsLights&&(zt.ambientLightColor.value=ut.state.ambient,zt.lightProbe.value=ut.state.probe,zt.directionalLights.value=ut.state.directional,zt.directionalLightShadows.value=ut.state.directionalShadow,zt.spotLights.value=ut.state.spot,zt.spotLightShadows.value=ut.state.spotShadow,zt.rectAreaLights.value=ut.state.rectArea,zt.ltc_1.value=ut.state.rectAreaLTC1,zt.ltc_2.value=ut.state.rectAreaLTC2,zt.pointLights.value=ut.state.point,zt.pointLightShadows.value=ut.state.pointShadow,zt.hemisphereLights.value=ut.state.hemi,zt.directionalShadowMap.value=ut.state.directionalShadowMap,zt.directionalShadowMatrix.value=ut.state.directionalShadowMatrix,zt.spotShadowMap.value=ut.state.spotShadowMap,zt.spotLightMatrix.value=ut.state.spotLightMatrix,zt.spotLightMap.value=ut.state.spotLightMap,zt.pointShadowMap.value=ut.state.pointShadowMap,zt.pointShadowMatrix.value=ut.state.pointShadowMatrix);const $t=Ft.getUniforms(),Qt=Is.seqWithValue($t.seq,zt);return Y.currentProgram=Ft,Y.uniformsList=Qt,Ft}function Ea(C,K){const ct=N.get(C);ct.outputColorSpace=K.outputColorSpace,ct.instancing=K.instancing,ct.skinning=K.skinning,ct.morphTargets=K.morphTargets,ct.morphNormals=K.morphNormals,ct.morphColors=K.morphColors,ct.morphTargetsCount=K.morphTargetsCount,ct.numClippingPlanes=K.numClippingPlanes,ct.numIntersection=K.numClipIntersection,ct.vertexAlphas=K.vertexAlphas,ct.vertexTangents=K.vertexTangents,ct.toneMapping=K.toneMapping}function xc(C,K,ct,Y,ut){K.isScene!==!0&&(K=$),w.resetTextureUnits();const Rt=K.fog,Ut=Y.isMeshStandardMaterial?K.environment:null,It=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ze,Nt=(Y.isMeshStandardMaterial?Tt:gt).get(Y.envMap||Ut),kt=Y.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,Ft=!!ct.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),zt=!!ct.morphAttributes.position,$t=!!ct.morphAttributes.normal,Qt=!!ct.morphAttributes.color,De=Y.toneMapped?_.toneMapping:hn,$e=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,te=$e!==void 0?$e.length:0,Xt=N.get(Y),er=f.state.lights;if(F===!0&&(U===!0||C!==M)){const ye=C===M&&Y.id===G;pt.setState(Y,C,ye)}let oe=!1;Y.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==er.state.version||Xt.outputColorSpace!==It||ut.isInstancedMesh&&Xt.instancing===!1||!ut.isInstancedMesh&&Xt.instancing===!0||ut.isSkinnedMesh&&Xt.skinning===!1||!ut.isSkinnedMesh&&Xt.skinning===!0||Xt.envMap!==Nt||Y.fog===!0&&Xt.fog!==Rt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==pt.numPlanes||Xt.numIntersection!==pt.numIntersection)||Xt.vertexAlphas!==kt||Xt.vertexTangents!==Ft||Xt.morphTargets!==zt||Xt.morphNormals!==$t||Xt.morphColors!==Qt||Xt.toneMapping!==De||k.isWebGL2===!0&&Xt.morphTargetsCount!==te)&&(oe=!0):(oe=!0,Xt.__version=Y.version);let bn=Xt.currentProgram;oe===!0&&(bn=as(Y,K,ut));let Ta=!1,Oi=!1,nr=!1;const me=bn.getUniforms(),An=Xt.uniforms;if(W.useProgram(bn.program)&&(Ta=!0,Oi=!0,nr=!0),Y.id!==G&&(G=Y.id,Oi=!0),Ta||M!==C){if(me.setValue(A,"projectionMatrix",C.projectionMatrix),k.logarithmicDepthBuffer&&me.setValue(A,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),M!==C&&(M=C,Oi=!0,nr=!0),Y.isShaderMaterial||Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshStandardMaterial||Y.envMap){const ye=me.map.cameraPosition;ye!==void 0&&ye.setValue(A,mt.setFromMatrixPosition(C.matrixWorld))}(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&me.setValue(A,"isOrthographic",C.isOrthographicCamera===!0),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial||Y.isShadowMaterial||ut.isSkinnedMesh)&&me.setValue(A,"viewMatrix",C.matrixWorldInverse)}if(ut.isSkinnedMesh){me.setOptional(A,ut,"bindMatrix"),me.setOptional(A,ut,"bindMatrixInverse");const ye=ut.skeleton;ye&&(k.floatVertexTextures?(ye.boneTexture===null&&ye.computeBoneTexture(),me.setValue(A,"boneTexture",ye.boneTexture,w),me.setValue(A,"boneTextureSize",ye.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ir=ct.morphAttributes;if((ir.position!==void 0||ir.normal!==void 0||ir.color!==void 0&&k.isWebGL2===!0)&&At.update(ut,ct,bn),(Oi||Xt.receiveShadow!==ut.receiveShadow)&&(Xt.receiveShadow=ut.receiveShadow,me.setValue(A,"receiveShadow",ut.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(An.envMap.value=Nt,An.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),Oi&&(me.setValue(A,"toneMappingExposure",_.toneMappingExposure),Xt.needsLights&&Mc(An,nr),Rt&&Y.fog===!0&&vt.refreshFogUniforms(An,Rt),vt.refreshMaterialUniforms(An,Y,q,lt,T),Is.upload(A,Xt.uniformsList,An,w)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Is.upload(A,Xt.uniformsList,An,w),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&me.setValue(A,"center",ut.center),me.setValue(A,"modelViewMatrix",ut.modelViewMatrix),me.setValue(A,"normalMatrix",ut.normalMatrix),me.setValue(A,"modelMatrix",ut.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const ye=Y.uniformsGroups;for(let sr=0,Sc=ye.length;sr<Sc;sr++)if(k.isWebGL2){const ba=ye[sr];Dt.update(ba,bn),Dt.bind(ba,bn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bn}function Mc(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function yc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(C,K,ct){N.get(C.texture).__webglTexture=K,N.get(C.depthTexture).__webglTexture=ct;const Y=N.get(C);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=ct===void 0,Y.__autoAllocateDepthBuffer||O.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,K){const ct=N.get(C);ct.__webglFramebuffer=K,ct.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(C,K=0,ct=0){D=C,E=K,L=ct;let Y=!0,ut=null,Rt=!1,Ut=!1;if(C){const Nt=N.get(C);Nt.__useDefaultFramebuffer!==void 0?(W.bindFramebuffer(A.FRAMEBUFFER,null),Y=!1):Nt.__webglFramebuffer===void 0?w.setupRenderTarget(C):Nt.__hasExternalTextures&&w.rebindTextures(C,N.get(C.texture).__webglTexture,N.get(C.depthTexture).__webglTexture);const kt=C.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Ut=!0);const Ft=N.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(ut=Ft[K],Rt=!0):k.isWebGL2&&C.samples>0&&w.useMultisampledRTT(C)===!1?ut=N.get(C).__webglMultisampledFramebuffer:ut=Ft,R.copy(C.viewport),ot.copy(C.scissor),tt=C.scissorTest}else R.copy(at).multiplyScalar(q).floor(),ot.copy(j).multiplyScalar(q).floor(),tt=nt;if(W.bindFramebuffer(A.FRAMEBUFFER,ut)&&k.drawBuffers&&Y&&W.drawBuffers(C,ut),W.viewport(R),W.scissor(ot),W.setScissorTest(tt),Rt){const Nt=N.get(C.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+K,Nt.__webglTexture,ct)}else if(Ut){const Nt=N.get(C.texture),kt=K||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Nt.__webglTexture,ct||0,kt)}G=-1},this.readRenderTargetPixels=function(C,K,ct,Y,ut,Rt,Ut){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=N.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(It=It[Ut]),It){W.bindFramebuffer(A.FRAMEBUFFER,It);try{const Nt=C.texture,kt=Nt.format,Ft=Nt.type;if(kt!==Ge&&Ct.convert(kt)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const zt=Ft===Ji&&(O.has("EXT_color_buffer_half_float")||k.isWebGL2&&O.has("EXT_color_buffer_float"));if(Ft!==Sn&&Ct.convert(Ft)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ft===_n&&(k.isWebGL2||O.has("OES_texture_float")||O.has("WEBGL_color_buffer_float")))&&!zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-Y&&ct>=0&&ct<=C.height-ut&&A.readPixels(K,ct,Y,ut,Ct.convert(kt),Ct.convert(Ft),Rt)}finally{const Nt=D!==null?N.get(D).__webglFramebuffer:null;W.bindFramebuffer(A.FRAMEBUFFER,Nt)}}},this.copyFramebufferToTexture=function(C,K,ct=0){const Y=Math.pow(2,-ct),ut=Math.floor(K.image.width*Y),Rt=Math.floor(K.image.height*Y);w.setTexture2D(K,0),A.copyTexSubImage2D(A.TEXTURE_2D,ct,0,0,C.x,C.y,ut,Rt),W.unbindTexture()},this.copyTextureToTexture=function(C,K,ct,Y=0){const ut=K.image.width,Rt=K.image.height,Ut=Ct.convert(ct.format),It=Ct.convert(ct.type);w.setTexture2D(ct,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,ct.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ct.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,ct.unpackAlignment),K.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Y,C.x,C.y,ut,Rt,Ut,It,K.image.data):K.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Y,C.x,C.y,K.mipmaps[0].width,K.mipmaps[0].height,Ut,K.mipmaps[0].data):A.texSubImage2D(A.TEXTURE_2D,Y,C.x,C.y,Ut,It,K.image),Y===0&&ct.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),W.unbindTexture()},this.copyTextureToTexture3D=function(C,K,ct,Y,ut=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Rt=C.max.x-C.min.x+1,Ut=C.max.y-C.min.y+1,It=C.max.z-C.min.z+1,Nt=Ct.convert(Y.format),kt=Ct.convert(Y.type);let Ft;if(Y.isData3DTexture)w.setTexture3D(Y,0),Ft=A.TEXTURE_3D;else if(Y.isDataArrayTexture)w.setTexture2DArray(Y,0),Ft=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,Y.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,Y.unpackAlignment);const zt=A.getParameter(A.UNPACK_ROW_LENGTH),$t=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Qt=A.getParameter(A.UNPACK_SKIP_PIXELS),De=A.getParameter(A.UNPACK_SKIP_ROWS),$e=A.getParameter(A.UNPACK_SKIP_IMAGES),te=ct.isCompressedTexture?ct.mipmaps[0]:ct.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,te.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,te.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,C.min.x),A.pixelStorei(A.UNPACK_SKIP_ROWS,C.min.y),A.pixelStorei(A.UNPACK_SKIP_IMAGES,C.min.z),ct.isDataTexture||ct.isData3DTexture?A.texSubImage3D(Ft,ut,K.x,K.y,K.z,Rt,Ut,It,Nt,kt,te.data):ct.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),A.compressedTexSubImage3D(Ft,ut,K.x,K.y,K.z,Rt,Ut,It,Nt,te.data)):A.texSubImage3D(Ft,ut,K.x,K.y,K.z,Rt,Ut,It,Nt,kt,te),A.pixelStorei(A.UNPACK_ROW_LENGTH,zt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,$t),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Qt),A.pixelStorei(A.UNPACK_SKIP_ROWS,De),A.pixelStorei(A.UNPACK_SKIP_IMAGES,$e),ut===0&&Y.generateMipmaps&&A.generateMipmap(Ft),W.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?w.setTextureCube(C,0):C.isData3DTexture?w.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?w.setTexture2DArray(C,0):w.setTexture2D(C,0),W.unbindTexture()},this.resetState=function(){E=0,L=0,D=null,W.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Bt?qn:Cl}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===qn?Bt:Ze}}class Rm extends jl{}Rm.prototype.isWebGL1Renderer=!0;class Vo extends he{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Zl extends Ii{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Wo=new Kt,Qr=new aa,Rs=new Ks,Cs=new H;class Cm extends he{constructor(t=new Ue,e=new Zl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(s),Rs.radius+=r,t.ray.intersectsSphere(Rs)===!1)return;Wo.copy(s).invert(),Qr.copy(t.ray).applyMatrix4(Wo);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const p=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let v=p,g=m;v<g;v++){const f=l.getX(v);Cs.fromBufferAttribute(u,f),Xo(Cs,f,c,s,t,e,this)}}else{const p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=p,g=m;v<g;v++)Cs.fromBufferAttribute(u,v),Xo(Cs,v,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Xo(i,t,e,n,s,r,o){const a=Qr.distanceSqToPoint(i);if(a<e){const c=new H;Qr.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class Je{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],p=n[s+1]-h,m=(o-h)/p;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new rt:new H);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new H,s=[],r=[],o=[],a=new H,c=new Kt;for(let m=0;m<=t;m++){const v=m/t;s[m]=this.getTangentAt(v,new H)}r[0]=new H,o[0]=new H;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(ue(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,v))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(ue(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let v=1;v<=t;v++)r[v].applyMatrix4(c.makeRotationAxis(s[v],m*v)),o[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ha extends Je{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){const n=e||new rt,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=c-this.aX,m=l-this.aY;c=p*h-m*u+this.aX,l=p*u+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Pm extends ha{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ua(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let p=(o-r)/l-(a-r)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+u)+(c-a)/u;p*=h,m*=h,s(o,a,p,m)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Ps=new H,Nr=new ua,Or=new ua,Fr=new ua;class Lm extends Je{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new H){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Ps.subVectors(s[0],s[1]).add(s[0]),l=Ps);const u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ps.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ps),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let v=Math.pow(l.distanceToSquared(u),m),g=Math.pow(u.distanceToSquared(p),m),f=Math.pow(p.distanceToSquared(h),m);g<1e-4&&(g=1),v<1e-4&&(v=g),f<1e-4&&(f=g),Nr.initNonuniformCatmullRom(l.x,u.x,p.x,h.x,v,g,f),Or.initNonuniformCatmullRom(l.y,u.y,p.y,h.y,v,g,f),Fr.initNonuniformCatmullRom(l.z,u.z,p.z,h.z,v,g,f)}else this.curveType==="catmullrom"&&(Nr.initCatmullRom(l.x,u.x,p.x,h.x,this.tension),Or.initCatmullRom(l.y,u.y,p.y,h.y,this.tension),Fr.initCatmullRom(l.z,u.z,p.z,h.z,this.tension));return n.set(Nr.calc(c),Or.calc(c),Fr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new H().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function qo(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Um(i,t){const e=1-i;return e*e*t}function Dm(i,t){return 2*(1-i)*i*t}function Im(i,t){return i*i*t}function qi(i,t,e,n){return Um(i,t)+Dm(i,e)+Im(i,n)}function Nm(i,t){const e=1-i;return e*e*e*t}function Om(i,t){const e=1-i;return 3*e*e*i*t}function Fm(i,t){return 3*(1-i)*i*i*t}function Bm(i,t){return i*i*i*t}function Yi(i,t,e,n,s){return Nm(i,t)+Om(i,e)+Fm(i,n)+Bm(i,s)}class Kl extends Je{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Yi(t,s.x,r.x,o.x,a.x),Yi(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zm extends Je{constructor(t=new H,e=new H,n=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new H){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Yi(t,s.x,r.x,o.x,a.x),Yi(t,s.y,r.y,o.y,a.y),Yi(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fa extends Je{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hm extends Je{constructor(t=new H,e=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new H){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new H){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jl extends Je{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(qi(t,s.x,r.x,o.x),qi(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gm extends Je{constructor(t=new H,e=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new H){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(qi(t,s.x,r.x,o.x),qi(t,s.y,r.y,o.y),qi(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $l extends Je{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(qo(a,c.x,l.x,h.x,u.x),qo(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new rt().fromArray(s))}return this}}var Ql=Object.freeze({__proto__:null,ArcCurve:Pm,CatmullRomCurve3:Lm,CubicBezierCurve:Kl,CubicBezierCurve3:zm,EllipseCurve:ha,LineCurve:fa,LineCurve3:Hm,QuadraticBezierCurve:Jl,QuadraticBezierCurve3:Gm,SplineCurve:$l});class km extends Je{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new fa(e,t))}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ql[s.type]().fromJSON(s))}return this}}class Ri extends km{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new fa(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Jl(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Kl(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new $l(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new ha(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ji extends Ri{constructor(t){super(t),this.uuid=Di(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ri().fromJSON(s))}return this}}const Vm={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=tc(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,p,m;if(n&&(r=jm(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let v=e;v<s;v+=e)u=i[v],p=i[v+1],u<a&&(a=u),p<c&&(c=p),u>l&&(l=u),p>h&&(h=p);m=Math.max(l-a,h-c),m=m!==0?32767/m:0}return $i(r,o,e,a,c,m,0),o}};function tc(i,t,e,n,s){let r,o;if(s===rg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Yo(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Yo(r,i[r],i[r+1],o);return o&&tr(o,o.next)&&(ts(o),o=o.next),o}function Qn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(tr(e,e.next)||Zt(e.prev,e,e.next)===0)){if(ts(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function $i(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Qm(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Xm(i,n,s,r):Wm(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),ts(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=qm(Qn(i),t,e),$i(i,t,e,n,s,r,2)):o===2&&Ym(i,t,e,n,s,r):$i(Qn(i),t,e,n,s,r,1);break}}}function Wm(i){const t=i.prev,e=i,n=i.next;if(Zt(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,p=s>r?s>o?s:o:r>o?r:o,m=a>c?a>l?a:l:c>l?c:l;let v=n.next;for(;v!==t;){if(v.x>=h&&v.x<=p&&v.y>=u&&v.y<=m&&Ti(s,a,r,c,o,l,v.x,v.y)&&Zt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function Xm(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Zt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,p=o.y,m=a<c?a<l?a:l:c<l?c:l,v=h<u?h<p?h:p:u<p?u:p,g=a>c?a>l?a:l:c>l?c:l,f=h>u?h>p?h:p:u>p?u:p,d=ta(m,v,t,e,n),b=ta(g,f,t,e,n);let _=i.prevZ,x=i.nextZ;for(;_&&_.z>=d&&x&&x.z<=b;){if(_.x>=m&&_.x<=g&&_.y>=v&&_.y<=f&&_!==s&&_!==o&&Ti(a,h,c,u,l,p,_.x,_.y)&&Zt(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=m&&x.x<=g&&x.y>=v&&x.y<=f&&x!==s&&x!==o&&Ti(a,h,c,u,l,p,x.x,x.y)&&Zt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=d;){if(_.x>=m&&_.x<=g&&_.y>=v&&_.y<=f&&_!==s&&_!==o&&Ti(a,h,c,u,l,p,_.x,_.y)&&Zt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=b;){if(x.x>=m&&x.x<=g&&x.y>=v&&x.y<=f&&x!==s&&x!==o&&Ti(a,h,c,u,l,p,x.x,x.y)&&Zt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function qm(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!tr(s,r)&&ec(s,n,n.next,r)&&Qi(s,r)&&Qi(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ts(n),ts(n.next),n=i=r),n=n.next}while(n!==i);return Qn(n)}function Ym(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ng(o,a)){let c=nc(o,a);o=Qn(o,o.next),c=Qn(c,c.next),$i(o,t,e,n,s,r,0),$i(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function jm(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=tc(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(eg(l));for(s.sort(Zm),r=0;r<s.length;r++)e=Km(s[r],e);return e}function Zm(i,t){return i.x-t.x}function Km(i,t){const e=Jm(i,t);if(!e)return t;const n=nc(e,i);return Qn(n,n.next),Qn(e,e.next)}function Jm(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const p=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=r&&p>n&&(n=p,s=e.x<e.next.x?e:e.next,p===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ti(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Qi(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&$m(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function $m(i,t){return Zt(i.prev,i,t.prev)<0&&Zt(t.next,i,i.next)<0}function Qm(i,t,e,n){let s=i;do s.z===0&&(s.z=ta(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,tg(s)}function tg(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function ta(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function eg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ti(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ng(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ig(i,t)&&(Qi(i,t)&&Qi(t,i)&&sg(i,t)&&(Zt(i.prev,i,t.prev)||Zt(i,t.prev,t))||tr(i,t)&&Zt(i.prev,i,i.next)>0&&Zt(t.prev,t,t.next)>0)}function Zt(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function tr(i,t){return i.x===t.x&&i.y===t.y}function ec(i,t,e,n){const s=Us(Zt(i,t,e)),r=Us(Zt(i,t,n)),o=Us(Zt(e,n,i)),a=Us(Zt(e,n,t));return!!(s!==r&&o!==a||s===0&&Ls(i,e,t)||r===0&&Ls(i,n,t)||o===0&&Ls(e,i,n)||a===0&&Ls(e,t,n))}function Ls(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Us(i){return i>0?1:i<0?-1:0}function ig(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ec(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Qi(i,t){return Zt(i.prev,i,i.next)<0?Zt(i,t,i.next)>=0&&Zt(i,i.prev,t)>=0:Zt(i,t,i.prev)<0||Zt(i,i.next,t)<0}function sg(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function nc(i,t){const e=new ea(i.i,i.x,i.y),n=new ea(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Yo(i,t,e,n){const s=new ea(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ts(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ea(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function rg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class jn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return jn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];jo(t),Zo(n,t);let o=t.length;e.forEach(jo);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Zo(n,e[c]);const a=Vm.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function jo(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Zo(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class da extends Ue{constructor(t=new ji([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new xe(s,3)),this.setAttribute("uv",new xe(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,v=e.bevelSize!==void 0?e.bevelSize:m-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:ag;let _,x=!1,E,L,D,G;d&&(_=d.getSpacedPoints(h),x=!0,p=!1,E=d.computeFrenetFrames(h,!1),L=new H,D=new H,G=new H),p||(f=0,m=0,v=0,g=0);const M=a.extractPoints(l);let R=M.shape;const ot=M.holes;if(!jn.isClockWise(R)){R=R.reverse();for(let A=0,Q=ot.length;A<Q;A++){const O=ot[A];jn.isClockWise(O)&&(ot[A]=O.reverse())}}const V=jn.triangulateShape(R,ot),X=R;for(let A=0,Q=ot.length;A<Q;A++){const O=ot[A];R=R.concat(O)}function J(A,Q,O){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),A.clone().addScaledVector(Q,O)}const lt=R.length,q=V.length;function z(A,Q,O){let k,W,ft;const N=A.x-Q.x,w=A.y-Q.y,gt=O.x-A.x,Tt=O.y-A.y,Gt=N*N+w*w,P=N*Tt-w*gt;if(Math.abs(P)>Number.EPSILON){const y=Math.sqrt(Gt),it=Math.sqrt(gt*gt+Tt*Tt),vt=Q.x-w/y,xt=Q.y+N/y,I=O.x-Tt/it,pt=O.y+gt/it,_t=((I-vt)*Tt-(pt-xt)*gt)/(N*Tt-w*gt);k=vt+N*_t-A.x,W=xt+w*_t-A.y;const et=k*k+W*W;if(et<=2)return new rt(k,W);ft=Math.sqrt(et/2)}else{let y=!1;N>Number.EPSILON?gt>Number.EPSILON&&(y=!0):N<-Number.EPSILON?gt<-Number.EPSILON&&(y=!0):Math.sign(w)===Math.sign(Tt)&&(y=!0),y?(k=-w,W=N,ft=Math.sqrt(Gt)):(k=N,W=w,ft=Math.sqrt(Gt/2))}return new rt(k/ft,W/ft)}const dt=[];for(let A=0,Q=X.length,O=Q-1,k=A+1;A<Q;A++,O++,k++)O===Q&&(O=0),k===Q&&(k=0),dt[A]=z(X[A],X[O],X[k]);const at=[];let j,nt=dt.concat();for(let A=0,Q=ot.length;A<Q;A++){const O=ot[A];j=[];for(let k=0,W=O.length,ft=W-1,N=k+1;k<W;k++,ft++,N++)ft===W&&(ft=0),N===W&&(N=0),j[k]=z(O[k],O[ft],O[N]);at.push(j),nt=nt.concat(j)}for(let A=0;A<f;A++){const Q=A/f,O=m*Math.cos(Q*Math.PI/2),k=v*Math.sin(Q*Math.PI/2)+g;for(let W=0,ft=X.length;W<ft;W++){const N=J(X[W],dt[W],k);S(N.x,N.y,-O)}for(let W=0,ft=ot.length;W<ft;W++){const N=ot[W];j=at[W];for(let w=0,gt=N.length;w<gt;w++){const Tt=J(N[w],j[w],k);S(Tt.x,Tt.y,-O)}}}const yt=v+g;for(let A=0;A<lt;A++){const Q=p?J(R[A],nt[A],yt):R[A];x?(D.copy(E.normals[0]).multiplyScalar(Q.x),L.copy(E.binormals[0]).multiplyScalar(Q.y),G.copy(_[0]).add(D).add(L),S(G.x,G.y,G.z)):S(Q.x,Q.y,0)}for(let A=1;A<=h;A++)for(let Q=0;Q<lt;Q++){const O=p?J(R[Q],nt[Q],yt):R[Q];x?(D.copy(E.normals[A]).multiplyScalar(O.x),L.copy(E.binormals[A]).multiplyScalar(O.y),G.copy(_[A]).add(D).add(L),S(G.x,G.y,G.z)):S(O.x,O.y,u/h*A)}for(let A=f-1;A>=0;A--){const Q=A/f,O=m*Math.cos(Q*Math.PI/2),k=v*Math.sin(Q*Math.PI/2)+g;for(let W=0,ft=X.length;W<ft;W++){const N=J(X[W],dt[W],k);S(N.x,N.y,u+O)}for(let W=0,ft=ot.length;W<ft;W++){const N=ot[W];j=at[W];for(let w=0,gt=N.length;w<gt;w++){const Tt=J(N[w],j[w],k);x?S(Tt.x,Tt.y+_[h-1].y,_[h-1].x+O):S(Tt.x,Tt.y,u+O)}}}F(),U();function F(){const A=s.length/3;if(p){let Q=0,O=lt*Q;for(let k=0;k<q;k++){const W=V[k];Z(W[2]+O,W[1]+O,W[0]+O)}Q=h+f*2,O=lt*Q;for(let k=0;k<q;k++){const W=V[k];Z(W[0]+O,W[1]+O,W[2]+O)}}else{for(let Q=0;Q<q;Q++){const O=V[Q];Z(O[2],O[1],O[0])}for(let Q=0;Q<q;Q++){const O=V[Q];Z(O[0]+lt*h,O[1]+lt*h,O[2]+lt*h)}}n.addGroup(A,s.length/3-A,0)}function U(){const A=s.length/3;let Q=0;T(X,Q),Q+=X.length;for(let O=0,k=ot.length;O<k;O++){const W=ot[O];T(W,Q),Q+=W.length}n.addGroup(A,s.length/3-A,1)}function T(A,Q){let O=A.length;for(;--O>=0;){const k=O;let W=O-1;W<0&&(W=A.length-1);for(let ft=0,N=h+f*2;ft<N;ft++){const w=lt*ft,gt=lt*(ft+1),Tt=Q+k+w,Gt=Q+W+w,P=Q+W+gt,y=Q+k+gt;mt(Tt,Gt,P,y)}}}function S(A,Q,O){c.push(A),c.push(Q),c.push(O)}function Z(A,Q,O){$(A),$(Q),$(O);const k=s.length/3,W=b.generateTopUV(n,s,k-3,k-2,k-1);ht(W[0]),ht(W[1]),ht(W[2])}function mt(A,Q,O,k){$(A),$(Q),$(k),$(Q),$(O),$(k);const W=s.length/3,ft=b.generateSideWallUV(n,s,W-6,W-3,W-2,W-1);ht(ft[0]),ht(ft[1]),ht(ft[3]),ht(ft[1]),ht(ft[2]),ht(ft[3])}function $(A){s.push(c[A*3+0]),s.push(c[A*3+1]),s.push(c[A*3+2])}function ht(A){r.push(A.x),r.push(A.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return og(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ql[s.type]().fromJSON(s)),new da(n,t.options)}}const ag={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new rt(r,o),new rt(a,c),new rt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],p=t[s*3],m=t[s*3+1],v=t[s*3+2],g=t[r*3],f=t[r*3+1],d=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new rt(o,1-c),new rt(l,1-u),new rt(p,1-v),new rt(g,1-d)]:[new rt(a,1-c),new rt(h,1-u),new rt(m,1-v),new rt(f,1-d)]}};function og(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class pa extends Ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new H,p=new H,m=[],v=[],g=[],f=[];for(let d=0;d<=n;d++){const b=[],_=d/n;let x=0;d===0&&o===0?x=.5/e:d===n&&c===Math.PI&&(x=-.5/e);for(let E=0;E<=e;E++){const L=E/e;u.x=-t*Math.cos(s+L*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+L*r)*Math.sin(o+_*a),v.push(u.x,u.y,u.z),p.copy(u).normalize(),g.push(p.x,p.y,p.z),f.push(L+x,1-_),b.push(l++)}h.push(b)}for(let d=0;d<n;d++)for(let b=0;b<e;b++){const _=h[d][b+1],x=h[d][b],E=h[d+1][b],L=h[d+1][b+1];(d!==0||o>0)&&m.push(_,x,L),(d!==n-1||c<Math.PI)&&m.push(x,E,L)}this.setIndex(m),this.setAttribute("position",new xe(v,3)),this.setAttribute("normal",new xe(g,3)),this.setAttribute("uv",new xe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class lg extends Ii{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pl,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Ko={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class cg{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=l.length;u<p;u+=2){const m=l[u],v=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return v}return null}}}const hg=new cg;class ma{constructor(t){this.manager=t!==void 0?t:hg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ma.DEFAULT_MATERIAL_NAME="__DEFAULT";const an={};class ug extends Error{constructor(t,e){super(t),this.response=e}}class fg extends ma{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Ko.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(an[t]!==void 0){an[t].push({onLoad:e,onProgress:n,onError:s});return}an[t]=[],an[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=an[t],u=l.body.getReader(),p=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=p?parseInt(p):0,v=m!==0;let g=0;const f=new ReadableStream({start(d){b();function b(){u.read().then(({done:_,value:x})=>{if(_)d.close();else{g+=x.byteLength;const E=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:m});for(let L=0,D=h.length;L<D;L++){const G=h[L];G.onProgress&&G.onProgress(E)}d.enqueue(x),b()}})}}});return new Response(f)}else throw new ug(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),p=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(p);return l.arrayBuffer().then(v=>m.decode(v))}}}).then(l=>{Ko.add(t,l);const h=an[t];delete an[t];for(let u=0,p=h.length;u<p;u++){const m=h[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{const h=an[t];if(h===void 0)throw this.manager.itemError(t),l;delete an[t];for(let u=0,p=h.length;u<p;u++){const m=h[u];m.onError&&m.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class ic extends he{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Br=new Kt,Jo=new H,$o=new H;class dg{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new la,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Jo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jo),$o.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($o),e.updateMatrixWorld(),Br.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Br),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Br)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class pg extends dg{constructor(){super(new Vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mg extends ic{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.target=new he,this.shadow=new pg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class gg extends ic{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class _g{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Qo();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Qo(){return(typeof performance>"u"?Date:performance).now()}class vg{constructor(t,e,n=0,s=1/0){this.ray=new aa(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new oa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return na(t,this,n,e),n.sort(tl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)na(t[s],this,n,e);return n.sort(tl),n}}function tl(i,t){return i.distance-t.distance}function na(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)na(s[r],t,e,!0)}}class el{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ue(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const nl=new rt;class xg{constructor(t=new rt(1/0,1/0),e=new rt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=nl.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nl).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class Ln{constructor(){this.type="ShapePath",this.color=new Wt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Ri,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,o){return this.currentPath.bezierCurveTo(t,e,n,s,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(d){const b=[];for(let _=0,x=d.length;_<x;_++){const E=d[_],L=new ji;L.curves=E.curves,b.push(L)}return b}function n(d,b){const _=b.length;let x=!1;for(let E=_-1,L=0;L<_;E=L++){let D=b[E],G=b[L],M=G.x-D.x,R=G.y-D.y;if(Math.abs(R)>Number.EPSILON){if(R<0&&(D=b[L],M=-M,G=b[E],R=-R),d.y<D.y||d.y>G.y)continue;if(d.y===D.y){if(d.x===D.x)return!0}else{const ot=R*(d.x-D.x)-M*(d.y-D.y);if(ot===0)return!0;if(ot<0)continue;x=!x}}else{if(d.y!==D.y)continue;if(G.x<=d.x&&d.x<=D.x||D.x<=d.x&&d.x<=G.x)return!0}}return x}const s=jn.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c;const l=[];if(r.length===1)return a=r[0],c=new ji,c.curves=a.curves,l.push(c),l;let h=!s(r[0].getPoints());h=t?!h:h;const u=[],p=[];let m=[],v=0,g;p[v]=void 0,m[v]=[];for(let d=0,b=r.length;d<b;d++)a=r[d],g=a.getPoints(),o=s(g),o=t?!o:o,o?(!h&&p[v]&&v++,p[v]={s:new ji,p:g},p[v].s.curves=a.curves,h&&v++,m[v]=[]):m[v].push({h:a,p:g[0]});if(!p[0])return e(r);if(p.length>1){let d=!1,b=0;for(let _=0,x=p.length;_<x;_++)u[_]=[];for(let _=0,x=p.length;_<x;_++){const E=m[_];for(let L=0;L<E.length;L++){const D=E[L];let G=!0;for(let M=0;M<p.length;M++)n(D.p,p[M].p)&&(_!==M&&b++,G?(G=!1,u[M].push(D)):d=!0);G&&u[_].push(D)}}b>0&&d===!1&&(m=u)}let f;for(let d=0,b=p.length;d<b;d++){c=p[d].s,l.push(c),f=m[d];for(let _=0,x=f.length;_<x;_++)c.holes.push(f[_].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sa);const Mg=Bt;class Vs extends ma{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,s){const r=this,o=new fg(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},n,s)}parse(t){const e=this;function n(F,U){if(F.nodeType!==1)return;const T=x(F);let S=!1,Z=null;switch(F.nodeName){case"svg":U=v(F,U);break;case"style":r(F);break;case"g":U=v(F,U);break;case"path":U=v(F,U),F.hasAttribute("d")&&(Z=s(F));break;case"rect":U=v(F,U),Z=c(F);break;case"polygon":U=v(F,U),Z=l(F);break;case"polyline":U=v(F,U),Z=h(F);break;case"circle":U=v(F,U),Z=u(F);break;case"ellipse":U=v(F,U),Z=p(F);break;case"line":U=v(F,U),Z=m(F);break;case"defs":S=!0;break;case"use":U=v(F,U);const ht=(F.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),A=F.viewportElement.getElementById(ht);A?n(A,U):console.warn("SVGLoader: 'use node' references non-existent node id: "+ht);break}Z&&(U.fill!==void 0&&U.fill!=="none"&&Z.color.setStyle(U.fill,Mg),L(Z,j),tt.push(Z),Z.userData={node:F,style:U});const mt=F.childNodes;for(let $=0;$<mt.length;$++){const ht=mt[$];S&&ht.nodeName!=="style"&&ht.nodeName!=="defs"||n(ht,U)}T&&(X.pop(),X.length>0?j.copy(X[X.length-1]):j.identity())}function s(F){const U=new Ln,T=new rt,S=new rt,Z=new rt;let mt=!0,$=!1;const ht=F.getAttribute("d");if(ht===""||ht==="none")return null;const A=ht.match(/[a-df-z][^a-df-z]*/ig);for(let Q=0,O=A.length;Q<O;Q++){const k=A[Q],W=k.charAt(0),ft=k.slice(1).trim();mt===!0&&($=!0,mt=!1);let N;switch(W){case"M":N=f(ft);for(let w=0,gt=N.length;w<gt;w+=2)T.x=N[w+0],T.y=N[w+1],S.x=T.x,S.y=T.y,w===0?U.moveTo(T.x,T.y):U.lineTo(T.x,T.y),w===0&&Z.copy(T);break;case"H":N=f(ft);for(let w=0,gt=N.length;w<gt;w++)T.x=N[w],S.x=T.x,S.y=T.y,U.lineTo(T.x,T.y),w===0&&$===!0&&Z.copy(T);break;case"V":N=f(ft);for(let w=0,gt=N.length;w<gt;w++)T.y=N[w],S.x=T.x,S.y=T.y,U.lineTo(T.x,T.y),w===0&&$===!0&&Z.copy(T);break;case"L":N=f(ft);for(let w=0,gt=N.length;w<gt;w+=2)T.x=N[w+0],T.y=N[w+1],S.x=T.x,S.y=T.y,U.lineTo(T.x,T.y),w===0&&$===!0&&Z.copy(T);break;case"C":N=f(ft);for(let w=0,gt=N.length;w<gt;w+=6)U.bezierCurveTo(N[w+0],N[w+1],N[w+2],N[w+3],N[w+4],N[w+5]),S.x=N[w+2],S.y=N[w+3],T.x=N[w+4],T.y=N[w+5],w===0&&$===!0&&Z.copy(T);break;case"S":N=f(ft);for(let w=0,gt=N.length;w<gt;w+=4)U.bezierCurveTo(g(T.x,S.x),g(T.y,S.y),N[w+0],N[w+1],N[w+2],N[w+3]),S.x=N[w+0],S.y=N[w+1],T.x=N[w+2],T.y=N[w+3],w===0&&$===!0&&Z.copy(T);break;case"Q":N=f(ft);for(let w=0,gt=N.length;w<gt;w+=4)U.quadraticCurveTo(N[w+0],N[w+1],N[w+2],N[w+3]),S.x=N[w+0],S.y=N[w+1],T.x=N[w+2],T.y=N[w+3],w===0&&$===!0&&Z.copy(T);break;case"T":N=f(ft);for(let w=0,gt=N.length;w<gt;w+=2){const Tt=g(T.x,S.x),Gt=g(T.y,S.y);U.quadraticCurveTo(Tt,Gt,N[w+0],N[w+1]),S.x=Tt,S.y=Gt,T.x=N[w+0],T.y=N[w+1],w===0&&$===!0&&Z.copy(T)}break;case"A":N=f(ft,[3,4],7);for(let w=0,gt=N.length;w<gt;w+=7){if(N[w+5]==T.x&&N[w+6]==T.y)continue;const Tt=T.clone();T.x=N[w+5],T.y=N[w+6],S.x=T.x,S.y=T.y,o(U,N[w],N[w+1],N[w+2],N[w+3],N[w+4],Tt,T),w===0&&$===!0&&Z.copy(T)}break;case"m":N=f(ft);for(let w=0,gt=N.length;w<gt;w+=2)T.x+=N[w+0],T.y+=N[w+1],S.x=T.x,S.y=T.y,w===0?U.moveTo(T.x,T.y):U.lineTo(T.x,T.y),w===0&&Z.copy(T);break;case"h":N=f(ft);for(let w=0,gt=N.length;w<gt;w++)T.x+=N[w],S.x=T.x,S.y=T.y,U.lineTo(T.x,T.y),w===0&&$===!0&&Z.copy(T);break;case"v":N=f(ft);for(let w=0,gt=N.length;w<gt;w++)T.y+=N[w],S.x=T.x,S.y=T.y,U.lineTo(T.x,T.y),w===0&&$===!0&&Z.copy(T);break;case"l":N=f(ft);for(let w=0,gt=N.length;w<gt;w+=2)T.x+=N[w+0],T.y+=N[w+1],S.x=T.x,S.y=T.y,U.lineTo(T.x,T.y),w===0&&$===!0&&Z.copy(T);break;case"c":N=f(ft);for(let w=0,gt=N.length;w<gt;w+=6)U.bezierCurveTo(T.x+N[w+0],T.y+N[w+1],T.x+N[w+2],T.y+N[w+3],T.x+N[w+4],T.y+N[w+5]),S.x=T.x+N[w+2],S.y=T.y+N[w+3],T.x+=N[w+4],T.y+=N[w+5],w===0&&$===!0&&Z.copy(T);break;case"s":N=f(ft);for(let w=0,gt=N.length;w<gt;w+=4)U.bezierCurveTo(g(T.x,S.x),g(T.y,S.y),T.x+N[w+0],T.y+N[w+1],T.x+N[w+2],T.y+N[w+3]),S.x=T.x+N[w+0],S.y=T.y+N[w+1],T.x+=N[w+2],T.y+=N[w+3],w===0&&$===!0&&Z.copy(T);break;case"q":N=f(ft);for(let w=0,gt=N.length;w<gt;w+=4)U.quadraticCurveTo(T.x+N[w+0],T.y+N[w+1],T.x+N[w+2],T.y+N[w+3]),S.x=T.x+N[w+0],S.y=T.y+N[w+1],T.x+=N[w+2],T.y+=N[w+3],w===0&&$===!0&&Z.copy(T);break;case"t":N=f(ft);for(let w=0,gt=N.length;w<gt;w+=2){const Tt=g(T.x,S.x),Gt=g(T.y,S.y);U.quadraticCurveTo(Tt,Gt,T.x+N[w+0],T.y+N[w+1]),S.x=Tt,S.y=Gt,T.x=T.x+N[w+0],T.y=T.y+N[w+1],w===0&&$===!0&&Z.copy(T)}break;case"a":N=f(ft,[3,4],7);for(let w=0,gt=N.length;w<gt;w+=7){if(N[w+5]==0&&N[w+6]==0)continue;const Tt=T.clone();T.x+=N[w+5],T.y+=N[w+6],S.x=T.x,S.y=T.y,o(U,N[w],N[w+1],N[w+2],N[w+3],N[w+4],Tt,T),w===0&&$===!0&&Z.copy(T)}break;case"Z":case"z":U.currentPath.autoClose=!0,U.currentPath.curves.length>0&&(T.copy(Z),U.currentPath.currentPoint.copy(T),mt=!0);break;default:console.warn(k)}$=!1}return U}function r(F){if(!(!F.sheet||!F.sheet.cssRules||!F.sheet.cssRules.length))for(let U=0;U<F.sheet.cssRules.length;U++){const T=F.sheet.cssRules[U];if(T.type!==1)continue;const S=T.selectorText.split(/,/gm).filter(Boolean).map(Z=>Z.trim());for(let Z=0;Z<S.length;Z++){const mt=Object.fromEntries(Object.entries(T.style).filter(([,$])=>$!==""));V[S[Z]]=Object.assign(V[S[Z]]||{},mt)}}}function o(F,U,T,S,Z,mt,$,ht){if(U==0||T==0){F.lineTo(ht.x,ht.y);return}S=S*Math.PI/180,U=Math.abs(U),T=Math.abs(T);const A=($.x-ht.x)/2,Q=($.y-ht.y)/2,O=Math.cos(S)*A+Math.sin(S)*Q,k=-Math.sin(S)*A+Math.cos(S)*Q;let W=U*U,ft=T*T;const N=O*O,w=k*k,gt=N/W+w/ft;if(gt>1){const _t=Math.sqrt(gt);U=_t*U,T=_t*T,W=U*U,ft=T*T}const Tt=W*w+ft*N,Gt=(W*ft-Tt)/Tt;let P=Math.sqrt(Math.max(0,Gt));Z===mt&&(P=-P);const y=P*U*k/T,it=-P*T*O/U,vt=Math.cos(S)*y-Math.sin(S)*it+($.x+ht.x)/2,xt=Math.sin(S)*y+Math.cos(S)*it+($.y+ht.y)/2,I=a(1,0,(O-y)/U,(k-it)/T),pt=a((O-y)/U,(k-it)/T,(-O-y)/U,(-k-it)/T)%(Math.PI*2);F.currentPath.absellipse(vt,xt,U,T,I,I+pt,mt===0,S)}function a(F,U,T,S){const Z=F*T+U*S,mt=Math.sqrt(F*F+U*U)*Math.sqrt(T*T+S*S);let $=Math.acos(Math.max(-1,Math.min(1,Z/mt)));return F*S-U*T<0&&($=-$),$}function c(F){const U=_(F.getAttribute("x")||0),T=_(F.getAttribute("y")||0),S=_(F.getAttribute("rx")||F.getAttribute("ry")||0),Z=_(F.getAttribute("ry")||F.getAttribute("rx")||0),mt=_(F.getAttribute("width")),$=_(F.getAttribute("height")),ht=1-.551915024494,A=new Ln;return A.moveTo(U+S,T),A.lineTo(U+mt-S,T),(S!==0||Z!==0)&&A.bezierCurveTo(U+mt-S*ht,T,U+mt,T+Z*ht,U+mt,T+Z),A.lineTo(U+mt,T+$-Z),(S!==0||Z!==0)&&A.bezierCurveTo(U+mt,T+$-Z*ht,U+mt-S*ht,T+$,U+mt-S,T+$),A.lineTo(U+S,T+$),(S!==0||Z!==0)&&A.bezierCurveTo(U+S*ht,T+$,U,T+$-Z*ht,U,T+$-Z),A.lineTo(U,T+Z),(S!==0||Z!==0)&&A.bezierCurveTo(U,T+Z*ht,U+S*ht,T,U+S,T),A}function l(F){function U(mt,$,ht){const A=_($),Q=_(ht);Z===0?S.moveTo(A,Q):S.lineTo(A,Q),Z++}const T=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,S=new Ln;let Z=0;return F.getAttribute("points").replace(T,U),S.currentPath.autoClose=!0,S}function h(F){function U(mt,$,ht){const A=_($),Q=_(ht);Z===0?S.moveTo(A,Q):S.lineTo(A,Q),Z++}const T=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,S=new Ln;let Z=0;return F.getAttribute("points").replace(T,U),S.currentPath.autoClose=!1,S}function u(F){const U=_(F.getAttribute("cx")||0),T=_(F.getAttribute("cy")||0),S=_(F.getAttribute("r")||0),Z=new Ri;Z.absarc(U,T,S,0,Math.PI*2);const mt=new Ln;return mt.subPaths.push(Z),mt}function p(F){const U=_(F.getAttribute("cx")||0),T=_(F.getAttribute("cy")||0),S=_(F.getAttribute("rx")||0),Z=_(F.getAttribute("ry")||0),mt=new Ri;mt.absellipse(U,T,S,Z,0,Math.PI*2);const $=new Ln;return $.subPaths.push(mt),$}function m(F){const U=_(F.getAttribute("x1")||0),T=_(F.getAttribute("y1")||0),S=_(F.getAttribute("x2")||0),Z=_(F.getAttribute("y2")||0),mt=new Ln;return mt.moveTo(U,T),mt.lineTo(S,Z),mt.currentPath.autoClose=!1,mt}function v(F,U){U=Object.assign({},U);let T={};if(F.hasAttribute("class")){const $=F.getAttribute("class").split(/\s/).filter(Boolean).map(ht=>ht.trim());for(let ht=0;ht<$.length;ht++)T=Object.assign(T,V["."+$[ht]])}F.hasAttribute("id")&&(T=Object.assign(T,V["#"+F.getAttribute("id")]));function S($,ht,A){A===void 0&&(A=function(O){return O.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),O}),F.hasAttribute($)&&(U[ht]=A(F.getAttribute($))),T[$]&&(U[ht]=A(T[$])),F.style&&F.style[$]!==""&&(U[ht]=A(F.style[$]))}function Z($){return Math.max(0,Math.min(1,_($)))}function mt($){return Math.max(0,_($))}return S("fill","fill"),S("fill-opacity","fillOpacity",Z),S("fill-rule","fillRule"),S("opacity","opacity",Z),S("stroke","stroke"),S("stroke-opacity","strokeOpacity",Z),S("stroke-width","strokeWidth",mt),S("stroke-linejoin","strokeLineJoin"),S("stroke-linecap","strokeLineCap"),S("stroke-miterlimit","strokeMiterLimit",mt),S("visibility","visibility"),U}function g(F,U){return F-(U-F)}function f(F,U,T){if(typeof F!="string")throw new TypeError("Invalid input: "+typeof F);const S={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},Z=0,mt=1,$=2,ht=3;let A=Z,Q=!0,O="",k="";const W=[];function ft(Tt,Gt,P){const y=new SyntaxError('Unexpected character "'+Tt+'" at index '+Gt+".");throw y.partial=P,y}function N(){O!==""&&(k===""?W.push(Number(O)):W.push(Number(O)*Math.pow(10,Number(k)))),O="",k=""}let w;const gt=F.length;for(let Tt=0;Tt<gt;Tt++){if(w=F[Tt],Array.isArray(U)&&U.includes(W.length%T)&&S.FLAGS.test(w)){A=mt,O=w,N();continue}if(A===Z){if(S.WHITESPACE.test(w))continue;if(S.DIGIT.test(w)||S.SIGN.test(w)){A=mt,O=w;continue}if(S.POINT.test(w)){A=$,O=w;continue}S.COMMA.test(w)&&(Q&&ft(w,Tt,W),Q=!0)}if(A===mt){if(S.DIGIT.test(w)){O+=w;continue}if(S.POINT.test(w)){O+=w,A=$;continue}if(S.EXP.test(w)){A=ht;continue}S.SIGN.test(w)&&O.length===1&&S.SIGN.test(O[0])&&ft(w,Tt,W)}if(A===$){if(S.DIGIT.test(w)){O+=w;continue}if(S.EXP.test(w)){A=ht;continue}S.POINT.test(w)&&O[O.length-1]==="."&&ft(w,Tt,W)}if(A===ht){if(S.DIGIT.test(w)){k+=w;continue}if(S.SIGN.test(w)){if(k===""){k+=w;continue}k.length===1&&S.SIGN.test(k)&&ft(w,Tt,W)}}S.WHITESPACE.test(w)?(N(),A=Z,Q=!1):S.COMMA.test(w)?(N(),A=Z,Q=!0):S.SIGN.test(w)?(N(),A=mt,O=w):S.POINT.test(w)?(N(),A=$,O=w):ft(w,Tt,W)}return N(),W}const d=["mm","cm","in","pt","pc","px"],b={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function _(F){let U="px";if(typeof F=="string"||F instanceof String)for(let S=0,Z=d.length;S<Z;S++){const mt=d[S];if(F.endsWith(mt)){U=mt,F=F.substring(0,F.length-mt.length);break}}let T;return U==="px"&&e.defaultUnit!=="px"?T=b.in[e.defaultUnit]/e.defaultDPI:(T=b[U][e.defaultUnit],T<0&&(T=b[U].in*e.defaultDPI)),T*parseFloat(F)}function x(F){if(!(F.hasAttribute("transform")||F.nodeName==="use"&&(F.hasAttribute("x")||F.hasAttribute("y"))))return null;const U=E(F);return X.length>0&&U.premultiply(X[X.length-1]),j.copy(U),X.push(U),U}function E(F){const U=new Ot,T=J;if(F.nodeName==="use"&&(F.hasAttribute("x")||F.hasAttribute("y"))){const S=_(F.getAttribute("x")),Z=_(F.getAttribute("y"));U.translate(S,Z)}if(F.hasAttribute("transform")){const S=F.getAttribute("transform").split(")");for(let Z=S.length-1;Z>=0;Z--){const mt=S[Z].trim();if(mt==="")continue;const $=mt.indexOf("("),ht=mt.length;if($>0&&$<ht){const A=mt.slice(0,$),Q=f(mt.slice($+1));switch(T.identity(),A){case"translate":if(Q.length>=1){const O=Q[0];let k=0;Q.length>=2&&(k=Q[1]),T.translate(O,k)}break;case"rotate":if(Q.length>=1){let O=0,k=0,W=0;O=Q[0]*Math.PI/180,Q.length>=3&&(k=Q[1],W=Q[2]),lt.makeTranslation(-k,-W),q.makeRotation(O),z.multiplyMatrices(q,lt),lt.makeTranslation(k,W),T.multiplyMatrices(lt,z)}break;case"scale":if(Q.length>=1){const O=Q[0];let k=O;Q.length>=2&&(k=Q[1]),T.scale(O,k)}break;case"skewX":Q.length===1&&T.set(1,Math.tan(Q[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":Q.length===1&&T.set(1,0,0,Math.tan(Q[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":Q.length===6&&T.set(Q[0],Q[2],Q[4],Q[1],Q[3],Q[5],0,0,1);break}}U.premultiply(T)}}return U}function L(F,U){function T($){at.set($.x,$.y,1).applyMatrix3(U),$.set(at.x,at.y)}function S($){const ht=$.xRadius,A=$.yRadius,Q=Math.cos($.aRotation),O=Math.sin($.aRotation),k=new H(ht*Q,ht*O,0),W=new H(-A*O,A*Q,0),ft=k.applyMatrix3(U),N=W.applyMatrix3(U),w=J.set(ft.x,N.x,0,ft.y,N.y,0,0,0,1),gt=lt.copy(w).invert(),P=q.copy(gt).transpose().multiply(gt).elements,y=ot(P[0],P[1],P[4]),it=Math.sqrt(y.rt1),vt=Math.sqrt(y.rt2);if($.xRadius=1/it,$.yRadius=1/vt,$.aRotation=Math.atan2(y.sn,y.cs),!(($.aEndAngle-$.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const I=lt.set(it,0,0,0,vt,0,0,0,1),pt=q.set(y.cs,y.sn,0,-y.sn,y.cs,0,0,0,1),_t=I.multiply(pt).multiply(w),et=At=>{const{x:Lt,y:Pt}=new H(Math.cos(At),Math.sin(At),0).applyMatrix3(_t);return Math.atan2(Pt,Lt)};$.aStartAngle=et($.aStartAngle),$.aEndAngle=et($.aEndAngle),D(U)&&($.aClockwise=!$.aClockwise)}}function Z($){const ht=M(U),A=R(U);$.xRadius*=ht,$.yRadius*=A;const Q=ht>Number.EPSILON?Math.atan2(U.elements[1],U.elements[0]):Math.atan2(-U.elements[3],U.elements[4]);$.aRotation+=Q,D(U)&&($.aStartAngle*=-1,$.aEndAngle*=-1,$.aClockwise=!$.aClockwise)}const mt=F.subPaths;for(let $=0,ht=mt.length;$<ht;$++){const Q=mt[$].curves;for(let O=0;O<Q.length;O++){const k=Q[O];k.isLineCurve?(T(k.v1),T(k.v2)):k.isCubicBezierCurve?(T(k.v0),T(k.v1),T(k.v2),T(k.v3)):k.isQuadraticBezierCurve?(T(k.v0),T(k.v1),T(k.v2)):k.isEllipseCurve&&(dt.set(k.aX,k.aY),T(dt),k.aX=dt.x,k.aY=dt.y,G(U)?S(k):Z(k))}}}function D(F){const U=F.elements;return U[0]*U[4]-U[1]*U[3]<0}function G(F){const U=F.elements,T=U[0]*U[3]+U[1]*U[4];if(T===0)return!1;const S=M(F),Z=R(F);return Math.abs(T/(S*Z))>Number.EPSILON}function M(F){const U=F.elements;return Math.sqrt(U[0]*U[0]+U[1]*U[1])}function R(F){const U=F.elements;return Math.sqrt(U[3]*U[3]+U[4]*U[4])}function ot(F,U,T){let S,Z,mt,$,ht;const A=F+T,Q=F-T,O=Math.sqrt(Q*Q+4*U*U);return A>0?(S=.5*(A+O),ht=1/S,Z=F*ht*T-U*ht*U):A<0?Z=.5*(A-O):(S=.5*O,Z=-.5*O),Q>0?mt=Q+O:mt=Q-O,Math.abs(mt)>2*Math.abs(U)?(ht=-2*U/mt,$=1/Math.sqrt(1+ht*ht),mt=ht*$):Math.abs(U)===0?(mt=1,$=0):(ht=-.5*mt/U,mt=1/Math.sqrt(1+ht*ht),$=ht*mt),Q>0&&(ht=mt,mt=-$,$=ht),{rt1:S,rt2:Z,cs:mt,sn:$}}const tt=[],V={},X=[],J=new Ot,lt=new Ot,q=new Ot,z=new Ot,dt=new rt,at=new H,j=new Ot,nt=new DOMParser().parseFromString(t,"image/svg+xml");return n(nt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:tt,xml:nt.documentElement}}static createShapes(t){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:n.ORIGIN,t:0};function r(g,f,d,b){const _=g.x,x=f.x,E=d.x,L=b.x,D=g.y,G=f.y,M=d.y,R=b.y,ot=(L-E)*(D-M)-(R-M)*(_-E),tt=(x-_)*(D-M)-(G-D)*(_-E),V=(R-M)*(x-_)-(L-E)*(G-D),X=ot/V,J=tt/V;if(V===0&&ot!==0||X<=0||X>=1||J<0||J>1)return null;if(ot===0&&V===0){for(let lt=0;lt<2;lt++)if(o(lt===0?d:b,g,f),s.loc==n.ORIGIN){const q=lt===0?d:b;return{x:q.x,y:q.y,t:s.t}}else if(s.loc==n.BETWEEN){const q=+(_+s.t*(x-_)).toPrecision(10),z=+(D+s.t*(G-D)).toPrecision(10);return{x:q,y:z,t:s.t}}return null}else{for(let z=0;z<2;z++)if(o(z===0?d:b,g,f),s.loc==n.ORIGIN){const dt=z===0?d:b;return{x:dt.x,y:dt.y,t:s.t}}const lt=+(_+X*(x-_)).toPrecision(10),q=+(D+X*(G-D)).toPrecision(10);return{x:lt,y:q,t:X}}}function o(g,f,d){const b=d.x-f.x,_=d.y-f.y,x=g.x-f.x,E=g.y-f.y,L=b*E-x*_;if(g.x===f.x&&g.y===f.y){s.loc=n.ORIGIN,s.t=0;return}if(g.x===d.x&&g.y===d.y){s.loc=n.DESTINATION,s.t=1;return}if(L<-Number.EPSILON){s.loc=n.LEFT;return}if(L>Number.EPSILON){s.loc=n.RIGHT;return}if(b*x<0||_*E<0){s.loc=n.BEHIND;return}if(Math.sqrt(b*b+_*_)<Math.sqrt(x*x+E*E)){s.loc=n.BEYOND;return}let D;b!==0?D=x/b:D=E/_,s.loc=n.BETWEEN,s.t=D}function a(g,f){const d=[],b=[];for(let _=1;_<g.length;_++){const x=g[_-1],E=g[_];for(let L=1;L<f.length;L++){const D=f[L-1],G=f[L],M=r(x,E,D,G);M!==null&&d.find(R=>R.t<=M.t+Number.EPSILON&&R.t>=M.t-Number.EPSILON)===void 0&&(d.push(M),b.push(new rt(M.x,M.y)))}}return b}function c(g,f,d){const b=new rt;f.getCenter(b);const _=[];return d.forEach(x=>{x.boundingBox.containsPoint(b)&&a(g,x.points).forEach(L=>{_.push({identifier:x.identifier,isCW:x.isCW,point:L})})}),_.sort((x,E)=>x.point.x-E.point.x),_}function l(g,f,d,b,_){(_==null||_==="")&&(_="nonzero");const x=new rt;g.boundingBox.getCenter(x);const E=[new rt(d,x.y),new rt(b,x.y)],L=c(E,g.boundingBox,f);L.sort((tt,V)=>tt.point.x-V.point.x);const D=[],G=[];L.forEach(tt=>{tt.identifier===g.identifier?D.push(tt):G.push(tt)});const M=D[0].point.x,R=[];let ot=0;for(;ot<G.length&&G[ot].point.x<M;)R.length>0&&R[R.length-1]===G[ot].identifier?R.pop():R.push(G[ot].identifier),ot++;if(R.push(g.identifier),_==="evenodd"){const tt=R.length%2===0,V=R[R.length-2];return{identifier:g.identifier,isHole:tt,for:V}}else if(_==="nonzero"){let tt=!0,V=null,X=null;for(let J=0;J<R.length;J++){const lt=R[J];tt?(X=f[lt].isCW,tt=!1,V=lt):X!==f[lt].isCW&&(X=f[lt].isCW,tt=!0)}return{identifier:g.identifier,isHole:tt,for:V}}else console.warn('fill-rule: "'+_+'" is currently not implemented.')}let h=999999999,u=-999999999,p=t.subPaths.map(g=>{const f=g.getPoints();let d=-999999999,b=999999999,_=-999999999,x=999999999;for(let E=0;E<f.length;E++){const L=f[E];L.y>d&&(d=L.y),L.y<b&&(b=L.y),L.x>_&&(_=L.x),L.x<x&&(x=L.x)}return u<=_&&(u=_+1),h>=x&&(h=x-1),{curves:g.curves,points:f,isCW:jn.isClockWise(f),identifier:-1,boundingBox:new xg(new rt(x,b),new rt(_,d))}});p=p.filter(g=>g.points.length>1);for(let g=0;g<p.length;g++)p[g].identifier=g;const m=p.map(g=>l(g,p,h,u,t.userData?t.userData.style.fillRule:void 0)),v=[];return p.forEach(g=>{if(!m[g.identifier].isHole){const d=new ji;d.curves=g.curves,m.filter(_=>_.isHole&&_.for===g.identifier).forEach(_=>{const x=p[_.identifier],E=new Ri;E.curves=x.curves,d.holes.push(E)}),v.push(d)}}),v}static getStrokeStyle(t,e,n,s,r){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(t,e,n,s){const r=[],o=[],a=[];if(Vs.pointsToStrokeWithBuffers(t,e,n,s,r,o,a)===0)return null;const c=new Ue;return c.setAttribute("position",new xe(r,3)),c.setAttribute("normal",new xe(o,3)),c.setAttribute("uv",new xe(a,2)),c}static pointsToStrokeWithBuffers(t,e,n,s,r,o,a,c){const l=new rt,h=new rt,u=new rt,p=new rt,m=new rt,v=new rt,g=new rt,f=new rt,d=new rt,b=new rt,_=new rt,x=new rt,E=new rt,L=new rt,D=new rt,G=new rt,M=new rt;n=n!==void 0?n:12,s=s!==void 0?s:.001,c=c!==void 0?c:0,t=Q(t);const R=t.length;if(R<2)return 0;const ot=t[0].equals(t[R-1]);let tt,V=t[0],X;const J=e.strokeWidth/2,lt=1/(R-1);let q=0,z,dt,at,j,nt=!1,yt=0,F=c*3,U=c*2;T(t[0],t[1],l).multiplyScalar(J),f.copy(t[0]).sub(l),d.copy(t[0]).add(l),b.copy(f),_.copy(d);for(let O=1;O<R;O++){tt=t[O],O===R-1?ot?X=t[1]:X=void 0:X=t[O+1];const k=l;if(T(V,tt,k),u.copy(k).multiplyScalar(J),x.copy(tt).sub(u),E.copy(tt).add(u),z=q+lt,dt=!1,X!==void 0){T(tt,X,h),u.copy(h).multiplyScalar(J),L.copy(tt).sub(u),D.copy(tt).add(u),at=!0,u.subVectors(X,V),k.dot(u)<0&&(at=!1),O===1&&(nt=at),u.subVectors(X,tt),u.normalize();const W=Math.abs(k.dot(u));if(W>Number.EPSILON){const ft=J/W;u.multiplyScalar(-ft),p.subVectors(tt,V),m.copy(p).setLength(ft).add(u),G.copy(m).negate();const N=m.length(),w=p.length();p.divideScalar(w),v.subVectors(X,tt);const gt=v.length();switch(v.divideScalar(gt),p.dot(G)<w&&v.dot(G)<gt&&(dt=!0),M.copy(m).add(tt),G.add(tt),j=!1,dt?at?(D.copy(G),E.copy(G)):(L.copy(G),x.copy(G)):mt(),e.strokeLineJoin){case"bevel":$(at,dt,z);break;case"round":ht(at,dt),at?Z(tt,x,L,z,0):Z(tt,D,E,z,1);break;case"miter":case"miter-clip":default:const Tt=J*e.strokeMiterLimit/N;if(Tt<1)if(e.strokeLineJoin!=="miter-clip"){$(at,dt,z);break}else ht(at,dt),at?(v.subVectors(M,x).multiplyScalar(Tt).add(x),g.subVectors(M,L).multiplyScalar(Tt).add(L),S(x,z,0),S(v,z,0),S(tt,z,.5),S(tt,z,.5),S(v,z,0),S(g,z,0),S(tt,z,.5),S(g,z,0),S(L,z,0)):(v.subVectors(M,E).multiplyScalar(Tt).add(E),g.subVectors(M,D).multiplyScalar(Tt).add(D),S(E,z,1),S(v,z,1),S(tt,z,.5),S(tt,z,.5),S(v,z,1),S(g,z,1),S(tt,z,.5),S(g,z,1),S(D,z,1));else dt?(at?(S(d,q,1),S(f,q,0),S(M,z,0),S(d,q,1),S(M,z,0),S(G,z,1)):(S(d,q,1),S(f,q,0),S(M,z,1),S(f,q,0),S(G,z,0),S(M,z,1)),at?L.copy(M):D.copy(M)):at?(S(x,z,0),S(M,z,0),S(tt,z,.5),S(tt,z,.5),S(M,z,0),S(L,z,0)):(S(E,z,1),S(M,z,1),S(tt,z,.5),S(tt,z,.5),S(M,z,1),S(D,z,1)),j=!0;break}}else mt()}else mt();!ot&&O===R-1&&A(t[0],b,_,at,!0,q),q=z,V=tt,f.copy(L),d.copy(D)}if(!ot)A(tt,x,E,at,!1,z);else if(dt&&r){let O=M,k=G;nt!==at&&(O=G,k=M),at?(j||nt)&&(k.toArray(r,0*3),k.toArray(r,3*3),j&&O.toArray(r,1*3)):(j||!nt)&&(k.toArray(r,1*3),k.toArray(r,3*3),j&&O.toArray(r,0*3))}return yt;function T(O,k,W){return W.subVectors(k,O),W.set(-W.y,W.x).normalize()}function S(O,k,W){r&&(r[F]=O.x,r[F+1]=O.y,r[F+2]=0,o&&(o[F]=0,o[F+1]=0,o[F+2]=1),F+=3,a&&(a[U]=k,a[U+1]=W,U+=2)),yt+=3}function Z(O,k,W,ft,N){l.copy(k).sub(O).normalize(),h.copy(W).sub(O).normalize();let w=Math.PI;const gt=l.dot(h);Math.abs(gt)<1&&(w=Math.abs(Math.acos(gt))),w/=n,u.copy(k);for(let Tt=0,Gt=n-1;Tt<Gt;Tt++)p.copy(u).rotateAround(O,w),S(u,ft,N),S(p,ft,N),S(O,ft,.5),u.copy(p);S(p,ft,N),S(W,ft,N),S(O,ft,.5)}function mt(){S(d,q,1),S(f,q,0),S(x,z,0),S(d,q,1),S(x,z,1),S(E,z,0)}function $(O,k,W){k?O?(S(d,q,1),S(f,q,0),S(x,z,0),S(d,q,1),S(x,z,0),S(G,z,1),S(x,W,0),S(L,W,0),S(G,W,.5)):(S(d,q,1),S(f,q,0),S(E,z,1),S(f,q,0),S(G,z,0),S(E,z,1),S(E,W,1),S(D,W,0),S(G,W,.5)):O?(S(x,W,0),S(L,W,0),S(tt,W,.5)):(S(E,W,1),S(D,W,0),S(tt,W,.5))}function ht(O,k){k&&(O?(S(d,q,1),S(f,q,0),S(x,z,0),S(d,q,1),S(x,z,0),S(G,z,1),S(x,q,0),S(tt,z,.5),S(G,z,1),S(tt,z,.5),S(L,q,0),S(G,z,1)):(S(d,q,1),S(f,q,0),S(E,z,1),S(f,q,0),S(G,z,0),S(E,z,1),S(E,q,1),S(G,z,0),S(tt,z,.5),S(tt,z,.5),S(G,z,0),S(D,q,1)))}function A(O,k,W,ft,N,w){switch(e.strokeLineCap){case"round":N?Z(O,W,k,w,.5):Z(O,k,W,w,.5);break;case"square":if(N)l.subVectors(k,O),h.set(l.y,-l.x),u.addVectors(l,h).add(O),p.subVectors(h,l).add(O),ft?(u.toArray(r,1*3),p.toArray(r,0*3),p.toArray(r,3*3)):(u.toArray(r,1*3),u.toArray(r,3*3),p.toArray(r,0*3));else{l.subVectors(W,O),h.set(l.y,-l.x),u.addVectors(l,h).add(O),p.subVectors(h,l).add(O);const gt=r.length;ft?(u.toArray(r,gt-1*3),p.toArray(r,gt-2*3),p.toArray(r,gt-4*3)):(u.toArray(r,gt-2*3),p.toArray(r,gt-1*3),p.toArray(r,gt-4*3))}break}}function Q(O){let k=!1;for(let ft=1,N=O.length-1;ft<N;ft++)if(O[ft].distanceTo(O[ft+1])<s){k=!0;break}if(!k)return O;const W=[];W.push(O[0]);for(let ft=1,N=O.length-1;ft<N;ft++)O[ft].distanceTo(O[ft+1])>=s&&W.push(O[ft]);return W.push(O[O.length-1]),W}}}const il={type:"change"},zr={type:"start"},sl={type:"end"};class yg extends ti{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ei.ROTATE,MIDDLE:ei.DOLLY,RIGHT:ei.PAN},this.touches={ONE:ni.ROTATE,TWO:ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",gt),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",gt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(il),n.update(),r=s.NONE},this.update=function(){const I=new H,pt=new En().setFromUnitVectors(t.up,new H(0,1,0)),_t=pt.clone().invert(),et=new H,At=new En,Lt=new H,Pt=2*Math.PI;return function(){const wt=n.object.position;I.copy(wt).sub(n.target),I.applyQuaternion(pt),a.setFromVector3(I),n.autoRotate&&r===s.NONE&&M(D()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Dt=n.minAzimuthAngle,Vt=n.maxAzimuthAngle;return isFinite(Dt)&&isFinite(Vt)&&(Dt<-Math.PI?Dt+=Pt:Dt>Math.PI&&(Dt-=Pt),Vt<-Math.PI?Vt+=Pt:Vt>Math.PI&&(Vt-=Pt),Dt<=Vt?a.theta=Math.max(Dt,Math.min(Vt,a.theta)):a.theta=a.theta>(Dt+Vt)/2?Math.max(Dt,a.theta):Math.min(Vt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),I.setFromSpherical(a),I.applyQuaternion(_t),wt.copy(n.target).add(I),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),l=1,u||et.distanceToSquared(n.object.position)>o||8*(1-At.dot(n.object.quaternion))>o||Lt.distanceToSquared(n.target)>0?(n.dispatchEvent(il),et.copy(n.object.position),At.copy(n.object.quaternion),Lt.copy(n.target),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",P),n.domElement.removeEventListener("pointerdown",O),n.domElement.removeEventListener("pointercancel",W),n.domElement.removeEventListener("wheel",w),n.domElement.removeEventListener("pointermove",k),n.domElement.removeEventListener("pointerup",W),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",gt),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new el,c=new el;let l=1;const h=new H;let u=!1;const p=new rt,m=new rt,v=new rt,g=new rt,f=new rt,d=new rt,b=new rt,_=new rt,x=new rt,E=[],L={};function D(){return 2*Math.PI/60/60*n.autoRotateSpeed}function G(){return Math.pow(.95,n.zoomSpeed)}function M(I){c.theta-=I}function R(I){c.phi-=I}const ot=function(){const I=new H;return function(_t,et){I.setFromMatrixColumn(et,0),I.multiplyScalar(-_t),h.add(I)}}(),tt=function(){const I=new H;return function(_t,et){n.screenSpacePanning===!0?I.setFromMatrixColumn(et,1):(I.setFromMatrixColumn(et,0),I.crossVectors(n.object.up,I)),I.multiplyScalar(_t),h.add(I)}}(),V=function(){const I=new H;return function(_t,et){const At=n.domElement;if(n.object.isPerspectiveCamera){const Lt=n.object.position;I.copy(Lt).sub(n.target);let Pt=I.length();Pt*=Math.tan(n.object.fov/2*Math.PI/180),ot(2*_t*Pt/At.clientHeight,n.object.matrix),tt(2*et*Pt/At.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(ot(_t*(n.object.right-n.object.left)/n.object.zoom/At.clientWidth,n.object.matrix),tt(et*(n.object.top-n.object.bottom)/n.object.zoom/At.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function X(I){n.object.isPerspectiveCamera?l/=I:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*I)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(I){n.object.isPerspectiveCamera?l*=I:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/I)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function lt(I){p.set(I.clientX,I.clientY)}function q(I){b.set(I.clientX,I.clientY)}function z(I){g.set(I.clientX,I.clientY)}function dt(I){m.set(I.clientX,I.clientY),v.subVectors(m,p).multiplyScalar(n.rotateSpeed);const pt=n.domElement;M(2*Math.PI*v.x/pt.clientHeight),R(2*Math.PI*v.y/pt.clientHeight),p.copy(m),n.update()}function at(I){_.set(I.clientX,I.clientY),x.subVectors(_,b),x.y>0?X(G()):x.y<0&&J(G()),b.copy(_),n.update()}function j(I){f.set(I.clientX,I.clientY),d.subVectors(f,g).multiplyScalar(n.panSpeed),V(d.x,d.y),g.copy(f),n.update()}function nt(I){I.deltaY<0?J(G()):I.deltaY>0&&X(G()),n.update()}function yt(I){let pt=!1;switch(I.code){case n.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,n.keyPanSpeed),pt=!0;break;case n.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,-n.keyPanSpeed),pt=!0;break;case n.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?M(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(n.keyPanSpeed,0),pt=!0;break;case n.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?M(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(-n.keyPanSpeed,0),pt=!0;break}pt&&(I.preventDefault(),n.update())}function F(){if(E.length===1)p.set(E[0].pageX,E[0].pageY);else{const I=.5*(E[0].pageX+E[1].pageX),pt=.5*(E[0].pageY+E[1].pageY);p.set(I,pt)}}function U(){if(E.length===1)g.set(E[0].pageX,E[0].pageY);else{const I=.5*(E[0].pageX+E[1].pageX),pt=.5*(E[0].pageY+E[1].pageY);g.set(I,pt)}}function T(){const I=E[0].pageX-E[1].pageX,pt=E[0].pageY-E[1].pageY,_t=Math.sqrt(I*I+pt*pt);b.set(0,_t)}function S(){n.enableZoom&&T(),n.enablePan&&U()}function Z(){n.enableZoom&&T(),n.enableRotate&&F()}function mt(I){if(E.length==1)m.set(I.pageX,I.pageY);else{const _t=xt(I),et=.5*(I.pageX+_t.x),At=.5*(I.pageY+_t.y);m.set(et,At)}v.subVectors(m,p).multiplyScalar(n.rotateSpeed);const pt=n.domElement;M(2*Math.PI*v.x/pt.clientHeight),R(2*Math.PI*v.y/pt.clientHeight),p.copy(m)}function $(I){if(E.length===1)f.set(I.pageX,I.pageY);else{const pt=xt(I),_t=.5*(I.pageX+pt.x),et=.5*(I.pageY+pt.y);f.set(_t,et)}d.subVectors(f,g).multiplyScalar(n.panSpeed),V(d.x,d.y),g.copy(f)}function ht(I){const pt=xt(I),_t=I.pageX-pt.x,et=I.pageY-pt.y,At=Math.sqrt(_t*_t+et*et);_.set(0,At),x.set(0,Math.pow(_.y/b.y,n.zoomSpeed)),X(x.y),b.copy(_)}function A(I){n.enableZoom&&ht(I),n.enablePan&&$(I)}function Q(I){n.enableZoom&&ht(I),n.enableRotate&&mt(I)}function O(I){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(I.pointerId),n.domElement.addEventListener("pointermove",k),n.domElement.addEventListener("pointerup",W)),y(I),I.pointerType==="touch"?Tt(I):ft(I))}function k(I){n.enabled!==!1&&(I.pointerType==="touch"?Gt(I):N(I))}function W(I){it(I),E.length===0&&(n.domElement.releasePointerCapture(I.pointerId),n.domElement.removeEventListener("pointermove",k),n.domElement.removeEventListener("pointerup",W)),n.dispatchEvent(sl),r=s.NONE}function ft(I){let pt;switch(I.button){case 0:pt=n.mouseButtons.LEFT;break;case 1:pt=n.mouseButtons.MIDDLE;break;case 2:pt=n.mouseButtons.RIGHT;break;default:pt=-1}switch(pt){case ei.DOLLY:if(n.enableZoom===!1)return;q(I),r=s.DOLLY;break;case ei.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enablePan===!1)return;z(I),r=s.PAN}else{if(n.enableRotate===!1)return;lt(I),r=s.ROTATE}break;case ei.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enableRotate===!1)return;lt(I),r=s.ROTATE}else{if(n.enablePan===!1)return;z(I),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(zr)}function N(I){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;dt(I);break;case s.DOLLY:if(n.enableZoom===!1)return;at(I);break;case s.PAN:if(n.enablePan===!1)return;j(I);break}}function w(I){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(I.preventDefault(),n.dispatchEvent(zr),nt(I),n.dispatchEvent(sl))}function gt(I){n.enabled===!1||n.enablePan===!1||yt(I)}function Tt(I){switch(vt(I),E.length){case 1:switch(n.touches.ONE){case ni.ROTATE:if(n.enableRotate===!1)return;F(),r=s.TOUCH_ROTATE;break;case ni.PAN:if(n.enablePan===!1)return;U(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case ni.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;S(),r=s.TOUCH_DOLLY_PAN;break;case ni.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Z(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(zr)}function Gt(I){switch(vt(I),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;mt(I),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;$(I),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;A(I),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Q(I),n.update();break;default:r=s.NONE}}function P(I){n.enabled!==!1&&I.preventDefault()}function y(I){E.push(I)}function it(I){delete L[I.pointerId];for(let pt=0;pt<E.length;pt++)if(E[pt].pointerId==I.pointerId){E.splice(pt,1);return}}function vt(I){let pt=L[I.pointerId];pt===void 0&&(pt=new rt,L[I.pointerId]=pt),pt.set(I.pageX,I.pageY)}function xt(I){const pt=I.pointerId===E[0].pointerId?E[1]:E[0];return L[pt.pointerId]}n.domElement.addEventListener("contextmenu",P),n.domElement.addEventListener("pointerdown",O),n.domElement.addEventListener("pointercancel",W),n.domElement.addEventListener("wheel",w,{passive:!1}),this.update()}}const rl=new H,Sg=new En,al=new H;class Gi extends he{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}}const Xe=new Kt,Eg=new Kt;class Tg{constructor(t={}){const e=this;let n,s,r,o;const a={camera:{fov:0,style:""},objects:new WeakMap},c=t.element!==void 0?t.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c;const l=document.createElement("div");l.style.transformOrigin="0 0",l.style.pointerEvents="none",c.appendChild(l);const h=document.createElement("div");h.style.transformStyle="preserve-3d",l.appendChild(h),this.getSize=function(){return{width:n,height:s}},this.render=function(g,f){const d=f.projectionMatrix.elements[5]*o;a.camera.fov!==d&&(l.style.perspective=f.isPerspectiveCamera?d+"px":"",a.camera.fov=d),f.view&&f.view.enabled?(l.style.transform=`translate( ${-f.view.offsetX*(n/f.view.width)}px, ${-f.view.offsetY*(s/f.view.height)}px )`,l.style.transform+=`scale( ${f.view.fullWidth/f.view.width}, ${f.view.fullHeight/f.view.height} )`):l.style.transform="",g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),f.parent===null&&f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld();let b,_;f.isOrthographicCamera&&(b=-(f.right+f.left)/2,_=(f.top+f.bottom)/2);const x=f.view&&f.view.enabled?f.view.height/f.view.fullHeight:1,L=(f.isOrthographicCamera?`scale( ${x} )scale(`+d+")translate("+u(b)+"px,"+u(_)+"px)"+p(f.matrixWorldInverse):`scale( ${x} )translateZ(`+d+"px)"+p(f.matrixWorldInverse))+"translate("+r+"px,"+o+"px)";a.camera.style!==L&&(h.style.transform=L,a.camera.style=L),v(g,g,f)},this.setSize=function(g,f){n=g,s=f,r=n/2,o=s/2,c.style.width=g+"px",c.style.height=f+"px",l.style.width=g+"px",l.style.height=f+"px",h.style.width=g+"px",h.style.height=f+"px"};function u(g){return Math.abs(g)<1e-10?0:g}function p(g){const f=g.elements;return"matrix3d("+u(f[0])+","+u(-f[1])+","+u(f[2])+","+u(f[3])+","+u(f[4])+","+u(-f[5])+","+u(f[6])+","+u(f[7])+","+u(f[8])+","+u(-f[9])+","+u(f[10])+","+u(f[11])+","+u(f[12])+","+u(-f[13])+","+u(f[14])+","+u(f[15])+")"}function m(g){const f=g.elements;return"translate(-50%,-50%)"+("matrix3d("+u(f[0])+","+u(f[1])+","+u(f[2])+","+u(f[3])+","+u(-f[4])+","+u(-f[5])+","+u(-f[6])+","+u(-f[7])+","+u(f[8])+","+u(f[9])+","+u(f[10])+","+u(f[11])+","+u(f[12])+","+u(f[13])+","+u(f[14])+","+u(f[15])+")")}function v(g,f,d,b){if(g.isCSS3DObject){const _=g.visible===!0&&g.layers.test(d.layers)===!0;if(g.element.style.display=_===!0?"":"none",_===!0){g.onBeforeRender(e,f,d);let x;g.isCSS3DSprite?(Xe.copy(d.matrixWorldInverse),Xe.transpose(),g.rotation2D!==0&&Xe.multiply(Eg.makeRotationZ(g.rotation2D)),g.matrixWorld.decompose(rl,Sg,al),Xe.setPosition(rl),Xe.scale(al),Xe.elements[3]=0,Xe.elements[7]=0,Xe.elements[11]=0,Xe.elements[15]=1,x=m(Xe)):x=m(g.matrixWorld);const E=g.element,L=a.objects.get(g);if(L===void 0||L.style!==x){E.style.transform=x;const D={style:x};a.objects.set(g,D)}E.parentNode!==h&&h.appendChild(E),g.onAfterRender(e,f,d)}}for(let _=0,x=g.children.length;_<x;_++)v(g.children[_],f,d)}}}var Zi={Linear:{None:function(i){return i}},Quadratic:{In:function(i){return i*i},Out:function(i){return i*(2-i)},InOut:function(i){return(i*=2)<1?.5*i*i:-.5*(--i*(i-2)-1)}},Cubic:{In:function(i){return i*i*i},Out:function(i){return--i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i:.5*((i-=2)*i*i+2)}},Quartic:{In:function(i){return i*i*i*i},Out:function(i){return 1- --i*i*i*i},InOut:function(i){return(i*=2)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2)}},Quintic:{In:function(i){return i*i*i*i*i},Out:function(i){return--i*i*i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2)}},Sinusoidal:{In:function(i){return 1-Math.cos(i*Math.PI/2)},Out:function(i){return Math.sin(i*Math.PI/2)},InOut:function(i){return .5*(1-Math.cos(Math.PI*i))}},Exponential:{In:function(i){return i===0?0:Math.pow(1024,i-1)},Out:function(i){return i===1?1:1-Math.pow(2,-10*i)},InOut:function(i){return i===0?0:i===1?1:(i*=2)<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2)}},Circular:{In:function(i){return 1-Math.sqrt(1-i*i)},Out:function(i){return Math.sqrt(1- --i*i)},InOut:function(i){return(i*=2)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1)}},Elastic:{In:function(i){return i===0?0:i===1?1:-Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI)},Out:function(i){return i===0?0:i===1?1:Math.pow(2,-10*i)*Math.sin((i-.1)*5*Math.PI)+1},InOut:function(i){return i===0?0:i===1?1:(i*=2,i<1?-.5*Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI):.5*Math.pow(2,-10*(i-1))*Math.sin((i-1.1)*5*Math.PI)+1)}},Back:{In:function(i){var t=1.70158;return i*i*((t+1)*i-t)},Out:function(i){var t=1.70158;return--i*i*((t+1)*i+t)+1},InOut:function(i){var t=2.5949095;return(i*=2)<1?.5*(i*i*((t+1)*i-t)):.5*((i-=2)*i*((t+1)*i+t)+2)}},Bounce:{In:function(i){return 1-Zi.Bounce.Out(1-i)},Out:function(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},InOut:function(i){return i<.5?Zi.Bounce.In(i*2)*.5:Zi.Bounce.Out(i*2-1)*.5+.5}}},Wi;typeof self>"u"&&typeof process<"u"&&process.hrtime?Wi=function(){var i=process.hrtime();return i[0]*1e3+i[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?Wi=self.performance.now.bind(self.performance):Date.now!==void 0?Wi=Date.now:Wi=function(){return new Date().getTime()};var On=Wi,sc=function(){function i(){this._tweens={},this._tweensAddedDuringUpdate={}}return i.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(e){return t._tweens[e]})},i.prototype.removeAll=function(){this._tweens={}},i.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},i.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},i.prototype.update=function(t,e){t===void 0&&(t=On()),e===void 0&&(e=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<n.length;s++){var r=this._tweens[n[s]],o=!e;r&&r.update(t,o)===!1&&!e&&delete this._tweens[n[s]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},i}(),bi={Linear:function(i,t){var e=i.length-1,n=e*t,s=Math.floor(n),r=bi.Utils.Linear;return t<0?r(i[0],i[1],n):t>1?r(i[e],i[e-1],e-n):r(i[s],i[s+1>e?e:s+1],n-s)},Bezier:function(i,t){for(var e=0,n=i.length-1,s=Math.pow,r=bi.Utils.Bernstein,o=0;o<=n;o++)e+=s(1-t,n-o)*s(t,o)*i[o]*r(n,o);return e},CatmullRom:function(i,t){var e=i.length-1,n=e*t,s=Math.floor(n),r=bi.Utils.CatmullRom;return i[0]===i[e]?(t<0&&(s=Math.floor(n=e*(1+t))),r(i[(s-1+e)%e],i[s],i[(s+1)%e],i[(s+2)%e],n-s)):t<0?i[0]-(r(i[0],i[0],i[1],i[1],-n)-i[0]):t>1?i[e]-(r(i[e],i[e],i[e-1],i[e-1],n-e)-i[e]):r(i[s?s-1:0],i[s],i[e<s+1?e:s+1],i[e<s+2?e:s+2],n-s)},Utils:{Linear:function(i,t,e){return(t-i)*e+i},Bernstein:function(i,t){var e=bi.Utils.Factorial;return e(i)/e(t)/e(i-t)},Factorial:function(){var i=[1];return function(t){var e=1;if(i[t])return i[t];for(var n=t;n>1;n--)e*=n;return i[t]=e,e}}(),CatmullRom:function(i,t,e,n,s){var r=(e-i)*.5,o=(n-t)*.5,a=s*s,c=s*a;return(2*t-2*e+r+o)*c+(-3*t+3*e-2*r-o)*a+r*s+t}}},ga=function(){function i(){}return i.nextId=function(){return i._nextId++},i._nextId=0,i}(),rc=new sc,bg=function(){function i(t,e){e===void 0&&(e=rc),this._object=t,this._group=e,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Zi.Linear.None,this._interpolationFunction=bi.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=ga.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return i.prototype.getId=function(){return this._id},i.prototype.isPlaying=function(){return this._isPlaying},i.prototype.isPaused=function(){return this._isPaused},i.prototype.to=function(t,e){return this._valuesEnd=Object.create(t),e!==void 0&&(this._duration=e),this},i.prototype.duration=function(t){return this._duration=t,this},i.prototype.start=function(t){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var e in this._valuesStartRepeat)this._swapEndStartRepeatValues(e),this._valuesStart[e]=this._valuesStartRepeat[e]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t!==void 0?typeof t=="string"?On()+parseFloat(t):t:On(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},i.prototype._setupProperties=function(t,e,n,s){for(var r in n){var o=t[r],a=Array.isArray(o),c=a?"array":typeof o,l=!a&&Array.isArray(n[r]);if(!(c==="undefined"||c==="function")){if(l){var h=n[r];if(h.length===0)continue;h=h.map(this._handleRelativeValue.bind(this,o)),n[r]=[o].concat(h)}if((c==="object"||a)&&o&&!l){e[r]=a?[]:{};for(var u in o)e[r][u]=o[u];s[r]=a?[]:{},this._setupProperties(o,e[r],n[r],s[r])}else typeof e[r]>"u"&&(e[r]=o),a||(e[r]*=1),l?s[r]=n[r].slice().reverse():s[r]=e[r]||0}}},i.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},i.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},i.prototype.pause=function(t){return t===void 0&&(t=On()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this),this)},i.prototype.resume=function(t){return t===void 0&&(t=On()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},i.prototype.stopChainedTweens=function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop();return this},i.prototype.group=function(t){return this._group=t,this},i.prototype.delay=function(t){return this._delayTime=t,this},i.prototype.repeat=function(t){return this._initialRepeat=t,this._repeat=t,this},i.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},i.prototype.yoyo=function(t){return this._yoyo=t,this},i.prototype.easing=function(t){return this._easingFunction=t,this},i.prototype.interpolation=function(t){return this._interpolationFunction=t,this},i.prototype.chain=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._chainedTweens=t,this},i.prototype.onStart=function(t){return this._onStartCallback=t,this},i.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},i.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},i.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},i.prototype.onStop=function(t){return this._onStopCallback=t,this},i.prototype.update=function(t,e){if(t===void 0&&(t=On()),e===void 0&&(e=!0),this._isPaused)return!0;var n,s,r=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>r)return!1;e&&this.start(t)}if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),s=(t-this._startTime)/this._duration,s=this._duration===0||s>1?1:s;var o=this._easingFunction(s);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,s),s===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(n in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[n]=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,c=this._chainedTweens.length;a<c;a++)this._chainedTweens[a].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},i.prototype._updateProperties=function(t,e,n,s){for(var r in n)if(e[r]!==void 0){var o=e[r]||0,a=n[r],c=Array.isArray(t[r]),l=Array.isArray(a),h=!c&&l;h?t[r]=this._interpolationFunction(a,s):typeof a=="object"&&a?this._updateProperties(t[r],o,a,s):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(t[r]=o+(a-o)*s))}},i.prototype._handleRelativeValue=function(t,e){return typeof e!="string"?e:e.charAt(0)==="+"||e.charAt(0)==="-"?t+parseFloat(e):parseFloat(e)},i.prototype._swapEndStartRepeatValues=function(t){var e=this._valuesStartRepeat[t],n=this._valuesEnd[t];typeof n=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(n):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=e},i}(),Ag="18.6.4",wg=ga.nextId,Ke=rc,Rg=Ke.getAll.bind(Ke),Cg=Ke.removeAll.bind(Ke),Pg=Ke.add.bind(Ke),Lg=Ke.remove.bind(Ke),Ug=Ke.update.bind(Ke),_a={Easing:Zi,Group:sc,Interpolation:bi,now:On,Sequence:ga,nextId:wg,Tween:bg,VERSION:Ag,getAll:Rg,removeAll:Cg,add:Pg,remove:Lg,update:Ug};const be=_a;class Dg{static isWebGLAvailable(){try{const t=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(t.getContext("webgl")||t.getContext("experimental-webgl")))}catch{return!1}}static isWebGL2Available(){try{const t=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&t.getContext("webgl2"))}catch{return!1}}static getWebGLErrorMessage(){return this.getErrorMessage(1)}static getWebGL2ErrorMessage(){return this.getErrorMessage(2)}static getErrorMessage(t){const e={1:"WebGL",2:"WebGL 2"},n={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext};let s='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';const r=document.createElement("div");return r.id="webglmessage",r.style.fontFamily="monospace",r.style.fontSize="13px",r.style.fontWeight="normal",r.style.textAlign="center",r.style.background="#fff",r.style.color="#000",r.style.padding="1.5em",r.style.width="400px",r.style.margin="5em auto 0",n[t]?s=s.replace("$0","graphics card"):s=s.replace("$0","browser"),s=s.replace("$1",e[t]),r.innerHTML=s,r}}const ol=Dg;let Re,Fn,ie,Un,Bn,ll,Hr,cl,qe,vn,xn,ke,Mn,zn,Hn,Gn,Ns,Os,Fs,Bs,kn,ac,oc,lc,cc,Ds,ki,Gr,hl,ul;const Ig=new Yt,Ng=new Yt,Og=new Yt,hc=new Yt,uc=new Yt,Vn=new Yt,zs=new Yt,fc=new Yt,Ws=new Yt,dc=new Yt,va=new Yt,Zn=new Yt,je=new Yt,Mi=new Yt,pc=new Yt,es=new Yt,xa=new Yt,Kn=new Yt,Xs=new Yt,qs=new Yt,Fg=new Tn(45,20),Bg=new Tn(45,20),zg=new Tn(45,20),Hg=new Tn(16,7),Gg=new Tn(45,7),ss=new $s({transparent:!0,opacity:0}),fl=new ve(Fg,ss),dl=new ve(Bg,ss.clone()),pl=new ve(zg,ss.clone()),ia=new ve(Hg,ss.clone()),ml=new ve(Gg,ss.clone()),kr=new Wt(16777215),Vr=new Wt(16776960),Be=new vg,Hs=new rt,Ys=[],mc=[],gc=2*Math.PI/30,js=new H(40,60,0),kg=()=>{cl=document.getElementById("canvas"),Re=new Vo,Fn=new Vo,Re.background=new Wt(1973790),vn=window.innerWidth,xn=window.innerHeight,ie=new Pe(35,vn/xn,1,600),ie.position.set(70,60,120),Re.add(ie);const i=[{x:40,y:60,z:120},{x:-5,y:60,z:50},{x:-5,y:-40,z:50},{x:0,y:0,z:250}],t=new be.Tween(ie.position).to(i[0],2e3).onUpdate(()=>{ie.lookAt(new H(-5,60,0))}),e=new be.Tween(ie.position).to(i[1],3e3).onUpdate(()=>{ie.lookAt(new H(-5,60,0))}),n=new be.Tween(ie.position).to(i[2],5e3).onUpdate(()=>{ie.lookAt(-5,ie.position.y+20,0)}),s=new be.Tween(ie.position).to(i[3],3e3).onUpdate(()=>{ie.lookAt(new H(0,0,0))});t.chain(e),e.chain(n),n.chain(s),t.start(),setTimeout(()=>{qe.enabled=!0},13e3),Bn=new jl({canvas:cl,alpha:!0,antialias:!0}),Bn.setSize(vn,xn),Bn.setPixelRatio(Math.min(window.devicePixelRatio,2)),Un=new Tg,Un.setSize(vn,xn),Un.domElement.style.position="absolute",Un.domElement.style.top=0,document.body.appendChild(Un.domElement),qe=new yg(ie,Un.domElement),qe.target.set(0,0,0),qe.maxDistance=450,qe.enableDamping=!0,qe.minPolarAngle=Math.PI/4,qe.maxPolarAngle=Math.PI*.8,qe.minAzimuthAngle=-Math.PI/4,qe.maxAzimuthAngle=Math.PI/4,qe.enabled=!1,Hr=new mg(16777215,10),Hr.position.set(0,10,5),Re.add(Hr),ll=new gg(16777215,100),Re.add(ll),Vg(),document.addEventListener("pointermove",Wg),document.addEventListener("click",Xg),Yg(),ac=new be.Tween(Vn.position).to(zs.position,1e3).easing(be.Easing.Elastic.InOut).onUpdate(()=>{Vn.position.copy(Vn.position)}),oc=new be.Tween(je.position).to({y:-10},1e3).easing(be.Easing.Elastic.InOut).onUpdate(()=>{je.position.copy(je.position)}),lc=new be.Tween(ke.position).to(Hn.position,1e3).easing(be.Easing.Elastic.InOut).onUpdate(()=>{ke.position.copy(ke.position)}),cc=new be.Tween(Mi.position).to({y:0},1e3).easing(be.Easing.Elastic.InOut).onUpdate(()=>{Mi.position.copy(Mi.position)}),fl.position.set(22,10,0),dl.position.set(22,10,0),pl.position.set(22,10,0),Zn.add(fl),je.add(dl),Mi.add(pl),ia.position.set(20,-52,0),Re.add(ia),ml.position.set(22,3,0),Kn.add(ml),Ns=[Vn,ke,fc,Ws,Mn,zn,Kn],Os=[hc,dc,je,xa],Fs=[uc,va,Zn,es,zn,zs,Hn],Bs=[pc,zs,Hn,Mi,es],yi(0),qg(),Xs.visible=!1,qs.visible=!1,Si("Loading, it is","lights",4);const r=new _g,o=()=>{requestAnimationFrame(o);const a=r.getElapsedTime(),c=.5;for(let l=0;l<30;l++){const h=Ys[l],u=l*gc-a*c,p=js.x+5*Math.cos(u),m=js.y+5*Math.sin(u);h.position.set(p,m,0)}Bn.render(Re,ie),Un.render(Fn,ie),be.update()};o()},gl={border:new rt(-51,70),logo:new rt(-5,65),desobeirTitle:new rt(-5,50),forgot:new rt(-10,-55),forgotButton:new rt(5,-30),forgotTitle:new rt(-32,45),username:new rt(-28,35),email:new rt(-28,20),password:new rt(-28,5),rPassword:new rt(-28,-10),signupTitle:new rt(-14,45),signupButton:new rt(5,-30),signupQuestion:new rt(-27.5,-50),loginLink:new rt(12,-48.5),loginTitle:new rt(-10,45),loginButton:new rt(5,-30),loginQuestion:new rt(-27.5,-50),signupLink:new rt(12,-48.5),x:new rt(38,63),checkmark:new rt(38,63)},Vg=()=>{ne("/svg/border.svg",Ig,"border"),ne("/svg/logo.svg",Ng,"logo"),ne("/svg/desobeirTitle.svg",Og,"desobeirTitle"),ne("/svg/forgot.svg",Kn,"forgot"),ne("/svg/forgotButton.svg",Mi,"forgotButton"),ne("/svg/forgotTitle.svg",pc,"forgotTitle"),ne("/svg/username.svg",Vn,"username"),ne("/svg/email.svg",zs,"email"),ne("/svg/password.svg",fc,"password"),ne("/svg/rPassword.svg",Ws,"rPassword"),ne("/svg/signupTitle.svg",uc,"signupTitle"),ne("/svg/signupButton.svg",Zn,"signupButton"),ne("/svg/signupQuestion.svg",va,"signupQuestion"),ne("/svg/loginLink.svg",es,"loginLink"),ne("/svg/loginTitle.svg",hc,"loginTitle"),ne("/svg/loginButton.svg",je,"loginButton"),ne("/svg/loginQuestion.svg",dc,"loginQuestion"),ne("/svg/signupLink.svg",xa,"signupLink"),ne("/svg/x.svg",qs,"x"),ne("/svg/checkmark.svg",Xs,"checkmark")},ne=(i,t,e)=>{new Vs().load(i,function(s){let r=0;for(const o of s.paths){const a=o.userData.style.fill||new Wt(16777215),c=Vs.createShapes(o);for(const l of c){const h=new da(l,{depth:2,bevelEnabled:!1}),u=new lg({color:new Wt().setStyle(a),transparent:!0,side:un,depthWrite:!1}),p=new ve(h,u);p.renderOrder=r++,t.add(p)}}t.name=e,t.scale.multiplyScalar(.5),_c(t),t.scale.y*=-1,mc.push(t),Re.add(t)})},_c=i=>{i.position.x=gl[i.name].x,i.position.y=gl[i.name].y},yi=i=>{kn=i,mc.forEach(t=>{_c(t)}),kn==0?(Vn.position.x=-28,Vn.position.y=35,ke.position.set(0,27,0),Ns.forEach(t=>{t.visible=!0}),Os.forEach(t=>{t.visible=!1}),Bs.forEach(t=>{t.visible=!1}),Fs.forEach(t=>{t.visible=!0}),Ws.visible=!0):kn==1?(ac.start(),lc.start(),oc.start(),Ns.forEach(t=>{t.visible=!0}),Os.forEach(t=>{t.visible=!0}),Fs.forEach(t=>{t.visible=!1}),Bs.forEach(t=>{t.visible=!1}),Ws.visible=!1):kn==2&&(cc.start(),Ns.forEach(t=>{t.visible=!1}),Os.forEach(t=>{t.visible=!1}),Fs.forEach(t=>{t.visible=!1}),Bs.forEach(t=>{t.visible=!0}),es.visible=!0,va.visible=!0)};window.addEventListener("resize",()=>{vn=window.innerWidth,xn=window.innerHeight,ie.aspect=vn/xn,Bn.setSize(vn,xn),Bn.setPixelRatio(Math.min(window.devicePixelRatio,2)),ie.updateProjectionMatrix()});const Wg=i=>{Hs.x=i.clientX/vn*2-1,Hs.y=-(i.clientY/xn)*2+1,Be.setFromCamera(Hs,ie),Be.intersectObject(Zn).length>0?Zn.children.forEach(s=>{s.material.color=Vr}):Zn.children.forEach(s=>{s.material.color=kr}),Be.intersectObject(je).length>0?je.children.forEach(s=>{s.material.color=Vr}):je.children.forEach(s=>{s.material.color=kr}),Be.intersectObject(Kn).length>0?Kn.children.forEach(s=>{s.material.color=Vr}):Kn.children.forEach(s=>{s.material.color=kr})},Xg=i=>{if(Be.setFromCamera(Hs,ie),Be.intersectObject(ia).length>0){const a=kn==1?0:1;yi(a);return}if(Be.intersectObject(xa).length>0){yi(0);return}if(Be.intersectObject(es).length>0){yi(1);return}if(Be.intersectObject(Kn).length>0){yi(2);return}if(Be.intersectObject(je).length>0&&kn==1){Ds=ke.element.value,ki=Mn.element.value,Ds.length==0||ki==0?Si("<br>Both <br>Username and <br>Password,<br>You Must <br>Provide","bad",10):(Si("<br>Successfully<br>Signed In,<br>You Have","checkmark",10),jg());return}if(Be.intersectObject(Zn).length>0&&kn==0){console.log("signup"),Ds=ke.element.value,ki=Mn.element.value,Gr=zn.element.value,hl=Mn.element.value,Ds.length==0||ki.length==0||Gr.length==0||hl.length==0?Si("<br>All the Fields,<br>You Must<br>Fill","bad",10):ki==Gr?(Si("<br>Successfully<br>Signed Up,<br>You Have","checkmark",10),yi(1)):Si("<br>Mismatch,<br>Your Passwords","bad",10);return}},qg=()=>{const t=new $s({color:16777215,transparent:!0,opacity:1});for(let e=0;e<30;e++){const n=new pa(.5,16,16),s=e*gc,r=js.x+5*Math.cos(s),o=js.y+5*Math.sin(s),a=new ve(n,t);a.position.set(r,o,0),Ys.push(a),Re.add(a)}},Yg=()=>{const i=document.createElement("input");i.className="unDiv",i.setAttribute("type","text"),i.setAttribute("name","username"),i.setAttribute("placeholder","Username, You Must Enter"),ke=new Gi(i),ke.position.set(0,27,0),ke.scale.set(.3,.3,.3),Fn.add(ke);const t=document.createElement("input");t.className="unDiv",t.setAttribute("type","email"),t.setAttribute("name","Email"),t.setAttribute("placeholder","Regostration Email, You Must Provide"),Hn=new Gi(t),Hn.position.set(0,12,0),Hn.scale.set(.3,.3,.3),Fn.add(Hn);const e=document.createElement("input");e.className="unDiv",e.setAttribute("type","password"),e.setAttribute("name","password"),e.setAttribute("placeholder","Password, You must Enter"),Mn=new Gi(e),Mn.position.set(0,-3,0),Mn.scale.set(.3,.3,.3),Fn.add(Mn);const n=document.createElement("input");n.className="unDiv",n.setAttribute("type","password"),n.setAttribute("name","username"),n.setAttribute("placeholder","Password, You must Repeat"),zn=new Gi(n),zn.position.set(0,-18,0),zn.scale.set(.3,.3,.3),Fn.add(zn);const s=document.createElement("div");s.className="status",Gn=new Gi(s),Gn.position.set(40,50,0),Gn.scale.set(.3,.3,.3),Fn.add(Gn)},Si=(i,t,e)=>{clearTimeout(ul),Gn.visible=!0,Gn.element.innerHTML=i,t=="bad"?qs.visible=!0:t=="lights"?Ys.forEach(n=>{Zg(n)}):t=="checkmark"&&(Xs.visible=!0),ul=setTimeout(()=>{_l(Gn),Ys.forEach(n=>{_l(n)}),qs.visible=!1,Xs.visible=!1},e*1e3)},jg=()=>{const t=new Float32Array(3e3),e=new Float32Array(1e3*3);for(let a=0;a<1e3;a++){const c=Math.random()*300-100,l=Math.random()*300-100,h=Math.random()*150;t[a*3]=c,t[a*3+1]=l,t[a*3+2]=h;const u=new Wt(Math.random(),Math.random(),Math.random());e[a*3]=u.r,e[a*3+1]=u.g,e[a*3+2]=u.b}const n=new Ue;n.setAttribute("position",new Le(t,3)),n.setAttribute("color",new Le(e,3));const s=new Zl({size:1,vertexColors:!0}),r=new Cm(n,s);r.position.set(-50,0,0),Re.add(r);function o(){requestAnimationFrame(o),r.position.y-=.5,r.position.y<-150&&Re.remove(r),Bn.render(Re,ie)}o()},_l=i=>{i.visible=!1},Zg=i=>{i.visible=!0};ol.isWebGL2Available()===!1?document.body.appendChild(ol.getWebGL2ErrorMessage()):kg()});export default Kg();
