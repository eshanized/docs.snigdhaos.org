"use strict";(self.webpackChunkdocs_snigdhaos_org=self.webpackChunkdocs_snigdhaos_org||[]).push([[711],{9331:(e,s,r)=>{r.r(s),r.d(s,{default:()=>o});r(6540);var a=r(8774),t=r(1312),i=r(1003),n=r(781),c=r(1107),l=r(4848);function d(e){let{year:s,posts:r}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.A,{as:"h3",id:s,children:s}),(0,l.jsx)("ul",{children:r.map((e=>(0,l.jsx)("li",{children:(0,l.jsxs)(a.A,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function h(e){let{years:s}=e;return(0,l.jsx)("section",{className:"margin-vert--lg",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:s.map(((e,s)=>(0,l.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,l.jsx)(d,{...e})},s)))})})})}function o(e){let{archive:s}=e;const r=(0,t.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),a=(0,t.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),d=function(e){const s=e.reduce(((e,s)=>{const r=s.metadata.date.split("-")[0],a=e.get(r)??[];return e.set(r,[s,...a])}),new Map);return Array.from(s,(e=>{let[s,r]=e;return{year:s,posts:r}}))}(s.blogPosts);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.be,{title:r,description:a}),(0,l.jsxs)(n.A,{children:[(0,l.jsx)("header",{className:"hero hero--primary",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(c.A,{as:"h1",className:"hero__title",children:r}),(0,l.jsx)("p",{className:"hero__subtitle",children:a})]})}),(0,l.jsx)("main",{children:d.length>0&&(0,l.jsx)(h,{years:d})})]})]})}}}]);