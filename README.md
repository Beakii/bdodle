 ## Development Roadmap

 ## Release v1
 - [x] Make it Deploy
 - [x] Scaffold basic ui with mock data
 - [x] Setup DB
 - [x] Attached DB to ui
 - [x] Add red eyes under title
 - [x] Add answers table
 - [x] Connect search props to answer table
 - [x] Add validation of answer against correct node
 - [x] Rotate arrow based on validation of contribution & connections
 - [x] Add local storage persistence
 - [x] Add win condition state
 - [x] Build score component + show counter to new bdodle
 - [x] Build filter tool to assist users
 - [x] Add contribution number to BdodleDropDown
 - [x] Add legend at the bottom to give information
 - [x] Add cron job to change correct answer every 24 hours
 - [x] Add more website responsiveness
 - [x] Add a check to reset the game if the node of the day changes not on time
 - [x] Add coordinates and rotating arrow
 - [x] Replace Up/Down arrow with a checkmark icon when contribution/connection is correct
 - [x] Add footer that contains disclaimer that this isnt associated with PA and a link to a Ko-Fi + my discord
 - [x] Add persistant state for the assisttool on reload
 - [x] Merge to main and push to production
---
 ## Release v2
 - [x] Add highlighting/remove nodes that have already been selected - note: doesnt persist reloads, doesnt feel necessary
 - [x] Add collapsable navbar
 - [x] Add twitch user authentication
 - [x] Add landing page to select between the game modes
 - [x] Add replayable game mode
 - [x] Add header above input that shows timer on daily game mode and reset button on arcade
 - [x] Swap img components for Next Image Components
 - [x] Add details to landing page to explain game modes + how to play
 - [x] Add Sentry report a bug component - https://www.youtube.com/watch?v=8CdKgnErqQM
 - [x] Remove clerk
 - [x] Make the auto scroll target the specific div, not the entire page
 - [x] Merge to main and push to production
---
 ## Release v2.1
 - [x] Add Next Auth
 - [ ] Add suspense components to show loading spinners on stateful components
 - [ ] Add leaderboard component with shadcn ui skeleton loading while not signed in
 - [ ] Connect leaderboard component with database table
 - [ ] Add a user dashboard with previous scores
 ---
 ## Debug
 - [x] Fix AnswerTable validation (Arrows on contri and connection not working correctly)
 - [x] Fix Offset animation to reveal each card slowly
 - [x] Fix animation to only play once
 - [x] Fix AnswerTable behaviour to be scrollable with auto-scroll bottom
 - [x] Fix and test localstorage
 - [x] Fix reset times with game reset
 - [x] Fix styling
 - [x] Fix data table contribution and connections All options
 - [x] Fix play again button (randomize node on arcade page.tsx and refresh the route?)
 - [x] Fix long rerenders on input box
 - [x] Fix window.location.reload to wait for the reload to finish before showing the UI - SEEMS TO BE NON ISSUE IN PRODUCTION
 - [x] Fix css to anchor footer to bottom and ideally scale webpage to not be scrollable



