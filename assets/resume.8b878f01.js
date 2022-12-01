import{d as g,c as n,a as e,t as s,r as _,o as a,u as b,b as r,e as c,w as d,F as o,f as l}from"./app.4e357445.js";const y={class:"mb-4"},w={class:"text-lg md:text-2xl mb-2"},v={class:"text-gray-300"},k=g({__name:"ResumeSection",props:{title:{type:String}},setup(p){const i=p;return(h,f)=>(a(),n("section",y,[e("h2",w,s(String(i.title).toUpperCase()),1),e("div",v,[_(h.$slots,"default")])]))}}),S={name:"Mahdi Karimi",label:"Software Engineer",image:"",email:"mhdi_kr@outlook.com",phone:null,url:"https://mahdikarimi.com",summary:"I am a responsible and competent engineer with +3 years of rich hands-on experience in software engineering. My greatest strength is not giving up on problems and my will for finding solutions for them. As human beings we are here to grow, and in my professional work I'm eager to learn and will always try to help others grow with me.",location:{address:"Tehran, Iran",postalCode:null,city:"Tehran",countryCode:"IR",region:"Iran"},profiles:[{network:"Twitter",username:"Mhdi_kr",url:"https://twitter.com/Mhdi_kr"},{network:"Linkedin",username:"Mhdi-kr",url:"https://www.linkedin.com/in/Mhdi-kr/"}]},D=[{name:"Alibaba Travels Co.",position:"Software Engineer",url:"https://www.alibaba.ir/hotel/",startDate:"APRIL 2021",endDate:"PRESENT",summary:"Alibaba Travels Co. is the pioneer of online travel services in Iran. It offers domestic and international flight, train, bus ticketing, hotel, tours and accommodation reservations.",highlights:["Developed a versatile golang framework helping the company quickly integrate 10+ hotel data providers saving large amount of resources and time","Refactored large scale hotel central reservation system (CRS) within 4 months from vue 2 and webpack to vue 3, typescript and vite","Maintained and refactored Nuxt Back office panels using vue 2","Refactored Alibaba.ir hotel views with typescript and vue3","Contributed on professional career path of company's frontend engineers","Contributed on company's OSS projects such as Vuilerplate","Developed visualization tools to improve DX and onboarding processes","Contribution and maintenance of alibaba.ir/hotel frontend website using Vue 3 and typescript"]},{name:"Snapp! Market",position:"Software Engineer",url:"https://snapp.market/",startDate:"FEBRUARY 2021",endDate:"OCTOBER 2022",summary:"Snapp! Market is an online grocery platform providing a wide range of assortment from fresh fruits and vegetables to beauty and wellness products.",highlights:["Practiced requirements engineering and research and development on multiple IoT projects","Developed esp8266 hardware firmware using C++ and Arduino libraries","Developed required infrastructure i.e. server and client panels for needed IoT management systems","Worked directly with other engineers building production-ready PCBs and physical products very rapidly"]},{name:"Freelance",position:"Web Developer",url:null,startDate:"2018",endDate:"APRIL 2021",summary:"I did freelance web development for numerous domestic and foreign clients",highlights:["Created and maintained multiple wordpress projects","Advised multiple clients on single page applications and their bushiness websites","Developed telegram bots helping bushiness reach more customers faster and easier","Developed numerous e-commerce projects for multiple clients","Developed a dynamic restaurant digital signage system"]}],x=[{organization:"Alibaba Academy",position:"Volunteer",url:"https://organization.com/",startDate:"November 2022",endDate:"PRESENT",summary:"Talks, mentorship and teaching for +5 eager developers and starters to perform better across teams or job candidates to land a job at the company",highlights:[]}],C=[{institution:"BNUT - Babol Noshirvani University of Technology",url:"https://institution.com/",area:"Computer Engineering",studyType:"Bachelor of Science",startDate:"2019",endDate:"PRESENT",score:null,courses:null}],E=[{name:"Technical Blog Posts",publisher:"Medium",releaseDate:null,url:"https://medium.com/@mhdi_kr",summary:"I write technical and non technical blogs posts and share them with the world on medium"}],T=[{name:"Software Engineering",level:null,keywords:["Git version control","Semantic HTML5, CSS3","TailwindCSS, BulmaCSS and BootstrapCSS","JavaScript (ECMAScript 6+), TypeScript","Vue2, Vue3 and Nuxt.js","React.js, Next.js","Software Engineering","mongodb, postgresql, influxdb","ELK stack, prometheus","Continuous Integration, Continuous Development","Docker, Kubernetes and containerization","Node.js","Golang","Agile and scrum"]}],R=[{language:"Farsi",fluency:"Native speaker"},{language:"English",fluency:"Bilingual proficiency"}],I=[{name:"Creating beautiful, responsive, fast and accessible UIs",href:"",keywords:[]},{name:"Reading technical books and writing my thoughts",href:"",keywords:[]},{name:"Building computers",href:"",keywords:[]},{name:"Embedded programming, arduinos and raspberry pies",href:"",keywords:[]},{name:"Renewable energy, Solar panels and automated houses",href:"",keywords:[]}],j=[{name:"Open Source Projects and Contributions",description:"I spend my free times developing fun and practical projects that can teach me new things about new subjects",highlights:["VSCode Webvue Extension","Wireguard Insights"],keywords:["HTML"],startDate:"null",endDate:"null",url:"https://github.com/Mhdi-kr",roles:[],entity:"Entity",type:"application"},{name:"Radio Upstream Podcast",description:"Description\u2026",highlights:[],keywords:[],startDate:"2019-01-01",endDate:"2021-01-01",url:"https://www.radioupstream.com",roles:[],entity:"Entity",type:"application"}],B={basics:S,work:D,volunteer:x,education:C,publications:E,skills:T,languages:R,interests:I,projects:j},M={class:"container mx-auto p-8 md:pt-8 md:px-56 text-sm md:text-base"},A={class:"mb-4"},N={class:"flex flex-col"},P={class:"text-4xl"},V={class:"text-lg"},L=e("hr",{class:"mb-4"},null,-1),U={class:"mb-1 text-lg"},z={class:"font-bold"},F={key:0},$=["href"],q={key:1},K={class:"text-sm"},O={class:"list-disc"},W={class:"flex flex-col mb-1"},H={class:"font-bold"},G={class:"list-disc"},J={class:"font-bold mb-1"},X={class:"text-sm"},Y={class:"list-disc"},Q={class:"flex flex-col"},Z={class:"font-bold"},ee=["href"],te={key:1},se={class:"font-bold"},ne={class:"text-sm"},ae=["href"],re=g({__name:"resume",setup(p){const i=B;return b({title:"Mahdi Karimi | Resume",meta:[{name:"description",content:i.basics.summary}]}),(h,f)=>{const u=k;return a(),n("main",M,[e("section",A,[e("h1",N,[e("span",P,s(r(i).basics.name),1),e("span",V,s(r(i).basics.label),1)])]),L,c(u,{title:"summary"},{default:d(()=>[e("span",null,s(r(i).basics.summary),1)]),_:1}),c(u,{title:"experience"},{default:d(()=>[(a(!0),n(o,null,l(r(i).work,t=>(a(),n("ul",{class:"mb-4",key:String(t.url)},[e("li",null,[e("h3",U,[e("span",z,[t.url?(a(),n("span",F,[e("a",{target:"_blank",href:t.url},s(t.name),9,$)])):(a(),n("span",q,s(t.name),1))]),e("span",K," ("+s(t.startDate)+" - "+s(t.endDate)+") ",1)]),e("ul",O,[(a(!0),n(o,null,l(t.highlights,m=>(a(),n("li",null,s(m),1))),256))])])]))),128))]),_:1}),c(u,{title:"projects"},{default:d(()=>[e("ul",null,[(a(!0),n(o,null,l(r(i).projects,t=>(a(),n("li",W,[e("span",H,s(t.name),1),e("span",null,s(t.description),1),e("ul",G,[(a(!0),n(o,null,l(t.highlights,m=>(a(),n("li",null,s(m),1))),256))])]))),256))])]),_:1}),c(u,{title:"volunteer"},{default:d(()=>[e("ul",null,[(a(!0),n(o,null,l(r(i).volunteer,t=>(a(),n("li",null,[e("div",null,[e("span",J,s(t.organization),1),e("span",X," ("+s(t.startDate)+" - "+s(t.endDate)+") ",1)]),e("span",null,s(t.summary),1),e("ul",Y,[(a(!0),n(o,null,l(t.highlights,m=>(a(),n("li",null,[e("span",null,s(m),1)]))),256))])]))),256))])]),_:1}),c(u,{title:"publications"},{default:d(()=>[e("ul",null,[(a(!0),n(o,null,l(r(i).publications,t=>(a(),n("li",Q,[e("span",Z,[t.url?(a(),n("a",{key:0,href:t.url},s(t.name),9,ee)):(a(),n("span",te,s(t.name),1))]),e("span",null,s(t.summary),1)]))),256))])]),_:1}),c(u,{title:"education"},{default:d(()=>[e("ul",null,[(a(!0),n(o,null,l(r(i).education,t=>(a(),n("li",null,[e("span",se,s(t.institution),1),e("span",ne," ("+s(t.startDate)+" - "+s(t.endDate)+") ",1),e("span",null,s(t.studyType),1)]))),256))])]),_:1}),c(u,{title:"skills"},{default:d(()=>[e("ul",null,[(a(!0),n(o,null,l(r(i).skills[0].keywords,t=>(a(),n("li",null,s(t),1))),256))])]),_:1}),c(u,{title:"interests"},{default:d(()=>[e("ul",null,[(a(!0),n(o,null,l(r(i).interests,t=>(a(),n("li",null,s(t.name),1))),256))])]),_:1}),c(u,{title:"contact"},{default:d(()=>[e("address",null,s(r(i).basics.location.address),1),e("address",null,[e("a",{href:"mailto:"+r(i).basics.email},s(r(i).basics.email),9,ae)])]),_:1})])}}});export{re as default};