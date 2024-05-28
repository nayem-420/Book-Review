import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { getStoredBookStorage } from "../Utility/localStorage";


const getPath = (x, y, width, height) => (
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
   Z`
);

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const ReadPages = () => {
  const books = useLoaderData();
  const [booksStored, setBooksStored] = useState([]);

  useEffect(() => {
    const storedBookIds = getStoredBookStorage('readBooks') || [];
    const storedBooks = books.filter(book => storedBookIds.includes(book.bookId));
    setBooksStored(storedBooks);
  }, [books]);

  const data = booksStored.map(book => ({
    name: book.bookName,
    totalPages: book.totalPages
  }));

  return (
    <div>
      <h3>Pages of Read Books</h3>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} />
      </BarChart>
    </div>
  );
};

export default ReadPages;