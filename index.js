'use strict';
const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;
const title = 'My favourite footballers'

const myFirstEleven = [
{ URL: 'https://24.p3k.hu/app/uploads/2018/07/gianluigi-buffon-1-1024x576.jpg', name: 'Gianlugi Buffon', description: 'Best keeper of the world.'},
{ URL: 'https://premierleague-static-files.s3.amazonaws.com/premierleague/photo/2018/05/29/969c8df4-7bd5-4883-a199-b02a2b9f2664/2017-12-26T185525Z_996469243_RC17BCDEDCB0_RTRMADP_3_SOCCER-ENGLAND-LIV-SWA.JPG', name: '', description: ''},
{ URL: 'https://the18.com/sites/default/files/styles/feature_image_with_focal/public/feature-images/20170717-the18-image-leonardo-bonucci.jpg', name: '', description: ''},
{ URL: 'https://givemesport.azureedge.net/images/18/01/14/1915caff9e8ed144ba4abd01496c40d6/960.jpg', name: '', description: ''},
{ URL: 'https://premierleague-static-files.s3.amazonaws.com/premierleague/photo/2017/09/06/d0f582b6-9cd6-4db7-a370-4c4b8af3d841/835858580.jpg', name: '', description: ''},
{ URL: 'https://s.hs-data.com/picmon/e1/2JMf_cd2yAk_l.jpg', name: '', description: ''},
{ URL: 'https://www.juvefc.com/wp-content/uploads/2017/11/FBL-ITA-SERIEA-ACMILAN-JUVENTUS-940x627.jpg', name: '', description: ''},
{ URL: 'https://images.performgroup.com/di/library/GOAL/98/f1/luka-modric-croatia-world-cup-11072018_km8a7per9wg11nh28nxjwrfm8.jpg', name: '', description: ''},
{ URL: 'https://images.cdn.fourfourtwo.com/sites/fourfourtwo.com/files/styles/image_landscape/public/paulo-dybala-juventus-vs-real-madrid-champions-league-03062017_19apmqbpyj9o91ix3zgrt9eghw.jpg', name: '', description: ''},
{ URL: 'http://as01.epimg.net/futbol/imagenes/2018/06/06/primera/1528277089_306486_1528277260_noticia_normal.jpg', name: '', description: ''},
{ URL: 'http://dailypost.ng/wp-content/uploads/2018/07/kylian-mbappe_16gxqmbus7z6l1pcw9o89yi4lv.jpg', name: '', description: ''},
]

app.use('/assets', express.static('assets'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', {
        title,
        myFirstEleven,
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on the PORT: ${PORT}`);
});

