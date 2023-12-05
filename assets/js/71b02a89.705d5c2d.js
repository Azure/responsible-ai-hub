"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[742],{4063:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=a(5893),n=a(1151);const i={title:"Data Analysis chart view",sidebar_position:1,slug:"/data-analysis-chart-view"},r="Data Analysis",o={id:"lab3-data-analysis/data-analysis-chart-view",title:"Data Analysis chart view",description:"There are number of issues that could cause model inaccuracies.  For instance, data can be overrepresented in some cases or underrepresented in others. Not having a good balance of data can negatively skew a model\u2019s performance. This leads to data biases causing the model not to be fair, inclusive, safe, or reliable.  The Azure Responsible AI dashboard includes a Data Analysis section for users to be able to explore and understand the dataset distributions and statistics. It provides an interactive user interface (UI) to enable users to visualize datasets based on the predicted and actual outcomes, error groups, and specific features. As a result, the insights help ML professionals to better understand and pinpoint the root cause of errors.",source:"@site/docs/lab3-data-analysis/data-analysis-chart-view.md",sourceDirName:"lab3-data-analysis",slug:"/data-analysis-chart-view",permalink:"/docs/data-analysis-chart-view",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Data Analysis chart view",sidebar_position:1,slug:"/data-analysis-chart-view"},sidebar:"mySidebar",previous:{title:"Analyze feature cohorts",permalink:"/docs/analyze-feature-cohort"},next:{title:"Global Feature Importance",permalink:"/docs/view-feature-importance"}},d={},l=[];function c(e){const t={em:"em",h1:"h1",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"data-analysis",children:"Data Analysis"}),"\n",(0,s.jsx)(t.p,{children:"There are number of issues that could cause model inaccuracies.  For instance, data can be overrepresented in some cases or underrepresented in others. Not having a good balance of data can negatively skew a model\u2019s performance. This leads to data biases causing the model not to be fair, inclusive, safe, or reliable.  The Azure Responsible AI dashboard includes a Data Analysis section for users to be able to explore and understand the dataset distributions and statistics. It provides an interactive user interface (UI) to enable users to visualize datasets based on the predicted and actual outcomes, error groups, and specific features. As a result, the insights help ML professionals to better understand and pinpoint the root cause of errors."}),"\n",(0,s.jsx)(t.p,{children:"In this lab, we will explore how to use the Data Analysis section of the Azure Responsible AI (RAI) dashboard to discover the root-cause of the model\u2019s performance due to problematic data distribution."}),"\n",(0,s.jsx)(t.p,{children:"The chart view of the dashboard is another useful tool to visualize the data representation. You will be using the chart to compare the data distribution for the patients data."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Check data imbalance issues"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:['Under the "Chart view" pane, use the cohort with all the test data by selecting the "All data" option from the ',(0,s.jsx)(t.strong,{children:'"Select a dataset cohort to explore"'})," drop-down menu."]}),"\n",(0,s.jsxs)(t.li,{children:["On the Y-axis,  click on the current selected ",(0,s.jsx)(t.em,{children:'"race"'})," button, which will launch a pop-up menu. Under ",(0,s.jsx)(t.strong,{children:'"Select your axis value"'}),', choose "Count".']}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Data Analysis chart",src:a(382).Z+"",title:"Data Analysis chart view",width:"800",height:"480"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:['On the X-axis, click on the current selected "Index" value, then choose "True Y" under the ',(0,s.jsx)(t.strong,{children:'"Select your axis value"'})," menu. You can see that the data distribution between both classes is imbalance."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Data Analysis trueY",src:a(9949).Z+"",title:"Data Analysis TrueY",width:"800",height:"470"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsxs)(t.li,{children:["Looks like out of the ",(0,s.jsx)(t.strong,{children:"994"})," diabetes patients test data, ",(0,s.jsx)(t.strong,{children:"798"})," patients are Not readmitted and 198 are Readmitted. These are the actual values or TrueY."]}),"\n",(0,s.jsxs)(t.li,{children:['On the X-axis, click on the current selected "Index" value, then choose ',(0,s.jsx)(t.em,{children:'"Predicted Y"'}),' under the "Select your axis value" menu.']}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Data Analysis PredictedY",src:a(2102).Z+"",title:"Data Analysis PredictedY",width:"800",height:"425"})}),"\n",(0,s.jsxs)(t.ol,{start:"6",children:["\n",(0,s.jsxs)(t.li,{children:["You can see that the model\u2019s number of patients Readmitted is ",(0,s.jsx)(t.strong,{children:"41"}),", while the number of patients Not Readmitted is ",(0,s.jsx)(t.strong,{children:"953"}),". So, this definitely exposes an extreme data imbalance issue where the model is not performing well for cases where patients are Readmitted."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Check sensitive data representation"})}),"\n",(0,s.jsxs)(t.p,{children:["It is important to check for data disparities for non-sensitive and sensitive data (e.g., ",(0,s.jsx)(t.em,{children:"age"}),", ",(0,s.jsx)(t.em,{children:"gender"}),", ",(0,s.jsx)(t.em,{children:"race"})," etc.). Not having a good balance of data can negatively skew a model\u2019s performance. This leads to data biases causing the model to have fairness, inclusiveness, safety, or reliability issues."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["On the Y-axis,  verify that ",(0,s.jsx)(t.em,{children:'"Count"'})," is still selected."]}),"\n",(0,s.jsxs)(t.li,{children:["On the X-axis, click on the current selected ",(0,s.jsx)(t.em,{children:'"Predicted Y"'}),' button, which will launch a pop-up menu. Under "Select your axis value", click on the "Dataset" radio button.']}),"\n",(0,s.jsxs)(t.li,{children:['Under the "Select feature" drop-down menu, select ',(0,s.jsx)(t.em,{children:'"race"'}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Data Analysis race count",src:a(636).Z+"",title:"Data Analysis race count",width:"800",height:"428"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsx)(t.li,{children:"You will find that, there's a lot of disparities among \"Race\" representation. Caucasians represent 77% of patients in the test data. African-Americans make up 19% of the patients. Hispanics represent 2% of the data. There's obviously a lot of gaps between the different races. This is an area that will be a good candidate for a data scientist or ML engineer to flagged to make sure it does not induce any racial biases."}),"\n",(0,s.jsxs)(t.li,{children:["Next, on the X-axis, click on the current selected ",(0,s.jsx)(t.em,{children:'"Predicted Y"'}),' button, which will launch a pop-up menu. Under "Select your axis value", click on the "Dataset" radio button.']}),"\n",(0,s.jsxs)(t.li,{children:['Under the "Select feature" drop-down menu, select ',(0,s.jsx)(t.em,{children:'"gender"'}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Data Analysis gender count",src:a(9105).Z+"",title:"Data Analysis gender count",width:"800",height:"404"})}),"\n",(0,s.jsxs)(t.ol,{start:"7",children:["\n",(0,s.jsx)(t.li,{children:"The gender representation among the patient is fairly balanced. So, this is not an area of concern."}),"\n",(0,s.jsx)(t.li,{children:"Finally, On the X-axis, replace gender to age."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Data Analysis age count",src:a(6569).Z+"",title:"Data Analysis age count",width:"800",height:"415"})}),"\n",(0,s.jsxs)(t.ol,{start:"9",children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.em,{children:"Age"})," representation is not proportionately distributed across the 3 age groups. Diabetes tends to affect individuals the older they get. This may be an acceptable and expected disparity, however this is another candidate for a data scientist to validate with medical specialists."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Check Hospital Readmissions"})}),"\n",(0,s.jsxs)(t.p,{children:["Since ",(0,s.jsx)(t.em,{children:"Prior_Inpatient"})," is one of the features from the cohort will the highest errors; let see what impact it has to the model\u2019s outcome."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:['Click on the y-axis label. In the pop-up window pane, select the "Dataset" radio button. Then under "select feature", select ',(0,s.jsx)(t.em,{children:'"prior_inpatient"'})," on the drop-down menu."]}),"\n",(0,s.jsxs)(t.li,{children:['On the X-axis, click on the current selected "Index" value, then choose ',(0,s.jsx)(t.em,{children:'"Predicted Y"'}),' under the "Select your axis value" menu.']}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Data Analysis prior inpatient prediction",src:a(313).Z+"",title:"Data Analysis prior inpatient prediction",width:"800",height:"492"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"As you can see, the chart shows that the more the number of inpatients hospital stays a diabetic patient has in the past, the more likely they will be readmitted back in the hospital in 30 days. Patients with less prior inpatients are more likely not to be readmitted."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Data Analysis prior inpatient predictionY",src:a(5928).Z+"",title:"Data Analysis prior inpatient predictionY",width:"800",height:"414"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsxs)(t.li,{children:['Click on the y-axis label. In the pop-up window pane, select the "Dataset" radio button. Then under "select feature", select ',(0,s.jsx)(t.em,{children:'"race"'})," on the drop-down menu."]}),"\n",(0,s.jsxs)(t.li,{children:["Leave the X-axis to be ",(0,s.jsx)(t.em,{children:'"Predicted Y"'}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Data Analysis race predictionY",src:a(8256).Z+"",title:"Data Analysis race predictionY",width:"800",height:"381"})}),"\n",(0,s.jsxs)(t.ol,{start:"6",children:["\n",(0,s.jsxs)(t.li,{children:["For ",(0,s.jsx)(t.em,{children:'"Race"'}),', the chart shows that due to the data imbalance, the model will not be able to predict if a patient will be Readmitted back to the hospital for some ethnicities. As you saw above the "Caucasian" patients are overrepresented in this data set. So, even when there was no prediction for the other ethnic groups, we see 31 "Readmitted" occurrences for Caucasian patients since there\'s an overrepresentation there.']}),"\n",(0,s.jsxs)(t.li,{children:['Click on the y-axis label. In the pop-up window pane, select the "Dataset" radio button. Then under "select feature", select ',(0,s.jsx)(t.em,{children:'"age"'})," on the drop-down menu."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Data Analysis age predictionY",src:a(5413).Z+"",title:"Data Analysis age predictionY",width:"800",height:"434"})}),"\n",(0,s.jsxs)(t.ol,{start:"8",children:["\n",(0,s.jsxs)(t.li,{children:["You'll see that the model prediction is affected by the patients' age groups as well. There's an overrepresentation of data for patients ",(0,s.jsx)(t.em,{children:'"Over 60 years"'})," and data underrepresentation for patients ",(0,s.jsx)(t.em,{children:'"30 years or younger"'}),'. Here, the effects of data imbalance were evident between the model\'s classification of "Not readmitted" vs "Readmitted".']}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:'As you can see from all the data analysis we performed in this lab, data is a significant blind-spot that is often missed when evaluating model performance. After tuning a model, you can increase the performance but the does not mean you have a model that is fair and inclusive. A prime example was the patient\'s "Race" and "Age". Although the Race feature did not come up during our error analysis or model overview investigation, the Data Analysis section of the RAI dashboard exposed this discrepancy.'}),"\n",(0,s.jsx)(t.p,{children:"This also shows that in the data analysis process, there are gray areas where data scientists will need to work very closely with business stakeholders or decision makers to understand if the data represents reality or not."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"DISCLAIMER:  Microsoft products and services (1) are not designed, intended or made available as a medical device, and (2) are not designed or intended to be a substitute for professional medical advice, diagnosis, treatment, or judgment and should not be used to replace or as a substitute for professional medical advice, diagnosis, treatment, or judgment. Customers/partners are responsible for ensuring their solutions comply with applicable laws and regulations. Customers/partners also will need to thoroughly test and evaluate whether an AI tool is fit for purpose and identify and mitigate any risks or harms to end users associated with its use."})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},6569:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/7-da-age-count-49f959d2055010f847dbfbcc5c0506a6.png"},5413:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/7-da-age-predictY-274ed87b24ddcc1182b44e22d1b41493.png"},9105:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/7-da-gender-count-9613d3a194e401361b06e1d3cd279b8f.png"},5928:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/7-da-inpatient-predictY-c051a6e78444265706cfc9a9c2532b78.png"},2102:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/7-da-predictedY-4cc2dd737291be891785281dd794540f.png"},313:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/7-da-prior-inpatient-3d018785fc832f635a3dac3c2ff5a341.png"},636:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/7-da-race-count-c9f92dda13678557e4d56871868ec4b1.png"},8256:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/7-da-race-predictY-c8bfb0954d6c7eb289fab4cc25cc84b9.png"},9949:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/7-da-trueY-810704da822d85282a8d58f1f973f965.png"},382:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/7-select-data-chart-a2921634158f7fe63e7531b2cc36b08c.png"},1151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>r});var s=a(7294);const n={},i=s.createContext(n);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);