I tried to keep the test app as simillar as our Product App.

Test app works in the following way.

Architecture Tab is having a list of top level entities called as platforms, They are top most entities in the app. 
each platform will have many projects under it. It is simillar to tree structure, but to keep it simple,
I created another tab called portfolio. Portfolio consist of two panels, left panel is to show platforms and right panel is to show selected
Platform's projects.Portfolio is having list of platforms as left side panel, when you click on a platform its associated 
projects will be shown in the right side panel.

we have introduced few bugs, which are crucial for app and will help the new developer to understand the app easily. Please look through the bugs and fix them.
I have added some features to implement in the app as well. Please dont think app is not working at begining, Actually it has an interesting bug to solve.


How to use the app:

there two modules in the given application.

1) server
   ngrx-code-test/server
   server is developed using express.js, we kept it as simple as we can. it only serves as a REST APIs for platforms and projects.
   to start server 
   open command prompt, 
   goto ngrx-code-test/server folder.
   npm install to install dependencies
   use npm start to start the server.
2) client
   ngrx-code-test/src(basic ngrx angular application)
   to start angular app
   open command prompt, 
   goto ngrx-code-test
   npm install to install dependencies( purposefully removed some dependencies, please add them as 
   you require)
   use npm start to start the angular cli.

Note: while starting app you will see a bug, its intentional, please solve it.

list of bugs

Priority 1:
angular bugs:-
1) make the architecture tab as default tab.
2) remove color block column from listing of Architecture and Portfolio.
3) implement a selector to show the all projects of selected platforms.
4) add a button to the button area and attach a popup to show the below requirement.
   4.1) create a button
   4.2) create a popup
   4.3) attach the button action to open a popup
5) implement a pop up to show the list of platforms with total(sum of) labor budget and capitl budget of all projects belongs to the platform
   Platform P1 has Projects P1:1 , P1:2, P1:3.
   
   P1:1 has labour budget - 200, capital Budget as - 50
   P1:2 has labour budget - 200, capital Budget as - 50
   P1:3 has labour budget - 200, capital Budget as - 50
   
   now the popup should show the all columns from platforms with two new columns labour budget and 
   capital budget.
   All columns of platform,  labour budget = sum of all projects of platform(P1) - (200 + 200 + 200)
   and capital budget = sum of all projects of platform(P1) = 50 + 50 + 50 = 150.
   
   same logic for all the platforms and their respective projects.
   
6) implemente feature delete platform, deleting platform should delete its projects too.
7) add configuration data(ConfiguationService) to the ngrx store.(optional)


Priority 2:
UI specific bugs:-
1) beautify the UI
   1.1) make tables look neater
   1.2) headers
   1.2.1) make the header looks like a tabs
   1.2.2) show active tab highlighted.
   1.3) create a button area a horizontal card to hold buttons(simple UI buttons)
2) selecting a row in the Architecture listing selects all the rows, its expected to select single row
3) Portfolio tab has two grid panels left grid is for platforms and right grid is for projects, style the two panels to seperate out the view.
4) right grid is squeezed and column headers are overlapped, make it look neater.

Priority 3:
if you have more than 2 years of angular app development.

1) What might be wrong with module structure of the test app?
2) How do you decouple multiple modules in the app and make a communication between them with less coupling ?
3) what can we improve as part of module structure ?
4) are there any performance issues in the app ?

