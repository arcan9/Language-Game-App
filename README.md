# Hada Vocab Quiz

Korean vocab learning app
<br>
Live: https://kor-vocab.netlify.app/

# Tech used

HTML, CSS, Javascript

# Optimization(s)

I'm not sure the current structure of the app will work for a much bigger project, so might have to research how to optimize if I ever revisit this project again.

# What I Learned

The restructuring of the app's architecture was enligtening. After adding and validating the basic functionality like functions and event listeners for the questions and answers to work, I separated responsibilities into smaller functions. Particulary, I wrote the event listeners only once, so that they only run once at the start of the app and don't have to run every time a question is called. While this is a small app, I didn't have an easy time with it. The .bind() method, I learned, is required in this case in order to pass the `this` context to a function within a funtion. Frankly, I still don't 100% understand, but I get the concept.
