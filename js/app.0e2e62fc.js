(function(){"use strict";var e={4799:function(e,t,i){var s=i(9963),n=i(6252);const o=(0,n._)("meta",{content:"width=device-width, initial-scale=1, shrink-to-fit=no",name:"viewport"},null,-1);function l(e,t){const i=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[o,(0,n.Wm)(i)],64)}var a=i(3744);const r={},c=(0,a.Z)(r,[["render",l]]);var d=c,u=i(2119),m=i(3577),p=i(5174);const h=e=>((0,n.dD)("data-v-4eb1a88d"),e=e(),(0,n.Cn)(),e),f={class:"container"},g={class:"column-container",style:{width:"30%"}},b=h((()=>(0,n._)("h1",null,"JPlag Report",-1))),_=h((()=>(0,n._)("p",{class:"section-title"},"Main Info:",-1))),v={id:"basicInfo"},w=["title"],S=h((()=>(0,n._)("div",{id:"logo-section"},[(0,n._)("img",{id:"logo",alt:"JPlag",src:p})],-1))),y={class:"column-container",style:{width:"35%"}},C={id:"metrics"},I=h((()=>(0,n._)("p",{class:"section-title"},"Metric:",-1))),k={id:"metrics-list"},F=h((()=>(0,n._)("p",{class:"section-title"},"Distribution:",-1))),D={class:"column-container",style:{width:"35%"}},O=h((()=>(0,n._)("p",{class:"section-title"},"Top Comparisons:",-1))),x={id:"comparisonsList"};function M(e,t,i,s,o,l){const a=(0,n.up)("TextInformation"),r=(0,n.up)("IDsList"),c=(0,n.up)("MetricButton"),d=(0,n.up)("DistributionDiagram"),u=(0,n.up)("ComparisonsTable");return(0,n.wg)(),(0,n.iD)("div",f,[(0,n._)("div",g,[b,_,(0,n._)("div",v,[(0,n.Wm)(a,{"has-additional-info":e.hasMoreSubmissionPaths,value:e.submissionPathValue,"additional-info-title":"",label:"Directory path"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.overview.submissionFolderPath,(e=>((0,n.wg)(),(0,n.iD)("p",{key:e,title:e},(0,m.zw)(e),9,w)))),128))])),_:1},8,["has-additional-info","value"]),(0,n.Wm)(a,{"has-additional-info":!0,value:e.overview.language,"additional-info-title":"File extensions:",label:"Language"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.overview.fileExtensions,(e=>((0,n.wg)(),(0,n.iD)("p",{key:e},(0,m.zw)(e),1)))),128))])),_:1},8,["value"]),(0,n.Wm)(a,{value:e.overview.matchSensitivity,label:"Match Sensitivity"},null,8,["value"]),(0,n.Wm)(a,{"has-additional-info":!0,value:e.overview.submissionIds.length,"additional-info-title":"Submission IDs:",label:"Submissions"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{ids:e.overview.submissionIds,onIdSent:e.handleId},null,8,["ids","onIdSent"])])),_:1},8,["value"]),(0,n.Wm)(a,{value:e.overview.dateOfExecution,label:"Date of execution"},null,8,["value"]),(0,n.Wm)(a,{value:e.overview.durationOfExecution,label:"Duration (in ms)"},null,8,["value"])]),S]),(0,n._)("div",y,[(0,n._)("div",C,[I,(0,n._)("div",k,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.overview.metrics,((t,i)=>((0,n.wg)(),(0,n.j4)(c,{id:t.metricName,key:t.metricName,"is-selected":e.selectedMetric[i],"metric-name":t.metricName,"metric-threshold":t.metricThreshold,onClick:t=>e.selectMetric(i)},null,8,["id","is-selected","metric-name","metric-threshold","onClick"])))),128))])]),F,(0,n.Wm)(d,{distribution:e.distributions[e.selectedMetricIndex],class:"full-width"},null,8,["distribution"])]),(0,n._)("div",D,[O,(0,n._)("div",x,[(0,n.Wm)(u,{clusters:e.overview.clusters,"top-comparisons":e.topComps[e.selectedMetricIndex]},null,8,["clusters","top-comparisons"])])])])}var Z=i(2262),T=i(8637);const z=(0,T.MT)({state(){return{anonymous:new Set,files:Object,local:Boolean,zip:Boolean,single:Boolean,fileString:{type:String,required:!1}}},mutations:{addAnonymous(e,t){for(let i=0;i<t.length;i++)e.anonymous.add(t[i])},removeAnonymous(e,t){for(let i=0;i<t.length;i++)e.anonymous.delete(t[i])},resetAnonymous(e){e.anonymous=new Set},saveFile(e,t){e.files[t.fileName]=t.data},setLoadingType(e,t){e.local=t.local,e.zip=t.zip,e.single=t.single,e.fileString=t.fileString}}});var H=z,P=i(6108),L=i(6838);const N=e=>((0,n.dD)("data-v-55047b2f"),e=e(),(0,n.Cn)(),e),E={class:"wrapper"},A={class:"text-container"},j={class:"label-text"},W=["title"],B={key:0,alt:"hide info",src:P},V={key:1,alt:"additional info",src:L},q={class:"additional-info-title"},Y=N((()=>(0,n._)("hr",null,null,-1)));function U(e,t,i,s,o,l){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",E,[(0,n._)("div",A,[(0,n._)("p",j,(0,m.zw)(e.label),1),(0,n._)("p",{class:(0,m.C_)([{anonymous:e.anonymous},"value-text"]),title:e.anonymous?"":e.value},(0,m.zw)(e.anonymous?"Hidden":e.value),11,W)]),(0,n._)("button",{class:(0,m.C_)([{hidden:!e.hasAdditionalInfo},"collapse-button"]),onClick:t[0]||(t[0]=(...t)=>e.toggleIsCollapsed&&e.toggleIsCollapsed(...t))},[e.isCollapsed?((0,n.wg)(),(0,n.iD)("img",B)):((0,n.wg)(),(0,n.iD)("img",V))],2)]),(0,n._)("div",{class:(0,m.C_)([{hidden:!e.isCollapsed},"additional-info"])},[(0,n._)("p",q,(0,m.zw)(e.additionalInfoTitle),1),(0,n.WI)(e.$slots,"default",{},void 0,!0)],2),Y],64)}var J=(0,n.aZ)({name:"TextInformation",props:{label:{type:String,required:!0},value:{required:!0},hasAdditionalInfo:{type:Boolean,default:!1},additionalInfoTitle:{type:String,default:""},anonymous:{type:Boolean,default:!1}},setup(){const e=(0,Z.iH)(!1),t=()=>e.value=!e.value;return{isCollapsed:e,toggleIsCollapsed:t}}});const R=(0,a.Z)(J,[["render",U],["__scopeId","data-v-55047b2f"]]);var K=R;const $={class:"wrapper"};function G(e,t,i,s,o,l){const a=(0,n.up)("BarChart");return(0,n.wg)(),(0,n.iD)("div",$,[(0,n.Wm)(a,{chartData:e.chartData,options:e.options,class:"chart"},null,8,["chartData","options"])])}var X=i(2820),Q=i(3328),ee=i(8278);Q.kL.register(...Q.zX),Q.kL.register(ee.Z);var te=(0,n.aZ)({name:"DistributionDiagram",components:{BarChart:X.vz},props:{distribution:{type:Array,required:!0}},setup(e){let t=(0,Z.iH)(Math.max(...e.distribution)),i=(0,Z.iH)({labels:["0-10%","11-20%","21-30%","31-40%","41-50%","51-60%","61-70%","71-80%","81-90%","91-100%"],datasets:[{label:"Count",data:e.distribution,backgroundColor:"rgba(149, 168, 241, 0.5)",borderWidth:2,borderColor:"rgba(149, 168, 241, 1)",tickColor:"#000000"}]});const s=(0,Z.iH)({responsive:!0,maintainAspectRatio:!1,indexAxis:"y",scales:{x:{suggestedMax:t.value+5,ticks:{color:"#000000"}},y:{ticks:{color:"#000000"}}},plugins:{datalabels:{color:"#000000",font:{weight:"bold"},anchor:"end",align:"end",clamp:!0},legend:{display:!1}}});return(0,n.YP)((()=>e.distribution),(e=>{i.value={labels:["0-10%","11-20%","21-30%","31-40%","41-50%","51-60%","61-70%","71-80%","81-90%","91-100%"],datasets:[{label:"Count",data:e,backgroundColor:"rgba(149, 168, 241, 0.5)",borderWidth:2,borderColor:"rgba(149, 168, 241, 1)"}]},t.value=Math.max(...e),s.value={responsive:!0,maintainAspectRatio:!1,indexAxis:"y",scales:{x:{suggestedMax:t.value+5,ticks:{color:"#000000"}},y:{ticks:{color:"#000000"}}},plugins:{datalabels:{color:"#000000",font:{weight:"bold"},anchor:"end",align:"end",clamp:!0},legend:{display:!1}}}})),{chartData:i,options:s}}});const ie=(0,a.Z)(te,[["render",G],["__scopeId","data-v-1813ac1d"]]);var se=ie,ne=i(164);const oe=e=>((0,n.dD)("data-v-ea5e7fcc"),e=e(),(0,n.Cn)(),e),le={class:"metric"},ae={class:"metric-name"},re=oe((()=>(0,n._)("img",{alt:"?",src:ne},null,-1))),ce={class:"threshold"},de=oe((()=>(0,n._)("p",null,"Threshold: ",-1)));function ue(e,t,i,s,o,l){return(0,n.wg)(),(0,n.iD)("div",{class:(0,m.C_)(["wrapper",{selected:e.isSelected}])},[(0,n._)("div",le,[(0,n._)("p",ae,(0,m.zw)(e.metricName),1),re]),(0,n._)("div",ce,[de,(0,n._)("p",null,(0,m.zw)(e.metricThreshold)+"%",1)])],2)}var me=(0,n.aZ)({name:"MetricButton",props:{metricName:{type:String,required:!0},metricThreshold:{type:Number,required:!0},isSelected:{type:Boolean,default:!1}},setup(){return{}}});const pe=(0,a.Z)(me,[["render",ue],["__scopeId","data-v-ea5e7fcc"]]);var he=pe,fe=i(7068);const ge=e=>((0,n.dD)("data-v-2bb5664f"),e=e(),(0,n.Cn)(),e),be=ge((()=>(0,n._)("tr",{class:"head-row"},[(0,n._)("th",null,"No."),(0,n._)("th",null,"Submission 1"),(0,n._)("th"),(0,n._)("th",null,"Submission 2"),(0,n._)("th",null,"Match %")],-1))),_e=["onClick"],ve=["onClick"],we=["onClick"],Se=ge((()=>(0,n._)("img",{alt:">>",src:fe},null,-1))),ye=[Se],Ce=["onClick"];function Ie(e,t,i,s,o,l){const a=(0,n.up)("ClustersList"),r=(0,n.up)("GDialog");return(0,n.wg)(),(0,n.iD)("table",null,[be,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.topComparisons,((i,s)=>((0,n.wg)(),(0,n.iD)("tr",{key:i.firstSubmissionId+i.secondSubmissionId+i.matchPercentage,class:"selectable"},[(0,n._)("td",{onClick:t=>e.navigateToComparisonView(i.firstSubmissionId,i.secondSubmissionId)},(0,m.zw)(s+1)+". ",9,_e),(0,n._)("td",{class:(0,m.C_)({"anonymous-style":e.isAnonymous(i.firstSubmissionId)}),onClick:t=>e.navigateToComparisonView(i.firstSubmissionId,i.secondSubmissionId)},(0,m.zw)(e.isAnonymous(i.firstSubmissionId)?"Hidden":i.firstSubmissionId),11,ve),(0,n._)("td",{onClick:t=>e.navigateToComparisonView(i.firstSubmissionId,i.secondSubmissionId)},ye,8,we),(0,n._)("td",{class:(0,m.C_)({"anonymous-style":e.isAnonymous(i.secondSubmissionId)}),onClick:t=>e.navigateToComparisonView(i.firstSubmissionId,i.secondSubmissionId)},(0,m.zw)(e.isAnonymous(i.secondSubmissionId)?"Hidden":i.secondSubmissionId),11,Ce),(0,n._)("td",null,(0,m.zw)(e.formattedMatchPercentage(i.matchPercentage)),1),(0,n._)("td",null,[e.isInCluster(i.firstSubmissionId,i.secondSubmissionId)?((0,n.wg)(),(0,n.iD)("img",{key:0,alt:">>",src:L,onClick:t[0]||(t[0]=(...t)=>e.toggleDialog&&e.toggleDialog(...t))})):(0,n.kq)("",!0)]),(0,n.Wm)(r,{modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=t=>e.dialog=t)},{default:(0,n.w5)((()=>[(0,n.Wm)(a,{clusters:e.getClustersFor(i.firstSubmissionId,i.secondSubmissionId),comparison:i},null,8,["clusters","comparison"])])),_:2},1032,["modelValue"])])))),128))])}var ke=i(4325);const Fe={class:"wrapper"};function De(e,t,i,s,o,l){const a=(0,n.up)("ClusterRadarChart"),r=(0,n.up)("GDialog");return(0,n.wg)(),(0,n.iD)("div",Fe,[(0,n._)("h1",null,"Clusters for comparison "+(0,m.zw)(e.comparison.firstSubmissionId)+" > "+(0,m.zw)(e.comparison.secondSubmissionId),1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.clusters,((i,s)=>((0,n.wg)(),(0,n.iD)("p",{key:s,onClick:t[2]||(t[2]=(...t)=>e.toggleDialog&&e.toggleDialog(...t))},[(0,n.Uk)((0,m.zw)(s)+" - "+(0,m.zw)(i.average_similarity)+" ",1),(0,n.Wm)(r,{modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=t=>e.dialog=t),fullscreen:""},{default:(0,n.w5)((()=>[(0,n._)("button",{onClick:t[0]||(t[0]=(...t)=>e.toggleDialog&&e.toggleDialog(...t))},"Close"),(0,n.Wm)(a,{cluster:i},null,8,["cluster"])])),_:2},1032,["modelValue"])])))),128))])}const Oe={class:"wrapper"};function xe(e,t,i,o,l,a){const r=(0,n.up)("RadarChart");return(0,n.wg)(),(0,n.iD)("div",Oe,[(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.selectedMember=t)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(Object.keys(e.cluster.members),((e,t)=>((0,n.wg)(),(0,n.iD)("option",{key:t},(0,m.zw)(e),1)))),128))],512),[[s.bM,e.selectedMember]]),(0,n.Wm)(r,{chartData:e.chartData,options:e.options,class:"chart"},null,8,["chartData","options"])])}Q.kL.register(...Q.zX),Q.kL.register(ee.Z);var Me=(0,n.aZ)({name:"ClusterRadarChart",components:{RadarChart:X.HM},props:{cluster:{}},setup(e){const t=(0,Z.iH)(""),i=((0,Z.iH)([]),t=>{let i=[];return e.cluster.members[t].forEach((e=>i.push(e.matchedWith))),i}),s=t=>{let i=[];return e.cluster.members[t].forEach((e=>i.push(e.percentage))),i},o=(0,Z.iH)({labels:i(Object.keys(e.cluster.members)[0]),datasets:[{label:Object.keys(e.cluster.members)[0],data:s(Object.keys(e.cluster.members)[0]),fill:!0,backgroundColor:"rgba(149, 168, 241, 0.5)",borderColor:"rgba(149, 168, 241, 1)",pointBackgroundColor:"rgba(149, 168, 241, 1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgb(255, 99, 132)"}]}),l=(0,Z.iH)({scales:{r:{suggestedMin:50,suggestedMax:100}}});return(0,n.YP)((()=>t.value),(e=>{o.value={labels:i(e),datasets:[{label:e,data:s(e),fill:!0,backgroundColor:"rgba(149, 168, 241, 0.5)",borderColor:"rgba(149, 168, 241, 1)",pointBackgroundColor:"rgba(149, 168, 241, 1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgb(255, 99, 132)"}]}})),{selectedMember:t,chartData:o,options:l}}});const Ze=(0,a.Z)(Me,[["render",xe],["__scopeId","data-v-219a2b40"]]);var Te=Ze,ze=(0,n.aZ)({name:"ClustersList",components:{ClusterRadarChart:Te,GDialog:ke.Yf},props:{comparison:{},clusters:Array},setup(){const e=(0,Z.iH)(!1),t=()=>e.value=!e.value;return{dialog:e,toggleDialog:t}}});const He=(0,a.Z)(ze,[["render",De],["__scopeId","data-v-21848566"]]);var Pe=He,Le=(0,n.aZ)({name:"ComparisonsTable",components:{ClustersList:Pe,GDialog:ke.Yf},props:{topComparisons:{type:Array,required:!0},clusters:{type:Array}},setup(e){let t=e=>e.toFixed(2);const i=(0,Z.iH)(!1),s=()=>{i.value=!0},n=(e,t)=>{H.state.single||di.push({name:"ComparisonView",query:{firstId:e,secondId:t}})},o=(t,i)=>e.clusters.some((e=>e.members.includes(t)&&e.members.includes(i))),l=e=>H.state.anonymous.has(e),a=(t,i)=>{let s=[];return e.topComparisons.forEach((e=>{e.firstSubmissionId.includes(t)&&i.includes(e.secondSubmissionId)?s.push({matchedWith:e.secondSubmissionId,percentage:e.matchPercentage}):e.secondSubmissionId.includes(t)&&i.includes(e.firstSubmissionId)&&s.push({matchedWith:e.firstSubmissionId,percentage:e.matchPercentage})})),s},r=e.clusters.map((e=>{let t={};return e.members.forEach((i=>{let s=e.members.filter((e=>!e.includes(i)));t[i]=a(i,s)})),{avgSim:e.avgSim,members:t}})),c=(e,t)=>r.filter((i=>Object.keys(i.members).includes(e)&&Object.keys(i.members).includes(t)));return{clustersWithParticipatingMatches:r,dialog:i,isAnonymous:l,getClustersFor:c,toggleDialog:s,formattedMatchPercentage:t,navigateToComparisonView:n,isInCluster:o}}});const Ne=(0,a.Z)(Le,[["render",Ie],["__scopeId","data-v-2bb5664f"]]);var Ee=Ne,Ae=i(2482);class je{constructor(e,t,i,s,n,o,l,a,r,c){(0,Ae.Z)(this,"_submissionFolderPath",void 0),(0,Ae.Z)(this,"_baseCodeFolderPath",void 0),(0,Ae.Z)(this,"_language",void 0),(0,Ae.Z)(this,"_fileExtensions",void 0),(0,Ae.Z)(this,"_matchSensitivity",void 0),(0,Ae.Z)(this,"_submissionIds",void 0),(0,Ae.Z)(this,"_dateOfExecution",void 0),(0,Ae.Z)(this,"_durationOfExecution",void 0),(0,Ae.Z)(this,"_metrics",void 0),(0,Ae.Z)(this,"_clusters",void 0),this._submissionFolderPath=e,this._baseCodeFolderPath=t,this._language=i,this._fileExtensions=s,this._matchSensitivity=n,this._submissionIds=o,this._dateOfExecution=l,this._durationOfExecution=a,this._metrics=r,this._clusters=c}get submissionFolderPath(){return this._submissionFolderPath}get baseCodeFolderPath(){return this._baseCodeFolderPath}get language(){return this._language}get fileExtensions(){return this._fileExtensions}get matchSensitivity(){return this._matchSensitivity}get submissionIds(){return this._submissionIds}get dateOfExecution(){return this._dateOfExecution}get durationOfExecution(){return this._durationOfExecution}get metrics(){return this._metrics}get clusters(){return this._clusters}}class We{static getOverview(e){const t=e.submission_folder_path,i="",s=e.language,n=e.file_extensions,o=e.match_sensitivity,l=e.submission_ids,a=e.date_of_execution,r=e.execution_time,c=[],d=[];return e.metrics.forEach((e=>{const t=e,i=[];t.topComparisons.forEach((e=>{const t={firstSubmissionId:e.first_submission,secondSubmissionId:e.second_submission,matchPercentage:e.match_percentage};i.push(t)}));const s={metricName:t.name,metricThreshold:t.threshold,distribution:t.distribution,comparisons:i};c.push(s)})),e.clusters&&e.clusters.forEach((e=>{const t=e,i={averageSimilarity:t.average_similarity,strength:t.strength,members:t.members};d.push(i)})),new je(t,i,s,n,o,l,a,r,c,d)}}const Be={class:"container"},Ve={class:"column-list"},qe=["onClick"];function Ye(e,t,i,s,o,l){return(0,n.wg)(),(0,n.iD)("div",Be,[(0,n._)("div",Ve,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.ids,((t,i)=>((0,n.wg)(),(0,n.iD)("p",{key:i,onClick:i=>e.$emit("idSent",[t])},(0,m.zw)(t),9,qe)))),128))]),(0,n._)("button",{onClick:t[0]||(t[0]=t=>e.$emit("idSent",e.ids))},"Hide/Show all")])}var Ue=(0,n.aZ)({name:"IDsList",props:{ids:{type:Array,required:!0}},setup(e){const t=e.ids;return{savedIds:t}}});const Je=(0,a.Z)(Ue,[["render",Ye],["__scopeId","data-v-7cf7a3fa"]]);var Re=Je,Ke=(0,n.aZ)({name:"OverviewView",components:{IDsList:Re,ComparisonsTable:Ee,DistributionDiagram:se,MetricButton:he,TextInformation:K},setup(){let e;if(H.state.local)try{e=We.getOverview(i(Object(function(){var e=new Error("Cannot find module '../files/overview.json'");throw e.code="MODULE_NOT_FOUND",e}())))}catch(d){di.back()}else H.state.zip?e=We.getOverview(JSON.parse(H.state.files["overview.json"])):H.state.single&&(e=We.getOverview(JSON.parse(H.state.fileString)));const t=t=>{t.length===e.submissionIds.length?H.state.anonymous.size>0?H.commit("resetAnonymous"):H.commit("addAnonymous",t):H.state.anonymous.has(t[0])?H.commit("removeAnonymous",t):0===H.state.anonymous.size?H.commit("addAnonymous",e.submissionIds.filter((e=>e!==t[0]))):H.commit("addAnonymous",t)};let s=(0,Z.iH)(e.metrics.map((()=>!1))),n=(0,Z.iH)(0);s.value[0]=!0;const o=e=>{s.value=s.value.map((()=>!1)),s.value[e]=!0,n.value=e};let l=(0,Z.iH)(e.metrics.map((e=>e.distribution))),a=(0,Z.iH)(e.metrics.map((e=>e.comparisons)));const r=e.submissionFolderPath.length>1,c=r?"Click arrow to see all paths":e.submissionFolderPath[0];return{overview:e,selectedMetricIndex:n,selectedMetric:s,distributions:l,topComps:a,hasMoreSubmissionPaths:r,submissionPathValue:c,handleId:t,selectMetric:o,store:H}}});const $e=(0,a.Z)(Ke,[["render",M],["__scopeId","data-v-4eb1a88d"]]);var Ge=$e,Xe=i(8536),Qe=i(5671);const et=e=>((0,n.dD)("data-v-3c5c0f05"),e=e(),(0,n.Cn)(),e),tt={class:"container"},it=et((()=>(0,n._)("img",{alt:"show",src:Xe},null,-1))),st=[it],nt={class:"title-section"},ot=et((()=>(0,n._)("h1",null,"JPlag Comparison",-1))),lt=et((()=>(0,n._)("img",{alt:"hide",src:Qe},null,-1))),at=[lt];function rt(e,t,i,s,o,l){const a=(0,n.up)("TextInformation"),r=(0,n.up)("MatchTable"),c=(0,n.up)("FilesContainer");return(0,n.wg)(),(0,n.iD)("div",tt,[(0,n._)("button",{id:"show-button",class:(0,m.C_)({hidden:!e.hideLeftPanel}),title:"Show sidebar",onClick:t[0]||(t[0]=(...t)=>e.togglePanel&&e.togglePanel(...t))},st,2),(0,n._)("div",{id:"sidebar",class:(0,m.C_)({hidden:e.hideLeftPanel})},[(0,n._)("div",nt,[ot,(0,n._)("button",{id:"hide-button",title:"Hide sidebar",onClick:t[1]||(t[1]=(...t)=>e.togglePanel&&e.togglePanel(...t))},at)]),(0,n.Wm)(a,{anonymous:e.store.state.anonymous.has(e.id1),value:e.id1,label:"Submission 1"},null,8,["anonymous","value"]),(0,n.Wm)(a,{anonymous:e.store.state.anonymous.has(e.id2),value:e.id2,label:"Submission 2"},null,8,["anonymous","value"]),(0,n.Wm)(a,{value:e.comparison.match_percentage,label:"Match %"},null,8,["value"]),(0,n.Wm)(r,{id1:e.id1,id2:e.id2,matches:e.comparison.allMatches,onMatchSelected:e.showMatch},null,8,["id1","id2","matches","onMatchSelected"])],2),(0,n.Wm)(c,{"container-id":1,files:e.filesOfFirst,matches:e.comparison.matchesInFirstSubmission,"files-owner":"Submission 1",onToggleCollapse:e.toggleCollapseFirst,onLineSelected:e.showMatchInSecond},null,8,["files","matches","onToggleCollapse","onLineSelected"]),(0,n.Wm)(c,{"container-id":2,files:e.filesOfSecond,matches:e.comparison.matchesInSecondSubmissions,"files-owner":"Submission 2",onToggleCollapse:e.toggleCollapseSecond,onLineSelected:e.showMatchInFirst},null,8,["files","matches","onToggleCollapse","onLineSelected"])])}function ct(e,t,i){return String(e).concat(t).concat(String(i))}function dt(e){if(e.name.includes(".")){const t=e.name.split(".");return t[t.length-1]}return""}const ut=e=>((0,n.dD)("data-v-07db8ba6"),e=e(),(0,n.Cn)(),e),mt={class:"match-table-container"},pt=ut((()=>(0,n._)("tr",null,[(0,n._)("th",null,"Submission 1"),(0,n._)("th",null,"Submission 2")],-1))),ht=ut((()=>(0,n._)("tr",null,[(0,n._)("th",null,"File 1"),(0,n._)("th",null,"File 2"),(0,n._)("th",null,"Tokens")],-1))),ft=["onClick"],gt={class:"td-content"},bt={class:"td-content"};function _t(e,t,i,s,o,l){return(0,n.wg)(),(0,n.iD)("div",mt,[(0,n._)("table",null,[pt,ht,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.matches,((t,i)=>((0,n.wg)(),(0,n.iD)("tr",{key:String(i).concat(t.startInFirst).concat(t.startInSecond),style:(0,m.j5)({background:t.color}),onClick:i=>e.$emit("matchSelected",i,t)},[(0,n._)("td",null,[(0,n._)("div",gt,[(0,n._)("p",null,(0,m.zw)(t.firstFile),1),(0,n._)("p",null,"("+(0,m.zw)(t.startInFirst)+" - "+(0,m.zw)(t.endInFirst)+")",1)])]),(0,n._)("td",null,[(0,n._)("div",bt,[(0,n._)("p",null,(0,m.zw)(t.secondFile),1),(0,n._)("p",null,"("+(0,m.zw)(t.startInSecond)+" - "+(0,m.zw)(t.endInSecond)+")",1)])]),(0,n._)("td",null,(0,m.zw)(t.tokens),1)],12,ft)))),128))])])}var vt=(0,n.aZ)({name:"MatchTable",props:{matches:{type:Array},id1:{type:String},id2:{type:String}},setup(){return{}}});const wt=(0,a.Z)(vt,[["render",_t],["__scopeId","data-v-07db8ba6"]]);var St=wt;class yt{constructor(e,t,i){(0,Ae.Z)(this,"_firstSubmissionId",void 0),(0,Ae.Z)(this,"_secondSubmissionId",void 0),(0,Ae.Z)(this,"_match_percentage",void 0),(0,Ae.Z)(this,"_filesOfFirstSubmission",void 0),(0,Ae.Z)(this,"_filesOfSecondSubmission",void 0),(0,Ae.Z)(this,"_colors",void 0),(0,Ae.Z)(this,"_allMatches",void 0),(0,Ae.Z)(this,"_matchesInFirstSubmission",void 0),(0,Ae.Z)(this,"_matchesInSecondSubmissions",void 0),this._firstSubmissionId=e,this._secondSubmissionId=t,this._match_percentage=i,this._filesOfFirstSubmission={},this._filesOfSecondSubmission={},this._colors=[],this._allMatches=[],this._matchesInFirstSubmission={},this._matchesInSecondSubmissions={}}get filesOfFirstSubmission(){return this._filesOfFirstSubmission}set filesOfFirstSubmission(e){this._filesOfFirstSubmission=e}get filesOfSecondSubmission(){return this._filesOfSecondSubmission}set filesOfSecondSubmission(e){this._filesOfSecondSubmission=e}get colors(){return this._colors}set colors(e){this._colors=e}get allMatches(){return this._allMatches}set allMatches(e){this._allMatches=e}get matchesInFirstSubmission(){return this._matchesInFirstSubmission}set matchesInFirstSubmission(e){this._matchesInFirstSubmission=e}get matchesInSecondSubmissions(){return this._matchesInSecondSubmissions}set matchesInSecondSubmissions(e){this._matchesInSecondSubmissions=e}get firstSubmissionId(){return this._firstSubmissionId}get secondSubmissionId(){return this._secondSubmissionId}get match_percentage(){return this._match_percentage}}class Ct{static getComparison(e){const t=this.convertToFilesByName(e.files_of_first_submission),i=this.convertToFilesByName(e.files_of_second_submission),s=e.matches,n=this.generateColorsForMatches(s.length),o=s.map(((e,t)=>this.mapMatch(e,n[t]))),l=this.groupMatchesByFileName(o,1),a=this.groupMatchesByFileName(o,2),r=new yt(e.first_submission_id,e.second_submission_id,e.match_percentage);return r.filesOfFirstSubmission=t,r.filesOfSecondSubmission=i,r.colors=n,r.allMatches=o,r.matchesInFirstSubmission=l,r.matchesInSecondSubmissions=a,r}static convertToFilesByName(e){return e.reduce(((e,t)=>(e[t.file_name]||(e[t.file_name]={lines:[],collapsed:!1}),e[t.file_name]={lines:t.lines,collapsed:!1},e)),{})}static groupMatchesByFileName(e,t){return e.reduce(((e,i)=>{const s=1===t?i.firstFile:i.secondFile;if(e[s]||(e[s]=[]),1===t){const t={start:i.startInFirst,end:i.endInFirst,linked_panel:2,linked_file:i.secondFile,linked_line:i.startInSecond,color:i.color};e[s].push(t)}else{const t={start:i.startInSecond,end:i.endInSecond,linked_panel:1,linked_file:i.firstFile,linked_line:i.startInFirst,color:i.color};e[s].push(t)}return e}),{})}static generateColorsForMatches(e){const t=[],i=Math.trunc(360/e);for(let s=0;s<e;s++){const e=s*i;t.push(`hsla(${e}, 80%, 50%, 0.3)`)}return t}static mapMatch(e,t){return{firstFile:e.first_file_name,secondFile:e.second_file_name,startInFirst:e.start_in_first,endInFirst:e.end_in_first,startInSecond:e.start_in_second,endInSecond:e.end_in_second,tokens:e.tokens,color:t}}}const It={class:"files-container"};function kt(e,t,i,s,o,l){const a=(0,n.up)("CodePanel"),r=(0,n.up)("VueDraggableNext");return(0,n.wg)(),(0,n.iD)("div",It,[(0,n._)("h1",null,"Files of "+(0,m.zw)(e.filesOwner),1),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(Object.keys(e.files),((t,i)=>((0,n.wg)(),(0,n.j4)(a,{key:t.concat(i),collapse:e.files[t].collapsed,"file-index":i,lines:e.files[t].lines,matches:e.matches[t]?e.matches[t]:[],"panel-id":e.containerId,title:t,onToggleCollapse:i=>e.$emit("toggle-collapse",t),onLineSelected:e.lineSelected},null,8,["collapse","file-index","lines","matches","panel-id","title","onToggleCollapse","onLineSelected"])))),128))])),_:1})])}const Ft=["id"],Dt={class:"file-title"},Ot={style:{width:"90%"}},xt={key:0,alt:"hide info",src:P},Mt={key:1,alt:"additional info",src:L};function Zt(e,t,i,s,o,l){const a=(0,n.up)("LineOfCode");return(0,n.wg)(),(0,n.iD)("div",{id:e.panelId.toString().concat(e.title).concat(e.fileIndex.toString()),class:"code-panel-container"},[(0,n._)("div",Dt,[(0,n._)("p",Ot,(0,m.zw)(e.title),1),(0,n._)("button",{class:"collapse-button",style:{width:"10%"},onClick:t[0]||(t[0]=t=>e.$emit("toggleCollapse"))},[e.collapse?((0,n.wg)(),(0,n.iD)("img",xt)):((0,n.wg)(),(0,n.iD)("img",Mt))])]),(0,n._)("div",{class:(0,m.C_)([{hidden:!e.collapse},"code-container"])},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.lines,((t,i)=>((0,n.wg)(),(0,n.j4)(a,{id:String(e.panelId).concat(e.title).concat(i),key:i,color:e.coloringArray[i],"is-first":e.isFirst[i],"is-last":e.isLast[i],"line-number":i,text:t,visible:e.collapse,onClick:t=>e.$emit("lineSelected",t,e.linksArray[i].panel,e.linksArray[i].file,e.linksArray[i].line)},null,8,["id","color","is-first","is-last","line-number","text","visible","onClick"])))),128))],2)],8,Ft)}const Tt=["id"];function zt(e,t,i,s,o,l){return(0,n.wg)(),(0,n.iD)("div",{class:(0,m.C_)([{"first-line":e.isFirst,"last-line":e.isLast,visible:e.visible},"line-wrap"]),style:(0,m.j5)({background:e.color})},[(0,n._)("pre",{id:e.text,ref:"lineRef",class:(0,m.C_)([{"match-line":"#ECECEC"!==e.color},"java"])},(0,m.zw)(e.lineNumber)+" "+(0,m.zw)(e.text),11,Tt)],6)}var Ht=i(637),Pt=(0,n.aZ)({name:"LineOfCode",props:{visible:{type:Boolean,required:!0},text:{type:String,required:!0},lineNumber:{type:Number,required:!0},color:{required:!0},fileIndex:{type:Number},isFirst:{type:Boolean},isLast:{type:Boolean}},setup(e){let t=!1,i=(0,Z.iH)(null);return(0,n.ic)((()=>{e.visible&&!t&&(Ht.Z.highlightElement(i.value),t=!0)})),{lineRef:i}}});const Lt=(0,a.Z)(Pt,[["render",zt],["__scopeId","data-v-656aa533"]]);var Nt=Lt,Et=(0,n.aZ)({name:"CodePanel",components:{LineOfCode:Nt},props:{title:{type:String},fileIndex:{type:Number},lines:{type:Array,required:!0},matches:{type:Array},panelId:{type:Number},collapse:{type:Boolean}},setup(e){const t=(0,Z.iH)({}),i=(0,Z.iH)({}),s=(0,Z.iH)({}),n=(0,Z.iH)({});e.matches.forEach((e=>{for(let o=e.start;o<=e.end;o++)t.value[o]=e.color,i.value[o]={panel:e.linked_panel,file:e.linked_file,line:e.linked_line},o===e.start&&(n.value[o]=!0),o===e.end&&(s.value[o]=!0)}));for(let o=0;o<e.lines.length;o++)t.value[o]||(t.value[o]="#FFFFFF",i.value[o]="-1",n.value[o]=!1,s.value[o]=!1);return{coloringArray:t,linksArray:i,isFirst:n,isLast:s}}});const At=(0,a.Z)(Et,[["render",Zt],["__scopeId","data-v-c00b9e90"]]);var jt=At,Wt=i(8496),Bt=(0,n.aZ)({name:"FilesContainer",components:{CodePanel:jt,VueDraggableNext:Wt.J},props:{containerId:{type:Number,required:!0},filesOwner:{type:String,required:!0},files:{required:!0},matches:{required:!0}},setup(e,{emit:t}){const i=(e,i,s,n)=>{t("lineSelected",e,i,s,n)};return{lineSelected:i}}});const Vt=(0,a.Z)(Bt,[["render",kt],["__scopeId","data-v-71b0ffa5"]]);var qt=Vt,Yt=(0,n.aZ)({name:"ComparisonView",components:{FilesContainer:qt,MatchTable:St,TextInformation:K},props:{firstId:{type:String},secondId:{type:String}},setup(e){const t=e.firstId.concat("-").concat(e.secondId),i=e.firstId.concat("-").concat(e.secondId);let s;if(H.state.local)try{s=Ct.getComparison(Object(function(){var e=new Error("Cannot find module 'undefined'");throw e.code="MODULE_NOT_FOUND",e}()))}catch(p){try{s=Ct.getComparison(Object(function(){var e=new Error("Cannot find module 'undefined'");throw e.code="MODULE_NOT_FOUND",e}()))}catch(p){di.back()}}else H.state.zip?s=H.state.files[t.concat(".json")]?Ct.getComparison(JSON.parse(H.state.files[t.concat(".json")])):Ct.getComparison(JSON.parse(H.state.files[i.concat(".json")])):H.state.single&&(s=Ct.getComparison(JSON.parse(H.state.fileString)));const n=(0,Z.iH)(s.filesOfFirstSubmission),o=(0,Z.iH)(s.filesOfSecondSubmission),l=e=>{n.value[e].collapsed=!n.value[e].collapsed},a=e=>{o.value[e].collapsed=!o.value[e].collapsed},r=(e,t,i,s)=>{n.value[i].collapsed||l(i),document.getElementById(ct(t,i,s)).scrollIntoView()},c=(e,t,i,s)=>{o.value[i].collapsed||a(i),document.getElementById(ct(t,i,s)).scrollIntoView()},d=(e,t)=>{r(e,1,t.firstFile,t.startInFirst),c(e,2,t.secondFile,t.startInSecond)},u=(0,Z.iH)(!0),m=()=>{u.value=!u.value};return{comparison:s,filesOfFirst:n,filesOfSecond:o,hideLeftPanel:u,toggleCollapseFirst:l,toggleCollapseSecond:a,showMatchInFirst:r,showMatchInSecond:c,showMatch:d,togglePanel:m,store:H}}});const Ut=(0,a.Z)(Yt,[["render",rt],["__scopeId","data-v-3c5c0f05"]]);var Jt=Ut;const Rt=e=>((0,n.dD)("data-v-4987b5c6"),e=e(),(0,n.Cn)(),e),Kt=Rt((()=>(0,n._)("img",{alt:"JPlag",src:p},null,-1))),$t=Rt((()=>(0,n._)("h1",null,"JPlag Report Viewer",-1))),Gt=Rt((()=>(0,n._)("h2",null,"Select an overview or comparison file or a zip to display.",-1))),Xt=Rt((()=>(0,n._)("p",null," Drop a .json or .zip file here",-1))),Qt=[Xt],ei={key:0,class:"local-files-container"},ti=Rt((()=>(0,n._)("p",{class:"local-files-text"},"Detected local files!",-1)));function ii(e,t,i,o,l,a){return(0,n.wg)(),(0,n.iD)("div",{class:"container",onDragover:t[2]||(t[2]=(0,s.iM)((()=>{}),["prevent"])),onDrop:t[3]||(t[3]=(0,s.iM)((()=>{}),["prevent"]))},[Kt,$t,Gt,(0,n._)("div",{class:"drop-container",onDrop:t[0]||(t[0]=(...t)=>e.uploadFile&&e.uploadFile(...t))},Qt,32),e.hasLocalFile?((0,n.wg)(),(0,n.iD)("div",ei,[ti,(0,n._)("button",{class:"local-files-button",onClick:t[1]||(t[1]=(...t)=>e.continueWithLocal&&e.continueWithLocal(...t))},"Continue with local files")])):(0,n.kq)("",!0)],32)}var si=i(5733),ni=i.n(si),oi=(0,n.aZ)({name:"FileUploadView",setup(){let e;try{i(Object(function(){var e=new Error("Cannot find module '../files/overview.json'");throw e.code="MODULE_NOT_FOUND",e}())),e=!0}catch(r){console.log(r),e=!1}const t=()=>{di.push({name:"OverviewView"})},s=(e,t)=>{di.push({name:"ComparisonView",query:{id1:e,id2:t}})},n=e=>{ni().loadAsync(e).then((async e=>{for(const t of Object.keys(e.files))console.log(t),await e.files[t].async("string").then((e=>{H.commit("saveFile",{fileName:t,data:e})}));H.commit("setLoadingType",{local:!1,zip:!0,single:!1,fileString:""}),t()}))},o=e=>{let i=JSON.parse(e);i["submission_folder_path"]?(H.commit("setLoadingType",{local:!1,zip:!1,single:!0,fileString:e}),t()):i["first_submission_id"]&&i["second_submission_id"]&&(H.commit("setLoadingType",{local:!1,zip:!1,single:!0,fileString:e}),s(i["first_submission_id"],i["second_submission_id"]))},l=e=>{let t=e.dataTransfer.files;if(!t)return;let i=[...t];if(i.length>1||0===i.length)return;let s=new FileReader;s.onload=e=>{let t=dt(i[0]);"zip"===t?n(i[0]):"json"===t&&o(e.target.result)},s.readAsText(i[0])},a=()=>{H.commit("setLoadingType",{local:!0,zip:!1,single:!1,fileString:""}),t()};return{continueWithLocal:a,uploadFile:l,hasLocalFile:e}}});const li=(0,a.Z)(oi,[["render",ii],["__scopeId","data-v-4987b5c6"]]);var ai=li;const ri=[{path:"/",name:"FileUploadView",component:ai},{path:"/overview",name:"OverviewView",component:Ge},{path:"/comparison",name:"ComparisonView",component:Jt,props:e=>({id1:e.query.firstId,id2:e.query.secondId})}],ci=(0,u.p7)({history:(0,u.PO)(),routes:ri});var di=ci;i(8783);(0,s.ri)(d).use(di).use(H).mount("#app")},7068:function(e,t,i){e.exports=i.p+"img/double_arrow_black_18dp.138ba432.svg"},8536:function(e,t,i){e.exports=i.p+"img/double_arrow_black_24dp.6ffebc17.svg"},164:function(e,t,i){e.exports=i.p+"img/help_outline_black_18dp.92160fb9.svg"},6838:function(e,t,i){e.exports=i.p+"img/keyboard_double_arrow_down_black_18dp.1dc03f43.svg"},5671:function(e,t,i){e.exports=i.p+"img/keyboard_double_arrow_left_black_24dp.5c0d792d.svg"},6108:function(e,t,i){e.exports=i.p+"img/keyboard_double_arrow_up_black_18dp.5defbec8.svg"},5174:function(e,t,i){e.exports=i.p+"img/logo-nobg.fe65cd9a.png"}},t={};function i(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,i),o.exports}i.m=e,function(){var e=[];i.O=function(t,s,n,o){if(!s){var l=1/0;for(d=0;d<e.length;d++){s=e[d][0],n=e[d][1],o=e[d][2];for(var a=!0,r=0;r<s.length;r++)(!1&o||l>=o)&&Object.keys(i.O).every((function(e){return i.O[e](s[r])}))?s.splice(r--,1):(a=!1,o<l&&(l=o));if(a){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[s,n,o]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.p=""}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,o,l=s[0],a=s[1],r=s[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(r)var d=r(i)}for(t&&t(s);c<l.length;c++)o=l[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(d)},s=self["webpackChunkreport_viewer"]=self["webpackChunkreport_viewer"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(4799)}));s=i.O(s)})();
//# sourceMappingURL=app.0e2e62fc.js.map