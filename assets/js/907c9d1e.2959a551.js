"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[727],{3657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var r=n(5893),o=n(1151);const s={id:"rai-promptflow-walkthru",title:"Video Walkthrough",sidebar_position:3,slug:"/rai-promptflow-walkthru"},i=void 0,l={id:"azure-prompt-flow/rai-promptflow-walkthru",title:"Video Walkthrough",description:"The Azure ML Prompt Flow labs takes about an hour to complete end-to-end. It can take longer if you factor in time for exploration and data entry. You might also run into issues or have questions about what should have happened at a specific point in the lab, to help you debug or understand concepts better.",source:"@site/docs/azure-prompt-flow/walkthrough.md",sourceDirName:"azure-prompt-flow",slug:"/rai-promptflow-walkthru",permalink:"/responsible-ai-hub/docs/rai-promptflow-walkthru",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"rai-promptflow-walkthru",title:"Video Walkthrough",sidebar_position:3,slug:"/rai-promptflow-walkthru"},sidebar:"promptFlowSidebar",previous:{title:"6\ufe0f\u20e3 | Evaluate Chat Agent",permalink:"/responsible-ai-hub/docs/evaluate-chatbot"},next:{title:"Training Materials",permalink:"/responsible-ai-hub/docs/rai-promptflow-slides"}},a={},h=[{value:"1. Prepare Environment",id:"1-prepare-environment",level:3},{value:"2. Load Data into Vector Datastore",id:"2-load-data-into-vector-datastore",level:3},{value:"3. API connections and Compute runtime",id:"3-api-connections-and-compute-runtime",level:3},{value:"4. Create a Chat Agent",id:"4-create-a-chat-agent",level:3},{value:"5. Evaluate Chat flow performance",id:"5-evaluate-chat-flow-performance",level:3}];function d(e){const t={a:"a",em:"em",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Azure ML Prompt Flow"})," labs takes about an hour to complete end-to-end. It can take longer if you factor in time for exploration and data entry. You might also run into issues or have questions about what ",(0,r.jsx)(t.em,{children:"should have happened"})," at a specific point in the lab, to help you debug or understand concepts better."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"This video recording of the labs can help"}),". The tables below show you the timestamps for each relevant step, within this video. Just visit the YouTube page and open the description to get ",(0,r.jsx)(t.em,{children:"pre-linked"})," key moments to jump directly to the relevant segments to review walkthrough steps for reference."]}),"\n",(0,r.jsx)("iframe",{width:"600",height:"400",src:"https://www.youtube.com/embed/OZpgOToBDqw",title:"Azure ML Prompt Flow - Exercise Walkthrough",frameborder:"0",allowfullscreen:!0}),"\n",(0,r.jsx)(t.h3,{id:"1-prepare-environment",children:"1. Prepare Environment"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=210",children:(0,r.jsx)(t.strong,{children:"00:03:30"})})," | Launch GitHub codespace for Lab"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=271",children:(0,r.jsx)(t.strong,{children:"00:04:31"})})," | Prompt Flow overview (PowerPoint)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=2204",children:(0,r.jsx)(t.strong,{children:"00:36:44"})})," | Open VS Code. Login to Azure."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=2377",children:(0,r.jsx)(t.strong,{children:"00:39:37"})})," | Create Azure resource Set env variables. Save config to conflig.json"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=3018",children:(0,r.jsx)(t.strong,{children:"00:50:18"})})," | Download conflig.json. Select Kernel. Run All."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"2-load-data-into-vector-datastore",children:"2. Load Data into Vector Datastore"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=3171",children:(0,r.jsx)(t.strong,{children:"00:52:51"})})," | Authenticate to Azure ML Studio"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=3212",children:(0,r.jsx)(t.strong,{children:"00:53:32"})})," | load your data source and destination"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=3320",children:(0,r.jsx)(t.strong,{children:"00:55:20"})})," | create compute instance"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=3325",children:(0,r.jsx)(t.strong,{children:"00:55:25"})})," | create OpenAI connection"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=3355",children:(0,r.jsx)(t.strong,{children:"00:55:55"})})," | use text embedding model deployment. submit pipeline job"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=3407",children:(0,r.jsx)(t.strong,{children:"00:56:47"})})," | \u23f3 Takes ~10 mins. Monitor Vector Index job."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=3432",children:(0,r.jsx)(t.strong,{children:"00:57:12"})})," |  Get vector datastore path."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"3-api-connections-and-compute-runtime",children:"3. API connections and Compute runtime"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=3536",children:(0,r.jsx)(t.strong,{children:"00:58:56"})}),"  |  Add or Update API Connection"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=3585",children:(0,r.jsx)(t.strong,{children:"00:59:45"})}),"  |  Create a Runtime"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"4-create-a-chat-agent",children:"4. Create a Chat Agent"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=4185",children:(0,r.jsx)(t.strong,{children:"01:09:45"})})," |  Add Embeddings for input"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=4329",children:(0,r.jsx)(t.strong,{children:"01:12:08"})}),"  |  Add Vector db Lookup. Use your own data"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=4457",children:(0,r.jsx)(t.strong,{children:"01:14:17"})}),"  |  Add System Prompt and rules"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=4681",children:(0,r.jsx)(t.strong,{children:"01:18:01"})}),"  |  Add response field"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=4810",children:(0,r.jsx)(t.strong,{children:"01:20:10"})}),"  |  Test the chat agent"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=5073",children:(0,r.jsx)(t.strong,{children:"01:24:33"})}),"  |  Add prompt variants"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=5352",children:(0,r.jsx)(t.strong,{children:"01:29:12"})}),"  |  Test Chat with another prompt variant"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"5-evaluate-chat-flow-performance",children:"5. Evaluate Chat flow performance"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=5506",children:(0,r.jsx)(t.strong,{children:"01:31:46"})})," | Add Evaluation"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=5588",children:(0,r.jsx)(t.strong,{children:"01:33:08"})})," | Choose variant(s) to evaluate"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=5621",children:(0,r.jsx)(t.strong,{children:"01:33:41"})})," | Add test data"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=5690",children:(0,r.jsx)(t.strong,{children:"01:34:50"})})," | Select Evaluation template"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=5760",children:(0,r.jsx)(t.strong,{children:"01:36:00"})})," | Select performance metrics.  Mapping test data fields"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=5913",children:(0,r.jsx)(t.strong,{children:"01:38:33"})})," | \u23f3 Run Evaluation. Takes ~20 mins."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://youtu.be/OZpgOToBDqw?t=5958",children:(0,r.jsx)(t.strong,{children:"01:39:18"})})," | View Evaluation results"]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var r=n(7294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);