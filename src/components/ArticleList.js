import Article from './Article'

function ArticleList({articles}) {

  const articleArray = articles.map(article => <Article article={article} key={article.id} />)
  return (
    <div>
      {articleArray}
    </div>
   )
  }

export default ArticleList