# csgo-extreme-double-case-jam-open
Parody CSGO gambling site game. Server backend written in NodeJS.
## To-do list:
  #### Real skin names/values
  This can be done in two different ways.
  1. Storing all items with pre-set values in a JSON file, maybe with a seperate program/script to make that
  2. Loading Steam market prices in realtime/when server starts
  
  #### Storing a cookie with a display-name in it
  With this, no extra data is stored on the server, but is only available on that given browser.
  
  #### Storing inventories, in-game wallet amounts, and 'profiles' in a database
  This will most likely take the longest to be completed, but is one of the end-goals of this project.
  
## Likely to be asked questions:
  #### Why?
  Why not? (Translation: I'm learning Node and playing with express, and doing a little HTML/CSS here and there for fun, and to better my coding ability)
  
  #### Can I try it?
  Sure! Not sure why anyone would want to, but you can try it [here](https://infinite-inlet-74165.herokuapp.com/) or if you hate the popup that asks for your name every time you refresh, just add [/dev](https://infinite-inlet-74165.herokuapp.com/dev) to the end of the URL.
  
  #### How do I host a server on my own?
  Again, no idea why anyone in their rightful mind would want to, but should you really desire to host your own fake CS:GO site, here's how:
  1. [Clone](https://github.com/JoshLaBue/csgo-extreme-double-case-jam-open.git) or [download](https://github.com/JoshLaBue/csgo-extreme-double-case-jam-open/archive/master.zip) the server.
  2. Ensure you have [Node](https://nodejs.org) installed.
  3. Run `npm install` to download all of the required Node modules.
  4. Run `node server.js`
  5. The server is now up on `http://localhost:3000/`
