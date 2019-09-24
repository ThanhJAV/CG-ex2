function Player(name,age,position,overall,number,salary) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.overall = overall;
    this.number = number;
    this.salary = salary;
    this.set_name = (value) => {
        this.name = value;
    };
    this.get_name = () => {
        return this.name;
    };
    this.set_age = (value) => {
        this.age = value;
    };
    this.get_age = () => {
        return this.age;
    };
    this.set_position = (value) => {
        this.position = value;
    };
    this.get_position = () => {
        return this.position;
    };
    this.set_overall = (value) => {
        this.overall = value;
    };
    this.get_overall = () => {
        return this.overall;
    };
    this.set_number = (value) => {
        this.number = value;
    };
    this.get_number = () => {
        return this.number;
    };
    this.set_salary = (value) => {
        this.salary = value;
    };
    this.get_salary = () => {
        return this.salary;
    };
    this.getDisplay = function() {
        let str = `<h2>Tên cầu thủ: ${this.name}<br>Tuổi cầu thủ: ${this.age}<br>Vị trí: ${this.position}<br>Chỉ số tổng quát: ${this.overall}<br>Số áo: ${this.number}<br>Lương: ${this.salary}</h2>`;
        return str;
    };
}
let arr = [ {name: "Lương Xuân Trường", age: 24, position: "Tiền Vệ", overall: 85, number: 1, salary: 15,},
            {name: "Quế Ngọc Hải", age: 26, position: "Trung Vệ", overall: 86, number: 2, salary: 14,},
            {name: "Nguyễn Quang Hải", age: 22, position: "Tiền Vệ", overall: 85, number: 3, salary: 15,},
            {name: "Nguyễn Công Phượng", age: 24, position: "Tiền Đạo", overall: 85, number: 4, salary: 14,},
            {name: "Phan Văn Đức", age: 23, position: "Tiền Đạo", overall: 85, number: 5, salary: 15,},
            {name: "Nguyễn Văn Toàn", age: 23, position: "Tiền Đạo", overall: 85, number: 6, salary: 15,},
            {name: "Vũ Văn Thanh", age: 23, position: "Hậu Vệ", overall: 80, number: 7, salary: 11,},
            {name: "Đặng Văn Lâm", age: 26, position: "Thủ Môn", overall: 79, number: 8, salary: 8,},
];
let players = [];
for (let i = 0;i<arr.length;i++){
    let player = new Player(arr[i].name,arr[i].age,arr[i].position,arr[i].overall,arr[i].number,arr[i].salary);
    players.push(player);
}