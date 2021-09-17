// plus

var plus = document.getElementsByClassName('fa-plus-square');
for (pl of plus) {
    const prix = pl.closest('span').nextElementSibling.innerText;
    var quantity = Number(pl.previousElementSibling.value);
    pl.addEventListener('click', function () {
        var x = Number(event.target.previousElementSibling.value);
        quantity = x + 1;
        this.previousElementSibling.value = quantity;
        this.closest('span').nextElementSibling.innerText = Number(quantity * prix);

       total();
    })
}
// moins

var moins = document.getElementsByClassName('fa-minus-square');
for (min of moins) {
    const prix = min.closest('span').nextElementSibling.innerText;
    var quantity = Number(min.nextElementSibling.value);
    min.addEventListener('click', function () {
        quantity = quantity - 1;
        this.nextElementSibling.value = quantity;
        this.closest('span').nextElementSibling.innerText = Number(quantity * prix);
       if (this.nextElementSibling.value < 1) {
            this.closest('div').parentElement.remove();
        }
        total();
        quantite() ;
    });
}

 // quantité

 function quantite() {
    var ItemQ = document.getElementsByClassName('item').length ;
    document.getElementById('produit').innerText = ItemQ ;

 }
 
//total

 function total() {
       var Total = document.getElementById('tot');
        var itemPrices = document.getElementsByClassName('item-price');       
        var sum = 0;     
        for (var i = 0; i < itemPrices.length; i++) {
            sum = sum + Number(itemPrices[i].innerText);
            Total.innerText = 'Total Achat : ' + sum + ' dt';
        }
        var Item = document.getElementsByClassName('item') ;
        if (Item.length == 0) {
            Total.innerText = 'No Product Selected!'
            // document.getElementById('empty-cart').style.display = "block";
            document.getElementById('qte').style.display = "none" ;
            document.getElementById('prix').style.display = "none" ;
        }
 };

 // j'aime 

var hearts = document.getElementsByClassName('fa-heart');

for (heart of hearts) {
    heart.addEventListener('click', function (e) {
        this.classList.toggle('activated');
    });
};

// suppression

var times = document.getElementsByClassName("fa-times");

for (time of times) {
    time.addEventListener('click', function (e) {
       // this.parentElement.parentElement.removeChild();
        this.parentElement.remove();
       // this.Event.target.closest.remove();
        var deletedElement = (event.target.previousElementSibling)
      //  var deletedElement = (event.target.closest).remove()
        var sum = sum - Number(deletedElement.innerText) ;
        total() ;
        quantite();
    })
}
