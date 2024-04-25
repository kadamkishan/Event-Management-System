import { useCallback, useState } from "react";
import FilterBox from "../../components/FilterBox/FilterBox";
import SearchEventList from "../../components/SerachEventList/SearchEventList";
import Navigation from "../../components/Navigation/Navigation"
import './FilterEvents.css';

const FilterEvents = () => {
   const [selectedCategory, setSelectedCategory] = useState(null);

   const handleCategoryChange = useCallback((category) => {
      setSelectedCategory(category);
   }, []);

   return (
      <div>
         <Navigation />
         <div className="find-events-wrapper">
            <FilterBox handleCategoryChange={handleCategoryChange} />
            <SearchEventList selectedCategory={selectedCategory} />
         </div>
      </div>
   );
}

export default FilterEvents;
