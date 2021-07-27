module.exports = {
  async up(db, client) {
    var posts = [
      {
        title: 'Activity at Home',
        body: '<p>Video di bawah merupakan salah satu contoh aktifitas yang dapat dilakukan orangtua bersama anak di luar rumah. Berikut beberapa manfaat bermain outdoor untuk Anak-Anak.</p><p><b>1. Manfaat Fisik</b><br>Manfaat paling nyata yang didapat anak-anak saat melangkah di luar rumah untuk bermain adalah asupan Vitamin D dari sinar matahari. Sejumlah peneliti telah menunjukkan betapa pentingnya bagi anak-anak untuk mengekspos diri mereka ke sinar matahari selama beberapa menit setiap hari.<br></p><p><b>2. Manfaat Mental</b><br>Anak-anak memiliki rasa minder dan malu yang besar, dengan bermain di luar rumah membantu meningkatkan harga diri mereka dengan mengatasi rintangan dan tantangan bertemu dengan banyak orang.<br></p><p><b>3. Keterampilan Sosial<br></b>Bermain di luar rumah (outdoor) itu seperti kerja tim, hal ini dapat memberikan anak-anak kesempatan untuk memiliki teman baru dan berinteraksi dengan mereka. Interaksi ini dapat berupa macam-macam gagasan dan melatih mendengarkan orang lain ataupun menghadapi konflik yang muncul saat bermain.</p><br>',
        video: '/video/activities.mp4',
        video_source: 'https://www.youtube.com/watch?v=aNBaGOLb8n0',
        image: '/images/basket.jpg',
        date: '2021-04-12',
        category: 'Activities Show',
      },
      {
        title: 'Guess the Disney Character',
        body: '<p>Lets try to guessing the character of disney with the video below! <br></p><p>Apakah kamu suka dengan film-film Disneyland? Apa kamu tahu karakter-karakter yang ada? Divideo kali ini mari kita bermain tebak karakter Disneyland! Berapa banyak karakter yang dapat kamu tebak jika hanya melihat siluetnya saja ya? hmm penasaran? mari kita coba tebak bersama-sama.</p>',
        video: '/video/games.mp4',
        video_source: 'https://www.youtube.com/watch?v=pV_uZueItU8',
        image: '/images/lego2.jpg',
        date: '2021-04-12',
        category: 'Games Show',
      },
      {
        title: 'COCOMELON',
        body: '<p>Dimana anak-anak bisa bahagia dan pintar!</p><p>Di Cocomelon, tujuan kami adalah membantu membuat belajar menjadi pengalaman yang menyenangkan dan menyenangkan bagi anak-anak dengan membuat animasi 3D yang indah, lirik yang mendidik, dan musik yang menyentuh kaki.</p><p>Anak-anak akan tertawa, menari, bernyanyi, dan bermain bersama dengan video kami, mempelajari huruf, angka, suara binatang, warna, dan banyak lagi sambil menikmati karakter ramah dan cerita menyenangkan kami.</p><p>Kami juga membuat hidup lebih mudah bagi orang tua yang ingin menghibur anak-anak mereka, memberi Anda ketenangan pikiran bahwa anak-anak Anda menerima konten pendidikan yang berkualitas. Video kami juga memberi Anda kesempatan untuk mengajar dan bermain dengan anak-anak Anda saat Anda berdua menonton!</p><p>Lyrics:</p><p>In the summer the ants were a-working<br>Bringing food to their hill every day<br>While the grasshopper sang in the sunshine<br>On his fiddle, his song he did play.<br></p><p>“Fi-de-di, de-dah-doo, dah-de da-do<br>Fi-de-do, de-da-dee, de-da-day<br>I will sing all the while ‘neath the sunshine!<br>‘Neath the moon, I will dance, I will play!”<br></p><p>In the autumn the ants were still working<br>But the grasshopper still did not care<br>The ants asked “Why don’t you store food for winter?”<br>“When it’s cold, you’ll have no food to spare.”<br></p><p>“Fi-de-di, de-dah-doo, dah-de da-do<br>Fi-de-do, de-da-dee, de-da-day<br>‘Bove us all, there will always be sunshine<br>And there always will be time to play!”<br></p><p>Time went by, and along came the winter<br>And the wind gave a cold icy chill<br>Snow fell down, and there was no more sunshine<br>So the grasshopper went up the hill.<br></p><p>“Fi-de-di, de-dah-doo, dah-de da-do<br>Fi-de-do, de-da-dee, de-da-day<br>I am cold, I am wet, I am hungry<br>And I’m sorry I played the days away.”<br></p><p>In the valley he went to the anthill<br>He was cold, and embarrassed, and sad<br>But the ants told him that he was welcome<br>Then he thanked them and felt really glad!<br></p><p>“Fi-de-di, de-dah-doo, dah-de da-do<br>Fi-de-do, de-da-dee, de-da-day!”<br>And the grasshopper said in future seasons<br>Work comes first, then he’ll have time to play!<br></p>',
        video: '/video/cocomelon.mp4',
        video_source: 'https://www.youtube.com/watch?v=TOTd78ZTDGE',
        image: '/images/musik2.jpg',
        date: '2021-04-12',
        category: 'Music Show',
      },
      {
        title: 'TOY STORY 4',
        body: '<p>Toy Story 4 is a 2019 American computer-animated comedy film produced by Pixar Animation Studios and released by Walt Disney Pictures. It is the fourth installment in Pixar\'s Toy Story series and the sequel to Toy Story 3 (2010). It was directed by Josh Cooley (in his feature directorial debut) from a screenplay by Andrew Stanton and Stephany Folsom; the three also conceived the story alongside John Lasseter, Rashida Jones, Will McCormack, Valerie LaPointe, and Martin Hynes.[1] Tom Hanks, Tim Allen, Annie Potts, Joan Cusack, Don Rickles (via archive recordings),[a] Wallace Shawn, John Ratzenberger, Estelle Harris, Blake Clark, Bonnie Hunt, Jeff Garlin, Kristen Schaal and Timothy Dalton reprise their character roles from the first three films. They are joined by Tony Hale, Keegan-Michael Key, Jordan Peele, Christina Hendricks, Keanu Reeves, and Ally Maki, who voice the new characters.<br></p>',
        video: '/video/toystory.mp4',
        video_source: 'https://www.youtube.com/watch?v=wmiIUN-7qhE',
        image: '/images/cartoon3.jpg',
        date: '2021-04-12',
        category: 'Cartoon Show',
      },
    ];
    db.collection('posts').insertMany(posts, { ordered: true })
  },

  async down(db, client) {
    db.collection('posts').drop();
  }
}
