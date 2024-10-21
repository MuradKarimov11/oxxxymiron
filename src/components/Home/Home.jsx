import  MainBanner  from "./MainBanner";
import  TourItems  from "../Tour/TourItems";
import TourBanner from "./TourBanner";
import Tracks from '../Tracks/Tracks';

export const Home = () => (
  <main className="main">
    <MainBanner/>
    <TourItems/>
    <TourBanner/>
    <Tracks/>
  </main>
)
