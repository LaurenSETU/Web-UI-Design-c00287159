window.onload= function(){
    alert('Hello Farmer! Ready to learn some things about the wonderful world of stardew?');
    };

    function openUpdate(){
        window.open('https://www.youtube.com/watch?v=LjLrUsMKc8w', 'newUpdate', 'width=800,height=600');
    };

    function redirectToWebsite(){
        window.location.href = "https://www.stardewvalley.net/author/concernedape/";
    };

    document.querySelector('.button').addEventListener('mouseover',function(){
        this.style.backgroundColor='lightblue';
    });
    document.querySelector('.button').addEventListener('mouseout',function(){
        this.style.backgroundColor='';
    });

