import ShoppingList from "@/scenes/home/ShoppingList";
import Subscribe from "@/scenes/home/Subscribe";
import MainCarousel from "@/scenes/home/MainCarousel";

const Home = () => {
  return (
    <div className="home">
      <MainCarousel />
      <ShoppingList />
      <Subscribe />
    </div>
  );
}

export default Home;
