// Compiled by ClojureScript 1.8.34 {}
goog.provide('om_tutorial.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
om_tutorial.core.init_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("list","one","list/one",942123326),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"John",new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mary",new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Bob",new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null)], null),new cljs.core.Keyword("list","two","list/two",521811255),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Mary",new cljs.core.Keyword(null,"points","points",-1486596883),(0),new cljs.core.Keyword(null,"age","age",-604307804),(27)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Gwen",new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Jeff",new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null)], null)], null);
if(typeof om_tutorial.core.read !== 'undefined'){
} else {
om_tutorial.core.read = (function (){var method_table__19322__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19323__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19324__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19325__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19326__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tutorial.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19326__auto__,method_table__19322__auto__,prefer_table__19323__auto__,method_cache__19324__auto__,cached_hierarchy__19325__auto__));
})();
}
om_tutorial.core.get_people = (function om_tutorial$core$get_people(state,key){
var st = cljs.core.deref.call(null,state);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (st){
return (function (p1__22262_SHARP_){
return cljs.core.get_in.call(null,st,p1__22262_SHARP_);
});})(st))
),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("list","one","list/one",942123326),(function (p__22263,key,params){
var map__22264 = p__22263;
var map__22264__$1 = ((((!((map__22264 == null)))?((((map__22264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22264):map__22264);
var env = map__22264__$1;
var state = cljs.core.get.call(null,map__22264__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om_tutorial.core.get_people.call(null,state,key)], null);
}));
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("list","two","list/two",521811255),(function (p__22266,key,params){
var map__22267 = p__22266;
var map__22267__$1 = ((((!((map__22267 == null)))?((((map__22267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22267):map__22267);
var env = map__22267__$1;
var state = cljs.core.get.call(null,map__22267__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om_tutorial.core.get_people.call(null,state,key)], null);
}));
if(typeof om_tutorial.core.mutate !== 'undefined'){
} else {
om_tutorial.core.mutate = (function (){var method_table__19322__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19323__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19324__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19325__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19326__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tutorial.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19326__auto__,method_table__19322__auto__,prefer_table__19323__auto__,method_cache__19324__auto__,cached_hierarchy__19325__auto__));
})();
}
cljs.core._add_method.call(null,om_tutorial.core.mutate,new cljs.core.Symbol("points","increment","points/increment",1315621678,null),(function (p__22269,_,p__22270){
var map__22271 = p__22269;
var map__22271__$1 = ((((!((map__22271 == null)))?((((map__22271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22271):map__22271);
var state = cljs.core.get.call(null,map__22271__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__22272 = p__22270;
var map__22272__$1 = ((((!((map__22272 == null)))?((((map__22272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22272):map__22272);
var name = cljs.core.get.call(null,map__22272__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__22271,map__22271__$1,state,map__22272,map__22272__$1,name){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name,new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core.inc);
});})(map__22271,map__22271__$1,state,map__22272,map__22272__$1,name))
], null);
}));
cljs.core._add_method.call(null,om_tutorial.core.mutate,new cljs.core.Symbol("points","decrement","points/decrement",-848171965,null),(function (p__22276,_,p__22277){
var map__22278 = p__22276;
var map__22278__$1 = ((((!((map__22278 == null)))?((((map__22278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22278):map__22278);
var state = cljs.core.get.call(null,map__22278__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__22279 = p__22277;
var map__22279__$1 = ((((!((map__22279 == null)))?((((map__22279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22279):map__22279);
var name = cljs.core.get.call(null,map__22279__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__22278,map__22278__$1,state,map__22279,map__22279__$1,name){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name,new cljs.core.Keyword(null,"points","points",-1486596883)], null),((function (map__22278,map__22278__$1,state,map__22279,map__22279__$1,name){
return (function (p1__22275_SHARP_){
var n = (p1__22275_SHARP_ - (1));
if((n < (0))){
return (0);
} else {
return n;
}
});})(map__22278,map__22278__$1,state,map__22279,map__22279__$1,name))
);
});})(map__22278,map__22278__$1,state,map__22279,map__22279__$1,name))
], null);
}));
/**
 * @constructor
 */
om_tutorial.core.Person = (function om_tutorial$core$Person(){
var this__20548__auto__ = this;
React.Component.apply(this__20548__auto__,arguments);

if(!((this__20548__auto__.initLocalState == null))){
this__20548__auto__.state = this__20548__auto__.initLocalState();
} else {
this__20548__auto__.state = {};
}

return this__20548__auto__;
});

om_tutorial.core.Person.prototype = goog.object.clone(React.Component.prototype);

var x22286_22297 = om_tutorial.core.Person.prototype;
x22286_22297.componentWillUpdate = ((function (x22286_22297){
return (function (next_props__20485__auto__,next_state__20486__auto__){
var this__20484__auto__ = this;
if(((!((this__20484__auto__ == null)))?(((false) || (this__20484__auto__.om$next$Ident$))?true:false):false)){
var ident__20487__auto___22298 = om.next.ident.call(null,this__20484__auto__,om.next.props.call(null,this__20484__auto__));
var next_ident__20488__auto___22299 = om.next.ident.call(null,this__20484__auto__,om.next._next_props.call(null,next_props__20485__auto__,this__20484__auto__));
if(cljs.core.not_EQ_.call(null,ident__20487__auto___22298,next_ident__20488__auto___22299)){
var idxr__20489__auto___22300 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20484__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__20489__auto___22300 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__20489__auto___22300),((function (idxr__20489__auto___22300,ident__20487__auto___22298,next_ident__20488__auto___22299,this__20484__auto__,x22286_22297){
return (function (indexes__20490__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__20490__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__20487__auto___22298], null),cljs.core.disj,this__20484__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__20488__auto___22299], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__20484__auto__);
});})(idxr__20489__auto___22300,ident__20487__auto___22298,next_ident__20488__auto___22299,this__20484__auto__,x22286_22297))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__20484__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20484__auto__);
});})(x22286_22297))
;

x22286_22297.shouldComponentUpdate = ((function (x22286_22297){
return (function (next_props__20485__auto__,next_state__20486__auto__){
var this__20484__auto__ = this;
var next_props__20485__auto____$1 = goog.object.get(next_props__20485__auto__,"omcljs$value");
var next_props__20485__auto____$2 = (function (){var G__22288 = next_props__20485__auto____$1;
if((next_props__20485__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__22288);
} else {
return G__22288;
}
})();
var or__18398__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__20484__auto__),next_props__20485__auto____$2);
if(or__18398__auto__){
return or__18398__auto__;
} else {
var and__18386__auto__ = this__20484__auto__.state;
if(cljs.core.truth_(and__18386__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__20484__auto__.state,"omcljs$state"),goog.object.get(next_state__20486__auto__,"omcljs$state"));
} else {
return and__18386__auto__;
}
}
});})(x22286_22297))
;

x22286_22297.componentWillUnmount = ((function (x22286_22297){
return (function (){
var this__20484__auto__ = this;
var r__20494__auto__ = om.next.get_reconciler.call(null,this__20484__auto__);
var cfg__20495__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20494__auto__);
var st__20496__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20495__auto__);
var indexer__20493__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20495__auto__);
if(cljs.core.truth_((function (){var and__18386__auto__ = !((st__20496__auto__ == null));
if(and__18386__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__20496__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__20484__auto__], null));
} else {
return and__18386__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__20496__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__20484__auto__);
} else {
}

if((indexer__20493__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__20493__auto__,this__20484__auto__);
}
});})(x22286_22297))
;

