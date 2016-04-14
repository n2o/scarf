// Compiled by ClojureScript 1.8.40 {}
goog.provide('scarf.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
scarf.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app","title","app/title",636408784),"Animals",new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"Ant"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"Antelope"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"Bird"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"Cat"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"Dog"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),"Lion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"Mouse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),"Monkey"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),"Snake"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"Zebra"], null)], null)], null));
if(typeof scarf.core.read !== 'undefined'){
} else {
scarf.core.read = (function (){var method_table__19369__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19370__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19371__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19372__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19373__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"scarf.core","read"),((function (method_table__19369__auto__,prefer_table__19370__auto__,method_cache__19371__auto__,cached_hierarchy__19372__auto__,hierarchy__19373__auto__){
return (function (env,key,params){
return key;
});})(method_table__19369__auto__,prefer_table__19370__auto__,method_cache__19371__auto__,cached_hierarchy__19372__auto__,hierarchy__19373__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19373__auto__,method_table__19369__auto__,prefer_table__19370__auto__,method_cache__19371__auto__,cached_hierarchy__19372__auto__));
})();
}
cljs.core._add_method.call(null,scarf.core.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__30484,key,params){
var map__30485 = p__30484;
var map__30485__$1 = ((((!((map__30485 == null)))?((((map__30485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30485):map__30485);
var env = map__30485__$1;
var state = cljs.core.get.call(null,map__30485__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4655__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__30487 = temp__4655__auto__;
var _ = cljs.core.nth.call(null,vec__30487,(0),null);
var value = cljs.core.nth.call(null,vec__30487,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
cljs.core._add_method.call(null,scarf.core.read,new cljs.core.Keyword("animals","list","animals/list",1488034922),(function (p__30488,key,p__30489){
var map__30490 = p__30488;
var map__30490__$1 = ((((!((map__30490 == null)))?((((map__30490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30490):map__30490);
var env = map__30490__$1;
var state = cljs.core.get.call(null,map__30490__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__30491 = p__30489;
var map__30491__$1 = ((((!((map__30491 == null)))?((((map__30491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30491):map__30491);
var start = cljs.core.get.call(null,map__30491__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__30491__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.subvec.call(null,new cljs.core.Keyword("animals","list","animals/list",1488034922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),start,end)], null);
}));
/**
 * @constructor
 */
scarf.core.AnimalsList = (function scarf$core$AnimalsList(){
var this__21748__auto__ = this;
React.Component.apply(this__21748__auto__,arguments);

if(!((this__21748__auto__.initLocalState == null))){
this__21748__auto__.state = this__21748__auto__.initLocalState();
} else {
this__21748__auto__.state = {};
}

return this__21748__auto__;
});

scarf.core.AnimalsList.prototype = goog.object.clone(React.Component.prototype);

var x30498_30512 = scarf.core.AnimalsList.prototype;
x30498_30512.componentWillUpdate = ((function (x30498_30512){
return (function (next_props__21685__auto__,next_state__21686__auto__){
var this__21684__auto__ = this;
if(((!((this__21684__auto__ == null)))?(((false) || (this__21684__auto__.om$next$Ident$))?true:false):false)){
var ident__21687__auto___30513 = om.next.ident.call(null,this__21684__auto__,om.next.props.call(null,this__21684__auto__));
var next_ident__21688__auto___30514 = om.next.ident.call(null,this__21684__auto__,om.next._next_props.call(null,next_props__21685__auto__,this__21684__auto__));
if(cljs.core.not_EQ_.call(null,ident__21687__auto___30513,next_ident__21688__auto___30514)){
var idxr__21689__auto___30515 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21684__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__21689__auto___30515 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__21689__auto___30515),((function (idxr__21689__auto___30515,ident__21687__auto___30513,next_ident__21688__auto___30514,this__21684__auto__,x30498_30512){
return (function (indexes__21690__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__21690__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__21687__auto___30513], null),cljs.core.disj,this__21684__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__21688__auto___30514], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21684__auto__);
});})(idxr__21689__auto___30515,ident__21687__auto___30513,next_ident__21688__auto___30514,this__21684__auto__,x30498_30512))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__21684__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21684__auto__);
});})(x30498_30512))
;

x30498_30512.shouldComponentUpdate = ((function (x30498_30512){
return (function (next_props__21685__auto__,next_state__21686__auto__){
var this__21684__auto__ = this;
var next_props__21685__auto____$1 = goog.object.get(next_props__21685__auto__,"omcljs$value");
var next_props__21685__auto____$2 = (function (){var G__30500 = next_props__21685__auto____$1;
if((next_props__21685__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__30500);
} else {
return G__30500;
}
})();
var or__18445__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21684__auto__),next_props__21685__auto____$2);
if(or__18445__auto__){
return or__18445__auto__;
} else {
var and__18433__auto__ = this__21684__auto__.state;
if(cljs.core.truth_(and__18433__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21684__auto__.state,"omcljs$state"),goog.object.get(next_state__21686__auto__,"omcljs$state"));
} else {
return and__18433__auto__;
}
}
});})(x30498_30512))
;

x30498_30512.componentWillUnmount = ((function (x30498_30512){
return (function (){
var this__21684__auto__ = this;
var r__21694__auto__ = om.next.get_reconciler.call(null,this__21684__auto__);
var cfg__21695__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21694__auto__);
var st__21696__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21695__auto__);
var indexer__21693__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21695__auto__);
if(cljs.core.truth_((function (){var and__18433__auto__ = !((st__21696__auto__ == null));
if(and__18433__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__21696__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__21684__auto__], null));
} else {
return and__18433__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__21696__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21684__auto__);
} else {
}

if((indexer__21693__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21693__auto__,this__21684__auto__);
}
});})(x30498_30512))
;

x30498_30512.componentDidUpdate = ((function (x30498_30512){
return (function (prev_props__21691__auto__,prev_state__21692__auto__){
var this__21684__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21684__auto__);
});})(x30498_30512))
;

x30498_30512.isMounted = ((function (x30498_30512){
return (function (){
var this__21684__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21684__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x30498_30512))
;

x30498_30512.componentWillMount = ((function (x30498_30512){
return (function (){
var this__21684__auto__ = this;
var indexer__21693__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21684__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21693__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21693__auto__,this__21684__auto__);
}
});})(x30498_30512))
;

x30498_30512.render = ((function (x30498_30512){
return (function (){
var this__21683__auto__ = this;
var this$ = this__21683__auto__;
var _STAR_reconciler_STAR_30501 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_30502 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_30503 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_30504 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_30505 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21683__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21683__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21683__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21683__auto__);

om.next._STAR_parent_STAR_ = this__21683__auto__;

try{var map__30506 = om.next.props.call(null,this$);
var map__30506__$1 = ((((!((map__30506 == null)))?((((map__30506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30506):map__30506);
var title = cljs.core.get.call(null,map__30506__$1,new cljs.core.Keyword("app","title","app/title",636408784));
var list = cljs.core.get.call(null,map__30506__$1,new cljs.core.Keyword("animals","list","animals/list",1488034922));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,title))),om.util.force_children.call(null,cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (map__30506,map__30506__$1,title,list,_STAR_reconciler_STAR_30501,_STAR_depth_STAR_30502,_STAR_shared_STAR_30503,_STAR_instrument_STAR_30504,_STAR_parent_STAR_30505,this$,this__21683__auto__,x30498_30512){
return (function (p__30508){
var vec__30509 = p__30508;
var i = cljs.core.nth.call(null,vec__30509,(0),null);
var name = cljs.core.nth.call(null,vec__30509,(1),null);
return React.DOM.li(null,om.util.force_children.call(null,[cljs.core.str(i),cljs.core.str(". "),cljs.core.str(name)].join('')));
});})(map__30506,map__30506__$1,title,list,_STAR_reconciler_STAR_30501,_STAR_depth_STAR_30502,_STAR_shared_STAR_30503,_STAR_instrument_STAR_30504,_STAR_parent_STAR_30505,this$,this__21683__auto__,x30498_30512))
,list))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_30505;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_30504;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_30503;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_30502;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_30501;
}});})(x30498_30512))
;


scarf.core.AnimalsList.prototype.constructor = scarf.core.AnimalsList;

scarf.core.AnimalsList.prototype.constructor.displayName = "scarf.core/AnimalsList";

scarf.core.AnimalsList.prototype.om$isComponent = true;

var x30510_30516 = scarf.core.AnimalsList;
x30510_30516.om$next$IQueryParams$ = true;

x30510_30516.om$next$IQueryParams$params$arity$1 = ((function (x30510_30516){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(10)], null);
});})(x30510_30516))
;

x30510_30516.om$next$IQuery$ = true;

x30510_30516.om$next$IQuery$query$arity$1 = ((function (x30510_30516){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784),cljs.core.list(new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Symbol(null,"?end","?end",2061258539,null)], null))], null);
});})(x30510_30516))
;


var x30511_30517 = scarf.core.AnimalsList.prototype;
x30511_30517.om$next$IQueryParams$ = true;

x30511_30517.om$next$IQueryParams$params$arity$1 = ((function (x30511_30517){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(10)], null);
});})(x30511_30517))
;

x30511_30517.om$next$IQuery$ = true;

x30511_30517.om$next$IQuery$query$arity$1 = ((function (x30511_30517){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784),cljs.core.list(new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Symbol(null,"?end","?end",2061258539,null)], null))], null);
});})(x30511_30517))
;


scarf.core.AnimalsList.cljs$lang$type = true;

scarf.core.AnimalsList.cljs$lang$ctorStr = "scarf.core/AnimalsList";

scarf.core.AnimalsList.cljs$lang$ctorPrWriter = (function (this__21750__auto__,writer__21751__auto__,opt__21752__auto__){
return cljs.core._write.call(null,writer__21751__auto__,"scarf.core/AnimalsList");
});
scarf.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),scarf.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),scarf.core.read], null))], null));
om.next.add_root_BANG_.call(null,scarf.core.reconciler,scarf.core.AnimalsList,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map