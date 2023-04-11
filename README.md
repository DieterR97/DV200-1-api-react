# Currency Watch
### DV200 COMPONENT AND OBJECT ORIENTED PROGRAMMING
#### INTERACTIVE DEVELOPMENT 200 | TERM 1

## About the Project
* ### Project Description

This term we explored the development paradigm of Object Oriented Programming (OOP) with the basics of component based development. This final project is a data driven web application using an API, Node.js, React and Charts.js.

I was tasked with researching, analysing, implementing and visualising a data set (API) with the open source data visualisation framework Charts.js.

I ended up going with an API provided by *CurrencyBeacon* which provides real-time and historical exchange rates for world currencies. I then used Charts.js to display this data in various ways.

* ### Built With
   * Node.js
   * Visual Studio Code
   * React
   * Javascript
   * CSS
   * JSX
   * Charts.js
   * Bootstrap
   * Axios
   * React-Router-Dom

## Getting Started
* ### Prerequisites
   1. Visual Studio Code
   2. Browser (Chrome, Edge, Firefox, etc)
   3. Node.js

* ### How to install

You can find the prerequisites here:

* [Visual Studio Code](https://code.visualstudio.com/download)
* [Chrome](https://www.google.com/chrome/)
* [Edge](https://www.microsoft.com/en-us/edge/download)
* [Firefox](https://www.mozilla.org/en-US/firefox/new/)
* [Node.js](https://nodejs.org/en/download)

After you installed the prerequisites you then open up Visual Studio Code (VSC) in a folder where you want to create a React app and run the following inside the terminal in your VSC :
* npx create-react-app .

or

* npx create-react-app applicationName

After the creation of the app you then run the following  also in your terminal inside VSC to install the required dependencies :
* npm i axios
* npm i bootstrap react-bootstrap
* npm i react-router-dom
* npm i react-chartjs-2 chart.js

Finally you run the following in your terminal to start the application :
* npm start

## Features and Functionality

This web application has:
   
   1. A landing page with introductory information, 
   2. A page where you can compare currencies exchange rates with one another using graphs including a Bar, Pie, Radar and Polar Area,
   3. A page where you can view the exchange rate of a single currency across a timeline and
   4. A page where you can convert a chosen amount of one currency to another. 
   
## Concept Process
* ### Wireframes

![low-fidelity-wireframes](https://user-images.githubusercontent.com/113913471/231190860-898e800f-7619-4001-b204-d4fb5eb25285.jpg)

## Development Process
* ### Implementation Process
    * Highlights
      * React is very fast in updating the dom as it's Object Oriented
      * Breaking up your web application into components is a very clean and re-useable way of coding
      * Axios is a usefull way of making your API calls and delivers promises which is great when it comes to using the data in the response
      * Routing is a clean and easy way of using your different pages and components, like the navbar, less code is used in the end
      * Charts.js is an awesome and super usefull way of displaying data
    * Challenges
      * Learning what Asynchronous programming is and AsyncAwait was a bit of a challenge getting my head around that
      * Learning the url structure of my specific API and how to pass parameters to it
      * Styling the Charts.js components

## Future Implementation

In the future I will most probably use a more user friendly API that supports more endpoints for free than that which my current API does. I will also implement more functionality into my web application such as choosing the dates from which you want to see the exchange rate for a certain currency, also choosing the time frames in which you want to see the exchange rates for.

## Final Outcome
* ### Mockups
* ### Video Demonstration

## Conclusion

I have enjoyed problem solving and developing the web application from the ground up. This was a challenging project but I overcame most of the challenges I faced and I’m extremely proud of and pleased with the final outcome of my Currency exchange visualisation web application. Working with my API was a challenge but also interesting and I learned quite a bit from it.

Learning React was awesome along with the very usefull implementation of axios, routing and component based approach. I love using components and Routing espescially.

Using the data visualisation framework Chart.js was as well a new learning experience which was fun and pleasing to work with.

I will deffinitely be using the technologies learned from throughout the term in future web applications.
