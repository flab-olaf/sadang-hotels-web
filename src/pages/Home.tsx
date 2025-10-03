import { Text } from "@sadang-olaf/ui";
import HotelList from "@components/home/HotelList";

function HomePage() {
  return (
    <div>
      <HotelList />
      <Text style={{ height: 300, backgroundColor: "#efefef" }}>Footer</Text>
    </div>
  );
}

export default HomePage;
