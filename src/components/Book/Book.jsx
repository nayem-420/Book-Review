import { CiStar } from "react-icons/ci";


const Book = ({ book }) => {
    const { image, tags, bookName, author, category, rating } = book;
  
    return (
      <div className="border rounded-lg p-4">
        <div className="flex justify-center mb-4">
          <img className="w-28" src={image} alt="" />
        </div>
        <div>
          {tags.map((tag, index) => (
            <span key={index} className="inline-block rounded-md p-1 m-1 bg-gray-400 text-green-400">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-bold text-2xl mt-4">{bookName}</h3>
        <p className="border-b pb-2">By: {author}</p>
        <div className="flex justify-between mt-2">
          <p>{category}</p>
          <p className="flex items-center gap-2">{rating}<CiStar /></p>
        </div>
      </div>
    );
  };
  
  export default Book;
  