x22286_22297.componentDidUpdate = ((function (x22286_22297){
return (function (prev_props__20491__auto__,prev_state__20492__auto__){
var this__20484__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20484__auto__);
});})(x22286_22297))
;

x22286_22297.isMounted = ((function (x22286_22297){
return (function (){
var this__20484__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20484__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22286_22297))
;

x22286_22297.componentWillMount = ((function (x22286_22297){
return (function (){
var this__20484__auto__ = this;
var indexer__20493__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20484__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20493__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20493__auto__,this__20484__auto__);
}
});})(x22286_22297))
;


om_tutorial.core.Person.prototype.constructor = om_tutorial.core.Person;

om_tutorial.core.Person.prototype.constructor.displayName = "om-tutorial.core/Person";

om_tutorial.core.Person.prototype.om$isComponent = true;

var x22289_22301 = om_tutorial.core.Person;
x22289_22301.om$next$Ident$ = true;

x22289_22301.om$next$Ident$ident$arity$2 = ((function (x22289_22301){
return (function (this$,p__22290){
var map__22291 = p__22290;
var map__22291__$1 = ((((!((map__22291 == null)))?((((map__22291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22291):map__22291);
var name = cljs.core.get.call(null,map__22291__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name], null);
});})(x22289_22301))
;

x22289_22301.om$next$IQuery$ = true;

x22289_22301.om$next$IQuery$query$arity$1 = ((function (x22289_22301){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"points","points",-1486596883)], null);
});})(x22289_22301))
;


