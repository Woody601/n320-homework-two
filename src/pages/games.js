import React from "react"
import styles from "@/styles/styles.module.css"
import GameContainer from "@/components/GameContainer"

export default function Home() {
  return (
    <>
      <title>Games</title>
      <h1>My Favorite Games</h1>
      <p>
        Here are some of my favorite video games down below! Take a look to see
        what games I enjoy playing!
      </p>
      <div className={styles.gameContainer}>
        <GameContainer
          gameImage="/mario_150.png"
          gameTitle="Super Mario Odyssey"
          gameBriefDescription="Join Mario on a globe-trotting adventure to save Princess Peach from Bowser."
          gameRating="E"
        />
        <GameContainer
          gameImage="/botw_150.png"
          gameTitle="The Legend of Zelda: Breath of the Wild"
          gameBriefDescription="Explore a vast open world, solve puzzles, and battle foes in this critically acclaimed action-adventure game."
          gameRating="E10+"
        />
        <GameContainer
          gameImage="/minecraft_150.jpg"
          gameTitle="Minecraft"
          gameBriefDescription="Build, explore, and survive in a blocky world of limitless creativity."
          gameRating="E"
        />
        <GameContainer
          gameImage="/fortnite_150.jpg"
          gameTitle="Fortnite"
          gameBriefDescription="Drop into a battle royale and outlast your opponents in a colorful world."
          gameRating="M"
        />
        <GameContainer
          gameImage="/gta5_150.jpg"
          gameTitle="Grand Theft Auto V"
          gameBriefDescription="Explore the fictional city of Los Santos and get involved in criminal activities."
          gameRating="M"
        />
        <GameContainer
          gameImage="/skyrim_150.jpg"
          gameTitle="The Elder Scrolls V: Skyrim"
          gameBriefDescription="Embark on an epic fantasy adventure as the Dragonborn in the land of Skyrim."
          gameRating="M"
        />
      </div>
    </>
  )
}
