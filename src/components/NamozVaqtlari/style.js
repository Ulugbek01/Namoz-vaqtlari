import styled from "styled-components";

export const TableWrapper = styled.div`

    .table-body td{
        padding: 10px 0;
        color: #212529;
    }

    .active-day td{
        background-color: #1CC465;
        color: #fff;
    }

    .passive-day td{
        color: rgba(0, 0, 0, 0.4);
    }

    .passive-day.juma td {
        color: #85C3A1;
    }

    .juma td{
        color: #0C8744;
        font-weight: bold;
    }

    .saharlik, .iftor {
        font-size: 13px;
        color: #999;
        font-weight: 500;
    }
`;

export const Title = styled.h2`
    font-size: 29px;
    font-weight: 500;
    line-height: 35px;
    color: #007336;
    margin-bottom: 20px;
`;

export const CardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 0;
`;

export const Card = styled.div`
    width: 30%;
    margin: 10px 0;
`;

Card.Title = styled.h2`
    margin-bottom: 16px;
    font-size: 29px;
    font-weight: 500;
    line-height: 35px;
    color: #007336;
`;

Card.Desc = styled.p`
    font-size: 14px;
    color: #212529;
    line-height: 22px;
`;

export const RegionWrapper = styled.div`
    justify-content: space-around;
    margin-bottom: 20px;
    padding: 10px 0;

    .region {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.3);
        line-height: 22px;
        font-weight: 700;
    }

    .active {
        color: #1CC465;
    }
`;

export const MonthsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 15px;
    margin: 10px 0;

    .months p:not(:last-child){
        margin-right: 20px;
    }

    .month {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.3);
        line-height: 22px;
        font-weight: 700;
    }

    .month:hover {
        color: #000;
    }

    .months .active {
        color: #1CC465;
        position: relative;
    }

    .months .active::before {
        width: 0;
        height: 2px;
    }

    .months .active:active::before{
        width: 100%;
        height: 2px;
        background-color: #1CC465;
        position: absolute;
        left: 0;
        bottom: 0;
    }
`;