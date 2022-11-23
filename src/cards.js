const form = document.querySelector('form');

class data {
  constructor() {
    this.category1 = '';
    this.quantity1 = '';
    this.category2 = '';
    this.quantity2 = '';
    this.category3 = '';
    this.quantity3 = '';
    this.category4 = '';
    this.quantity4 = '';
    this.category5 = '';
    this.quantity5 = '';
    this.url = '';
    this.date = '';
    this.file = '';
  }

  setData() {}
  printData() {
    console.log('Inside the class');
    console.log(this);
  }
}

const formData = new data();

form.addEventListener('submit', event => {
  event.preventDefault();
  // console.log(form.elements);
  formData.category1 = form.elements.category1.value;
  formData.quantity1 = form.elements.quantity1.value;
  formData.category2 = form.elements.category2.value;
  formData.quantity2 = form.elements.quantity2.value;
  formData.category3 = form.elements.category3.value;
  formData.quantity3 = form.elements.quantity3.value;
  formData.category4 = form.elements.category4.value;
  formData.quantity4 = form.elements.quantity4.value;
  formData.category5 = form.elements.category5.value;
  formData.quantity5 = form.elements.quantity5.value;
  formData.url = form.elements.url.value;
  formData.date = form.elements.date.value;
  formData.printData();
});
