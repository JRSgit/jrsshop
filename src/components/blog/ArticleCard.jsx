/* eslint-disable react/prop-types */



function ArticleCard({ article, onclick }) {


  return (
    <div
      onClick={() => onclick()}
      className="bg-white shadow-md hover:scale-[1.01] transition-all px-4 py-2 rounded-lg hover:cursor-pointer">
      <img src={`${article.imageUrl}`} alt={article.title} className="mb-2 rounded-lg" />
      <h2 className="text-lg font-semibold">{article.title}</h2>
      <p className="text-gray-600">{article.excerpt}</p>
      <div className="flex justify-end">
        <span className="">{article.auth}</span>
      </div>
    </div>
  );
}

export default ArticleCard;