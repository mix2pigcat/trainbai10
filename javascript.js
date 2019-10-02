let a=parseInt(prompt('Nhap so dien tieu dung (trieu vnd) :'));
let b=parseInt(prompt('Moi so dien co gia la (kw) :'));
electricbill=(a*b);
if (electricbill<15){
    alert('moi ban dong qua chuyen khoan voi so tien :'+electricbill);
}else if (electricbill<10){
    alert('se co nhan vien qua thu tien voi so tien :'+electricbill);
}else {
    alert('Moi ban ra dong tien'+electricbill);
}