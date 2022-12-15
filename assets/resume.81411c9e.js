import{d as g,c as s,a as e,t as n,r as _,o as a,u as b,b as i,e as c,w as u,F as r,f as l}from"./app.f48a626b.js";const y={class:"mb-4"},w={class:"text-lg md:text-2xl mb-2"},v={class:"text-gray-300"},k=g({__name:"ResumeSection",props:{title:{type:String}},setup(p){const o=p;return(h,f)=>(a(),s("section",y,[e("h2",w,n(String(o.title).toUpperCase()),1),e("div",v,[_(h.$slots,"default")])]))}}),S={name:"Mahdi Karimi",label:"Software Engineer",image:"",email:"mhdi_kr@outlook.com",phone:null,url:"https://mahdikarimi.com",summary:"I am a responsible and competent engineer with +3 years of rich hands-on experience in software engineering. My greatest strength is not giving up on problems and my will for finding solutions for them. As human beings we are here to grow, and in my professional work I'm eager to learn and will always try to help others grow alongside me. I specialize in Frontend development and am currently perfecting my craft in software engineering including backend development and infrastructure.",location:{address:"Tehran, Iran",postalCode:null,city:"Tehran",countryCode:"IR",region:"Iran"},profiles:[{network:"Twitter",username:"Mhdi_kr",url:"https://twitter.com/Mhdi_kr"},{network:"Linkedin",username:"Mhdi-kr",url:"https://www.linkedin.com/in/Mhdi-kr/"}]},D=[{name:"Alibaba Travels Co.",position:"Software Engineer",url:"https://www.alibaba.ir/hotel/",startDate:"APRIL 2021",endDate:"PRESENT",summary:"Alibaba Travels Co. is the pioneer of online travel services in Iran. It offers domestic and international flight, train, bus ticketing, hotel, tours and accommodation reservations.",highlights:["Developed Golang Software helping the company rapidly integrate 10+ data providers saving large amount of resources and time","Refactored large scale hotel central reservation system (CRS) within 3 months (from webpack, JS and vue2 to vite, TS and vue3)","Maintained and refactored several back office panels and javascript/vue2 projects","Contribution and maintenance of alibaba.ir/hotel frontend website using Vue 3 and typescript","Developed visualization tools to improve DX and onboarding processes for other developers"]},{name:"Snapp! Market",position:"Software Engineer",url:"https://snapp.market/",startDate:"FEBRUARY 2021",endDate:"OCTOBER 2022",summary:"Snapp! Market is an online grocery platform providing a wide range of assortment from fresh fruits and vegetables to beauty and wellness products.",highlights:["Practiced requirements engineering and research and development on multiple IoT projects","Developed esp8266 hardware firmware using C++ and Arduino libraries","Developed required infrastructure i.e. servers and client panels for needed IoT management systems","Worked directly with other engineers building production-ready PCBs and physical products very rapidly"]},{name:"Freelance",position:"Web Developer",url:null,startDate:"2018",endDate:"APRIL 2021",summary:"I did freelance web development for numerous domestic and foreign clients",highlights:["Maintained multiple wordpress websites","Advised multiple clients on single page applications and their business websites","Developed telegram bots helping business reach more customers faster and easier while lowering their costs","Developed a dynamic restaurant digital signage system"]}],x=[{organization:"Alibaba Academy",position:"Volunteer",url:"https://organization.com/",startDate:"November 2022",endDate:"PRESENT",summary:"Talks, mentorship and teaching for +5 eager developers and starters to perform better across teams or job candidates to land a job at the company",highlights:["Contributed on professional career path of company's frontend engineers","Contributed on company's OSS projects such as vuilerplate"]}],C=[{institution:"BNUT - Babol Noshirvani University of Technology",url:"https://institution.com/",area:"Computer Engineering",studyType:"Bachelor of Science",startDate:"2019",endDate:"PRESENT",score:null,courses:null}],T=[{name:"Medium Blog Posts",publisher:"Medium",releaseDate:null,url:"https://medium.com/@mhdi_kr",summary:"I write technical and non technical blogs posts and share them with the world on medium"}],E=[{name:"General",level:null,keywords:["Git version control","Continuous Integration, Continuous Development","Agile and scrum"]},{name:"Frontend Development",level:null,keywords:["Semantic HTML 5, CSS 3","TailwindCSS, BulmaCSS and BootstrapCSS","JavaScript (ECMAScript 6+), TypeScript","Unit, component and integration testing","Vue 2, Vue 3 and Nuxt.js","React.js, Next.js"]},{name:"Backend Development",level:null,keywords:["Node.js","Golang","Docker, Kubernetes","MongoDB, Postgresql, influxdb","ELK stack, prometheus"]}],I=[{language:"Farsi",fluency:"Native speaker"},{language:"English",fluency:"Bilingual proficiency"}],M=[{name:"Creating beautiful, responsive, fast and accessible UIs",href:"",keywords:[]},{name:"Reading technical books and writing my thoughts",href:"",keywords:[]},{name:"Building computers",href:"",keywords:[]},{name:"Embedded programming, Arduinos and raspberry pies",href:"",keywords:[]},{name:"Renewable energy, Solar panels and automated houses",href:"",keywords:[]}],R=[{name:"Open Source Projects and Contributions",description:"I spend my free times developing fun and practical projects that can teach me new things about new subjects",highlights:["Pomodomore","VSCode Webvue Extension","Wireguard Insights"],keywords:["HTML"],startDate:"null",endDate:"null",url:"https://github.com/Mhdi-kr",roles:[],entity:"Entity",type:"application"},{name:"Radio Upstream Podcast",description:"I occasionally record podcast sessions (especially with my colleagues) to talk about our hands-on experiences and hard-to-grasp concepts in software engineering.",highlights:[],keywords:[],startDate:"2019-01-01",endDate:"2021-01-01",url:"https://t.me/+y0kqSgMLP4NkZWY8",roles:[],entity:"Entity",type:"application"}],B={basics:S,work:D,volunteer:x,education:C,publications:T,skills:E,languages:I,interests:M,projects:R},j={class:"container mx-auto p-8 md:pt-8 md:px-56 text-sm md:text-base"},A={class:"mb-4"},N={class:"flex flex-col"},P={class:"text-4xl"},L={class:"text-lg"},F=e("hr",{class:"mb-4"},null,-1),U={class:"mb-1 text-lg"},V={class:"font-bold"},z={key:0},W=["href"],$={key:1},q={class:"text-sm"},G={class:"list-disc"},K={class:"flex flex-col mb-1"},O=["href"],H={class:"list-disc"},J={class:"font-bold mb-1"},Y={class:"text-sm"},X={class:"list-disc"},Z={class:"flex flex-col"},Q={class:"font-bold"},ee=["href"],te={key:1},ne={class:"font-bold"},se={class:"text-sm"},ae={class:"mb-2"},oe={class:"font-bold"},ie=["href"],le=g({__name:"resume",setup(p){const o=B;return b({title:"Mahdi Karimi | Resume",meta:[{name:"description",content:o.basics.summary}]}),(h,f)=>{const d=k;return a(),s("main",j,[e("section",A,[e("h1",N,[e("span",P,n(i(o).basics.name),1),e("span",L,n(i(o).basics.label),1)])]),F,c(d,{title:"summary"},{default:u(()=>[e("span",null,n(i(o).basics.summary),1)]),_:1}),c(d,{title:"experience"},{default:u(()=>[(a(!0),s(r,null,l(i(o).work,t=>(a(),s("ul",{class:"mb-4",key:String(t.url)},[e("li",null,[e("h3",U,[e("span",V,[t.url?(a(),s("span",z,[e("a",{target:"_blank",href:t.url},n(t.name),9,W)])):(a(),s("span",$,n(t.name),1))]),e("span",q," ("+n(t.startDate)+" - "+n(t.endDate)+") ",1)]),e("ul",G,[(a(!0),s(r,null,l(t.highlights,m=>(a(),s("li",null,n(m),1))),256))])])]))),128))]),_:1}),c(d,{title:"projects"},{default:u(()=>[e("ul",null,[(a(!0),s(r,null,l(i(o).projects,t=>(a(),s("li",K,[e("a",{href:t.url,class:"font-bold"},n(t.name),9,O),e("span",null,n(t.description),1),e("ul",H,[(a(!0),s(r,null,l(t.highlights,m=>(a(),s("li",null,n(m),1))),256))])]))),256))])]),_:1}),c(d,{title:"volunteer"},{default:u(()=>[e("ul",null,[(a(!0),s(r,null,l(i(o).volunteer,t=>(a(),s("li",null,[e("div",null,[e("span",J,n(t.organization),1),e("span",Y," ("+n(t.startDate)+" - "+n(t.endDate)+") ",1)]),e("span",null,n(t.summary),1),e("ul",X,[(a(!0),s(r,null,l(t.highlights,m=>(a(),s("li",null,[e("span",null,n(m),1)]))),256))])]))),256))])]),_:1}),c(d,{title:"publications"},{default:u(()=>[e("ul",null,[(a(!0),s(r,null,l(i(o).publications,t=>(a(),s("li",Z,[e("span",Q,[t.url?(a(),s("a",{key:0,href:t.url},n(t.name),9,ee)):(a(),s("span",te,n(t.name),1))]),e("span",null,n(t.summary),1)]))),256))])]),_:1}),c(d,{title:"education"},{default:u(()=>[e("ul",null,[(a(!0),s(r,null,l(i(o).education,t=>(a(),s("li",null,[e("span",ne,n(t.institution),1),e("span",se," ("+n(t.startDate)+" - "+n(t.endDate)+") ",1),e("span",null,n(t.studyType),1)]))),256))])]),_:1}),c(d,{title:"skills"},{default:u(()=>[(a(!0),s(r,null,l(i(o).skills,t=>(a(),s("ul",ae,[e("h4",oe,n(t.name),1),(a(!0),s(r,null,l(t.keywords,m=>(a(),s("li",null,n(m),1))),256))]))),256))]),_:1}),c(d,{title:"interests"},{default:u(()=>[e("ul",null,[(a(!0),s(r,null,l(i(o).interests,t=>(a(),s("li",null,n(t.name),1))),256))])]),_:1}),c(d,{title:"contact"},{default:u(()=>[e("address",null,n(i(o).basics.location.address),1),e("address",null,[e("a",{href:"mailto:"+i(o).basics.email},n(i(o).basics.email),9,ie)])]),_:1})])}}});export{le as default};
