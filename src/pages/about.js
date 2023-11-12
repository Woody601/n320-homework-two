import React from "react"
import styles from "@/styles/styles.module.css"
import GamePicture from "@/components/GamePicture"

export default function About() {
  return (
    <>
      <title>About</title>
      <h1>ABOUT</h1>
      <h4>This is about me!</h4>
      <img src="Mychal_Wood.jpg" className={styles.portrait} />
      <p>
        Hello there, my name is Mychal Wood! I am currently a Senior at IUPUI
        pursuing the Full Stack program, where I'll be getting two Bachelor's
        degrees when I graduate: Informatics and Media Arts and Science with a
        specialization in Web Design and Development. I grew up and have lived
        in Beech Grove my entire life, so I am very familiar with the
        surrounding area. Scroll down to see some of my likes and interests!
      </p>
      <p>
        In my free time, I love to hang out with friends and family, watch TV,
        play videogames, build Legos, go camping, and much more! Some of my
        favorite video games are The Legend of Zelda, Mario Kart, Super Smash
        Bros Ultimate, Terraria, Fortnite, Minecraft, and the list goes on and
        on!
      </p>
      <img src="SmashBros.jpg" className={styles.gamePicture} />
      <img src="Zelda.jpg" className={styles.gamePicture} />
      <p>
        Also in my free time, I like to mess with various electronic things.
        From my 3D printer, to even my Raspberry Pi, there is a wide variety of
        things I like to mess with. I even plan on building a PC in the coming
        months to put the skills I've learned to the test, and to build one to
        game on! Also in high school, I was part of a Vex Robotics team, where I
        helped keep track of the engineering notebook and anything else that was
        needed at the time.
      </p>
    </>
  )
}
