(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{112:function(e,t,a){e.exports=a.p+"static/media/myself.c6da6aef.jpg"},147:function(e,t,a){e.exports=a(163)},158:function(e,t,a){e.exports=a.p+"static/media/github.13af5cc9.png"},159:function(e,t,a){e.exports=a.p+"static/media/time_table.5752e11d.jpg"},160:function(e,t,a){e.exports=a.p+"static/media/notes.7edb6a02.jpg"},161:function(e,t,a){e.exports=a.p+"static/media/code.a23a3b97.jpg"},163:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),i=a.n(o),l=a(53),c=a(59),m=a(19),s=a(12),d=a(225),u=a(224),p=a(222),h=a(241),g=a(238),E=a(165),b=a(223),f=a(122),v=a.n(f),y=a(226),D=a(73),w=a(221),A=a(26),j=a(215),x=a(219),O=a(220),k=function(e){var t=e.icon,a=e.primary,n=e.to,o=r.a.useMemo((function(){return r.a.forwardRef((function(e,t){return r.a.createElement(l.b,Object.assign({to:n,ref:t},e))}))}),[n]);return r.a.createElement("li",null,r.a.createElement(j.a,{button:!0,component:o},t?r.a.createElement(x.a,null,t):null,r.a.createElement(O.a,{primary:a})))},C=a(117),I=a.n(C),N=a(118),T=a.n(N),S=a(119),R=a.n(S),B=a(120),L=a.n(B),M=a(121),F=a.n(M),P=Object(w.a)((function(e){return{root:{display:"flex"},drawer:Object(s.a)({},e.breakpoints.up("sm"),{width:225,flexShrink:0}),appBar:{zIndex:e.zIndex.drawer+1},menuButton:Object(s.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:225},content:{flexGrow:1,padding:e.spacing(3)}}}));var K=function(e){var t=e.container,a=P(),n=Object(A.a)(),o=r.a.useState(!1),i=Object(m.a)(o,2),l=i[0],c=i[1],s=function(){c(!l)},f=r.a.createElement("div",null,r.a.createElement("div",{className:a.toolbar}),r.a.createElement(p.a,null),r.a.createElement(b.a,null,r.a.createElement(k,{to:"/",primary:"Home page",icon:r.a.createElement(I.a,null)}),r.a.createElement(k,{to:"/time-table",primary:"Timetable planner",icon:r.a.createElement(T.a,null)}),r.a.createElement(k,{to:"/notes",primary:"Notes",icon:r.a.createElement(R.a,null)}),r.a.createElement(k,{to:"/about-the-program",primary:"About the program",icon:r.a.createElement(L.a,null)}),r.a.createElement(k,{to:"/about-the-author",primary:"About the author",icon:r.a.createElement(F.a,null)})));return r.a.createElement("div",{className:a.root},r.a.createElement(u.a,null),r.a.createElement(d.a,{position:"fixed",className:a.appBar},r.a.createElement(y.a,null,r.a.createElement(E.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:s,className:a.menuButton},r.a.createElement(v.a,null)),r.a.createElement(D.a,{variant:"h6",noWrap:!0},"YourTime"))),r.a.createElement("nav",{className:a.drawer,"aria-label":"mailbox folders"},r.a.createElement(g.a,{smUp:!0,implementation:"css"},r.a.createElement(h.a,{container:t,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:l,onClose:s,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},f)),r.a.createElement(g.a,{xsDown:!0,implementation:"css"},r.a.createElement(h.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},f))),r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.toolbar}),e.children))},W=a(232),U=a(237),Y=a(44),H=a(228),Z=a(229),z=a(231),G=a(230),J=function(e,t){return[-(t-window.innerHeight/2)/50,(e-window.innerWidth/2)/100,1.1]},Q=function(e,t,a){return"perspective(600px) rotateX(".concat(e,"deg) rotateY(").concat(t,"deg) scale(").concat(a,")")},X=Object(w.a)({media:{height:240},card:{maxWidth:700}}),_=function(e){var t=X(),a=Object(Y.b)((function(){return{xys:[0,0,1],config:{mass:3,tension:250,friction:30}}})),n=Object(m.a)(a,2),o=n[0],i=n[1];return r.a.createElement(Y.a.div,{onMouseMove:function(e){var t=e.clientX,a=e.clientY;return i({xys:J(t,a)})},onMouseLeave:function(){return i({xys:[0,0,1]})},style:{transform:o.xys.interpolate(Q)}},r.a.createElement(H.a,{className:t.card},r.a.createElement(Z.a,null,r.a.createElement(G.a,{className:t.media,image:e.image,title:e.hover}),r.a.createElement(z.a,null,r.a.createElement(D.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),r.a.createElement(D.a,{variant:"body2",color:"textSecondary",component:"p"},e.description)))))},q=a(233),V=function(){var e=Object(Y.b)({from:{marginLeft:-1e3},to:{marginLeft:0},config:{duration:1e3}});return r.a.createElement(Y.a.div,{style:e},r.a.createElement(W.a,{container:!0,spacing:5},r.a.createElement(W.a,{item:!0,xs:12,sm:4},r.a.createElement(q.a,{href:"https://github.com/keserukristof/SZAKDOLGOZAT",color:"inherit",underline:"none"},r.a.createElement(_,{image:a(158),hover:"Github",title:"Github",description:"Check out the github repo of my webpage."}))),r.a.createElement(W.a,{item:!0,xs:12,sm:8},r.a.createElement(W.a,{container:!0,spacing:5},r.a.createElement(W.a,{item:!0,xs:!0},r.a.createElement(U.a,{textAlign:"center",fontWeight:250,fontSize:40,m:1},"About the program"),r.a.createElement(U.a,{textAlign:"left",m:1},'As a third year DE IK PTI student I entered the phase of my studies where I had to choose a thesis topic. After reviewing the long list, the topic "Client Server Architecture (Web) Application Development" by Dr. Attila Kuki seemed to me the most ideal.'),r.a.createElement(U.a,{textAlign:"left",m:1},"This web application gives elementary and high school students the ability to access their timetable, edit it, and add after-school activities in one place."),r.a.createElement(U.a,{textAlign:"left",m:1},'Using the "Notes" feature, students can create tasks, notes, and after the notes are not actual, they can be removed.'),r.a.createElement(U.a,{textAlign:"left",m:1},"I spent a lot of time finding modern web technologies that I could easily implement the goals I set out during the project design phase. On the client page I used HTML5, CSS3, JavaScript technologies with React. The Material UI is responsible for the appearance of the web page. I use NodeJS on the server side and MongoDB technology on the database side. I used MongoDB with a framework called Express."))))))};var $=function(){return r.a.createElement(W.a,{container:!0,spacing:10},r.a.createElement(W.a,{item:!0,xs:12,sm:6},r.a.createElement(q.a,{component:l.b,to:"/time-table",color:"inherit",underline:"none"},r.a.createElement(_,{image:a(159),hover:"Timetable planner",title:"Timetable planner",description:"Check out your time table anytime and add activities."}))),r.a.createElement(W.a,{item:!0,xs:12,sm:6},r.a.createElement(q.a,{component:l.b,to:"/notes",color:"inherit",underline:"none"},r.a.createElement(_,{image:a(160),hover:"Todo notes",title:"Todo notes",description:"Make a note of your to-do list so you never forget anything."}))),r.a.createElement(W.a,{item:!0,xs:12,sm:6},r.a.createElement(q.a,{component:l.b,to:"/about-the-program",color:"inherit",underline:"none"},r.a.createElement(_,{image:a(161),hover:"About the program",title:"About the program",description:"Learn more about the program."}))),r.a.createElement(W.a,{item:!0,xs:12,sm:6},r.a.createElement(q.a,{component:l.b,to:"/about-the-author",color:"inherit",underline:"none"},r.a.createElement(_,{image:a(112),hover:"About the author",title:"About the author",description:"Learn more about the author."}))))},ee=function(){var e=Object(Y.b)({from:{marginLeft:-1e3},to:{marginLeft:0},config:{duration:1e3}});return r.a.createElement(Y.a.div,{style:e},r.a.createElement(W.a,{container:!0,spacing:7},r.a.createElement(W.a,{item:!0,xs:12,sm:5},r.a.createElement(_,{image:a(112),hover:"The author",title:"The author",description:"My name is Krist\xf3f Keser\u0171, third year DE IK PTI student. This is my thesis project. \r The application made with the help of Dr. Kuki Attila."})),r.a.createElement(W.a,{item:!0,xs:12,sm:7},r.a.createElement(D.a,{component:"div"},r.a.createElement(U.a,{textAlign:"center",fontWeight:250,fontSize:40,m:1},"About me"),r.a.createElement(U.a,{textAlign:"center",m:2},"I'm Krist\xf3f Keser\u0171. I grow up in P\xfcsp\xf6klad\xe1nyban and here I finished high school then I continue my studies at the University of Debrecen.I learn Computer Science in here."),r.a.createElement(U.a,{textAlign:"center",m:2},"What attracts me most is web development. I am currently trying to keep up to date with today's most popular web technologies.")))))},te=a(20),ae=a(25),ne=a(22),re=a(31),oe=a(32),ie=a(27),le=a(33),ce=a(51),me=a(132),se=a(23),de=a(29),ue=[{title:"Website Re-Design Plan",startDate:new Date(2020,2,30,9,15),endDate:new Date(2020,2,30,11,30),id:100,rRule:"FREQ=DAILY;COUNT=3",exDate:"20180628T063500Z,20180626T061500Z"},{title:"Book Flights to San Fran for Sales Trip",startDate:new Date(2020,2,30,12,11),endDate:new Date(2020,2,30,13,0),id:101,rRule:"FREQ=DAILY;COUNT=4",exDate:"20180627T091100Z",allDay:!0},{title:"Install New Router in Dev Room",startDate:new Date(2020,2,30,13,30),endDate:new Date(2020,2,30,14,35),id:102,rRule:"FREQ=DAILY;COUNT=5"},{title:"Approve Personal Computer Upgrade Plan",startDate:new Date(2020,2,30,10,0),endDate:new Date(2020,2,30,11,0),id:3,location:"Room 2"},{title:"Final Budget Review",startDate:new Date(2020,2,30,11,45),endDate:new Date(2020,2,30,13,20),id:4,location:"Room 2"},{title:"New Brochures",startDate:new Date(2018,5,26,14,40),endDate:new Date(2018,5,26,15,45),id:5,location:"Room 2"},{title:"Install New Database",startDate:new Date(2018,5,28,9,45),endDate:new Date(2018,5,28,11,15),id:6,location:"Room 1"},{title:"Approve New Online Marketing Strategy",startDate:new Date(2018,5,29,11,45),endDate:new Date(2018,5,29,13,5),id:7,location:"Room 3"},{title:"Create Icons for Website",startDate:new Date(2018,5,29,10,0),endDate:new Date(2018,5,29,11,30),id:12,location:"Room 2"}],pe=new Set([]),he=function(e){var t=e.id;return!pe.has(t)},ge=function(e){return he(e.data)?n.createElement(de.d.Appointment,e):n.createElement(de.d.Appointment,Object.assign({},e,{style:Object(ce.a)({},e.style,{cursor:"not-allowed"})}))},Ee=function(e){function t(e){var a;return Object(ae.a)(this,t),(a=Object(re.a)(this,Object(oe.a)(t).call(this,e))).state={data:ue,currentDate:new Date,addedAppointment:{},appointmentChanges:{},editingAppointmentId:void 0},a.onCommitChanges=a.commitChanges.bind(Object(ie.a)(a)),a.changeAddedAppointment=a.changeAddedAppointment.bind(Object(ie.a)(a)),a.changeAppointmentChanges=a.changeAppointmentChanges.bind(Object(ie.a)(a)),a.changeEditingAppointmentId=a.changeEditingAppointmentId.bind(Object(ie.a)(a)),a}return Object(le.a)(t,e),Object(ne.a)(t,[{key:"changeAddedAppointment",value:function(e){this.setState({addedAppointment:e})}},{key:"changeAppointmentChanges",value:function(e){this.setState({appointmentChanges:e})}},{key:"changeEditingAppointmentId",value:function(e){this.setState({editingAppointmentId:e})}},{key:"commitChanges",value:function(e){var t=e.added,a=e.changed,n=e.deleted;this.setState((function(e){var r=e.data;if(t){var o=r.length>0?r[r.length-1].id+1:0;r=[].concat(Object(te.a)(r),[Object(ce.a)({id:o},t)])}return a&&(r=r.map((function(e){return a[e.id]?Object(ce.a)({},e,{},a[e.id]):e}))),void 0!==n&&(r=r.filter((function(e){return e.id!==n}))),{data:r}}))}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.currentDate,r=e.addedAppointment,o=e.appointmentChanges,i=e.editingAppointmentId;return n.createElement(me.a,null,n.createElement(de.j,{data:t,height:750},n.createElement(se.r,{defaultCurrentDate:a}),n.createElement(se.k,{onCommitChanges:this.onCommitChanges,addedAppointment:r,onAddedAppointmentChange:this.changeAddedAppointment,appointmentChanges:o,onAppointmentChangesChange:this.changeAppointmentChanges,editingAppointmentId:i,onEditingAppointmentIdChange:this.changeEditingAppointmentId}),n.createElement(de.n,{startDayHour:7,endDayHour:20}),n.createElement(de.i,null),n.createElement(de.a,null),n.createElement(de.h,null),n.createElement(de.e,null),n.createElement(de.l,null),n.createElement(de.k,null),n.createElement(de.f,null),n.createElement(de.m,null),n.createElement(de.e,null),n.createElement(de.d,{appointmentComponent:ge}),n.createElement(de.c,{showOpenButton:!0,showDeleteButton:!0}),n.createElement(de.b,null),n.createElement(de.g,{allowDrag:he})))}}]),t}(n.PureComponent),be=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Add event with double click on the timetable."),r.a.createElement(Ee,null))},fe=a(235),ve=a(234),ye=a(236),De=a(129),we=a.n(De),Ae=Object(w.a)((function(e){return{root:{"& > *":{margin:e.spacing(2)}},item:{marginTop:30,marginBottom:30}}})),je=function(e){var t=e.addNote,a=Ae(),o=Object(n.useState)({id:"",task:"",completed:!1}),i=Object(m.a)(o,2),l=i[0],c=i[1];return r.a.createElement(ye.a,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l.task.trim()&&(t(Object(ce.a)({},l,{id:we()()})),c(Object(ce.a)({},l,{task:""})))}},r.a.createElement(W.a,{container:!0,justify:"space-around",className:a.root},r.a.createElement(W.a,{item:!0,className:a.item},r.a.createElement(fe.a,{value:l.task,onChange:function(e){c(Object(ce.a)({},l,{task:e.target.value}))},name:"task",placeholder:"Task",multiline:!0})),r.a.createElement(W.a,{item:!0,className:a.item},r.a.createElement(ve.a,{type:"submit",variant:"contained",color:"primary"},"Submit")))))},xe=a(240),Oe=a(130),ke=a.n(Oe),Ce=Object(w.a)({root:{background:"linear-gradient(45deg, #FFFFFF 80%, #EBEBEB 100%)",width:"auto"}}),Ie=function(e){var t=e.note,a=e.toggleComplete,n=e.removeNote,o=Ce();return r.a.createElement(me.a,{elevation:3,className:o.root},r.a.createElement(j.a,{style:{display:"flex"}},r.a.createElement(xe.a,{color:"primary",checked:t.completed,onClick:function(){a(t.id)}}),r.a.createElement(D.a,{variant:"body1",style:{color:t.completed?"green":"black"}},t.task),r.a.createElement(E.a,{onClick:function(){n(t.id)}},r.a.createElement(ke.a,null))))},Ne=function(e){var t=e.notes,a=e.toggleComplete,n=e.removeNote;return r.a.createElement(b.a,null,r.a.createElement(W.a,{container:!0,spacing:4},t.map((function(e){return r.a.createElement(W.a,{item:!0,xs:!0},r.a.createElement(Ie,{key:e.id,note:e,toggleComplete:a,removeNote:n}))}))))},Te=function(){var e=Object(Y.b)({from:{marginLeft:-1e3},to:{marginLeft:0},config:{duration:1e3}}),t=Object(n.useState)([]),a=Object(m.a)(t,2),o=a[0],i=a[1];return r.a.createElement(Y.a.div,{style:e},r.a.createElement(ye.a,null,r.a.createElement(W.a,{container:!0,justify:"space-around"},r.a.createElement(W.a,{item:!0},r.a.createElement("h1",null,"Add note!")))),r.a.createElement(je,{addNote:function(e){i([e].concat(Object(te.a)(o)))}}),r.a.createElement(Ne,{notes:o,toggleComplete:function(e){i(o.map((function(t){return t.id===e?Object(ce.a)({},t,{completed:!t.completed}):t})))},removeNote:function(e){i(o.filter((function(t){return t.id!==e})))}}))},Se=function(){return r.a.createElement(l.a,null,r.a.createElement(K,null,r.a.createElement(c.b,{exact:!0,path:"/",component:$}),r.a.createElement(c.b,{path:"/time-table",component:be}),r.a.createElement(c.b,{path:"/notes",component:Te}),r.a.createElement(c.b,{path:"/about-the-program",component:V}),r.a.createElement(c.b,{path:"/about-the-author",component:ee}),r.a.createElement(c.a,{to:"/"})))};i.a.render(r.a.createElement(Se,null),document.getElementById("root"))}},[[147,1,2]]]);
//# sourceMappingURL=main.2b57858f.chunk.js.map