var x22293_22302 = om_tutorial.core.Person.prototype;
x22293_22302.om$next$Ident$ = true;

x22293_22302.om$next$Ident$ident$arity$2 = ((function (x22293_22302){
return (function (this$,p__22294){
var map__22295 = p__22294;
var map__22295__$1 = ((((!((map__22295 == null)))?((((map__22295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22295):map__22295);
var name = cljs.core.get.call(null,map__22295__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name], null);
});})(x22293_22302))
;

x22293_22302.om$next$IQuery$ = true;

x22293_22302.om$next$IQuery$query$arity$1 = ((function (x22293_22302){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"points","points",-1486596883)], null);
});})(x22293_22302))
;


om_tutorial.core.Person.cljs$lang$type = true;

om_tutorial.core.Person.cljs$lang$ctorStr = "om-tutorial.core/Person";

om_tutorial.core.Person.cljs$lang$ctorPrWriter = (function (this__20550__auto__,writer__20551__auto__,opt__20552__auto__){
return cljs.core._write.call(null,writer__20551__auto__,"om-tutorial.core/Person");
});
/**
 * @constructor
 */
om_tutorial.core.RootView = (function om_tutorial$core$RootView(){
var this__20548__auto__ = this;
React.Component.apply(this__20548__auto__,arguments);

if(!((this__20548__auto__.initLocalState == null))){
this__20548__auto__.state = this__20548__auto__.initLocalState();
} else {
this__20548__auto__.state = {};
}

return this__20548__auto__;
});

om_tutorial.core.RootView.prototype = goog.object.clone(React.Component.prototype);

var x22307_22312 = om_tutorial.core.RootView.prototype;
x22307_22312.componentWillUpdate = ((function (x22307_22312){
return (function (next_props__20485__auto__,next_state__20486__auto__){
var this__20484__auto__ = this;
if(((!((this__20484__auto__ == null)))?(((false) || (this__20484__auto__.om$next$Ident$))?true:false):false)){
var ident__20487__auto___22313 = om.next.ident.call(null,this__20484__auto__,om.next.props.call(null,this__20484__auto__));
var next_ident__20488__auto___22314 = om.next.ident.call(null,this__20484__auto__,om.next._next_props.call(null,next_props__20485__auto__,this__20484__auto__));
if(cljs.core.not_EQ_.call(null,ident__20487__auto___22313,next_ident__20488__auto___22314)){
var idxr__20489__auto___22315 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20484__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__20489__auto___22315 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__20489__auto___22315),((function (idxr__20489__auto___22315,ident__20487__auto___22313,next_ident__20488__auto___22314,this__20484__auto__,x22307_22312){
return (function (indexes__20490__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__20490__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__20487__auto___22313], null),cljs.core.disj,this__20484__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__20488__auto___22314], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__20484__auto__);
});})(idxr__20489__auto___22315,ident__20487__auto___22313,next_ident__20488__auto___22314,this__20484__auto__,x22307_22312))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__20484__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20484__auto__);
});})(x22307_22312))
;

x22307_22312.shouldComponentUpdate = ((function (x22307_22312){
return (function (next_props__20485__auto__,next_state__20486__auto__){
var this__20484__auto__ = this;
var next_props__20485__auto____$1 = goog.object.get(next_props__20485__auto__,"omcljs$value");
var next_props__20485__auto____$2 = (function (){var G__22309 = next_props__20485__auto____$1;
if((next_props__20485__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__22309);
} else {
return G__22309;
}
})();
var or__18398__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__20484__auto__),next_props__20485__auto____$2);
if(or__18398__auto__){
return or__18398__auto__;
} else {
var and__18386__auto__ = this__20484__auto__.state;
if(cljs.core.truth_(and__18386__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__20484__auto__.state,"omcljs$state"),goog.object.get(next_state__20486__auto__,"omcljs$state"));
} else {
return and__18386__auto__;
}
}
});})(x22307_22312))
;

