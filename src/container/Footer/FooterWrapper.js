import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
width: 100%;
background-color: #2C2C2C;
color: #dedede;

ul{
    list-style-type: none;
    display: flex;
    white-space: nowrap;
    flex-wrap: wrap;

    li{
        margin: 0 10px;
    }
}

.dropDown{
    position: relative;
    width: 120px;

    .btns{
        position: absolute;
    }
}
`

export default FooterWrapper;