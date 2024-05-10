import React, { useEffect, useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import './styles/filterCategory.css';

const FilterCategory = ({setProdCategory}) => {

const [categories, getCategories] = useFetch();

useEffect(() => {
const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories';
getCategories(url);
}, []);

const selectOption = useRef();

const handleChange = () => {
  setProdCategory(selectOption.current.value);

}

  return (
  <select className='filter__category' ref={selectOption} onChange={handleChange}>
    <option className='filter__category' value="ewe">All Categories</option>
    {
        categories?.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
        ))
    }
  </select>
  )
}

export default FilterCategory;
