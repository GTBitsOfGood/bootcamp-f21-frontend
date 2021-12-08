import BrowseScreen from "../../screens/Browse/BrowseScreen";

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3001/animals")
    const animals = await res.json()
    console.log(animals)
    return {
        props: { animals }
    }
}

export default BrowseScreen;