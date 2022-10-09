import { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const ChainedSelect = ({ setProductInfo }) => {
  //카테고리 조회용
  const [cookies] = useCookies;
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
        Authorization: `Bearer ${cookies.accessToken}`,
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
      <div>1차 카테고리</div>
      <select name="parent" onChange={categoryChangeHandler}>
        <option>카테고리 선택</option>

        {parentCategories?.map((category) => {
          const { id, categoryName } = category;

          return (
            <option key={id} value={id}>
              {categoryName}
            </option>
          );
        })}
      </select>
      <div>2차 카테고리</div>
      <select name="child" onChange={categoryChangeHandler}>
        <option>카테고리 선택</option>

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
