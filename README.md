# server
server side code for handling api's and processing data

## what's done till now

recieving data from flutter application, processing data to determine which lights needed to be turned of/on, sends to ESP8266

##Documentation
the server have following engpoints

 (post) / :
 recive led number and turn it off if it is on or turn it on if it is off

 (get) / :
 send the current status of leds (on or off) in the form of 0 and 1 inside a list.
 The responce is in json format
