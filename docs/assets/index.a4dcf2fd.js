import{j as c,R as d,a as h}from"./vendor.59a10014.js";const p=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function l(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=l(t);fetch(t.href,i)}};p();var m="/assets/bg.a6a54f70.png",u="/assets/Resume.b71a2699.pdf";const e=c.exports.jsx,a=c.exports.jsxs;function f(){return e("div",{className:"container",style:{backgroundImage:m},children:a("div",{className:"about",children:[a("div",{className:"name",children:[e("p",{children:"Hello,"}),e("h4",{children:"I'm Sarvani"}),e("p",{children:"Full-Stack Developer"}),e("a",{className:"link",href:u,target:"_blank",children:"Download Resume"})]}),e("div",{className:"photo"})]})})}var v="/assets/myjournal.ebff176c.png",g="/assets/reddit.47013472.png",b="/assets/periodTracker.5ee360d2.png",k="/assets/whileIEat.ca224db2.png",N="/assets/vocab.8c5c0dd2.png",y="/assets/pinnacles.4c03fea2.png";let j=[{screenshot:y,title:"Pinnacles Infotech",link:"https://pinnacles-test.netlify.app/"},{screenshot:k,title:"While I Eat",desciption:"This web application is to view popular movies and tv shows and their streamimg platform.",link:"https://while-i-eat.onrender.com/",git:"https://github.com/sarvani1997/WhileIEat"},{screenshot:g,title:"Reddit",desciption:"Reddit clone application.",link:"https://reddit.onrender.com/sign_up",git:"https://github.com/sarvani1997/reddit"},{screenshot:N,title:"ABC",desciption:"kids learning app",link:"https://build-vocab.vercel.app/",git:"https://github.com/sarvani1997/build_vocab"},{screenshot:b,title:"Period  Tracker",desciption:"Here, the user can track and predict their period.",link:"https://period-tracker.onrender.com/",git:"https://github.com/sarvani1997/period-tracker"},{screenshot:v,title:"My Journal App",desciption:"A web app that lets users to note down thier daily work.",link:"https://journal-cf0q.onrender.com/",git:"https://github.com/sarvani1997/journal-app"}];function I(){return a("div",{children:[e("div",{className:"portfolio-title",children:"My Recent Work"}),e("div",{className:"portfolio",children:e("div",{className:"screenshot",children:j.map(r=>e("div",{className:"image",children:a("div",{className:"overlap",children:[e("img",{src:r.screenshot,alt:r.title}),e("h3",{className:"title",children:r.title}),a("div",{className:"links",children:[r.git&&e("a",{className:"btn-link-2",href:r.git,children:"Source Code"}),e("a",{className:"btn-link-2",href:r.link,children:"Website"})]})]})}))})})]})}var R="/assets/footer-bg.a4980088.png";function w(){return e("div",{className:"contact",style:{backgroundImage:R},children:a("div",{className:"contact-section",children:[a("div",{className:"contact-section-header",children:[e("h2",{children:"Let's work together..."}),e("p",{children:"How do you take your coffee?"})]}),a("div",{className:"contact-links",children:[a("a",{id:"profile-link",href:"https://github.com/sarvani1997",target:"_blank",className:"btn contact-details",children:[e("i",{className:"fab fa-github"})," GitHub"]}),a("a",{href:"mailto:sarvani.sanaboyina@gmail.com",className:"btn contact-details",children:[e("i",{className:"fas fa-at"})," Send a mail"]}),a("a",{href:"tel:7893321144",className:"btn contact-details",children:[e("i",{className:"fas fa-mobile-alt"})," Call me"]})]})]})})}d.render(a(h.StrictMode,{children:[e(f,{}),e(I,{}),e(w,{})]}),document.getElementById("root"));