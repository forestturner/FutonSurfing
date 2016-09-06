const React = require('react');

const _handleChange = (filter, updateFilter) => (
  e => updateFilter(filter, e.currentTarget.value)
)

const FilterForm = ({city, updateFilter}) => (
  <div>
    <span className="filter">Filter results:</span>
    <br/>
    <label>City: </label>
    <input type="string"
           value={city}
           onChange={_handleChange('city', updateFilter)}/>
     <br/>

    />
  </div>
);

export default FilterForm;
