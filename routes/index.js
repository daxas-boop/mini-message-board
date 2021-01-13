const express = require('express');

const router = express.Router();

const messages = [
  {
    text:
      'Si mala non sunt, iacet omnis ratio Peripateticorum. Quod quidem iam fit etiam in Academia. Polycratem Samium felicem appellabant. Si quae forte-possumus. Unum est sine dolore esse, alterum cum voluptate. Beatus sibi videtur esse moriens.',
    user: 'Amando',
    added: new Date(),
  },
  {
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non est ista, inquam, Piso, magna dissensio. Bonum incolumis acies: misera caecitas. Pauca mutat vel plura sane; Idemne potest esse dies saepius, qui semel fuit? Certe non potest. Duo Reges: constructio interrete.',
    user: 'Charles',
    added: new Date(),
  },
];

router.get('/', (req, res) => {
  res.render('index', { messages });
});

router.get('/new', (req, res) => {
  res.render('form');
});

router.post('/new', (req, res) => {
  const messageText = req.body.message;
  const messageUser = req.body.author;
  messages.unshift({ text: messageText, user: messageUser, added: new Date() });
  res.redirect('/');
});

module.exports = router;
