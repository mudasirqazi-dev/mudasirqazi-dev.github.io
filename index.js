let items = [
    {
        id: 6,
        src: './gifs/amount-range-rules.gif',
        title: 'Amount Styling Rules',
        tech: 'JavaScript, ReactJS',
        date: 'Aug 2019',
        desc: 'I created this React Component, you can set styling rules based on amount ranges. The component will output a single object containing all formatting rules which can easy be used by other components like transactions list etc.',
        uid: 'amount-range-rules'
    },
    {
        id: 5,
        src: './gifs/chartjs-timeline.gif',
        title: 'ChartJS Customizable Timeline',
        tech: 'JavaScript, ChartJS, ReactJS',
        date: 'Aug 2019',
        desc: 'I worked on ChartJS and created customizeable charts in React App. You can set the view to Day,Week,Month and Year. You can also change the tooltip data.',
        uid: 'chartjs-2'
    },
    {
        id: 10,
        src: './gifs/image-store-5.gif',
        title: 'Image Store',
        tech: 'ReactJS, Redux, Firebase, Dropbox API, SPA',
        date: 'Jul 2019',
        desc: 'The project was built on ReactJS with Firebase realtime database. Each picture uploaded to software was uploaded to Firebase Bucket as well as backedup on Dropbox using API.',
        uid: 'image-store-5'
    },
    {
        id: 2,
        src: './gifs/image-store-2.gif',
        title: 'Image Store',
        tech: 'ReactJS, Redux, Firebase, Dropbox API, SPA',
        date: 'Jul 2019',
        desc: 'The project was built on ReactJS with Firebase realtime database. Each picture uploaded to software was uploaded to Firebase Bucket as well as backedup on Dropbox using API.',
        uid: 'image-store-2'
    },
    {
        id: 3,
        src: './gifs/multi-player-game.gif',
        title: 'Multi-player game & Group chat',
        tech: 'JavaScript, Colyseus, PixiJS',
        date: 'Aug 2019',
        desc: 'This is a simple demo of a multi-player game and group chat, developed purly in JavaScript. It uses the Colyseus for networking and PixiJS for canvas manipulation.',
        uid: 'multi-player-game'
    },
    {
        id: 4,
        src: './gifs/chartjs-1.gif',
        title: 'ChartJS Customizable Charts',
        tech: 'JavaScript, ChartJS, ReactJS',
        date: 'Aug 2019',
        desc: 'I worked on ChartJS and created customizeable charts in React App.',
        uid: 'chartjs-1'
    },
    {
        id: 8,
        src: './gifs/image-store-3.gif',
        title: 'Image Store',
        tech: 'ReactJS, Redux, Firebase, Dropbox API, SPA',
        date: 'Jul 2019',
        desc: 'The project was built on ReactJS with Firebase realtime database. Each picture uploaded to software was uploaded to Firebase Bucket as well as backedup on Dropbox using API.',
        uid: 'image-store-3'
    },
    {
        id: 9,
        src: './gifs/image-store-4.gif',
        title: 'Image Store',
        tech: 'ReactJS, Redux, Firebase, Dropbox API, SPA',
        date: 'Jul 2019',
        desc: 'The project was built on ReactJS with Firebase realtime database. Each picture uploaded to software was uploaded to Firebase Bucket as well as backedup on Dropbox using API.',
        uid: 'image-store-4'
    },
    {
        id: 7,
        src: './gifs/date-range-picker.gif',
        title: 'Date Range Picker ReactJS Component',
        tech: 'JavaScript, ReactJS',
        date: 'Aug 2019',
        desc: 'I created this React Component to select a date range.',
        uid: 'amount-range-rules'
    },
    {
        id: 1,
        src: './gifs/image-store-1.gif',
        title: 'Image Store',
        tech: 'ReactJS, Redux, Firebase, Dropbox API, SPA',
        date: 'Jul 2019',
        desc: 'The project was built on ReactJS with Firebase realtime database. Each picture uploaded to software was uploaded to Firebase Bucket as well as backedup on Dropbox using API.',
        uid: 'image-store-1'
    },
];

(function () {
    let html = '';
    items.forEach(item => {
        html += `<img src='${item.src}' class="small-img" onclick="showDetails({selectedItem: this, id: ${item.id}});">`;
    });
    $('#gifs-container').html(html);
    $('#images-count').text(items.length);
})();

function showDetails({
    selectedItem,
    id
}) {
    $('.small-img').removeClass('small-img-selected');
    $(selectedItem).addClass('small-img-selected');

    let item = items.filter(item => item.id === id)[0];
    if (item) {
        $("#big-img").attr('src', item.src);
        $("#item-uid").html(item.uid);
        $("#item-title").html(item.title);

        let techsHtml = '';
        item.tech.split(',').forEach(tech => techsHtml += `<span class="badge badge-pill badge-${getRandomBadge()}">${tech}</span>`);
        $("#item-tech").html(techsHtml);
        $("#item-desc").html(item.desc);
        $("#item-date").html(item.date);
        $('#row-details').show();
    }
}

function hideDetails() {
    $('#row-details').hide();
}

function getRandomBadge() {
    let r = Math.floor(Math.random() * 7);
    switch (r) {
        case 0:
            return "dark";
        case 1:
            return "primary";
        case 2:
            return "secondary";
        case 3:
            return "success";
        case 4:
            return "danger";
        case 5:
            return "warning";
        case 6:
            return "info";
    }
}