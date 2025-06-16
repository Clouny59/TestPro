import express from 'express';
import clients from './routes/clients';
import invoices from './routes/invoices';
import quotes from './routes/quotes';

const app = express();
app.use(express.json());

app.use('/api/clients', clients);
app.use('/api/invoices', invoices);
app.use('/api/quotes', quotes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
