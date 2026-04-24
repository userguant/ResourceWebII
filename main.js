const data = {
  msn: {
    title: 'MSN Messenger',
    desc1: 'MSN Messenger was a popular instant messaging application widely used in the early 2000s. It allowed users to chat with friends, send emojis, and share files. Famous for its "nudge" feature — a screen-shaking animation used to get someone\'s attention — and its library of custom emoticons.',
    desc2: 'At its peak, MSN Messenger had over 330 million active users. It was replaced by Skype in 2013.',
    tags: ['#Messaging', '#Windows', '#Microsoft', '#2000s'],
    year: '1999', platform: 'Windows', category: 'Messaging',
    source: 'https://en.wikipedia.org/wiki/Windows_Live_Messenger'
  },
  geo: {
    title: 'GeoCities',
    desc1: 'GeoCities was a web hosting service that allowed users to create free personal websites. It was one of the most visited websites in the late 1990s, known for its colorful, chaotic pages full of animated GIFs and MIDI music.',
    desc2: 'At its peak GeoCities had millions of user-created pages. Yahoo acquired it in 1999 and shut it down in 2009.',
    tags: ['#Social', '#Web', '#Yahoo', '#1990s'],
    year: '1994', platform: 'Web', category: 'Social',
    source: 'https://en.wikipedia.org/wiki/GeoCities'
  },
  neo: {
    title: 'Neopets',
    desc1: 'Neopets is a virtual pet website where users adopt and care for digital creatures called Neopets. Players earn in-game currency called Neopoints by playing games, and can use them to buy items, food, and accessories for their pets.',
    desc2: 'Launched in 1999, Neopets became a defining part of early 2000s internet culture, particularly for young users.',
    tags: ['#Games', '#Web', '#VirtualPets', '#2000s'],
    year: '1999', platform: 'Web', category: 'Games',
    source: 'https://en.wikipedia.org/wiki/Neopets'
  }
};

function showDetail(key) {
  const d = data[key];
  document.getElementById('detail-title').textContent = d.title;
  document.getElementById('detail-desc1').textContent = d.desc1;
  document.getElementById('detail-desc2').textContent = d.desc2;
  document.getElementById('detail-year').textContent = d.year;
  document.getElementById('detail-platform').textContent = d.platform;
  document.getElementById('detail-category').textContent = d.category;
  const tagsEl = document.getElementById('detail-tags');
  tagsEl.innerHTML = d.tags.map(t => `<span class="detail-tag">${t}</span>`).join('');
  document.querySelector('.detail-link').href = d.source;
  const detail = document.getElementById('detail');
  detail.classList.add('visible');
  detail.scrollIntoView({ behavior: 'smooth' });
}

function filterCards(btn, tag) {
  document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.card').forEach(card => {
    card.style.display = (tag === 'all' || card.dataset.tags.includes(tag)) ? '' : 'none';
  });
}
