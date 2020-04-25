---
title: RainSense
date: 2020-04-17T06:29:17.910Z
thumbnail: screen-shot-2019-03-06-at-8.36.25-pm.png
description: "RainSense is a SaaS app that allows anyone with a rain barrel to
  collect water quality information and send it to RainSense via its public API,
  then see the data in a beautiful visual display. It was built with Ruby on
  Rails and jQuery as part of a university class CMSC434 - Human Computer
  Interaction. I built the server and UI, which can be found here:
  <https://github.com/kwyoung11/RainBarrel>."
link: http://rainsense.herokuapp.com
tags:
  - Ruby on Rails
  - JQuery
  - D3.js
  - CSS
---
The main goal of this project was to design a simple and intuitive user experience, due to the HCI focus of the class. Features of the app include:

* Public API for sending data.
* Real-time updates to the visualized data, including email alerts and in-app warnings if any environmental variables (pH, TDS, barrel volume) reach a level deemed unsafe.
* Custom chart built with D3.js displaying the amount of water collected and used across different time periods (week, month and year views).

Below are some screenshots and videos from the app.

This is the first page a user sees after logging in, and a user should be able to quickly learn the state of their rain barrel from the provided graphic.

![The first page a user sees after logging in.](/img/screen-shot-2019-03-06-at-8.36.25-pm.png "The first page a user sees after logging in.")

This is the Water Quality page that shows how the measurement variables are defined and the safe and unsafe value ranges for each variable. This page uses information hiding ("Click for instructions...") to avoid unnecessarily cluttering the page with potentially unneeded information:

<blockquote class="imgur-embed-pub" lang="en" data-id="oCli8Na"><a href="//imgur.com/oCli8Na"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>

This video shows a sped-up simulation of rising pH and water level in the rain barrel. The different views of the barrel include Water Usage ("WU"), Water Quality ("WQ") and Water Filter ("WF"). The views and their clickable circles are animated to provide a smooth user experience, and the contents of the clickable circle change based on view context to provide further information about the current status. The rising pH and water level eventually causes an in-app warning to display:

<video class="fr-fvc fr-dvi fr-draggable" controls=""><source src="https://s3.amazonaws.com/kevinwyoung.me/2019/03/06/23/50/00/f857fb74-73d0-402a-8189-7e2ca9f4c25e/waterlevelphsim720p.mov" type="video/mp4"></video>[](<>)*A simulation of rising pH and water level in the barrel.*

This video shows the functions and time periods of the D3.js chart. A user can choose a time range of Days, Weeks or Months, and different data sets that include Water Collected, Water Used and Water Overflown:

<video class="fr-fvc fr-dvi fr-draggable" controls=""><source src="https://s3.amazonaws.com/kevinwyoung.me/2019/03/07/00/27/33/2cf84121-63b6-42c4-87a4-6d7024c9d5c2/graphs720p.mov" type="video/mp4"></video>*The chart view where you can see an overview of water collected, used and overflown.*