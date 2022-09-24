import React, { useEffect, useState } from 'react'
import Container from '../../Layout/Container'
import { TableWrapper } from './style';

const NamozVaqtlari = () => {
  const [times, setTimes] = useState([]);
  const date = new Date();

  useEffect(() => {
    fetch('https://islomapi.uz/api/monthly?region=Toshkent&month=9')
      .then((res) => res.json())
      .then((res) => setTimes(res))
  }, [])

  console.log(times);

  return (
    <Container>
      <TableWrapper>
            <table width={'100%'}>
                <thead className='table-head'>
                    <tr>
                        <th>Sentyabr</th>
                        <th>Hafta kuni</th>
                        <th>Tong <span>(Saharlik)</span></th>
                        <th>Quyosh</th>
                        <th>Pеshin</th>
                        <th>Asr</th>
                        <th>Shom <span>(Iftor)</span></th>
                        <th>Xufton</th>
                    </tr>
                </thead>
                <tbody className='table-body'>
                    {times.map((item) => 
                        <tr key={item.day} className={`to-center ${item.weekday.toLowerCase() === 'juma'.toLowerCase() && 'juma'}  ${item.day === date.getDate() && 'active-day'} ${date.getDate() > item.day && 'passive-day'}`}>
                            <td>{item.day}</td>
                            <td>{item.weekday}</td>
                            <td>{item.times?.tong_saharlik}</td>
                            <td>{item.times?.quyosh}</td>
                            <td>{item.times?.peshin}</td>
                            <td>{item.times?.asr}</td>
                            <td>{item.times?.shom_iftor}</td>
                            <td>{item.times?.hufton}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </TableWrapper>
    </Container>
  )
}

export default NamozVaqtlari;