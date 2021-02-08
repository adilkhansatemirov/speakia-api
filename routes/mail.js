const express = require('express');
const router = express.Router();

const mailjet = require('node-mailjet').connect('05b5666055bbf6dfe42636ff494e1f8e', '7d062374300e5e363c4e1efb32ae61a6');

router.get('/', (req, res) => {
  res.send('Hello world');
});

router.post('/', async (req, res) => {
  const request = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: 'adilkhansatemirov@gmail.com',
          Name: 'Adilkhan',
        },
        To: [
          {
            Email: '170103156@stu.sdu.edu.kz',
            Name: 'Adilkhan',
          },
        ],
        Subject: 'Greetings from Mailjet.',
        TextPart: 'My first Mailjet email',
        HTMLPart:
          "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
        CustomID: 'AppGettingStartedTest',
      },
    ],
  });

  request
    .then((result) => {
      console.log(result.body);
    })
    .catch((err) => {
      console.log(err.statusCode);
    });

  res.json({ nice: req.body });
});

module.exports = router;
