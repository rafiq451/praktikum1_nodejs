const fruits = require('./fruits.js');
const data = () => {
  console.log(`-----semua data-----`);
};
// fungsi index untuk menampilkan data
const index = () => {
  for (const fruit of fruits) {
    console.log(fruit);
  }
};

const tambah = () => {
  console.log(`----menambah data-----`);
};
// fungsi store untuk menambah data
const store = (name) => {
  fruits.push(name);
  index();
};

const ubah = () => {
  console.log(`----update data-----`);
};
// fungsi update untuk merubah data
const update = (position, name) => {
  fruits[position] = name;
  index();
};

const hapus = () => {
  console.log(`----hapus data-----`);
};
// fungsi destroy untuk menghapus data
const destroy = (position) => {
  // method shift() untuk menghapus data awal pada array
  fruits.shift(position);
  index();
};
module.exports = { data, tambah, ubah, hapus, index, store, update, destroy };
