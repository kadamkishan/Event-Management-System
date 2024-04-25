import { useState, useEffect } from "react";
import { category } from "../../utils/DataRender";
import "./FilterBox.css";

const FilterBox = ({ handleCategoryChange }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        handleCategoryChange(selectedCategory);
    }, [selectedCategory, handleCategoryChange]);

    const handleCategorySelection = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <div>
            <form className="filter-card">
                <div className="wrapper">
                    <div className="date">
                        <label htmlFor="category">Category : </label>
                        <select
                            value={selectedCategory}
                            onChange={handleCategorySelection}
                        >
                            <option value="">All</option>
                            {category.map((cat, index) => (
                                <option key={index} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FilterBox;
