// Compiled by ClojureScript 1.8.40 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19521__auto__ = [];
var len__19514__auto___27720 = arguments.length;
var i__19515__auto___27721 = (0);
while(true){
if((i__19515__auto___27721 < len__19514__auto___27720)){
args__19521__auto__.push((arguments[i__19515__auto___27721]));

var G__27722 = (i__19515__auto___27721 + (1));
i__19515__auto___27721 = G__27722;
continue;
} else {
}
break;
}

var argseq__19522__auto__ = ((((2) < args__19521__auto__.length))?(new cljs.core.IndexedSeq(args__19521__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19522__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__27712_27723 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__27713_27724 = null;
var count__27714_27725 = (0);
var i__27715_27726 = (0);
while(true){
if((i__27715_27726 < count__27714_27725)){
var k_27727 = cljs.core._nth.call(null,chunk__27713_27724,i__27715_27726);
e.setAttribute(cljs.core.name.call(null,k_27727),cljs.core.get.call(null,attrs,k_27727));

var G__27728 = seq__27712_27723;
var G__27729 = chunk__27713_27724;
var G__27730 = count__27714_27725;
var G__27731 = (i__27715_27726 + (1));
seq__27712_27723 = G__27728;
chunk__27713_27724 = G__27729;
count__27714_27725 = G__27730;
i__27715_27726 = G__27731;
continue;
} else {
var temp__4657__auto___27732 = cljs.core.seq.call(null,seq__27712_27723);
if(temp__4657__auto___27732){
var seq__27712_27733__$1 = temp__4657__auto___27732;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27712_27733__$1)){
var c__19256__auto___27734 = cljs.core.chunk_first.call(null,seq__27712_27733__$1);
var G__27735 = cljs.core.chunk_rest.call(null,seq__27712_27733__$1);
var G__27736 = c__19256__auto___27734;
var G__27737 = cljs.core.count.call(null,c__19256__auto___27734);
var G__27738 = (0);
seq__27712_27723 = G__27735;
chunk__27713_27724 = G__27736;
count__27714_27725 = G__27737;
i__27715_27726 = G__27738;
continue;
} else {
var k_27739 = cljs.core.first.call(null,seq__27712_27733__$1);
e.setAttribute(cljs.core.name.call(null,k_27739),cljs.core.get.call(null,attrs,k_27739));

var G__27740 = cljs.core.next.call(null,seq__27712_27733__$1);
var G__27741 = null;
var G__27742 = (0);
var G__27743 = (0);
seq__27712_27723 = G__27740;
chunk__27713_27724 = G__27741;
count__27714_27725 = G__27742;
i__27715_27726 = G__27743;
continue;
}
} else {
}
}
break;
}

var seq__27716_27744 = cljs.core.seq.call(null,children);
var chunk__27717_27745 = null;
var count__27718_27746 = (0);
var i__27719_27747 = (0);
while(true){
if((i__27719_27747 < count__27718_27746)){
var ch_27748 = cljs.core._nth.call(null,chunk__27717_27745,i__27719_27747);
e.appendChild(ch_27748);

var G__27749 = seq__27716_27744;
var G__27750 = chunk__27717_27745;
var G__27751 = count__27718_27746;
var G__27752 = (i__27719_27747 + (1));
seq__27716_27744 = G__27749;
chunk__27717_27745 = G__27750;
count__27718_27746 = G__27751;
i__27719_27747 = G__27752;
continue;
} else {
var temp__4657__auto___27753 = cljs.core.seq.call(null,seq__27716_27744);
if(temp__4657__auto___27753){
var seq__27716_27754__$1 = temp__4657__auto___27753;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27716_27754__$1)){
var c__19256__auto___27755 = cljs.core.chunk_first.call(null,seq__27716_27754__$1);
var G__27756 = cljs.core.chunk_rest.call(null,seq__27716_27754__$1);
var G__27757 = c__19256__auto___27755;
var G__27758 = cljs.core.count.call(null,c__19256__auto___27755);
var G__27759 = (0);
seq__27716_27744 = G__27756;
chunk__27717_27745 = G__27757;
count__27718_27746 = G__27758;
i__27719_27747 = G__27759;
continue;
} else {
var ch_27760 = cljs.core.first.call(null,seq__27716_27754__$1);
e.appendChild(ch_27760);

var G__27761 = cljs.core.next.call(null,seq__27716_27754__$1);
var G__27762 = null;
var G__27763 = (0);
var G__27764 = (0);
seq__27716_27744 = G__27761;
chunk__27717_27745 = G__27762;
count__27718_27746 = G__27763;
i__27719_27747 = G__27764;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq27709){
var G__27710 = cljs.core.first.call(null,seq27709);
var seq27709__$1 = cljs.core.next.call(null,seq27709);
var G__27711 = cljs.core.first.call(null,seq27709__$1);
var seq27709__$2 = cljs.core.next.call(null,seq27709__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__27710,G__27711,seq27709__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19369__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19370__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19371__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19372__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19373__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19369__auto__,prefer_table__19370__auto__,method_cache__19371__auto__,cached_hierarchy__19372__auto__,hierarchy__19373__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19369__auto__,prefer_table__19370__auto__,method_cache__19371__auto__,cached_hierarchy__19372__auto__,hierarchy__19373__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19373__auto__,method_table__19369__auto__,prefer_table__19370__auto__,method_cache__19371__auto__,cached_hierarchy__19372__auto__));
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
var el_27765 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_27765.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_27765.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_27765.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_27765);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__27766,st_map){
var map__27771 = p__27766;
var map__27771__$1 = ((((!((map__27771 == null)))?((((map__27771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27771):map__27771);
var container_el = cljs.core.get.call(null,map__27771__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__27771,map__27771__$1,container_el){
return (function (p__27773){
var vec__27774 = p__27773;
var k = cljs.core.nth.call(null,vec__27774,(0),null);
var v = cljs.core.nth.call(null,vec__27774,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__27771,map__27771__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__27775,dom_str){
var map__27778 = p__27775;
var map__27778__$1 = ((((!((map__27778 == null)))?((((map__27778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27778):map__27778);
var c = map__27778__$1;
var content_area_el = cljs.core.get.call(null,map__27778__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__27780){
var map__27783 = p__27780;
var map__27783__$1 = ((((!((map__27783 == null)))?((((map__27783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27783):map__27783);
var content_area_el = cljs.core.get.call(null,map__27783__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__23568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto__){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto__){
return (function (state_27826){
var state_val_27827 = (state_27826[(1)]);
if((state_val_27827 === (1))){
var inst_27811 = (state_27826[(7)]);
var inst_27811__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27812 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27813 = ["10px","10px","100%","68px","1.0"];
var inst_27814 = cljs.core.PersistentHashMap.fromArrays(inst_27812,inst_27813);
var inst_27815 = cljs.core.merge.call(null,inst_27814,style);
var inst_27816 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27811__$1,inst_27815);
var inst_27817 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27811__$1,msg);
var inst_27818 = cljs.core.async.timeout.call(null,(300));
var state_27826__$1 = (function (){var statearr_27828 = state_27826;
(statearr_27828[(7)] = inst_27811__$1);

(statearr_27828[(8)] = inst_27817);

(statearr_27828[(9)] = inst_27816);

return statearr_27828;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27826__$1,(2),inst_27818);
} else {
if((state_val_27827 === (2))){
var inst_27811 = (state_27826[(7)]);
var inst_27820 = (state_27826[(2)]);
var inst_27821 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_27822 = ["auto"];
var inst_27823 = cljs.core.PersistentHashMap.fromArrays(inst_27821,inst_27822);
var inst_27824 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27811,inst_27823);
var state_27826__$1 = (function (){var statearr_27829 = state_27826;
(statearr_27829[(10)] = inst_27820);

return statearr_27829;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27826__$1,inst_27824);
} else {
return null;
}
}
});})(c__23568__auto__))
;
return ((function (switch__23456__auto__,c__23568__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__23457__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__23457__auto____0 = (function (){
var statearr_27833 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27833[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__23457__auto__);

(statearr_27833[(1)] = (1));

return statearr_27833;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__23457__auto____1 = (function (state_27826){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_27826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e27834){if((e27834 instanceof Object)){
var ex__23460__auto__ = e27834;
var statearr_27835_27837 = state_27826;
(statearr_27835_27837[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27838 = state_27826;
state_27826 = G__27838;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__23457__auto__ = function(state_27826){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23457__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23457__auto____1.call(this,state_27826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__23457__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__23457__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto__))
})();
var state__23570__auto__ = (function (){var statearr_27836 = f__23569__auto__.call(null);
(statearr_27836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto__);

return statearr_27836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto__))
);

return c__23568__auto__;
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
var vec__27840 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__27840,(0),null);
var ln = cljs.core.nth.call(null,vec__27840,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__27843 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__27843,(0),null);
var file_line = cljs.core.nth.call(null,vec__27843,(1),null);
var file_column = cljs.core.nth.call(null,vec__27843,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__27843,file_name,file_line,file_column){
return (function (p1__27841_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__27841_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__27843,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18445__auto__ = file_line;
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
var and__18433__auto__ = cause;
if(cljs.core.truth_(and__18433__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18433__auto__;
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
var map__27846 = figwheel.client.heads_up.ensure_container.call(null);
var map__27846__$1 = ((((!((map__27846 == null)))?((((map__27846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27846):map__27846);
var content_area_el = cljs.core.get.call(null,map__27846__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__23568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto__){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto__){
return (function (state_27894){
var state_val_27895 = (state_27894[(1)]);
if((state_val_27895 === (1))){
var inst_27877 = (state_27894[(7)]);
var inst_27877__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27878 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27879 = ["0.0"];
var inst_27880 = cljs.core.PersistentHashMap.fromArrays(inst_27878,inst_27879);
var inst_27881 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27877__$1,inst_27880);
var inst_27882 = cljs.core.async.timeout.call(null,(300));
var state_27894__$1 = (function (){var statearr_27896 = state_27894;
(statearr_27896[(8)] = inst_27881);

(statearr_27896[(7)] = inst_27877__$1);

return statearr_27896;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27894__$1,(2),inst_27882);
} else {
if((state_val_27895 === (2))){
var inst_27877 = (state_27894[(7)]);
var inst_27884 = (state_27894[(2)]);
var inst_27885 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_27886 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_27887 = cljs.core.PersistentHashMap.fromArrays(inst_27885,inst_27886);
var inst_27888 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27877,inst_27887);
var inst_27889 = cljs.core.async.timeout.call(null,(200));
var state_27894__$1 = (function (){var statearr_27897 = state_27894;
(statearr_27897[(9)] = inst_27884);

(statearr_27897[(10)] = inst_27888);

return statearr_27897;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27894__$1,(3),inst_27889);
} else {
if((state_val_27895 === (3))){
var inst_27877 = (state_27894[(7)]);
var inst_27891 = (state_27894[(2)]);
var inst_27892 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27877,"");
var state_27894__$1 = (function (){var statearr_27898 = state_27894;
(statearr_27898[(11)] = inst_27891);

return statearr_27898;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27894__$1,inst_27892);
} else {
return null;
}
}
}
});})(c__23568__auto__))
;
return ((function (switch__23456__auto__,c__23568__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__23457__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__23457__auto____0 = (function (){
var statearr_27902 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27902[(0)] = figwheel$client$heads_up$clear_$_state_machine__23457__auto__);

(statearr_27902[(1)] = (1));

return statearr_27902;
});
var figwheel$client$heads_up$clear_$_state_machine__23457__auto____1 = (function (state_27894){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_27894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e27903){if((e27903 instanceof Object)){
var ex__23460__auto__ = e27903;
var statearr_27904_27906 = state_27894;
(statearr_27904_27906[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27907 = state_27894;
state_27894 = G__27907;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__23457__auto__ = function(state_27894){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__23457__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__23457__auto____1.call(this,state_27894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__23457__auto____0;
figwheel$client$heads_up$clear_$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__23457__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto__))
})();
var state__23570__auto__ = (function (){var statearr_27905 = f__23569__auto__.call(null);
(statearr_27905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto__);

return statearr_27905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto__))
);

return c__23568__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__23568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto__){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto__){
return (function (state_27939){
var state_val_27940 = (state_27939[(1)]);
if((state_val_27940 === (1))){
var inst_27929 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_27939__$1 = state_27939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27939__$1,(2),inst_27929);
} else {
if((state_val_27940 === (2))){
var inst_27931 = (state_27939[(2)]);
var inst_27932 = cljs.core.async.timeout.call(null,(400));
var state_27939__$1 = (function (){var statearr_27941 = state_27939;
(statearr_27941[(7)] = inst_27931);

return statearr_27941;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27939__$1,(3),inst_27932);
} else {
if((state_val_27940 === (3))){
var inst_27934 = (state_27939[(2)]);
var inst_27935 = figwheel.client.heads_up.clear.call(null);
var state_27939__$1 = (function (){var statearr_27942 = state_27939;
(statearr_27942[(8)] = inst_27934);

return statearr_27942;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27939__$1,(4),inst_27935);
} else {
if((state_val_27940 === (4))){
var inst_27937 = (state_27939[(2)]);
var state_27939__$1 = state_27939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27939__$1,inst_27937);
} else {
return null;
}
}
}
}
});})(c__23568__auto__))
;
return ((function (switch__23456__auto__,c__23568__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__23457__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__23457__auto____0 = (function (){
var statearr_27946 = [null,null,null,null,null,null,null,null,null];
(statearr_27946[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__23457__auto__);

(statearr_27946[(1)] = (1));

return statearr_27946;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__23457__auto____1 = (function (state_27939){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_27939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e27947){if((e27947 instanceof Object)){
var ex__23460__auto__ = e27947;
var statearr_27948_27950 = state_27939;
(statearr_27948_27950[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27951 = state_27939;
state_27939 = G__27951;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__23457__auto__ = function(state_27939){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23457__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23457__auto____1.call(this,state_27939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__23457__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__23457__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto__))
})();
var state__23570__auto__ = (function (){var statearr_27949 = f__23569__auto__.call(null);
(statearr_27949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto__);

return statearr_27949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto__))
);

return c__23568__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map