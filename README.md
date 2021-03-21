# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **NAME**

Time spent: **2** hours spent in total

Link to project: https://glitch.com/edit/#!/lightsound-game?path=index.html%3A1%3A0

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
- [ ] More than 4 functional game buttons
- [ ] Playback speeds up on each turn
- [ ] Computer picks a different pattern each time the game is played
- [ ] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:
- [ ] List anything else that you can get done to improve the app!

- I decided to allow the user to play the game endlessly and attempt to get as high of a score as possible. The pattern is randomly generated along the way and the score and highscore is recorded.

- I also fixed a problem I found where someone could have potentially cheated by putting in their guesses as the pattern was still being displayed. I did this by not allowing the guess
function to utilize any new inputs if the functions playClueSequence or playSingleClue were in process. 


## Video Walkthrough

Here's a walkthrough of implemented user stories:
![x](https://cdn.glitch.com/23be6c50-1799-427d-9a52-66a5f0e8d5f1%2FLightGameWalkThrough.gif?v=1616349945956)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   I used w3schools.com to learn how to come up with unique colors using rgb() in css. I also used the same site to learn how to manipulate the html through javascript.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   One thing I was frustrated with is while working on the game I realized it was very easy for someone to  potentialy cheat. There is nothing preventing some from putting in the pattern
   as the sequence was still playing. To fix this problem, I set up a boolean that turned true while the pattern was being displayed, and false after the pattern finished. The guess fucntion then
   checked the boolean whenever a button was clicked and determind whether it should accept the input or not.
   At certain points through the project, I was slightly taken back by how much new material and information there was given to us in quick succession, especially pertaining to the code
   we cut and pasted that enables sound fucntionality. However, after reading it over a few times, I realized I might not understand the details or be familiar with every function
   regarding how the code actually creates the sound but what I do know is how the end result affects the project ultamitely. Another issue I ran into was I wanted to use more unique colors
   for my backround and body. The solution I was able to come to was to use to rgb function to create specific colors that fit in with how I want the project to look at the end.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   One thing I have always been more interested in when it comes to web development is backend. While this project was completely front end, it got me thinking about how I can implement
   a backend system to improve the user experience. While I will leave more specific details as to what some of my ideas were for the next questions, ultamitely what I can say is that this project
   got me even more curious regarding the implementaion of a backend system.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   I think a feature that would really make this project stand out is if there was no cap on when the game ends. In other words, the game would go on continously until the user makes a mistake, and
   you then get a score based on how long you lasted. The endless sequence would be automatically randomly generated as the game went on (I decided to go back and work on this part after thinking out
   the idea).
   Then I would implement a backend system which allows for you to compare your score with the scores of your friends, and there would be a leaderboard for the best performers in the past week, month, 
   and all time. The backend part may probably require more than a few more hours to completely understand and create however.

## License

    Copyright [Ahmed Saad]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
