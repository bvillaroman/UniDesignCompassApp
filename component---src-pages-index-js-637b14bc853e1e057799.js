(window.webpackJsonp=window.webpackJsonp||[]).push([[11,10],{162:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(253),l=a.n(i),c=a(189),o=a(252),u=a(199),s=Object(u.a)("card-deck"),d=a(254);t.default=function(e){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"presentation"},r.a.createElement("img",{id:"homeImg",role:"presentation",alt:"inter",src:l.a}),r.a.createElement("h1",{className:"presentation-description"},"DESIGN COMPASS"),r.a.createElement("h3",{className:"presentation-description1"},"to facililate"),r.a.createElement("h1",{className:"presentation-description2"},"Creation"),r.a.createElement(o.a,{className:"presentation-button",variant:"info",size:"lg",href:"/Compass"},"Begin")),r.a.createElement(s,null,r.a.createElement(d.a,{bg:"danger",text:"white"},r.a.createElement(d.a.Header,null,"Objective"),r.a.createElement(d.a.Body,null,r.a.createElement(d.a.Text,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))),r.a.createElement(d.a,{bg:"warning",text:"dark"},r.a.createElement(d.a.Header,null,"Features"),r.a.createElement(d.a.Body,null,r.a.createElement(d.a.Text,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))))}},164:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(162),l=a(64),c=a(60);a(165);t.default=function(e){return r.a.createElement(l.a,{store:c.b},r.a.createElement(i.default,null))}},181:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),i=a(1),l=a.n(i),c=a(39),o=a.n(c);a.d(t,"a",function(){return o.a}),a.d(t,"c",function(){return c.navigate});a(182);var u=r.a.createContext({}),s=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},182:function(e,t,a){var n;e.exports=(n=a(186))&&n.default||n},184:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"c",function(){return i}),a.d(t,"b",function(){return l});var n=a(30),r=function(e){return function(t){t({type:n.a,payload:e})}},i=function(e){return function(t){t({type:n.c,payload:e})}},l=function(){return function(e){e({type:n.b})}}},186:function(e,t,a){"use strict";a.r(t);a(28);var n=a(0),r=a.n(n),i=a(1),l=a.n(i),c=a(65),o=a(3),u=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=u},187:function(e){e.exports={data:{site:{siteMetadata:{title:"Universal Design Compass"}}}}},189:function(e,t,a){"use strict";var n=a(187),r=a(0),i=a.n(r),l=a(1),c=a.n(l),o=a(181),u=function(){return i.a.createElement("footer",{className:"text-center"},i.a.createElement("div",{className:"footer-container"},i.a.createElement("p",null,"Designed by Ronuel Diaz | Jeter Gutierrez | Kelly Lu | Ramon Petgrave | Abraham B. Villaroman"),i.a.createElement("p",null,"© 2019 Universal Design Compass. All right reserved.")))},s=(a(197),a(255)),d=a(542),m=a(541),f=a(64),p=a(184),b=function(e){return i.a.createElement(d.a,{collapseOnSelect:!0,sticky:"top",expand:"md",bg:"dark",variant:"dark"},i.a.createElement(d.a.Brand,{variant:"light"}," ",i.a.createElement(o.a,{to:"/",style:v.link}," ",e.siteTitle)," "),i.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),i.a.createElement(d.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(m.a,null,e.isAuthenticated?function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,null,i.a.createElement(o.a,{style:v.link,activeStyle:v.linkActive,rel:"create",to:"/Create"},"Create Compass")),i.a.createElement(s.a,null,i.a.createElement(o.a,{style:v.link,activeStyle:v.linkActive,rel:"compass",to:"/Compass"},"Compass")),i.a.createElement(s.a,null,i.a.createElement(o.a,{style:v.link,activeStyle:v.linkActive,rel:"analytics",to:"/Analytics"},"Analytics")),i.a.createElement(s.a,null,i.a.createElement(o.a,{style:v.link,activeStyle:v.linkActive,rel:"profile",to:"/Profile"},"Profile")),i.a.createElement(s.a,null,i.a.createElement(o.a,{style:v.link,rel:"logout",to:"/",onClick:function(){e.logOutUser(),Object(o.c)("/")}},"Logout")))}(e):i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,null,i.a.createElement(o.a,{style:v.link,activeStyle:v.linkActive,rel:"about",to:"/About"},"About")),i.a.createElement(s.a,null,i.a.createElement(o.a,{style:v.link,activeStyle:v.linkActive,rel:"login",to:"/Login"},"Login"))))))},v={link:{color:"white",textDecoration:"none"},linkActive:{textDecoration:"underline"}};b.propsTypes={isAuthenticated:c.a.bool,authenticateUser:c.a.func};var E=Object(f.b)(function(e){return{isAuthenticated:e.state.isAuthenticated}},function(e){return{logOutUser:function(){return e(Object(p.b)())}}})(b),y=(a(161),function(e){var t=e.children;return i.a.createElement(o.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(E,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",null,t),i.a.createElement(u,null))},data:n})});y.propTypes={children:c.a.node.isRequired};t.a=y},252:function(e,t,a){"use strict";var n=a(12),r=a(16),i=a(178),l=a.n(i),c=a(0),o=a.n(c),u=a(183),s=a(216),d=o.a.forwardRef(function(e,t){var a=e.bsPrefix,i=e.variant,c=e.size,d=e.active,m=e.className,f=e.block,p=e.type,b=e.as,v=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),E=Object(u.b)(a,"btn"),y=l()(m,E,d&&"active",E+"-"+i,f&&E+"-block",c&&E+"-"+c);if(v.href)return o.a.createElement(s.a,Object(n.a)({},v,{as:b,innerRef:t,className:l()(y,v.disabled&&"disabled")}));var g=b||"button";return t&&(v.ref=t),o.a.createElement(g,Object(n.a)({},v,{type:p,className:y}))});d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},t.a=d},253:function(e,t,a){e.exports=a.p+"static/home-image-min-871f3afdd3baca83fa1427146356070f.jpg"},254:function(e,t,a){"use strict";var n=a(12),r=a(16),i=a(178),l=a.n(i),c=a(0),o=a.n(c),u=a(183),s=a(199),d=function(e){return o.a.forwardRef(function(t,a){return o.a.createElement("div",Object(n.a)({},t,{ref:a,className:l()(t.className,e)}))})},m=a(219),f=o.a.forwardRef(function(e,t){var a=e.bsPrefix,i=e.className,c=e.variant,s=e.as,d=Object(r.a)(e,["bsPrefix","className","variant","as"]),m=Object(u.b)(a,"card-img");return o.a.createElement(s,Object(n.a)({ref:t,className:l()(c?m+"-"+c:m,i)},d))});f.displayName="CardImg",f.defaultProps={as:"img",variant:null};var p=f,b=d("h5"),v=d("h6"),E=Object(s.a)("card-body"),y=o.a.forwardRef(function(e,t){var a=e.bsPrefix,i=e.className,s=e.bg,d=e.text,f=e.border,p=e.body,b=e.children,v=e.as,y=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=Object(u.b)(a,"card"),h=Object(c.useMemo)(function(){return{cardHeaderBsPrefix:g+"-header"}},[g]);return o.a.createElement(m.a.Provider,{value:h},o.a.createElement(v,Object(n.a)({ref:t},y,{className:l()(i,g,s&&"bg-"+s,d&&"text-"+d,f&&"border-"+f)}),p?o.a.createElement(E,null,b):b))});y.displayName="Card",y.defaultProps={as:"div",body:!1},y.Img=p,y.Title=Object(s.a)("card-title",{Component:b}),y.Subtitle=Object(s.a)("card-subtitle",{Component:v}),y.Body=E,y.Link=Object(s.a)("card-link",{Component:"a"}),y.Text=Object(s.a)("card-text",{Component:"p"}),y.Header=Object(s.a)("card-header"),y.Footer=Object(s.a)("card-footer"),y.ImgOverlay=Object(s.a)("card-img-overlay");t.a=y}}]);
//# sourceMappingURL=component---src-pages-index-js-637b14bc853e1e057799.js.map