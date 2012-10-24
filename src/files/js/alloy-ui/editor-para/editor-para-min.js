/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.1pr1
build: 3.7.1pr1
*/
YUI.add("editor-para",function(a,l){var d=function(){d.superclass.constructor.apply(this,arguments);},k="host",f="body",c="nodeChange",j="parentNode",b=f+" > p",h="p",g="<br>",i="firstChild",e="li";a.extend(d,a.Plugin.EditorParaBase,{_onNodeChange:function(S){var G=this.get(k),r=G.getInstance(),y,E,D,U,P,I=r.EditorSelection.DEFAULT_BLOCK_TAG,A,q,u,Q,w,m,H,N,v,O,W,T,K,C,B,R=":last-child";switch(S.changedType){case"enter-up":var o=((this._lastPara)?this._lastPara:S.changedNode),V=o.one("br.yui-cursor");if(this._lastPara){delete this._lastPara;}if(V){if(V.previous()||V.next()){if(V.ancestor(h)){V.remove();}}}if(!o.test(I)){var F=o.ancestor(I);if(F){o=F;F=null;}}if(o.test(I)){var J=o.previous(),M,x,z=false;if(J){M=J.one(R);while(!z){if(M){x=M.one(R);if(x){M=x;}else{z=true;}}else{z=true;}}if(M){G.copyStyles(M,o);}}}break;case"enter":if(a.UA.webkit){if(S.changedEvent.shiftKey){G.execCommand("insertbr");S.changedEvent.preventDefault();}}if(S.changedNode.test("li")&&!a.UA.ie){y=r.EditorSelection.getText(S.changedNode);if(y===""){D=S.changedNode.ancestor("ol,ul");var L=D.getAttribute("dir");if(L!==""){L=' dir = "'+L+'"';}D=S.changedNode.ancestor(r.EditorSelection.BLOCKS);U=r.Node.create("<p"+L+">"+r.EditorSelection.CURSOR+"</p>");D.insert(U,"after");S.changedNode.remove();S.changedEvent.halt();P=new r.EditorSelection();P.selectNode(U,true,false);}}if(a.UA.gecko&&G.get("defaultblock")!=="p"){D=S.changedNode;if(!D.test(e)&&!D.ancestor(e)){if(!D.test(I)){D=D.ancestor(I);}U=r.Node.create("<"+I+"></"+I+">");D.insert(U,"after");P=new r.EditorSelection();if(P.anchorOffset){A=P.anchorNode.get("textContent");E=r.one(r.config.doc.createTextNode(A.substr(0,P.anchorOffset)));q=r.one(r.config.doc.createTextNode(A.substr(P.anchorOffset)));Q=P.anchorNode;Q.setContent("");m=Q.cloneNode();m.append(q);H=false;v=Q;while(!H){v=v.get(j);if(v&&!v.test(I)){N=v.cloneNode();N.set("innerHTML","");N.append(m);u=v.get("childNodes");var s=false;u.each(function(n){if(s){N.append(n);}if(n===Q){s=true;}});Q=v;m=N;}else{H=true;}}q=m;P.anchorNode.append(E);if(q){U.append(q);}}if(U.get(i)){U=U.get(i);}U.prepend(r.EditorSelection.CURSOR);P.focusCursor(true,true);y=r.EditorSelection.getText(U);if(y!==""){r.EditorSelection.cleanCursor();}S.changedEvent.preventDefault();}}break;case"keyup":if(a.UA.gecko){if(r.config.doc&&r.config.doc.body&&r.config.doc.body.innerHTML.length<20){if(!r.one(b)){this._fixFirstPara();}}}break;case"backspace-up":case"backspace-down":case"delete-up":if(!a.UA.ie){O=r.all(b);T=r.one(f);if(O.item(0)){T=O.item(0);}W=T.one("br");if(W){W.removeAttribute("id");W.removeAttribute("class");}E=r.EditorSelection.getText(T);E=E.replace(/ /g,"").replace(/\n/g,"");C=T.all("img");if(E.length===0&&!C.size()){if(!T.test(h)){this._fixFirstPara();}K=null;if(S.changedNode&&S.changedNode.test(h)){K=S.changedNode;}if(!K&&G._lastPara&&G._lastPara.inDoc()){K=G._lastPara;}if(K&&!K.test(h)){K=K.ancestor(h);}if(K){if(!K.previous()&&K.get(j)&&K.get(j).test(f)){S.changedEvent.frameEvent.halt();S.preventDefault();}}}if(a.UA.webkit){if(S.changedNode){S.preventDefault();T=S.changedNode;if(T.test("li")&&(!T.previous()&&!T.next())){y=T.get("innerHTML").replace(g,"");if(y===""){if(T.get(j)){T.get(j).replace(r.Node.create(g));S.changedEvent.frameEvent.halt();r.EditorSelection.filterBlocks();}}}}}}if(a.UA.gecko){U=S.changedNode;B=r.config.doc.createTextNode(" ");U.appendChild(B);U.removeChild(B);}break;}if(a.UA.gecko){if(S.changedNode&&!S.changedNode.test(I)){K=S.changedNode.ancestor(I);if(K){this._lastPara=K;}}}},initializer:function(){var m=this.get(k);if(m.editorBR){a.error("Can not plug EditorPara and EditorBR at the same time.");return;}m.on(c,a.bind(this._onNodeChange,this));}},{NAME:"editorPara",NS:"editorPara",ATTRS:{host:{value:false}}});a.namespace("Plugin");a.Plugin.EditorPara=d;},"3.7.1pr1",{"requires":["editor-para-base"]});