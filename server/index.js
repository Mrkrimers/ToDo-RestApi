require(`dotenv`).config();
const app = require('./src/app');

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.info(`╭───────────────────────────────────────────────────╮`);
    console.info(`│                                                   │`);
    console.info(`│            App listening at port ${PORT}!            │`);
    console.info(`│                                                   │`);
    console.info(`╰───────────────────────────────────────────────────╯`);
})