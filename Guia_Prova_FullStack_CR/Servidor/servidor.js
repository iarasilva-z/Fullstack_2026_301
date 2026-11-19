const express = require('express');
const path = require('path');
const { MongoClient } = require('mongodb');

const app = express();
const PORTA = 3000;
const client = new MongoClient('mongodb://127.0.0.1:27017', { serverSelectionTimeoutMS: 5000 });
const banco = client.db('prova_fullstack');
const registros = banco.collection('registros');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/cadastrar', async (req, res) => {
  const nome = String(req.body.nome || '').trim();
  const categoria = String(req.body.categoria || '').trim();
  const email = String(req.body.email || '').trim();
  const descricao = String(req.body.descricao || '').trim();

  if (!nome || !categoria || !email || !descricao ||
      nome.length > 100 || categoria.length > 60 ||
      email.length > 150 || descricao.length > 1000 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).render('resposta', {
      sucesso: false, mensagem: 'Confira os campos e tente novamente.'
    });
  }

  try {
    await registros.insertOne({ nome, categoria, email, descricao, criadoEm: new Date() });
    return res.redirect('/cadastros?sucesso=1');
  } catch (erro) {
    console.error(erro);
    return res.status(500).render('resposta', {
      sucesso: false, mensagem: 'Erro ao salvar. Verifique se o MongoDB está ligado.'
    });
  }
});

app.get('/cadastros', async (req, res) => {
  const busca = String(req.query.busca || '').trim().slice(0, 100);
  const buscaSegura = busca.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const filtro = busca ? { $or: [
    { nome: { $regex: buscaSegura, $options: 'i' } },
    { categoria: { $regex: buscaSegura, $options: 'i' } }
  ] } : {};

  try {
    const itens = await registros.find(filtro).sort({ criadoEm: -1 }).limit(200).toArray();
    res.render('lista', { itens, busca, sucesso: req.query.sucesso === '1' });
  } catch (erro) {
    console.error(erro);
    res.status(500).render('resposta', {
      sucesso: false, mensagem: 'Erro ao consultar. Verifique o MongoDB.'
    });
  }
});

app.use((req, res) => res.status(404).render('resposta', {
  sucesso: false, mensagem: 'Página não encontrada.'
}));

async function iniciar() {
  try {
    await client.connect();
    await banco.command({ ping: 1 });
    app.listen(PORTA, () => console.log(`Servidor funcionando: http://localhost:${PORTA}`));
  } catch (erro) {
    console.error('Falha na conexão com MongoDB:', erro.message);
    process.exit(1);
  }
}
iniciar();
