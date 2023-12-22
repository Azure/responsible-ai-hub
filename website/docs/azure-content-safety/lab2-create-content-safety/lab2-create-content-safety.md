---
id: content-safety-lab2'
title: 'Lab# 2: Create Azure Content Safety'
sidebar_position: 2
slug: /content-safety-resource
---

To complete this lesson, you would need a Azure OpenAI and Azure Content Safety. If you don't have OpenAI in your subscription, you'll only be creating an Azure Content Safety resource.

1. At the commmand prompt, set the python environment to Python 3.8

```shell
conda activate py38_env
```

2. Authenticate to Azure by running the following command:

```shell
az login --use-device-code
```

Enter the code provided in the browser to authenticate to Azure.  

3. Once authenticated, you need to set your Azure subscription.

```shell
az account set --subscription <your-subscription-id>
```
4.	Create a resource group in the region closest to you.
```shell
az group create --name <resource-group-name> --location <region-name>
```
5. Set the resource group as the default resource group for the Azure CLI.
```shell
az configure --defaults group=<resource-group-name>
```
6. If you **do not ** have an Azure OpenAI available in your subscription, run the following command to create one.
```shell
az deployment group create --name rai-workshop --template-file no-openai/main.bicep 
```
Otherwise, run the following command.
```shell
az deployment group create --name rai-workshop --template-file use-openai/main.bicep 
```
> Note: Currently, Azure OpenAI Service is only available in [certain regions](https://azure.microsoft.com/explore/global-infrastructure/products-by-region/?products=cognitive-services&WT.mc_id=studentamb_118941).
7. See the environment variables for your resources.
```shell
bash setenv.sh
```
