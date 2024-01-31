"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[664],{3954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=n(5893),r=n(1151);const s={id:"pf-intro",title:"Prompt Flow On AzureML",sidebar_position:1,slug:"/prompt-flow-overview"},i=void 0,a={id:"azure-prompt-flow/pf-intro",title:"Prompt Flow On AzureML",description:"Prompt engineering is a tedious process that involves a lot tasks and components.  Developments have next determine what the input or prompts are going to be and what the actions we want in return.  In order to achieve, there are a lot of parts.  For instance, the prompts are responses need to be tokenize.  Next, depending on that the action that will be the output, we need to identify where that information is coming from.  Is the information coming from an API, or an LLM model?  When data is returned, does it need preprocessing?  How is the best response identify?",source:"@site/docs/azure-prompt-flow/intro.md",sourceDirName:"azure-prompt-flow",slug:"/prompt-flow-overview",permalink:"/responsible-ai-hub/docs/prompt-flow-overview",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"pf-intro",title:"Prompt Flow On AzureML",sidebar_position:1,slug:"/prompt-flow-overview"},sidebar:"promptFlowSidebar",next:{title:"1\ufe0f\u20e3 | Build Lab Environment",permalink:"/responsible-ai-hub/docs/build-workshop-enviroment"}},l={},c=[{value:"\ud83c\udfaf | Objectives:",id:"--objectives",level:2},{value:"\u2705 |Prerequisites:",id:"-prerequisites",level:2},{value:"\ud83d\udcda | Log in to your Azure account",id:"--log-in-to-your-azure-account",level:2}];function d(e){const t={a:"a",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Prompt engineering is a tedious process that involves a lot tasks and components.  Developments have next determine what the input or prompts are going to be and what the actions we want in return.  In order to achieve, there are a lot of parts.  For instance, the prompts are responses need to be tokenize.  Next, depending on that the action that will be the output, we need to identify where that information is coming from.  Is the information coming from an API, or an LLM model?  When data is returned, does it need preprocessing?  How is the best response identify?"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Prompt Flow Vector Token Embed",src:n(2096).Z+"",width:"2077",height:"502"})}),"\n",(0,o.jsx)(t.p,{children:"That\u2019s where Azure Prompt Flow, is valuable if providing a user-friendly logical flow to structure the different tasks involves and their dependencies.  To understand how to utilize Prompt Flow to expedite process of using an LLM that takes input and generates.  We are going to use a dental clinic\u2019s virtual chat agent takes input from users and provides an answer.  Since using OpenAI or any other LLM model is not going to know specific information about our Contoso dental client, we are going to use data for our clinic."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"RAG Pattern",src:n(9885).Z+"",width:"806",height:"102"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Custom Data"}),":"]}),"\n",(0,o.jsx)(t.h2,{id:"--objectives",children:"\ud83c\udfaf | Objectives:"}),"\n",(0,o.jsx)(t.p,{children:"After the workshop, you will learn how to:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Create a chatbot that uses an LLM model to generate responses"}),"\n",(0,o.jsx)(t.li,{children:"Convert your own data to a vector index"}),"\n",(0,o.jsx)(t.li,{children:"Use the LLM tool to create prompts and the response"}),"\n",(0,o.jsx)(t.li,{children:"Embed user input to search a vector index"}),"\n",(0,o.jsx)(t.li,{children:"Use Prompt tool to construct rules how your LLM should response."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"-prerequisites",children:"\u2705 |Prerequisites:"}),"\n",(0,o.jsx)(t.p,{children:"To complete this workshop, you need the following:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Login or Signup for a ",(0,o.jsx)(t.a,{href:"https://azure.microsoft.com/free/",children:"Free Azure account"})]}),"\n",(0,o.jsx)(t.li,{children:"Basic understanding of Generative AI concepts"}),"\n",(0,o.jsxs)(t.li,{children:["If you're new to generative AI, we recommend you take the ",(0,o.jsx)(t.a,{href:"https://github.com/microsoft/generative-ai-for-beginners?WT.mc_id=academic-105485-koreyst",children:"Generative AI for Beginners"})," before you start this workshop."]}),"\n",(0,o.jsx)(t.li,{children:"GitHub account with access to GitHub Codespaces."}),"\n",(0,o.jsx)(t.li,{children:"Install Python 3.8 or higher."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"--log-in-to-your-azure-account",children:"\ud83d\udcda | Log in to your Azure account"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Sign in to the ",(0,o.jsx)(t.a,{href:"https://portal.azure.com/",children:"Azure portal"}),".  Follow the instructions to authenticate an email and password."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Azure Portal",src:n(8716).Z+"",width:"1119",height:"886"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"NOTE"}),": ",(0,o.jsx)(t.em,{children:"If you were provided a subscription with a usernae and password, you can use that to login."})]}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Select ",(0,o.jsx)(t.strong,{children:"Resource groups"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Resource Groups",src:n(1060).Z+"",width:"2939",height:"452"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"This should list your resource groups.  If you don't have any, you can create one later in the labs."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},9885:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/rag-pattern-1b2e83defdb1354c2068eb4f0a516f56.png"},8716:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/azure-login-50852ddb6fbd9d6841841d25ceade5a1.png"},1060:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/azure-resource-group-5def4dc35e551b6b319a23f5f042e126.png"},2096:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vector-token-embed-0756002b21b7c6e86c0758d40a6ff5aa.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var o=n(7294);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);