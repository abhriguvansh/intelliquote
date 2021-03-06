# intelliquote

### Features/Use:

The following will be a description of our features and how to use them.

FE-1 Search Functionality:

The search Feature is located on the home page of the web app in the form of a search bar. The search bar is
broken into two 3 main components that the user can interact with:

    1. Search Box - The user can click into the search bar and type any key phrase.

    2. Search Button - Clicking this button will trigger a search query for what ever is currently typed into the
    Search Box (1), results will be displayed in list view using FE-5 (discussed below). If there are no matching results found, the page will simply be blank

    3. Random Button - Clicking this will trigger a search query for a single random quote using FE-6 (discussed below), displayed using FE-5 (discussed below)

FE-2 Quiz:

The quiz feature is a personality quiz to figure out the personality of the user (OCEAN - The Big 5 Personalities).
The quiz can be found on the top right of the nav bar. Accessing the quiz page will prompt the user with a list of
statements I, II, III. The user will click a button below the statement list that he/she resonates with the most.
The buttons are all labeled to match the prompted statements. Clicking each statement will prompt the next statement
until the quiz is over, in which case a personality that has been calculated to match the user will be displayed

FE-3 Email Service:

The email service is a feature that allows the user to subscribe to an email listing, which will interact with the user
by sending out interval based emails that align with the users personality through FE-4 (discussed below). To access
this feature, the user can click the email page on the top left of the nav bar which will redirect them to the email
page. Here the user can type in their email in the input box labeled "Email Address" and select from the multiple choice
box regarding contact frequency. NOTE: This feature will not work since using the email service requires a hidden API key
that we can not share due to security reasons.

FE-4 Matching System:

This feature allows the matching of OCEAN personality traits to quotes. This feature is implemented in our backend through
tags and is not user facing. Used in FE-3 for the email service.

FE-5 Display Quotes:

This is part of our MVC model (View). This features allows the front end web app to display quotes received from the backend
after a query. Used in FE-1 and FE-6. This feature is user facing but the user doesn't interact with this feature directly. Instead
the user will access FE-1 (discussed above) which will trigger FE-5.

FE-6 Random Quote:

This feature is for querying a random quote stored in our data base. Not user facing but used in FE-1 Random Button (discussed above)

FE-7 Suggest Feature:

This feature allows users to suggest new quotes to add. Can be accessed by clicking suggest tab of the nav bar (top left).
This will redirect the user to the suggest page where they can suggest new quotes. The user can type in the quote body in the input box labeled
"Quote", an author in Author Box labeled "Author", and the personality attached to the quote in the "Personality" section and click the Submit button to submit the quote for approval FE-8 (discussed below).

FE-8 Admin Panel:

This features allows administrators the ability to approve suggested quotes from FE-7 (above) and to look at flagged quotes from FE-9 (below).
And admin can click on the "Get Suggested" button to get quotes that users have suggested. Once they see the quotes they can choose to approve or reject the suggested quote.
The admin can also click on the "Get Flagged" button to retrieve quotes that a user has flagged. Once the user sees the quote, they can choose to remove the quote or reset the flag.

### How to Run the Back end

---

Technologies Required:

- Java 8

- Apache Maven

---

To begin running the backend, you must first install both dependencies.

Then, navigating to the quotebackend folder containing the **POM.XML** file, run:

```
mvn package
```

If you are using the Intellij IDE, simply clicking on the **POM.XML** file will prompt the ide to perform the download for you.

To start the backend, compile and run the **QuotebackendApplication.java** file. This is the runner file for the project. You can do this via any method of compiling and running a Java file.

If you do not get any error messages, you can then proceed to running the front end.

### How to run the frontend

---

Technologies Required:

- NodeJS
- Web Browser

---

To begin running, make sure you have all the technologies required

Navigate to the _intelliquote_ folder and run the command

```
npm install
```

This will install all the dependencies needed for our webapp

Once the dependencies are installed, run the command to start a local server

```
npm start
```

This should start a local server on `localhost:3000`

Navigate to `localhost:3000` on your web browser

You are now able to access our software. Note that the backend should be running in order to access all the features
