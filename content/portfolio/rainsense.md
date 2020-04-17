---
title: RainSense
date: 2020-04-17T06:29:17.910Z
thumbnail: /img/screen-shot-2019-03-06-at-8.36.25-pm.png
description: RainSense is a SaaS app that allows anyone with a rain barrel to
  collect water quality information and send it to RainSense via its public API,
  then see the data in a beautiful visual display. It was built with Ruby on
  Rails and jQuery as part of a university class CMSC434 - Human Computer
  Interaction. I built the server and UI, which can be found
  here:<https://github.com/kwyoung11/RainBarrel>.
link: http://rainsense.herokuapp.com
---
The main goal of this project was to design a simple and intuitive user experience, due to the HCI focus of the class. Features of the app include:

* Public API for sending data.
* Real-time updates to the visualized data, including email alerts and in-app warnings if any environmental variables (pH, TDS, barrel volume) reach a level deemed unsafe.
* Custom chart built with D3.js displaying the amount of water collected and used across different time periods (week, month and year views).

Below are some screenshots and videos from the app.

This is the first page a user sees after logging in, and a user should be able to quickly learn the state of their rain barrel from the provided graphic.

![The first page a user sees after logging in.](/img/screen-shot-2019-03-06-at-8.36.25-pm.png "The first page a user sees after logging in.")

This is the Water Quality page that shows how the measurement variables are defined and the safe and unsafe value ranges for each variable. This page uses information hiding ("Click for instructions...") to avoid unnecessarily cluttering the page with potentially unneeded information:

![The Water Quality page with the current real-time values on the left hand side.[](https://imgur.com/oCli8Na)](/img/screen-shot-2019-03-06-at-9.21.43-pm.png "The Water Quality page with the current real-time values on the left hand side.[](https://imgur.com/oCli8Na)")

[](http://imgur.com/oCli8Na)This video shows a sped-up simulation of rising pH and water level in the rain barrel. The different views of the barrel include Water Usage ("WU"), Water Quality ("WQ") and Water Filter ("WF"). The views and their clickable circles are animated to provide a smooth user experience, and the contents of the clickable circle change based on view context to provide further information about the current status. The rising pH and water level eventually causes an in-app warning to display:

[](<>)A simulation of rising pH and water level in the barrel.

This video shows the functions and time periods of the D3.js chart. A user can choose a time range of Days, Weeks or Months, and different data sets that include Water Collected, Water Used and Water Overflown:

[](<>)The chart view where you can see an overview of water collected, used and overflown.