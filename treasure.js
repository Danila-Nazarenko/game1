const getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};
const width = 800;
const height = 800;
let clicks = 0;
const clicklimit = 40;
const target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};
const getDistance = function (event, target){
    const diffX = event.offsetX - target.x;
    const diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};
const getDistanceHint = function (distance){
    if (distance < 50){
        return "Обожжешься! Количество оставшихся кликов:"+clicks+"/"+clicklimit;
    }
    else if (distance < 100){
        return "Очень очень горячо Количество оставшихся кликов:"+clicks+"/"+clicklimit;
    }
    else if (distance < 150){
        return "Очень горячо Количество оставшихся кликов:"+clicks+"/"+clicklimit;
    }
    else if (distance < 200){
        return "Горячо Количество оставшихся кликов:"+clicks+"/"+clicklimit;
    }
    else if (distance < 300){
        return "Тепло Количество оставшихся кликов:"+clicks+"/"+clicklimit;
    }
    else if (distance < 400) {
        return "Прохладно Количество оставшихся кликов:"+clicks+"/"+clicklimit;
    }
    else if (distance < 500){
        return "Холодно Количество оставшихся кликов:"+clicks+"/"+clicklimit;
    }
    else if (distance < 600){
        return "Очень холодно Количество оставшихся кликов:"+clicks+"/"+clicklimit;
    }
    else if (distance < 700){
        return "Очень очень холодно Количество оставшихся кликов:"+clicks+"/"+clicklimit;
    }
    else {
        return "Замерзнешь! Количество оставшихся кликов:"+clicks+"/"+clicklimit;
    }
};
$('#map').click(function (event){
    clicks++;
    const distance = getDistance(event, target);
    const distanceHint = getDistanceHint(distance);
    $('#distance').text(distanceHint);
    if (distance < 20){
        alert("Клад найден за " + clicks+" кликов");
    }
    if (clicks>clicklimit){
        alert("Конец игры!");
    }

});
