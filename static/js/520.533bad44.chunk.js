"use strict";(self.webpackChunkteam_member=self.webpackChunkteam_member||[]).push([[520],{523:function(e,a,l){l.r(a),l.d(a,{default:function(){return t}});var c=l(184),s=function(e){var a=e.selectedTeam,l=e.handleTeamSelection;return(0,c.jsxs)("select",{className:"form-select form-select-lg",value:a,onChange:l,children:[(0,c.jsx)("option",{value:"TeamA",children:"TeamA"}),(0,c.jsx)("option",{value:"TeamB",children:"TeamB"}),(0,c.jsx)("option",{value:"TeamC",children:"TeamC"}),(0,c.jsx)("option",{value:"TeamD",children:"TeamD"})]})},n=l.p+"static/media/maleProfile.657c4196488ead649e93.jpg",i=l.p+"static/media/femaleProfile.48d77dc2519df08d5cc5.jpg",m=function(e){var a=e.employee,l=e.selectedTeam,s=e.handleEmployeeCardClick;return(0,c.jsxs)("div",{className:a.teamName===l?"card m-2 standout":"card m-2",style:{cursor:"pointer"},onClick:function(e){return s(e,a.id)},children:["male"===a.gender?(0,c.jsx)("img",{src:n,alt:"Male Profile",className:"card-img-top"}):(0,c.jsx)("img",{src:i,alt:"Female Profile",className:"card-img-top"}),(0,c.jsxs)("div",{className:"card-body",children:[(0,c.jsxs)("h5",{className:"card-title",children:[" ",a.fullName]}),(0,c.jsxs)("p",{className:"card-text",children:[(0,c.jsx)("b",{children:"Designation:"})," ",a.designation]})]})]},a.id)},r=function(e){var a=e.employees,l=e.selectedTeam,s=e.handleEmployeeCardClick;return a.map((function(e){return(0,c.jsx)(m,{employee:e,handleEmployeeCardClick:s,selectedTeam:l},e.id)}))},t=function(e){var a=e.employees,l=e.selectedTeam,n=e.handleTeamSelection,i=e.handleEmployeeCardClick;return(0,c.jsxs)("main",{className:"container",children:[(0,c.jsx)("div",{className:"row justify-content-center mt-3 mb-3",children:(0,c.jsx)("div",{className:"col-6",children:(0,c.jsx)(s,{selectedTeam:l,handleTeamSelection:n})})}),(0,c.jsx)("div",{className:"row justify-content-center mt-3 mb-3",children:(0,c.jsx)("div",{className:"col-8",children:(0,c.jsx)("div",{className:"card-collection",children:(0,c.jsx)(r,{selectedTeam:l,handleEmployeeCardClick:i,employees:a})})})})]})}}}]);
//# sourceMappingURL=520.533bad44.chunk.js.map