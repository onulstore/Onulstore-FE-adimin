import { useState, useEffect } from 'react';
import axios from 'axios';

const ChainedSelect = ({ setProductInfo }) => {
  //카테고리 조회용
  const [categoryState, setCategoryState] = useState({
    parent: '',
    child: '',
  });
  const [categories, setCategories] = useState();

  const parentCategories = categories?.filter((category) => {
    return category.parent === null;
  });
  const childrenCategories = categories?.filter((category) => {
    return category.parent?.id === categoryState.parent;
  });

  const categoryChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCategoryState((prev) => ({ ...prev, [name]: parseInt(value) }));
    setProductInfo((prev) => ({ ...prev, categoryId: parseInt(value) }));
  };

  const getCategories = async () => {
    const res = await axios({
      url: 'http://onulstore.dlcpop.com/categories',
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiYXV0aCI6IlJPTEVfQURNSU4iLCJleHAiOjE2NjQ1NjAzNzN9.CLkLQBDzKHwPZFOpiTaxExcSTR4ac4m4FoZmmX-DBoiPzSp0cXeD8fzl9ylBKzba1EmpN1bzoFiQ94xz1vjh1g`,
      },
    });

    setCategories(res.data.readAll);
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      <div>카테고리</div>
      <select name="parent" onChange={categoryChangeHandler}>
        {parentCategories?.map((category) => {
          const { id, categoryName } = category;

          return (
            <option key={id} value={id}>
              {categoryName}
            </option>
          );
        })}
      </select>

      <select name="child" onChange={categoryChangeHandler}>
        {childrenCategories?.map((category) => {
          const { id, categoryName } = category;

          return (
            <option key={id} value={id}>
              {categoryName}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default ChainedSelect;
