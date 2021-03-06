const r = require('./models').r
const User = require('./models').User
const Product = require('./models').Product
const process = require('process')

r.db('betaprod').table('User').delete().run().
then(() => r.db('betaprod').table('Product').delete().run()).
then(() => User.save({
        firstName:'Doron',
        lastName: 'Somech',
        email:'doron.somech@gmail.com',
        provider:'facebook',
        providerId: '10153767634642935',
        photo: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/' +
                'c15.0.50.50/p50x50/1898277_10152087626002935_1784615372_n.jpg?' +
                'oh=2f810b7e1581100b41b014904f94981c&oe=577BB0E6&__gda__=' +
                '1467753118_6de4d49eef388f505aa5e1da5cef22c8'
    })).
then(user =>
    Product.save({
        userId: user.id,
        name:'betaprod',
        imageUrl:'https://pixabay.com/static/uploads/photo/2015/01/08/18/27/startup-593341_960_720.jpg',
        description:'Lorem ipsum dolor sit amet, duo nullam labore albucius ut, ' +
        'suscipit voluptua te nec. Eum no invenire interesset consectetuer, ' +
        'no sed illud commune accusata. Tacimates suavitate has at, option indoctum ' +
        'vituperatoribus eam cu. Et quo quando perfecto scriptorem, mutat choro utinam' +
        ' vis ex. Vivendo omittam ad per. Aliquid argumentum vix id, nihil alterum ' +
        'consequuntur id eum.' +
        'Ut esse mazim nihil pri, ut causae alterum has.' +
        'Nam veniam theophrastus ne, id nec soleat alterum. His ' +
        'solum facilisis quaerendum ei, eos ei tollit suscipiantur.' +
        ' Cum prima aliquip iracundia ex. Quo ea ullum timeam sapientem.' +
        ' Justo iudicabit vituperatoribus id eam, odio congue minimum te quo.',
        website:'http://betaprod.co',
        createdAt: (new Date).getTime()
    })).
then(() => {
    console.log('all done')
    process.exit()
})