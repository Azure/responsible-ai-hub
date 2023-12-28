"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[518],{683:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=o(5893),r=o(1151);const i={id:"pf-bring-your-data-lab3'",title:"Lab# 3: bring your own data",sidebar_position:3,slug:"/bring-your-data"},s=void 0,a={id:"azure-prompt-flow/portal/lab2-bring-your-data/pf-bring-your-data-lab3'",title:"Lab# 3: bring your own data",description:"Open AI and most LLM models are training from various publicly available data.  However, there are instances where we need to use our own data and narrow the actions and data search of our LLM prompts to focus only on the scope of our data or expand the data from LLM model to include our data as well.  To use your own data in a LLM, you need to convert you data into numeric values.  Each word mapping to a specific number (token).  Then you train a model to find similarities, collations, or word association, the model creates vector indexes to the word associations.   The good thing is the Prompt Flow service provide an easy-to-use process your to upload dataset and it generates model and the Vector indexes.",source:"@site/docs/azure-prompt-flow/portal/lab2-bring-your-data/lab2-bring-your-data.md",sourceDirName:"azure-prompt-flow/portal/lab2-bring-your-data",slug:"/bring-your-data",permalink:"/responsible-ai-hub/docs/bring-your-data",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"pf-bring-your-data-lab3'",title:"Lab# 3: bring your own data",sidebar_position:3,slug:"/bring-your-data"},sidebar:"promptFlowSidebar",previous:{title:"Exercise# 1: Build Workshop Environment",permalink:"/responsible-ai-hub/docs/build-workshop-enviroment"},next:{title:"Lab# 3: Add flow connections",permalink:"/responsible-ai-hub/docs/add-flow-connections"}},d={},l=[];function c(e){const n={a:"a",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Open AI and most LLM models are training from various publicly available data.  However, there are instances where we need to use our own data and narrow the actions and data search of our LLM prompts to focus only on the scope of our data or expand the data from LLM model to include our data as well.  To use your own data in a LLM, you need to convert you data into numeric values.  Each word mapping to a specific number (token).  Then you train a model to find similarities, collations, or word association, the model creates vector indexes to the word associations.   The good thing is the Prompt Flow service provide an easy-to-use process your to upload dataset and it generates model and the Vector indexes."}),"\n",(0,t.jsxs)(n.p,{children:["To upload custom data for this lab, you need to use the Contoso Dentist clinic data located in ",(0,t.jsx)(n.em,{children:"data/contoso_dental.xls"}),"."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Open the ",(0,t.jsx)(n.em,{children:"src/create_faiss_mlindex.ipynb"})," notebook in the Visual Studio Code editor."]}),"\n",(0,t.jsxs)(n.li,{children:["Click on the ",(0,t.jsx)(n.strong,{children:"Select Kernel"})," button."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(2217).Z+"",width:"1909",height:"182"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.strong,{children:"Python Environment"})," from the drop-down menu.  Then pick the conda ",(0,t.jsx)(n.strong,{children:"py3_11_env (Python 3.11)"})," kernel."]}),"\n",(0,t.jsx)(n.li,{children:"Before running the notebook, you need to replace the following placeholders with values with your Azure OpenAI connection details:"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:'os.environ["AOAI_CONNECTION_NAME"]'}),":  Replace with your prompt flow connection name you created above."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:'os.environ["AOAI_API_KEY"]'}),":  Replace with your Azure OpenAI API key."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:'os.environ["AOAI_ENDPOINT_URL"]'}),':  Replace with your Azure OpenAI API endpoint.\nos.environ["TEXT_EMBEDDING_DEPLOYMENT_NAME"]:  Replace with your Azure OpenAI deployment name for the text-embedding-ada-002 model.']}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["Next, you need to upload your ",(0,t.jsx)(n.em,{children:"config.json"})," file to the Azure ML workspace.  To do this, open ",(0,t.jsx)(n.a,{href:"https://ml.azure.com/",children:"Azure ML studio"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["On the right corner the page, click on the down arrow.Click on the ",(0,t.jsx)(n.strong,{children:"Download config file"})," button."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(9281).Z+"",width:"922",height:"364"})}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsxs)(n.li,{children:["Then browse to the download ",(0,t.jsx)(n.strong,{children:"config.json"})," file in your local director.  In the Visual Studio Code editor, click on the ",(0,t.jsx)(n.em,{children:"src"})," folder and upload or paste the ",(0,t.jsx)(n.em,{children:"config.json"})," to the directory."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(9077).Z+"",width:"1611",height:"405"})}),"\n",(0,t.jsxs)(n.ol,{start:"8",children:["\n",(0,t.jsxs)(n.li,{children:["Click on the ",(0,t.jsx)(n.strong,{children:"Run All"})," button on the top of the notebook to run the notebook."]}),"\n",(0,t.jsx)(n.li,{children:"It take ~10 for the notebook to running."}),"\n",(0,t.jsxs)(n.li,{children:["Click on the ",(0,t.jsx)(n.strong,{children:"Link to Azure Machine Learning studio"})," click in the notebook to open the Azure ML job pipeline."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(9136).Z+"",width:"1068",height:"339"})}),"\n",(0,t.jsxs)(n.ol,{start:"11",children:["\n",(0,t.jsxs)(n.li,{children:["On the left-hand side of the page, click on the ",(0,t.jsx)(n.strong,{children:"Data"})," open."]}),"\n",(0,t.jsxs)(n.li,{children:["Under the ",(0,t.jsx)(n.strong,{children:"Data sources"}),", click ",(0,t.jsx)(n.strong,{children:"dental_faiss_mlindex"})," to open the vector data."]}),"\n",(0,t.jsxs)(n.li,{children:["Finally copy the ",(0,t.jsx)(n.strong,{children:"Datastore URI"})," value.  We\u2019ll use this value in the next exercise."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(4013).Z+"",width:"741",height:"442"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},9077:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/config-upload-src-40a45494885ebaa8a5c70b4195d6a5ad.png"},4013:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/datastore-url-2ea62c05d1b45104115516fd7797bae8.png"},9281:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/download-config-json-a600f68f8d567056632fee61a112333d.png"},2217:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/kernel-select-d5128125bb0cabbf019712889d35fc64.png"},9136:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/pipeline-vector-index-90a39d0c7e9f5ee91c98f576fbab34d9.png"},1151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>s});var t=o(7294);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);