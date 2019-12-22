(this.webpackJsonp_rearguard_pokedex=this.webpackJsonp_rearguard_pokedex||[]).push([[1],{0:function(e,t,a){e.exports=a(1)},1:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(2),r=a(3),o=a(6),s=n.__importDefault(a(7)),l=n.__importDefault(a(83));let i;a(1229),a(1230),r.configure({enforceActions:"always"});document.addEventListener("DOMContentLoaded",()=>{i=document.getElementById("root"),(e=>{l.default.render(s.default.createElement(e,null),i)})(o.App)})},1032:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(2).__importDefault(a(7)),r=a(33),o=a(32),s=a(37),{Option:l}=s.Select;t.SelectBox=o.observer(()=>{const{setTags:e,tags:t,selectedTags:a,isLoading:o}=r.pokemonStore;return n.default.createElement(s.Select,{mode:"multiple",style:{width:"100%"},placeholder:"Please select",value:a,onChange:e,disabled:o},t.map(e=>n.default.createElement(l,{value:e,key:e},e)))})},1034:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(2).__importDefault(a(7)),r=a(32),o=a(33),s=a(37),l=a(1035),{Column:i}=s.Table;t.TableBoxDesktop=r.observer(()=>{const{pokemonList:e,pageNumber:t,pageSize:a,isFiltered:r}=o.pokemonStore,d=(t-1)*a,c=d+a;return n.default.createElement("div",null,n.default.createElement(s.Table,{dataSource:r?e.slice(d,c):e,rowKey:(e,t)=>`${t}`,pagination:!1,size:"small"},n.default.createElement(i,{title:"ID",dataIndex:"id",align:"left"}),n.default.createElement(i,{title:"Avatar",dataIndex:"avatar",key:"avatar",align:"center",render:e=>n.default.createElement("img",{src:e})}),n.default.createElement(i,{title:"Name",dataIndex:"name",key:"name",align:"center"}),n.default.createElement(i,{title:"Types",dataIndex:"types",key:"types",align:"center",render:e=>n.default.createElement("div",null,e.map(e=>n.default.createElement(l.Tag,{key:e},e)))}),n.default.createElement(i,{title:"Stats",dataIndex:"stats",key:"stats",align:"center",width:"325px",render:e=>n.default.createElement(s.Table,{dataSource:e,pagination:!1,className:"pokemon-list",bordered:!0,size:"small",tableLayout:"auto",rowKey:(e,t)=>`${t}`},n.default.createElement(i,{title:"Name",dataIndex:"name",key:"name"}),n.default.createElement(i,{title:"Effort",dataIndex:"effort",key:"effort"}),n.default.createElement(i,{title:"Base stat",dataIndex:"base_stat",key:"base_stat"}))})))})},1035:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(2),r=n.__importDefault(a(7));a(1036);const o=n.__importDefault(a(1037)),s=new Map;t.Tag=e=>{let t=s.get(e.children);if(!t){const a=o.default();t=a.hexString(),s.set(e.children,a.hexString())}return r.default.createElement("span",{style:{backgroundColor:t,color:"black"},className:"tag"},e.children)}},1036:function(e,t,a){},1227:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(2).__importDefault(a(7)),r=a(32),o=a(33),s=a(37),l=a(1049);a(35);const i=a(1035);a(1228);const{Column:d}=s.Table;t.TableBoxMobile=r.observer(()=>{const{pokemonList:e}=o.pokemonStore;return n.default.createElement("div",null,e.map(({id:e,name:t,avatar:a,types:r,stats:o})=>n.default.createElement("div",{key:e,className:"card-box"},n.default.createElement(l.Card,null,n.default.createElement(l.Card.Header,{title:t,thumb:a,extra:e}),n.default.createElement(l.Card.Body,null,n.default.createElement("div",null,n.default.createElement(s.Table,{dataSource:o,pagination:!1,bordered:!0,size:"small",tableLayout:"auto",rowKey:(e,t)=>`${t}`},n.default.createElement(d,{title:"Name",dataIndex:"name",key:"name"}),n.default.createElement(d,{title:"Effort",dataIndex:"effort",key:"effort"}),n.default.createElement(d,{title:"Base stat",dataIndex:"base_stat",key:"base_stat"})))),n.default.createElement(l.Card.Footer,{content:"types",extra:n.default.createElement("div",{className:"card-box__tag"},r.map(e=>n.default.createElement(i.Tag,{key:e},e)))})))))})},1228:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(2).__importStar(a(7)),r=a(32),o=a(33);a(35);const s=a(36),l=a(1032),i=a(1034),d=a(1227),c=a(37);t.PokemonListPage=r.observer(()=>{const{fetchPokemons:e,pokemonCount:t,isLoading:a}=o.pokemonStore,[r,u]=n.useState(0),m=()=>{u(window.innerWidth)};return n.useEffect(()=>(m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)),[]),n.useEffect(()=>{e()},[]),n.default.createElement("div",{className:"main-block"},n.default.createElement("h1",null,"Pokedex"),n.default.createElement("p",null,"Count: ",t),n.default.createElement("div",{className:"main-block__search-box"},n.default.createElement(s.SearchBox,null)),n.default.createElement("div",{className:"main-block__select-box"},n.default.createElement(l.SelectBox,null)),n.default.createElement("div",null,n.default.createElement(c.Pagination,{showSizeChanger:!0,onShowSizeChange:e,onChange:e,defaultCurrent:1,total:t,pageSizeOptions:["10","20","50"],disabled:a})),n.default.createElement("div",{className:"main-block__table-box"},r<700?n.default.createElement(d.TableBoxMobile,null):n.default.createElement(i.TableBoxDesktop,null)))})},33:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(2),r=a(3),o=a(34);r.configure({enforceActions:"observed"});const s=new Map;class l{constructor(){this.isLoading=!1,this.count=0,this.results=[],this.search="",this.selectedTags=[],this.pageNumber=1,this.pageSize=10,this.fetchPokemons=this.fetchPokemons.bind(this),this.setSearch=this.setSearch.bind(this),this.setTags=this.setTags.bind(this)}get pokemonCount(){return this.isFiltered?this.pokemonList.length:this.count}get pokemonList(){let e=this.results;return this.isFiltered&&(e=Array.from(s.values()).map(this.pokemonParse)),e.filter(e=>{const t=-1!==e.name.indexOf(this.search);if(this.selectedTags.length>0){const a=e.types.find(e=>this.selectedTags.includes(e));return t&&a}return t})}get isFiltered(){return""!==this.search||this.selectedTags.length>0}get tags(){const e=new Set;return this.results.forEach(t=>{t.types.forEach(t=>{e.add(t)})}),Array.from(e)}setSearch(e){this.search=e,this.pageNumber=1}setTags(e){this.selectedTags=e,this.pageNumber=1}async fetchPokemons(e=1,t=10){if(this.pageNumber=e,this.pageSize=t,this.isFiltered)return;this.isLoading=!0;const a=await o.get(`pokemon/?offset=${(e-1)*t}&limit=${t}`);if(a){const e=await Promise.all(a.results.map(async({url:e})=>{let t=s.get(e);return t||(t=await o.get(e,!0),s.set(e,t)),t}));r.runInAction(()=>{this.count=a.count,this.results=e.map(this.pokemonParse),this.isLoading=!1})}}pokemonParse({id:e,name:t,sprites:a,types:n,stats:r}){return{id:e,name:t,avatar:a.front_default,types:n.map(({type:e})=>e.name),stats:r.map(({base_stat:e,effort:t,stat:a})=>({base_stat:e,effort:t,name:a.name}))}}}n.__decorate([r.observable,n.__metadata("design:type",Boolean)],l.prototype,"isLoading",void 0),n.__decorate([r.observable,n.__metadata("design:type",Array)],l.prototype,"results",void 0),n.__decorate([r.observable,n.__metadata("design:type",String)],l.prototype,"search",void 0),n.__decorate([r.observable,n.__metadata("design:type",Array)],l.prototype,"selectedTags",void 0),n.__decorate([r.observable,n.__metadata("design:type",Number)],l.prototype,"pageNumber",void 0),n.__decorate([r.observable,n.__metadata("design:type",Number)],l.prototype,"pageSize",void 0),n.__decorate([r.observable,n.__metadata("design:type",Number)],l.prototype,"count",void 0),n.__decorate([r.computed,n.__metadata("design:type",Number),n.__metadata("design:paramtypes",[])],l.prototype,"pokemonCount",null),n.__decorate([r.computed,n.__metadata("design:type",Array),n.__metadata("design:paramtypes",[])],l.prototype,"pokemonList",null),n.__decorate([r.computed,n.__metadata("design:type",Boolean),n.__metadata("design:paramtypes",[])],l.prototype,"isFiltered",null),n.__decorate([r.computed,n.__metadata("design:type",Array),n.__metadata("design:paramtypes",[])],l.prototype,"tags",null),n.__decorate([r.action,n.__metadata("design:type",Function),n.__metadata("design:paramtypes",[String]),n.__metadata("design:returntype",void 0)],l.prototype,"setSearch",null),n.__decorate([r.action,n.__metadata("design:type",Function),n.__metadata("design:paramtypes",[Array]),n.__metadata("design:returntype",void 0)],l.prototype,"setTags",null),n.__decorate([r.action,n.__metadata("design:type",Function),n.__metadata("design:paramtypes",[Object,Object]),n.__metadata("design:returntype",Promise)],l.prototype,"fetchPokemons",null),t.PokemonStore=l,t.pokemonStore=new l},34:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.get=async(e,t=!1)=>{try{const a=await fetch(t?e:`https://pokeapi.co/api/v2/${e}`);return await a.json()}catch(a){console.error(a)}}},35:function(e,t,a){},36:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(2).__importDefault(a(7)),r=a(33),o=a(37),s=a(32),{Search:l}=o.Input;t.SearchBox=s.observer(()=>{const{search:e,setSearch:t,isLoading:a}=r.pokemonStore;return n.default.createElement(l,{placeholder:"please input Pokemon name",onChange:e=>t(e.target.value),allowClear:!0,value:e,disabled:a})})},6:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(2).__importDefault(a(7)),r=a(10),o=a(15);a(30);const s=a(31);t.browserHistory=o.createBrowserHistory(),t.App=()=>n.default.createElement(r.Router,{history:t.browserHistory},n.default.createElement(r.Switch,null,n.default.createElement(r.Route,{path:"/",component:s.PokemonListPage})))}},[[0,0,3]]]);