// Compiled by ClojureScript 1.8.40 {}
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
var pred__27954 = cljs.core._EQ_;
var expr__27955 = (function (){var or__18445__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e27958){if((e27958 instanceof Error)){
var e = e27958;
return false;
} else {
throw e27958;

}
}})();
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__27954.call(null,"true",expr__27955))){
return true;
} else {
if(cljs.core.truth_(pred__27954.call(null,"false",expr__27955))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27955)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e27960){if((e27960 instanceof Error)){
var e = e27960;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e27960;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19521__auto__ = [];
var len__19514__auto___27962 = arguments.length;
var i__19515__auto___27963 = (0);
while(true){
if((i__19515__auto___27963 < len__19514__auto___27962)){
args__19521__auto__.push((arguments[i__19515__auto___27963]));

var G__27964 = (i__19515__auto___27963 + (1));
i__19515__auto___27963 = G__27964;
continue;
} else {
}
break;
}

var argseq__19522__auto__ = ((((0) < args__19521__auto__.length))?(new cljs.core.IndexedSeq(args__19521__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19522__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq27961){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27961));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27965){
var map__27968 = p__27965;
var map__27968__$1 = ((((!((map__27968 == null)))?((((map__27968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27968):map__27968);
var message = cljs.core.get.call(null,map__27968__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27968__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18445__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18433__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18433__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18433__auto__;
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
var c__23568__auto___28130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto___28130,ch){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto___28130,ch){
return (function (state_28099){
var state_val_28100 = (state_28099[(1)]);
if((state_val_28100 === (7))){
var inst_28095 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
var statearr_28101_28131 = state_28099__$1;
(statearr_28101_28131[(2)] = inst_28095);

(statearr_28101_28131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (1))){
var state_28099__$1 = state_28099;
var statearr_28102_28132 = state_28099__$1;
(statearr_28102_28132[(2)] = null);

(statearr_28102_28132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (4))){
var inst_28052 = (state_28099[(7)]);
var inst_28052__$1 = (state_28099[(2)]);
var state_28099__$1 = (function (){var statearr_28103 = state_28099;
(statearr_28103[(7)] = inst_28052__$1);

return statearr_28103;
})();
if(cljs.core.truth_(inst_28052__$1)){
var statearr_28104_28133 = state_28099__$1;
(statearr_28104_28133[(1)] = (5));

} else {
var statearr_28105_28134 = state_28099__$1;
(statearr_28105_28134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (15))){
var inst_28059 = (state_28099[(8)]);
var inst_28074 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28059);
var inst_28075 = cljs.core.first.call(null,inst_28074);
var inst_28076 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28075);
var inst_28077 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28076)].join('');
var inst_28078 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28077);
var state_28099__$1 = state_28099;
var statearr_28106_28135 = state_28099__$1;
(statearr_28106_28135[(2)] = inst_28078);

(statearr_28106_28135[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (13))){
var inst_28083 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
var statearr_28107_28136 = state_28099__$1;
(statearr_28107_28136[(2)] = inst_28083);

(statearr_28107_28136[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (6))){
var state_28099__$1 = state_28099;
var statearr_28108_28137 = state_28099__$1;
(statearr_28108_28137[(2)] = null);

(statearr_28108_28137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (17))){
var inst_28081 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
var statearr_28109_28138 = state_28099__$1;
(statearr_28109_28138[(2)] = inst_28081);

(statearr_28109_28138[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (3))){
var inst_28097 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28099__$1,inst_28097);
} else {
if((state_val_28100 === (12))){
var inst_28058 = (state_28099[(9)]);
var inst_28072 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28058,opts);
var state_28099__$1 = state_28099;
if(cljs.core.truth_(inst_28072)){
var statearr_28110_28139 = state_28099__$1;
(statearr_28110_28139[(1)] = (15));

} else {
var statearr_28111_28140 = state_28099__$1;
(statearr_28111_28140[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (2))){
var state_28099__$1 = state_28099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28099__$1,(4),ch);
} else {
if((state_val_28100 === (11))){
var inst_28059 = (state_28099[(8)]);
var inst_28064 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28065 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28059);
var inst_28066 = cljs.core.async.timeout.call(null,(1000));
var inst_28067 = [inst_28065,inst_28066];
var inst_28068 = (new cljs.core.PersistentVector(null,2,(5),inst_28064,inst_28067,null));
var state_28099__$1 = state_28099;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28099__$1,(14),inst_28068);
} else {
if((state_val_28100 === (9))){
var inst_28059 = (state_28099[(8)]);
var inst_28085 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28086 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28059);
var inst_28087 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28086);
var inst_28088 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28087)].join('');
var inst_28089 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28088);
var state_28099__$1 = (function (){var statearr_28112 = state_28099;
(statearr_28112[(10)] = inst_28085);

return statearr_28112;
})();
var statearr_28113_28141 = state_28099__$1;
(statearr_28113_28141[(2)] = inst_28089);

(statearr_28113_28141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (5))){
var inst_28052 = (state_28099[(7)]);
var inst_28054 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28055 = (new cljs.core.PersistentArrayMap(null,2,inst_28054,null));
var inst_28056 = (new cljs.core.PersistentHashSet(null,inst_28055,null));
var inst_28057 = figwheel.client.focus_msgs.call(null,inst_28056,inst_28052);
var inst_28058 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28057);
var inst_28059 = cljs.core.first.call(null,inst_28057);
var inst_28060 = figwheel.client.autoload_QMARK_.call(null);
var state_28099__$1 = (function (){var statearr_28114 = state_28099;
(statearr_28114[(8)] = inst_28059);

(statearr_28114[(9)] = inst_28058);

return statearr_28114;
})();
if(cljs.core.truth_(inst_28060)){
var statearr_28115_28142 = state_28099__$1;
(statearr_28115_28142[(1)] = (8));

} else {
var statearr_28116_28143 = state_28099__$1;
(statearr_28116_28143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (14))){
var inst_28070 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
var statearr_28117_28144 = state_28099__$1;
(statearr_28117_28144[(2)] = inst_28070);

(statearr_28117_28144[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (16))){
var state_28099__$1 = state_28099;
var statearr_28118_28145 = state_28099__$1;
(statearr_28118_28145[(2)] = null);

(statearr_28118_28145[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (10))){
var inst_28091 = (state_28099[(2)]);
var state_28099__$1 = (function (){var statearr_28119 = state_28099;
(statearr_28119[(11)] = inst_28091);

return statearr_28119;
})();
var statearr_28120_28146 = state_28099__$1;
(statearr_28120_28146[(2)] = null);

(statearr_28120_28146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (8))){
var inst_28058 = (state_28099[(9)]);
var inst_28062 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28058,opts);
var state_28099__$1 = state_28099;
if(cljs.core.truth_(inst_28062)){
var statearr_28121_28147 = state_28099__$1;
(statearr_28121_28147[(1)] = (11));

} else {
var statearr_28122_28148 = state_28099__$1;
(statearr_28122_28148[(1)] = (12));

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
});})(c__23568__auto___28130,ch))
;
return ((function (switch__23456__auto__,c__23568__auto___28130,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23457__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23457__auto____0 = (function (){
var statearr_28126 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28126[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23457__auto__);

(statearr_28126[(1)] = (1));

return statearr_28126;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23457__auto____1 = (function (state_28099){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_28099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e28127){if((e28127 instanceof Object)){
var ex__23460__auto__ = e28127;
var statearr_28128_28149 = state_28099;
(statearr_28128_28149[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28150 = state_28099;
state_28099 = G__28150;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23457__auto__ = function(state_28099){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23457__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23457__auto____1.call(this,state_28099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23457__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23457__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto___28130,ch))
})();
var state__23570__auto__ = (function (){var statearr_28129 = f__23569__auto__.call(null);
(statearr_28129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto___28130);

return statearr_28129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto___28130,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28151_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28151_SHARP_));
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
var base_path_28158 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28158){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28156 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28157 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28157;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28156;
}}catch (e28155){if((e28155 instanceof Error)){
var e = e28155;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28158], null));
} else {
var e = e28155;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28158))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28159){
var map__28166 = p__28159;
var map__28166__$1 = ((((!((map__28166 == null)))?((((map__28166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28166):map__28166);
var opts = map__28166__$1;
var build_id = cljs.core.get.call(null,map__28166__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28166,map__28166__$1,opts,build_id){
return (function (p__28168){
var vec__28169 = p__28168;
var map__28170 = cljs.core.nth.call(null,vec__28169,(0),null);
var map__28170__$1 = ((((!((map__28170 == null)))?((((map__28170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28170):map__28170);
var msg = map__28170__$1;
var msg_name = cljs.core.get.call(null,map__28170__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28169,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28169,map__28170,map__28170__$1,msg,msg_name,_,map__28166,map__28166__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28169,map__28170,map__28170__$1,msg,msg_name,_,map__28166,map__28166__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28166,map__28166__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28176){
var vec__28177 = p__28176;
var map__28178 = cljs.core.nth.call(null,vec__28177,(0),null);
var map__28178__$1 = ((((!((map__28178 == null)))?((((map__28178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28178):map__28178);
var msg = map__28178__$1;
var msg_name = cljs.core.get.call(null,map__28178__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28177,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28180){
var map__28190 = p__28180;
var map__28190__$1 = ((((!((map__28190 == null)))?((((map__28190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28190):map__28190);
var on_compile_warning = cljs.core.get.call(null,map__28190__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28190__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28190,map__28190__$1,on_compile_warning,on_compile_fail){
return (function (p__28192){
var vec__28193 = p__28192;
var map__28194 = cljs.core.nth.call(null,vec__28193,(0),null);
var map__28194__$1 = ((((!((map__28194 == null)))?((((map__28194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28194):map__28194);
var msg = map__28194__$1;
var msg_name = cljs.core.get.call(null,map__28194__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28193,(1));
var pred__28196 = cljs.core._EQ_;
var expr__28197 = msg_name;
if(cljs.core.truth_(pred__28196.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28197))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28196.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28197))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28190,map__28190__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto__,msg_hist,msg_names,msg){
return (function (state_28413){
var state_val_28414 = (state_28413[(1)]);
if((state_val_28414 === (7))){
var inst_28337 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
if(cljs.core.truth_(inst_28337)){
var statearr_28415_28461 = state_28413__$1;
(statearr_28415_28461[(1)] = (8));

} else {
var statearr_28416_28462 = state_28413__$1;
(statearr_28416_28462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (20))){
var inst_28407 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
var statearr_28417_28463 = state_28413__$1;
(statearr_28417_28463[(2)] = inst_28407);

(statearr_28417_28463[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (27))){
var inst_28403 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
var statearr_28418_28464 = state_28413__$1;
(statearr_28418_28464[(2)] = inst_28403);

(statearr_28418_28464[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (1))){
var inst_28330 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28413__$1 = state_28413;
if(cljs.core.truth_(inst_28330)){
var statearr_28419_28465 = state_28413__$1;
(statearr_28419_28465[(1)] = (2));

} else {
var statearr_28420_28466 = state_28413__$1;
(statearr_28420_28466[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (24))){
var inst_28405 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
var statearr_28421_28467 = state_28413__$1;
(statearr_28421_28467[(2)] = inst_28405);

(statearr_28421_28467[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (4))){
var inst_28411 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28413__$1,inst_28411);
} else {
if((state_val_28414 === (15))){
var inst_28409 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
var statearr_28422_28468 = state_28413__$1;
(statearr_28422_28468[(2)] = inst_28409);

(statearr_28422_28468[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (21))){
var inst_28368 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
var statearr_28423_28469 = state_28413__$1;
(statearr_28423_28469[(2)] = inst_28368);

(statearr_28423_28469[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (31))){
var inst_28392 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28413__$1 = state_28413;
if(cljs.core.truth_(inst_28392)){
var statearr_28424_28470 = state_28413__$1;
(statearr_28424_28470[(1)] = (34));

} else {
var statearr_28425_28471 = state_28413__$1;
(statearr_28425_28471[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (32))){
var inst_28401 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
var statearr_28426_28472 = state_28413__$1;
(statearr_28426_28472[(2)] = inst_28401);

(statearr_28426_28472[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (33))){
var inst_28390 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
var statearr_28427_28473 = state_28413__$1;
(statearr_28427_28473[(2)] = inst_28390);

(statearr_28427_28473[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (13))){
var inst_28351 = figwheel.client.heads_up.clear.call(null);
var state_28413__$1 = state_28413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28413__$1,(16),inst_28351);
} else {
if((state_val_28414 === (22))){
var inst_28372 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28373 = figwheel.client.heads_up.append_message.call(null,inst_28372);
var state_28413__$1 = state_28413;
var statearr_28428_28474 = state_28413__$1;
(statearr_28428_28474[(2)] = inst_28373);

(statearr_28428_28474[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (36))){
var inst_28399 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
var statearr_28429_28475 = state_28413__$1;
(statearr_28429_28475[(2)] = inst_28399);

(statearr_28429_28475[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (29))){
var inst_28383 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
var statearr_28430_28476 = state_28413__$1;
(statearr_28430_28476[(2)] = inst_28383);

(statearr_28430_28476[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (6))){
var inst_28332 = (state_28413[(7)]);
var state_28413__$1 = state_28413;
var statearr_28431_28477 = state_28413__$1;
(statearr_28431_28477[(2)] = inst_28332);

(statearr_28431_28477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (28))){
var inst_28379 = (state_28413[(2)]);
var inst_28380 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28381 = figwheel.client.heads_up.display_warning.call(null,inst_28380);
var state_28413__$1 = (function (){var statearr_28432 = state_28413;
(statearr_28432[(8)] = inst_28379);

return statearr_28432;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28413__$1,(29),inst_28381);
} else {
if((state_val_28414 === (25))){
var inst_28377 = figwheel.client.heads_up.clear.call(null);
var state_28413__$1 = state_28413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28413__$1,(28),inst_28377);
} else {
if((state_val_28414 === (34))){
var inst_28394 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28413__$1 = state_28413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28413__$1,(37),inst_28394);
} else {
if((state_val_28414 === (17))){
var inst_28359 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
var statearr_28433_28478 = state_28413__$1;
(statearr_28433_28478[(2)] = inst_28359);

(statearr_28433_28478[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (3))){
var inst_28349 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28413__$1 = state_28413;
if(cljs.core.truth_(inst_28349)){
var statearr_28434_28479 = state_28413__$1;
(statearr_28434_28479[(1)] = (13));

} else {
var statearr_28435_28480 = state_28413__$1;
(statearr_28435_28480[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (12))){
var inst_28345 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
var statearr_28436_28481 = state_28413__$1;
(statearr_28436_28481[(2)] = inst_28345);

(statearr_28436_28481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (2))){
var inst_28332 = (state_28413[(7)]);
var inst_28332__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28413__$1 = (function (){var statearr_28437 = state_28413;
(statearr_28437[(7)] = inst_28332__$1);

return statearr_28437;
})();
if(cljs.core.truth_(inst_28332__$1)){
var statearr_28438_28482 = state_28413__$1;
(statearr_28438_28482[(1)] = (5));

} else {
var statearr_28439_28483 = state_28413__$1;
(statearr_28439_28483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (23))){
var inst_28375 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28413__$1 = state_28413;
if(cljs.core.truth_(inst_28375)){
var statearr_28440_28484 = state_28413__$1;
(statearr_28440_28484[(1)] = (25));

} else {
var statearr_28441_28485 = state_28413__$1;
(statearr_28441_28485[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (35))){
var state_28413__$1 = state_28413;
var statearr_28442_28486 = state_28413__$1;
(statearr_28442_28486[(2)] = null);

(statearr_28442_28486[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (19))){
var inst_28370 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28413__$1 = state_28413;
if(cljs.core.truth_(inst_28370)){
var statearr_28443_28487 = state_28413__$1;
(statearr_28443_28487[(1)] = (22));

} else {
var statearr_28444_28488 = state_28413__$1;
(statearr_28444_28488[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (11))){
var inst_28341 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
var statearr_28445_28489 = state_28413__$1;
(statearr_28445_28489[(2)] = inst_28341);

(statearr_28445_28489[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (9))){
var inst_28343 = figwheel.client.heads_up.clear.call(null);
var state_28413__$1 = state_28413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28413__$1,(12),inst_28343);
} else {
if((state_val_28414 === (5))){
var inst_28334 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28413__$1 = state_28413;
var statearr_28446_28490 = state_28413__$1;
(statearr_28446_28490[(2)] = inst_28334);

(statearr_28446_28490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (14))){
var inst_28361 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28413__$1 = state_28413;
if(cljs.core.truth_(inst_28361)){
var statearr_28447_28491 = state_28413__$1;
(statearr_28447_28491[(1)] = (18));

} else {
var statearr_28448_28492 = state_28413__$1;
(statearr_28448_28492[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (26))){
var inst_28385 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28413__$1 = state_28413;
if(cljs.core.truth_(inst_28385)){
var statearr_28449_28493 = state_28413__$1;
(statearr_28449_28493[(1)] = (30));

} else {
var statearr_28450_28494 = state_28413__$1;
(statearr_28450_28494[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (16))){
var inst_28353 = (state_28413[(2)]);
var inst_28354 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28355 = figwheel.client.format_messages.call(null,inst_28354);
var inst_28356 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28357 = figwheel.client.heads_up.display_error.call(null,inst_28355,inst_28356);
var state_28413__$1 = (function (){var statearr_28451 = state_28413;
(statearr_28451[(9)] = inst_28353);

return statearr_28451;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28413__$1,(17),inst_28357);
} else {
if((state_val_28414 === (30))){
var inst_28387 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28388 = figwheel.client.heads_up.display_warning.call(null,inst_28387);
var state_28413__$1 = state_28413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28413__$1,(33),inst_28388);
} else {
if((state_val_28414 === (10))){
var inst_28347 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
var statearr_28452_28495 = state_28413__$1;
(statearr_28452_28495[(2)] = inst_28347);

(statearr_28452_28495[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (18))){
var inst_28363 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28364 = figwheel.client.format_messages.call(null,inst_28363);
var inst_28365 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28366 = figwheel.client.heads_up.display_error.call(null,inst_28364,inst_28365);
var state_28413__$1 = state_28413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28413__$1,(21),inst_28366);
} else {
if((state_val_28414 === (37))){
var inst_28396 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
var statearr_28453_28496 = state_28413__$1;
(statearr_28453_28496[(2)] = inst_28396);

(statearr_28453_28496[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (8))){
var inst_28339 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28413__$1 = state_28413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28413__$1,(11),inst_28339);
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
});})(c__23568__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23456__auto__,c__23568__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23457__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23457__auto____0 = (function (){
var statearr_28457 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28457[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23457__auto__);

(statearr_28457[(1)] = (1));

return statearr_28457;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23457__auto____1 = (function (state_28413){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_28413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e28458){if((e28458 instanceof Object)){
var ex__23460__auto__ = e28458;
var statearr_28459_28497 = state_28413;
(statearr_28459_28497[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28498 = state_28413;
state_28413 = G__28498;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23457__auto__ = function(state_28413){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23457__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23457__auto____1.call(this,state_28413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23457__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23457__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto__,msg_hist,msg_names,msg))
})();
var state__23570__auto__ = (function (){var statearr_28460 = f__23569__auto__.call(null);
(statearr_28460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto__);

return statearr_28460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto__,msg_hist,msg_names,msg))
);

return c__23568__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23568__auto___28561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto___28561,ch){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto___28561,ch){
return (function (state_28544){
var state_val_28545 = (state_28544[(1)]);
if((state_val_28545 === (1))){
var state_28544__$1 = state_28544;
var statearr_28546_28562 = state_28544__$1;
(statearr_28546_28562[(2)] = null);

(statearr_28546_28562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (2))){
var state_28544__$1 = state_28544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28544__$1,(4),ch);
} else {
if((state_val_28545 === (3))){
var inst_28542 = (state_28544[(2)]);
var state_28544__$1 = state_28544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28544__$1,inst_28542);
} else {
if((state_val_28545 === (4))){
var inst_28532 = (state_28544[(7)]);
var inst_28532__$1 = (state_28544[(2)]);
var state_28544__$1 = (function (){var statearr_28547 = state_28544;
(statearr_28547[(7)] = inst_28532__$1);

return statearr_28547;
})();
if(cljs.core.truth_(inst_28532__$1)){
var statearr_28548_28563 = state_28544__$1;
(statearr_28548_28563[(1)] = (5));

} else {
var statearr_28549_28564 = state_28544__$1;
(statearr_28549_28564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (5))){
var inst_28532 = (state_28544[(7)]);
var inst_28534 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28532);
var state_28544__$1 = state_28544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28544__$1,(8),inst_28534);
} else {
if((state_val_28545 === (6))){
var state_28544__$1 = state_28544;
var statearr_28550_28565 = state_28544__$1;
(statearr_28550_28565[(2)] = null);

(statearr_28550_28565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (7))){
var inst_28540 = (state_28544[(2)]);
var state_28544__$1 = state_28544;
var statearr_28551_28566 = state_28544__$1;
(statearr_28551_28566[(2)] = inst_28540);

(statearr_28551_28566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (8))){
var inst_28536 = (state_28544[(2)]);
var state_28544__$1 = (function (){var statearr_28552 = state_28544;
(statearr_28552[(8)] = inst_28536);

return statearr_28552;
})();
var statearr_28553_28567 = state_28544__$1;
(statearr_28553_28567[(2)] = null);

(statearr_28553_28567[(1)] = (2));


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
});})(c__23568__auto___28561,ch))
;
return ((function (switch__23456__auto__,c__23568__auto___28561,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23457__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23457__auto____0 = (function (){
var statearr_28557 = [null,null,null,null,null,null,null,null,null];
(statearr_28557[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23457__auto__);

(statearr_28557[(1)] = (1));

return statearr_28557;
});
var figwheel$client$heads_up_plugin_$_state_machine__23457__auto____1 = (function (state_28544){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_28544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e28558){if((e28558 instanceof Object)){
var ex__23460__auto__ = e28558;
var statearr_28559_28568 = state_28544;
(statearr_28559_28568[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28569 = state_28544;
state_28544 = G__28569;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23457__auto__ = function(state_28544){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23457__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23457__auto____1.call(this,state_28544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23457__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23457__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto___28561,ch))
})();
var state__23570__auto__ = (function (){var statearr_28560 = f__23569__auto__.call(null);
(statearr_28560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto___28561);

return statearr_28560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto___28561,ch))
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
var c__23568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto__){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto__){
return (function (state_28590){
var state_val_28591 = (state_28590[(1)]);
if((state_val_28591 === (1))){
var inst_28585 = cljs.core.async.timeout.call(null,(3000));
var state_28590__$1 = state_28590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28590__$1,(2),inst_28585);
} else {
if((state_val_28591 === (2))){
var inst_28587 = (state_28590[(2)]);
var inst_28588 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28590__$1 = (function (){var statearr_28592 = state_28590;
(statearr_28592[(7)] = inst_28587);

return statearr_28592;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28590__$1,inst_28588);
} else {
return null;
}
}
});})(c__23568__auto__))
;
return ((function (switch__23456__auto__,c__23568__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23457__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23457__auto____0 = (function (){
var statearr_28596 = [null,null,null,null,null,null,null,null];
(statearr_28596[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23457__auto__);

(statearr_28596[(1)] = (1));

return statearr_28596;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23457__auto____1 = (function (state_28590){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_28590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e28597){if((e28597 instanceof Object)){
var ex__23460__auto__ = e28597;
var statearr_28598_28600 = state_28590;
(statearr_28598_28600[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28601 = state_28590;
state_28590 = G__28601;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23457__auto__ = function(state_28590){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23457__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23457__auto____1.call(this,state_28590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23457__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23457__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto__))
})();
var state__23570__auto__ = (function (){var statearr_28599 = f__23569__auto__.call(null);
(statearr_28599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto__);

return statearr_28599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto__))
);

return c__23568__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28602){
var map__28609 = p__28602;
var map__28609__$1 = ((((!((map__28609 == null)))?((((map__28609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28609):map__28609);
var ed = map__28609__$1;
var formatted_exception = cljs.core.get.call(null,map__28609__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28609__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28609__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28611_28615 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28612_28616 = null;
var count__28613_28617 = (0);
var i__28614_28618 = (0);
while(true){
if((i__28614_28618 < count__28613_28617)){
var msg_28619 = cljs.core._nth.call(null,chunk__28612_28616,i__28614_28618);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28619);

var G__28620 = seq__28611_28615;
var G__28621 = chunk__28612_28616;
var G__28622 = count__28613_28617;
var G__28623 = (i__28614_28618 + (1));
seq__28611_28615 = G__28620;
chunk__28612_28616 = G__28621;
count__28613_28617 = G__28622;
i__28614_28618 = G__28623;
continue;
} else {
var temp__4657__auto___28624 = cljs.core.seq.call(null,seq__28611_28615);
if(temp__4657__auto___28624){
var seq__28611_28625__$1 = temp__4657__auto___28624;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28611_28625__$1)){
var c__19256__auto___28626 = cljs.core.chunk_first.call(null,seq__28611_28625__$1);
var G__28627 = cljs.core.chunk_rest.call(null,seq__28611_28625__$1);
var G__28628 = c__19256__auto___28626;
var G__28629 = cljs.core.count.call(null,c__19256__auto___28626);
var G__28630 = (0);
seq__28611_28615 = G__28627;
chunk__28612_28616 = G__28628;
count__28613_28617 = G__28629;
i__28614_28618 = G__28630;
continue;
} else {
var msg_28631 = cljs.core.first.call(null,seq__28611_28625__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28631);

var G__28632 = cljs.core.next.call(null,seq__28611_28625__$1);
var G__28633 = null;
var G__28634 = (0);
var G__28635 = (0);
seq__28611_28615 = G__28632;
chunk__28612_28616 = G__28633;
count__28613_28617 = G__28634;
i__28614_28618 = G__28635;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28636){
var map__28639 = p__28636;
var map__28639__$1 = ((((!((map__28639 == null)))?((((map__28639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28639):map__28639);
var w = map__28639__$1;
var message = cljs.core.get.call(null,map__28639__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__18433__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18433__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18433__auto__;
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
var seq__28647 = cljs.core.seq.call(null,plugins);
var chunk__28648 = null;
var count__28649 = (0);
var i__28650 = (0);
while(true){
if((i__28650 < count__28649)){
var vec__28651 = cljs.core._nth.call(null,chunk__28648,i__28650);
var k = cljs.core.nth.call(null,vec__28651,(0),null);
var plugin = cljs.core.nth.call(null,vec__28651,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28653 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28647,chunk__28648,count__28649,i__28650,pl_28653,vec__28651,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28653.call(null,msg_hist);
});})(seq__28647,chunk__28648,count__28649,i__28650,pl_28653,vec__28651,k,plugin))
);
} else {
}

var G__28654 = seq__28647;
var G__28655 = chunk__28648;
var G__28656 = count__28649;
var G__28657 = (i__28650 + (1));
seq__28647 = G__28654;
chunk__28648 = G__28655;
count__28649 = G__28656;
i__28650 = G__28657;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28647);
if(temp__4657__auto__){
var seq__28647__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28647__$1)){
var c__19256__auto__ = cljs.core.chunk_first.call(null,seq__28647__$1);
var G__28658 = cljs.core.chunk_rest.call(null,seq__28647__$1);
var G__28659 = c__19256__auto__;
var G__28660 = cljs.core.count.call(null,c__19256__auto__);
var G__28661 = (0);
seq__28647 = G__28658;
chunk__28648 = G__28659;
count__28649 = G__28660;
i__28650 = G__28661;
continue;
} else {
var vec__28652 = cljs.core.first.call(null,seq__28647__$1);
var k = cljs.core.nth.call(null,vec__28652,(0),null);
var plugin = cljs.core.nth.call(null,vec__28652,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28662 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28647,chunk__28648,count__28649,i__28650,pl_28662,vec__28652,k,plugin,seq__28647__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28662.call(null,msg_hist);
});})(seq__28647,chunk__28648,count__28649,i__28650,pl_28662,vec__28652,k,plugin,seq__28647__$1,temp__4657__auto__))
);
} else {
}

var G__28663 = cljs.core.next.call(null,seq__28647__$1);
var G__28664 = null;
var G__28665 = (0);
var G__28666 = (0);
seq__28647 = G__28663;
chunk__28648 = G__28664;
count__28649 = G__28665;
i__28650 = G__28666;
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
var args28667 = [];
var len__19514__auto___28670 = arguments.length;
var i__19515__auto___28671 = (0);
while(true){
if((i__19515__auto___28671 < len__19514__auto___28670)){
args28667.push((arguments[i__19515__auto___28671]));

var G__28672 = (i__19515__auto___28671 + (1));
i__19515__auto___28671 = G__28672;
continue;
} else {
}
break;
}

var G__28669 = args28667.length;
switch (G__28669) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28667.length)].join('')));

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
var args__19521__auto__ = [];
var len__19514__auto___28678 = arguments.length;
var i__19515__auto___28679 = (0);
while(true){
if((i__19515__auto___28679 < len__19514__auto___28678)){
args__19521__auto__.push((arguments[i__19515__auto___28679]));

var G__28680 = (i__19515__auto___28679 + (1));
i__19515__auto___28679 = G__28680;
continue;
} else {
}
break;
}

var argseq__19522__auto__ = ((((0) < args__19521__auto__.length))?(new cljs.core.IndexedSeq(args__19521__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19522__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28675){
var map__28676 = p__28675;
var map__28676__$1 = ((((!((map__28676 == null)))?((((map__28676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28676):map__28676);
var opts = map__28676__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28674){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28674));
});

//# sourceMappingURL=client.js.map