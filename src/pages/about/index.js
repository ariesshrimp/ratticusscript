'use strict'
import Helmet from 'react-helmet'
import React from 'react'

const ratPictures = require.context('./assets', true, /rat/)

export const Thumbnail = ({ alt, link, source }) => <a href={ link } target="_">
  <img src={ require(`./${source}`) } alt={ alt }></img>
</a>

export const AboutPage = props => <section>
  <Helmet
    title="About | RatticusScript"
    meta={[{ 
      content: 'Some stuff you can pretend to like if you need to make conversation with me.',
      name: 'description'
    }]}
  />
  <h1>About Me</h1>
  <p>I studied analytic philosophy at the University of Colorado, Boulder, and also at Western Washington University. I see everything through a Socratic lens, and it makes me lame at parties. Please reach out to chat about anything you like - I'm always excited to meet new people. Otherwise I wouldn't have a personal website 😘</p>

  <p>If you'd like to talk, but aren't sure about what, here are some things that have influenced me:</p>
  <ul>

    <h2>Philosophy</h2>
    <div>
      <Thumbnail link="https://www.overdrive.com/media/1223521/countdown" source="assets/cover-countdown.jpg" alt="Countdown book cover."/>
      <Thumbnail link="https://www.overdrive.com/media/515281/the-world-without-us" source="assets/cover-world-without-us.jpg" alt="The World Without Us book cover."/>
      <Thumbnail link="https://www.overdrive.com/media/265875/eating-animals" source="assets/cover-eating-animals.jpg" alt="Eating animals book cover."/>
      <Thumbnail link="https://www.overdrive.com/media/511535/dominion" source="assets/cover-dominion.jpg" alt="Dominion book cover."/>
      <Thumbnail link="https://www.overdrive.com/media/1263597/slaughterhouse" source="assets/cover-slaughterhouse.jpg" alt="Slaughterhouse book cover."/>
      <Thumbnail link="https://www.overdrive.com/media/585585/the-best-of-all-possible-worlds" source="assets/cover-best-of-all-worlds.jpg" alt="Best of All Possible Worlds book cover."/>
      <Thumbnail link="http://www.physics.princeton.edu/ph115/LQ.pdf" source="assets/cover-the-last-question.jpg" alt="The Last Question book cover."/>
      <Thumbnail link="http://www.tandon-books.com/Humanities/PL2064%20-%20Ethics%20and%20Technology/(PL2143)%20Elements%20of%20Moral%20Philosophy.pdf" source="assets/cover-elements-of-moral-philosophy.jpg" alt="Elements of Moral Philosophy book cover." />
    </div>

    <li>John Stuart Mill, Jeremy Bentham, Peter Singer, and several other important consquentialists have inspired me. Early on I thought that consquentialism was clearly the craziest possible world view. You can read up on it around here:
      <ul>
        <li><a href="http://www.utilitarianism.com/mill1.htm" target="_"><em>Utilitarianism</em> - John Stuart Mill</a></li>
        <li><a href="http://utilitarianism.com/jeremy-bentham/index.html" target="_"><em>An Introduction to the Principles of Morals and Legislation</em> - Jeremy Bentham</a></li>
        <li><a href="https://nwveg.org/files/Singer_The_Animal_Liberation_Movement.pdf" target="_"><em>Animal Liberation</em> - Peter Singer</a></li>
      </ul>
    </li>

    <li>There is a deep and yet mysterious connection between the words we use, the concepts they represent, and the material states-of-affairs they pick out. Very little has been written directly on this subject, but good starting points are important figures in the philosophy of language like Bertrand Russel and Saul Kripke. <em>On Denoting</em> is a great place to start.
      <ul>
        <li><a href="http://philo.ruc.edu.cn/logic/reading/On%20sense%20and%20reference.pdf" target="_"><em>On Sense and Reference</em> - Gottlob Frege</a></li>
        <li><a href="http://www.theotodman.com/Kripke_Naming.pdf" target="_"><em>Naming and Necessity</em> - Saul Kripke</a></li>
        <li><a href="http://www.uvm.edu/~lderosse/courses/lang/Russell(1905).pdf" target="_"><em>On Denoting</em> - Bertrand Russel</a></li>
      </ul>
    </li>

    <li>Many people have written about the problem of evil for traditional Christianity. The best thing you can read about it is probably:
      <ul>
        <li><a href="https://www.overdrive.com/media/585585/the-best-of-all-possible-worlds" target="_"><em>The Best of All Possible Worlds: A Story of Philosophers, God, and Evil in the Age of Reason</em> - Steven Nadler</a></li>
      </ul>
    </li>

    <li>The problem of induction is irresolvable. There is no plausible way to salvage it. Accepting that commits you to a leaky world view that empirical evidence alone can't seal. David Hume defined the problem once and for all in his <em>Enquiry Concerning Human Understanding</em>.
      <ul>
        <li><a href="http://www.earlymoderntexts.com/assets/pdfs/hume1748.pdf" target="_"><em>Enquiry Concerning Human Understanding</em> - David Hume</a></li>
      </ul>
    </li>

    <li>Perhaps no book has had a larger impact on me than <em>Countdown: Our Last, Best Hope for a Future on Earth?</em> This book changed the entire direction of my life - it is the reason I learned to program in pursuit of a longer lever of influence, and it has shaped more of my personal decisions than anything else I can think of since. I recommend you read it next to its companion <em>The World Witout Us</em>
      <ul>
        <li><a href="https://www.overdrive.com/media/515281/the-world-without-us" target="_"><em>The World Without Us</em> - Alan Weisman</a></li>
        <li><a href="https://www.overdrive.com/media/1223521/countdown" target="_"><em>Countdown: Our Last, Best Hope for a Future on Earth?</em> - Alan Weisman</a></li>
      </ul>
    </li>

    <li>There are many, many people that helped to open my eyes to the intrinsic worth of non-human animals, and the tyranical cruelty with which we treat them. Here's a short list:
      <ul>
        <li><a href="https://www.overdrive.com/media/265875/eating-animals" target="_"><em>Eating Animals</em> - Jonath Safran Foer</a></li>
        <li><a href="https://www.overdrive.com/media/114394/charlottes-web" target="_"><em>Charlotte's Web</em> -  E.B. White</a></li>
        <li><a href="http://www.authorama.com/a-dogs-tale-1.html" target="_"><em>A Dog's Tale</em> - Mark Twain</a></li>
        <li><a href="http://www.playr.org/play/pokemon_red/420" target="_">Pokémon Red</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Avatar:_The_Last_Airbender" target="_">Avatar: the Last Airbender</a></li>
      </ul>
    </li>


    <h2>Fiction</h2>
    <div>
      <Thumbnail link="https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind" source="assets/movie-eternal-sunshine.jpg" alt="Eternal Sunshine on the Spotless Mind movie poster."/>
      <Thumbnail link="https://en.wikipedia.org/wiki/Once_(film)" source="assets/movie-once.jpg" alt="Once movie poster" />
      <Thumbnail link="https://www.overdrive.com/media/1866841/shining" source="assets/cover-the-shining.jpg" alt="The Shining bespoke cartoon book cover"/>
      <Thumbnail link="http://www.adultswim.com/videos/rick-and-morty/" source="assets/movie-rick-and-morty.jpg" alt="Rick using a terrified Morty as a human shield"/>
      <Thumbnail link="https://www.overdrive.com/media/2678033/the-sandman-volume-1" source="assets/comics-sandman.jpg" alt="Sandman Vol.2 book cover"/>
      <Thumbnail link="https://www.overdrive.com/media/2504933/the-gunslinger" source="assets/cover-dark-tower.jpg" alt="Wizard and Glass, Dark Tower Vol. 4 book cover"/>
      <Thumbnail link="https://www.overdrive.com/media/2677748/all-star-superman" source="assets/comics-superman.jpg" alt="A benevelont superman holds the word in his hands. Image by Frank Quietly."/>
      <Thumbnail link="http://www.avclub.com/tv/batman-the-animated-series/" source="assets/comics-batman.jpg" alt="Batman in the shadows, circa Batman: the animated series."/>
    </div>

    <li>Some stories that have strongly influenced my views about love and <strong>The Point of Life™</strong> include <em>Eternal Sunshine on the Spotless Mind</em>, <em>Once</em>, <em>The Wonder Years</em>, <em>500 Days of Summer</em>, <em>The Shining</em>, and <em>Adventure Time</em>. They are all beautiful works of fiction.</li>

    <li>Many works of science-fiction have inspired me, especially time-travel stories generally. Reading The Dark Tower series fundamentally changed the way I think about stories and endings. Sandman, too.</li>

    <li>Superhero mythology has profoundly influenced me. Superman, Batman, Judge Dredd, and Hellboy especially resonate at my frequency - as well as many others. Brilliant people have said much in their voices. See especially:
      <ul>
        <li><a href="http://www.avclub.com/tv/batman-the-animated-series/"><em>Batman: the Animated Series</em></a></li>
        <li><a href="https://www.overdrive.com/media/2677748/all-star-superman">Grant Morrison's <em>All-Star Superman</em></a></li>
      </ul>
    </li>

    <li><a href="http://comicsalliance.com/author/chris-sims/">Comicsalliance writer and batmanologist Chris Sims</a> has shaped much of the way I approach fiction. <a href="http://moviebob.blogspot.com/">Bob Chipman</a>, formerly of <a href="http://www.escapistmagazine.com/videos/view/escape-to-the-movies">Escape to the Movies on the Escapist</a> has had a similar impact on my approach to film.</li>


    <h2>Music</h2>
    <div>
      <Thumbnail link="https://www.youtube.com/watch?v=IluRBvnYMoY&list=PLDGvrCyjfEatTU8RGi1lNZ5KB75bq6KRV" source="assets/music-daft-punk.jpg" alt="Random Access Memories album cover" />
      <Thumbnail link="https://www.youtube.com/watch?v=9NLZCLKppZs&list=PLxfOxxV02Em24f9rdvz8t1OfGAf1TI1I6" source="assets/music-john-mayer-2.jpg" alt="Where the Light Is album cover" />
      <Thumbnail link="https://www.youtube.com/watch?v=GeCClzNCfcA&list=PL4y_nGkVeFwslrc5Gw6UKEkxjVdozI0-e" source="assets/music-john-mayer-3.jpg" alt="Battle Studies album cover" />
      <Thumbnail link="https://www.youtube.com/watch?v=ktQxEpr_emU&list=PLBAHmVTbbf92bwrFZMlWbSD8Dpm_vYq8a" source="assets/music-justin-timberlake.jpg" alt="Future Sex Love Sounds album cover"/>
    </div>

    <li>No musician has influenced me more than John Mayer. He taught me to seek sinceriety in all things, and to value heart above all else in art and expression. One day Daft Punk will go on a US tour again...</li>


    <h2>Programming and Technology</h2>
    <div>
      <Thumbnail link="https://github.com/funjs/book-source" source="assets/cover-functional-javascript.jpg" alt="Functional JavaScript book cover"/>
      <Thumbnail link="https://github.com/getify/You-Dont-Know-JS" source="assets/cover-you-dont-know-js.jpg" alt="You Don't Know JS: Async and Performance book cover"/>
      <Thumbnail link="http://eloquentjavascript.net" source="assets/cover-eloquent-javascript.jpg" alt="Eloquent JavaScript: 2nd Edition book cover" />
      <Thumbnail link="http://craphound.com/news/2014/12/10/information-doesnt-want-to-be-free-audiobook" source="assets/cover-information-doesnt-want-to-be-free.jpg" alt="Inofrmation Doesn't Want to Be Free book cover"/>
    </div>

    <li>I have lots of opinions about the fabric of technology in our lives, especially the internet. It's hard to name particular works that have strongly influenced me, since there are so many little things happening all the time that nudge me this way or that. A great book on the subject is <a href="http://craphound.com/news/2014/12/10/information-doesnt-want-to-be-free-audiobook/">Information Doesn't Want to Be Free</a>.</li>

    <li>On the subject of programming, <a href="https://github.com/funjs/book-source">Michael Fogus's Functional Javascript</a> forever altered my perspective on the language, as has Kyle Simpson's work, especially <a href="https://github.com/getify/You-Dont-Know-JS">You Don't Know JS</a>.</li>

    <li>I strongly identify with declarative programming styles, and frameworks like <a href="https://facebook.github.io/react/">React</a> and <a href="http://elm-lang.org/">the Elm architecture</a> have shaped that perspective. Both enjoy positive, intelligent communities full of clever, diverse people.</li>


    <h2>Rats</h2>
    <div>
      { ratPictures.keys().map((file, index) => {
        const picture = ratPictures(file)
        return <img key={ index } src={ picture } alt="My rats: Clementine, Jalino, and Pandora"></img>
      }) }
    </div>

    <li>If you've never met rats, you should. They are the model of innocence in this world.</li>
  </ul>

  <p>You can also check out <a href="/reading">my reading journal here on this site</a>. I've written about <a href="/posts/2016-09-23">the general architecture for this website here</a>.</p>
</section>
