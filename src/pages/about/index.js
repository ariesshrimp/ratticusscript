import React from 'react'

import { createMarkup } from '../../utilities.js'

import CSS from './styles.scss'


export const AboutPage = props => {
  return <section className="about">
    <h1 className={ CSS.header }>About</h1>
    <p>I studied analytic philosophy at the University of Colorado, Boulder, and also at Western Washington University. I see everything through a Socratic lens, and it makes me lame at parties. Please reach out to chat about anything you like - I'm always excited to meet new people. Otherwise I wouldn't have a personal website 😘</p>

    <p>If you'd like to talk, but aren't sure about what, here are some things that influence me:</p>
    <ul style={{ listStyle: "initial" }}>
      <li>I have many ideas about race and cultural identity, they've largely been shaped by my experiences growing up abroad during my father's military career. Mostly I think those things have been destructive, unhelpful ways of stratifying people and dividing us from one another. Almost all of the benefits of any such concepts are a happenstance by-product of oppression, prejudice, and hatred. It's very hard to know where to go next.</li>

      <li>John Stuart Mill, Jeremy Bentham, Peter Singer, and several other important consquentialists. Early on I thought that consquentialism was clearly the craziest possible world view. You can read up on it around here: [LINKS]</li>

      <li>Many people have written about the problem of evil for traditional Christianity. The best thing you can read about it is probably: [LINK].</li>

      <li>The problem of induction is irresolvable. There is no plausible way to salvage it. Accepting that commits you to a leaky world view that empirical evidence alone can't seal. The best thing to read about is Hume: [LINK]</li>

      <li>Perhaps no book has had a larger impact on me than Countdown: Our Last, Best Hope for a Future on Earth? This book changed the entire direction of my life - it is the reason I learned to program in pursuit of a longer lever of influence, and it has shaped more of my personal decisions than anything else I can think of since.</li>

      <li>That article about moral weirdness</li>

      <li>James Rachels on relativity</li>

      <li>There are many people that helped to open my eyes to the intrinsic worth of non-human animals, and the tyranical cruelty with which we treat them. Some good things to read include Eating Animals, Babe, Charolette's Web, The Long Shadow of Animal Agriculture, Pokémon, and Mark Twain's A Dog's Tale, but there are many, many such works.</li>

      <li>Thomas Nagel's What's it Like to Be a Bat is the gold standard of clear writing and reasoning. I also recommend The Gettier Problem for the same reason.</li>

      <li>Some stories that have strongly influenced my views about love and "The Point of Life" include Eternal Sunshine on the Spotless Mind, Once, The Wonder Years, 500 Days of Summer, Paris Je T'aime, The Shining, and Adventure Time. They are all beautiful works of fiction.</li>

      <li>There is a deep and yet mysterious connection between the words we use, the concepts they represent, and the material states-of-affairs they pick out. Very little has been written directly on this subject, but good starting points are important figures in the philosophy of language like Bertran Russel and Saul Kripke. On Denoting is a great place to start.</li>

      <li>Many works of science-fiction have inspired me, especially time-travel stories generally. Reading The Dark Tower series fundamentally changed the way I think about stories and endings. Sandman, too.</li>

      <li>Superhero mythology has profoundly influenced me. Superman, Batman, and Spider-Man especially resonate at my frequency - as well as many others. Many brilliant people have said much using those voices. See especially Batman: the Animated Series, Grant Morrison's All-Star Superman.</li>

      <li>On the subject of literature, Comicsalliance.com writer Chris Sims has shaped much of the way I approach fiction. Bob Chipman, formerly of Escape to the Movies on the Escapist has had a similar impact on my approach to film.</li>

      <li>No musician has influenced me more than John Mayer. He taught me to seek sinceriety in all things, and to value heart above all else in art and expression.</li>

      <li>I have lots of opinions about the fabric of technology in our lives, especially the internet. It's hard to name particular works that have strongly influenced me, since there are so many little things happening all the time that nudge me this way or that. Michael Fogus' Functional Javascript forever altered my perspective on the language, as has Kyle Simpson's wok.</li>

      <li>I strongly identify with declarative programming styles, and frameworks like React and the Elm architecture have shaped that perspective. Both enjoy positive, intelligent communities full of clever, diverse people.</li>

      <li>If you've never met rats, you should. They are the model of innocence in this world.</li>
    </ul>

    <p>You can also check out my reading journal here: [LINK].</p>
    <p>I've written about the general architecture for this website here: [LINK].</p>
  </section>
}
