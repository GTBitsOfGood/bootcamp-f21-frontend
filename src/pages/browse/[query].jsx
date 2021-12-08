//create a new screen called AnimalPost (folder) with a jsx file (AnimalPostScreen) in it
import AnimalPostScreen from "../../screens/AnimalPost/AnimalPostScreen";

export async function getServerSideProps(context) {
    console.log(context.params)
    const { query } = context.params
    const res = await fetch(`http://localhost:3001/animals?id=${query}`)
    const animals = await res.json()
    console.log(animals[0])

    return {
        props: {animals : animals[0]}
    }
}

export default AnimalPostScreen;