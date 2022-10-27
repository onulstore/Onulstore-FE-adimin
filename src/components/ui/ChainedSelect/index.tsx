import { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import * as S from './style';
const ChainedSelect = ({ setItemInfo, pCategoryId, categoryId }: any) => {
  //카테고리 조회용
  const [cookies] = useCookies();
  const [categoryState, setCategoryState] = useState({
    parent: 0,
    child: 0,
  });

  useEffect(() => {
    (pCategoryId || categoryId) &&
      setCategoryState({
        parent: pCategoryId,
        child: categoryId,
      });
  }, [pCategoryId, categoryId]);

  console.log('categoryState', categoryState);
  const [categories, setCategories] = useState();
  const parentCategories = (categories as any)?.filter((category: any) => {
    return category.parent === null;
  });
  const childrenCategories = (categories as any)?.filter((category: any) => {
    return category.parent?.id === categoryState.parent;
  });

  const categoryChangeHandler = (e: any) => {
    const { name, value } = e.target;
    setCategoryState((prev) => ({ ...prev, [name]: parseInt(value) }));

    setItemInfo((prev: any) => ({ ...prev, categoryId: parseInt(value) }));
  };

  const getCategories = async () => {
    const res = await axios({
      url: 'https://onulstore.breon.ml/categories',
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${cookies.accessToken}`,
      },
    });
    setCategories(res.data.findAllCategory);
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <S.Container>
      <div className="first">
        <div className="first-label">1차 카테고리</div>
        <select name="parent" onChange={categoryChangeHandler} value={categoryState.parent}>
          <option>1차 카테고리 선택</option>

          {parentCategories?.map((category: any) => {
            const { id, categoryName } = category;

            return (
              <option key={id} value={id}>
                {categoryName}
              </option>
            );
          })}
        </select>
      </div>
      <div className="second">
        <div className="second-label">2차 카테고리</div>
        <select name="child" onChange={categoryChangeHandler} value={categoryState.child}>
          <option>2차 카테고리 선택</option>

          {childrenCategories?.map((category: any) => {
            const { id, categoryName } = category;

            return (
              <option key={id} value={id}>
                {categoryName}
              </option>
            );
          })}
        </select>
      </div>
    </S.Container>
  );
};

export default ChainedSelect;
