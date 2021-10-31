import BrowseScreen from "../../screens/Browse/BrowseScreen";
// export getServerSideProps;

export async function getServerSideProps() {
  // context is useful to learn about which routes it indexed
  const res  = await fetch("http://localhost:3001/animals")
  const animals = await res.json()
  if (!animals) {
    return {
      notFound: true,
    }
  }
  return {
    props: { animals }
  }
}

export default BrowseScreen;