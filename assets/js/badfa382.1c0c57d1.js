"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40],{2260:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=t(5893),a=t(1151);const s={id:"cs-analyze-openai-lab6'",title:"Lab# 6: Analyze OpenAI Response",sidebar_position:6,slug:"/content-safety-analyze-openai"},i=void 0,r={id:"azure-content-safety/lab6-analyze-openai-response/cs-analyze-openai-lab6'",title:"Lab# 6: Analyze OpenAI Response",description:"OpenAI produces dynamic responses where one response to the same inquiry does not alway yeild the same output.  In addition, we cannot always anticipate the risks that are in the response that can could be harmful to users.  Azure Content Safety help you to add content filter and guardrails for categories such as sexual derogative content, violence, or harmful content.",source:"@site/docs/azure-content-safety/lab6-analyze-openai-response/lab6-analyze-openai-response.md",sourceDirName:"azure-content-safety/lab6-analyze-openai-response",slug:"/content-safety-analyze-openai",permalink:"/responsible-ai-hub/docs/content-safety-analyze-openai",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"cs-analyze-openai-lab6'",title:"Lab# 6: Analyze OpenAI Response",sidebar_position:6,slug:"/content-safety-analyze-openai"},sidebar:"contentSafetySidebar",previous:{title:"Lab# 5: Analyze Image",permalink:"/responsible-ai-hub/docs/content-safety-analyze-image"}},l={},c=[];function d(e){const n={em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(1352).Z+"",width:"2061",height:"931"})}),"\n",(0,o.jsx)(n.p,{children:"OpenAI produces dynamic responses where one response to the same inquiry does not alway yeild the same output.  In addition, we cannot always anticipate the risks that are in the response that can could be harmful to users.  Azure Content Safety help you to add content filter and guardrails for categories such as sexual derogative content, violence, or harmful content."}),"\n",(0,o.jsx)(n.p,{children:"In this lab, we will see examples of how content safety is able to detect risky content from OpenAI chatGPT and enable you to mitigate the problem."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Open the ",(0,o.jsx)(n.em,{children:"use-openai/openai-text_content_safety.ipynb"})," notebook."]}),"\n",(0,o.jsxs)(n.li,{children:["Click on ",(0,o.jsx)(n.strong,{children:"Select Kernel"})," on the upper right of the notebook."]}),"\n",(0,o.jsxs)(n.li,{children:["Select ",(0,o.jsx)(n.strong,{children:"Python Environments"})," in the kernel drop-down menu."]}),"\n",(0,o.jsxs)(n.li,{children:["Choose the conda ",(0,o.jsx)(n.strong,{children:"(py38_env) Python 3.8"})," kernel."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Run All"})," to execute the notebook."]}),"\n",(0,o.jsx)(n.li,{children:"Verify that all cells ran successfully."}),"\n",(0,o.jsxs)(n.li,{children:["Set the input_text to ",(0,o.jsx)(n.em,{children:"\u201cWhat is John's job in the movie John Wick?\u201d"})]}),"\n",(0,o.jsx)(n.li,{children:"In the last cell, you\u2019ll see that the Content Safety API found the input text to be \u201cHate\u201d content with a severity of 2."}),"\n",(0,o.jsx)(n.li,{children:"Now try changing the input_text to your own text and see what the output will be."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note"}),": you can add code on how you want the application to behavior or what warning message to display, based on the severity level."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1352:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/cs-image-filter-1d236228e3d0507b7d93d3089aac228e.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var o=t(7294);const a={},s=o.createContext(a);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);