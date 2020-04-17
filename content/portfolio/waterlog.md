---
title: WaterLog
date: 2020-04-17T06:25:12.901Z
thumbnail: /img/screen-shot-2019-03-06-at-12.06.43-pm.png
description: WaterLog provides an API for collecting environmental monitoring
  information from field devices, as well as a UI to render the data collected.
  WaterLog was written in node.js with an MVC architecture and custom-built
  libraries for managing routing, dispatching, templating, view rendering, and
  database connections and queries.
link: http://evh.herokuapp.com/devices/2
---
This project was completed as part of a university class CMSC435 Software Engineering, and the purpose was to gain real-world practice with larger-scale engineering projects. The general idea for the project was to make a low-cost alternative to measuring water quality in streams and rivers. Current USGS installations costed well into the thousands of dollars, but this device required $275 with a $6/month mobile data plan.

I proposed the idea to my professor and teammates, and 16 people were assigned to the project, split into 4 teams of 4, which included Server, Hardware, Data Integration, and Data Visualization teams. I was the lead developer for the server as well as for the embedded software in the microcontroller. The server and user interface were open sourced at <https://github.com/kwyoung11/WaterLog> and the embedded software at <https://github.com/kylemv/WQDevice>.

Further detailed information is located at <http://evh.herokuapp.com/home/about>. You can also click the Go to Project link above to see the wireless data that we collected from our initial device deployment. The device lasted approximately 48 hours before it ran out of battery and stopped recording.

![The device being deployed in the Northwest Branch Anacostia River, right next to USGS site # 01649500 (http://waterdata.usgs.gov/nwis/uv/?site_no=0164950), whose installation you can see just below the water. This was to be able to validate accuracy of the measurements.](/img/img_2127.jpg "The device being deployed in the Northwest Branch Anacostia River, right next to USGS site # 01649500 (http://waterdata.usgs.gov/nwis/uv/?site_no=0164950), whose installation you can see just below the water. This was to be able to validate accuracy of the measurements.")