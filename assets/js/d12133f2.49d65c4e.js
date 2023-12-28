"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[470],{7095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=n(5893),o=n(1151);const i={id:"pf-create-chatbot-template-lab4'",title:"Lab# 4: Create chatbot template",sidebar_position:4,slug:"/create-chatbot-template"},r=void 0,l={id:"azure-prompt-flow/portal/lab4-chatbot-template/pf-create-chatbot-template-lab4'",title:"Lab# 4: Create chatbot template",description:"We will learn how to create a basic chat agent that interacts with prompts power by an OpenAI model.",source:"@site/docs/azure-prompt-flow/portal/lab4-chatbot-template/lab4-create-chatbot-template.md",sourceDirName:"azure-prompt-flow/portal/lab4-chatbot-template",slug:"/create-chatbot-template",permalink:"/responsible-ai-hub/docs/create-chatbot-template",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"pf-create-chatbot-template-lab4'",title:"Lab# 4: Create chatbot template",sidebar_position:4,slug:"/create-chatbot-template"},sidebar:"promptFlowSidebar",previous:{title:"Lab# 3: Add flow connections",permalink:"/responsible-ai-hub/docs/add-flow-connections"},next:{title:"Lab# 5: Chatbot with your data",permalink:"/responsible-ai-hub/docs/portal-chatbot"}},a={},c=[{value:"Input Node",id:"input-node",level:2},{value:"Output Node",id:"output-node",level:2},{value:"Run the Chat",id:"run-the-chat",level:2},{value:"Exercise 3: Create Chat agent to use custom data.",id:"exercise-3-create-chat-agent-to-use-custom-data",level:2},{value:"Exercise 4: Test Chat with your own data",id:"exercise-4-test-chat-with-your-own-data",level:2},{value:"Exercise 5:  Handle Groundedness &amp; Hallucinations",id:"exercise-5--handle-groundedness--hallucinations",level:2},{value:"Exercise 6:  Evaluate your Flow",id:"exercise-6--evaluate-your-flow",level:2}];function h(e){const t={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"We will learn how to create a basic chat agent that interacts with prompts power by an OpenAI model."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"In Azure ML studio, click on Prompt Flow."}),"\n",(0,s.jsxs)(t.li,{children:["On the Prompt flow page, select the ",(0,s.jsx)(t.strong,{children:"Flow"})," tag.   Then click on ",(0,s.jsx)(t.strong,{children:"Create"})," button.\nThis displays a gallery of different types of flows and evaluation templates you can clone."]}),"\n",(0,s.jsxs)(t.li,{children:["In this lab, under ",(0,s.jsx)(t.strong,{children:"Chat Flow"}),", click on the Create button."]}),"\n",(0,s.jsxs)(t.li,{children:["Enter a ",(0,s.jsx)(t.strong,{children:"Folder name"})," on the Create a new file blade."]}),"\n",(0,s.jsxs)(t.li,{children:["Press ",(0,s.jsx)(t.strong,{children:"Create"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"input-node",children:"Input Node"}),"\n",(0,s.jsx)(t.p,{children:"On flow page, Prompt generates the Input fields need for the chat input node.  The right side of the page displays a pipeline containing action nodes with logic needed to build the flow."}),"\n",(0,s.jsx)(t.p,{children:"Add LLM model for the Chat prompt"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Under the ",(0,s.jsx)(t.strong,{children:"Connection"})," drop-down menu, select the name for OpenAI connection created earlier."]}),"\n",(0,s.jsxs)(t.li,{children:["Make sure Chat is select for ",(0,s.jsx)(t.strong,{children:"Api"})]}),"\n",(0,s.jsxs)(t.li,{children:["Select ",(0,s.jsx)(t.strong,{children:"deployment_name"})]}),"\n",(0,s.jsxs)(t.li,{children:["Skip the ",(0,s.jsx)(t.strong,{children:"Advanced"})," and ",(0,s.jsx)(t.strong,{children:"Function"})," calling section."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"Prompt"})," section is already prepopulated for you:"]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"System: Contains a rule for the agent.  You can enter instructions on how to handle use inquiries."}),"\n",(0,s.jsx)(t.li,{children:"Since the Chat flow keeps the context and dialogue of the conversation, the prompt loops through the chat history to display what the assistant and user entered."}),"\n",(0,s.jsx)(t.li,{children:"At the end, the prompt creates a prompt for the user to enter a question."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"output-node",children:"Output Node"}),"\n",(0,s.jsx)(t.p,{children:"If you scroll back to the Output section, you\u2019ll see that the answer is linked to the Chat nodes output."}),"\n",(0,s.jsx)(t.h2,{id:"run-the-chat",children:"Run the Chat"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["To test the Chat flow, click on the ",(0,s.jsx)(t.strong,{children:"Chat"})," icon"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(4660).Z+"",width:"812",height:"87"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"Enter \u201cwhat is prompt engineering\u201d in the text box and click submit icon."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(3680).Z+"",width:"693",height:"295"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"Next, enter \u201cMy molar tooth is aching so bad.  What could be the cause?\u201d"}),"\n",(0,s.jsx)(t.li,{children:"Finally, enter \u201cWhat is the address of your dental clinic?\u201d"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(3731).Z+"",width:"1293",height:"326"})}),"\n",(0,s.jsx)(t.p,{children:"As you can see the Chat is not able to answer specific questions about a business or dental clinic.   This makes some of the answers not reliable or available.  In the next exercise, you learn how to bring your custom data into the chat to provide response that are relevant to your data."}),"\n",(0,s.jsx)(t.h2,{id:"exercise-3-create-chat-agent-to-use-custom-data",children:"Exercise 3: Create Chat agent to use custom data."}),"\n",(0,s.jsx)(t.p,{children:"In the precise exercise you create a vector index and train to search for your vector embeddings.  In the exercise, you\u2019ll be expanding the Chat pipeline logic to take the user question and convert to numeric embeddings.  Then we\u2019ll use the numeric embedding to search the numeric vector.  Next, we\u2019ll use the prompt to set rules with restrictions and how to display the data to the user."}),"\n",(0,s.jsx)(t.p,{children:"We'll be using the following tools:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Embedding"}),": converts text to number tokens.  Store to token in vector arrays based on then relation to each other."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Vector index lookup"}),": Takes user input question and queries the vector index with the closest answers to the question."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Prompt"}),": enters user to add rules on the response show be sent to user"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"LLM"}),": provides the LLM prompt or LLM model response to user"]}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Open the Flow page, by clicking ",(0,s.jsx)(t.strong,{children:"Prompt Flow"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Click you the Chat flow you created in Exercise 1."}),"\n",(0,s.jsxs)(t.li,{children:["On the Flow toolbar, click on ",(0,s.jsx)(t.strong,{children:"More tools"}),".  Then select the ",(0,s.jsx)(t.strong,{children:"Embedding tool"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(6398).Z+"",width:"358",height:"427"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsxs)(t.li,{children:["Enter ",(0,s.jsx)(t.strong,{children:"Name"})," for the node (e.g. embed_question)."]}),"\n",(0,s.jsxs)(t.li,{children:["Click the ",(0,s.jsx)(t.strong,{children:"Add"})," button."]}),"\n",(0,s.jsxs)(t.li,{children:["Select the ",(0,s.jsx)(t.strong,{children:"AzureOpenAIconnection"})," name you created earlier."]}),"\n",(0,s.jsxs)(t.li,{children:["Select ",(0,s.jsx)(t.strong,{children:"Text-embedding-ada-002"})," deployment name you created earlier"]}),"\n",(0,s.jsxs)(t.li,{children:["For ",(0,s.jsx)(t.strong,{children:"Input"}),", select ",(0,s.jsx)(t.code,{children:"*${inputs.question}*"}),".  This should create a node under the input node."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(474).Z+"",width:"1280",height:"327"})}),"\n",(0,s.jsxs)(t.ol,{start:"9",children:["\n",(0,s.jsx)(t.li,{children:"Click the Save button"}),"\n",(0,s.jsxs)(t.li,{children:["On the Flow toolbar, click on ",(0,s.jsx)(t.strong,{children:"More tools"}),".  Then select the Vector Index Lookup tool.  This will generate a new ",(0,s.jsx)(t.strong,{children:"Vector Index Lookup"})," section at the bottom of the flow."]}),"\n",(0,s.jsxs)(t.li,{children:["Enter ",(0,s.jsx)(t.strong,{children:"Name"})," for the node (e.g. search_vector_index)."]}),"\n",(0,s.jsxs)(t.li,{children:["Click the ",(0,s.jsx)(t.strong,{children:"Add"})," button"]}),"\n",(0,s.jsxs)(t.li,{children:["For ",(0,s.jsx)(t.strong,{children:"Path"}),", copy and paste the Datastore URI you retrieve earlier for the vector index."]}),"\n",(0,s.jsxs)(t.li,{children:["Select the embedding output as the ",(0,s.jsx)(t.strong,{children:"query"})," field (e.g. ",(0,s.jsx)(t.code,{children:"*${embed_question.output}*)"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Leave default value for ",(0,s.jsx)(t.strong,{children:"top_k"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(474).Z+"",width:"1280",height:"327"})}),"\n",(0,s.jsxs)(t.ol,{start:"16",children:["\n",(0,s.jsxs)(t.li,{children:["Click the ",(0,s.jsx)(t.strong,{children:"Save"})," button"]}),"\n",(0,s.jsxs)(t.li,{children:["On the Flow toolbar, click on ",(0,s.jsx)(t.strong,{children:"Prompt"})," tool. This will generate a new Prompt section at the bottom of the flow."]}),"\n",(0,s.jsxs)(t.li,{children:["Enter a ",(0,s.jsx)(t.strong,{children:"Name"})," for the node (e.g. generate_prompt).  Then click the ",(0,s.jsx)(t.strong,{children:"Add"})," button."]}),"\n",(0,s.jsx)(t.li,{children:"Copy the following text in the Prompt textbox:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"system:\nYou are an AI system designed to answer questions. When presented with a scenario, you must reply with accuracy to inquirers' inquiries.  If there is ever a situation where you are unsure of the potential answers, simply respond with \"I don't know.  \n\ncontext: {{contexts}}\n\n{% for item in chat_history %}\nuser:\n{{item.inputs.question}}\nassistant:\n{{item.outputs.answer}}\n{% endfor %}\n\nuser:\n{{question}}\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"20",children:["\n",(0,s.jsxs)(t.li,{children:["Click the ",(0,s.jsx)(t.strong,{children:"Validate and parse input"})," button to generate the input field for the prompt."]}),"\n",(0,s.jsxs)(t.li,{children:["Select the ",(0,s.jsx)(t.code,{children:"${Search_Vector_Index.output}"})," for ",(0,s.jsx)(t.strong,{children:"chat_history"})]}),"\n",(0,s.jsxs)(t.li,{children:["For ",(0,s.jsx)(t.strong,{children:"contexts"}),", select ",(0,s.jsx)(t.code,{children:"${inputs.chat_history}"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Select ",(0,s.jsx)(t.code,{children:"${inputs.question}"})," for the ",(0,s.jsx)(t.strong,{children:"question"})," field."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(8984).Z+"",width:"975",height:"549"})}),"\n",(0,s.jsxs)(t.ol,{start:"24",children:["\n",(0,s.jsxs)(t.li,{children:["Click on the ",(0,s.jsx)(t.strong,{children:"Save"})," button"]}),"\n",(0,s.jsxs)(t.li,{children:["Click on the ",(0,s.jsx)(t.strong,{children:"chat"})," node and drag it below the ",(0,s.jsx)(t.strong,{children:"generate_prompt"})," node"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(242).Z+"",width:"350",height:"424"})}),"\n",(0,s.jsxs)(t.ol,{start:"26",children:["\n",(0,s.jsxs)(t.li,{children:["Under the ",(0,s.jsx)(t.strong,{children:"Flow"})," pane, scroll up to the ",(0,s.jsx)(t.strong,{children:"chat"})," section"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(3836).Z+"",width:"975",height:"363"})}),"\n",(0,s.jsxs)(t.ol,{start:"27",children:["\n",(0,s.jsx)(t.li,{children:"Copy and paste the following text in the Prompt textbox.  This specifies the output to display to the user:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"{{prompt_response}}\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"28",children:["\n",(0,s.jsx)(t.li,{children:"Click on the Validate and parse input button to regenerate a new input field. Prompt Flow will generate the text metadata you specified in the Prompt textbox."}),"\n",(0,s.jsxs)(t.li,{children:["In the Prompt_response value, select ",(0,s.jsx)(t.code,{children:"${generate_prompt.output}"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Under the Flow pane, scroll up to the output section."}),"\n",(0,s.jsxs)(t.li,{children:["Replace the answer to ",(0,s.jsx)(t.code,{children:"${chat.output}"})]}),"\n",(0,s.jsx)(t.li,{children:"Click on the Save button"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"exercise-4-test-chat-with-your-own-data",children:"Exercise 4: Test Chat with your own data"}),"\n",(0,s.jsx)(t.p,{children:"Now that you have updated the prompt flow logic to you use your own data and process the output, let\u2019s see if the Chat will generate more relevant information pertaining to our Contoso dental data.  First let clear the chat history, so the question is not base not the prior responses from our OpenAI model."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Click on the edit icon for the chat history field on the Inputs flow section.  This will open an Edit text window."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Select all the text with the open and close brackets \u201c[ ]\u201d"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Click on the Chat button to test the new flow"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Enter the following question:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"what is your dental clinic address?"}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsx)(t.li,{children:"You should get the following response:"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(9428).Z+"",width:"949",height:"316"})}),"\n",(0,s.jsxs)(t.ol,{start:"6",children:["\n",(0,s.jsx)(t.li,{children:"Next, enter the following question:"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"What is the clinic's phone number?"}),"\n",(0,s.jsxs)(t.ol,{start:"7",children:["\n",(0,s.jsx)(t.li,{children:"You should get the following response:"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(4322).Z+"",width:"949",height:"314"})}),"\n",(0,s.jsxs)(t.ol,{start:"8",children:["\n",(0,s.jsx)(t.li,{children:"Finally, enter the following what questions:"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"My tooth is aching really bad.  What could be the cause?"}),"\n",(0,s.jsxs)(t.ol,{start:"9",children:["\n",(0,s.jsx)(t.li,{children:"You should get the following response:"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(444).Z+"",width:"907",height:"422"})}),"\n",(0,s.jsx)(t.h2,{id:"exercise-5--handle-groundedness--hallucinations",children:"Exercise 5:  Handle Groundedness & Hallucinations"}),"\n",(0,s.jsx)(t.p,{children:"Always an LLM model may be eager to provide the user with a response.  It\u2019s important to make sure that the model is not providing response to questions that are out of scope with subject domain of your data.  Another issue is the response may provide information that is not factual and, in some cases, even provide reference to the answer that appears legitimate.  This is a risk, because the information provided to the user can have negative or harmful consequences."}),"\n",(0,s.jsx)(t.p,{children:"Grounding test"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"On generate_prompt section of the Flow pane, click on Generate variants button."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Select Connection for your Azure OpenAI"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Next, select the Deployment name."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Click Submit button.  These will generate a Variant_1 prompt section."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"In the prompt textbox, copy and paste the following text:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"System: \nAs an AI Assistant Prompt Engineer, I need you to generate a response to the user's question.  Please cite your sources.\n\ncontext: {{contexts}}\n\n{% for item in chat_history %}\nuser:\n{{item.inputs.question}}\nassistant:\n{{item.outputs.answer}}\n{% endfor %}\n\nuser:\n{{question}}\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"6",children:["\n",(0,s.jsx)(t.li,{children:"Click the Save button"}),"\n",(0,s.jsx)(t.li,{children:"Now, enter the following question:\nWhich supplements are good for teeth?"}),"\n",(0,s.jsx)(t.li,{children:"As you can see, our chat produces a response that is factual button not in our Contoso dental data."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"exercise-6--evaluate-your-flow",children:"Exercise 6:  Evaluate your Flow"}),"\n",(0,s.jsx)(t.p,{children:"You can unit test your Flow.  However, Prompt flow provides a gallery of sample evaluation flows your can use to test you Flow in bulk.  For example, classification accuracy, QnA Groundedness, QnA Relevant, QnA Similarity, QnA F1 Score etc.  This enables you to test how well your LLM is performing.  In addition, you have the ability to examine which of your variant prompts are performing better.   In this example, we\u2019ll use the QnA Groundedness evaluation template to test our flow."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Click on the ",(0,s.jsx)(t.strong,{children:"Evaluate"})," on the top right-side of the screen."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(4157).Z+"",width:"975",height:"101"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["On the Basic settings page, select the ",(0,s.jsx)(t.strong,{children:"Use default variant for all nodes"})," radio button."]}),"\n",(0,s.jsxs)(t.li,{children:["Click the ",(0,s.jsx)(t.strong,{children:"Next"})," button"]}),"\n",(0,s.jsxs)(t.li,{children:["On the Batch run settings page, click on ",(0,s.jsx)(t.strong,{children:"Add new data"})," link for the ",(0,s.jsx)(t.strong,{children:"Data"})," field."]}),"\n",(0,s.jsxs)(t.li,{children:["Enter ",(0,s.jsx)(t.strong,{children:"Name"})," on the Add new data pane (e.g. Contoso-Dental)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Browse"})," to the workshop repo directory and select the ",(0,s.jsx)(t.strong,{children:"contoso-dental.csv"})," file."]}),"\n",(0,s.jsxs)(t.li,{children:["Click on the ",(0,s.jsx)(t.strong,{children:"Add"})," button.   A preview of the top 5 rows of the data should be displayed at the bottom of the page."]}),"\n",(0,s.jsxs)(t.li,{children:["Under Input mapping, enter the open and close brackets ",(0,s.jsx)(t.strong,{children:"[]"})," for the value of ",(0,s.jsx)(t.strong,{children:"chat_history"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Click in the Value textbox for the ",(0,s.jsx)(t.strong,{children:"question"})," field and enter ",(0,s.jsx)(t.code,{children:"${data.question}"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(1607).Z+"",width:"975",height:"523"})}),"\n",(0,s.jsxs)(t.ol,{start:"10",children:["\n",(0,s.jsxs)(t.li,{children:["Click the ",(0,s.jsx)(t.strong,{children:"Next"})," button."]}),"\n",(0,s.jsxs)(t.li,{children:["On the ",(0,s.jsx)(t.strong,{children:"Select evaluation"})," page, select the checkbox for the ",(0,s.jsx)(t.strong,{children:"QnA Groundedness Evaluation"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(7450).Z+"",width:"1475",height:"807"})}),"\n",(0,s.jsxs)(t.ol,{start:"12",children:["\n",(0,s.jsxs)(t.li,{children:["Click the ",(0,s.jsx)(t.strong,{children:"Next"})," button."]}),"\n",(0,s.jsxs)(t.li,{children:["Click on the right arrow ",(0,s.jsx)(t.strong,{children:"\u201c>\u201d"})," to expand the ",(0,s.jsx)(t.strong,{children:"QnA Groundedness Evaluation"})," settings."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(5554).Z+"",width:"975",height:"456"})}),"\n",(0,s.jsxs)(t.ol,{start:"14",children:["\n",(0,s.jsxs)(t.li,{children:["Click on the Data Source textbox and enter ",(0,s.jsx)(t.code,{children:"${data.question}"})," for the question field."]}),"\n",(0,s.jsxs)(t.li,{children:["Enter ",(0,s.jsx)(t.code,{children:"${run.inputs.contexts}"})," for the context field."]}),"\n",(0,s.jsxs)(t.li,{children:["Enter ",(0,s.jsx)(t.code,{children:"${run.outputs.answer}"})," for the answer field."]}),"\n",(0,s.jsx)(t.li,{children:"On the right-hand side of the page, scroll down to the bottom of the page."}),"\n",(0,s.jsx)(t.li,{children:"Select your AzureOpenAI connection name for the Connection."}),"\n",(0,s.jsx)(t.li,{children:"For Deployment name / Model, select your AzureOpenAI deployment name."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(2658).Z+"",width:"973",height:"441"})}),"\n",(0,s.jsxs)(t.ol,{start:"20",children:["\n",(0,s.jsx)(t.li,{children:"Click the Next button."}),"\n",(0,s.jsx)(t.li,{children:"Finally, click on the Submit button."}),"\n",(0,s.jsx)(t.li,{children:"Click on View run list to monitor the run progress."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(8539).Z+"",width:"1242",height:"440"})}),"\n",(0,s.jsxs)(t.ol,{start:"23",children:["\n",(0,s.jsx)(t.li,{children:"Click the Refresh button to update the run status. The run should take ~15 minutes."}),"\n",(0,s.jsx)(t.li,{children:"Click on the Display name of the run to view the run results."}),"\n",(0,s.jsx)(t.li,{children:"Click on View outputs.  Then select the run name from the Append related results option."}),"\n",(0,s.jsx)(t.li,{children:"The results will include a column for gpt_groundedness score."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(7812).Z+"",width:"1815",height:"842"})}),"\n",(0,s.jsxs)(t.ol,{start:"27",children:["\n",(0,s.jsx)(t.li,{children:"The score will range from 1 to 5, where 1 is the worst and 5 is the best performance."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},3836:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/chat-node-input-c3a7a45f477e3c2827043d487d1c8376.png"},242:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/chat-node-a559006b1f5cfc83dbb2123788e5a588.png"},3731:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/dental-address-b3c425e1568a166bdc53e0552a863469.png"},9428:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/dental-clinic-address-d7b4b709e72b85fc4b3935535ccc6165.png"},4322:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/dental-clinic-phone-fef1f5954a93fda0318f3322a430fa26.png"},2658:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/evaluate-connection-9b5fae9aa674bd383e1a47a47613052a.png"},1607:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/evaluate-input-flow-1308009d35933c4050b93212a44d7446.png"},5554:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/evaluate-qna-fields-cb1170858c26305ea944cc434a6f9625.png"},7812:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/evaluate-results-9ea135abf486f1a6ce3ea3eba2301302.png"},4157:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/evaluate-aede03a9caf52891e4663a930f336b76.png"},7450:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/evaluation-gallery-0f7ded3f4413d56306bd078147000e21.png"},6398:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/flow-tools-480fe56a56c497cfde43713c215a0380.png"},4660:(e,t,n)=>{n.d(t,{Z:()=>s});const s="data:image/png;base64,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"},8984:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/output_prompt-dc4d757017594755a8a91c48523b4613.png"},474:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/search-vector-88b150e9f60372e4d3085f7752d00b11.png"},8539:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/start-evaluate-61f66a3b2560fe8d78e923720a0dd77b.png"},444:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/toothache-ebac0648e6e3b80f596721f875f30a7f.png"},3680:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/what-is-prompt-69330b010bbff362400f77959f021ee9.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var s=n(7294);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);