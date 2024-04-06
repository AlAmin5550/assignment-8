import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getLocalStorageDataOfReadList } from '../../Utility/localStorage';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const Pages = () => {
    const books = useLoaderData();
    const stringStoredReadList = getLocalStorageDataOfReadList();
    const storedReadList = stringStoredReadList.map(function (x) {
        return parseInt(x, 10);
    });
    const readList = [];
    for (const book of books) {
        if (storedReadList.includes(book.bookId)) {
            readList.push(book);
        }
    };
    console.log(readList)

    return (
        <div>
            <BarChart
                width={900}
                height={500}
                data={readList}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {readList.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};
Pages.demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-shape-dusth';

export default Pages;