import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

const total = 103;
const MONTHS = ['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек'];
const WEEKDAYS = ['вс','пн','вт','ср','чт','пт','сб'];
const CITIES = [
    'Москва','Санкт-Петербург','Новосибирск','Екатеринбург','Казань','Нижний Новгород',
    'Челябинск','Самара','Омск','Ростов-на-Дону','Уфа','Красноярск','Пермь','Воронеж',
    'Волгоград','Краснодар','Саратов','Тюмень','Тольятти','Ижевск'
];
const CARS = [
    { brand: 'ГАЗ', models: ['Газель','Газель NEXT','Соболь'] },
    { brand: 'Ford', models: ['Transit','Courier'] },
    { brand: 'Mercedes-Benz', models: ['Sprinter','Vito'] },
    { brand: 'Volkswagen', models: ['Crafter','Transporter'] },
    { brand: 'Peugeot', models: ['Boxer','Expert'] },
    { brand: 'Citroën', models: ['Jumper','Jumpy'] }
];
const ALL_CARGO = ['Личные вещи','Стройматериалы','Техника и оборудование','Мебель','Продукты','Бытовая техника','Посылки','Одежда и ткань','Автозапчасти'];

function ri(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(arr) {
    return arr[ri(0, arr.length-1)];
}

function dateLabel(days){
    const d = new Date();
    d.setDate(d.getDate() + days);

    return `${d.getDate()} ${MONTHS[d.getMonth()]}, ${WEEKDAYS[d.getDay()]}`;
}

function makeTrip(){
    const car = pick(CARS);
    const model = pick(car.models);
    const num = ri(2, 6);
    const cargo = [...ALL_CARGO].sort(() => Math.random() - 0.5).slice(0, num);

    return {
        id: uuidv4(),
        image: '/vehicle.jpg',
        fromCity: pick(CITIES),
        dateLabel: dateLabel(ri(1, 45)),
        carManufacturer: car.brand,
        carModel: model,
        cargoTypes: cargo,
        cost: ri(2000, 10000)
    };
}

app.get('/api/trips', (req, res) => {
    const offset = Math.max(0, parseInt(req.query.offset ?? '0', 10) || 0);
    const limitReq = Math.max(0, parseInt(req.query.limit ?? '10', 10) || 10);
    const clamp = Math.max(0, Math.min(limitReq, total - offset));
    const items = Array.from({ length: clamp }, (_, i) => makeTrip(offset + i + 1));

    setTimeout(() => {
        return res.json({ items, total });
    }, ri(150, 550));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
