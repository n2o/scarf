// Compiled by ClojureScript 1.8.34 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__27817 = cljs.core._EQ_;
var expr__27818 = (function (){var or__18398__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__18398__auto__)){
return or__18398__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__27817.call(null,"true",expr__27818))){
return true;
} else {
if(cljs.core.truth_(pred__27817.call(null,"false",expr__27818))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27818)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27820__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27820 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27821__i = 0, G__27821__a = new Array(arguments.length -  0);
while (G__27821__i < G__27821__a.length) {G__27821__a[G__27821__i] = arguments[G__27821__i + 0]; ++G__27821__i;}
  args = new cljs.core.IndexedSeq(G__27821__a,0);
} 
return G__27820__delegate.call(this,args);};
G__27820.cljs$lang$maxFixedArity = 0;
G__27820.cljs$lang$applyTo = (function (arglist__27822){
var args = cljs.core.seq(arglist__27822);
return G__27820__delegate(args);
});
G__27820.cljs$core$IFn$_invoke$arity$variadic = G__27820__delegate;
return G__27820;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27823){
var map__27826 = p__27823;
var map__27826__$1 = ((((!((map__27826 == null)))?((((map__27826.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27826.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27826):map__27826);
var message = cljs.core.get.call(null,map__27826__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27826__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18398__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18398__auto__)){
return or__18398__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18386__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18386__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18386__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23505__auto___27988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto___27988,ch){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto___27988,ch){
return (function (state_27957){
var state_val_27958 = (state_27957[(1)]);
if((state_val_27958 === (7))){
var inst_27953 = (state_27957[(2)]);
var state_27957__$1 = state_27957;
var statearr_27959_27989 = state_27957__$1;
(statearr_27959_27989[(2)] = inst_27953);

(statearr_27959_27989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (1))){
var state_27957__$1 = state_27957;
var statearr_27960_27990 = state_27957__$1;
(statearr_27960_27990[(2)] = null);

(statearr_27960_27990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (4))){
var inst_27910 = (state_27957[(7)]);
var inst_27910__$1 = (state_27957[(2)]);
var state_27957__$1 = (function (){var statearr_27961 = state_27957;
(statearr_27961[(7)] = inst_27910__$1);

return statearr_27961;
})();
if(cljs.core.truth_(inst_27910__$1)){
var statearr_27962_27991 = state_27957__$1;
(statearr_27962_27991[(1)] = (5));

} else {
var statearr_27963_27992 = state_27957__$1;
(statearr_27963_27992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (15))){
var inst_27917 = (state_27957[(8)]);
var inst_27932 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27917);
var inst_27933 = cljs.core.first.call(null,inst_27932);
var inst_27934 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27933);
var inst_27935 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_27934)].join('');
var inst_27936 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27935);
var state_27957__$1 = state_27957;
var statearr_27964_27993 = state_27957__$1;
(statearr_27964_27993[(2)] = inst_27936);

(statearr_27964_27993[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (13))){
var inst_27941 = (state_27957[(2)]);
var state_27957__$1 = state_27957;
var statearr_27965_27994 = state_27957__$1;
(statearr_27965_27994[(2)] = inst_27941);

(statearr_27965_27994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (6))){
var state_27957__$1 = state_27957;
var statearr_27966_27995 = state_27957__$1;
(statearr_27966_27995[(2)] = null);

(statearr_27966_27995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (17))){
var inst_27939 = (state_27957[(2)]);
var state_27957__$1 = state_27957;
var statearr_27967_27996 = state_27957__$1;
(statearr_27967_27996[(2)] = inst_27939);

(statearr_27967_27996[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (3))){
var inst_27955 = (state_27957[(2)]);
var state_27957__$1 = state_27957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27957__$1,inst_27955);
} else {
if((state_val_27958 === (12))){
var inst_27916 = (state_27957[(9)]);
var inst_27930 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27916,opts);
var state_27957__$1 = state_27957;
if(cljs.core.truth_(inst_27930)){
var statearr_27968_27997 = state_27957__$1;
(statearr_27968_27997[(1)] = (15));

} else {
var statearr_27969_27998 = state_27957__$1;
(statearr_27969_27998[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (2))){
var state_27957__$1 = state_27957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27957__$1,(4),ch);
} else {
if((state_val_27958 === (11))){
var inst_27917 = (state_27957[(8)]);
var inst_27922 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27923 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27917);
var inst_27924 = cljs.core.async.timeout.call(null,(1000));
var inst_27925 = [inst_27923,inst_27924];
var inst_27926 = (new cljs.core.PersistentVector(null,2,(5),inst_27922,inst_27925,null));
var state_27957__$1 = state_27957;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27957__$1,(14),inst_27926);
} else {
if((state_val_27958 === (9))){
var inst_27917 = (state_27957[(8)]);
var inst_27943 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27944 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27917);
var inst_27945 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27944);
var inst_27946 = [cljs.core.str("Not loading: "),cljs.core.str(inst_27945)].join('');
var inst_27947 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27946);
var state_27957__$1 = (function (){var statearr_27970 = state_27957;
(statearr_27970[(10)] = inst_27943);

return statearr_27970;
})();
var statearr_27971_27999 = state_27957__$1;
(statearr_27971_27999[(2)] = inst_27947);

(statearr_27971_27999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (5))){
var inst_27910 = (state_27957[(7)]);
var inst_27912 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27913 = (new cljs.core.PersistentArrayMap(null,2,inst_27912,null));
var inst_27914 = (new cljs.core.PersistentHashSet(null,inst_27913,null));
var inst_27915 = figwheel.client.focus_msgs.call(null,inst_27914,inst_27910);
var inst_27916 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27915);
var inst_27917 = cljs.core.first.call(null,inst_27915);
var inst_27918 = figwheel.client.autoload_QMARK_.call(null);
var state_27957__$1 = (function (){var statearr_27972 = state_27957;
(statearr_27972[(8)] = inst_27917);

(statearr_27972[(9)] = inst_27916);

return statearr_27972;
})();
if(cljs.core.truth_(inst_27918)){
var statearr_27973_28000 = state_27957__$1;
(statearr_27973_28000[(1)] = (8));

} else {
var statearr_27974_28001 = state_27957__$1;
(statearr_27974_28001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (14))){
var inst_27928 = (state_27957[(2)]);
var state_27957__$1 = state_27957;
var statearr_27975_28002 = state_27957__$1;
(statearr_27975_28002[(2)] = inst_27928);

(statearr_27975_28002[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (16))){
var state_27957__$1 = state_27957;
var statearr_27976_28003 = state_27957__$1;
(statearr_27976_28003[(2)] = null);

(statearr_27976_28003[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (10))){
var inst_27949 = (state_27957[(2)]);
var state_27957__$1 = (function (){var statearr_27977 = state_27957;
(statearr_27977[(11)] = inst_27949);

return statearr_27977;
})();
var statearr_27978_28004 = state_27957__$1;
(statearr_27978_28004[(2)] = null);

(statearr_27978_28004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (8))){
var inst_27916 = (state_27957[(9)]);
var inst_27920 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27916,opts);
var state_27957__$1 = state_27957;
if(cljs.core.truth_(inst_27920)){
var statearr_27979_28005 = state_27957__$1;
(statearr_27979_28005[(1)] = (11));

} else {
var statearr_27980_28006 = state_27957__$1;
(statearr_27980_28006[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23505__auto___27988,ch))
;
return ((function (switch__23393__auto__,c__23505__auto___27988,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23394__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23394__auto____0 = (function (){
var statearr_27984 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27984[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23394__auto__);

(statearr_27984[(1)] = (1));

return statearr_27984;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23394__auto____1 = (function (state_27957){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_27957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e27985){if((e27985 instanceof Object)){
var ex__23397__auto__ = e27985;
var statearr_27986_28007 = state_27957;
(statearr_27986_28007[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28008 = state_27957;
state_27957 = G__28008;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23394__auto__ = function(state_27957){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23394__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23394__auto____1.call(this,state_27957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23394__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23394__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto___27988,ch))
})();
var state__23507__auto__ = (function (){var statearr_27987 = f__23506__auto__.call(null);
(statearr_27987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto___27988);

return statearr_27987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto___27988,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28009_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28009_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_28016 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28016){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28014 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28015 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28014,_STAR_print_newline_STAR_28015,base_path_28016){
return (function() { 
var G__28017__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28017 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28018__i = 0, G__28018__a = new Array(arguments.length -  0);
while (G__28018__i < G__28018__a.length) {G__28018__a[G__28018__i] = arguments[G__28018__i + 0]; ++G__28018__i;}
  args = new cljs.core.IndexedSeq(G__28018__a,0);
} 
return G__28017__delegate.call(this,args);};
G__28017.cljs$lang$maxFixedArity = 0;
G__28017.cljs$lang$applyTo = (function (arglist__28019){
var args = cljs.core.seq(arglist__28019);
return G__28017__delegate(args);
});
G__28017.cljs$core$IFn$_invoke$arity$variadic = G__28017__delegate;
return G__28017;
})()
;})(_STAR_print_fn_STAR_28014,_STAR_print_newline_STAR_28015,base_path_28016))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28015;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28014;
}}catch (e28013){if((e28013 instanceof Error)){
var e = e28013;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28016], null));
} else {
var e = e28013;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28016))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28020){
var map__28027 = p__28020;
var map__28027__$1 = ((((!((map__28027 == null)))?((((map__28027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28027):map__28027);
var opts = map__28027__$1;
var build_id = cljs.core.get.call(null,map__28027__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28027,map__28027__$1,opts,build_id){
return (function (p__28029){
var vec__28030 = p__28029;
var map__28031 = cljs.core.nth.call(null,vec__28030,(0),null);
var map__28031__$1 = ((((!((map__28031 == null)))?((((map__28031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28031):map__28031);
var msg = map__28031__$1;
var msg_name = cljs.core.get.call(null,map__28031__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28030,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28030,map__28031,map__28031__$1,msg,msg_name,_,map__28027,map__28027__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28030,map__28031,map__28031__$1,msg,msg_name,_,map__28027,map__28027__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28027,map__28027__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28037){
var vec__28038 = p__28037;
var map__28039 = cljs.core.nth.call(null,vec__28038,(0),null);
var map__28039__$1 = ((((!((map__28039 == null)))?((((map__28039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28039):map__28039);
var msg = map__28039__$1;
var msg_name = cljs.core.get.call(null,map__28039__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28038,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28041){
var map__28051 = p__28041;
var map__28051__$1 = ((((!((map__28051 == null)))?((((map__28051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28051):map__28051);
var on_compile_warning = cljs.core.get.call(null,map__28051__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28051__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28051,map__28051__$1,on_compile_warning,on_compile_fail){
return (function (p__28053){
var vec__28054 = p__28053;
var map__28055 = cljs.core.nth.call(null,vec__28054,(0),null);
var map__28055__$1 = ((((!((map__28055 == null)))?((((map__28055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28055):map__28055);
var msg = map__28055__$1;
var msg_name = cljs.core.get.call(null,map__28055__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28054,(1));
var pred__28057 = cljs.core._EQ_;
var expr__28058 = msg_name;
if(cljs.core.truth_(pred__28057.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28058))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28057.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28058))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28051,map__28051__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23505__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto__,msg_hist,msg_names,msg){
return (function (state_28274){
var state_val_28275 = (state_28274[(1)]);
if((state_val_28275 === (7))){
var inst_28198 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
if(cljs.core.truth_(inst_28198)){
var statearr_28276_28322 = state_28274__$1;
(statearr_28276_28322[(1)] = (8));

} else {
var statearr_28277_28323 = state_28274__$1;
(statearr_28277_28323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (20))){
var inst_28268 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
var statearr_28278_28324 = state_28274__$1;
(statearr_28278_28324[(2)] = inst_28268);

(statearr_28278_28324[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (27))){
var inst_28264 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
var statearr_28279_28325 = state_28274__$1;
(statearr_28279_28325[(2)] = inst_28264);

(statearr_28279_28325[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (1))){
var inst_28191 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28274__$1 = state_28274;
if(cljs.core.truth_(inst_28191)){
var statearr_28280_28326 = state_28274__$1;
(statearr_28280_28326[(1)] = (2));

} else {
var statearr_28281_28327 = state_28274__$1;
(statearr_28281_28327[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (24))){
var inst_28266 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
var statearr_28282_28328 = state_28274__$1;
(statearr_28282_28328[(2)] = inst_28266);

(statearr_28282_28328[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (4))){
var inst_28272 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28274__$1,inst_28272);
} else {
if((state_val_28275 === (15))){
var inst_28270 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
var statearr_28283_28329 = state_28274__$1;
(statearr_28283_28329[(2)] = inst_28270);

(statearr_28283_28329[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (21))){
var inst_28229 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
var statearr_28284_28330 = state_28274__$1;
(statearr_28284_28330[(2)] = inst_28229);

(statearr_28284_28330[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (31))){
var inst_28253 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28274__$1 = state_28274;
if(cljs.core.truth_(inst_28253)){
var statearr_28285_28331 = state_28274__$1;
(statearr_28285_28331[(1)] = (34));

} else {
var statearr_28286_28332 = state_28274__$1;
(statearr_28286_28332[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (32))){
var inst_28262 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
var statearr_28287_28333 = state_28274__$1;
(statearr_28287_28333[(2)] = inst_28262);

(statearr_28287_28333[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (33))){
var inst_28251 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
var statearr_28288_28334 = state_28274__$1;
(statearr_28288_28334[(2)] = inst_28251);

(statearr_28288_28334[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (13))){
var inst_28212 = figwheel.client.heads_up.clear.call(null);
var state_28274__$1 = state_28274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28274__$1,(16),inst_28212);
} else {
if((state_val_28275 === (22))){
var inst_28233 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28234 = figwheel.client.heads_up.append_message.call(null,inst_28233);
var state_28274__$1 = state_28274;
var statearr_28289_28335 = state_28274__$1;
(statearr_28289_28335[(2)] = inst_28234);

(statearr_28289_28335[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (36))){
var inst_28260 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
var statearr_28290_28336 = state_28274__$1;
(statearr_28290_28336[(2)] = inst_28260);

(statearr_28290_28336[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (29))){
var inst_28244 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
var statearr_28291_28337 = state_28274__$1;
(statearr_28291_28337[(2)] = inst_28244);

(statearr_28291_28337[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (6))){
var inst_28193 = (state_28274[(7)]);
var state_28274__$1 = state_28274;
var statearr_28292_28338 = state_28274__$1;
(statearr_28292_28338[(2)] = inst_28193);

(statearr_28292_28338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (28))){
var inst_28240 = (state_28274[(2)]);
var inst_28241 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28242 = figwheel.client.heads_up.display_warning.call(null,inst_28241);
var state_28274__$1 = (function (){var statearr_28293 = state_28274;
(statearr_28293[(8)] = inst_28240);

return statearr_28293;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28274__$1,(29),inst_28242);
} else {
if((state_val_28275 === (25))){
var inst_28238 = figwheel.client.heads_up.clear.call(null);
var state_28274__$1 = state_28274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28274__$1,(28),inst_28238);
} else {
if((state_val_28275 === (34))){
var inst_28255 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28274__$1 = state_28274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28274__$1,(37),inst_28255);
} else {
if((state_val_28275 === (17))){
var inst_28220 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
var statearr_28294_28339 = state_28274__$1;
(statearr_28294_28339[(2)] = inst_28220);

(statearr_28294_28339[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (3))){
var inst_28210 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28274__$1 = state_28274;
if(cljs.core.truth_(inst_28210)){
var statearr_28295_28340 = state_28274__$1;
(statearr_28295_28340[(1)] = (13));

} else {
var statearr_28296_28341 = state_28274__$1;
(statearr_28296_28341[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (12))){
var inst_28206 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
var statearr_28297_28342 = state_28274__$1;
(statearr_28297_28342[(2)] = inst_28206);

(statearr_28297_28342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (2))){
var inst_28193 = (state_28274[(7)]);
var inst_28193__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28274__$1 = (function (){var statearr_28298 = state_28274;
(statearr_28298[(7)] = inst_28193__$1);

return statearr_28298;
})();
if(cljs.core.truth_(inst_28193__$1)){
var statearr_28299_28343 = state_28274__$1;
(statearr_28299_28343[(1)] = (5));

} else {
var statearr_28300_28344 = state_28274__$1;
(statearr_28300_28344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (23))){
var inst_28236 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28274__$1 = state_28274;
if(cljs.core.truth_(inst_28236)){
var statearr_28301_28345 = state_28274__$1;
(statearr_28301_28345[(1)] = (25));

} else {
var statearr_28302_28346 = state_28274__$1;
(statearr_28302_28346[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (35))){
var state_28274__$1 = state_28274;
var statearr_28303_28347 = state_28274__$1;
(statearr_28303_28347[(2)] = null);

(statearr_28303_28347[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (19))){
var inst_28231 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28274__$1 = state_28274;
if(cljs.core.truth_(inst_28231)){
var statearr_28304_28348 = state_28274__$1;
(statearr_28304_28348[(1)] = (22));

} else {
var statearr_28305_28349 = state_28274__$1;
(statearr_28305_28349[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (11))){
var inst_28202 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
var statearr_28306_28350 = state_28274__$1;
(statearr_28306_28350[(2)] = inst_28202);

(statearr_28306_28350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (9))){
var inst_28204 = figwheel.client.heads_up.clear.call(null);
var state_28274__$1 = state_28274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28274__$1,(12),inst_28204);
} else {
if((state_val_28275 === (5))){
var inst_28195 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28274__$1 = state_28274;
var statearr_28307_28351 = state_28274__$1;
(statearr_28307_28351[(2)] = inst_28195);

(statearr_28307_28351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (14))){
var inst_28222 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28274__$1 = state_28274;
if(cljs.core.truth_(inst_28222)){
var statearr_28308_28352 = state_28274__$1;
(statearr_28308_28352[(1)] = (18));

} else {
var statearr_28309_28353 = state_28274__$1;
(statearr_28309_28353[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (26))){
var inst_28246 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28274__$1 = state_28274;
if(cljs.core.truth_(inst_28246)){
var statearr_28310_28354 = state_28274__$1;
(statearr_28310_28354[(1)] = (30));

} else {
var statearr_28311_28355 = state_28274__$1;
(statearr_28311_28355[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (16))){
var inst_28214 = (state_28274[(2)]);
var inst_28215 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28216 = figwheel.client.format_messages.call(null,inst_28215);
var inst_28217 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28218 = figwheel.client.heads_up.display_error.call(null,inst_28216,inst_28217);
var state_28274__$1 = (function (){var statearr_28312 = state_28274;
(statearr_28312[(9)] = inst_28214);

return statearr_28312;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28274__$1,(17),inst_28218);
} else {
if((state_val_28275 === (30))){
var inst_28248 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28249 = figwheel.client.heads_up.display_warning.call(null,inst_28248);
var state_28274__$1 = state_28274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28274__$1,(33),inst_28249);
} else {
if((state_val_28275 === (10))){
var inst_28208 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
var statearr_28313_28356 = state_28274__$1;
(statearr_28313_28356[(2)] = inst_28208);

(statearr_28313_28356[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (18))){
var inst_28224 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28225 = figwheel.client.format_messages.call(null,inst_28224);
var inst_28226 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28227 = figwheel.client.heads_up.display_error.call(null,inst_28225,inst_28226);
var state_28274__$1 = state_28274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28274__$1,(21),inst_28227);
} else {
if((state_val_28275 === (37))){
var inst_28257 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
var statearr_28314_28357 = state_28274__$1;
(statearr_28314_28357[(2)] = inst_28257);

(statearr_28314_28357[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (8))){
var inst_28200 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28274__$1 = state_28274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28274__$1,(11),inst_28200);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23505__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23393__auto__,c__23505__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23394__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23394__auto____0 = (function (){
var statearr_28318 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28318[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23394__auto__);

(statearr_28318[(1)] = (1));

return statearr_28318;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23394__auto____1 = (function (state_28274){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_28274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e28319){if((e28319 instanceof Object)){
var ex__23397__auto__ = e28319;
var statearr_28320_28358 = state_28274;
(statearr_28320_28358[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28359 = state_28274;
state_28274 = G__28359;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23394__auto__ = function(state_28274){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23394__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23394__auto____1.call(this,state_28274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23394__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23394__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto__,msg_hist,msg_names,msg))
})();
var state__23507__auto__ = (function (){var statearr_28321 = f__23506__auto__.call(null);
(statearr_28321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto__);

return statearr_28321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto__,msg_hist,msg_names,msg))
);

return c__23505__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23505__auto___28422 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto___28422,ch){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto___28422,ch){
return (function (state_28405){
var state_val_28406 = (state_28405[(1)]);
if((state_val_28406 === (1))){
var state_28405__$1 = state_28405;
var statearr_28407_28423 = state_28405__$1;
(statearr_28407_28423[(2)] = null);

(statearr_28407_28423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (2))){
var state_28405__$1 = state_28405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28405__$1,(4),ch);
} else {
if((state_val_28406 === (3))){
var inst_28403 = (state_28405[(2)]);
var state_28405__$1 = state_28405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28405__$1,inst_28403);
} else {
if((state_val_28406 === (4))){
var inst_28393 = (state_28405[(7)]);
var inst_28393__$1 = (state_28405[(2)]);
var state_28405__$1 = (function (){var statearr_28408 = state_28405;
(statearr_28408[(7)] = inst_28393__$1);

return statearr_28408;
})();
if(cljs.core.truth_(inst_28393__$1)){
var statearr_28409_28424 = state_28405__$1;
(statearr_28409_28424[(1)] = (5));

} else {
var statearr_28410_28425 = state_28405__$1;
(statearr_28410_28425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (5))){
var inst_28393 = (state_28405[(7)]);
var inst_28395 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28393);
var state_28405__$1 = state_28405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28405__$1,(8),inst_28395);
} else {
if((state_val_28406 === (6))){
var state_28405__$1 = state_28405;
var statearr_28411_28426 = state_28405__$1;
(statearr_28411_28426[(2)] = null);

(statearr_28411_28426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (7))){
var inst_28401 = (state_28405[(2)]);
var state_28405__$1 = state_28405;
var statearr_28412_28427 = state_28405__$1;
(statearr_28412_28427[(2)] = inst_28401);

(statearr_28412_28427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (8))){
var inst_28397 = (state_28405[(2)]);
var state_28405__$1 = (function (){var statearr_28413 = state_28405;
(statearr_28413[(8)] = inst_28397);

return statearr_28413;
})();
var statearr_28414_28428 = state_28405__$1;
(statearr_28414_28428[(2)] = null);

(statearr_28414_28428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__23505__auto___28422,ch))
;
return ((function (switch__23393__auto__,c__23505__auto___28422,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23394__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23394__auto____0 = (function (){
var statearr_28418 = [null,null,null,null,null,null,null,null,null];
(statearr_28418[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23394__auto__);

(statearr_28418[(1)] = (1));

return statearr_28418;
});
var figwheel$client$heads_up_plugin_$_state_machine__23394__auto____1 = (function (state_28405){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_28405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e28419){if((e28419 instanceof Object)){
var ex__23397__auto__ = e28419;
var statearr_28420_28429 = state_28405;
(statearr_28420_28429[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28430 = state_28405;
state_28405 = G__28430;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23394__auto__ = function(state_28405){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23394__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23394__auto____1.call(this,state_28405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23394__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23394__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto___28422,ch))
})();
var state__23507__auto__ = (function (){var statearr_28421 = f__23506__auto__.call(null);
(statearr_28421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto___28422);

return statearr_28421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto___28422,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23505__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto__){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto__){
return (function (state_28451){
var state_val_28452 = (state_28451[(1)]);
if((state_val_28452 === (1))){
var inst_28446 = cljs.core.async.timeout.call(null,(3000));
var state_28451__$1 = state_28451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28451__$1,(2),inst_28446);
} else {
if((state_val_28452 === (2))){
var inst_28448 = (state_28451[(2)]);
var inst_28449 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28451__$1 = (function (){var statearr_28453 = state_28451;
(statearr_28453[(7)] = inst_28448);

return statearr_28453;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28451__$1,inst_28449);
} else {
return null;
}
}
});})(c__23505__auto__))
;
return ((function (switch__23393__auto__,c__23505__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23394__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23394__auto____0 = (function (){
var statearr_28457 = [null,null,null,null,null,null,null,null];
(statearr_28457[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23394__auto__);

(statearr_28457[(1)] = (1));

return statearr_28457;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23394__auto____1 = (function (state_28451){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_28451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e28458){if((e28458 instanceof Object)){
var ex__23397__auto__ = e28458;
var statearr_28459_28461 = state_28451;
(statearr_28459_28461[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28462 = state_28451;
state_28451 = G__28462;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23394__auto__ = function(state_28451){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23394__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23394__auto____1.call(this,state_28451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23394__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23394__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto__))
})();
var state__23507__auto__ = (function (){var statearr_28460 = f__23506__auto__.call(null);
(statearr_28460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto__);

return statearr_28460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto__))
);

return c__23505__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28463){
var map__28470 = p__28463;
var map__28470__$1 = ((((!((map__28470 == null)))?((((map__28470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28470):map__28470);
var ed = map__28470__$1;
var formatted_exception = cljs.core.get.call(null,map__28470__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28470__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28470__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28472_28476 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28473_28477 = null;
var count__28474_28478 = (0);
var i__28475_28479 = (0);
while(true){
if((i__28475_28479 < count__28474_28478)){
var msg_28480 = cljs.core._nth.call(null,chunk__28473_28477,i__28475_28479);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28480);

var G__28481 = seq__28472_28476;
var G__28482 = chunk__28473_28477;
var G__28483 = count__28474_28478;
var G__28484 = (i__28475_28479 + (1));
seq__28472_28476 = G__28481;
chunk__28473_28477 = G__28482;
count__28474_28478 = G__28483;
i__28475_28479 = G__28484;
continue;
} else {
var temp__4657__auto___28485 = cljs.core.seq.call(null,seq__28472_28476);
if(temp__4657__auto___28485){
var seq__28472_28486__$1 = temp__4657__auto___28485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28472_28486__$1)){
var c__19209__auto___28487 = cljs.core.chunk_first.call(null,seq__28472_28486__$1);
var G__28488 = cljs.core.chunk_rest.call(null,seq__28472_28486__$1);
var G__28489 = c__19209__auto___28487;
var G__28490 = cljs.core.count.call(null,c__19209__auto___28487);
var G__28491 = (0);
seq__28472_28476 = G__28488;
chunk__28473_28477 = G__28489;
count__28474_28478 = G__28490;
i__28475_28479 = G__28491;
continue;
} else {
var msg_28492 = cljs.core.first.call(null,seq__28472_28486__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28492);

var G__28493 = cljs.core.next.call(null,seq__28472_28486__$1);
var G__28494 = null;
var G__28495 = (0);
var G__28496 = (0);
seq__28472_28476 = G__28493;
chunk__28473_28477 = G__28494;
count__28474_28478 = G__28495;
i__28475_28479 = G__28496;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28497){
var map__28500 = p__28497;
var map__28500__$1 = ((((!((map__28500 == null)))?((((map__28500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28500):map__28500);
var w = map__28500__$1;
var message = cljs.core.get.call(null,map__28500__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18386__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18386__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18386__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28508 = cljs.core.seq.call(null,plugins);
var chunk__28509 = null;
var count__28510 = (0);
var i__28511 = (0);
while(true){
if((i__28511 < count__28510)){
var vec__28512 = cljs.core._nth.call(null,chunk__28509,i__28511);
var k = cljs.core.nth.call(null,vec__28512,(0),null);
var plugin = cljs.core.nth.call(null,vec__28512,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28514 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28508,chunk__28509,count__28510,i__28511,pl_28514,vec__28512,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28514.call(null,msg_hist);
});})(seq__28508,chunk__28509,count__28510,i__28511,pl_28514,vec__28512,k,plugin))
);
} else {
}

var G__28515 = seq__28508;
var G__28516 = chunk__28509;
var G__28517 = count__28510;
var G__28518 = (i__28511 + (1));
seq__28508 = G__28515;
chunk__28509 = G__28516;
count__28510 = G__28517;
i__28511 = G__28518;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28508);
if(temp__4657__auto__){
var seq__28508__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28508__$1)){
var c__19209__auto__ = cljs.core.chunk_first.call(null,seq__28508__$1);
var G__28519 = cljs.core.chunk_rest.call(null,seq__28508__$1);
var G__28520 = c__19209__auto__;
var G__28521 = cljs.core.count.call(null,c__19209__auto__);
var G__28522 = (0);
seq__28508 = G__28519;
chunk__28509 = G__28520;
count__28510 = G__28521;
i__28511 = G__28522;
continue;
} else {
var vec__28513 = cljs.core.first.call(null,seq__28508__$1);
var k = cljs.core.nth.call(null,vec__28513,(0),null);
var plugin = cljs.core.nth.call(null,vec__28513,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28523 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28508,chunk__28509,count__28510,i__28511,pl_28523,vec__28513,k,plugin,seq__28508__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28523.call(null,msg_hist);
});})(seq__28508,chunk__28509,count__28510,i__28511,pl_28523,vec__28513,k,plugin,seq__28508__$1,temp__4657__auto__))
);
} else {
}

var G__28524 = cljs.core.next.call(null,seq__28508__$1);
var G__28525 = null;
var G__28526 = (0);
var G__28527 = (0);
seq__28508 = G__28524;
chunk__28509 = G__28525;
count__28510 = G__28526;
i__28511 = G__28527;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args28528 = [];
var len__19467__auto___28531 = arguments.length;
var i__19468__auto___28532 = (0);
while(true){
if((i__19468__auto___28532 < len__19467__auto___28531)){
args28528.push((arguments[i__19468__auto___28532]));

var G__28533 = (i__19468__auto___28532 + (1));
i__19468__auto___28532 = G__28533;
continue;
} else {
}
break;
}

var G__28530 = args28528.length;
switch (G__28530) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28528.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19474__auto__ = [];
var len__19467__auto___28539 = arguments.length;
var i__19468__auto___28540 = (0);
while(true){
if((i__19468__auto___28540 < len__19467__auto___28539)){
args__19474__auto__.push((arguments[i__19468__auto___28540]));

var G__28541 = (i__19468__auto___28540 + (1));
i__19468__auto___28540 = G__28541;
continue;
} else {
}
break;
}

var argseq__19475__auto__ = ((((0) < args__19474__auto__.length))?(new cljs.core.IndexedSeq(args__19474__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19475__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28536){
var map__28537 = p__28536;
var map__28537__$1 = ((((!((map__28537 == null)))?((((map__28537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28537):map__28537);
var opts = map__28537__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28535){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28535));
});

//# sourceMappingURL=client.js.map