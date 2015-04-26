#Chrome Extension Message Demo

One of the trickier bits of writing Chrome extensions is passing messages around.  I built this demo in order to provide some much-needed examples for beginners.

###Running the example

#####Pre-reqs

You need something capable of serving a directory on port `8080`.  I use [`http-server`](https://github.com/indexzero/http-server), installable via npm with `npm install -g http-server` but this is not required.

You'll also need Chrome/Chromium, with extensions set to developer mode.  Click on the settings menu (top-right) and browse `More tools -> Extensions`.  Once there, click the `Developer Mode` checkbox at the top of the page.  Once selected, you should see something like:

![Developer page](http://i.imgur.com/g1gzwqP.png)

#####Loading the extension

`git clone` this repository to the directory of your choice.  Go back to the Extensions page and click `Load Unpacked Extension`.  Browse to the directory you cloned this from and click `open`.  You should see a new extension, titled `Page Message Demo` at the top of the list:

![Page Message Demo loaded](http://i.imgur.com/tHkns08.png)

Congrats!  You're almost there.

#####Starting the server

Browse to the `page-message-demo` directory and start your server.  If you're using `http-server`, it's as simple as:

`http-server`

Browse to [localhost:8080](http://localhost:8080) and you'll see a very basic page with a greeting.  Open your console.  If everything worked, you should see:

```
content.js loaded
Extention sent message Object {type: "connect"}
web.js loaded
```

Click the button, and messages will be sent, triggering more logs to the console.

#####Viewing logs from background.js

Sharp-eyed coders will notice that the console only contains logs from `web.js` and `content.js`.  In order to view the output from `background.js`, we'll need to go back to the extensions page and click on `background page`.  This will open up devtools for the extension itself.

#####Making changes

Whenever you make changes to extension files (and please do!  Noodle around as much as you need to), you'll need to refresh the extension itself, which is fairly easy - just refresh Chrome's extension page.

##Thanks

Thanks to [Zirak](https://github.com/zirak) for helping me learn all the ins and outs of extension management