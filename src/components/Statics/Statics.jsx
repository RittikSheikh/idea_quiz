import { useLoaderData } from 'react-router-dom';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from 'recharts';



const Statics = () => {
    const datas = useLoaderData()
    const data = datas.data;
    return (
            <LineChart className='my-[140px]'  width={400} height={350} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey='name' padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey='correct' stroke="#82ca9d" />
        </LineChart>
    );
};

export default Statics;