const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { v4: uuidv4 } = require('uuid');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';
    const styleLoader = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

    return {
        mode: isProduction ? 'production' : 'development',
        entry: './src/main.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isProduction ? '[name].[contenthash].js' : '[name].js',
            publicPath: '/',
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [styleLoader, 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    type: 'asset/resource'
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html'
            }),
            new ESLintPlugin({
                fix: true,
                extensions: ['js', 'ts', 'jsx', 'tsx']
            }),
            ...isProduction
                ? [new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })]
                : []
        ],
        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js'],
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        },
        devServer: {
            static: {
                directory: path.resolve(__dirname, 'public'),
                publicPath: '/'
            },
            compress: true,
            port: 3000,
            hot: true,
            setupMiddlewares: (middlewares, devServer) => {
                const app = devServer.app;

                if (!app) {
                    return middlewares;
                }

                const total = 103;
                const MONTHS = ['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек'];
                const WEEKDAYS = ['вс','пн','вт','ср','чт','пт','сб'];
                const CITIES = [
                    'Москва','Санкт-Петербург','Новосибирск','Екатеринбург','Казань','Нижний Новгород','Челябинск','Самара','Омск','Ростов-на-Дону',
                    'Уфа','Красноярск','Пермь','Воронеж','Волгоград','Краснодар','Саратов','Тюмень','Тольятти','Ижевск'
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
                    const num = ri(2,6);
                    const cargo = [...ALL_CARGO].sort(()=>Math.random()-0.5).slice(0,num);

                    return {
                        id: uuidv4(),
                        image: '/vehicle.jpg',
                        fromCity: pick(CITIES),
                        dateLabel: dateLabel(ri(1,45)),
                        carManufacturer: car.brand,
                        carModel: model,
                        cargoTypes: cargo,
                        cost: ri(400,3000)
                    };
                }

                app.get('/api/trips', (req, res) => {
                    const offset = Math.max(0, parseInt(String(req.query.offset ?? '0'), 10) || 0);
                    const limitReq = Math.max(0, parseInt(String(req.query.limit ?? '10'), 10) || 10);
                    const clamp = Math.max(0, Math.min(limitReq, total - offset));
                    const items = Array.from({ length: clamp }, (_, i) => makeTrip(offset + i + 1));

                    setTimeout(() => {
                        return res.json({ items, total })
                    }, ri(150,450));
                });

                return middlewares;
            }
        },
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        }
    };
};
