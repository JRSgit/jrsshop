
import { Link, useParams } from 'react-router-dom';
import { articles } from '../../data/articles'
import { Footer, Header } from '../../pages/FinanceTrakerBlog';


function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto mt-4">
        <div className="flex justify-between mb-2">
          <h1 className="text-2xl font-semibold">{article.title}</h1>
          <Link
            className='text-blue-600 hover:bg-blue-500 p-2 hover:text-white rounded-md transition-all'
            to='/finance' >Voltar</Link>
        </div>
        <img src={`${article.imageUrl}`} alt={article.title} className="mb-4 rounded-lg w-full md:h-[450px] object-cover" />
        <p className='mb-10'>Autor: <strong>{article.auth}</strong></p>
        <p>{article.content}</p>
      </div>
      <Footer />
    </>
  );
}

export default ArticleDetail;
