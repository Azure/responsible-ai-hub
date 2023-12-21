"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91],{726:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=s(5893),o=s(1151);const r={id:"prompt-flow-lab1",title:"Exercise# 1: Build Workshop Environment",sidebar_position:1,slug:"/build-workshop-enviroment"},i=void 0,a={id:"azure-prompt-flow/vscode/lab1-build-workshop-env/prompt-flow-lab1",title:"Exercise# 1: Build Workshop Environment",description:"As you work on creating Flows, it may have dependencies, services or external resources that you would need to connect to; such as OpenAI, Content Safety AI or your custom LLM models.  It enables users to add and manage connection to these resources as well as a their connection secrets (e.g. name, api key, api_endpoint, or type).",source:"@site/docs/azure-prompt-flow/vscode/lab1-build-workshop-env/lab1-build-workshop-env.md",sourceDirName:"azure-prompt-flow/vscode/lab1-build-workshop-env",slug:"/build-workshop-enviroment",permalink:"/responsible-ai-hub/docs/build-workshop-enviroment",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"prompt-flow-lab1",title:"Exercise# 1: Build Workshop Environment",sidebar_position:1,slug:"/build-workshop-enviroment"},sidebar:"promptFlowSidebar",previous:{title:"Lab# 2: Evaluate chatbot",permalink:"/responsible-ai-hub/docs/evaluate-chatbot"},next:{title:"Lab# 2: Run chatbot template",permalink:"/responsible-ai-hub/docs/run-chatbot-template"}},c={},l=[];function d(e){const n={a:"a",code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"As you work on creating Flows, it may have dependencies, services or external resources that you would need to connect to; such as OpenAI, Content Safety AI or your custom LLM models.  It enables users to add and manage connection to these resources as well as a their connection secrets (e.g. name, api key, api_endpoint, or type)."}),"\n",(0,t.jsxs)(n.p,{children:["To get started, you can use a pre-built development environment. ",(0,t.jsx)(n.strong,{children:"Click the button below"})," to open the repo in GitHub Codespaces, and then continue the readme!"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://codespaces.new/Azure-Samples/rai-prompt-flow-workshop?quickstart=1",children:(0,t.jsx)(n.img,{src:"https://github.com/codespaces/badge.svg",alt:"Open in GitHub Codespaces"})})}),"\n",(0,t.jsx)(n.p,{children:"This will launch a Codespaces environment with all the dependencies installed.  Once the environment is ready, you can run the following commands to create the Azure resources and run the sample code."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),": You can also access the codespaces by clicking on the green ",(0,t.jsx)(n.strong,{children:"Code"}),' button in the top right of the repo.  Then selecting the "Codespaces" tab and clicking on the ',(0,t.jsx)(n.strong,{children:"Create codespace on main"})," button to launch the Codespaces environement."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(6657).Z+"",width:"907",height:"403"})}),"\n",(0,t.jsx)(n.p,{children:"This will launch a Codespaces environment with all the dependencies installed.  Once the environment is ready. This will take ~ 10 minutes."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(5302).Z+"",width:"918",height:"643"})}),"\n",(0,t.jsx)(n.p,{children:"When the environment is ready, a Visual Studio Code editor will open."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(1323).Z+"",width:"1893",height:"612"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"At the commmand prompt, set the python environment to Python 3.9"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"conda activate py3_11_env\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Authenticate to Azure by running the following command:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"az login --use-device-code\n"})}),"\n",(0,t.jsx)(n.p,{children:"Enter the code provided in the browser to authenticate to Azure."}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Once authenticated, you need to set your Azure subscription."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"az account set --subscription <your-subscription-id>\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Create a resource group in the region closest to you."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"az group create --name <resource-group-name> --location <region-name>\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"NOTE"}),".  Find an Azure region that is closest to you by running this (e.g. ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"westus"})}),",  ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"eastus"})})," ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"westeurope"})}),", ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"southafricanorth"})}),",... etc)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'az account list-locations --query "[*].name" --out tsv | sort\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Set the resource group as the default resource group for the Azure CLI."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"az configure --defaults group=<resource-group-name>\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsxs)(n.li,{children:["If you ",(0,t.jsx)(n.strong,{children:"do not"})," have an Azure OpenAI available in your subscription, complete the step."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Otherwise, run the following command."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"az deployment group create --name rai-workshop --template-file main.bicep\n"})}),"\n",(0,t.jsx)(n.p,{children:"NOTE: For AzureMLname, use only lowercase letters and numbers.  For example, raiworkshop1234.  Save for environment name."}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsx)(n.li,{children:"See the environment variables for your resources."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"bash setenv.sh\n"})}),"\n",(0,t.jsx)(n.p,{children:"The setup creates the following Azure resources:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create Azure OpenAI"}),"\n",(0,t.jsx)(n.li,{children:"Add deployment OpenAI models"}),"\n",(0,t.jsx)(n.li,{children:"Create Azure ML workspace"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},6657:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gh-codespaces-4cf3c241fd8a0d3297ae2a833a561a11.png"},5302:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/github-load-codespaces-ee0e86a8dbe4170ff0160033a567b5b8.png"},1323:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/vsc-prompt-54cf0f9afa71af81af279a2fc9d77e98.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>i});var t=s(7294);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);