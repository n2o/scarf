// Compiled by ClojureScript 1.8.34 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19474__auto__ = [];
var len__19467__auto___27583 = arguments.length;
var i__19468__auto___27584 = (0);
while(true){
if((i__19468__auto___27584 < len__19467__auto___27583)){
args__19474__auto__.push((arguments[i__19468__auto___27584]));

var G__27585 = (i__19468__auto___27584 + (1));
i__19468__auto___27584 = G__27585;
continue;
} else {
}
break;
}

var argseq__19475__auto__ = ((((2) < args__19474__auto__.length))?(new cljs.core.IndexedSeq(args__19474__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19475__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__27575_27586 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__27576_27587 = null;
var count__27577_27588 = (0);
var i__27578_27589 = (0);
while(true){
if((i__27578_27589 < count__27577_27588)){
var k_27590 = cljs.core._nth.call(null,chunk__27576_27587,i__27578_27589);
e.setAttribute(cljs.core.name.call(null,k_27590),cljs.core.get.call(null,attrs,k_27590));

var G__27591 = seq__27575_27586;
var G__27592 = chunk__27576_27587;
var G__27593 = count__27577_27588;
var G__27594 = (i__27578_27589 + (1));
seq__27575_27586 = G__27591;
chunk__27576_27587 = G__27592;
count__27577_27588 = G__27593;
i__27578_27589 = G__27594;
continue;
} else {
var temp__4657__auto___27595 = cljs.core.seq.call(null,seq__27575_27586);
if(temp__4657__auto___27595){
var seq__27575_27596__$1 = temp__4657__auto___27595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27575_27596__$1)){
var c__19209__auto___27597 = cljs.core.chunk_first.call(null,seq__27575_27596__$1);
var G__27598 = cljs.core.chunk_rest.call(null,seq__27575_27596__$1);
var G__27599 = c__19209__auto___27597;
var G__27600 = cljs.core.count.call(null,c__19209__auto___27597);
var G__27601 = (0);
seq__27575_27586 = G__27598;
chunk__27576_27587 = G__27599;
count__27577_27588 = G__27600;
i__27578_27589 = G__27601;
continue;
} else {
var k_27602 = cljs.core.first.call(null,seq__27575_27596__$1);
e.setAttribute(cljs.core.name.call(null,k_27602),cljs.core.get.call(null,attrs,k_27602));

var G__27603 = cljs.core.next.call(null,seq__27575_27596__$1);
var G__27604 = null;
var G__27605 = (0);
var G__27606 = (0);
seq__27575_27586 = G__27603;
chunk__27576_27587 = G__27604;
count__27577_27588 = G__27605;
i__27578_27589 = G__27606;
continue;
}
} else {
}
}
break;
}

var seq__27579_27607 = cljs.core.seq.call(null,children);
var chunk__27580_27608 = null;
var count__27581_27609 = (0);
var i__27582_27610 = (0);
while(true){
if((i__27582_27610 < count__27581_27609)){
var ch_27611 = cljs.core._nth.call(null,chunk__27580_27608,i__27582_27610);
e.appendChild(ch_27611);

var G__27612 = seq__27579_27607;
var G__27613 = chunk__27580_27608;
var G__27614 = count__27581_27609;
var G__27615 = (i__27582_27610 + (1));
seq__27579_27607 = G__27612;
chunk__27580_27608 = G__27613;
count__27581_27609 = G__27614;
i__27582_27610 = G__27615;
continue;
} else {
var temp__4657__auto___27616 = cljs.core.seq.call(null,seq__27579_27607);
if(temp__4657__auto___27616){
var seq__27579_27617__$1 = temp__4657__auto___27616;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27579_27617__$1)){
var c__19209__auto___27618 = cljs.core.chunk_first.call(null,seq__27579_27617__$1);
var G__27619 = cljs.core.chunk_rest.call(null,seq__27579_27617__$1);
var G__27620 = c__19209__auto___27618;
var G__27621 = cljs.core.count.call(null,c__19209__auto___27618);
var G__27622 = (0);
seq__27579_27607 = G__27619;
chunk__27580_27608 = G__27620;
count__27581_27609 = G__27621;
i__27582_27610 = G__27622;
continue;
} else {
var ch_27623 = cljs.core.first.call(null,seq__27579_27617__$1);
e.appendChild(ch_27623);

var G__27624 = cljs.core.next.call(null,seq__27579_27617__$1);
var G__27625 = null;
var G__27626 = (0);
var G__27627 = (0);
seq__27579_27607 = G__27624;
chunk__27580_27608 = G__27625;
count__27581_27609 = G__27626;
i__27582_27610 = G__27627;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq27572){
var G__27573 = cljs.core.first.call(null,seq27572);
var seq27572__$1 = cljs.core.next.call(null,seq27572);
var G__27574 = cljs.core.first.call(null,seq27572__$1);
var seq27572__$2 = cljs.core.next.call(null,seq27572__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__27573,G__27574,seq27572__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19322__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19323__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19324__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19325__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19326__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19322__auto__,prefer_table__19323__auto__,method_cache__19324__auto__,cached_hierarchy__19325__auto__,hierarchy__19326__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19322__auto__,prefer_table__19323__auto__,method_cache__19324__auto__,cached_hierarchy__19325__auto__,hierarchy__19326__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19326__auto__,method_table__19322__auto__,prefer_table__19323__auto__,method_cache__19324__auto__,cached_hierarchy__19325__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_27628 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_27628.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_27628.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_27628.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_27628);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__27629,st_map){
var map__27634 = p__27629;
var map__27634__$1 = ((((!((map__27634 == null)))?((((map__27634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27634):map__27634);
var container_el = cljs.core.get.call(null,map__27634__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__27634,map__27634__$1,container_el){
return (function (p__27636){
var vec__27637 = p__27636;
var k = cljs.core.nth.call(null,vec__27637,(0),null);
var v = cljs.core.nth.call(null,vec__27637,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__27634,map__27634__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__27638,dom_str){
var map__27641 = p__27638;
var map__27641__$1 = ((((!((map__27641 == null)))?((((map__27641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27641):map__27641);
var c = map__27641__$1;
var content_area_el = cljs.core.get.call(null,map__27641__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__27643){
var map__27646 = p__27643;
var map__27646__$1 = ((((!((map__27646 == null)))?((((map__27646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27646):map__27646);
var content_area_el = cljs.core.get.call(null,map__27646__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__23505__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto__){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto__){
return (function (state_27689){
var state_val_27690 = (state_27689[(1)]);
if((state_val_27690 === (1))){
var inst_27674 = (state_27689[(7)]);
var inst_27674__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27675 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27676 = ["10px","10px","100%","68px","1.0"];
var inst_27677 = cljs.core.PersistentHashMap.fromArrays(inst_27675,inst_27676);
var inst_27678 = cljs.core.merge.call(null,inst_27677,style);
var inst_27679 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27674__$1,inst_27678);
var inst_27680 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27674__$1,msg);
var inst_27681 = cljs.core.async.timeout.call(null,(300));
var state_27689__$1 = (function (){var statearr_27691 = state_27689;
(statearr_27691[(7)] = inst_27674__$1);

(statearr_27691[(8)] = inst_27679);

(statearr_27691[(9)] = inst_27680);

return statearr_27691;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27689__$1,(2),inst_27681);
} else {
if((state_val_27690 === (2))){
var inst_27674 = (state_27689[(7)]);
var inst_27683 = (state_27689[(2)]);
var inst_27684 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_27685 = ["auto"];
var inst_27686 = cljs.core.PersistentHashMap.fromArrays(inst_27684,inst_27685);
var inst_27687 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27674,inst_27686);
var state_27689__$1 = (function (){var statearr_27692 = state_27689;
(statearr_27692[(10)] = inst_27683);

return statearr_27692;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27689__$1,inst_27687);
} else {
return null;
}
}
});})(c__23505__auto__))
;
return ((function (switch__23393__auto__,c__23505__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__23394__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__23394__auto____0 = (function (){
var statearr_27696 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27696[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__23394__auto__);

(statearr_27696[(1)] = (1));

return statearr_27696;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__23394__auto____1 = (function (state_27689){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_27689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e27697){if((e27697 instanceof Object)){
var ex__23397__auto__ = e27697;
var statearr_27698_27700 = state_27689;
(statearr_27698_27700[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27701 = state_27689;
state_27689 = G__27701;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__23394__auto__ = function(state_27689){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23394__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23394__auto____1.call(this,state_27689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__23394__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__23394__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto__))
})();
var state__23507__auto__ = (function (){var statearr_27699 = f__23506__auto__.call(null);
(statearr_27699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto__);

return statearr_27699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto__))
);

return c__23505__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__27703 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__27703,(0),null);
var ln = cljs.core.nth.call(null,vec__27703,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__27706 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__27706,(0),null);
var file_line = cljs.core.nth.call(null,vec__27706,(1),null);
var file_column = cljs.core.nth.call(null,vec__27706,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__27706,file_name,file_line,file_column){
return (function (p1__27704_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__27704_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__27706,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18398__auto__ = file_line;
if(cljs.core.truth_(or__18398__auto__)){
return or__18398__auto__;
} else {
var and__18386__auto__ = cause;
if(cljs.core.truth_(and__18386__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18386__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__27709 = figwheel.client.heads_up.ensure_container.call(null);
var map__27709__$1 = ((((!((map__27709 == null)))?((((map__27709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27709):map__27709);
var content_area_el = cljs.core.get.call(null,map__27709__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__23505__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto__){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto__){
return (function (state_27757){
var state_val_27758 = (state_27757[(1)]);
if((state_val_27758 === (1))){
var inst_27740 = (state_27757[(7)]);
var inst_27740__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27741 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27742 = ["0.0"];
var inst_27743 = cljs.core.PersistentHashMap.fromArrays(inst_27741,inst_27742);
var inst_27744 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27740__$1,inst_27743);
var inst_27745 = cljs.core.async.timeout.call(null,(300));
var state_27757__$1 = (function (){var statearr_27759 = state_27757;
(statearr_27759[(8)] = inst_27744);

(statearr_27759[(7)] = inst_27740__$1);

return statearr_27759;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27757__$1,(2),inst_27745);
} else {
if((state_val_27758 === (2))){
var inst_27740 = (state_27757[(7)]);
var inst_27747 = (state_27757[(2)]);
var inst_27748 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_27749 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_27750 = cljs.core.PersistentHashMap.fromArrays(inst_27748,inst_27749);
var inst_27751 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27740,inst_27750);
var inst_27752 = cljs.core.async.timeout.call(null,(200));
var state_27757__$1 = (function (){var statearr_27760 = state_27757;
(statearr_27760[(9)] = inst_27747);

(statearr_27760[(10)] = inst_27751);

return statearr_27760;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27757__$1,(3),inst_27752);
} else {
if((state_val_27758 === (3))){
var inst_27740 = (state_27757[(7)]);
var inst_27754 = (state_27757[(2)]);
var inst_27755 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27740,"");
var state_27757__$1 = (function (){var statearr_27761 = state_27757;
(statearr_27761[(11)] = inst_27754);

return statearr_27761;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27757__$1,inst_27755);
} else {
return null;
}
}
}
});})(c__23505__auto__))
;
return ((function (switch__23393__auto__,c__23505__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__23394__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__23394__auto____0 = (function (){
var statearr_27765 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27765[(0)] = figwheel$client$heads_up$clear_$_state_machine__23394__auto__);

(statearr_27765[(1)] = (1));

return statearr_27765;
});
var figwheel$client$heads_up$clear_$_state_machine__23394__auto____1 = (function (state_27757){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_27757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e27766){if((e27766 instanceof Object)){
var ex__23397__auto__ = e27766;
var statearr_27767_27769 = state_27757;
(statearr_27767_27769[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27770 = state_27757;
state_27757 = G__27770;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__23394__auto__ = function(state_27757){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__23394__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__23394__auto____1.call(this,state_27757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__23394__auto____0;
figwheel$client$heads_up$clear_$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__23394__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto__))
})();
var state__23507__auto__ = (function (){var statearr_27768 = f__23506__auto__.call(null);
(statearr_27768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto__);

return statearr_27768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto__))
);

return c__23505__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__23505__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto__){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto__){
return (function (state_27802){
var state_val_27803 = (state_27802[(1)]);
if((state_val_27803 === (1))){
var inst_27792 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_27802__$1 = state_27802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27802__$1,(2),inst_27792);
} else {
if((state_val_27803 === (2))){
var inst_27794 = (state_27802[(2)]);
var inst_27795 = cljs.core.async.timeout.call(null,(400));
var state_27802__$1 = (function (){var statearr_27804 = state_27802;
(statearr_27804[(7)] = inst_27794);

return statearr_27804;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27802__$1,(3),inst_27795);
} else {
if((state_val_27803 === (3))){
var inst_27797 = (state_27802[(2)]);
var inst_27798 = figwheel.client.heads_up.clear.call(null);
var state_27802__$1 = (function (){var statearr_27805 = state_27802;
(statearr_27805[(8)] = inst_27797);

return statearr_27805;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27802__$1,(4),inst_27798);
} else {
if((state_val_27803 === (4))){
var inst_27800 = (state_27802[(2)]);
var state_27802__$1 = state_27802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27802__$1,inst_27800);
} else {
return null;
}
}
}
}
});})(c__23505__auto__))
;
return ((function (switch__23393__auto__,c__23505__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__23394__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__23394__auto____0 = (function (){
var statearr_27809 = [null,null,null,null,null,null,null,null,null];
(statearr_27809[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__23394__auto__);

(statearr_27809[(1)] = (1));

return statearr_27809;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__23394__auto____1 = (function (state_27802){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_27802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e27810){if((e27810 instanceof Object)){
var ex__23397__auto__ = e27810;
var statearr_27811_27813 = state_27802;
(statearr_27811_27813[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27814 = state_27802;
state_27802 = G__27814;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__23394__auto__ = function(state_27802){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23394__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23394__auto____1.call(this,state_27802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__23394__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__23394__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto__))
})();
var state__23507__auto__ = (function (){var statearr_27812 = f__23506__auto__.call(null);
(statearr_27812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto__);

return statearr_27812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto__))
);

return c__23505__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map