"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[999],{7307:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=t(5893),s=t(1151);const r={id:"pf-add-flow-connection-lab3'",title:"Lab# 3: Add flow connections",sidebar_position:3,slug:"/add-flow-connections"},i=void 0,l={id:"azure-prompt-flow/portal/lab3-add-flow-connections/pf-add-flow-connection-lab3'",title:"Lab# 3: Add flow connections",description:"To use Prompt Flow, you need to enable the feature in Azure ML studio.  To enable the feature, complete the following steps:",source:"@site/docs/azure-prompt-flow/portal/lab3-add-flow-connections/lab3-add-flow-connection.md",sourceDirName:"azure-prompt-flow/portal/lab3-add-flow-connections",slug:"/add-flow-connections",permalink:"/responsible-ai-hub/docs/add-flow-connections",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"pf-add-flow-connection-lab3'",title:"Lab# 3: Add flow connections",sidebar_position:3,slug:"/add-flow-connections"},sidebar:"promptFlowSidebar",previous:{title:"Lab# 3: bring your own data",permalink:"/responsible-ai-hub/docs/bring-your-data"},next:{title:"Lab# 4: Create chatbot template",permalink:"/responsible-ai-hub/docs/create-chatbot-template"}},c={},d=[{value:"Add Flow connections",id:"add-flow-connections",level:2},{value:"Create a Runtime",id:"create-a-runtime",level:2}];function a(e){const n={a:"a",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"To use Prompt Flow, you need to enable the feature in Azure ML studio.  To enable the feature, complete the following steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Open ",(0,o.jsx)(n.a,{href:"https://ml.azure.com/",children:"Azure ML studio"}),", and click on the bullhorn icon on the upper right corner of the page."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Locate ",(0,o.jsx)(n.strong,{children:"Build AI solutions with Prompt Flow"}),", switch it to Enabled the feature."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Close the features blade."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"add-flow-connections",children:"Add Flow connections"}),"\n",(0,o.jsx)(n.p,{children:"As you work on creating Flows, it may have dependencies, services or external resources that you would need to connect to; such as OpenAI, Content Safety AI or your custom LLM models.  It enables users to add and manage connection to these resources as well as a their connection secrets.  Once a resource is connected, your Flow nodes have access to the resources metadata (e.g. name, api key, api_endpoint, or type).  In this workshop, we\u2019ll be using the Azure OpenAI API and Azure Content Safety."}),"\n",(0,o.jsx)(n.p,{children:"First, we\u2019ll add the connection for Azure OpenAI API."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Open the ",(0,o.jsx)(n.a,{href:"https://ml.azure.com/",children:"Azure ML studio"}),",  and select ",(0,o.jsx)(n.strong,{children:"Prompt Flow"})," on the left-hand side of the navigation bar"]}),"\n",(0,o.jsxs)(n.li,{children:["Click on the ",(0,o.jsx)(n.strong,{children:"Connections"})," tab on the Prompt Flow page"]}),"\n",(0,o.jsxs)(n.li,{children:["Click on the ",(0,o.jsx)(n.strong,{children:"Create"})," button, then select ",(0,o.jsx)(n.strong,{children:"Azure OpenAI"})," option in the drop-down menu"]}),"\n",(0,o.jsxs)(n.li,{children:["Enter a ",(0,o.jsx)(n.strong,{children:"Name"})]}),"\n",(0,o.jsxs)(n.li,{children:["The Azure OpenAI option should be selected for ",(0,o.jsx)(n.strong,{children:"Provider"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Select your subscription under ",(0,o.jsx)(n.strong,{children:"Subscription id"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Select your OpenAI instance name under ",(0,o.jsx)(n.strong,{children:"Azure OpenAI Account Names"})," drop-down menu."]}),"\n",(0,o.jsxs)(n.li,{children:["Paste the Key 1 value for Azure OpenAI you copied earlier in the ",(0,o.jsx)(n.strong,{children:"API key"})," textbox."]}),"\n",(0,o.jsxs)(n.li,{children:["Paste the Language API URL you copied earlier in the ",(0,o.jsx)(n.strong,{children:"API base"})," textbox."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.strong,{children:"API type"})," should be set to the default value (e.g. azure)"]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.strong,{children:"API version"})," should be set to the default value (e.g. 2023-07-01-preview)"]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Save"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Next, we\u2019ll add the connection for Content Safety."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Click on the ",(0,o.jsx)(n.strong,{children:"Create"})," button, then select ",(0,o.jsx)(n.strong,{children:"Azure Content Safety"})," option in the drop-down menu"]}),"\n",(0,o.jsxs)(n.li,{children:["Enter a ",(0,o.jsx)(n.strong,{children:"Name"})]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.strong,{children:"Provider"})," should be set to Azure content safety"]}),"\n",(0,o.jsxs)(n.li,{children:["Paste the Key 1 value for content safety you copied earlier in the ",(0,o.jsx)(n.strong,{children:"API key"})," textbox."]}),"\n",(0,o.jsxs)(n.li,{children:["Paste the Endpoint URL you copied earlier in the ",(0,o.jsx)(n.strong,{children:"Endpoint"})," textbox."]}),"\n",(0,o.jsxs)(n.li,{children:["The API version should be set to the default value (e.g. ",(0,o.jsx)(n.em,{children:"2023-04-30-preview"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.strong,{children:"API type"})," should be set to the default value (e.g. ",(0,o.jsx)(n.em,{children:"Content Safety"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Save"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"create-a-runtime",children:"Create a Runtime"}),"\n",(0,o.jsx)(n.p,{children:"To run the Prompt Flow nodes, you need to create a Runtime.  Runtime serve as the compute with a docker environment for executing the flows.  The Compute instance are the VMs and the environment are create from a docker image that contains the Python packages and dependencies need to run the Flow.  When creating a runtime, you have the option of choosing a default curated environment; or you can create your own custom environment."}),"\n",(0,o.jsx)(n.p,{children:"To create runtime environment, complete the following steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Click on the ",(0,o.jsx)(n.strong,{children:"Runtime"})," tab; than click ",(0,o.jsx)(n.strong,{children:"Create"})," button"]}),"\n",(0,o.jsxs)(n.li,{children:["Enter a ",(0,o.jsx)(n.strong,{children:"Runtime name"})]}),"\n",(0,o.jsxs)(n.li,{children:["Select on existing compute under the ",(0,o.jsx)(n.strong,{children:"Select Azure ML compute instance"})," drop-down menu.  If there\u2019s no existing compute instance, click on ",(0,o.jsx)(n.strong,{children:"Create Azure ML compute instance"})]}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Enter a ",(0,o.jsx)(n.strong,{children:"Compute name"})]}),"\n",(0,o.jsxs)(n.li,{children:["Select ",(0,o.jsx)(n.strong,{children:"CPU"})," for the ",(0,o.jsx)(n.strong,{children:"Virtual machine type"})]}),"\n",(0,o.jsxs)(n.li,{children:["Select ",(0,o.jsx)(n.strong,{children:"Standard_D12_v2"})," for the ",(0,o.jsx)(n.strong,{children:"Virtual machine size"})]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Review + create"})," button"]}),"\n"]}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Under ",(0,o.jsx)(n.strong,{children:"Custom Application"}),", select the ",(0,o.jsx)(n.strong,{children:"New"})," option"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Under ",(0,o.jsx)(n.strong,{children:"Environment"}),", select ",(0,o.jsx)(n.strong,{children:"Use default environment"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Click on ",(0,o.jsx)(n.strong,{children:"Create"})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var o=t(7294);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);