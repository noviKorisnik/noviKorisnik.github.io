import{Ca as s,qa as o,t as e,w as i}from"./chunk-MNFWAO26.js";var n=class t{constructor(r){this.http=r}apiUrl=s.apiUrl;getApprovedSessions(){return this.http.get(`${this.apiUrl}/chat/sessions/approved`)}getSession(r){return this.http.get(`${this.apiUrl}/chat/sessions/${r}`)}static \u0275fac=function(a){return new(a||t)(i(o))};static \u0275prov=e({token:t,factory:t.\u0275fac,providedIn:"root"})};export{n as a};