// import { LucideEye } from 'lucide-react'
import { useState } from 'react'
import TinderCard from 'react-tinder-card'
import TinderCardButtons from "./TinderCardButtons.jsx"

const db = [
    {
        name: 'Richard Hendricks',
        url: 'https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g'
    },
    {
        name: 'Erlich Bachman',
        url: 'https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Monica Hall',
        url: 'https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        name: 'Jared Dunn',
        url: 'https://images.pexels.com/photos/6652928/pexels-photo-6652928.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        name: 'Dinesh Chugtai',
        url: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
]

function TinderCards() {
    const characters = db
    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    return (
      <div className="">
        <div className="cardContainer ">
          {characters.map((character) => (
            <TinderCard
              className="swipe absolute "
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
              preventSwipe={["left", "right"]}
            >
              <div
                style={{ backgroundImage: "url(" + character.url + ")" }}
                className="card relative size-80 bg-center bg-cover shadow-xl p-5 "
              >
                <h2 className="text-white">{character.name}, 27</h2>
                <p className="text-white font-light text-xs ">
                  Buenos Aires a 50km
                </p>
                <p className="text-white font-light text-xs ">Guitarrista</p>
              </div>
              <span className="absolute w-80 bottom-0 flex justify-between p-4">
                <TinderCardButtons />
              </span>
            </TinderCard>
          ))}
        </div>
        {lastDirection ? (
          <h2 className="infoText">You swiped {lastDirection}</h2>
        ) : (
          <h2 className="infoText" />
        )}
      </div>
    );
}

export default TinderCards