{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function checkSleep() \{\
  const age = parseInt(document.getElementById("age").value);\
  const hours = parseFloat(document.getElementById("sleepHours").value);\
  \
  if (isNaN(age) || isNaN(hours)) \{\
  document.getElementById("result").innerText = "\uc0\u9888 \u65039  Please enter both your age and sleep hours.";\
  return;\
\}\
\
  let min = 0, max = 24;\
\
  if (age < 4) \{ min = 12; max = 15; \}\
  else if (age <= 5) \{ min = 10; max = 13; \}\
  else if (age <= 13) \{ min = 9; max = 11; \}\
  else if (age <= 17) \{ min = 8; max = 10; \}\
  else if (age <= 64) \{ min = 7; max = 9; \}\
  else \{ min = 7; max = 8; \}\
\
  let result = "";\
  if (hours < min) result = `\uc0\u55357 \u56884  Not enough sleeping! Recommended sleeping time is $\{min\}~$\{max\}.`;\
  else if (hours > max) result = `\uc0\u55357 \u57036  Oversleeping! Recommended sleeping time is $\{min\}~$\{max\}.`;\
  else result = `\uc0\u9989  Having enough sleep! (Recommended: $\{min\}~$\{max\})`;\
\
  document.getElementById("result").innerText = result;\
\}\
}