import { useEffect } from "react";
import { Section } from "../Section/Section";
import { SectionTitle } from "../Title/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import { getTourItems } from "../../reducers/tourReducer";
import { TourItem } from "./TourItem";
import { Link } from "react-router-dom";
import { sortByDate } from "../../utils/common";

export const TourItems = () => {

  const dispatch = useDispatch();

  const {items = [], isLoading} = useSelector(({tour}) => tour);

  useEffect(() => {
    dispatch(getTourItems);
  }, [dispatch]);

  const filtered = sortByDate(
    items
    .filter(({soldOut, ticketLink}) => !soldOut && ticketLink)
    .filter((_, i) => i < 5)
  );

  return (
    <Section className='tour'>
      <div className="container">
        <SectionTitle text="Концерты"/>
        {isLoading ? "LOADING" : (
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
