import React from "react"
import styles from "@/styles/styles.module.css"
import Hero from "@/components/Hero"
import GameContainer from "@/components/GameContainer"

export default function Home() {
  return (
    <>
      <title>Home</title>
      <Hero heroImage="/hero.jpg" height="200px" header="Main Header" />
      <h1 className={styles.bigRedFont}>Home</h1>
      <p>This is the landing page for our Next.js app.</p>
      <p className={styles.blueFont}>This should be blue font.</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse eaque
        veritatis asperiores minus atque veniam. Dolores, itaque iusto, quasi
        non, minus sit repellendus saepe dolorum pariatur nesciunt iure qui
        dolor!
      </p>
      <p>
        Porro quaerat laborum nisi dolorum quis, culpa doloremque vero explicabo
        necessitatibus ipsa aspernatur cum mollitia ut recusandae rem aut
        temporibus quas doloribus neque illo! Ad maiores modi impedit
        voluptatibus nam.
      </p>
      <p>
        Pariatur perspiciatis dicta ratione a eius quidem, id corporis ducimus
        vel illo, quo velit? Repudiandae nostrum officiis, culpa ipsam
        consequatur tempora laboriosam! Veritatis accusamus aliquid quod vitae
        iure provident natus.
      </p>
      <p>
        Itaque omnis in maxime aliquid earum porro dignissimos, repudiandae,
        provident culpa doloribus quaerat odit. Laborum vero, neque amet
        quaerat, voluptates odit, sunt id qui veniam commodi inventore quis
        aliquid consequuntur.
      </p>
      <p>
        Voluptates obcaecati dolor maiores et laborum fugiat veritatis,
        repellat, fugit nulla tempore corporis explicabo assumenda! Hic
        repudiandae et repellat exercitationem accusantium, quos enim libero
        quod nemo, magnam, dolorem dolorum voluptatum?
      </p>
      <p>
        Ad delectus omnis impedit aliquid ut recusandae, inventore, qui
        excepturi ratione, praesentium consequuntur sequi aliquam facilis unde?
        Voluptatum libero, ipsa vel magnam asperiores doloremque delectus et
        laborum suscipit quidem ex!
      </p>
      <p>
        Quasi adipisci amet dolorum doloremque earum. Asperiores ipsa aut
        debitis laudantium veniam at mollitia. Harum, ullam molestiae excepturi
        voluptate aperiam optio in placeat, blanditiis consequuntur quae dolore
        quas, eaque veniam?
      </p>
      <p>
        Ipsum, eveniet dignissimos ex illum non atque sed aliquid totam saepe
        suscipit reiciendis eligendi qui facilis adipisci corporis recusandae a
        quas voluptatibus corrupti repellat deserunt praesentium quidem? Quis,
        minus amet.
      </p>
    </>
  )
}
