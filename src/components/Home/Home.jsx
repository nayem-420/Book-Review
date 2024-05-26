import image from "../../assets/book.png";
import Books from "../Books/Books";

const Home = () => {
  return (
    <div>
      <div className="mt-12 p-11 border card card-side bg-base-100 rounded-xl shadow-xl flex flex-col md:flex-row-reverse">
        <figure className="flex justify-center md:justify-start">
          <img className="w-80" src={image} alt="Books" />
        </figure>
        <div className="card-body flex flex-col justify-center">
          <h2 className="card-title text-6xl mb-12">
            Books to freshen up your bookshelf
          </h2>
          <div className="card-actions">
            <button className="btn btn-success">View The List</button>
          </div>
        </div>
      </div>
      <Books></Books>
    </div>
  );
};

export default Home;
