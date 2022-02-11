import styled from 'styled-components';

const CardWrapper = styled.div`
border-radius: 10px;
box-shadow: 0 4px 20px hsl(0deg 0% 90% / 65%);
overflow: hidden;
padding: 0;
transition: 0.2s;

&:hover{
    transform: translateY(-8px);

    .img-overlay{
        transform: translateY(-100%)
    }    

}

.img{
    position: relative;
    overflow: hidden;
}

img{
    object-fit: cover;
    width: 100%;
    height: 200px;
}

h5{
    font-size: 22px;
    font-weight: 700;
}

.fs-13{
    font-size: 13px;
    font-weight: 400;
}

.img-overlay{
    position: absolute;
    bottom: -56px;
    left: 0;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    text-align: end;
    transition: 0.2s;

    .btn{
        padding: 5px;
    }
}

`

export default CardWrapper;