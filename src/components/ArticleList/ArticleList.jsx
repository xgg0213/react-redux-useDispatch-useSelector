import {useDispatch, useSelector} from 'react-redux';
import { loadArticles } from '../../store/articleReducer'; 
import { NavLink } from 'react-router-dom';
import { useEffect} from 'react';

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector(state => state.articleState.entries);

  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch])

  return (
    <div>
      <h1>Article List</h1>
      <ol>
        {articles.map(({ id, title }) => (
          <li key={id}><NavLink to={`${id}`}>{title}</NavLink></li>
        ))}
      </ol>
    </div>
  );
};

export default ArticleList;
