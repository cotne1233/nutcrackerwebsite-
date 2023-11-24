let changing = document.querySelector(".textchanging-header")

let titles = [
    'Explore the websites for sales!',
    'we have nutcrackers that crack nuts!',
    'Free shipping on products over 399$!',
    'our nutcrackers are german!',
    'best gifts for friends or anyone!'
];

function newTitle () {
    let i = (Math.random() * titles.length) | 0;
    changing.innerText = titles[i];
}

newTitle()