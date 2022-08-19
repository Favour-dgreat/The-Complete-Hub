---
slug: using-timer-control-input-component-in-power-apps
title: Using the Timer Control Input Component in Power Apps
authors: favour
tags: [Power Platform, LowCode, Power Pages, Auth]
---

In this article we will be following up from our previous article **Using Data Connectors with Microsoft Power Apps** to learn about the Timer Control input component used in Microsoft Power Apps. 

<!-- truncate -->

## What is Timer Control in PowerApps?
Timer Control in PowerApps, is simply an Input Component amongst the Insert tools used for building apps. 

![Screenshot 2022-04-23 at 23.20.40.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1650752465275/HaJJ1AO--.png)

It's also a control that can determine how your app responds after a certain amount of time.

Timers can, for example, determine how long a control appears or change other properties of a control after a certain amount of time has passed.


### Key Properties for using the Timer Control Component in Power Apps

**Duration** – This is how long a timer runs in milliseconds. The maximum is 24 hours expressed in milliseconds. Default is 60 seconds.

**OnTimerEnd** – This is an actions to perform when a timer finishes running.

**Repeat** – The repeat function determines if a timer automatically restarts when it finishes couting, making use of the set time.

**AutoPause** – This function determines if the timer control automatically pauses, after a user navigates to a different screen.

**AutoStart** – The AutoStart function determines if the timer control automatically starts to play when the user navigates to the screen that contains that control.

**OnSelect** – OnSelect is used to set actions to perform when the user taps or clicks the Timer component.

**OnTimerStart** – OnTimerStart helps a user to set actions to perform when a timer starts to run.


# Implementing Timer Control Component 
Following up from a previous article, where we built an application using Power Apps, kindly go back to the article before you proceed; [Using Data Connectors with Microsoft Power Apps](www.thecompletehub.tech/blog/using-data-connectors-with-microsoft-power-apps). Also, you can check out this video, to understand better, before we proceed:

%[https://www.youtube.com/shorts/sitW9uOeTvg]

Now let us implement our Timer Control Component in our previously built Power App: 

Go to Screen 3 **(Our Success Screen)**
![Screenshot 2022-04-23 at 23.36.24.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1650753412047/8xDuLRr3X.png)

Click on the Insert Tool Item and Search for "Timer"
![Screenshot 2022-04-23 at 23.38.06.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1650753546954/uo87lDPs4.png)

Add the Timer to Screen3 Components

![Screenshot 2022-04-23 at 23.40.03.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1650753637767/XaTil-hWw.png)

**Now, we need to set a few parameters for the Timer Component:**

Firstly, is the duration. 

You can specify in milliseconds here. Example: 3000 i.e. 3 seconds
![Screenshot 2022-04-23 at 23.42.13.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1650753746393/MRzZPk_pB.png)

Next, you’ll need to set the Start flag. By default, this is set to false. The Start is triggered when the value is set to True. This needs to be dynamically set from elsewhere i.e. in this example, you’ll need to trigger from where you come to this screen so that the Timer starts the countdown.

![Screenshot 2022-04-23 at 23.44.00.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1650753870590/sEt69kDsO.png)

Now, the way I set this is, first I create a variable from the place where I want to trigger the Timer to go off, that is my previous Screen (Screen2).  I’m creating and setting a variable called startTimer and setting the value to true:

![Screenshot 2022-04-24 at 00.09.54.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1650755420667/M5h7eltB1.png)

You will then return to your Timer Component in Screen3 and set this variable startTimer to the Start property.

![Screenshot 2022-04-23 at 23.53.36.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1650754432720/q1AghZ4ve.png)

Also, you’ll need to set what needs to happen when the Timer ends. So, you have to write the OnTimerEnd property as to what will happen once the Timer ends.
Here, you’ll Navigate to the 'Screen4’ as per our scenario and then also, set the startTimer flag to ‘false’ since you want to reuse this again for the next submission.

Now this works fine as Screen 4 loads immediately after the duration of the timer is elapsed.

Finally, I will hide the timer component from showing on the screen. 
To do this I will set the visible property to false. It is set to true by default, and by doing this immediately our timer becomes not visible but still works properly. 


![Screenshot 2022-04-24 at 00.14.39.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1650755803020/zV9xntL2b.png)


![Screenshot 2022-04-24 at 00.14.52.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1650755832207/AivDtFZg9.png)

In conclusion, with this new feature added to our app, we can now remove the previous buttons added to navigate to Screen4 from the Success Screen (Screen3), and this is the new look for Screen 3

![Screenshot 2022-04-24 at 00.19.24.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1650755992913/aB_UqMDol.png)

Now we have improved our app by using the Timer control component to our app. 


As said earlier to fully understand everything discussed up till this point, kindly read and understand the previous article on **Using Data Connectors with Microsoft Power Apps** 

Finally, I will be ending this article, with helpful resources to aid you learning

## Learning Resources

1. [Timer control in Power Apps](https://docs.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-timer?WT.mc_id=DX-MVP-5003911)
2. [Formula reference for Power Apps](https://docs.microsoft.com/en-us/power-apps/maker/canvas-apps/formula-reference)
3. [Get started with formulas in canvas apps](https://docs.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-formulas)
4. [Controls and properties in canvas apps](https://docs.microsoft.com/en-us/power-apps/maker/canvas-apps/reference-properties)
5. [Power Apps Ideas (preview)](https://docs.microsoft.com/en-us/power-apps/maker/canvas-apps/power-apps-ideas)
6. [Microsoft's Power Platform - LowCode Platform](https://thecompletehub.tech/microsofts-power-platform-lowcode-platform)