x22307_22312.componentWillUnmount = ((function (x22307_22312){
return (function (){
var this__20484__auto__ = this;
var r__20494__auto__ = om.next.get_reconciler.call(null,this__20484__auto__);
var cfg__20495__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20494__auto__);
var st__20496__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20495__auto__);
var indexer__20493__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20495__auto__);
if(cljs.core.truth_((function (){var and__18386__auto__ = !((st__20496__auto__ == null));
if(and__18386__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__20496__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__20484__auto__], null));
} else {
return and__18386__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__20496__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__20484__auto__);
} else {
}

if((indexer__20493__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__20493__auto__,this__20484__auto__);
}
});})(x22307_22312))
;

x22307_22312.componentDidUpdate = ((function (x22307_22312){
return (function (prev_props__20491__auto__,prev_state__20492__auto__){
var this__20484__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20484__auto__);
});})(x22307_22312))
;

x22307_22312.isMounted = ((function (x22307_22312){
return (function (){
var this__20484__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20484__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22307_22312))
;

x22307_22312.componentWillMount = ((function (x22307_22312){
return (function (){
var this__20484__auto__ = this;
var indexer__20493__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20484__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20493__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20493__auto__,this__20484__auto__);
}
});})(x22307_22312))
;


om_tutorial.core.RootView.prototype.constructor = om_tutorial.core.RootView;

om_tutorial.core.RootView.prototype.constructor.displayName = "om-tutorial.core/RootView";

om_tutorial.core.RootView.prototype.om$isComponent = true;

var x22310_22316 = om_tutorial.core.RootView;
x22310_22316.om$next$IQuery$ = true;

x22310_22316.om$next$IQuery$query$arity$1 = ((function (x22310_22316){
return (function (this$){
var this$__$1 = this;
var subquery = om.next.get_query.call(null,om_tutorial.core.Person);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","one","list/one",942123326)),cljs.core._conj.call(null,cljs.core.List.EMPTY,subquery)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","two","list/two",521811255)),cljs.core._conj.call(null,cljs.core.List.EMPTY,subquery))))))))));
});})(x22310_22316))
;


var x22311_22317 = om_tutorial.core.RootView.prototype;
x22311_22317.om$next$IQuery$ = true;

x22311_22317.om$next$IQuery$query$arity$1 = ((function (x22311_22317){
return (function (this$){
var this$__$1 = this;
var subquery = om.next.get_query.call(null,om_tutorial.core.Person);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","one","list/one",942123326)),cljs.core._conj.call(null,cljs.core.List.EMPTY,subquery)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","two","list/two",521811255)),cljs.core._conj.call(null,cljs.core.List.EMPTY,subquery))))))))));
});})(x22311_22317))
;


om_tutorial.core.RootView.cljs$lang$type = true;

om_tutorial.core.RootView.cljs$lang$ctorStr = "om-tutorial.core/RootView";

