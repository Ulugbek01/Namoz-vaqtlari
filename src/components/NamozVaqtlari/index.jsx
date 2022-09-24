import React, { useEffect, useState } from 'react'
import Container from '../../Layout/Container'
import { cards } from '../../utils/cards';
import { months } from '../../utils/months';
import { regions } from '../../utils/regions';
import { Card, CardsWrapper, MonthsWrapper, RegionWrapper, TableWrapper, Title } from './style';

const NamozVaqtlari = () => {
  const date = new Date();
  const [times, setTimes] = useState([]);
  const [month, setMonth] = useState({
    monthOrder: date.getMonth() + 1,
    monthName: 'Sentyabr'
  });
  const [region, setRegion] = useState('Toshkent');

  useEffect(() => {
    fetch(`https://islomapi.uz/api/monthly?region=${region}&month=${month.monthOrder}`)
      .then((res) => res.json())
      .then((res) => setTimes(res))
  }, [month.monthOrder, region])
  
  return (
    <Container>
      <CardsWrapper>
          {cards.map((card) => 
            <Card key={card.id}>
              <Card.Title>{card.title}</Card.Title>
              <Card.Desc>{card.desc}</Card.Desc>
            </Card>
          )}
      </CardsWrapper>
      <Title className='to-center title'>{`Namoz vaqtlari ${region} vaqti boʻyicha`}</Title>
      <RegionWrapper className='flex-box'>
        {regions.map((item) => 
          <p className={`c-pointer region ${item.name === region && 'active'}`} key={item.id} onClick={()=> setRegion(item.name)}>{item.name}</p>
        )}
      </RegionWrapper>

      <MonthsWrapper>
        <div>{date.getDate()}-{month.monthName}</div>
        <div className='flex-box months'>{months.map((item) => 
          <p className={`month c-pointer ${month.monthOrder === item.id && 'active'}`} key={item.id} onClick={() => setMonth({monthOrder: item.id, monthName: item.month})}>{item.month}</p>
        )}</div>    
      </MonthsWrapper>      

      <TableWrapper>
            <table width={'100%'}>
                <thead className='table-head'>
                    <tr>
                        <th>Sentyabr</th>
                        <th>Hafta kuni</th>
                        <th>Tong <span className='saharlik'>(Saharlik)</span></th>
                        <th>Quyosh</th>
                        <th>Pеshin</th>
                        <th>Asr</th>
                        <th>Shom <span className='iftor'>(Iftor)</span></th>
                        <th>Xufton</th>
                    </tr>
                </thead>
                <tbody className='table-body'>
                    {times.map((item) => 
                        <tr key={item.day} className={`to-center ${item.weekday?.toLowerCase() === 'juma'.toLowerCase() && 'juma'}  ${item.day === date.getDate() && 'active-day'} ${date.getDate() > item.day && 'passive-day'}`}>
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