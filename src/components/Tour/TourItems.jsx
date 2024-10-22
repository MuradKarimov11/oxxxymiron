import { Link } from "react-router-dom";

import { sortByDate } from "../../utils/common";
import { useTourItems } from "../../hooks/useTourItems";

import { Section } from "../Section/Section";
import { Loader } from "../Loader/Loader";
import { TourItem } from "./TourItem";
import { SectionTitle } from "../Title/SectionTitle";


export const TourItems = () => {

  const {items = [], isLoading} = useTourItems()

  const filtered = sortByDate(
    items
    .filter(({soldOut, ticketLink}) => !soldOut && ticketLink)
    .filter((_, i) => i < 5)
  );

  return (
    <Section className='tour'>
      <div className="container">
        <SectionTitle text="Концерты"/>
        {isLoading ? (<Loader/>) : (
          <ul className="tour-list">
            {filtered.map((item, i) => <TourItem {...item} i={i} key={item.sys.id}/>)}
          </ul>
        )}

        <Link to="/tour" className="button-more">
          Все концерты
        </Link>
      </div>    
    </Section>
  )
}
