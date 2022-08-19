---
slug: using-data-connectors-with-microsoft-power-apps
title: Using Data Connectors while building Power Apps
authors: favour
tags: [Power Platform, LowCode, Power Apps, Data Connectors]
---

Data is very important while building every native application, this is because in every application, it is either you are requesting/fetching data, sending data, or perhaps doing both. And in this article we will be learning more about data and data connectors, and how to make use of them in a Power Apps Project. 

<!-- truncate -->

## What are Data Connectors?
In very clear terms, "Data Connectors" connects or communicates with the data source in every power app. Data is stored in a data source, and you bring that data into your app by creating a connection.

In Microsoft Power Apps a connector may provide tables of data or actions. Some connectors provide only tables, some provide only actions, and some provide both. Also, your connector may be either a **standard or custom connector**.



### Popular Connectors used in Microsoft Power Apps

![Screenshot 2022-03-23 at 21.41.16.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1648068186548/PpzISxxP8.png)


### Standard and Custom Connectors
Standard Connectors are connectors provided by Power Apps for many commonly used data sources. If Power Apps has a standard connector for the type of data source that you want to use, you should use that connector, those are what are referred to as Standard Custom Connectors.

The image above showing popular connectors are all Standard Connectors. 

But in a situation where you want to connect to other types of data sources, such as the one you built, then they are referred to as Custom Connectors 

Check out this article for more on  Custom Connectors - [Register and use custom connectors](https://docs.microsoft.com/en-us/powerapps/maker/canvas-apps/register-custom-api)


## Connecting to Microsoft Dataverse

Microsoft Dataverse lets you securely store and manage data that are used by business applications. 
Data within Dataverse is stored within a set of tables. A table is a set of rows (formerly referred to as records) and columns (formerly referred to as fields/attributes). Each column in the table is designed to store a certain type of data, for example, name, age, salary, and so on.

Now with the understanding of the Dataverse let us get into this codelab!

## Building a simple record-keeping app with Google Sheets (a Standard Connector)
1. [Sign in to Power Apps](https://powerapps.microsoft.com/en-gb/) If you don't already have a Power Apps account, click the Start Free button. 

![Screenshot 2022-03-23 at 22.08.09.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1648069794826/R9dcIU9gf.png)

2. After successful sign in to Power Apps this is what you should have now! 

![Screenshot 2022-03-23 at 22.06.26.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1648070361469/Nw9BDRTVW.png) 
Click on the Dataverse card. 

3. You should have this screen now, showing previous connections. Then you click on New Connection

![Screenshot 2022-03-23 at 22.44.33.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1648071904563/nF1IbpMyF.png)

4. If you followed the previous step properly, you should have this now, then click on Google Sheets and authenticate with your Google account. 

![Screenshot 2022-03-23 at 22.49.21.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1648072193448/xuF2XoCxq.png)
Now you choose a dataset, from a set of previous google sheet documents or perhaps you search for the one you have in mind just as I have done here. 

5. The next option is to choose a table or create a new one. 

![Screenshot 2022-03-23 at 22.50.57.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1648072298364/RbnL3xXvZ.png)

6. And finally you should have a very simple app for you with the data from the table you chose or created. Just as I have here too. 

![Screenshot 2022-03-23 at 22.52.24.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1648072410585/B6m12frDk.png)

That is the end of this codelab and hope you were able to follow it properly. 

I will also be ending this article here now, leaving you with resources for further study. 

## Resources
1. [Overviewof connectors for canvas apps](https://docs.microsoft.com/en-us/powerapps/maker/canvas-apps/connections-list)
2. [Use custom connectors in a Power Apps canvas app](https://docs.microsoft.com/en-us/learn/modules/use-custom-connectors-in-powerapps-canvas-app/)
3. [Microsoft Dataverse Documentation](https://docs.microsoft.com/en-us/powerapps/maker/data-platform/)
4. [Use custom connectors with the timeline control](https://docs.microsoft.com/en-us/powerapps/maker/model-driven-apps/custom-connectors-timeline-control)

So concluding now, in this article we understood what are Data connectors, Popular connectors used in Microsoft Power Apps, Standard and Custom connectors, Connecting to Microsoft Dataverse and finally we had a codelab that taught us how to Connect or Build an app with data gotten from Google Sheet, which is an example of a Standard Connector. 

Thank You