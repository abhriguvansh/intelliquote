# intelliquote

### How to Run the Back end

---

Technologies Required:

- Java 8

- Apache Maven

---

To begin running the backend, you must first install both dependencies.

Then, navigating to the folder containing the **POM.XML** file, run:

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
