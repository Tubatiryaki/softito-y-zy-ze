class Category {
  constructor(categoryName) {
    this.categoryName = categoryName;
    this.Products = []; //bir category nin birden fazla ürünü var birden çoga ilişkisi
  }
  addProduct(Product) {
    this.Products.push(Product);
  }
}
class Product {
  constructor(Name, Price, Stock) {
    this.Name = Name;
    this.Price = Price;
    this.Stock = Stock;
  }
}
const electronik = new Category("Electronik");
let number = 0;

function proccess() {
  const electronik = new Category("Electronik");

  const telefon = new Product("Telefon", 45000, 15);
  const bilgisayar = new Product("Macintosh", 42000, 10);

  electronik.addProduct(telefon);
  electronik.addProduct(bilgisayar);

  document.getElementById("categoryName").innerText = electronik.categoryName;

  let result = "";

  electronik.Products.forEach((product) => {
    number++;
    result += `<tr>
      <td>${number}</td>
      <td>${product.Name}</td> 
      <td>${product.Price}</td> 
      <td>${product.Stock}</td> 
</tr>`;
  });
  document.getElementById("productList").innerHTML = result;
}

function productEkle() {
  const productName = document.getElementById("productName").value;
  const productPrice = document.getElementById("productPrice").value;
  const productStock = document.getElementById("productStock").value;

  const tablet = new Product(productName, productPrice, productStock);
  electronik.addProduct(tablet);

  electronik.Products.forEach((tablet) => {
    number++;
    document.getElementById("productList").innerHTML += `<tr>
    <td>${number}</td>
    <td>${tablet.Name}</td>
    <td>${tablet.Price}</td>
    <td>${tablet.Stock}</td>
    </tr>`;
  });
}
