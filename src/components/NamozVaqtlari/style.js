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

`;