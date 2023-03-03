//Class
class user {
  constructor(name, age) {
    //class ilk çağrıldığında ne yapacagını belirlemek için kullanılır
    this.name = name; //this bu nesneye ait demek
    this.age = age;
  }
  getUser() {
    console.log(`Name=${this.name} Age=${this.age}`); // constructordan gelen değerlerle çalışır
  }
}

function getUser() {
  const gu1 = new user("Erhan", 33);
  const gu2 = new user("Berk ", 27);

  gu1.getUser();
  gu2.getUser();
}
