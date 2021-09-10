//Сколько времени потребуется для нагревания в электрочайнике
let Kettle = function() {
    this.get = function() {
        this.specificHeatOfWater = 4200,//удельная теплоемкость воды
        this.density = 1,//плотность воды
        this.amountOfWater = +prompt('Введите колличество воды в чайнике, л.'),//Объем Воды
        this.temperature2 = 100,
        this.temperature1 = +prompt('Введите температуру воды в чайнике, °С'),
        this.voltage = 220, 
        this.amperage = 5//сила тока

    if (confirm('Включить чайник?')) {
        this.workTime = +prompt('');
    } else {
         this.workTime = 0;
        };

        this.operation();
     };

    this.operation = function() {
        this.result = this.specificHeatOfWater * this.density * this.amountOfWater * (this.temperature2 - this.temperature1)/(this.voltage * this.amperage),//t=c*ρ*V* (T2-T1)/( U*I)=4200*1*2*80/(220*5)=611c = 6 мин 11 с.
        this.show();
    };

    this.show = function() {
        if (this.workTime == 0 || this.workTime == undefined) {
            console.log('Чайник не включен');
        } else {
            console.log('Чайник проработал ' + this.result + 'Вода закипела. Можно пить чай.');
    };
};

let kettle = new Kettle();
kettle.get(); 
