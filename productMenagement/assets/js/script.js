class Category {
  constructor(CategoryName) {
    this.CategoryName = CategoryName;
    this.Products = [];
  }
  addProduct(Product) {
    //Categoryden aldığı productı liste gönderir
    this.Products.push(Product);
  }
  delete(ProductName) {
    this.Products = this.Products.filter((Name) => Name !== ProductName); //Listeden çıkarır tekrar Liste oluşturup oraya aktarır
    // this.Products=this.Products.splice(this.Products[1],1);
  }
}
const CategoryList = [];

function addCategory() {
  const CategoryName = document.getElementById("CategoryName").value;

  if (!CategoryName) {
    alert("Category Name Can Not Be Empty");
    return;
  }
  if (CategoryList.some((category) => category.CategoryName == CategoryName)) {
    alert("Category AlReady Exists");
    return;
  }

  const category = new Category(CategoryName);
  CategoryList.push(category);
  document.getElementById("CategoryName").value = ""; //Formun içini boşaltır
  document.getElementById("CategoryName").focus; //işlem bittikten sonra imleç orda kalsın
  categoryUpdate(); //her bir category eklendiğinde category refresh olacak
}

function categoryUpdate() {
  //Select Category Update
  const selectCategory = document.getElementById("SelectCategory");

  selectCategory.innerHTML = `<option disabled value selected>
  -- Select Category --
</option>`;

  CategoryList.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.CategoryName;
    option.innerHTML = category.CategoryName;

    selectCategory.add(option);
  });
}

document.getElementById("addCategory").addEventListener("click", (e) => {
  e.preventDefault();
  addCategory();
});

document.getElementById("addProduct").addEventListener("click", (e) => {
  e.preventDefault();
  addProduct();
});

categoryUpdate(); //İlk açıldığında update işlemini başlatsın
