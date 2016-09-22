import React from 'react'

import { createMarkup } from '../../utilities.js'

import CSS from './styles.scss'

const ratPictures = require.context('./assets', true, /rat/)
const johnMayerCovers = require.context('./assets', true, /john-mayer/)
const comicCovers = require.context('./assets', true, /comics/)

export const AboutPage = props => {
  return <section className="about">
    <h1 className={ CSS.header }>About Me</h1>
    <p>I studied analytic philosophy at the University of Colorado, Boulder, and also at Western Washington University. I see everything through a Socratic lens, and it makes me lame at parties. Please reach out to chat about anything you like - I'm always excited to meet new people. Otherwise I wouldn't have a personal website 😘</p>

    <p>If you'd like to talk, but aren't sure about what, here are some things that have influenced me:</p>
    <ul style={{ listStyle: "initial" }}>

      <h2>Philosophy</h2>
      <div className={ CSS.imageGrid }>
        <img className={ CSS.image } src={ require('./assets/cover-countdown.jpg') }></img>
        <img className={ CSS.image } src={ require('./assets/cover-world-without-us.jpg') }></img>
        <img className={ CSS.image } src={ require('./assets/cover-eating-animals.jpg') }></img>
        <img className={ CSS.image } src={ require('./assets/cover-dominion.jpg') }></img>
        <img className={ CSS.image } src={ require('./assets/cover-slaughterhouse.jpg') }></img>
        <img className={ CSS.image } src={ require('./assets/cover-best-of-all-worlds.jpg') }></img>
        <img className={ CSS.image } src={ require('./assets/cover-the-last-question.jpg') }></img>
        <img className={ CSS.image } src={ require('./assets/cover-elements-of-moral-philosophy.jpg') }></img>
      </div>

      <li>John Stuart Mill, Jeremy Bentham, Peter Singer, and several other important consquentialists. Early on I thought that consquentialism was clearly the craziest possible world view. You can read up on it around here: <a href="http://www.utilitarianism.com/mill1.htm">Mill's "Utilitarianism"</a>, <a href="http://utilitarianism.com/jeremy-bentham/index.html">Bentham's "An Introduction to the Principles
of Morals and Legislation"</a>, <a href="https://nwveg.org/files/Singer_The_Animal_Liberation_Movement.pdf">Singer's "Animal Liberation"</a></li>

      <li>There is a deep and yet mysterious connection between the words we use, the concepts they represent, and the material states-of-affairs they pick out. Very little has been written directly on this subject, but good starting points are important figures in the philosophy of language like Bertran Russel and Saul Kripke. On Denoting is a great place to start.</li>

      <li>Many people have written about the problem of evil for traditional Christianity. The best thing you can read about it is probably <a href="http://press.princeton.edu/titles/9172.html">Steven Nadler's "The Best of All Possible Worlds: A Story of Philosophers, God, and Evil in the Age of Reason"</a>.</li>

      <li>The problem of induction is irresolvable. There is no plausible way to salvage it. Accepting that commits you to a leaky world view that empirical evidence alone can't seal. David Hume defined the problem once and for all in his <a href="http://www.earlymoderntexts.com/assets/pdfs/hume1748.pdf">Enquiry Concerning Human Understanding</a></li>

      <li>Perhaps no book has had a larger impact on me than <a href="http://www.littlebrown.com/countdown.html">Countdown: Our Last, Best Hope for a Future on Earth?</a> This book changed the entire direction of my life - it is the reason I learned to program in pursuit of a longer lever of influence, and it has shaped more of my personal decisions than anything else I can think of since. I recommend you read it next to its companion <a href="https://books.google.com/books?id=HbAqDe81egIC&printsec=frontcover&dq=alan+weisman&hl=en&sa=X&ved=0ahUKEwjlwbnSy6HPAhVP7mMKHSCyAZEQ6AEIHDAA#v=onepage&q=alan%20weisman&f=false">"The World Witout Us"</a></li>

      <li>There are many people that helped to open my eyes to the intrinsic worth of non-human animals, and the tyranical cruelty with which we treat them. Some good things to read include "Eating Animals", "Babe", "Charolette's Web", "Dominion: The Power of Man, the Suffering of Animals, and the Call to Mercy", "Slaughterhouse", Pokémon, Avatar: the Last Airbender, and Mark Twain's A Dog's Tale, but there are many, many such works.</li>


      <h2>Fiction</h2>
      <div className={ CSS.imageGrid }>
        <img className={ CSS.image } src={ require('./assets/movie-eternal-sunshine.jpg') }></img>
        <img className={ CSS.image } src={ require('./assets/movie-once.jpg') }></img>
        <img className={ CSS.image } src={ require('./assets/cover-the-shining.jpg') }></img>
        <img className={ CSS.image } src={ require('./assets/movie-rick-and-morty.jpg') }></img>
        <img className={ CSS.image } src={ require('./assets/comics-sandman.jpg') }></img>
        <img className={ CSS.image } src={ require('./assets/cover-dark-tower.jpg') }></img>
        <img className={ CSS.image } src={ require('./assets/comics-superman.jpg') }></img>
        <img className={ CSS.image } src={ require('./assets/comics-batman.jpg') }></img>
      </div>

      <li>Some stories that have strongly influenced my views about love and "The Point of Life" include Eternal Sunshine on the Spotless Mind, Once, The Wonder Years, 500 Days of Summer, The Shining, and Adventure Time. They are all beautiful works of fiction.</li>

      <li>Many works of science-fiction have inspired me, especially time-travel stories generally. Reading The Dark Tower series fundamentally changed the way I think about stories and endings. Sandman, too.</li>

      <li>Superhero mythology has profoundly influenced me. Superman, Batman, Judge Dredd, and Spider-Man especially resonate at my frequency - as well as many others. Brilliant people have said much in their voices. See especially <a href="">Batman: the Animated Series</a> and <a href="">Grant Morrison's All-Star Superman</a>.</li>

      <li><a href="http://comicsalliance.com/author/chris-sims/">Comicsalliance writer and batmanologist Chris Sims</a> has shaped much of the way I approach fiction. <a href="http://moviebob.blogspot.com/">Bob Chipman</a>, formerly of <a href="http://www.escapistmagazine.com/videos/view/escape-to-the-movies">Escape to the Movies on the Escapist</a> has had a similar impact on my approach to film.</li>


      <h2>Music</h2>
      <div className={ CSS.imageGrid }>
        { johnMayerCovers.keys().map((file, index) => {
          const picture = johnMayerCovers(file)
          return <a className={ CSS.image } href=""><img key={ index } src={ picture }></img></a>
        }) }
      </div>

      <li>No musician has influenced me more than John Mayer. He taught me to seek sinceriety in all things, and to value heart above all else in art and expression.</li>


      <h2>Programming and Technology</h2>
      <div className={ CSS.imageGrid }>
        <a className={ CSS.image } href="https://github.com/funjs/book-source"><img src={ require('./assets/cover-functional-javascript.jpg') }></img></a>
        <a className={ CSS.image } href="https://github.com/getify/You-Dont-Know-JS"><img src={ require('./assets/cover-you-dont-know-js.jpg') }></img></a>
        <a className={ CSS.image } href="http://eloquentjavascript.net/"><img src={ require('./assets/cover-eloquent-javascript.jpg') }></img></a>
        <a className={ CSS.image } href="http://craphound.com/news/2014/12/10/information-doesnt-want-to-be-free-audiobook/"><img src={ require('./assets/cover-information-doesnt-want-to-be-free.jpg') }></img></a>
      </div>

      <li>I have lots of opinions about the fabric of technology in our lives, especially the internet. It's hard to name particular works that have strongly influenced me, since there are so many little things happening all the time that nudge me this way or that. A great book on the subject is <a href="http://craphound.com/news/2014/12/10/information-doesnt-want-to-be-free-audiobook/">Information Doesn't Want to Be Free</a>.</li>

      <li>On the subject of programming, <a href="https://github.com/funjs/book-source">Michael Fogus's Functional Javascript</a> forever altered my perspective on the language, as has Kyle Simpson's work, especially <a href="https://github.com/getify/You-Dont-Know-JS">You Don't Know JS</a>.</li>

      <li>I strongly identify with declarative programming styles, and frameworks like <a href="https://facebook.github.io/react/">React</a> and <a href="http://elm-lang.org/">the Elm architecture</a> have shaped that perspective. Both enjoy positive, intelligent communities full of clever, diverse people.</li>

      <h2>Rats</h2>
      <div className={ CSS.imageGrid }>
        { ratPictures.keys().map((file, index) => {
          const picture = ratPictures(file)
          return <img key={ index } className={ CSS.image } src={ picture }></img>
        }) }
      </div>
      <li>If you've never met rats, you should. They are the model of innocence in this world.</li>
    </ul>

    <p>You can also check out <a href="/reading">my reading journal here on this site</a>. I've written about <a href="/posts/">the general architecture for this website here</a>.</p>
  </section>
}