om_tutorial.core.RootView.cljs$lang$ctorPrWriter = (function (this__20550__auto__,writer__20551__auto__,opt__20552__auto__){
return cljs.core._write.call(null,writer__20551__auto__,"om-tutorial.core/RootView");
});
om_tutorial.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app","title","app/title",636408784),"Animals",new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"Ant"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"Antelope"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"Bird"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"Cat"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"Dog"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),"Lion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"Mouse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),"Monkey"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),"Snake"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"Zebra"], null)], null)], null));
if(typeof om_tutorial.core.read !== 'undefined'){
} else {
om_tutorial.core.read = (function (){var method_table__19322__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19323__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19324__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19325__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19326__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tutorial.core","read"),((function (method_table__19322__auto__,prefer_table__19323__auto__,method_cache__19324__auto__,cached_hierarchy__19325__auto__,hierarchy__19326__auto__){
return (function (env,key,params){
return key;
});})(method_table__19322__auto__,prefer_table__19323__auto__,method_cache__19324__auto__,cached_hierarchy__19325__auto__,hierarchy__19326__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19326__auto__,method_table__19322__auto__,prefer_table__19323__auto__,method_cache__19324__auto__,cached_hierarchy__19325__auto__));
})();
}
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__22318,key,params){
var map__22319 = p__22318;
var map__22319__$1 = ((((!((map__22319 == null)))?((((map__22319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22319):map__22319);
var env = map__22319__$1;
var state = cljs.core.get.call(null,map__22319__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4655__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__22321 = temp__4655__auto__;
var _ = cljs.core.nth.call(null,vec__22321,(0),null);
var value = cljs.core.nth.call(null,vec__22321,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("animals","list","animals/list",1488034922),(function (p__22322,key,p__22323){
var map__22324 = p__22322;
var map__22324__$1 = ((((!((map__22324 == null)))?((((map__22324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22324):map__22324);
var env = map__22324__$1;
var state = cljs.core.get.call(null,map__22324__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__22325 = p__22323;
var map__22325__$1 = ((((!((map__22325 == null)))?((((map__22325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22325):map__22325);
var start = cljs.core.get.call(null,map__22325__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__22325__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.subvec.call(null,new cljs.core.Keyword("animals","list","animals/list",1488034922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),start,end)], null);
}));
/**
 * @constructor
 */
om_tutorial.core.AnimalsList = (function om_tutorial$core$AnimalsList(){
var this__20548__auto__ = this;
React.Component.apply(this__20548__auto__,arguments);

if(!((this__20548__auto__.initLocalState == null))){
this__20548__auto__.state = this__20548__auto__.initLocalState();
} else {
this__20548__auto__.state = {};
}

return this__20548__auto__;
});

om_tutorial.core.AnimalsList.prototype = goog.object.clone(React.Component.prototype);

var x22332_22346 = om_tutorial.core.AnimalsList.prototype;
x22332_22346.componentWillUpdate = ((function (x22332_22346){
return (function (next_props__20485__auto__,next_state__20486__auto__){
var this__20484__auto__ = this;
if(((!((this__20484__auto__ == null)))?(((false) || (this__20484__auto__.om$next$Ident$))?true:false):false)){
var ident__20487__auto___22347 = om.next.ident.call(null,this__20484__auto__,om.next.props.call(null,this__20484__auto__));
var next_ident__20488__auto___22348 = om.next.ident.call(null,this__20484__auto__,om.next._next_props.call(null,next_props__20485__auto__,this__20484__auto__));
if(cljs.core.not_EQ_.call(null,ident__20487__auto___22347,next_ident__20488__auto___22348)){
var idxr__20489__auto___22349 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20484__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__20489__auto___22349 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__20489__auto___22349),((function (idxr__20489__auto___22349,ident__20487__auto___22347,next_ident__20488__auto___22348,this__20484__auto__,x22332_22346){
return (function (indexes__20490__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__20490__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__20487__auto___22347], null),cljs.core.disj,this__20484__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__20488__auto___22348], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__20484__auto__);
});})(idxr__20489__auto___22349,ident__20487__auto___22347,next_ident__20488__auto___22348,this__20484__auto__,x22332_22346))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__20484__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20484__auto__);
});})(x22332_22346))
;

x22332_22346.shouldComponentUpdate = ((function (x22332_22346){
return (function (next_props__20485__auto__,next_state__20486__auto__){
var this__20484__auto__ = this;
var next_props__20485__auto____$1 = goog.object.get(next_props__20485__auto__,"omcljs$value");
var next_props__20485__auto____$2 = (function (){var G__22334 = next_props__20485__auto____$1;
if((next_props__20485__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__22334);
} else {
return G__22334;
}
})();
var or__18398__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__20484__auto__),next_props__20485__auto____$2);
if(or__18398__auto__){
return or__18398__auto__;
} else {
var and__18386__auto__ = this__20484__auto__.state;
if(cljs.core.truth_(and__18386__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__20484__auto__.state,"omcljs$state"),goog.object.get(next_state__20486__auto__,"omcljs$state"));
} else {
return and__18386__auto__;
}
}
});})(x22332_22346))
;

x22332_22346.componentWillUnmount = ((function (x22332_22346){
return (function (){
var this__20484__auto__ = this;
var r__20494__auto__ = om.next.get_reconciler.call(null,this__20484__auto__);
var cfg__20495__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20494__auto__);
var st__20496__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20495__auto__);
var indexer__20493__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20495__auto__);
if(cljs.core.truth_((function (){var and__18386__auto__ = !((st__20496__auto__ == null));
if(and__18386__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__20496__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__20484__auto__], null));
} else {
return and__18386__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__20496__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__20484__auto__);
} else {
}

if((indexer__20493__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__20493__auto__,this__20484__auto__);
}
});})(x22332_22346))
;

x22332_22346.componentDidUpdate = ((function (x22332_22346){
return (function (prev_props__20491__auto__,prev_state__20492__auto__){
var this__20484__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20484__auto__);
});})(x22332_22346))
;

x22332_22346.isMounted = ((function (x22332_22346){
return (function (){
var this__20484__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20484__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22332_22346))
;

x22332_22346.componentWillMount = ((function (x22332_22346){
return (function (){
var this__20484__auto__ = this;
var indexer__20493__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20484__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20493__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20493__auto__,this__20484__auto__);
}
});})(x22332_22346))
;

x22332_22346.render = ((function (x22332_22346){
return (function (){
var this__20483__auto__ = this;
var this$ = this__20483__auto__;
var _STAR_reconciler_STAR_22335 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22336 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22337 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22338 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22339 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__20483__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__20483__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__20483__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__20483__auto__);

om.next._STAR_parent_STAR_ = this__20483__auto__;

try{var map__22340 = om.next.props.call(null,this$);
var map__22340__$1 = ((((!((map__22340 == null)))?((((map__22340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22340):map__22340);
var title = cljs.core.get.call(null,map__22340__$1,new cljs.core.Keyword("app","title","app/title",636408784));
var list = cljs.core.get.call(null,map__22340__$1,new cljs.core.Keyword("animals","list","animals/list",1488034922));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,title))),om.util.force_children.call(null,cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (map__22340,map__22340__$1,title,list,_STAR_reconciler_STAR_22335,_STAR_depth_STAR_22336,_STAR_shared_STAR_22337,_STAR_instrument_STAR_22338,_STAR_parent_STAR_22339,this$,this__20483__auto__,x22332_22346){
return (function (p__22342){
var vec__22343 = p__22342;
var i = cljs.core.nth.call(null,vec__22343,(0),null);
var name = cljs.core.nth.call(null,vec__22343,(1),null);
return React.DOM.li(null,om.util.force_children.call(null,[cljs.core.str(i),cljs.core.str(". "),cljs.core.str(name)].join('')));
});})(map__22340,map__22340__$1,title,list,_STAR_reconciler_STAR_22335,_STAR_depth_STAR_22336,_STAR_shared_STAR_22337,_STAR_instrument_STAR_22338,_STAR_parent_STAR_22339,this$,this__20483__auto__,x22332_22346))
,list))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22339;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22338;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22337;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22336;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22335;
}});})(x22332_22346))
;


om_tutorial.core.AnimalsList.prototype.constructor = om_tutorial.core.AnimalsList;

om_tutorial.core.AnimalsList.prototype.constructor.displayName = "om-tutorial.core/AnimalsList";

om_tutorial.core.AnimalsList.prototype.om$isComponent = true;

var x22344_22350 = om_tutorial.core.AnimalsList;
x22344_22350.om$next$IQueryParams$ = true;

x22344_22350.om$next$IQueryParams$params$arity$1 = ((function (x22344_22350){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(10)], null);
});})(x22344_22350))
;

x22344_22350.om$next$IQuery$ = true;

x22344_22350.om$next$IQuery$query$arity$1 = ((function (x22344_22350){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784),cljs.core.list(new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Symbol(null,"?end","?end",2061258539,null)], null))], null);
});})(x22344_22350))
;


var x22345_22351 = om_tutorial.core.AnimalsList.prototype;
x22345_22351.om$next$IQueryParams$ = true;

x22345_22351.om$next$IQueryParams$params$arity$1 = ((function (x22345_22351){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(10)], null);
});})(x22345_22351))
;

x22345_22351.om$next$IQuery$ = true;

x22345_22351.om$next$IQuery$query$arity$1 = ((function (x22345_22351){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784),cljs.core.list(new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Symbol(null,"?end","?end",2061258539,null)], null))], null);
});})(x22345_22351))
;


om_tutorial.core.AnimalsList.cljs$lang$type = true;

om_tutorial.core.AnimalsList.cljs$lang$ctorStr = "om-tutorial.core/AnimalsList";

om_tutorial.core.AnimalsList.cljs$lang$ctorPrWriter = (function (this__20550__auto__,writer__20551__auto__,opt__20552__auto__){
return cljs.core._write.call(null,writer__20551__auto__,"om-tutorial.core/AnimalsList");
});
om_tutorial.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tutorial.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),om_tutorial.core.read], null))], null));
om.next.add_root_BANG_.call(null,om_tutorial.core.reconciler,om_tutorial.core.AnimalsList,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map