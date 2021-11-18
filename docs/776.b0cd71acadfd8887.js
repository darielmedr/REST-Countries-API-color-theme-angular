"use strict";(self.webpackChunkcountry_finder=self.webpackChunkcountry_finder||[]).push([[776],{6776:(B,f,a)=>{a.r(f),a.d(f,{HomeModule:()=>Q});var s=a(6019),g=a(3174),y=a(5548),t=a(3668),v=a(4099),Z=a(5686),O=a(5389),M=a(9204),h=a(8053),C=a(4522);let p=(()=>{class n{constructor(e){this.http=e,this.baseUrl="https://restcountries.com/v2",this.fields="name,flag,capital,region,subregion,nativeName,population,topLevelDomain,currencies,languges,borders",this.searchSubject$=new v.X({countryName:"all",region:"Americas"})}getDefaultCountry(){return{name:"",flag:"",capital:"",region:"",subregion:"",nativeName:"",population:0,topLevelDomain:[],currencies:[],languages:[],borders:[]}}addSearch(e){this.searchSubject$.next(e)}getCountries(){return this.searchSubject$.asObservable().pipe((0,Z.b)(500),(0,O.x)(),(0,M.w)(e=>"all"===e.countryName||""===e.countryName?this.getCountriesByRegion(e.region):this.getCountriesByNameAndRegion(e.countryName,e.region)))}getCountriesByRegion(e){return this.http.get(`${this.baseUrl}/region/${e}?fields=${this.fields}`).pipe((0,h.U)(o=>o.map(i=>this.mapApiResponseToCountry(i))))}getCountriesByNameAndRegion(e,o){return this.http.get(`${this.baseUrl}/name/${e}?fields=${this.fields}`).pipe((0,h.U)(i=>i.filter(c=>c.region===o).map(c=>this.mapApiResponseToCountry(c))))}mapApiResponseToCountry(e){var o,i;return{name:e.name,flag:e.flag,capital:e.capital,region:e.region,subregion:e.subregion,nativeName:e.nativeName,population:e.population,topLevelDomain:e.topLevelDomain,currencies:null===(o=e.currencies)||void 0===o?void 0:o.map(c=>c.name),languages:null===(i=e.languages)||void 0===i?void 0:i.map(c=>c.name),borders:e.borders}}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(C.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();var m=a(9133),l=(()=>{return(n=l||(l={}))[n.Africa=0]="Africa",n[n.Americas=1]="Americas",n[n.Asia=2]="Asia",n[n.Europe=3]="Europe",n[n.Oceania=4]="Oceania",l;var n})(),d=a(7706),A=a(8501),T=a(138),P=a(3449),S=a(6731);function x(n,r){if(1&n&&(t.TgZ(0,"mat-option",7),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&n){const e=r.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",t.lcZ(2,2,e)," ")}}let b=(()=>{class n{constructor(e){this.countryService=e,this.searchField=new m.NI,this.filter=new m.NI,this.regions=[]}ngOnInit(){this.setRegions()}setRegions(){for(const e in l)isNaN(Number(e))&&this.regions.push(e)}search(){this.countryService.addSearch({countryName:this.searchField.value||"",region:this.filter.value||"Europe"})}regionChanged(e){this.countryService.addSearch({countryName:this.searchField.value||"",region:e||"Europe"})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-search"]],decls:12,vars:3,consts:[[1,"flex-container"],[1,"search","mat-elevation-z2"],["matPrefix",""],["matInput","","type","search",3,"formControl","input"],[1,"filter","mat-elevation-z2"],["placeholder","Filtered by all regions",3,"formControl","valueChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"mat-form-field",1),t.TgZ(2,"mat-label"),t._uU(3,"Search for a country..."),t.qZA(),t.TgZ(4,"mat-icon",2),t._uU(5,"search"),t.qZA(),t.TgZ(6,"input",3),t.NdJ("input",function(){return o.search()}),t.qZA(),t.qZA(),t.TgZ(7,"mat-form-field",4),t.TgZ(8,"mat-label"),t._uU(9,"Filter by Region"),t.qZA(),t.TgZ(10,"mat-select",5),t.NdJ("valueChange",function(c){return o.regionChanged(c)}),t.YNc(11,x,3,4,"mat-option",6),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(6),t.Q6J("formControl",o.searchField),t.xp6(4),t.Q6J("formControl",o.filter),t.xp6(1),t.Q6J("ngForOf",o.regions))},directives:[d.KE,d.hX,A.Hw,d.qo,T.Nt,m.Fj,m.JJ,m.oH,P.gD,s.sg,S.ey],pipes:[s.rS],styles:[".flex-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;grid-gap:5rem;gap:5rem}.flex-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{font-size:var(--font-size-text-100);background-color:var(--color-elements);color:var(--color-text);height:6rem;display:flex;align-items:center;padding:var(--font-size-text-100) calc(2 * var(--font-size-text-100));border-radius:.5rem;width:min(100%,48rem)}.flex-container[_ngcontent-%COMP%]   .mat-form-field.filter[_ngcontent-%COMP%]{width:min(100%,24.8rem)}.flex-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{color:var(--color-input)}  .mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:0;width:100%}  .mat-form-field-appearance-legacy .mat-form-field-label{color:var(--color-input-label)}  .mat-form-field-prefix{align-self:center;margin-right:3rem}  .mat-form-field-infix{border-top:none;padding:0}  .mat-form-field-underline{display:none}  .mat-select-panel .mat-option{background-color:var(--color-elements);color:var(--color-text)}"]}),n})();var u=a(888);let N=(()=>{class n{constructor(e){this.countryService=e,this.country=this.countryService.getDefaultCountry()}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-country-card"]],inputs:{country:"country"},decls:18,vars:8,consts:[["mat-card-image","",1,"mat-elevation-z2",3,"src","alt"],[1,"semi-bold"]],template:function(e,o){1&e&&(t.TgZ(0,"mat-card"),t._UZ(1,"img",0),t.TgZ(2,"mat-card-content"),t.TgZ(3,"mat-card-title"),t._uU(4),t.qZA(),t.TgZ(5,"p"),t.TgZ(6,"span",1),t._uU(7,"Population: "),t.qZA(),t._uU(8),t.ALo(9,"number"),t.qZA(),t.TgZ(10,"p"),t.TgZ(11,"span",1),t._uU(12,"Region: "),t.qZA(),t._uU(13),t.qZA(),t.TgZ(14,"p"),t.TgZ(15,"span",1),t._uU(16,"Capital: "),t.qZA(),t._uU(17),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.MGl("alt","",o.country.name," flag"),t.Q6J("src",o.country.flag,t.LSH),t.xp6(3),t.Oqu(o.country.name),t.xp6(4),t.Oqu(t.lcZ(9,6,o.country.population)),t.xp6(5),t.Oqu(o.country.region),t.xp6(4),t.Oqu(o.country.capital))},directives:[u.a8,u.G2,u.dn,u.n5],pipes:[s.JJ],styles:[".mat-card[_ngcontent-%COMP%]{height:100%}.mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-height:47%}.mat-card[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%]{padding:1.6rem}.mat-card[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{font-size:var(--font-size-title);margin-bottom:var(--font-size-title);font-weight:var(--font-weight-bold)}.mat-card[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:var(--font-size-text-100)}"]}),n})();const w=function(){return["/detail"]};function F(n,r){if(1&n&&(t.ynx(0),t._UZ(1,"app-country-card",3),t.BQk()),2&n){const e=r.$implicit;t.xp6(1),t.Q6J("routerLink",t.DdM(3,w))("state",e)("country",e)}}function U(n,r){if(1&n&&(t.TgZ(0,"div",1),t.YNc(1,F,2,4,"ng-container",2),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.countries)}}function J(n,r){}let H=(()=>{class n{constructor(){this.countries=[]}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-countries"]],inputs:{countries:"countries"},decls:2,vars:1,consts:[["class","wrapper",4,"ngIf"],[1,"wrapper"],[4,"ngFor","ngForOf"],[3,"routerLink","state","country"]],template:function(e,o){1&e&&(t.YNc(0,U,2,1,"div",0),t.YNc(1,J,0,0,"ng-template")),2&e&&t.Q6J("ngIf",o.countries)},directives:[s.O5,s.sg,N,g.rH],styles:[".wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-gap:3rem;gap:3rem}@media screen and (min-width: 600px){.wrapper[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media screen and (min-width: 800px){.wrapper[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media screen and (min-width: 1200px){.wrapper[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}"]}),n})();const z=[{path:"",component:(()=>{class n{constructor(e){this.countryService=e,this.countries$=new y.y}ngOnInit(){this.getCountries()}getCountries(){this.countries$=this.countryService.getCountries()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:5,vars:3,consts:[[1,"home-wrapper","bg-theme"],[1,"search"],[3,"countries"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"app-search"),t.qZA(),t._UZ(3,"app-countries",2),t.ALo(4,"async"),t.qZA()),2&e&&(t.xp6(3),t.Q6J("countries",t.lcZ(4,1,o.countries$)))},directives:[b,H],pipes:[s.Ov],styles:[".home-wrapper[_ngcontent-%COMP%]{padding:3rem 5%}.home-wrapper[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{margin-bottom:3rem}@media screen and (min-width: 768px){.home-wrapper[_ngcontent-%COMP%]{padding:4.8rem 5%}.home-wrapper[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{margin-bottom:5rem}}"]}),n})()}];let $=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.Bz.forChild(z)],g.Bz]}),n})();var L=a(7028);let Q=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[p],imports:[[s.ez,$,L.Q,m.UX,C.JF]]}),n})()}}]);