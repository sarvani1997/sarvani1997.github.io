import{j as c,R as d,a as h}from"./vendor.59a10014.js";const p=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function l(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=l(t);fetch(t.href,a)}};p();var m="/assets/Resume.b71a2699.pdf";const e=c.exports.jsx,i=c.exports.jsxs;function u(){return e("div",{className:"container",style:{backgroundImage:"url(/src/images/bg.png)"},children:i("div",{className:"about",children:[i("div",{className:"name",children:[e("p",{children:"Hello,"}),e("h4",{children:"I'm Sarvani"}),e("p",{children:"Full-Stack Developer"}),e("a",{className:"link",href:m,target:"_blank",children:"Download Resume"})]}),e("div",{className:"photo"})]})})}var f="/assets/myjournal.ebff176c.png",g="/assets/reddit.47013472.png",v="/assets/periodTracker.5ee360d2.png",b="/assets/whileIEat.ca224db2.png",k="/assets/vocab.8c5c0dd2.png",N="/assets/pinnacles.4c03fea2.png";let y=[{screenshot:N,title:"Pinnacles Infotech",link:"https://pinnacles-test.netlify.app/"},{screenshot:b,title:"While I Eat",desciption:"This web application is to view popular movies and tv shows and their streamimg platform.",link:"https://while-i-eat.onrender.com/",git:"https://github.com/sarvani1997/WhileIEat"},{screenshot:g,title:"Reddit",desciption:"Reddit clone application.",link:"https://reddit.onrender.com/sign_up",git:"https://github.com/sarvani1997/reddit"},{screenshot:k,title:"ABC",desciption:"kids learning app",link:"https://build-vocab.vercel.app/",git:"https://github.com/sarvani1997/build_vocab"},{screenshot:v,title:"Period  Tracker",desciption:"Here, the user can track and predict their period.",link:"https://period-tracker.onrender.com/",git:"https://github.com/sarvani1997/period-tracker"},{screenshot:f,title:"My Journal App",desciption:"A web app that lets users to note down thier daily work.",link:"https://journal-cf0q.onrender.com/",git:"https://github.com/sarvani1997/journal-app"}];function j(){return i("div",{children:[e("div",{className:"portfolio-title",children:"My Recent Work"}),e("div",{className:"portfolio",children:e("div",{className:"screenshot",children:y.map(r=>e("div",{className:"image",children:i("div",{className:"overlap",children:[e("img",{src:r.screenshot,alt:r.title}),e("h3",{className:"title",children:r.title}),i("div",{className:"links",children:[r.git&&e("a",{className:"btn-link-2",href:r.git,children:"Source Code"}),e("a",{className:"btn-link-2",href:r.link,children:"Website"})]})]})}))})})]})}function I(){return e("div",{className:"contact",style:{backgroundImage:"url(src/images/footer-bg.png)"},children:i("div",{className:"contact-section",children:[i("div",{className:"contact-section-header",children:[e("h2",{children:"Let's work together..."}),e("p",{children:"How do you take your coffee?"})]}),i("div",{className:"contact-links",children:[i("a",{id:"profile-link",href:"https://github.com/sarvani1997",target:"_blank",className:"btn contact-details",children:[e("i",{className:"fab fa-github"})," GitHub"]}),i("a",{href:"mailto:sarvani.sanaboyina@gmail.com",className:"btn contact-details",children:[e("i",{className:"fas fa-at"})," Send a mail"]}),i("a",{href:"tel:7893321144",className:"btn contact-details",children:[e("i",{className:"fas fa-mobile-alt"})," Call me"]})]})]})})}d.render(i(h.StrictMode,{children:[e(u,{}),e(j,{}),e(I,{})]}),document.getElementById("root"));
